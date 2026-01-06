import {
  aws_connect as connect,
  ContextProvider,
  IResource,
  Resource,
  Token,
  ValidationError,
} from 'aws-cdk-lib';
import * as cxschema from 'aws-cdk-lib/cloud-assembly-schema';
import { Construct } from 'constructs';
import { IInstance } from './index';

export enum HoursOfOperationDayOfWeek {
  SUNDAY = 'SUNDAY',
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
}

export interface IHoursOfOperation extends IResource {
  /**
   * The ARN of the attached instance.
   */
  readonly instanceArn: string;
  /**
   * The ARN of the hours of operation.
   */
  readonly hoursOfOperationArn: string;
}

export class HoursOfOperationDefinition {
  static dayOfWeek(day: HoursOfOperationDayOfWeek, startTime: string, endTime: string): HoursOfOperationDefinition {
    return new HoursOfOperationDefinition({ config: { dayOfWeek: day, startTime: startTime, endTime: endTime } });
  }

  private readonly props: any;

  private constructor(props: any) {
    this.props = props;
  }

  splitTime(time: string): connect.CfnHoursOfOperation.HoursOfOperationTimeSliceProperty {
    const [hours, minutes] = time.split(':');
    return { hours: parseInt(hours), minutes: parseInt(minutes) };
  }

  get type() {
    return 'config' in this.props ? 'config' : 'override';
  }

  asConfig(): connect.CfnHoursOfOperation.HoursOfOperationConfigProperty | connect.CfnHoursOfOperation.HoursOfOperationOverrideConfigProperty {
    if (this.props.config) {
      return {
        day: this.props.config.dayOfWeek,
        startTime: this.splitTime(this.props.config.startTime),
        endTime: this.splitTime(this.props.config.endTime),
      };
    } else if (this.props.override) {
      throw new Error('Not implemented');
    } else {
      throw new Error('Invalid definition');
    }
  }
}

export interface HoursOfOperationProps {
  /**
   * The AWS connect instance to attach the hours of operation to.
   */
  readonly instance: IInstance;
  /**
   * The name of the hours of operation.
   */
  readonly name: string;
  /**
   * Timezone to define the hours of operation in. Defaults to UTC.
   */
  readonly timeZone?: string;
  /**
   * the set of definitions for the hours of operation
   */
  readonly definitions?: HoursOfOperationDefinition[];
}

export interface HoursOfOperationLookupOptions {
  readonly instanceArn: string;
  readonly hoursOfOperationArn?: string;
  readonly hoursOfOperationName?: string;
}

export class HoursOfOperation extends Resource implements IHoursOfOperation {
  public static fromLookup(scope: Construct, id: string, options: HoursOfOperationLookupOptions): IHoursOfOperation {
    throw new Error('Not implemented (CcApiContextProvider lacking features - PR #1015)');

    if (Token.isUnresolved(options.hoursOfOperationName)
        || Token.isUnresolved(options.instanceArn)
        || Token.isUnresolved(options.hoursOfOperationArn)) {
      throw new ValidationError('All arguments to HoursOfOperation.fromLookup() must be concrete (no Tokens)', scope);
    }

    const filter: any = {};

    filter.resourceModel.InstanceArn = options.instanceArn;
    if (options.hoursOfOperationArn) {
      filter.exactIdentifier = options.hoursOfOperationArn;
    }
    if (options.hoursOfOperationName) {
      filter.propertyMatch ||= {};
      filter.propertyMatch.Name = options.hoursOfOperationName;
    }

    const response: { [key: string]: any }[] = ContextProvider.getValue(scope, {
      provider: cxschema.ContextProvider.CC_API_PROVIDER,
      props: {
        typeName: 'AWS::Connect::HoursOfOperation',
        ...filter,
        propertiesToReturn: ['HoursOfOperationArn', 'Name'],
        expectedMatchCount: 'exactly-one',
      } as cxschema.CcApiContextQuery,
      dummyValue: undefined,
    }).value;

    let instance = undefined;
    if (response && response[0]) {
      instance = {
        instanceArn: options.instanceArn,
        hoursOfOperationArn: response[0].HoursOfOperationArn,
        hoursOfOperationName: response[0].Name,
      };
    }
    return new LookedUpHoursOfOperation(scope, id, instance ?? DUMMY_HOURS_OF_OPERATION_PROPS, instance === undefined);
  }

  readonly instance: IInstance;
  readonly hoursOfOperation: connect.CfnHoursOfOperation;

  constructor(scope: Construct, id: string, props: HoursOfOperationProps) {
    super(scope, id);

    this.instance = props.instance;
    this.hoursOfOperation = new connect.CfnHoursOfOperation(
      this, 'HoursOfOperation', {
        config: this.buildHOOConfig(props.definitions),
        name: props.name,
        timeZone: props.timeZone ?? 'UTC',
        instanceArn: this.instanceArn,
      },
    );
  }

  private buildHOOConfig(definitions?: HoursOfOperationDefinition[]): connect.CfnHoursOfOperation.HoursOfOperationConfigProperty[] {
    const configs: connect.CfnHoursOfOperation.HoursOfOperationConfigProperty[] = [];
    if (definitions) {
      definitions.forEach((def) => {
        if (def.type === 'config') {
          configs.push(def.asConfig());
        }
      });
    }

    return configs;
  }

  get instanceArn(): string {
    return this.instance.instanceArn;
  }

  get hoursOfOperationArn(): string {
    return this.hoursOfOperation.attrHoursOfOperationArn;
  }
}

const DUMMY_HOURS_OF_OPERATION_PROPS = {
  instanceArn: 'instance-arn',
  hoursOfOperationArn: 'hours-of-operation-arn',
  hoursOfOperationName: 'hours-of-operation-name',
};

class LookedUpHoursOfOperation extends Resource implements IHoursOfOperation {
  public readonly hoursOfOperationArn: string;
  public readonly instanceArn: string;
  public readonly hoursOfOperationName: string;
  public readonly incompleteInstanceDefinition: boolean;

  constructor(scope: Construct, id: string, props: any, isIncomplete: boolean) {
    super(scope, id, {
      region: props.region,
      account: props.ownerAccountId,
    });

    this.hoursOfOperationArn = props.hoursOfOperationArn;
    this.instanceArn = props.instanceArn;
    this.hoursOfOperationName = props.hoursOfOperationName;
    this.incompleteInstanceDefinition = isIncomplete;
  }
}