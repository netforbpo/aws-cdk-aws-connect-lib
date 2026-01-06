import { Vitest } from '@nikovirtala/projen-vitest';
import { awscdk, javascript } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Edward Rudd',
  authorAddress: 'edward.rudd@netfor.com',
  cdkVersion: '2.233.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.9.0',
  name: 'aws-connect-lib',
  majorVersion: 0,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/netforbpo/aws-connect-lib.git',
  packageManager: javascript.NodePackageManager.YARN_BERRY,
  yarnBerryOptions: {
    yarnRcOptions: {
      nodeLinker: javascript.YarnNodeLinker.NODE_MODULES,
    },
  },
  publishToPypi: {
    distName: 'aws-connect-lib',
    module: 'aws_connect_lib',
    twineRegistryUrl: 'http://pyoci.test:9000/ghcr.io/netforbpo/',
  },
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