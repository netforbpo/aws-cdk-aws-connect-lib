import {
  aws_connect as connect,
  CfnResource,
  ContextProvider,
  Fn,
  IResource,
  Resource,
  Stack,
  Token,
  ValidationError,
} from 'aws-cdk-lib';
import * as cxschema from 'aws-cdk-lib/cloud-assembly-schema';
import { Box, lit, md5hash } from 'aws-cdk-lib/core/lib/helpers-internal';
import { addConstructMetadata } from 'aws-cdk-lib/core/lib/metadata-resource';
import { Construct } from 'constructs';
import { ContactFlowModuleAlias, ContactFlowModuleAliasOptions } from './contact_flow_module_alias';
import { ContactFlowModuleVersion, ContactFlowModuleVersionOptions } from './contact_flow_module_version';
import { IInstance } from './instance';

function calculateFlowHash(flow: ContactFlowModule, additional: string = ''): string {
  const stack = Stack.of(flow);

  const flowResource = flow.node.defaultChild as CfnResource;
  const { properties, template, logicalId } = resolveSingleResourceProperties(stack, flowResource);

  template.Resources[logicalId].Properties = sortFunctionProperties(properties);
  const stringifiedConfig = JSON.stringify(template);

  return md5hash(stringifiedConfig + additional);
}

function sortFunctionProperties(properties: { [x: string]: any }) {
  const sorted: { [x: string]: any } = {};
  Object.keys(properties).sort().forEach((key) => {
    sorted[key] = properties[key];
  });
  return sorted;
}

function resolveSingleResourceProperties(stack: Stack, res: CfnResource): any {
  const template = stack.resolve(res._toCloudFormation());
  const resources = template.Resources;
  const resourceKeys = Object.keys(resources);
  if (resourceKeys.length !== 1) {
    throw new ValidationError(
      lit`ExpectedSingleCloudFormationResource`,
      `Expected one rendered CloudFormation resource but found ${resourceKeys.length}`,
      res);
  }
  const logicalId = resourceKeys[0];
  return { properties: resources[logicalId].Properties, template, logicalId };
}

function trimFromStart(s: string, maxLength: number) {
  const desiredLength = Math.min(maxLength, s.length);
  const newStart = s.length - desiredLength;
  return s.substring(newStart);
}

export interface IContactFlowModuleRef extends IResource {
  /**
   * The general reference ID of this flow module. For use within the contact flow InvokeFlowModule.
   *
   * This will point to the flow module, a specific version, or an alias depending on the construct.
   */
  readonly flowReferenceId: string;
}

export interface IContactFlowModule extends IResource, IContactFlowModuleRef {
  /**
   * The ARN of the flow.
   */
  readonly contactFlowModuleId: string;
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
  // TODO support a builder for this
  readonly content: string;
  // TODO determine the structure and make a builder for it
  readonly settings?: string;
  readonly externalInvocationEnabled?: boolean;
  readonly currentVersionOptions?: ContactFlowModuleVersionOptions;
}

export interface ContactFlowModuleLookupOptions {
  readonly contactFlowModuleArn?: string;
  readonly instanceArn?: string;
  readonly contactFlowModuleName?: string;
}

