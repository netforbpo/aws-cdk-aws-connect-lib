import {
  aws_connect as connect,
  ContextProvider,
  IResource,
  Resource,
  Token,
  ValidationError,
} from 'aws-cdk-lib';
import * as cxschema from 'aws-cdk-lib/cloud-assembly-schema';
import { Construct } from 'constructs';
import { IInstance } from './index';

export interface IContactFlow extends IResource {
  /**
   * The ARN of the flow.
   */
  readonly contactFlowArn: string;
  readonly instanceArn: string;
  readonly contactFlowName: string;
}

export enum ContactFlowState {
  ACTIVE = 'ACTIVE',
  ARCHIVED = 'ARCHIVED',
}

export enum ContactFlowType {
  CONTACT_FLOW = 'CONTACT_FLOW',
  CUSTOMER_QUEUE = 'CUSTOMER_QUEUE',
  CUSTOMER_HOLD = 'CUSTOMER_HOLD',
  CUSTOMER_WHISPER = 'CUSTOMER_WHISPER',
  AGENT_HOLD = 'AGENT_HOLD',
  AGENT_WHISPER = 'AGENT_WHISPER',
  OUTBOUND_WHISPER = 'OUTBOUND_WHISPER',
  AGENT_TRANSFER = 'AGENT_TRANSFER',
  QUEUE_TRANSFER = 'QUEUE_TRANSFER',
  CAMPAIGN = 'CAMPAIGN',
}

export interface ContactFlowProps {
  readonly instance: IInstance;
  readonly name: string;
  readonly type: ContactFlowType;
  readonly description?: string;
  readonly state?: ContactFlowState;
  readonly content: string;
}

export interface ContactFlowLookupOptions {
  readonly contactFlowArn?: string;
  readonly instanceArn?: string;
  readonly contactFlowName?: string;
}

export class ContactFlow extends Resource implements IContactFlow {
  public static fromLookup(scope: Construct, id: string, options: ContactFlowLookupOptions): IContactFlow {
    throw new Error('Not implemented (Bad Amazon API)');

    if (Token.isUnresolved(options.contactFlowName)
        || Token.isUnresolved(options.instanceArn)
        || Token.isUnresolved(options.contactFlowArn)) {
      throw new ValidationError('All arguments to ContactFlow.fromLookup() must be concrete (no Tokens)', scope);
    }

    const filter: any = {};

    if (options.contactFlowArn) {
      filter.exactIdentifier = options.contactFlowArn;
    }

    if (options.instanceArn) {
      filter.propertyMatch ||= {};
      filter.propertyMatch.InstanceArn = options.instanceArn;
    }
    if (options.contactFlowName) {
      filter.propertyMatch ||= {};
      filter.propertyMatch.Name = options.contactFlowName;
    }

    const response : { [key: string]: any }[] = ContextProvider.getValue(scope, {
      provider: cxschema.ContextProvider.CC_API_PROVIDER,
      props: {
        typeName: 'AWS::Connect::ContactFlow',
        ...filter,
        propertiesToReturn: ['Arn', 'InstanceArn', 'Name'],
        expectedMatchCount: 'exactly-one',
      } as cxschema.CcApiContextQuery,
      dummyValue: undefined,
    }).value;

    let instance = undefined;
    if (response && response[0]) {
      instance = {
        contactFlowArn: response[0].Arn,
        instanceArn: response[0].InstanceArn,
        contactFlowName: response[0].Name,
      };
    }
    return new LookedUpContactFlow(scope, id, instance ?? DUMMY_CONTACT_FLOW_PROPS, instance === undefined);
  }

  readonly flow: connect.CfnContactFlow;

  constructor(scope: Construct, id: string, props: ContactFlowProps) {
    super(scope, id);

    this.flow = new connect.CfnContactFlow(this, 'Flow', {
      instanceArn: props.instance.instanceArn,
      type: props.type,
      name: props.name,
      description: props.name,
      content: props.content,
      state: props.state,
    });
  }

  get contactFlowArn(): string {
    return this.flow.attrContactFlowArn;
  }

  get contactFlowName(): string {
    return this.flow.name;
  }

  get instanceArn(): string {
    return this.flow.instanceArn;
  }
}

const DUMMY_CONTACT_FLOW_PROPS = {
  instanceArn: 'instance-arn',
  contactFlowArn: 'contact-flow-arn',
  contactFlowName: 'contact-flow-name',
};

class LookedUpContactFlow extends Resource implements IContactFlow {
  public readonly contactFlowArn: string;
  public readonly instanceArn: string;
  public readonly contactFlowName: string;
  public readonly incompleteInstanceDefinition: boolean;

  constructor(scope: Construct, id: string, props: any, isIncomplete: boolean) {
    super(scope, id, {
      region: props.region,
      account: props.ownerAccountId,
    });

    this.contactFlowArn = props.contactFlowArn;
    this.instanceArn = props.instanceArn;
    this.contactFlowName = props.contactFlowName;
    this.incompleteInstanceDefinition = isIncomplete;
  }
}
