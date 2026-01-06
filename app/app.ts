import {
  App, Stack
} from 'aws-cdk-lib';
import { Instance, ContactFlow } from "../src";
import { HoursOfOperation } from "../src/hours_of_operation";

const app = new App();
const stack = new Stack(app, 'netfor-poc', {
  env: {
    account: '047719658458',
    region: 'us-east-1',
  }
});
const instance = Instance.fromLookup(stack, 'netfor-poc', {
  // instanceId: 'fa7ecd47-517a-40de-b72c-c331f6748cfa',
  // instanceName: 'netfor-poc',
  instanceArn: 'arn:aws:connect:us-east-1:047719658458:instance/fa7ecd47-517a-40de-b72c-c331f6748cfa',
});

const flow = ContactFlow.fromLookup(stack, 'flow', {
  instanceArn: instance.instanceArn,
  contactFlowName: 'dev-MAIN_FLOW',
});


new HoursOfOperation(stack, 'HOO', {
  instance: instance,
  name: 'netfor-poc',
});