export class ContactFlowModule extends Resource implements IContactFlowModule {
  public static fromLookup(scope: Construct, id: string, options: ContactFlowModuleLookupOptions): IContactFlowModule {
    throw new Error('Not implemented (Bad Amazon API. Produces a security token invalid)');

    if (Token.isUnresolved(options.contactFlowModuleName)
      || Token.isUnresolved(options.instanceArn)
      || Token.isUnresolved(options.contactFlowModuleArn)) {
      throw new ValidationError(lit`Arguments`, 'All arguments to ContactFlowModule.fromLookup() must be concrete (no Tokens)', scope);
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

    const response: { [key: string]: any }[] = ContextProvider.getValue(scope, {
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

  private readonly resource: connect.CfnContactFlowModule;
  private _currentVersion?: ContactFlowModuleVersion;
  private readonly currentVersionOptions?: ContactFlowModuleVersionOptions;
  private hashMixins = Box.fromArray<string>([], { omitEmpty: false });

  constructor(scope: Construct, id: string, props: ContactFlowModuleProps) {
    super(scope, id);

    addConstructMetadata(this, props);

    this.currentVersionOptions = props.currentVersionOptions;

    this.resource = new connect.CfnContactFlowModule(this, 'Resource', {
      instanceArn: props.instance.instanceArn,
      name: props.name,
      description: props.description,
      content: props.content,
      state: props.state,
      settings: props.settings,
      externalInvocationConfiguration: props.externalInvocationEnabled !== undefined ? {
        enabled: props.externalInvocationEnabled,
      } : undefined,
    });
  }

  public invalidateVersionBasedOn(x: string) {
    if (Token.isUnresolved(x)) {
      throw new ValidationError(lit`InvalidateVersionUnresolvedToken`,
        'invalidateVersionBasedOn: input may not contain unresolved tokens',
        this);
    }
    this.hashMixins.push(x);
  }

  /**
   * Returns the current version of the contact flow module.
   *
   * This also generates a unique id per-version for the logical ID. (Similar to `currentVersion` on a lambda Function)
   * This allows a new revision to be created when you update the flow content.
   *
   * By default prior versions are deleted when a new version is created.
   *
   * If you want prior versions retained, you can apply a removal policy. e.g.
   *
   * flowModule.currentVersion.applyRemovalPolicy(RemovalPolicy.RETAIN);
   */
  get currentVersion(): ContactFlowModuleVersion {
    if (!this._currentVersion) {
      this._currentVersion = new ContactFlowModuleVersion(this, 'CurrentVersion', {
        contactFlowModule: this,
        ...this.currentVersionOptions,
      });

      // override the version's logical ID with a lazy string which includes the hash of the version itself.
      // this causes a new version resource to be created when things change.

      const cfn = this._currentVersion.node.defaultChild as CfnResource;
      const originalLogicalId = this.stack.resolve(cfn.logicalId) as string;

      cfn.overrideLogicalId(Token.asString(this.hashMixins.derive((mixins) => {
        const hash = calculateFlowHash(this, mixins.join(''));
        const logicalId = trimFromStart(originalLogicalId, 255 - 25);
        return `${logicalId}${hash}`;
      })));
    }
    return this._currentVersion!;
  }

  get flowReferenceId(): string {
    return this.contactFlowModuleId;
  }

  get contactFlowModuleId(): string {
    return Fn.select(3, Fn.split('/', this.contactFlowModuleArn));
  }

  get contactFlowModuleArn(): string {
    return this.resource.attrContactFlowModuleArn;
  }

  get contactFlowModuleName(): string {
    return this.resource.name;
  }

  get instanceArn(): string {
    return this.resource.instanceArn;
  }

  public addAlias(aliasName: string, options: ContactFlowModuleAliasOptions): ContactFlowModuleAlias {
    return this.currentVersion.addAlias(aliasName, options);
  }
}

const DUMMY_CONTACT_FLOW_MODULE_PROPS = {
  instanceArn: 'instance-arn',
  contactFlowModuleArn: 'contact-flow-module-arn',
  contactFlowModuleName: 'contact-flow-module-name',
};

class LookedUpContactFlowModule extends Resource implements IContactFlowModule {
  public readonly contactFlowModuleId: string;
  public readonly contactFlowModuleArn: string;
  public readonly instanceArn: string;
  public readonly contactFlowModuleName: string;
  public readonly incompleteDefinition: boolean;

  constructor(scope: Construct, id: string, props: any, isIncomplete: boolean) {
    super(scope, id, {
      region: props.region,
      account: props.ownerAccountId,
    });

    this.contactFlowModuleArn = props.contactFlowModuleArn;
    this.contactFlowModuleId = this.contactFlowModuleArn.split('/')[-1];
    this.instanceArn = props.instanceArn;
    this.contactFlowModuleName = props.contactFlowModuleName;
    this.incompleteDefinition = isIncomplete;
  }

  get flowReferenceId(): string {
    return this.contactFlowModuleId;
  }
}
