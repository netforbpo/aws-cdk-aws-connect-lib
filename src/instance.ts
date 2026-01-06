import {
  Annotations,
  aws_connect as connect,
  aws_kinesis as kinesis,
  aws_kinesisfirehose as kinesisfirehose,
  aws_kms as kms,
  aws_s3 as s3,
  ContextProvider,
  IResource,
  Resource,
  Token,
  ValidationError,
} from 'aws-cdk-lib';
import * as cxschema from 'aws-cdk-lib/cloud-assembly-schema';
import { Construct } from 'constructs';

export enum IdentityManagementType {
  SAML = 'SAML',
  CONNECT_MANAGED = 'CONNECT_MANAGED',
  EXISTING_DIRECTORY = 'EXISTING_DIRECTORY',
}

export enum StorageResourceType {
  CHAT_TRANSCRIPTS = 'CHAT_TRANSCRIPTS',
  CALL_RECORDINGS = 'CALL_RECORDINGS',
  SCHEDULED_REPORTS = 'SCHEDULED_REPORTS',
  MEDIA_STREAMS = 'MEDIA_STREAMS',
  CONTACT_TRACE_RECORDS = 'CONTACT_TRACE_RECORDS',
  AGENT_EVENTS = 'AGENT_EVENTS',
}

/**
 * TODO missing attributes from CloudFormation
 *
 * AUTOMATED_INTERACTION_LOG
 * BOT_MANAGEMENT
 * ENABLE_BOT_ANALYTICS_AND_TRANSCRIPTS
 * FORECASTING_PLANNING_SCHEDULING
 * MAX_PACKAGE
 * MESSAGE_STREAMING
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
   * Whether early media is enabled
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
   *
   */
  readonly storageConfigs?: StorageConfig[];
}

export enum StorageEncryptionType {
  KMS = 'KMS',
}

export enum StorageConfigType {
  S3_BUCKET = 'S3_BUCKET',
  KINESIS_VIDEO_STREAM = 'KINESIS_VIDEO_STREAM',
  KINESIS_STREAM = 'KINESIS_STREAM',
  KINESIS_FIREHOSE = 'KINESIS_FIREHOSE',
}

export interface StorageEncryptionConfig {
  /**
   * The type of encryption used on the stream.
   */
  readonly encryptionType: StorageEncryptionType;
  /**
   * The KMS key used for encryption.
   */
  readonly encryptionKey: kms.IKey;
}

export interface StorageConfigKinesisVideoStream {
  /**
   * The encryption configuration for the Kinesis Video Stream.
   */
  readonly encryptionConfig: StorageEncryptionConfig;
  /**
   * The prefix of the video stream
   */
  readonly prefix: string;
  /**
   * Kinesis Video Streams retains the data in a data store that is associated with the stream.
   *
   * The default value is 0, indicating that the stream does not persist data.
   */
  readonly retentionPeriodHours?: number;
}

export interface StorageConfigS3 {
  /**
   * The bucket where the data will be stored
   */
  readonly bucket: s3.IBucket;
  /**
   * The prefix within the bucket
   */
  readonly prefix: string;
  /**
   * The optional encryption configuration.
   */
  readonly encryptionConfig?: StorageEncryptionConfig;
}

export class StorageConfig {
  static buildS3(resourceType: StorageResourceType, bucket: s3.IBucket, prefix: string, encryptionConfig?: StorageEncryptionConfig) {
    return new StorageConfig({
      resourceType,
      storageType: StorageConfigType.S3_BUCKET,
      s3Config: { bucket, prefix, encryptionConfig },
    });
  }

  static buildKinesisVideoStream(
    resourceType: StorageResourceType,
    encryptionConfig: StorageEncryptionConfig,
    prefix: string,
    retentionPeriodHours: number,
  ) {
    return new StorageConfig({
      resourceType,
      storageType: StorageConfigType.KINESIS_VIDEO_STREAM,
      kinesisVideoStreamConfig: { encryptionConfig, prefix, retentionPeriodHours },
    });
  }

  static buildKinesisStream(resourceType: StorageResourceType, stream: kinesis.IStream) {
    return new StorageConfig({
      resourceType,
      storageType: StorageConfigType.KINESIS_STREAM,
      kinesisStream: stream,
    });
  }

  static buildKinesisFirehose(resourceType: StorageResourceType, firehose: kinesisfirehose.IDeliveryStream) {
    return new StorageConfig({
      resourceType,
      storageType: StorageConfigType.KINESIS_FIREHOSE,
      kinesisFirehose: firehose,
    });
  }

