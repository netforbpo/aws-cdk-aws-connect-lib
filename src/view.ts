import {
  aws_connect as connect,
  IResource,
  Resource,
} from 'aws-cdk-lib';
import { addConstructMetadata } from 'aws-cdk-lib/core/lib/metadata-resource';
import { Construct } from 'constructs';
import { IInstance } from './instance';

export interface IView extends IResource {
  /**
   * The ARN of the flow.
   */
  readonly viewId: string;
  readonly viewArn: string;
  readonly instanceArn: string;
  readonly name: string;
}

export enum ViewType {
  CUSTOMER_MANAGED = 'CUSTOMER_MANAGED',
  AWS_MANAGED = 'AWS_MANAGED',
}

export enum ViewStatus {
  PUBLISHED = 'PUBLISHED',
  SAVED = 'SAVED',
}

export interface ViewProps {
  readonly instance: IInstance;
  readonly name: string;
  readonly description?: string;
  // TODO support a builder for this
  readonly template: any;
  readonly actions?: Array<string>;
}

export interface ViewLookupOptions {
  readonly viewArn?: string;
  readonly instanceArn?: string;
  readonly viewName?: string;
}

export class View extends Resource implements IView {
  private readonly resource: connect.CfnView;

  constructor(scope: Construct, id: string, props: ViewProps) {
    super(scope, id);

    addConstructMetadata(this, props);

    this.resource = new connect.CfnView(this, 'Resource', {
      instanceArn: props.instance.instanceArn,
      name: props.name,
      description: props.description,
      template: props.template,
      actions: props.actions || [],
    });
  }

  get viewId(): string {
    return this.resource.attrViewId;
  }

  get viewArn(): string {
    return this.resource.attrViewArn;
  }

  get name(): string {
    return this.resource.name;
  }

  get instanceArn(): string {
    return this.resource.instanceArn;
  }
}
