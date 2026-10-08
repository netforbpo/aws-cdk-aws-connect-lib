import { aws_connect as connect, ContextProvider, IResource, Resource, Token, ValidationError } from 'aws-cdk-lib';
import * as cxschema from 'aws-cdk-lib/cloud-assembly-schema';
import { lit } from 'aws-cdk-lib/core/lib/helpers-internal';
import { addConstructMetadata } from 'aws-cdk-lib/core/lib/metadata-resource';
import { Construct } from 'constructs';
import { IInstance } from './instance';

export interface ISecurityProfile extends IResource {
  readonly securityProfileArn: string;
}

export interface SecurityProfileProps {
  readonly instance: IInstance;
  /**
   * The security profile name.
   */
  readonly name: string;
  readonly description?: string;
}

export interface SecurityProfileLookupOptions {
  readonly instanceArn: string;
  readonly securityProfileName: string;
  readonly securityProfileArn: string;
  readonly securityProfileId: string;
}

export class SecurityProfile extends Resource implements ISecurityProfile {
  public static fromLookup(scope: Construct, id: string, options: SecurityProfileLookupOptions): ISecurityProfile {
    if (Token.isUnresolved(options.securityProfileName)
      || Token.isUnresolved(options.instanceArn)
      || Token.isUnresolved(options.securityProfileArn)
      || Token.isUnresolved(options.securityProfileId)) {
      throw new ValidationError(lit`Arguments`, 'All arguments to SecurityProfile.fromLookup() must be concrete (no Tokens)', scope);
    }

    const filter: any = {};

    filter.resourceModel = {
      InstanceArn: options.instanceArn,
    };
    if (options.securityProfileArn) {
      filter.exactIdentifier = options.securityProfileArn;
    } else if (options.securityProfileId) {
      filter.exactIdentifier = `${options.instanceArn}/security-profile/${options.securityProfileId}`;
    }
    if (options.securityProfileName) {
      filter.propertyMatch ||= {};
      filter.propertyMatch.SecurityProfileName = options.securityProfileName;
    }

    const response: { [key: string]: any }[] = ContextProvider.getValue(scope, {
      provider: cxschema.ContextProvider.CC_API_PROVIDER,
      props: {
        typeName: 'AWS::Connect::SecurityProfile',
        ...filter,
        propertiesToReturn: ['SecurityProfileArn', 'SecurityProfileName'],
        expectedMatchCount: 'exactly-one',
      } as cxschema.CcApiContextQuery,
      dummyValue: undefined,
    }).value;

    let instance = undefined;
    if (response && response[0]) {
      instance = {
        instanceArn: options.instanceArn,
        securityProfileArn: response[0].SecurityProfileArn,
        securityProfileName: response[0].SecurityProfileName,
      };
    }
    return new LookedUpSecurityProfile(scope, id, instance ?? DUMMY_SECURITY_PROFILE_PROPS, instance === undefined);
  }

  private readonly resource: connect.CfnSecurityProfile;

  constructor(scope: Construct, id: string, props: SecurityProfileProps) {
    super(scope, id);

    addConstructMetadata(this, props);

    this.resource = new connect.CfnSecurityProfile(this, 'Resource', {
      allowedAccessControlHierarchyGroupId: undefined,
      allowedAccessControlTags: undefined, //array
      allowedFlowModules: undefined, //array
      applications: undefined, //array
      description: props.description,
      granularAccessControlConfiguration: undefined,
      hierarchyRestrictedResources: undefined, // array<string>
      instanceArn: props.instance.instanceArn,
      permissions: undefined, // array
      securityProfileName: props.name,
      tagRestrictedResources: undefined, // array
    });
  }

  get securityProfileArn(): string {
    return this.resource.attrSecurityProfileArn;
  }
}

const DUMMY_SECURITY_PROFILE_PROPS = {
  instanceArn: 'instance-arn',
  securityProfileArn: 'security-profile-arn',
};

class LookedUpSecurityProfile extends Resource implements ISecurityProfile {
  public readonly instanceArn: string;
  public readonly securityProfileArn: string;
  public readonly incompleteDefinition: boolean;

  constructor(scope: Construct, id: string, props: any, isIncomplete: boolean) {
    super(scope, id, {
      region: props.region,
      account: props.ownerAccountId,
    });
    addConstructMetadata(this, props);

    this.instanceArn = props.instanceArn;
    this.securityProfileArn = props.securityProfileArn;
    this.incompleteDefinition = isIncomplete;
  }
}

