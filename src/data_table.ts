import {
  aws_connect as connect,
  ContextProvider,
  IResolvable,
  IResource,
  Fn,
  Resource,
  Token,
  ValidationError,
} from 'aws-cdk-lib';
import * as cxschema from 'aws-cdk-lib/cloud-assembly-schema';
import { lit, md5hash } from 'aws-cdk-lib/core/lib/helpers-internal';
import { addConstructMetadata } from 'aws-cdk-lib/core/lib/metadata-resource';
import { Construct } from 'constructs';
import { IInstance } from './instance';

export interface IDataTable extends IResource {
  /**
   * The ARN of the data table
   */
  readonly dataTableArn: string;
  /**
   * the ID of the data table
   */
  readonly dataTableId: string;
}

export enum DataTableValueLockLevel {
  DATA_TABLE = 'DATA_TABLE',
  PRIMARY_VALUE = 'PRIMARY_VALUE',
  ATTRIBUTE = 'ATTRIBUTE',
  VALUE = 'VALUE',
  NONE = 'NONE',
}

export enum DataTableValueType {
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  BOOLEAN = 'BOOLEAN',
  TEXT_LIST = 'TEXT_LIST',
  NUMBER_LIST = 'NUMBER_LIST',
}

export interface DataTableProps {
  /**
   * The AWS connect instance to attach the data table to.
   */
  readonly instance: IInstance;
  /**
   * The name of the data table. Must be unique within the instance.
   */
  readonly name: string;
  /**
   * The description of the data table
   */
  readonly description?: string;
  /**
   * The default timezone for resolving time-based dynamic values. Defaults to UTC
   */
  readonly timeZone?: string;
  /**
   * The lock level to control concurrent edits. Defaults to NONE
   */
  readonly valueLockLevel?: DataTableValueLockLevel;
}

export interface DataTableEnumProperty {
  readonly strict?: boolean;
  readonly values?: string[];
}

export interface DataTableValidationProps {
  readonly enum?: DataTableEnumProperty;
  readonly exclusiveMaximum?: number;
  readonly exclusiveMinimum?: number;
  readonly maximum?: number;
  readonly maxLength?: number;
  readonly maxValues?: number;
  readonly minimum?: number;
  readonly minLength?: number;
  readonly minValues?: number;
  readonly multipleOf?: number;
}

export interface DataTableAttributeProps {
  readonly name: string;
  readonly description?: string;
  readonly primary?: boolean;
  readonly valueType: DataTableValueType;
  readonly validation?: DataTableValidationProps;
}

export interface DataTableAttribute {
  readonly attributeId: IResolvable | string;
  readonly name: string;
}

const DUMMY_DATA_TABLE_PROPS = {
  instanceArn: 'instance-arn',
  dataTableArn: 'data-table-arn',
  name: 'name',
};

export interface DataTableLookupOptions {
  readonly instanceArn: string;
  readonly dataTableArn?: string;
  readonly dataTableId?: string;
  readonly name?: string;
}

abstract class DataTableBase extends Resource implements IDataTable {
  public abstract readonly dataTableArn: string;
  public abstract readonly dataTableId: string;
  public abstract readonly instanceArn: string;

  private definedAttributes: Map<string, DataTableAttribute> = new Map();

  /**
   * Define an attribute for the data table
   *
   * @param config
   */
  addAttribute(config: DataTableAttributeProps): DataTableAttribute {
    const parent = new Construct(this, `Attribute-${config.name}}`);
    const attrib = new connect.CfnDataTableAttribute(parent, 'Resource', {
      instanceArn: this.instanceArn,
      dataTableArn: this.dataTableArn,
      name: config.name,
      description: config.description,
      primary: config.primary,
      valueType: config.valueType,
      validation: config.validation,
    });

    const info = {
      attributeId: attrib.attrAttributeId,
      name: config.name,
    };
    this.definedAttributes.set(config.name, info);

    return info;
  }

  private buildHash(data: any, { json_encode = true, length = 8 }: {
    json_encode?: boolean;
    length?: number;
  } = {}): string {
    if (json_encode) {
      data = JSON.stringify(data);
    }
    const md5 = md5hash(data);
    return md5.slice(0, length).toUpperCase();
  }

