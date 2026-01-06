import { IResource } from 'aws-cdk-lib';

export interface IHierarchyGroup extends IResource {
  readonly hierarchyGroupArn: string;
}