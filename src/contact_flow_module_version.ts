import {
  aws_connect as connect, Fn,
  IResource,
  Resource,
} from 'aws-cdk-lib';
import { addConstructMetadata } from 'aws-cdk-lib/core/lib/metadata-resource';
import { Construct } from 'constructs';
import { IContactFlowModule, IContactFlowModuleRef } from './contact_flow_module';
import { ContactFlowModuleAlias, ContactFlowModuleAliasOptions } from './contact_flow_module_alias';

export interface IContactFlowModuleVersion extends IResource, IContactFlowModuleRef {
  readonly contactFlowModule: IContactFlowModule;
  readonly contactFlowModuleVersionId: string;
  readonly contactFlowModuleVersionArn: string;
  readonly version: number;

  addAlias(aliasName: string, options?: ContactFlowModuleAliasOptions): ContactFlowModuleAlias;
}

export interface ContactFlowModuleVersionOptions {
  readonly description?: string;
}

export interface ContactFlowModuleVersionProps extends ContactFlowModuleVersionOptions {
  readonly contactFlowModule: IContactFlowModule;
}

export class ContactFlowModuleVersion extends Resource implements IContactFlowModuleVersion {
  private readonly resource: connect.CfnContactFlowModuleVersion;
  private readonly _contactFlowModule: IContactFlowModule;

  constructor(scope: Construct, id: string, props: ContactFlowModuleVersionProps) {
    super(scope, id);

    addConstructMetadata(this, props);

    this._contactFlowModule = props.contactFlowModule;

    this.resource = new connect.CfnContactFlowModuleVersion(this, 'Version', {
      contactFlowModuleId: this._contactFlowModule.contactFlowModuleArn,
      description: props.description,
    });
  }

  get contactFlowModule(): IContactFlowModule {
    return this._contactFlowModule;
  }

  get flowReferenceId(): string {
    return this.contactFlowModuleVersionId;
  }

  get contactFlowModuleVersionId(): string {
    return Fn.select(3, Fn.split('/', this.contactFlowModuleVersionArn));
  }

  get contactFlowModuleVersionArn(): string {
    return this.resource.attrContactFlowModuleVersionArn;
  }

  get version(): number {
    return this.resource.attrVersion;
  }

  addAlias(aliasName: string, options?: ContactFlowModuleAliasOptions): ContactFlowModuleAlias {
    return new ContactFlowModuleAlias(this, `Alias${aliasName}`, {
      contactFlowModuleVersion: this,
      aliasName,
      description: options?.description,
    });
  }
}