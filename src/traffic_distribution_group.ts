import {
  aws_connect as connect,
  IResource,
  Resource,
} from 'aws-cdk-lib';
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
  readonly trafficDistributionGroup: connect.CfnTrafficDistributionGroup;

  constructor(scope: Construct, id: string, props: TrafficDistributionGroupProps) {
    super(scope, id);

    this.trafficDistributionGroup = new connect.CfnTrafficDistributionGroup(this, 'TrafficDistributionGroup', {
      instanceArn: props.instance.instanceArn,
      name: props.name,
      description: props.description,
    });
  }

  get trafficDistributionGroupArn(): string {
    return this.trafficDistributionGroup.attrTrafficDistributionGroupArn;
  }
}
