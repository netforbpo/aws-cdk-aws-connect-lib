import {
  aws_connect as connect,
  IResource,
  Resource,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { IInstance } from './instance';

export interface IEmailAddress extends IResource {
  /**
   * The ARN of the email address.
   */
  readonly emailAddressArn: string;
}

export interface EmailAddressProps {
  /**
   * The AWS connect instance to attach the email address to.
   */
  readonly instance: IInstance;
  /**
   * The email address.
   */
  readonly emailAddress: string;
  /**
   * The display name of the email address.
   */
  readonly displayName?: string;
  /**
   * A description of the email address.
   */
  readonly description?: string;
  /**
   * The aliases for the email address.
   */
  readonly aliases?: IEmailAddress[];
}

export class EmailAddress extends Resource implements IEmailAddress {
  public readonly emailAddress: connect.CfnEmailAddress;

  constructor(scope: Construct, id: string, props: EmailAddressProps) {
    super(scope, id);

    this.emailAddress = new connect.CfnEmailAddress(this, 'EmailAddress', {
      emailAddress: props.emailAddress,
      aliasConfigurations: props.aliases?.map(alias => ({ emailAddressArn: alias.emailAddressArn })),
      description: props.description,
      displayName: props.displayName,
      instanceArn: props.instance.instanceArn,
    });
  }

  get emailAddressArn(): string {
    return this.emailAddress.attrEmailAddressArn;
  }
}

