import {
  aws_kinesis as kinesis,
  aws_kinesisfirehose as kinesisfirehose,
  aws_kms as kms,
  aws_connect as connect,
  aws_s3 as s3, RemovalPolicy,
} from 'aws-cdk-lib';

export enum StorageResourceType {
  CHAT_TRANSCRIPTS = 'CHAT_TRANSCRIPTS',
  CALL_RECORDINGS = 'CALL_RECORDINGS',
  SCHEDULED_REPORTS = 'SCHEDULED_REPORTS',
  MEDIA_STREAMS = 'MEDIA_STREAMS',
  CONTACT_TRACE_RECORDS = 'CONTACT_TRACE_RECORDS',
  AGENT_EVENTS = 'AGENT_EVENTS',
}

export enum StorageEncryptionType {
  KMS = 'KMS',
}

export enum StorageConfigType {
  S3 = 'S3',
  KINESIS_VIDEO_STREAM = 'KINESIS_VIDEO_STREAM',
  KINESIS_STREAM = 'KINESIS_STREAM',
  KINESIS_FIREHOSE = 'KINESIS_FIREHOSE',
}

export interface StorageEncryptionConfig {
  /**
   * The type of encryption used on the stream.
   */
  readonly encryptionType: StorageEncryptionType;
  /**
   * The KMS key used for encryption.
   */
  readonly encryptionKey: kms.IKey;
}

export interface StorageConfigKinesisVideoStream {
  /**
   * The encryption configuration for the Kinesis Video Stream.
   */
  readonly encryptionConfig: StorageEncryptionConfig;
  /**
   * The prefix of the video stream
   */
  readonly prefix: string;
  /**
   * Kinesis Video Streams retains the data in a data store that is associated with the stream.
   *
   * The default value is 0, indicating that the stream does not persist data.
   */
  readonly retentionPeriodHours?: number;
  /**
   * the removal policy. Default RemovalPolicy.DESTROY or what is set on the Instance (when created in this stack)
   */
  readonly removalPolicy?: RemovalPolicy;
}

export interface StorageConfigS3 {
  /**
   * The bucket where the data will be stored
   */
  readonly bucket: s3.IBucket;
  /**
   * The prefix within the bucket
   */
  readonly prefix: string;
  /**
   * The optional encryption configuration.
   */
  readonly encryptionConfig?: StorageEncryptionConfig;
  /**
   * the removal policy. Default RemovalPolicy.DESTROY or what is set on the Instance (when created in this stack)
   */
  readonly removalPolicy?: RemovalPolicy;
}

export interface StorageConfigKinesisStream {
  readonly stream: kinesis.IStream;
  /**
   * the removal policy. Default RemovalPolicy.DESTROY or what is set on the Instance (when created in this stack)
   */
  readonly removalPolicy?: RemovalPolicy;
}

export interface StorageConfigKinesisFirehose {
  readonly firehose: kinesisfirehose.IDeliveryStream;
  /**
   * the removal policy. Default RemovalPolicy.DESTROY or what is set on the Instance (when created in this stack)
   */
  readonly removalPolicy?: RemovalPolicy;
}

export class StorageConfig {
  static buildS3(resourceType: StorageResourceType, props: StorageConfigS3) {
    return new StorageConfig({
      resourceType,
      storageType: StorageConfigType.S3,
      s3Config: props,
      removalPolicy: props.removalPolicy,
    });
  }

  static buildKinesisVideoStream(
    resourceType: StorageResourceType,
    props: StorageConfigKinesisVideoStream,
  ) {
    return new StorageConfig({
      resourceType,
      storageType: StorageConfigType.KINESIS_VIDEO_STREAM,
      kinesisVideoStreamConfig: props,
      removalPolicy: props.removalPolicy,
    });
  }

  static buildKinesisStream(resourceType: StorageResourceType, props: StorageConfigKinesisStream) {
    return new StorageConfig({
      resourceType,
      storageType: StorageConfigType.KINESIS_STREAM,
      kinesisStream: props.stream,
      removalPolicy: props.removalPolicy,
    });
  }

