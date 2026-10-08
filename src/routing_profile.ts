import {
  aws_connect as connect,
  ContextProvider,
  Duration,
  IResource,
  Resource,
  Token,
  ValidationError,
} from 'aws-cdk-lib';
import * as cxschema from 'aws-cdk-lib/cloud-assembly-schema';
import { lit } from 'aws-cdk-lib/core/lib/helpers-internal';
import { addConstructMetadata } from 'aws-cdk-lib/core/lib/metadata-resource';
import { Construct } from 'constructs';
import { IInstance } from './instance';
import { IQueue } from './queue';
import { ChannelType } from './types';

export interface IRoutingProfile extends IResource {
  readonly routingProfileArn: string;
}

export enum RoutingProfileAgentAvailabilityTimer {
  TIME_SINCE_LAST_ACTIVITY = 'TIME_SINCE_LAST_ACTIVITY',
  TIME_SINCE_LAST_INBOUND = 'TIME_SINCE_LAST_INBOUND',
}

export interface RoutingProfileManualAssignmentQueueConfig {
  /**
   * The queue this config is for.
   */
  readonly queue: IQueue;
  /**
   * The channel this config is for
   */
  readonly channel: ChannelType;
}

export interface RoutingProfileQueueConfig {
  /**
   * The queue this config is for.
   */
  readonly queue: IQueue;
  /**
   * The channel this config is for
   */
  readonly channel: ChannelType;
  /**
   * The priority of this queue.
   */
  readonly priority: number;
  /**
   * The delay before offering the contact to the agent
   */
  readonly delay: Duration;
}

export enum RoutingProfileCrossChannelBehaviorType {
  ROUTE_CURRENT_CHANNEL_ONLY = 'ROUTE_CURRENT_CHANNEL_ONLY',
  ROUTE_ANY_CHANNEL = 'ROUTE_ANY_CHANNEL',
}

export interface RoutingProfileMediaCurrency {
  /**
   * The channel this media currency is for.
   */
  readonly channel: ChannelType;
  /**
   * The number of contacts an agent can have on a channel simultaneously.
   *
   * VOICE range is 1 to 1
   * CHAT range is 1 to 10
   * TASK range is 1 to 10
   * EMAIL range is 1 to 10
   */
  readonly concurrency: number;
  /**
   * Defines the cross-channel routing behavior for each channel that is enabled
   * for this Routing Profile. For example, this allows you to offer an agent a
   * different contact from another channel when they are currently working with
   * a contact from a Voice channel.
   */
  readonly crossChannelBehavior?: RoutingProfileCrossChannelBehaviorType;
}

export interface RoutingProfileProps {
  readonly instance: IInstance;
  /**
   * The name of the routing profile.
   */
  readonly name: string;
  /**
   * The description of the routing profile.
   */
  readonly description: string;
  /**
   * Whether agents with this routing profile will have their routing order calculated based
   * on time since their last inbound contact or longest idle time.
   */
  readonly agentAvailabilityTimer?: RoutingProfileAgentAvailabilityTimer;
  /**
   * The Amazon Resource Name (ARN) of the default outbound queue for the routing profile.
   */
  readonly defaultOutboundQueue: IQueue;
  /**
   * Contains information about the queue and channel for manual assignment behavior can be enabled.
   */
  readonly manualAssignmentQueueConfigs?: RoutingProfileManualAssignmentQueueConfig[];
  /**
   * The inbound queues associated with the routing profile. If no queue is added, the agent
   * can make only outbound calls.
   */
  readonly queueConfigs?: RoutingProfileQueueConfig[];
  /**
   * The channels agents can handle in the Contact Control Panel (CCP) for this
   * routing profile.
   */
  readonly mediaConcurrencies: RoutingProfileMediaCurrency[];
}

const DUMMY_ROUTING_PROFILE_PROPS = {
  instanceArn: 'instance-arn',
  routingProfileArn: 'routing-profile-arn',
};

