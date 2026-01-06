import {
  aws_connect as connect,
  IResource,
  Resource,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { IContactFlow } from './contact_flow';
import { IEmailAddress } from './email_address';
import { IHoursOfOperation } from './hours_of_operation';
import { IInstance } from './instance';
import { IPhoneNumber } from './phone_number';
import { IQuickConnect } from './quick_connect';

export interface IQueue extends IResource {
  readonly queueArn: string;
}

export enum QueueStatus {
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
}

export interface QueueOutboundCallerConfig {
  readonly callerIdName: string;
  readonly callerIdNumber: IPhoneNumber;
  readonly flow: IContactFlow;
}

export interface QueueProps {
  /**
   * The AWS connect instance to attach the queue to.
   */
  readonly instance: IInstance;
  /**
   * The hours of operation to associate with the queue.
   */
  readonly hoursOfOperation: IHoursOfOperation;
  /**
   * The name of the hours of operation.
   */
  readonly name: string;
  /**
   * A description of the queue.
   */
  readonly description?: string;
  /**
   * The status of the queue. Default QueueStats.ENABLED
   */
  readonly status?: QueueStatus;
  /**
   * The maximum number of contacts that can be in the queue before it is considered full (default 0/unlimited).
   */
  readonly maxQueueSize?: number;
  readonly outboundCallerConfig?: QueueOutboundCallerConfig;
  readonly outboundEmail?: IEmailAddress;
  readonly quickConnects: IQuickConnect[];
}

export class Queue extends Resource implements IQueue {
  readonly queue: connect.CfnQueue;
  readonly instance: IInstance;
  readonly hoursOfOperation: IHoursOfOperation;

  constructor(scope: Construct, id: string, props: QueueProps) {
    super(scope, id);

    this.instance = props.instance;
    this.hoursOfOperation = props.hoursOfOperation;

    this.queue = new connect.CfnQueue(this, 'Queue', {
      instanceArn: this.instance.instanceArn,
      hoursOfOperationArn: this.hoursOfOperation.hoursOfOperationArn,
      name: props.name,
      description: props.description,
      maxContacts: props.maxQueueSize,
      outboundCallerConfig: props.outboundCallerConfig && {
        outboundCallerIdName: props.outboundCallerConfig.callerIdName,
        outboundCallerIdNumberArn: props.outboundCallerConfig.callerIdNumber.phoneNumberArn,
        outboundFlowArn: props.outboundCallerConfig.flow.contactFlowArn,
      },
      outboundEmailConfig: props.outboundEmail && {
        outboundEmailAddressId: props.outboundEmail.emailAddressArn,
      },
      quickConnectArns: props.quickConnects.map(qc => qc.quickConnectArn),
      status: props.status ?? QueueStatus.ENABLED,
    });
  }

  get queueArn(): string {
    return this.queue.attrQueueArn;
  }
}
