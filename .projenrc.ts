import { Vitest } from '@nikovirtala/projen-vitest';
import { awscdk, javascript, release } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'netforbpo',
  authorOrganization: true,
  authorAddress: 'https://github.com/netforbpo',
  cdkVersion: '2.233.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.9.0',
  name: '@netforbpo/aws-cdk-aws-connect-lib',
  majorVersion: 0,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/netforbpo/aws-cdk-aws-connect-lib.git',
  packageManager: javascript.NodePackageManager.YARN_BERRY,
  yarnBerryOptions: {
    version: '1.22.22',
    yarnRcOptions: {
      nodeLinker: javascript.YarnNodeLinker.NODE_MODULES,
      yarnPath: '.yarn/releases/yarn-4.4.1.cjs',
    },
  },
  docgen: false,
  publishToPypi: {
    distName: 'netforbpo-aws-cdk-aws-connect-lib',
    module: 'aws_cdk_connect_lib',
  },
  depsUpgrade: false,
  releaseTrigger: release.ReleaseTrigger.manual(),
  stability: 'experimental',
  devDeps: [
    '@nikovirtala/projen-vitest',
    'vitest-plugin-set',
  ],
  jest: false,
});

new Vitest(project, {
  extraConfig: {
    expect: {
      requireAssertions: true,
    },
    setupFiles: [
      './test/vitest.setup.ts',
    ],
  },
});

project.synth();