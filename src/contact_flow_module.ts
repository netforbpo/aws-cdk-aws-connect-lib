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

export interface IContactFlowModule extends IResource {
  /**
   * The ARN of the flow.
   */
  readonly contactFlowModuleArn: string;
  readonly instanceArn: string;
  readonly contactFlowModuleName: string;
}

export enum ContactFlowModuleState {
  ACTIVE = 'ACTIVE',
  ARCHIVED = 'ARCHIVED',
}

export interface ContactFlowModuleProps {
  readonly instance: IInstance;
  readonly name: string;
  readonly description?: string;
  readonly state?: ContactFlowModuleState;
  readonly content: string;
  // TODO add these once they are in CDK's lib
  // readonly settings?: string;
  // readonly externalInvocationConfiguration?: any;
}

export interface ContactFlowModuleLookupOptions {
  readonly contactFlowModuleArn?: string;
  readonly instanceArn?: string;
  readonly contactFlowModuleName?: string;
}

export class ContactFlowModule extends Resource implements IContactFlowModule {
  public static fromLookup(scope: Construct, id: string, options: ContactFlowModuleLookupOptions): IContactFlowModule {
    throw new Error('Not implemented (Bad Amazon API)');

    if (Token.isUnresolved(options.contactFlowModuleName)
        || Token.isUnresolved(options.instanceArn)
        || Token.isUnresolved(options.contactFlowModuleArn)) {
      throw new ValidationError('All arguments to ContactFlowModule.fromLookup() must be concrete (no Tokens)', scope);
    }

    const filter: any = {};

    if (options.contactFlowModuleArn) {
      filter.exactIdentifier = options.contactFlowModuleArn;
    }

    if (options.instanceArn) {
      filter.propertyMatch ||= {};
      filter.propertyMatch.InstanceArn = options.instanceArn;
    }
    if (options.contactFlowModuleName) {
      filter.propertyMatch ||= {};
      filter.propertyMatch.Name = options.contactFlowModuleName;
    }

    const response : { [key: string]: any }[] = ContextProvider.getValue(scope, {
      provider: cxschema.ContextProvider.CC_API_PROVIDER,
      props: {
        typeName: 'AWS::Connect::ContactFlowModule',
        ...filter,
        propertiesToReturn: ['Arn', 'InstanceArn', 'Name'],
        expectedMatchCount: 'exactly-one',
      } as cxschema.CcApiContextQuery,
      dummyValue: undefined,
    }).value;

    let instance = undefined;
    if (response && response[0]) {
      instance = {
        contactFlowModuleArn: response[0].Arn,
        instanceArn: response[0].InstanceArn,
        contactFlowModuleName: response[0].Name,
      };
    }
    return new LookedUpContactFlowModule(scope, id, instance ?? DUMMY_CONTACT_FLOW_MODULE_PROPS, instance === undefined);
  }

  readonly flowModule: connect.CfnContactFlowModule;

  constructor(scope: Construct, id: string, props: ContactFlowModuleProps) {
    super(scope, id);

    this.flowModule = new connect.CfnContactFlowModule(this, 'Flow', {
      instanceArn: props.instance.instanceArn,
      name: props.name,
      description: props.name,
      content: props.content,
      state: props.state,
      // TODO add these once they are in CDK's lib
      // settings: props.settings,
      // externalInvocationConfiguration: props.externalInvocationConfiguration,
    });
  }

  get contactFlowModuleArn(): string {
    return this.flowModule.attrContactFlowModuleArn;
  }

  get contactFlowModuleName(): string {
    return this.flowModule.name;
  }

  get instanceArn(): string {
    return this.flowModule.instanceArn;
  }
}

const DUMMY_CONTACT_FLOW_MODULE_PROPS = {
  instanceArn: 'instance-arn',
  contactFlowModuleArn: 'contact-flow-module-arn',
  contactFlowModuleName: 'contact-flow-module-name',
};

class LookedUpContactFlowModule extends Resource implements IContactFlowModule {
  public readonly contactFlowModuleArn: string;
  public readonly instanceArn: string;
  public readonly contactFlowModuleName: string;
  public readonly incompleteInstanceDefinition: boolean;

  constructor(scope: Construct, id: string, props: any, isIncomplete: boolean) {
    super(scope, id, {
      region: props.region,
      account: props.ownerAccountId,
    });

    this.contactFlowModuleArn = props.contactFlowModuleArn;
    this.instanceArn = props.instanceArn;
    this.contactFlowModuleName = props.contactFlowModuleName;
    this.incompleteInstanceDefinition = isIncomplete;
  }
}
