import { IResource } from 'aws-cdk-lib';

export interface IRoutingProfile extends IResource {
  readonly routingProfileArn: string;
}