  private mapAttributes(values: { [key: string]: string }): connect.CfnDataTableRecord.ValueProperty[] {
    const ret: connect.CfnDataTableRecord.ValueProperty[] = [];
    for (const [key, value] of Object.entries(values)) {
      const lookup = this.definedAttributes.get(key);
      if (!lookup || !lookup.attributeId) {
        throw new ValidationError(lit`Arguments`, `Key ${key} was not found. Make sure you defined it with DataTable.addAttribute`, this);
      }
      ret.push({
        // This ignore is because we CAN push an IResolvable to attributeId
        // @ts-ignore
        attributeId: lookup.attributeId,
        attributeValue: value,
      });
    }
    return ret;
  }

  /**
   * Creates a record into the data table.
   * Requires that all attributes were defined via {DataTable.addAttribute}
   *
   * @param primary_values To set the default records, specify and empty object ({})
   * @param values
   */
  addRecord(primary_values: { [key: string]: string }, values: { [key: string]: string }) {
    const keyhash = this.buildHash(primary_values);
    const parent = new Construct(this, `Record-${keyhash}`);
    new connect.CfnDataTableRecord(parent, 'Resource', {
      instanceArn: this.instanceArn,
      dataTableArn: this.dataTableArn,
      dataTableRecord: {
        primaryValues: this.mapAttributes(primary_values),
        values: this.mapAttributes(values),
      },
    });
  }
}

export class DataTable extends DataTableBase {
  public static fromLookup(scope: Construct, id: string, options: DataTableLookupOptions): IDataTable {
    if (Token.isUnresolved(options.name)
      || Token.isUnresolved(options.instanceArn)
      || Token.isUnresolved(options.dataTableId)
      || Token.isUnresolved(options.dataTableArn)) {
      throw new ValidationError(lit`Arguments`, 'All arguments to DataTable.fromLookup() must be concrete (no Tokens)', scope);
    }

    const filter: any = {};

    filter.resourceModel = {
      InstanceArn: options.instanceArn,
    };
    if (options.dataTableArn) {
      filter.exactIdentifier = options.dataTableArn;
    } else if (options.dataTableId) {
      filter.exactIdentifier = `${options.instanceArn}/data-table/${options.dataTableId}`;
    }
    if (options.name) {
      filter.propertyMatch ||= {};
      filter.propertyMatch.Name = options.name;
    }

    const response: { [key: string]: any }[] = ContextProvider.getValue(scope, {
      provider: cxschema.ContextProvider.CC_API_PROVIDER,
      props: {
        typeName: 'AWS::Connect::DataTable',
        ...filter,
        propertiesToReturn: ['Arn', 'Name'],
        expectedMatchCount: 'exactly-one',
      } as cxschema.CcApiContextQuery,
      dummyValue: undefined,
    }).value;

    let instance = undefined;
    if (response && response[0]) {
      instance = {
        instanceArn: options.instanceArn,
        dataTableArn: response[0].Arn,
        name: response[0].Name,
      };
    }
    return new LookedUpDataTable(scope, id, instance ?? DUMMY_DATA_TABLE_PROPS, instance === undefined);
  }

  private readonly instance: IInstance;
  private readonly resource: connect.CfnDataTable;

  constructor(scope: Construct, id: string, props: DataTableProps) {
    super(scope, id);

    addConstructMetadata(this, props);

    this.instance = props.instance;
    this.resource = new connect.CfnDataTable(this, 'Resource', {
      instanceArn: props.instance.instanceArn,
      name: props.name,
      description: props.description,
      status: 'PUBLISHED', // only one value allowed
      timeZone: props.timeZone || 'UTC',
      valueLockLevel: props.valueLockLevel || DataTableValueLockLevel.NONE,
    });
  }

  get instanceArn(): string {
    return this.instance.instanceArn;
  }

  get dataTableArn(): string {
    return this.resource.attrArn;
  }

  get dataTableId(): string {
    return Fn.select(3, Fn.split('/', this.dataTableArn));
  }
}

class LookedUpDataTable extends DataTableBase {
  public readonly dataTableArn: string;
  public readonly dataTableId: string;
  public readonly instanceArn: string;
  public readonly incompleteDefinition: boolean;

  constructor(scope: Construct, id: string, props: any, isIncomplete: boolean) {
    super(scope, id, {
      region: props.region,
      account: props.ownerAccountId,
    });
    addConstructMetadata(this, props);

    this.instanceArn = props.instanceArn;
    this.dataTableArn = props.dataTableArn;
    this.dataTableId = this.dataTableArn.split('/')[3];
    this.incompleteDefinition = isIncomplete;
  }
}

