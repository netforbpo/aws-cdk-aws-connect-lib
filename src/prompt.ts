import {
  aws_connect as connect, ContextProvider, Fn,
  IResource,
  Resource, Token, ValidationError,
} from 'aws-cdk-lib';
import * as cxschema from 'aws-cdk-lib/cloud-assembly-schema';
import { lit } from 'aws-cdk-lib/core/lib/helpers-internal';
import { addConstructMetadata } from 'aws-cdk-lib/core/lib/metadata-resource';
import { Construct } from 'constructs';
import { IInstance } from './instance';

export interface IPrompt extends IResource {
  readonly promptId: string;
  readonly promptArn: string;
}

export enum PromptStatus {
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
}

export interface PromptProps {
  /**
   * The AWS connect instance to attach the prompt to.
   */
  readonly instance: IInstance;
  /**
   * The name of the prompt.
   */
  readonly name: string;
  /**
   * A description of the prompt.
   */
  readonly description?: string;
  /**
   * S3 URL of the prompt. Required when creating a prompt.
   */
  readonly s3Url?: string;
}

export interface PromptLookupOptions {
  readonly instanceArn: string;
  readonly promptArn?: string;
  readonly promptId?: string;
  readonly name?: string;
}

export class Prompt extends Resource implements IPrompt {
  public static fromLookup(scope: Construct, id: string, options: PromptLookupOptions): IPrompt {
    if (Token.isUnresolved(options.name)
      || Token.isUnresolved(options.instanceArn)
      || Token.isUnresolved(options.promptId)
      || Token.isUnresolved(options.promptArn)) {
      throw new ValidationError(lit`Arguments`, 'All arguments to Prompt.fromLookup() must be concrete (no Tokens)', scope);
    }

    const filter: any = {};

    filter.resourceModel = {
      InstanceArn: options.instanceArn,
    };
    if (options.promptArn) {
      filter.exactIdentifier = options.promptArn;
    } else if (options.promptId) {
      filter.exactIdentifier = `${options.instanceArn}/prompt/${options.promptId}`;
    }
    if (options.name) {
      filter.propertyMatch ||= {};
      filter.propertyMatch.Name = options.name;
    }

    const response: { [key: string]: any }[] = ContextProvider.getValue(scope, {
      provider: cxschema.ContextProvider.CC_API_PROVIDER,
      props: {
        typeName: 'AWS::Connect::Prompt',
        ...filter,
        propertiesToReturn: ['PromptArn', 'Name'],
        expectedMatchCount: 'exactly-one',
      } as cxschema.CcApiContextQuery,
      dummyValue: undefined,
    }).value;

    let instance = undefined;
    if (response && response[0]) {
      instance = {
        instanceArn: options.instanceArn,
        promptArn: response[0].PromptArn,
        promptName: response[0].Name,
      };
    }
    return new LookedUpPrompt(scope, id, instance ?? DUMMY_QUEUE_PROPS, instance === undefined);
  }

  private readonly resource: connect.CfnPrompt;
  readonly instance: IInstance;

  constructor(scope: Construct, id: string, props: PromptProps) {
    super(scope, id);

    addConstructMetadata(this, props);

    this.instance = props.instance;

    this.resource = new connect.CfnPrompt(this, 'Resource', {
      instanceArn: this.instance.instanceArn,
      name: props.name,
      description: props.description,
    });
  }

  get promptId(): string {
    return Fn.select(3, Fn.split('/', this.promptArn));
  }

  get promptArn(): string {
    return this.resource.attrPromptArn;
  }
}

const DUMMY_QUEUE_PROPS = {
  instanceArn: 'instance-arn',
  promptArn: 'prompt-arn',
  promptName: 'prompt-name',
};

class LookedUpPrompt extends Resource implements IPrompt {
  public readonly instanceArn: string;
  public readonly promptId: string;
  public readonly promptArn: string;
  public readonly incompleteDefinition: boolean;

  constructor(scope: Construct, id: string, props: any, isIncomplete: boolean) {
    super(scope, id, {
      region: props.region,
      account: props.ownerAccountId,
    });

    addConstructMetadata(this, props);

    this.instanceArn = props.instanceArn;
    this.promptArn = props.promptArn;
    this.promptId = this.promptArn.split('/')[-1];
    this.incompleteDefinition = isIncomplete;
  }
}