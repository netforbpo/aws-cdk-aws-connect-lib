import * as path from 'path';
import {
  Annotations,
  custom_resources as cr,
  aws_connect as connect,
  aws_lambda as lambda,
  aws_lex as lex,
  aws_logs as logs,
  aws_iam as iam,
  ContextProvider, CustomResource, Duration,
  IResource, RemovalPolicy,
  Resource, ResourceProps,
  Token,
  ValidationError, Fn,
} from 'aws-cdk-lib';
import * as cxschema from 'aws-cdk-lib/cloud-assembly-schema';
import { Construct } from 'constructs';
import { StorageConfig, StorageResourceType } from './storage_config';

export enum IdentityManagementType {
  SAML = 'SAML',
  CONNECT_MANAGED = 'CONNECT_MANAGED',
  EXISTING_DIRECTORY = 'EXISTING_DIRECTORY',
}

/**
 * All other config props
 */
export interface OtherConfigProps {
  /**
   * Whether contact flow logs are enabled. (CONTACTFLOW_LOGS)
   */
  readonly contactflowLogs?: boolean;
  /**
   * Whether contact lens is enabled. (CONTACT_LENS)
   */
  readonly contactLens?: boolean;
  /**
   * Whether enhanced chat monitoring is enabled. (ENHANCED_CHAT_MONITORING)
   */
  readonly enhancedChatMonitoring?: boolean;
  /**
   * Whether high volume outbound is enabled. (HIGH_VOLUME_OUTBOUND)
   */
  readonly highVolumeOutBound?: boolean;
  /**
   * Whether enhanced contact monitoring is enabled. (ENHANCED_CONTACT_MONITORING)
   */
  readonly enhancedContactMonitoring?: boolean;
}

export interface TelephonyConfigProps {
  /**
   * Whether early media is enabled (EARLY_MEDIA)
   */
  readonly earlyMediaEnabled?: boolean;
  /**
   * Whether inbound calls are allowed. (INBOUND_CALLS)
   */
  readonly inboundCalls: boolean;
  /**
   * Whether multi party chat is enabled. (MULTI_PARTY_CHAT_CONFERENCE)
   */
  readonly multiPartyChatConference?: boolean;
  /**
   * Whether multi party conference is enabled. (MULTI_PARTY_CONFERENCE)
   */
  readonly multiPartyConference?: boolean;
  /**
   * Whether outbound calls are allowed. (OUTBOUND_CALLS)
   */
  readonly outboundCalls: boolean;
}

export interface PollyConfigProps {
  /**
   * Whether to automatically resolve best voices. (AUTO_RESOLVE_BEST_VOICES)
   */
  readonly autoResolveBestVoices?: boolean;
  /**
   * Whether useCustomTtsVoices is enabled (USE_CUSTOM_TTS_VOICES)
   */
  readonly useCustomTtsVoices?: boolean;
}

export interface InstanceProps {
  /**
   * The identity type for this instance.
   */
  readonly identityType: IdentityManagementType;
  /**
   * The instance alias, required when identityType is set to CONNECT_MANAGED or SAML.
   */
  readonly instanceAlias?: string;
  /**
   * The identifier of a simpleAD or Microsoft AD (^d-[0-9a-f]{10}$), required when identityType is set to EXISTING_DIRECTORY.
   */
  readonly directoryId?: string;
  /**
   * Telephony properties.  Required (due to required setting of inbound & outbound call configuration)
   */
  readonly telephonyConfig: TelephonyConfigProps;
  /**
   * Polly configuration settings
   */
  readonly pollyConfig?: PollyConfigProps;
  /**
   * Other configuration settings
   */
  readonly otherConfig?: OtherConfigProps;
  /**
   * Define any other instance attribute config here.
   *
   * currently that list is the following:
   *
   * AUTOMATED_INTERACTION_LOG
   * BOT_MANAGEMENT
   * ENABLE_BOT_ANALYTICS_AND_TRANSCRIPTS
   * FORECASTING_PLANNING_SCHEDULING
   * MAX_PACKAGE
   * MESSAGE_STREAMING
   */
  readonly customAttributes?: Record<string, boolean>;
  /**
   * Storage configurations (can also use addStorageConfig() to add configs later)
   */
  readonly storageConfigs?: StorageConfig[];
  /**
   * Set the removal policy for the instance. the default is RemovalPolicy.DESTROY.
   */
  readonly removalPolicy?: RemovalPolicy;
}

