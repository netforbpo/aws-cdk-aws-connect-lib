import { App, Stack, aws_s3 as s3 } from 'aws-cdk-lib';
import { Template, Annotations } from 'aws-cdk-lib/assertions';
import { describe, expect, it } from 'vitest';
// @ts-ignore
import { set } from 'vitest-plugin-set';
import {
  IdentityManagementType,
  Instance,
  InstanceProps,
  StorageConfig,
  StorageConfigType,
  StorageResourceType,
} from '../src';
import './vitest.d.ts';

declare global {
  let mockApp: App;
  let stack: Stack;
  let setupStack: Stack;
  let instance_props: InstanceProps;
  let template: Template;
  let annotations: Annotations;
  let storageConfigs: StorageConfig[];
}

set('mockApp', () => new App());
set('stack', () => new Stack(mockApp));
set('setupStack', () => stack);
set('template', () => Template.fromStack(setupStack));
set('annotations', () => Annotations.fromStack(setupStack));

describe('Connect lookup instance', () => {
  set('stack', () => new Stack(mockApp, 'stack', {
    env: {
      account: '123456789012',
      region: 'us-east-1',
    },
  }));
  set('template', () => Template.fromStack(stack));

  it('looks up an existing instance', () => {
    Instance.fromLookup(stack, 'existing-instance', {
      instanceName: 'netfor-poc',
    });

    expect(template).hasResourceCount('AWS::Connect::Instance', 0);
  });
});

describe('Connect Instance', () => {
  set('setupStack', () => {
    new Instance(stack, 'testing-stack', instance_props);
    return stack;
  });

  describe('Basic setup', () => {
    set('instance_props', () => ({
      identityType: IdentityManagementType.CONNECT_MANAGED,
      instanceAlias: 'testing-stack',
      telephonyConfig: { inboundCalls: true, outboundCalls: true },
    }));

    it('has an AWS::Connect::Instance resource', () => {
      expect(template).hasResource('AWS::Connect::Instance');
    });
  });

  describe('With missing alias (CONNECT_MANAGED', () => {
    set('instance_props', () => ({
      identityType: IdentityManagementType.CONNECT_MANAGED,
      telephonyConfig: { inboundCalls: true, outboundCalls: true },
    }));

    it('has an error annotation', () => {
      expect(annotations).hasError('*', 'instanceAlias is required when identityType is set to CONNECT_MANAGED or SAML');
    });
  });

  describe('With missing alias (SAML', () => {
    set('instance_props', () => ({
      identityType: IdentityManagementType.SAML,
      telephonyConfig: { inboundCalls: true, outboundCalls: true },
    }));

    it('has an error annotation', () => {
      expect(annotations).hasError('*', 'instanceAlias is required when identityType is set to CONNECT_MANAGED or SAML');
    });
  });

  describe('With missing directoryId (for EXISTING_DIRECTORY type)', () => {
    set('instance_props', () => ({
      identityType: IdentityManagementType.EXISTING_DIRECTORY,
      telephonyConfig: { inboundCalls: true, outboundCalls: true },
    }));

    it('has an error annotation', () => {
      expect(annotations).hasError('*', 'directoryId is required when identityType is set to EXISTING_DIRECTORY');
    });
  });

  describe('with storageConfigs', () => {
    set('instance_props', () => ({
      identityType: IdentityManagementType.CONNECT_MANAGED,
      instanceAlias: 'testing-stack',
      telephonyConfig: { inboundCalls: true, outboundCalls: true },
      storageConfigs,
    }));

    describe('with valid storage config', () => {
      set('storageConfigs', () => [
        StorageConfig.buildS3(StorageResourceType.CHAT_TRANSCRIPTS,
          {
            bucket: s3.Bucket.fromBucketName(stack, 'chat-transcripts-bucket', 'chat-transcripts-bucket'),
            prefix: 'chat-transcripts',
          }),
      ]);

      it('registers the storage config', () => {
        expect(template).hasResourceProperties('AWS::Connect::InstanceStorageConfig', {
          ResourceType: StorageResourceType.CHAT_TRANSCRIPTS,
          StorageType: StorageConfigType.S3,
          S3Config: {
            BucketName: 'chat-transcripts-bucket',
            BucketPrefix: 'chat-transcripts',
          },
        });
      });
    });

    describe('with invalid storage config', () => {
      set('storageConfigs', () => [
        StorageConfig.buildS3(StorageResourceType.AGENT_EVENTS,
          {
            bucket: s3.Bucket.fromBucketName(stack, 'chat-transcripts-bucket', 'chat-transcripts-bucket'),
            prefix: 'chat-transcripts',
          }),
      ]);

      it('sets an annotation', () => {
        expect(template).not.hasResourceProperties('AWS::Connect::InstanceStorageConfig');
        expect(annotations).hasError('*', `Invalid storage configuration for resourceType ${StorageResourceType.AGENT_EVENTS} and storageType ${StorageConfigType.S3}`);
      });
    });

    describe('with duplicate resource type', () => {
      set('storageConfigs', () => [
        StorageConfig.buildS3(StorageResourceType.CHAT_TRANSCRIPTS,
          {
            bucket: s3.Bucket.fromBucketName(stack, 'chat-transcripts-bucket', 'chat-transcripts-bucket'),
            prefix: 'chat-transcripts',
          }),
        StorageConfig.buildS3(StorageResourceType.CHAT_TRANSCRIPTS,
          {
            bucket: s3.Bucket.fromBucketName(stack, 'chat-transcripts-bucket-alt', 'chat-transcripts-bucket-alt'),
            prefix: 'chat-transcripts',
          }),
      ]);

      it('sets an annotation', () => {
        expect(template).hasResourceCount('AWS::Connect::InstanceStorageConfig', 1);
        expect(annotations).hasError('*', `Duplicate resourceType ${StorageResourceType.CHAT_TRANSCRIPTS} in storageConfig`);
      });
    });
  });
});