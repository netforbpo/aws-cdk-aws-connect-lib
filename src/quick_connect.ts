import {
  aws_connect as connect,
  IResource,
  Resource,
} from 'aws-cdk-lib';
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

export class QuickConnect extends Resource implements IQuickConnect {
  readonly quickConnect: connect.CfnQuickConnect;

  constructor(scope: Construct, id: string, props: QuickConnectProps) {
    super(scope, id);

    this.quickConnect = new connect.CfnQuickConnect(this, 'QuickConnect', {
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
    return this.quickConnect.attrQuickConnectArn;
  }
}

