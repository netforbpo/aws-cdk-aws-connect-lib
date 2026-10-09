import {
  aws_connect as connect,
  ContextProvider,
  IResource,
  Resource,
  Token,
  ValidationError,
} from 'aws-cdk-lib';
import * as cxschema from 'aws-cdk-lib/cloud-assembly-schema';
import { lit } from 'aws-cdk-lib/core/lib/helpers-internal';
import { addConstructMetadata } from 'aws-cdk-lib/core/lib/metadata-resource';
import { Construct } from 'constructs';
import { IContactFlow } from './contact_flow';
import { IInstance } from './instance';
import { IQueue } from './queue';
import { IUser } from './user';

export interface IQuickConnect extends IResource {
  /**
   * The ARN of the quick connect.
   */
  readonly quickConnectArn: string;
}

export enum QuickConnectType {
  PHONE_NUMBER = 'PHONE_NUMBER',
  QUEUE = 'QUEUE',
  USER = 'USER',
}

export interface QuickConnectQueueConfig {
  readonly flow: IContactFlow;
  readonly queue: IQueue;
}

export interface QuickConnectUserConfig {
  readonly user: IUser;
  readonly flow: IContactFlow;
}

export interface QuickConnectProps {
  /**
   * The AWS connect instance to attach the quick connect to.
   */
  readonly instance: IInstance;
  /**
   * The name of the quick connect.
   */
  readonly name: string;
  /**
   * The description of the quick connect.
   */
  readonly description?: string;
  /**
   * the phone number to use for this quick connect.
   *
   * Cannot be set with queueConfig or userConfig
   */
  readonly phoneNumber?: string;
  /**
   * the queue and flow to use for this quick connect.
   *
   * Cannot be set with phoneNumber or userConfig
   */
  readonly queueConfig?: QuickConnectQueueConfig;
  /**
   * the user to use for this quick connect.
   *
   * Cannot be set with phoneNumber or queueConfig
   */
  readonly userConfig?: QuickConnectUserConfig;
}

const DUMMY_QUICK_CONNECT_PROPS = {
  instanceArn: 'instance-arn',
  quickConnectArn: 'quick-connect-arn',
  name: 'quick-connect-name',
};

export interface QuickConnectLookupOptions {
  readonly instanceArn: string;
  readonly quickConnectArn?: string;
  readonly quickConnectId?: string;
  readonly name?: string;
}

export class QuickConnect extends Resource implements IQuickConnect {
  public static fromLookup(scope: Construct, id: string, options: QuickConnectLookupOptions): IQuickConnect {
    if (Token.isUnresolved(options.name)
      || Token.isUnresolved(options.instanceArn)
      || Token.isUnresolved(options.quickConnectId)
      || Token.isUnresolved(options.quickConnectArn)) {
      throw new ValidationError(lit`Arguments`, 'All arguments to QuickConnect.fromLookup() must be concrete (no Tokens)', scope);
    }

    const filter: any = {};

    filter.resourceModel = {
      InstanceArn: options.instanceArn,
    };
    if (options.quickConnectArn) {
      filter.exactIdentifier = options.quickConnectArn;
    } else if (options.quickConnectId) {
      filter.exactIdentifier = `${options.instanceArn}/transfer-destination/${options.quickConnectId}`;
    }
    if (options.name) {
      filter.propertyMatch ||= {};
      filter.propertyMatch.Name = options.name;
    }

    const response: { [key: string]: any }[] = ContextProvider.getValue(scope, {
      provider: cxschema.ContextProvider.CC_API_PROVIDER,
      props: {
        typeName: 'AWS::Connect::QuickConnect',
        ...filter,
        propertiesToReturn: ['QuickConnectArn', 'QuickConnectType', 'Name'],
        expectedMatchCount: 'exactly-one',
      } as cxschema.CcApiContextQuery,
      dummyValue: undefined,
    }).value;

    let instance = undefined;
    if (response && response[0]) {
      instance = {
        instanceArn: options.instanceArn,
        quickConnectArn: response[0].QuickConnectArn,
        type: response[0].Type,
        name: response[0].Name,
      };
    }
    return new LookedUpQuickConnect(scope, id, instance ?? DUMMY_QUICK_CONNECT_PROPS, instance === undefined);
  }

  private readonly resource: connect.CfnQuickConnect;

  constructor(scope: Construct, id: string, props: QuickConnectProps) {
    super(scope, id);

    addConstructMetadata(this, props);

    this.resource = new connect.CfnQuickConnect(this, 'QuickConnect', {
      instanceArn: props.instance.instanceArn,
      name: props.name,
      description: props.description,
      quickConnectConfig: this.buildQuickConnect(props),
    });
  }

  private buildQuickConnect(props: QuickConnectProps): connect.CfnQuickConnect.QuickConnectConfigProperty {
    if (props.phoneNumber) {
      if (props.queueConfig || props.userConfig) {
        throw new Error('phoneNumber cannot be set with queueConfig or userConfig');
      }
      return {
        quickConnectType: QuickConnectType.PHONE_NUMBER,
        phoneConfig: {
          phoneNumber: props.phoneNumber,
        },
      };
    } else if (props.queueConfig) {
      if (props.phoneNumber || props.userConfig) {
        throw new Error('queueConfig cannot be set with phoneNumber or userConfig');
      }
      return {
        quickConnectType: QuickConnectType.QUEUE,
        queueConfig: {
          contactFlowArn: props.queueConfig.flow.contactFlowArn,
          queueArn: props.queueConfig.queue.queueArn,
        },
      };
    } else if (props.userConfig) {
      if (props.phoneNumber || props.queueConfig) {
        throw new Error('userConfig cannot be set with phoneNumber or queueConfig');
      }
      return {
        quickConnectType: QuickConnectType.USER,
        userConfig: {
          contactFlowArn: props.userConfig.flow.contactFlowArn,
          userArn: props.userConfig.user.userArn,
        },
      };
    } else {
      throw new Error('One of phoneNumber, userConfig, or queueConfig must be specified');
    }
  }

  get quickConnectArn(): string {
    return this.resource.attrQuickConnectArn;
  }
}

class LookedUpQuickConnect extends Resource implements IQuickConnect {
  public readonly instanceArn: string;
  public readonly quickConnectArn: string;
  public readonly incompleteDefinition: boolean;

  constructor(scope: Construct, id: string, props: any, isIncomplete: boolean) {
    super(scope, id, {
      region: props.region,
      account: props.ownerAccountId,
    });
    addConstructMetadata(this, props);

    this.instanceArn = props.instanceArn;
    this.quickConnectArn = props.quickConnectArn;
    this.incompleteDefinition = isIncomplete;
  }
}

