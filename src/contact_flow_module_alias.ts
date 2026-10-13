import {
  aws_connect as connect, Fn,
  IResource,
  Resource,
} from 'aws-cdk-lib';
import { addConstructMetadata } from 'aws-cdk-lib/core/lib/metadata-resource';
import { Construct } from 'constructs';
import { IContactFlowModule, IContactFlowModuleRef } from './contact_flow_module';
import { IContactFlowModuleVersion } from './contact_flow_module_version';

export interface IContactFlowModuleAlias extends IResource, IContactFlowModuleRef {
  readonly contactFlowModule: IContactFlowModule;
  readonly contactFlowModuleVersion: IContactFlowModuleVersion;
  readonly contactFlowModuleAliasArn: string;
  readonly contactFlowModuleAliasId: string;
}

export interface ContactFlowModuleAliasOptions {
  readonly description?: string;
}

export interface ContactFlowModuleAliasProps extends ContactFlowModuleAliasOptions {
  readonly contactFlowModuleVersion: IContactFlowModuleVersion;
  readonly aliasName: string;
}

export class ContactFlowModuleAlias extends Resource implements IContactFlowModuleAlias {
  private resource: connect.CfnContactFlowModuleAlias;
  private readonly _contactFlowModuleVersion: IContactFlowModuleVersion;

  constructor(scope: Construct, id: string, props: ContactFlowModuleAliasProps) {
    super(scope, id);

    addConstructMetadata(this, props);

    this._contactFlowModuleVersion = props.contactFlowModuleVersion;

    this.resource = new connect.CfnContactFlowModuleAlias(this, 'Alias', {
      contactFlowModuleId: this._contactFlowModuleVersion.contactFlowModule.contactFlowModuleArn,
      description: props.description,
      name: props.aliasName,
      contactFlowModuleVersion: this._contactFlowModuleVersion.version,
    });
  }

  get contactFlowModule(): IContactFlowModule {
    return this._contactFlowModuleVersion.contactFlowModule;
  }

  get contactFlowModuleVersion(): IContactFlowModuleVersion {
    return this._contactFlowModuleVersion;
  }

  get flowReferenceId(): string {
    return this.contactFlowModuleAliasId;
  }

  get contactFlowModuleAliasId(): string {
    return Fn.select(3, Fn.split('/', this.contactFlowModuleAliasArn));
  }

  get contactFlowModuleAliasArn(): string {
    return this.resource.attrContactFlowModuleAliasArn;
  }
}