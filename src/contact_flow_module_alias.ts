import {
  aws_connect as connect,
  IResource,
  Resource,
} from 'aws-cdk-lib';
import { addConstructMetadata } from 'aws-cdk-lib/core/lib/metadata-resource';
import { Construct } from 'constructs';
import { IContactFlowModule } from './contact_flow_module';

export interface IContactFlowModuleAlias extends IResource {
  readonly contactFlowModuleAliasArn: string;
}

export interface ContactFlowModuleAliasOptions {
  readonly description?: string;
}

export interface ContactFlowModuleAliasProps extends ContactFlowModuleAliasOptions {
  readonly contactFlowModule: IContactFlowModule;
  readonly version: number;
  readonly aliasName: string;
}

export class ContactFlowModuleAlias extends Resource implements IContactFlowModuleAlias {
  private resource: connect.CfnContactFlowModuleAlias;

  constructor(scope: Construct, id: string, props: ContactFlowModuleAliasProps) {
    super(scope, id);

    addConstructMetadata(this, props);

    this.resource = new connect.CfnContactFlowModuleAlias(this, 'Alias', {
      contactFlowModuleId: props.contactFlowModule.contactFlowModuleArn,
      description: props.description,
      name: props.aliasName,
      contactFlowModuleVersion: props.version,
    });
  }

  get contactFlowModuleAliasArn(): string {
    return this.resource.attrContactFlowModuleAliasArn;
  }
}