export interface RoutingProfileLookupOptions {
  readonly instanceArn: string;
  readonly routingProfileArn?: string;
  readonly routingProfileId?: string;
  readonly name?: string;
}

export class RoutingProfile extends Resource implements IRoutingProfile {
  public static fromLookup(scope: Construct, id: string, options: RoutingProfileLookupOptions): IRoutingProfile {
    if (Token.isUnresolved(options.name)
      || Token.isUnresolved(options.instanceArn)
      || Token.isUnresolved(options.routingProfileArn)
      || Token.isUnresolved(options.routingProfileId)) {
      throw new ValidationError(lit`Arguments`, 'All arguments to RoutingP_rofile.fromLookup() must be concrete (no Tokens)', scope);
    }

    const filter: any = {};

    filter.resourceModel = {
      InstanceArn: options.instanceArn,
    };
    if (options.routingProfileArn) {
      filter.exactIdentifier = options.routingProfileArn;
    } else if (options.routingProfileId) {
      filter.exactIdentifier = options.routingProfileId;
    }
    if (options.name) {
      filter.propertyMatch ||= {};
      filter.propertyMatch.Name = options.name;
    }

    const response: { [key: string]: any }[] = ContextProvider.getValue(scope, {
      provider: cxschema.ContextProvider.CC_API_PROVIDER,
      props: {
        typeName: 'AWS::Connect::RoutingProfile',
        ...filter,
        propertiesToReturn: ['RoutingProfileArn', 'Name'],
        expectedMatchCount: 'exactly-one',
      } as cxschema.CcApiContextQuery,
      dummyValue: undefined,
    }).value;

    let instance = undefined;
    if (response && response[0]) {
      instance = {
        instanceArn: options.instanceArn,
        userArn: response[0].RoutingProfileArn,
        name: response[0].Name,
      };
    }
    return new LookedUpRoutingProfile(scope, id, instance ?? DUMMY_ROUTING_PROFILE_PROPS, instance === undefined);
  }

  private readonly resource: connect.CfnRoutingProfile;

  constructor(scope: Construct, id: string, props: RoutingProfileProps) {
    super(scope, id);

    addConstructMetadata(this, props);

    this.resource = new connect.CfnRoutingProfile(this, 'RoutingProfile', {
      instanceArn: props.instance.instanceArn,
      name: props.name,
      description: props.description,
      defaultOutboundQueueArn: props.defaultOutboundQueue.queueArn,
      agentAvailabilityTimer: props.agentAvailabilityTimer,
      manualAssignmentQueueConfigs: props.manualAssignmentQueueConfigs?.map(m => ({
        queueReference: {
          queueArn: m.queue.queueArn,
          channel: m.channel,
        },
      })),
      mediaConcurrencies: props.mediaConcurrencies.map(m => ({
        channel: m.channel,
        concurrency: m.concurrency,
        crossChannelBehavior: m.crossChannelBehavior && {
          behaviorType: m.crossChannelBehavior,
        },
      })),
      queueConfigs: props.queueConfigs?.map(m => ({
        queueReference: {
          queueArn: m.queue.queueArn,
          channel: m.channel,
        },
        priority: m.priority,
        delay: m.delay.toSeconds({ integral: true }),
      })),
    });
  }

  get routingProfileArn(): string {
    return this.resource.attrRoutingProfileArn;
  }
}

class LookedUpRoutingProfile extends Resource implements IRoutingProfile {
  public readonly routingProfileArn: string;
  public readonly instanceArn: string;
  public readonly name: string;
  public readonly incompleteDefinition: boolean;

  constructor(scope: Construct, id: string, props: any, isIncomplete: boolean) {
    super(scope, id, {
      region: props.region,
      account: props.ownerAccountId,
    });

    addConstructMetadata(this, id);

    this.instanceArn = props.instanceArn;
    this.routingProfileArn = props.routingProfileArn;
    this.name = props.name;
    this.incompleteDefinition = isIncomplete;
  }
}