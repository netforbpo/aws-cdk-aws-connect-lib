import {
  aws_connect as connect, ContextProvider,
  IResource,
  Resource, Token, ValidationError,
} from 'aws-cdk-lib';
import * as cxschema from 'aws-cdk-lib/cloud-assembly-schema';
import { lit } from 'aws-cdk-lib/core/lib/helpers-internal';
import { addConstructMetadata } from 'aws-cdk-lib/core/lib/metadata-resource';
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
  readonly additionalEmailAddresses?: IEmailAddress[];
  readonly quickConnects?: IQuickConnect[];
}

export interface QueueLookupOptions {
  readonly instanceArn: string;
  readonly queueArn?: string;
  readonly queueId?: string;
  readonly name?: string;
}

export class Queue extends Resource implements IQueue {
  public static fromLookup(scope: Construct, id: string, options: QueueLookupOptions): IQueue {
    if (Token.isUnresolved(options.name)
      || Token.isUnresolved(options.instanceArn)
      || Token.isUnresolved(options.queueId)
      || Token.isUnresolved(options.queueArn)) {
      throw new ValidationError(lit`Arguments`, 'All arguments to Queue.fromLookup() must be concrete (no Tokens)', scope);
    }

    const filter: any = {};

    filter.resourceModel = {
      InstanceArn: options.instanceArn,
    };
    if (options.queueArn) {
      filter.exactIdentifier = options.queueArn;
    } else if (options.queueId) {
      filter.exactIdentifier = `${options.instanceArn}/queue/${options.queueId}`;
    }
    if (options.name) {
      filter.propertyMatch ||= {};
      filter.propertyMatch.Name = options.name;
    }

    const response: { [key: string]: any }[] = ContextProvider.getValue(scope, {
      provider: cxschema.ContextProvider.CC_API_PROVIDER,
      props: {
        typeName: 'AWS::Connect::Queue',
        ...filter,
        propertiesToReturn: ['QueueArn', 'Type', 'Name'],
        expectedMatchCount: 'exactly-one',
      } as cxschema.CcApiContextQuery,
      dummyValue: undefined,
    }).value;

    let instance = undefined;
    if (response && response[0]) {
      instance = {
        instanceArn: options.instanceArn,
        queueArn: response[0].QueueArn,
        hoursOfOperationName: response[0].Name,
      };
    }
    return new LookedUpQueue(scope, id, instance ?? DUMMY_QUEUE_PROPS, instance === undefined);
  }

  private readonly resource: connect.CfnQueue;
  readonly instance: IInstance;
  readonly hoursOfOperation: IHoursOfOperation;

  constructor(scope: Construct, id: string, props: QueueProps) {
    super(scope, id);

    addConstructMetadata(this, props);

    this.instance = props.instance;
    this.hoursOfOperation = props.hoursOfOperation;

    this.resource = new connect.CfnQueue(this, 'Queue', {
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
      additionalEmailAddresses: props.additionalEmailAddresses?.map(ae => ({
        emailAddressArn: ae.emailAddressArn,
      })),
      quickConnectArns: props.quickConnects?.map(qc => qc.quickConnectArn),
      status: props.status ?? QueueStatus.ENABLED,
    });
  }

  get queueArn(): string {
    return this.resource.attrQueueArn;
  }
}

const DUMMY_QUEUE_PROPS = {
  instanceArn: 'instance-arn',
  queueArn: 'queue-arn',
  queueName: 'queue-name',
};

class LookedUpQueue extends Resource implements IQueue {
  public readonly instanceArn: string;
  public readonly queueArn: string;
  public readonly incompleteDefinition: boolean;

  constructor(scope: Construct, id: string, props: any, isIncomplete: boolean) {
    super(scope, id, {
      region: props.region,
      account: props.ownerAccountId,
    });

    addConstructMetadata(this, props);

    this.instanceArn = props.instanceArn;
    this.queueArn = props.queueArn;
    this.incompleteDefinition = isIncomplete;
  }
}