  private static readonly VALID_RESOURCES = {
    [StorageConfigType.S3_BUCKET]: [
      StorageResourceType.CHAT_TRANSCRIPTS,
      StorageResourceType.CALL_RECORDINGS,
      StorageResourceType.SCHEDULED_REPORTS,
    ],
    [StorageConfigType.KINESIS_STREAM]: [
      StorageResourceType.CONTACT_TRACE_RECORDS,
      StorageResourceType.AGENT_EVENTS,
    ],
    [StorageConfigType.KINESIS_FIREHOSE]: [
      StorageResourceType.CONTACT_TRACE_RECORDS,
    ],
    [StorageConfigType.KINESIS_VIDEO_STREAM]: [
      StorageResourceType.MEDIA_STREAMS,
    ],
  };

  readonly resourceType: StorageResourceType;
  readonly storageType: StorageConfigType;
  readonly kinesisFirehose?: kinesisfirehose.IDeliveryStream;
  readonly kinesisStream?: kinesis.IStream;
  readonly kinesisVideoStreamConfig?: StorageConfigKinesisVideoStream;
  readonly s3Config?: StorageConfigS3;


  private constructor({
    resourceType,
    storageType,
    kinesisFirehose,
    kinesisStream,
    kinesisVideoStreamConfig,
    s3Config,
  }: {
    resourceType: StorageResourceType;
    kinesisFirehose?: kinesisfirehose.IDeliveryStream;
    kinesisStream?: kinesis.IStream;
    kinesisVideoStreamConfig?: StorageConfigKinesisVideoStream;
    storageType: StorageConfigType;
    s3Config?: StorageConfigS3;
  }) {
    this.resourceType = resourceType;
    this.storageType = storageType;
    this.kinesisFirehose = kinesisFirehose;
    this.kinesisStream = kinesisStream;
    this.kinesisVideoStreamConfig = kinesisVideoStreamConfig;
    this.s3Config = s3Config;
  }

  checkConfig(): boolean {
    const valid = StorageConfig.VALID_RESOURCES[this.storageType];
    return valid.includes(this.resourceType);
  }

  asStorageConfigProps(instanceArn: string): connect.CfnInstanceStorageConfigProps {
    const props: Record<string, any> = {
      instanceArn,
      resourceType: this.resourceType,
      storageType: this.storageType,
    };
    switch (this.storageType) {
      case StorageConfigType.S3_BUCKET:
        props.s3Config = {
          bucketName: this.s3Config?.bucket.bucketName,
          bucketPrefix: this.s3Config?.prefix,
        };
        if (this.s3Config?.encryptionConfig) {
          props.s3Config.encryptionConfig = {
            encryptionType: this.s3Config.encryptionConfig.encryptionType,
            keyId: this.s3Config.encryptionConfig.encryptionKey.keyArn,
          };
        }
        break;
      case StorageConfigType.KINESIS_VIDEO_STREAM:
        props.kinesisVideoStreamConfig = {
          encryptionConfig: {
            encryptionType: this.kinesisVideoStreamConfig?.encryptionConfig.encryptionType,
            keyId: this.kinesisVideoStreamConfig?.encryptionConfig.encryptionKey.keyArn,
          },
          prefix: this.kinesisVideoStreamConfig?.prefix,
          retentionPeriodHours: this.kinesisVideoStreamConfig?.retentionPeriodHours ?? 0,
        };
        break;
      case StorageConfigType.KINESIS_STREAM:
        props.kinesisStreamConfig = {
          streamArn: this.kinesisStream?.streamArn,
        };
        break;
      case StorageConfigType.KINESIS_FIREHOSE:
        props.kinesisFirehoseConfig = {
          streamArn: this.kinesisFirehose?.deliveryStreamArn,
        };
        break;
    }
    return <connect.CfnInstanceStorageConfigProps>props;
  }
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

class LookedUpInstance extends Resource implements IInstance {
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

export class Instance extends Resource implements IInstance {
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
  private storageResourceTypes: Set<StorageResourceType> = new Set();

  constructor(scope: Construct, id: string, props: InstanceProps) {
    super(scope, id);

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

    this.instance = new connect.CfnInstance(this, 'Instance', {
      attributes,
      identityManagementType: props.identityType,
      instanceAlias: props.instanceAlias,
    });

    if (props.storageConfigs) {
      for (const config of props.storageConfigs) {
        this.addStorageConfig(config);
      }
    }
  }

  get instanceArn(): string {
    return this.instance.attrArn;
  }

  get instanceId(): string {
    return this.instance.ref;
  }

  hasStorageResourceType(resourceType: StorageResourceType): boolean {
    return this.storageResourceTypes.has(resourceType);
  }

  addStorageConfig(config: StorageConfig) {
    if (this.storageResourceTypes.has(config.resourceType)) {
      Annotations.of(this).addError(`Duplicate resourceType ${config.resourceType} in storageConfig`);
      return;
    }
    if (!config.checkConfig()) {
      Annotations.of(this).addError(`Invalid storage configuration for resourceType ${config.resourceType} and storageType ${config.storageType}`);
      return;
    }
    this.storageResourceTypes.add(config.resourceType);
    new connect.CfnInstanceStorageConfig(this, `StorageConfig-${config.resourceType}`, config.asStorageConfigProps(this.instanceArn));
  }
}
