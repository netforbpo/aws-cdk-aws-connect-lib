import {
  aws_connect as connect, ContextProvider,
  IResource,
  Resource, Token, ValidationError,
} from 'aws-cdk-lib';
import * as cxschema from 'aws-cdk-lib/cloud-assembly-schema';
import { Construct } from 'constructs';
import { IHierarchyGroup } from './hierarchy_group';
import { IInstance } from './instance';
import { IRoutingProfile } from './routing_profile';
import { ISecurityProfile } from './security_profile';

export interface IUser extends IResource {
  /**
   * The ARN of the connect user.
   */
  readonly userArn: string;
}

export interface UserIdentityInfoProps {
  readonly email?: string;
  readonly secondaryEmail?: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly mobileNumber?: string;
}

export enum UserPhoneType {
  SOFT_PHONE = 'SOFT_PHONE',
  DESK_PHONE = 'DESK_PHONE',
}

export interface UserPhoneConfigProps {
  readonly afterContactWorkTimeLimit?: number;
  readonly autoAccept?: boolean;
  readonly deskPhoneNumber?: string;
  readonly persistentConnection?: boolean;
  readonly phoneType: UserPhoneType;
}

export interface UserProficiencyProps {
  readonly attributeName: string;
  readonly attributeValue: string;
  readonly proficiencyLevel: number;
}

export interface UserProps {
  readonly instance: IInstance;
  readonly routingProfile: IRoutingProfile;
  /**
   * The security profiles to associate with the user.
   *
   * At least one must be specified
   */
  readonly securityProfiles: ISecurityProfile[];
  readonly username: string;
  readonly password?: string;
  readonly directoryUserId?: string;
  readonly hierarchyGroup?: IHierarchyGroup;
  readonly identityInfo?: UserIdentityInfoProps;
  readonly phoneConfig: UserPhoneConfigProps;
  readonly proficiencies: UserProficiencyProps[];
}


const DUMMY_USER_PROPS = {
  instanceArn: 'instance-arn',
  userArn: 'user-arn',
  username: 'user-name',
};

export interface UserLookupOptions {
  readonly instanceArn: string;
  readonly userArn?: string;
  readonly username?: string;
}

export class User extends Resource implements IUser {
  public static fromLookup(scope: Construct, id: string, options: UserLookupOptions): IUser {
    throw new Error('Not implemented (CcApiContextProvider lacking features - PR #1015)');

    if (Token.isUnresolved(options.username)
        || Token.isUnresolved(options.instanceArn)
        || Token.isUnresolved(options.userArn)) {
      throw new ValidationError('All arguments to User.fromLookup() must be concrete (no Tokens)', scope);
    }

    const filter: any = {};

    filter.resourceModel.InstanceArn = options.instanceArn;
    if (options.userArn) {
      filter.exactIdentifier = options.userArn;
    }
    if (options.username) {
      filter.propertyMatch ||= {};
      filter.propertyMatch.Username = options.username;
    }

    const response: { [key: string]: any }[] = ContextProvider.getValue(scope, {
      provider: cxschema.ContextProvider.CC_API_PROVIDER,
      props: {
        typeName: 'AWS::Connect::User',
        ...filter,
        propertiesToReturn: ['UserArn', 'Username'],
        expectedMatchCount: 'exactly-one',
      } as cxschema.CcApiContextQuery,
      dummyValue: undefined,
    }).value;

    let instance = undefined;
    if (response && response[0]) {
      instance = {
        instanceArn: response[0].options.instanceArn,
        userArn: response[0].UserArn,
        username: response[0].Name,
      };
    }
    return new LookedUpUser(scope, id, instance ?? DUMMY_USER_PROPS, instance === undefined);
  }

  public readonly user: connect.CfnUser;

  constructor(scope: Construct, id: string, props: UserProps) {
    super(scope, id);

    this.user = new connect.CfnUser(this, 'User', {
      instanceArn: props.instance.instanceArn,
      username: props.username,
      routingProfileArn: props.routingProfile.routingProfileArn,
      directoryUserId: props.directoryUserId,
      password: props.password,
      hierarchyGroupArn: props.hierarchyGroup?.hierarchyGroupArn,
      identityInfo: props.identityInfo && {
        email: props.identityInfo.email,
        secondaryEmail: props.identityInfo.secondaryEmail,
        firstName: props.identityInfo.firstName,
        lastName: props.identityInfo.lastName,
        mobile: props.identityInfo.mobileNumber,
      },
      phoneConfig: {
        afterContactWorkTimeLimit: props.phoneConfig.afterContactWorkTimeLimit,
        autoAccept: props.phoneConfig.autoAccept,
        deskPhoneNumber: props.phoneConfig.deskPhoneNumber,
        phoneType: props.phoneConfig.phoneType,
        persistentConnection: props.phoneConfig.persistentConnection,
      },
      securityProfileArns: props.securityProfiles.map(s => s.securityProfileArn),
      userProficiencies: props.proficiencies?.map(p => ({
        attributeName: p.attributeName,
        attributeValue: p.attributeValue,
        level: p.proficiencyLevel,
      })),
    });
  }

  get userArn(): string {
    return this.user.attrUserArn;
  }
}

class LookedUpUser extends Resource implements IUser {
  public readonly userArn: string;
  public readonly instanceArn: string;
  public readonly username: string;
  public readonly incompleteInstanceDefinition: boolean;

  constructor(scope: Construct, id: string, props: any, isIncomplete: boolean) {
    super(scope, id, {
      region: props.region,
      account: props.ownerAccountId,
    });

    this.instanceArn = props.instanceArn;
    this.userArn = props.userArn;
    this.username = props.username;
    this.incompleteInstanceDefinition = isIncomplete;
  }
}