export interface IInstance extends IResource {
  /**
   * The ARN of the instance.
   */
  readonly instanceArn: string;
  /**
   * The instance identifier.
   */
  readonly instanceId: string;
  /**
   * The instance name.  May not always be available
   */
  readonly instanceName?: string;

  addStorageConfig(config: StorageConfig, id: string | undefined): void;

  associateLambdaFunction(id: string, func: lambda.IFunction): void;

  associateLexBot(id: string, bot: lex.IBotAliasRef): void;
}

export interface InstanceLookupOptions {
  /**
   * the ID of the connect instance
   */
  readonly instanceId?: string;
  /**
   * The connect instance name
   */
  readonly instanceName?: string;
  /**
   * The instance Arn
   */
  readonly instanceArn?: string;
}

abstract class InstanceBase extends Resource implements IInstance {
  public abstract readonly instanceArn: string;
  public abstract readonly instanceId: string;
  public abstract readonly instanceName?: string;

  private storageResourceTypes: Set<StorageResourceType> = new Set();
  private readonly removalPolicy?: RemovalPolicy;

  protected constructor(scope: Construct, id: string, props?: ResourceProps, removalPolicy?: RemovalPolicy) {
    super(scope, id, props);
    this.removalPolicy = removalPolicy;
  }

  addStorageConfig(config: StorageConfig, id: string | undefined = undefined) {
    if (this.storageResourceTypes.has(config.resourceType)) {
      Annotations.of(this).addError(`Duplicate resourceType ${config.resourceType} in storageConfig`);
      return;
    }
    if (!config.checkConfig()) {
      Annotations.of(this).addError(`Invalid storage configuration for resourceType ${config.resourceType} and storageType ${config.storageType}`);
      return;
    }
    this.storageResourceTypes.add(config.resourceType);
    const storage = new connect.CfnInstanceStorageConfig(this, id || `StorageConfig-${config.resourceType}`, config.asStorageConfigProps(this.instanceArn));
    storage.applyRemovalPolicy(config.removalPolicy, { default: this.removalPolicy || RemovalPolicy.DESTROY });
  }

  associateLambdaFunction(id: string, func: lambda.IFunction) {
    new connect.CfnIntegrationAssociation(this, id, {
      instanceId: this.instanceArn,
      integrationType: 'LAMBDA_FUNCTION',
      integrationArn: func.functionArn,
    });
  }

  associateLexBot(id: string, bot: lex.IBotAliasRef) {
    new connect.CfnIntegrationAssociation(this, id, {
      instanceId: this.instanceArn,
      integrationType: 'LEX_BOT',
      integrationArn: bot.botAliasRef.botAliasArn,
    });
  }
}

class LookedUpInstance extends InstanceBase {
  public readonly instanceId: string;
  public readonly instanceArn: string;
  public readonly instanceName: string;
  public readonly incompleteInstanceDefinition: boolean;

  constructor(scope: Construct, id: string, props: any, isIncomplete: boolean) {
    super(scope, id, {
      region: props.region,
      account: props.ownerAccountId,
    });

    this.instanceId = props.instanceId;
    this.instanceArn = props.instanceArn;
    this.instanceName = props.instanceName;
    this.incompleteInstanceDefinition = isIncomplete;
  }
}

const DUMMY_INSTANCE_PROPS = {
  instanceArn: 'instance-arn',
  instanceId: 'instance-12345',
};

export class Instance extends InstanceBase {
  public static fromLookup(scope: Construct, id: string, options: InstanceLookupOptions): IInstance {
    if (Token.isUnresolved(options.instanceId)
        || Token.isUnresolved(options.instanceName)
        || Token.isUnresolved(options.instanceArn)) {
      throw new ValidationError('All arguments to Instance.fromLookup() must be concrete (no Tokens)', scope);
    }

    const filter: any = {};

    if (options.instanceArn) {
      filter.exactIdentifier = options.instanceArn;
    }

    if (options.instanceId) {
      filter.propertyMatch ||= {};
      filter.propertyMatch.Id = options.instanceId;
    }
    if (options.instanceName) {
      filter.propertyMatch ||= {};
      filter.propertyMatch.InstanceAlias = options.instanceName;
    }

    const response : { [key: string]: any }[] = ContextProvider.getValue(scope, {
      provider: cxschema.ContextProvider.CC_API_PROVIDER,
      props: {
        typeName: 'AWS::Connect::Instance',
        ...filter,
        propertiesToReturn: ['Arn', 'InstanceAlias', 'Id', 'Tags'],
        expectedMatchCount: 'exactly-one',
      } as cxschema.CcApiContextQuery,
      dummyValue: undefined,
    }).value;

    let instance = undefined;
    if (response && response[0]) {
      instance = {
        instanceArn: response[0].Arn,
        instanceId: response[0].Id,
        instanceName: response[0].InstanceAlias,
      };
    }
    return new LookedUpInstance(scope, id, instance ?? DUMMY_INSTANCE_PROPS, instance === undefined);
  }