  static buildKinesisFirehose(resourceType: StorageResourceType, props: StorageConfigKinesisFirehose) {
    return new StorageConfig({
      resourceType,
      storageType: StorageConfigType.KINESIS_FIREHOSE,
      kinesisFirehose: props.firehose,
      removalPolicy: props.removalPolicy,
    });
  }

  private static readonly VALID_RESOURCES = {
    [StorageConfigType.S3]: [
      StorageResourceType.CHAT_TRANSCRIPTS,
      StorageResourceType.CALL_RECORDINGS,
      StorageResourceType.SCHEDULED_REPORTS,
    ],
    [StorageConfigType.KINESIS_STREAM]: [
      StorageResourceType.CONTACT_TRACE_RECORDS,
      StorageResourceType.AGENT_EVENTS,
    ],
    [StorageConfigType.KINESIS_FIREHOSE]: [
      StorageResourceType.CONTACT_TRACE_RECORDS,
    ],
    [StorageConfigType.KINESIS_VIDEO_STREAM]: [
      StorageResourceType.MEDIA_STREAMS,
    ],
  };

  readonly resourceType: StorageResourceType;
  readonly storageType: StorageConfigType;
  readonly kinesisFirehose?: kinesisfirehose.IDeliveryStream;
  readonly kinesisStream?: kinesis.IStream;
  readonly kinesisVideoStreamConfig?: StorageConfigKinesisVideoStream;
  readonly s3Config?: StorageConfigS3;
  readonly removalPolicy?: RemovalPolicy;


  private constructor({
    resourceType,
    storageType,
    kinesisFirehose,
    kinesisStream,
    kinesisVideoStreamConfig,
    s3Config,
    removalPolicy,
  }: {
    resourceType: StorageResourceType;
    kinesisFirehose?: kinesisfirehose.IDeliveryStream;
    kinesisStream?: kinesis.IStream;
    kinesisVideoStreamConfig?: StorageConfigKinesisVideoStream;
    storageType: StorageConfigType;
    s3Config?: StorageConfigS3;
    removalPolicy?: RemovalPolicy;
  }) {
    this.resourceType = resourceType;
    this.storageType = storageType;
    this.kinesisFirehose = kinesisFirehose;
    this.kinesisStream = kinesisStream;
    this.kinesisVideoStreamConfig = kinesisVideoStreamConfig;
    this.s3Config = s3Config;
    this.removalPolicy = removalPolicy;
  }

  checkConfig(): boolean {
    const valid = StorageConfig.VALID_RESOURCES[this.storageType];
    return valid.includes(this.resourceType);
  }

  asStorageConfigProps(instanceArn: string): connect.CfnInstanceStorageConfigProps {
    const props: Record<string, any> = {
      instanceArn,
      resourceType: this.resourceType,
      storageType: this.storageType,
    };
    switch (this.storageType) {
      case StorageConfigType.S3:
        props.s3Config = {
          bucketName: this.s3Config?.bucket.bucketName,
          bucketPrefix: this.s3Config?.prefix,
        };
        if (this.s3Config?.encryptionConfig) {
          props.s3Config.encryptionConfig = {
            encryptionType: this.s3Config.encryptionConfig.encryptionType,
            keyId: this.s3Config.encryptionConfig.encryptionKey.keyArn,
          };
        }
        break;
      case StorageConfigType.KINESIS_VIDEO_STREAM:
        props.kinesisVideoStreamConfig = {
          encryptionConfig: {
            encryptionType: this.kinesisVideoStreamConfig?.encryptionConfig.encryptionType,
            keyId: this.kinesisVideoStreamConfig?.encryptionConfig.encryptionKey.keyArn,
          },
          prefix: this.kinesisVideoStreamConfig?.prefix,
          retentionPeriodHours: this.kinesisVideoStreamConfig?.retentionPeriodHours ?? 0,
        };
        break;
      case StorageConfigType.KINESIS_STREAM:
        props.kinesisStreamConfig = {
          streamArn: this.kinesisStream?.streamArn,
        };
        break;
      case StorageConfigType.KINESIS_FIREHOSE:
        props.kinesisFirehoseConfig = {
          streamArn: this.kinesisFirehose?.deliveryStreamArn,
        };
        break;
    }
    return <connect.CfnInstanceStorageConfigProps>props;
  }
}