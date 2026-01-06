import {
  aws_connect as connect,
  IResource,
  Resource,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { IInstance } from './instance';
import { ITrafficDistributionGroup } from './traffic_distribution_group';

export interface IPhoneNumber extends IResource {
  /**
   * The ARN of the phone number.
   */
  readonly phoneNumberArn: string;
}

export enum PhoneNumberType {
  TOLL_FREE = 'TOLL_FREE',
  DID = 'DID',
  UIFN = 'UIFN',
  SHARED = 'SHARED',
  THIRD_PARTY_DID = 'THIRD_PARTY_DID',
  THIRD_PARTY_TF = 'THIRD_PARTY_TF',
  SHORT_CODE = 'SHORT_CODE',
}

export interface PhoneNumberProps {
  /**
   * The AWS connect instance or traffic distribution node to attach the phone number to.
   */
  readonly target: IInstance | ITrafficDistributionGroup;
  /**
   * The phone number type.
   */
  readonly type?: PhoneNumberType;
  /**
   * The ISO 2-letter country code of the phone number.
   */
  readonly countryCode?: string;
  /**
   * The phone number prefix with the + country code
   */
  readonly prefix?: string;
  /**
   * A description of the phone number.
   */
  readonly description?: string;
  /**
   * the ARN of an externally imported phone number (e.g. from AWS End User Messaging)
   */
  readonly sourcePhoneNumberArn?: string;
}

export class PhoneNumber extends Resource implements IPhoneNumber {
  readonly phoneNumber: connect.CfnPhoneNumber;

  constructor(scope: Construct, id: string, props: PhoneNumberProps) {
    super(scope, id);

    let targetArn;
    if ('instanceArn' in props.target) {
      targetArn = props.target.instanceArn;
    } else if ('trafficDistributionGroupArn' in props.target) {
      targetArn = props.target.trafficDistributionGroupArn;
    } else {
      throw new Error('Invalid target');
    }

    this.phoneNumber = new connect.CfnPhoneNumber(this, 'PhoneNumber', {
      targetArn,
      description: props.description,
      countryCode: props.countryCode,
      prefix: props.prefix,
      type: props.type,
      sourcePhoneNumberArn: props.sourcePhoneNumberArn,
    });
  }

  get phoneNumberArn() {
    return this.phoneNumber.attrPhoneNumberArn;
  }
}