  readonly instance: connect.CfnInstance;
  readonly instanceName?: string;

  constructor(scope: Construct, id: string, props: InstanceProps) {
    super(scope, id, undefined, props.removalPolicy);

    const attributes = {
      ...props.telephonyConfig,
      ...props.pollyConfig,
      ...props.otherConfig,
    };

    if (props.identityType === IdentityManagementType.EXISTING_DIRECTORY && !props.directoryId) {
      Annotations.of(this).addError('directoryId is required when identityType is set to EXISTING_DIRECTORY');
    }
    if (props.identityType !== IdentityManagementType.EXISTING_DIRECTORY && !props.instanceAlias) {
      Annotations.of(this).addError('instanceAlias is required when identityType is set to CONNECT_MANAGED or SAML');
    }

    this.instanceName = props.instanceAlias;
    this.instance = new connect.CfnInstance(this, 'Instance', {
      attributes,
      identityManagementType: props.identityType,
      instanceAlias: props.instanceAlias,
    });
    this.instance.applyRemovalPolicy(props.removalPolicy, { default: RemovalPolicy.DESTROY });

    if (props.storageConfigs) {
      for (const config of props.storageConfigs) {
        this.addStorageConfig(config);
      }
    }

    if (props.customAttributes && Object.keys(props.customAttributes).length > 0) {
      this.setupCustomAttributes(props.customAttributes);
    }
  }

  private setupCustomAttributes(customAttributes: Record<string, boolean>) {
    new UpdateInstanceAttributes(this, 'UpdateCustomAttributes', this, customAttributes);
  }

  get instanceArn(): string {
    return this.instance.attrArn;
  }

  get instanceId(): string {
    return this.instance.ref;
  }
}

class UpdateInstanceAttributes extends Construct {
  private static readonly CUSTOM_ATTRIBUTES_FUNCTION_UUID = 'cb2f6b5c-f0aa-11f0-ac10-5b484827145c';

  constructor(scope: Construct, id: string, instance: IInstance, attributes: Record<string, boolean>) {
    super(scope, id);

    const setupFunc = new lambda.SingletonFunction(this, 'CustomAttributeFunc', {
      uuid: UpdateInstanceAttributes.CUSTOM_ATTRIBUTES_FUNCTION_UUID,
      lambdaPurpose: 'CustomAttributeSetup',
      runtime: lambda.Runtime.PYTHON_3_12,
      handler: 'app.on_event',
      code: lambda.Code.fromAsset(path.join(__dirname, '..', 'lambdas', 'instance_attributes')),
      timeout: Duration.minutes(5),
    });

    const group = new logs.LogGroup(this, 'CustomAttributeLogGroup', {
      retention: logs.RetentionDays.ONE_DAY,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const provider = new cr.Provider(this, 'CustomAttributeProvider', {
      onEventHandler: setupFunc,
      logGroup: group,
    });

    setupFunc.addToRolePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['connect:UpdateInstanceAttribute'],
      resources: [instance.instanceArn],
    }));
    setupFunc.addToRolePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        'iam:DeleteRolePolicy',
        'iam:PutRolePolicy',
      ],
      resources: [
        Fn.sub('arn:${AWS::Partition}:iam::${AWS::AccountId}:role/aws-service-role/connect.amazonaws.com/*'),
      ],
    }));

    new CustomResource(this, 'SetupCustomAttributes', {
      resourceType: 'Custom::ConnectInstanceCustomAttributes',
      serviceToken: provider.serviceToken,
      properties: {
        InstanceId: instance.instanceId,
        CustomAttributes: attributes,
      },
    });
  }
}