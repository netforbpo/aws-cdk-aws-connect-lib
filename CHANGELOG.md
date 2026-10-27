
## [0.3.3](https://github.com/netforbpo/aws-cdk-aws-connect-lib/compare/v0.3.2...v0.3.3) (2026-10-27)

### Bug Fixes

* Correct ability to create a prompt ([a2e2021](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/a2e2021aef99da62fe9bb0e8384bcd195a8d9f67))

## [0.3.2](https://github.com/netforbpo/aws-cdk-aws-connect-lib/compare/v0.3.1...v0.3.2) (2026-10-14)

### Features

* expose the view module ([3b1a719](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/3b1a719bd749d4bd9d97bcb62714854dfeea6fec))

## [0.3.1](https://github.com/netforbpo/aws-cdk-aws-connect-lib/compare/v0.3.0...v0.3.1) (2026-10-14)

### Features

* add in the basic implementation of creating a view ([c3c0b8a](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/c3c0b8aa619487d33361e4cbcf0350db1831047f))
* retain the current contact flow module version so previous versions are not deleted ([b09bff3](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/b09bff3195fa170ec288f54ee38ddeaea21c7377))

### Bug Fixes

* correct setting description on contact flow and contact flow modules ([27baa02](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/27baa02efc51c2c85c906687b25106e7f11db7a7))

## [0.3.0](https://github.com/netforbpo/aws-cdk-aws-connect-lib/compare/v0.2.13...v0.3.0) (2026-10-14)

### ⚠ BREAKING CHANGES

* all logical IDs will change with this update.
  Marking removalPolicy to retain, removing the resources, and then re-importing with retain will re-align things.

### Features

* Major rework of constructs ([994b94d](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/994b94d4cf6adabe7c421ffbb2b9a7c6f5cf57db))

## [0.2.13](https://github.com/netforbpo/aws-cdk-aws-connect-lib/compare/v0.2.12...v0.2.13) (2026-10-13)

### Features

* return the created alias from the addAlias function ([77f82b1](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/77f82b189b8f06a0933a2a2b237f43f639b494cf))

## [0.2.12](https://github.com/netforbpo/aws-cdk-aws-connect-lib/compare/v0.2.11...v0.2.12) (2026-10-13)

### Features

* cleanup the alias creation and expose a generic reference Id to be used in flow building ([d651df0](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/d651df0e8494a876fa6e5705d99d3a6cc0a673f6))

## [0.2.11](https://github.com/netforbpo/aws-cdk-aws-connect-lib/compare/v0.2.10...v0.2.11) (2026-10-13)

### Features

* add in contact flow module versioning and aliasing ([216104a](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/216104adb88f9c4309ab5aed849ca77edc926611))

## [0.2.10](https://github.com/netforbpo/aws-cdk-aws-connect-lib/compare/v0.2.9...v0.2.10) (2026-10-13)

### Features

* add prompt construct ([0cdd0f8](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/0cdd0f86720dbda49c23a4ce0917d6ac32fcd594))
* expose contactFlowId, contactFlowModuleId, and queueId ([e9b953c](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/e9b953c6a9aa8fa8af8cda525b16cde8cf268c28))

## [0.2.9](https://github.com/netforbpo/aws-cdk-aws-connect-lib/compare/v0.2.8...v0.2.9) (2026-10-12)

### Bug Fixes

* correct the exposure of the instanceId to be correct ([448764c](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/448764cb9b37ab5ce8b3b6d717ef612b91f56363))

## [0.2.8](https://github.com/netforbpo/aws-cdk-aws-connect-lib/compare/v0.2.7...v0.2.8) (2026-10-12)

### Features

* expose dataTableId from the data table class ([85378e3](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/85378e308077c3ec8954d4d29880d3907604a1e7))

## [0.2.7](https://github.com/netforbpo/aws-cdk-aws-connect-lib/compare/v0.2.6...v0.2.7) (2026-10-12)

### Features

* allow attaching storage, lambdas, and lex bots from other scopes ([c8ab43c](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/c8ab43c40a4ed2d8f58b446db138a5a1af1ccdcc))
* remove extraneous debug line ([932ecfc](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/932ecfc0322f0ce9f64c2f0a9aa711f76b2a7d37))

## [0.2.6](https://github.com/netforbpo/aws-cdk-aws-connect-lib/compare/v0.2.5...v0.2.6) (2026-10-09)

### Bug Fixes

* add missing data table export ([86d7817](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/86d781717ec993bc2188e968064e08fcc80902e4))
* correct missing readonly on an interface ([6bbca6e](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/6bbca6e035e01a3eefa905ae7e9925e5d531589b))

## [0.2.5](https://github.com/netforbpo/aws-cdk-aws-connect-lib/compare/v0.2.4...v0.2.5) (2026-10-09)

### Features

* update and dedupe packages ([c2f4dbe](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/c2f4dbed01f51b627eec1985e66ee1134301d1a2))

## [0.2.4](https://github.com/netforbpo/aws-cdk-aws-connect-lib/compare/v0.2.3...v0.2.4) (2026-10-08)

### Features

* implement fromLookup for more resources and update to newer CDK with more CloudFormation functionality. ([537750f](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/537750fc57dca33fc71fd473354385849822ce8e))

## [0.2.3](https://github.com/netforbpo/aws-cdk-aws-connect-lib/compare/v0.2.2...v0.2.3) (2026-01-22)


### Bug Fixes

* correct storage type for S3 bucket (it is just S3) ([45c51cc](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/45c51cc3d9e3ef8a75df032c30ea4d9999ccd59a))

## [0.2.2](https://github.com/netforbpo/aws-cdk-aws-connect-lib/compare/v0.2.1...v0.2.2) (2026-01-13)


### Features

* add in custom attribute handling and retain policy handling ([00eaa2d](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/00eaa2d9fb228be1e8880c75153ea57e773a4675))

## [0.2.1](https://github.com/netforbpo/aws-cdk-aws-connect-lib/compare/v0.2.0...v0.2.1) (2026-01-09)


### Features

* ignore local env files when packaging ([1456696](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/1456696fa604fe609cd2e822b8bd6eb6ad6647d4))

## [0.2.0](https://github.com/netforbpo/aws-cdk-aws-connect-lib/compare/v0.1.0...v0.2.0) (2026-01-09)


### ⚠ BREAKING CHANGES

* rework associateFunction and associateLexBot to work correctly with references

### Features

* add in extra keywords to the package.json ([9e06ed3](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/9e06ed38e50ce7dca86f2cb6fc7a207b892e5db3))
* rework associateFunction and associateLexBot to work correctly with references ([b34b22a](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/b34b22a07fb1c7bc223f0003846f318bb780d525))


### Bug Fixes

* ensure package is declared public ([a44e2dd](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/a44e2dd982862337828050383da9338905a487da))

## 0.1.0 (2026-01-07)


### Features

* add in initial base implementation of L2 constructs ([73f62f7](https://github.com/netforbpo/aws-cdk-aws-connect-lib/commit/73f62f7643ba401af34c32850aed7f4f11a5d252))

