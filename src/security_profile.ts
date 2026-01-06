import { IResource } from 'aws-cdk-lib';

export interface ISecurityProfile extends IResource {
  readonly securityProfileArn: string;
}