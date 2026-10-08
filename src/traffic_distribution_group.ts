import {
  aws_connect as connect,
  IResource,
  Resource,
} from 'aws-cdk-lib';
import { addConstructMetadata } from 'aws-cdk-lib/core/lib/metadata-resource';
import { Construct } from 'constructs';

import { IInstance } from './instance';

export interface ITrafficDistributionGroup extends IResource {
  readonly trafficDistributionGroupArn: string;
}

export interface TrafficDistributionGroupProps {
  /**
   * The AWS connect instance to attach the traffic distribution group to.
   */
  readonly instance: IInstance;
  /**
   * The name of the traffic distribution group.
   */
  readonly name: string;
  /**
   * A description of the traffic distribution group.
   */
  readonly description?: string;
}

export class TrafficDistributionGroup extends Resource implements ITrafficDistributionGroup {
  private readonly resource: connect.CfnTrafficDistributionGroup;

  constructor(scope: Construct, id: string, props: TrafficDistributionGroupProps) {
    super(scope, id);

    addConstructMetadata(this, props);

    this.resource = new connect.CfnTrafficDistributionGroup(this, 'TrafficDistributionGroup', {
      instanceArn: props.instance.instanceArn,
      name: props.name,
      description: props.description,
    });
  }

  get trafficDistributionGroupArn(): string {
    return this.resource.attrTrafficDistributionGroupArn;
  }
}
