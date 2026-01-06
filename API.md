# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactFlow <a name="ContactFlow" id="aws-cdk-aws-connect-lib.ContactFlow"></a>

- *Implements:* <a href="#aws-cdk-aws-connect-lib.IContactFlow">IContactFlow</a>

#### Initializers <a name="Initializers" id="aws-cdk-aws-connect-lib.ContactFlow.Initializer"></a>

```typescript
import { ContactFlow } from 'aws-cdk-aws-connect-lib'

new ContactFlow(scope: Construct, id: string, props: ContactFlowProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlow.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlow.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-aws-connect-lib.ContactFlowProps">ContactFlowProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-aws-connect-lib.ContactFlow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-aws-connect-lib.ContactFlow.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-aws-connect-lib.ContactFlow.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.ContactFlowProps">ContactFlowProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlow.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-cdk-aws-connect-lib.ContactFlow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-cdk-aws-connect-lib.ContactFlow.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-cdk-aws-connect-lib.ContactFlow.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlow.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlow.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlow.fromLookup">fromLookup</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-cdk-aws-connect-lib.ContactFlow.isConstruct"></a>

```typescript
import { ContactFlow } from 'aws-cdk-aws-connect-lib'

ContactFlow.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-aws-connect-lib.ContactFlow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-cdk-aws-connect-lib.ContactFlow.isOwnedResource"></a>

```typescript
import { ContactFlow } from 'aws-cdk-aws-connect-lib'

ContactFlow.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.ContactFlow.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-cdk-aws-connect-lib.ContactFlow.isResource"></a>

```typescript
import { ContactFlow } from 'aws-cdk-aws-connect-lib'

ContactFlow.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.ContactFlow.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromLookup` <a name="fromLookup" id="aws-cdk-aws-connect-lib.ContactFlow.fromLookup"></a>

```typescript
import { ContactFlow } from 'aws-cdk-aws-connect-lib'

ContactFlow.fromLookup(scope: Construct, id: string, options: ContactFlowLookupOptions)
```

###### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-aws-connect-lib.ContactFlow.fromLookup.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-aws-connect-lib.ContactFlow.fromLookup.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="aws-cdk-aws-connect-lib.ContactFlow.fromLookup.parameter.options"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.ContactFlowLookupOptions">ContactFlowLookupOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlow.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlow.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlow.property.contactFlowArn">contactFlowArn</a></code> | <code>string</code> | The ARN of the flow. |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlow.property.contactFlowName">contactFlowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlow.property.flow">flow</a></code> | <code>aws-cdk-lib.aws_connect.CfnContactFlow</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlow.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.ContactFlow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.ContactFlow.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.ContactFlow.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `contactFlowArn`<sup>Required</sup> <a name="contactFlowArn" id="aws-cdk-aws-connect-lib.ContactFlow.property.contactFlowArn"></a>

```typescript
public readonly contactFlowArn: string;
```

- *Type:* string

The ARN of the flow.

---

##### `contactFlowName`<sup>Required</sup> <a name="contactFlowName" id="aws-cdk-aws-connect-lib.ContactFlow.property.contactFlowName"></a>

```typescript
public readonly contactFlowName: string;
```

- *Type:* string

---

##### `flow`<sup>Required</sup> <a name="flow" id="aws-cdk-aws-connect-lib.ContactFlow.property.flow"></a>

```typescript
public readonly flow: CfnContactFlow;
```

- *Type:* aws-cdk-lib.aws_connect.CfnContactFlow

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="aws-cdk-aws-connect-lib.ContactFlow.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---


### ContactFlowModule <a name="ContactFlowModule" id="aws-cdk-aws-connect-lib.ContactFlowModule"></a>

- *Implements:* <a href="#aws-cdk-aws-connect-lib.IContactFlowModule">IContactFlowModule</a>

#### Initializers <a name="Initializers" id="aws-cdk-aws-connect-lib.ContactFlowModule.Initializer"></a>

```typescript
import { ContactFlowModule } from 'aws-cdk-aws-connect-lib'

new ContactFlowModule(scope: Construct, id: string, props: ContactFlowModuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModule.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModuleProps">ContactFlowModuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-aws-connect-lib.ContactFlowModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-aws-connect-lib.ContactFlowModule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-aws-connect-lib.ContactFlowModule.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.ContactFlowModuleProps">ContactFlowModuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-cdk-aws-connect-lib.ContactFlowModule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-cdk-aws-connect-lib.ContactFlowModule.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-cdk-aws-connect-lib.ContactFlowModule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModule.fromLookup">fromLookup</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-cdk-aws-connect-lib.ContactFlowModule.isConstruct"></a>

```typescript
import { ContactFlowModule } from 'aws-cdk-aws-connect-lib'

ContactFlowModule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-aws-connect-lib.ContactFlowModule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-cdk-aws-connect-lib.ContactFlowModule.isOwnedResource"></a>

```typescript
import { ContactFlowModule } from 'aws-cdk-aws-connect-lib'

ContactFlowModule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.ContactFlowModule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-cdk-aws-connect-lib.ContactFlowModule.isResource"></a>

```typescript
import { ContactFlowModule } from 'aws-cdk-aws-connect-lib'

ContactFlowModule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.ContactFlowModule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromLookup` <a name="fromLookup" id="aws-cdk-aws-connect-lib.ContactFlowModule.fromLookup"></a>

```typescript
import { ContactFlowModule } from 'aws-cdk-aws-connect-lib'

ContactFlowModule.fromLookup(scope: Construct, id: string, options: ContactFlowModuleLookupOptions)
```

###### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-aws-connect-lib.ContactFlowModule.fromLookup.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-aws-connect-lib.ContactFlowModule.fromLookup.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="aws-cdk-aws-connect-lib.ContactFlowModule.fromLookup.parameter.options"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.ContactFlowModuleLookupOptions">ContactFlowModuleLookupOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModule.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModule.property.contactFlowModuleArn">contactFlowModuleArn</a></code> | <code>string</code> | The ARN of the flow. |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModule.property.contactFlowModuleName">contactFlowModuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModule.property.flowModule">flowModule</a></code> | <code>aws-cdk-lib.aws_connect.CfnContactFlowModule</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModule.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.ContactFlowModule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.ContactFlowModule.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.ContactFlowModule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `contactFlowModuleArn`<sup>Required</sup> <a name="contactFlowModuleArn" id="aws-cdk-aws-connect-lib.ContactFlowModule.property.contactFlowModuleArn"></a>

```typescript
public readonly contactFlowModuleArn: string;
```

- *Type:* string

The ARN of the flow.

---

##### `contactFlowModuleName`<sup>Required</sup> <a name="contactFlowModuleName" id="aws-cdk-aws-connect-lib.ContactFlowModule.property.contactFlowModuleName"></a>

```typescript
public readonly contactFlowModuleName: string;
```

- *Type:* string

---

##### `flowModule`<sup>Required</sup> <a name="flowModule" id="aws-cdk-aws-connect-lib.ContactFlowModule.property.flowModule"></a>

```typescript
public readonly flowModule: CfnContactFlowModule;
```

- *Type:* aws-cdk-lib.aws_connect.CfnContactFlowModule

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="aws-cdk-aws-connect-lib.ContactFlowModule.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---


### EmailAddress <a name="EmailAddress" id="aws-cdk-aws-connect-lib.EmailAddress"></a>

- *Implements:* <a href="#aws-cdk-aws-connect-lib.IEmailAddress">IEmailAddress</a>

#### Initializers <a name="Initializers" id="aws-cdk-aws-connect-lib.EmailAddress.Initializer"></a>

```typescript
import { EmailAddress } from 'aws-cdk-aws-connect-lib'

new EmailAddress(scope: Construct, id: string, props: EmailAddressProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.EmailAddress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.EmailAddress.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.EmailAddress.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-aws-connect-lib.EmailAddressProps">EmailAddressProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-aws-connect-lib.EmailAddress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-aws-connect-lib.EmailAddress.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-aws-connect-lib.EmailAddress.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.EmailAddressProps">EmailAddressProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.EmailAddress.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-aws-connect-lib.EmailAddress.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-cdk-aws-connect-lib.EmailAddress.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-cdk-aws-connect-lib.EmailAddress.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-cdk-aws-connect-lib.EmailAddress.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.EmailAddress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-cdk-aws-connect-lib.EmailAddress.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-cdk-aws-connect-lib.EmailAddress.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-cdk-aws-connect-lib.EmailAddress.isConstruct"></a>

```typescript
import { EmailAddress } from 'aws-cdk-aws-connect-lib'

EmailAddress.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-aws-connect-lib.EmailAddress.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-cdk-aws-connect-lib.EmailAddress.isOwnedResource"></a>

```typescript
import { EmailAddress } from 'aws-cdk-aws-connect-lib'

EmailAddress.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.EmailAddress.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-cdk-aws-connect-lib.EmailAddress.isResource"></a>

```typescript
import { EmailAddress } from 'aws-cdk-aws-connect-lib'

EmailAddress.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.EmailAddress.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.EmailAddress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.EmailAddress.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.EmailAddress.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.EmailAddress.property.emailAddress">emailAddress</a></code> | <code>aws-cdk-lib.aws_connect.CfnEmailAddress</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.EmailAddress.property.emailAddressArn">emailAddressArn</a></code> | <code>string</code> | The ARN of the email address. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.EmailAddress.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.EmailAddress.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.EmailAddress.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="aws-cdk-aws-connect-lib.EmailAddress.property.emailAddress"></a>

```typescript
public readonly emailAddress: CfnEmailAddress;
```

- *Type:* aws-cdk-lib.aws_connect.CfnEmailAddress

---

##### `emailAddressArn`<sup>Required</sup> <a name="emailAddressArn" id="aws-cdk-aws-connect-lib.EmailAddress.property.emailAddressArn"></a>

```typescript
public readonly emailAddressArn: string;
```

- *Type:* string

The ARN of the email address.

---


### HoursOfOperation <a name="HoursOfOperation" id="aws-cdk-aws-connect-lib.HoursOfOperation"></a>

- *Implements:* <a href="#aws-cdk-aws-connect-lib.IHoursOfOperation">IHoursOfOperation</a>

#### Initializers <a name="Initializers" id="aws-cdk-aws-connect-lib.HoursOfOperation.Initializer"></a>

```typescript
import { HoursOfOperation } from 'aws-cdk-aws-connect-lib'

new HoursOfOperation(scope: Construct, id: string, props: HoursOfOperationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperation.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationProps">HoursOfOperationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-aws-connect-lib.HoursOfOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-aws-connect-lib.HoursOfOperation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-aws-connect-lib.HoursOfOperation.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.HoursOfOperationProps">HoursOfOperationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperation.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-cdk-aws-connect-lib.HoursOfOperation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-cdk-aws-connect-lib.HoursOfOperation.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-cdk-aws-connect-lib.HoursOfOperation.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperation.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperation.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperation.fromLookup">fromLookup</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-cdk-aws-connect-lib.HoursOfOperation.isConstruct"></a>

```typescript
import { HoursOfOperation } from 'aws-cdk-aws-connect-lib'

HoursOfOperation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-aws-connect-lib.HoursOfOperation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-cdk-aws-connect-lib.HoursOfOperation.isOwnedResource"></a>

```typescript
import { HoursOfOperation } from 'aws-cdk-aws-connect-lib'

HoursOfOperation.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.HoursOfOperation.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-cdk-aws-connect-lib.HoursOfOperation.isResource"></a>

```typescript
import { HoursOfOperation } from 'aws-cdk-aws-connect-lib'

HoursOfOperation.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.HoursOfOperation.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromLookup` <a name="fromLookup" id="aws-cdk-aws-connect-lib.HoursOfOperation.fromLookup"></a>

```typescript
import { HoursOfOperation } from 'aws-cdk-aws-connect-lib'

HoursOfOperation.fromLookup(scope: Construct, id: string, options: HoursOfOperationLookupOptions)
```

###### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-aws-connect-lib.HoursOfOperation.fromLookup.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-aws-connect-lib.HoursOfOperation.fromLookup.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="aws-cdk-aws-connect-lib.HoursOfOperation.fromLookup.parameter.options"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.HoursOfOperationLookupOptions">HoursOfOperationLookupOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperation.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperation.property.hoursOfOperation">hoursOfOperation</a></code> | <code>aws-cdk-lib.aws_connect.CfnHoursOfOperation</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperation.property.hoursOfOperationArn">hoursOfOperationArn</a></code> | <code>string</code> | The ARN of the hours of operation. |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperation.property.instance">instance</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperation.property.instanceArn">instanceArn</a></code> | <code>string</code> | The ARN of the attached instance. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.HoursOfOperation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.HoursOfOperation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.HoursOfOperation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `hoursOfOperation`<sup>Required</sup> <a name="hoursOfOperation" id="aws-cdk-aws-connect-lib.HoursOfOperation.property.hoursOfOperation"></a>

```typescript
public readonly hoursOfOperation: CfnHoursOfOperation;
```

- *Type:* aws-cdk-lib.aws_connect.CfnHoursOfOperation

---

##### `hoursOfOperationArn`<sup>Required</sup> <a name="hoursOfOperationArn" id="aws-cdk-aws-connect-lib.HoursOfOperation.property.hoursOfOperationArn"></a>

```typescript
public readonly hoursOfOperationArn: string;
```

- *Type:* string

The ARN of the hours of operation.

---

##### `instance`<sup>Required</sup> <a name="instance" id="aws-cdk-aws-connect-lib.HoursOfOperation.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="aws-cdk-aws-connect-lib.HoursOfOperation.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The ARN of the attached instance.

---


### Instance <a name="Instance" id="aws-cdk-aws-connect-lib.Instance"></a>

- *Implements:* <a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a>

#### Initializers <a name="Initializers" id="aws-cdk-aws-connect-lib.Instance.Initializer"></a>

```typescript
import { Instance } from 'aws-cdk-aws-connect-lib'

new Instance(scope: Construct, id: string, props: InstanceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-aws-connect-lib.InstanceProps">InstanceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-aws-connect-lib.Instance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-aws-connect-lib.Instance.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-aws-connect-lib.Instance.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.InstanceProps">InstanceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.addStorageConfig">addStorageConfig</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.associateFunction">associateFunction</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.associateLexBot">associateLexBot</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="aws-cdk-aws-connect-lib.Instance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-cdk-aws-connect-lib.Instance.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-cdk-aws-connect-lib.Instance.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addStorageConfig` <a name="addStorageConfig" id="aws-cdk-aws-connect-lib.Instance.addStorageConfig"></a>

```typescript
public addStorageConfig(config: StorageConfig): void
```

###### `config`<sup>Required</sup> <a name="config" id="aws-cdk-aws-connect-lib.Instance.addStorageConfig.parameter.config"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.StorageConfig">StorageConfig</a>

---

##### `associateFunction` <a name="associateFunction" id="aws-cdk-aws-connect-lib.Instance.associateFunction"></a>

```typescript
public associateFunction(func: IFunction): void
```

###### `func`<sup>Required</sup> <a name="func" id="aws-cdk-aws-connect-lib.Instance.associateFunction.parameter.func"></a>

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---

##### `associateLexBot` <a name="associateLexBot" id="aws-cdk-aws-connect-lib.Instance.associateLexBot"></a>

```typescript
public associateLexBot(bot: IBotAliasRef, id?: string): void
```

###### `bot`<sup>Required</sup> <a name="bot" id="aws-cdk-aws-connect-lib.Instance.associateLexBot.parameter.bot"></a>

- *Type:* aws-cdk-lib.interfaces.aws_lex.IBotAliasRef

---

###### `id`<sup>Optional</sup> <a name="id" id="aws-cdk-aws-connect-lib.Instance.associateLexBot.parameter.id"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.fromLookup">fromLookup</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-cdk-aws-connect-lib.Instance.isConstruct"></a>

```typescript
import { Instance } from 'aws-cdk-aws-connect-lib'

Instance.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-aws-connect-lib.Instance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-cdk-aws-connect-lib.Instance.isOwnedResource"></a>

```typescript
import { Instance } from 'aws-cdk-aws-connect-lib'

Instance.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.Instance.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-cdk-aws-connect-lib.Instance.isResource"></a>

```typescript
import { Instance } from 'aws-cdk-aws-connect-lib'

Instance.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.Instance.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromLookup` <a name="fromLookup" id="aws-cdk-aws-connect-lib.Instance.fromLookup"></a>

```typescript
import { Instance } from 'aws-cdk-aws-connect-lib'

Instance.fromLookup(scope: Construct, id: string, options: InstanceLookupOptions)
```

###### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-aws-connect-lib.Instance.fromLookup.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-aws-connect-lib.Instance.fromLookup.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="aws-cdk-aws-connect-lib.Instance.fromLookup.parameter.options"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.InstanceLookupOptions">InstanceLookupOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.property.instance">instance</a></code> | <code>aws-cdk-lib.aws_connect.CfnInstance</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.property.instanceArn">instanceArn</a></code> | <code>string</code> | The ARN of the instance. |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.property.instanceId">instanceId</a></code> | <code>string</code> | The instance identifier. |
| <code><a href="#aws-cdk-aws-connect-lib.Instance.property.instanceName">instanceName</a></code> | <code>string</code> | The instance name. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.Instance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.Instance.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.Instance.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `instance`<sup>Required</sup> <a name="instance" id="aws-cdk-aws-connect-lib.Instance.property.instance"></a>

```typescript
public readonly instance: CfnInstance;
```

- *Type:* aws-cdk-lib.aws_connect.CfnInstance

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="aws-cdk-aws-connect-lib.Instance.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The ARN of the instance.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="aws-cdk-aws-connect-lib.Instance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The instance identifier.

---

##### `instanceName`<sup>Optional</sup> <a name="instanceName" id="aws-cdk-aws-connect-lib.Instance.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

The instance name.

May not always be available

---


### PhoneNumber <a name="PhoneNumber" id="aws-cdk-aws-connect-lib.PhoneNumber"></a>

- *Implements:* <a href="#aws-cdk-aws-connect-lib.IPhoneNumber">IPhoneNumber</a>

#### Initializers <a name="Initializers" id="aws-cdk-aws-connect-lib.PhoneNumber.Initializer"></a>

```typescript
import { PhoneNumber } from 'aws-cdk-aws-connect-lib'

new PhoneNumber(scope: Construct, id: string, props: PhoneNumberProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumber.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumber.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumber.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-aws-connect-lib.PhoneNumberProps">PhoneNumberProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-aws-connect-lib.PhoneNumber.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-aws-connect-lib.PhoneNumber.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-aws-connect-lib.PhoneNumber.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.PhoneNumberProps">PhoneNumberProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumber.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumber.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-cdk-aws-connect-lib.PhoneNumber.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-cdk-aws-connect-lib.PhoneNumber.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-cdk-aws-connect-lib.PhoneNumber.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumber.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumber.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumber.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-cdk-aws-connect-lib.PhoneNumber.isConstruct"></a>

```typescript
import { PhoneNumber } from 'aws-cdk-aws-connect-lib'

PhoneNumber.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-aws-connect-lib.PhoneNumber.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-cdk-aws-connect-lib.PhoneNumber.isOwnedResource"></a>

```typescript
import { PhoneNumber } from 'aws-cdk-aws-connect-lib'

PhoneNumber.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.PhoneNumber.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-cdk-aws-connect-lib.PhoneNumber.isResource"></a>

```typescript
import { PhoneNumber } from 'aws-cdk-aws-connect-lib'

PhoneNumber.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.PhoneNumber.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumber.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumber.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumber.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumber.property.phoneNumber">phoneNumber</a></code> | <code>aws-cdk-lib.aws_connect.CfnPhoneNumber</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumber.property.phoneNumberArn">phoneNumberArn</a></code> | <code>string</code> | The ARN of the phone number. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.PhoneNumber.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.PhoneNumber.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.PhoneNumber.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="aws-cdk-aws-connect-lib.PhoneNumber.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: CfnPhoneNumber;
```

- *Type:* aws-cdk-lib.aws_connect.CfnPhoneNumber

---

##### `phoneNumberArn`<sup>Required</sup> <a name="phoneNumberArn" id="aws-cdk-aws-connect-lib.PhoneNumber.property.phoneNumberArn"></a>

```typescript
public readonly phoneNumberArn: string;
```

- *Type:* string

The ARN of the phone number.

---


### Queue <a name="Queue" id="aws-cdk-aws-connect-lib.Queue"></a>

- *Implements:* <a href="#aws-cdk-aws-connect-lib.IQueue">IQueue</a>

#### Initializers <a name="Initializers" id="aws-cdk-aws-connect-lib.Queue.Initializer"></a>

```typescript
import { Queue } from 'aws-cdk-aws-connect-lib'

new Queue(scope: Construct, id: string, props: QueueProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.Queue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.Queue.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.Queue.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-aws-connect-lib.QueueProps">QueueProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-aws-connect-lib.Queue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-aws-connect-lib.Queue.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-aws-connect-lib.Queue.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.QueueProps">QueueProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.Queue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-aws-connect-lib.Queue.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-cdk-aws-connect-lib.Queue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-cdk-aws-connect-lib.Queue.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-cdk-aws-connect-lib.Queue.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.Queue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-cdk-aws-connect-lib.Queue.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-cdk-aws-connect-lib.Queue.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-cdk-aws-connect-lib.Queue.isConstruct"></a>

```typescript
import { Queue } from 'aws-cdk-aws-connect-lib'

Queue.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-aws-connect-lib.Queue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-cdk-aws-connect-lib.Queue.isOwnedResource"></a>

```typescript
import { Queue } from 'aws-cdk-aws-connect-lib'

Queue.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.Queue.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-cdk-aws-connect-lib.Queue.isResource"></a>

```typescript
import { Queue } from 'aws-cdk-aws-connect-lib'

Queue.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.Queue.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.Queue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.Queue.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.Queue.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.Queue.property.hoursOfOperation">hoursOfOperation</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IHoursOfOperation">IHoursOfOperation</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.Queue.property.instance">instance</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.Queue.property.queue">queue</a></code> | <code>aws-cdk-lib.aws_connect.CfnQueue</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.Queue.property.queueArn">queueArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.Queue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.Queue.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.Queue.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `hoursOfOperation`<sup>Required</sup> <a name="hoursOfOperation" id="aws-cdk-aws-connect-lib.Queue.property.hoursOfOperation"></a>

```typescript
public readonly hoursOfOperation: IHoursOfOperation;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IHoursOfOperation">IHoursOfOperation</a>

---

##### `instance`<sup>Required</sup> <a name="instance" id="aws-cdk-aws-connect-lib.Queue.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a>

---

##### `queue`<sup>Required</sup> <a name="queue" id="aws-cdk-aws-connect-lib.Queue.property.queue"></a>

```typescript
public readonly queue: CfnQueue;
```

- *Type:* aws-cdk-lib.aws_connect.CfnQueue

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="aws-cdk-aws-connect-lib.Queue.property.queueArn"></a>

```typescript
public readonly queueArn: string;
```

- *Type:* string

---


### QuickConnect <a name="QuickConnect" id="aws-cdk-aws-connect-lib.QuickConnect"></a>

- *Implements:* <a href="#aws-cdk-aws-connect-lib.IQuickConnect">IQuickConnect</a>

#### Initializers <a name="Initializers" id="aws-cdk-aws-connect-lib.QuickConnect.Initializer"></a>

```typescript
import { QuickConnect } from 'aws-cdk-aws-connect-lib'

new QuickConnect(scope: Construct, id: string, props: QuickConnectProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnect.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnect.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnect.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-aws-connect-lib.QuickConnectProps">QuickConnectProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-aws-connect-lib.QuickConnect.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-aws-connect-lib.QuickConnect.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-aws-connect-lib.QuickConnect.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.QuickConnectProps">QuickConnectProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnect.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnect.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-cdk-aws-connect-lib.QuickConnect.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-cdk-aws-connect-lib.QuickConnect.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-cdk-aws-connect-lib.QuickConnect.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnect.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnect.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnect.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-cdk-aws-connect-lib.QuickConnect.isConstruct"></a>

```typescript
import { QuickConnect } from 'aws-cdk-aws-connect-lib'

QuickConnect.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-aws-connect-lib.QuickConnect.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-cdk-aws-connect-lib.QuickConnect.isOwnedResource"></a>

```typescript
import { QuickConnect } from 'aws-cdk-aws-connect-lib'

QuickConnect.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.QuickConnect.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-cdk-aws-connect-lib.QuickConnect.isResource"></a>

```typescript
import { QuickConnect } from 'aws-cdk-aws-connect-lib'

QuickConnect.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.QuickConnect.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnect.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnect.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnect.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnect.property.quickConnect">quickConnect</a></code> | <code>aws-cdk-lib.aws_connect.CfnQuickConnect</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnect.property.quickConnectArn">quickConnectArn</a></code> | <code>string</code> | The ARN of the quick connect. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.QuickConnect.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.QuickConnect.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.QuickConnect.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `quickConnect`<sup>Required</sup> <a name="quickConnect" id="aws-cdk-aws-connect-lib.QuickConnect.property.quickConnect"></a>

```typescript
public readonly quickConnect: CfnQuickConnect;
```

- *Type:* aws-cdk-lib.aws_connect.CfnQuickConnect

---

##### `quickConnectArn`<sup>Required</sup> <a name="quickConnectArn" id="aws-cdk-aws-connect-lib.QuickConnect.property.quickConnectArn"></a>

```typescript
public readonly quickConnectArn: string;
```

- *Type:* string

The ARN of the quick connect.

---


### TrafficDistributionGroup <a name="TrafficDistributionGroup" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup"></a>

- *Implements:* <a href="#aws-cdk-aws-connect-lib.ITrafficDistributionGroup">ITrafficDistributionGroup</a>

#### Initializers <a name="Initializers" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup.Initializer"></a>

```typescript
import { TrafficDistributionGroup } from 'aws-cdk-aws-connect-lib'

new TrafficDistributionGroup(scope: Construct, id: string, props: TrafficDistributionGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroup.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroupProps">TrafficDistributionGroupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroupProps">TrafficDistributionGroupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroup.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroup.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroup.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup.isConstruct"></a>

```typescript
import { TrafficDistributionGroup } from 'aws-cdk-aws-connect-lib'

TrafficDistributionGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup.isOwnedResource"></a>

```typescript
import { TrafficDistributionGroup } from 'aws-cdk-aws-connect-lib'

TrafficDistributionGroup.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup.isResource"></a>

```typescript
import { TrafficDistributionGroup } from 'aws-cdk-aws-connect-lib'

TrafficDistributionGroup.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroup.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroup.property.trafficDistributionGroup">trafficDistributionGroup</a></code> | <code>aws-cdk-lib.aws_connect.CfnTrafficDistributionGroup</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroup.property.trafficDistributionGroupArn">trafficDistributionGroupArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `trafficDistributionGroup`<sup>Required</sup> <a name="trafficDistributionGroup" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup.property.trafficDistributionGroup"></a>

```typescript
public readonly trafficDistributionGroup: CfnTrafficDistributionGroup;
```

- *Type:* aws-cdk-lib.aws_connect.CfnTrafficDistributionGroup

---

##### `trafficDistributionGroupArn`<sup>Required</sup> <a name="trafficDistributionGroupArn" id="aws-cdk-aws-connect-lib.TrafficDistributionGroup.property.trafficDistributionGroupArn"></a>

```typescript
public readonly trafficDistributionGroupArn: string;
```

- *Type:* string

---


### User <a name="User" id="aws-cdk-aws-connect-lib.User"></a>

- *Implements:* <a href="#aws-cdk-aws-connect-lib.IUser">IUser</a>

#### Initializers <a name="Initializers" id="aws-cdk-aws-connect-lib.User.Initializer"></a>

```typescript
import { User } from 'aws-cdk-aws-connect-lib'

new User(scope: Construct, id: string, props: UserProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.User.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.User.Initializer.parameter.props">props</a></code> | <code><a href="#aws-cdk-aws-connect-lib.UserProps">UserProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-aws-connect-lib.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-aws-connect-lib.User.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-aws-connect-lib.User.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.UserProps">UserProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.User.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-cdk-aws-connect-lib.User.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-cdk-aws-connect-lib.User.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-cdk-aws-connect-lib.User.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-cdk-aws-connect-lib.User.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.User.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-cdk-aws-connect-lib.User.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-cdk-aws-connect-lib.User.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-cdk-aws-connect-lib.User.fromLookup">fromLookup</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-cdk-aws-connect-lib.User.isConstruct"></a>

```typescript
import { User } from 'aws-cdk-aws-connect-lib'

User.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-aws-connect-lib.User.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-cdk-aws-connect-lib.User.isOwnedResource"></a>

```typescript
import { User } from 'aws-cdk-aws-connect-lib'

User.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.User.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-cdk-aws-connect-lib.User.isResource"></a>

```typescript
import { User } from 'aws-cdk-aws-connect-lib'

User.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-cdk-aws-connect-lib.User.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromLookup` <a name="fromLookup" id="aws-cdk-aws-connect-lib.User.fromLookup"></a>

```typescript
import { User } from 'aws-cdk-aws-connect-lib'

User.fromLookup(scope: Construct, id: string, options: UserLookupOptions)
```

###### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-aws-connect-lib.User.fromLookup.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="aws-cdk-aws-connect-lib.User.fromLookup.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="aws-cdk-aws-connect-lib.User.fromLookup.parameter.options"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.UserLookupOptions">UserLookupOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.User.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.User.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.User.property.user">user</a></code> | <code>aws-cdk-lib.aws_connect.CfnUser</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.User.property.userArn">userArn</a></code> | <code>string</code> | The ARN of the connect user. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.User.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.User.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.User.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `user`<sup>Required</sup> <a name="user" id="aws-cdk-aws-connect-lib.User.property.user"></a>

```typescript
public readonly user: CfnUser;
```

- *Type:* aws-cdk-lib.aws_connect.CfnUser

---

##### `userArn`<sup>Required</sup> <a name="userArn" id="aws-cdk-aws-connect-lib.User.property.userArn"></a>

```typescript
public readonly userArn: string;
```

- *Type:* string

The ARN of the connect user.

---


## Structs <a name="Structs" id="Structs"></a>

### ContactFlowLookupOptions <a name="ContactFlowLookupOptions" id="aws-cdk-aws-connect-lib.ContactFlowLookupOptions"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.ContactFlowLookupOptions.Initializer"></a>

```typescript
import { ContactFlowLookupOptions } from 'aws-cdk-aws-connect-lib'

const contactFlowLookupOptions: ContactFlowLookupOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowLookupOptions.property.contactFlowArn">contactFlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowLookupOptions.property.contactFlowName">contactFlowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowLookupOptions.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |

---

##### `contactFlowArn`<sup>Optional</sup> <a name="contactFlowArn" id="aws-cdk-aws-connect-lib.ContactFlowLookupOptions.property.contactFlowArn"></a>

```typescript
public readonly contactFlowArn: string;
```

- *Type:* string

---

##### `contactFlowName`<sup>Optional</sup> <a name="contactFlowName" id="aws-cdk-aws-connect-lib.ContactFlowLookupOptions.property.contactFlowName"></a>

```typescript
public readonly contactFlowName: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Optional</sup> <a name="instanceArn" id="aws-cdk-aws-connect-lib.ContactFlowLookupOptions.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

### ContactFlowModuleLookupOptions <a name="ContactFlowModuleLookupOptions" id="aws-cdk-aws-connect-lib.ContactFlowModuleLookupOptions"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.ContactFlowModuleLookupOptions.Initializer"></a>

```typescript
import { ContactFlowModuleLookupOptions } from 'aws-cdk-aws-connect-lib'

const contactFlowModuleLookupOptions: ContactFlowModuleLookupOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModuleLookupOptions.property.contactFlowModuleArn">contactFlowModuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModuleLookupOptions.property.contactFlowModuleName">contactFlowModuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModuleLookupOptions.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |

---

##### `contactFlowModuleArn`<sup>Optional</sup> <a name="contactFlowModuleArn" id="aws-cdk-aws-connect-lib.ContactFlowModuleLookupOptions.property.contactFlowModuleArn"></a>

```typescript
public readonly contactFlowModuleArn: string;
```

- *Type:* string

---

##### `contactFlowModuleName`<sup>Optional</sup> <a name="contactFlowModuleName" id="aws-cdk-aws-connect-lib.ContactFlowModuleLookupOptions.property.contactFlowModuleName"></a>

```typescript
public readonly contactFlowModuleName: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Optional</sup> <a name="instanceArn" id="aws-cdk-aws-connect-lib.ContactFlowModuleLookupOptions.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

### ContactFlowModuleProps <a name="ContactFlowModuleProps" id="aws-cdk-aws-connect-lib.ContactFlowModuleProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.ContactFlowModuleProps.Initializer"></a>

```typescript
import { ContactFlowModuleProps } from 'aws-cdk-aws-connect-lib'

const contactFlowModuleProps: ContactFlowModuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModuleProps.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModuleProps.property.instance">instance</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModuleProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModuleProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModuleProps.property.state">state</a></code> | <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModuleState">ContactFlowModuleState</a></code> | *No description.* |

---

##### `content`<sup>Required</sup> <a name="content" id="aws-cdk-aws-connect-lib.ContactFlowModuleProps.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="aws-cdk-aws-connect-lib.ContactFlowModuleProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a>

---

##### `name`<sup>Required</sup> <a name="name" id="aws-cdk-aws-connect-lib.ContactFlowModuleProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-cdk-aws-connect-lib.ContactFlowModuleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `state`<sup>Optional</sup> <a name="state" id="aws-cdk-aws-connect-lib.ContactFlowModuleProps.property.state"></a>

```typescript
public readonly state: ContactFlowModuleState;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.ContactFlowModuleState">ContactFlowModuleState</a>

---

### ContactFlowProps <a name="ContactFlowProps" id="aws-cdk-aws-connect-lib.ContactFlowProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.ContactFlowProps.Initializer"></a>

```typescript
import { ContactFlowProps } from 'aws-cdk-aws-connect-lib'

const contactFlowProps: ContactFlowProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowProps.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowProps.property.instance">instance</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowProps.property.type">type</a></code> | <code><a href="#aws-cdk-aws-connect-lib.ContactFlowType">ContactFlowType</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowProps.property.state">state</a></code> | <code><a href="#aws-cdk-aws-connect-lib.ContactFlowState">ContactFlowState</a></code> | *No description.* |

---

##### `content`<sup>Required</sup> <a name="content" id="aws-cdk-aws-connect-lib.ContactFlowProps.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="aws-cdk-aws-connect-lib.ContactFlowProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a>

---

##### `name`<sup>Required</sup> <a name="name" id="aws-cdk-aws-connect-lib.ContactFlowProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="aws-cdk-aws-connect-lib.ContactFlowProps.property.type"></a>

```typescript
public readonly type: ContactFlowType;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.ContactFlowType">ContactFlowType</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-cdk-aws-connect-lib.ContactFlowProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `state`<sup>Optional</sup> <a name="state" id="aws-cdk-aws-connect-lib.ContactFlowProps.property.state"></a>

```typescript
public readonly state: ContactFlowState;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.ContactFlowState">ContactFlowState</a>

---

### EmailAddressProps <a name="EmailAddressProps" id="aws-cdk-aws-connect-lib.EmailAddressProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.EmailAddressProps.Initializer"></a>

```typescript
import { EmailAddressProps } from 'aws-cdk-aws-connect-lib'

const emailAddressProps: EmailAddressProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.EmailAddressProps.property.emailAddress">emailAddress</a></code> | <code>string</code> | The email address. |
| <code><a href="#aws-cdk-aws-connect-lib.EmailAddressProps.property.instance">instance</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a></code> | The AWS connect instance to attach the email address to. |
| <code><a href="#aws-cdk-aws-connect-lib.EmailAddressProps.property.aliases">aliases</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IEmailAddress">IEmailAddress</a>[]</code> | The aliases for the email address. |
| <code><a href="#aws-cdk-aws-connect-lib.EmailAddressProps.property.description">description</a></code> | <code>string</code> | A description of the email address. |
| <code><a href="#aws-cdk-aws-connect-lib.EmailAddressProps.property.displayName">displayName</a></code> | <code>string</code> | The display name of the email address. |

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="aws-cdk-aws-connect-lib.EmailAddressProps.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

The email address.

---

##### `instance`<sup>Required</sup> <a name="instance" id="aws-cdk-aws-connect-lib.EmailAddressProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a>

The AWS connect instance to attach the email address to.

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="aws-cdk-aws-connect-lib.EmailAddressProps.property.aliases"></a>

```typescript
public readonly aliases: IEmailAddress[];
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IEmailAddress">IEmailAddress</a>[]

The aliases for the email address.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-cdk-aws-connect-lib.EmailAddressProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the email address.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="aws-cdk-aws-connect-lib.EmailAddressProps.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the email address.

---

### HoursOfOperationLookupOptions <a name="HoursOfOperationLookupOptions" id="aws-cdk-aws-connect-lib.HoursOfOperationLookupOptions"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.HoursOfOperationLookupOptions.Initializer"></a>

```typescript
import { HoursOfOperationLookupOptions } from 'aws-cdk-aws-connect-lib'

const hoursOfOperationLookupOptions: HoursOfOperationLookupOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationLookupOptions.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationLookupOptions.property.hoursOfOperationArn">hoursOfOperationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationLookupOptions.property.hoursOfOperationName">hoursOfOperationName</a></code> | <code>string</code> | *No description.* |

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="aws-cdk-aws-connect-lib.HoursOfOperationLookupOptions.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `hoursOfOperationArn`<sup>Optional</sup> <a name="hoursOfOperationArn" id="aws-cdk-aws-connect-lib.HoursOfOperationLookupOptions.property.hoursOfOperationArn"></a>

```typescript
public readonly hoursOfOperationArn: string;
```

- *Type:* string

---

##### `hoursOfOperationName`<sup>Optional</sup> <a name="hoursOfOperationName" id="aws-cdk-aws-connect-lib.HoursOfOperationLookupOptions.property.hoursOfOperationName"></a>

```typescript
public readonly hoursOfOperationName: string;
```

- *Type:* string

---

### HoursOfOperationProps <a name="HoursOfOperationProps" id="aws-cdk-aws-connect-lib.HoursOfOperationProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.HoursOfOperationProps.Initializer"></a>

```typescript
import { HoursOfOperationProps } from 'aws-cdk-aws-connect-lib'

const hoursOfOperationProps: HoursOfOperationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationProps.property.instance">instance</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a></code> | The AWS connect instance to attach the hours of operation to. |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationProps.property.name">name</a></code> | <code>string</code> | The name of the hours of operation. |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationProps.property.definitions">definitions</a></code> | <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationDefinition">HoursOfOperationDefinition</a>[]</code> | the set of definitions for the hours of operation. |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationProps.property.timeZone">timeZone</a></code> | <code>string</code> | Timezone to define the hours of operation in. |

---

##### `instance`<sup>Required</sup> <a name="instance" id="aws-cdk-aws-connect-lib.HoursOfOperationProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a>

The AWS connect instance to attach the hours of operation to.

---

##### `name`<sup>Required</sup> <a name="name" id="aws-cdk-aws-connect-lib.HoursOfOperationProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the hours of operation.

---

##### `definitions`<sup>Optional</sup> <a name="definitions" id="aws-cdk-aws-connect-lib.HoursOfOperationProps.property.definitions"></a>

```typescript
public readonly definitions: HoursOfOperationDefinition[];
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.HoursOfOperationDefinition">HoursOfOperationDefinition</a>[]

the set of definitions for the hours of operation.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="aws-cdk-aws-connect-lib.HoursOfOperationProps.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Timezone to define the hours of operation in.

Defaults to UTC.

---

### InstanceLookupOptions <a name="InstanceLookupOptions" id="aws-cdk-aws-connect-lib.InstanceLookupOptions"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.InstanceLookupOptions.Initializer"></a>

```typescript
import { InstanceLookupOptions } from 'aws-cdk-aws-connect-lib'

const instanceLookupOptions: InstanceLookupOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.InstanceLookupOptions.property.instanceArn">instanceArn</a></code> | <code>string</code> | The instance Arn. |
| <code><a href="#aws-cdk-aws-connect-lib.InstanceLookupOptions.property.instanceId">instanceId</a></code> | <code>string</code> | the ID of the connect instance. |
| <code><a href="#aws-cdk-aws-connect-lib.InstanceLookupOptions.property.instanceName">instanceName</a></code> | <code>string</code> | The connect instance name. |

---

##### `instanceArn`<sup>Optional</sup> <a name="instanceArn" id="aws-cdk-aws-connect-lib.InstanceLookupOptions.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The instance Arn.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="aws-cdk-aws-connect-lib.InstanceLookupOptions.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

the ID of the connect instance.

---

##### `instanceName`<sup>Optional</sup> <a name="instanceName" id="aws-cdk-aws-connect-lib.InstanceLookupOptions.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

The connect instance name.

---

### InstanceProps <a name="InstanceProps" id="aws-cdk-aws-connect-lib.InstanceProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.InstanceProps.Initializer"></a>

```typescript
import { InstanceProps } from 'aws-cdk-aws-connect-lib'

const instanceProps: InstanceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.InstanceProps.property.identityType">identityType</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IdentityManagementType">IdentityManagementType</a></code> | The identity type for this instance. |
| <code><a href="#aws-cdk-aws-connect-lib.InstanceProps.property.telephonyConfig">telephonyConfig</a></code> | <code><a href="#aws-cdk-aws-connect-lib.TelephonyConfigProps">TelephonyConfigProps</a></code> | Telephony properties. |
| <code><a href="#aws-cdk-aws-connect-lib.InstanceProps.property.directoryId">directoryId</a></code> | <code>string</code> | The identifier of a simpleAD or Microsoft AD (^d-[0-9a-f]{10}$), required when identityType is set to EXISTING_DIRECTORY. |
| <code><a href="#aws-cdk-aws-connect-lib.InstanceProps.property.instanceAlias">instanceAlias</a></code> | <code>string</code> | The instance alias, required when identityType is set to CONNECT_MANAGED or SAML. |
| <code><a href="#aws-cdk-aws-connect-lib.InstanceProps.property.otherConfig">otherConfig</a></code> | <code><a href="#aws-cdk-aws-connect-lib.OtherConfigProps">OtherConfigProps</a></code> | Other configuration settings. |
| <code><a href="#aws-cdk-aws-connect-lib.InstanceProps.property.pollyConfig">pollyConfig</a></code> | <code><a href="#aws-cdk-aws-connect-lib.PollyConfigProps">PollyConfigProps</a></code> | Polly configuration settings. |
| <code><a href="#aws-cdk-aws-connect-lib.InstanceProps.property.storageConfigs">storageConfigs</a></code> | <code><a href="#aws-cdk-aws-connect-lib.StorageConfig">StorageConfig</a>[]</code> | *No description.* |

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="aws-cdk-aws-connect-lib.InstanceProps.property.identityType"></a>

```typescript
public readonly identityType: IdentityManagementType;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IdentityManagementType">IdentityManagementType</a>

The identity type for this instance.

---

##### `telephonyConfig`<sup>Required</sup> <a name="telephonyConfig" id="aws-cdk-aws-connect-lib.InstanceProps.property.telephonyConfig"></a>

```typescript
public readonly telephonyConfig: TelephonyConfigProps;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.TelephonyConfigProps">TelephonyConfigProps</a>

Telephony properties.

Required (due to required setting of inbound & outbound call configuration)

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="aws-cdk-aws-connect-lib.InstanceProps.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

The identifier of a simpleAD or Microsoft AD (^d-[0-9a-f]{10}$), required when identityType is set to EXISTING_DIRECTORY.

---

##### `instanceAlias`<sup>Optional</sup> <a name="instanceAlias" id="aws-cdk-aws-connect-lib.InstanceProps.property.instanceAlias"></a>

```typescript
public readonly instanceAlias: string;
```

- *Type:* string

The instance alias, required when identityType is set to CONNECT_MANAGED or SAML.

---

##### `otherConfig`<sup>Optional</sup> <a name="otherConfig" id="aws-cdk-aws-connect-lib.InstanceProps.property.otherConfig"></a>

```typescript
public readonly otherConfig: OtherConfigProps;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.OtherConfigProps">OtherConfigProps</a>

Other configuration settings.

---

##### `pollyConfig`<sup>Optional</sup> <a name="pollyConfig" id="aws-cdk-aws-connect-lib.InstanceProps.property.pollyConfig"></a>

```typescript
public readonly pollyConfig: PollyConfigProps;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.PollyConfigProps">PollyConfigProps</a>

Polly configuration settings.

---

##### `storageConfigs`<sup>Optional</sup> <a name="storageConfigs" id="aws-cdk-aws-connect-lib.InstanceProps.property.storageConfigs"></a>

```typescript
public readonly storageConfigs: StorageConfig[];
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.StorageConfig">StorageConfig</a>[]

---

### OtherConfigProps <a name="OtherConfigProps" id="aws-cdk-aws-connect-lib.OtherConfigProps"></a>

All other config props.

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.OtherConfigProps.Initializer"></a>

```typescript
import { OtherConfigProps } from 'aws-cdk-aws-connect-lib'

const otherConfigProps: OtherConfigProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.OtherConfigProps.property.contactflowLogs">contactflowLogs</a></code> | <code>boolean</code> | Whether contact flow logs are enabled. |
| <code><a href="#aws-cdk-aws-connect-lib.OtherConfigProps.property.contactLens">contactLens</a></code> | <code>boolean</code> | Whether contact lens is enabled. |
| <code><a href="#aws-cdk-aws-connect-lib.OtherConfigProps.property.enhancedChatMonitoring">enhancedChatMonitoring</a></code> | <code>boolean</code> | Whether enhanced chat monitoring is enabled. |
| <code><a href="#aws-cdk-aws-connect-lib.OtherConfigProps.property.enhancedContactMonitoring">enhancedContactMonitoring</a></code> | <code>boolean</code> | Whether enhanced contact monitoring is enabled. |
| <code><a href="#aws-cdk-aws-connect-lib.OtherConfigProps.property.highVolumeOutBound">highVolumeOutBound</a></code> | <code>boolean</code> | Whether high volume outbound is enabled. |

---

##### `contactflowLogs`<sup>Optional</sup> <a name="contactflowLogs" id="aws-cdk-aws-connect-lib.OtherConfigProps.property.contactflowLogs"></a>

```typescript
public readonly contactflowLogs: boolean;
```

- *Type:* boolean

Whether contact flow logs are enabled.

(CONTACTFLOW_LOGS)

---

##### `contactLens`<sup>Optional</sup> <a name="contactLens" id="aws-cdk-aws-connect-lib.OtherConfigProps.property.contactLens"></a>

```typescript
public readonly contactLens: boolean;
```

- *Type:* boolean

Whether contact lens is enabled.

(CONTACT_LENS)

---

##### `enhancedChatMonitoring`<sup>Optional</sup> <a name="enhancedChatMonitoring" id="aws-cdk-aws-connect-lib.OtherConfigProps.property.enhancedChatMonitoring"></a>

```typescript
public readonly enhancedChatMonitoring: boolean;
```

- *Type:* boolean

Whether enhanced chat monitoring is enabled.

(ENHANCED_CHAT_MONITORING)

---

##### `enhancedContactMonitoring`<sup>Optional</sup> <a name="enhancedContactMonitoring" id="aws-cdk-aws-connect-lib.OtherConfigProps.property.enhancedContactMonitoring"></a>

```typescript
public readonly enhancedContactMonitoring: boolean;
```

- *Type:* boolean

Whether enhanced contact monitoring is enabled.

(ENHANCED_CONTACT_MONITORING)

---

##### `highVolumeOutBound`<sup>Optional</sup> <a name="highVolumeOutBound" id="aws-cdk-aws-connect-lib.OtherConfigProps.property.highVolumeOutBound"></a>

```typescript
public readonly highVolumeOutBound: boolean;
```

- *Type:* boolean

Whether high volume outbound is enabled.

(HIGH_VOLUME_OUTBOUND)

---

### PhoneNumberProps <a name="PhoneNumberProps" id="aws-cdk-aws-connect-lib.PhoneNumberProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.PhoneNumberProps.Initializer"></a>

```typescript
import { PhoneNumberProps } from 'aws-cdk-aws-connect-lib'

const phoneNumberProps: PhoneNumberProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumberProps.property.target">target</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a> \| <a href="#aws-cdk-aws-connect-lib.ITrafficDistributionGroup">ITrafficDistributionGroup</a></code> | The AWS connect instance or traffic distribution node to attach the phone number to. |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumberProps.property.countryCode">countryCode</a></code> | <code>string</code> | The ISO 2-letter country code of the phone number. |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumberProps.property.description">description</a></code> | <code>string</code> | A description of the phone number. |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumberProps.property.prefix">prefix</a></code> | <code>string</code> | The phone number prefix with the + country code. |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumberProps.property.sourcePhoneNumberArn">sourcePhoneNumberArn</a></code> | <code>string</code> | the ARN of an externally imported phone number (e.g. from AWS End User Messaging). |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumberProps.property.type">type</a></code> | <code><a href="#aws-cdk-aws-connect-lib.PhoneNumberType">PhoneNumberType</a></code> | The phone number type. |

---

##### `target`<sup>Required</sup> <a name="target" id="aws-cdk-aws-connect-lib.PhoneNumberProps.property.target"></a>

```typescript
public readonly target: IInstance | ITrafficDistributionGroup;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a> | <a href="#aws-cdk-aws-connect-lib.ITrafficDistributionGroup">ITrafficDistributionGroup</a>

The AWS connect instance or traffic distribution node to attach the phone number to.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="aws-cdk-aws-connect-lib.PhoneNumberProps.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

The ISO 2-letter country code of the phone number.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-cdk-aws-connect-lib.PhoneNumberProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the phone number.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="aws-cdk-aws-connect-lib.PhoneNumberProps.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The phone number prefix with the + country code.

---

##### `sourcePhoneNumberArn`<sup>Optional</sup> <a name="sourcePhoneNumberArn" id="aws-cdk-aws-connect-lib.PhoneNumberProps.property.sourcePhoneNumberArn"></a>

```typescript
public readonly sourcePhoneNumberArn: string;
```

- *Type:* string

the ARN of an externally imported phone number (e.g. from AWS End User Messaging).

---

##### `type`<sup>Optional</sup> <a name="type" id="aws-cdk-aws-connect-lib.PhoneNumberProps.property.type"></a>

```typescript
public readonly type: PhoneNumberType;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.PhoneNumberType">PhoneNumberType</a>

The phone number type.

---

### PollyConfigProps <a name="PollyConfigProps" id="aws-cdk-aws-connect-lib.PollyConfigProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.PollyConfigProps.Initializer"></a>

```typescript
import { PollyConfigProps } from 'aws-cdk-aws-connect-lib'

const pollyConfigProps: PollyConfigProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.PollyConfigProps.property.autoResolveBestVoices">autoResolveBestVoices</a></code> | <code>boolean</code> | Whether to automatically resolve best voices. |
| <code><a href="#aws-cdk-aws-connect-lib.PollyConfigProps.property.useCustomTtsVoices">useCustomTtsVoices</a></code> | <code>boolean</code> | Whether useCustomTtsVoices is enabled (USE_CUSTOM_TTS_VOICES). |

---

##### `autoResolveBestVoices`<sup>Optional</sup> <a name="autoResolveBestVoices" id="aws-cdk-aws-connect-lib.PollyConfigProps.property.autoResolveBestVoices"></a>

```typescript
public readonly autoResolveBestVoices: boolean;
```

- *Type:* boolean

Whether to automatically resolve best voices.

(AUTO_RESOLVE_BEST_VOICES)

---

##### `useCustomTtsVoices`<sup>Optional</sup> <a name="useCustomTtsVoices" id="aws-cdk-aws-connect-lib.PollyConfigProps.property.useCustomTtsVoices"></a>

```typescript
public readonly useCustomTtsVoices: boolean;
```

- *Type:* boolean

Whether useCustomTtsVoices is enabled (USE_CUSTOM_TTS_VOICES).

---

### QueueOutboundCallerConfig <a name="QueueOutboundCallerConfig" id="aws-cdk-aws-connect-lib.QueueOutboundCallerConfig"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.QueueOutboundCallerConfig.Initializer"></a>

```typescript
import { QueueOutboundCallerConfig } from 'aws-cdk-aws-connect-lib'

const queueOutboundCallerConfig: QueueOutboundCallerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.QueueOutboundCallerConfig.property.callerIdName">callerIdName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.QueueOutboundCallerConfig.property.callerIdNumber">callerIdNumber</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IPhoneNumber">IPhoneNumber</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.QueueOutboundCallerConfig.property.flow">flow</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IContactFlow">IContactFlow</a></code> | *No description.* |

---

##### `callerIdName`<sup>Required</sup> <a name="callerIdName" id="aws-cdk-aws-connect-lib.QueueOutboundCallerConfig.property.callerIdName"></a>

```typescript
public readonly callerIdName: string;
```

- *Type:* string

---

##### `callerIdNumber`<sup>Required</sup> <a name="callerIdNumber" id="aws-cdk-aws-connect-lib.QueueOutboundCallerConfig.property.callerIdNumber"></a>

```typescript
public readonly callerIdNumber: IPhoneNumber;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IPhoneNumber">IPhoneNumber</a>

---

##### `flow`<sup>Required</sup> <a name="flow" id="aws-cdk-aws-connect-lib.QueueOutboundCallerConfig.property.flow"></a>

```typescript
public readonly flow: IContactFlow;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IContactFlow">IContactFlow</a>

---

### QueueProps <a name="QueueProps" id="aws-cdk-aws-connect-lib.QueueProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.QueueProps.Initializer"></a>

```typescript
import { QueueProps } from 'aws-cdk-aws-connect-lib'

const queueProps: QueueProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.QueueProps.property.hoursOfOperation">hoursOfOperation</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IHoursOfOperation">IHoursOfOperation</a></code> | The hours of operation to associate with the queue. |
| <code><a href="#aws-cdk-aws-connect-lib.QueueProps.property.instance">instance</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a></code> | The AWS connect instance to attach the queue to. |
| <code><a href="#aws-cdk-aws-connect-lib.QueueProps.property.name">name</a></code> | <code>string</code> | The name of the hours of operation. |
| <code><a href="#aws-cdk-aws-connect-lib.QueueProps.property.quickConnects">quickConnects</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IQuickConnect">IQuickConnect</a>[]</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.QueueProps.property.description">description</a></code> | <code>string</code> | A description of the queue. |
| <code><a href="#aws-cdk-aws-connect-lib.QueueProps.property.maxQueueSize">maxQueueSize</a></code> | <code>number</code> | The maximum number of contacts that can be in the queue before it is considered full (default 0/unlimited). |
| <code><a href="#aws-cdk-aws-connect-lib.QueueProps.property.outboundCallerConfig">outboundCallerConfig</a></code> | <code><a href="#aws-cdk-aws-connect-lib.QueueOutboundCallerConfig">QueueOutboundCallerConfig</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.QueueProps.property.outboundEmail">outboundEmail</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IEmailAddress">IEmailAddress</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.QueueProps.property.status">status</a></code> | <code><a href="#aws-cdk-aws-connect-lib.QueueStatus">QueueStatus</a></code> | The status of the queue. |

---

##### `hoursOfOperation`<sup>Required</sup> <a name="hoursOfOperation" id="aws-cdk-aws-connect-lib.QueueProps.property.hoursOfOperation"></a>

```typescript
public readonly hoursOfOperation: IHoursOfOperation;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IHoursOfOperation">IHoursOfOperation</a>

The hours of operation to associate with the queue.

---

##### `instance`<sup>Required</sup> <a name="instance" id="aws-cdk-aws-connect-lib.QueueProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a>

The AWS connect instance to attach the queue to.

---

##### `name`<sup>Required</sup> <a name="name" id="aws-cdk-aws-connect-lib.QueueProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the hours of operation.

---

##### `quickConnects`<sup>Required</sup> <a name="quickConnects" id="aws-cdk-aws-connect-lib.QueueProps.property.quickConnects"></a>

```typescript
public readonly quickConnects: IQuickConnect[];
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IQuickConnect">IQuickConnect</a>[]

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-cdk-aws-connect-lib.QueueProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the queue.

---

##### `maxQueueSize`<sup>Optional</sup> <a name="maxQueueSize" id="aws-cdk-aws-connect-lib.QueueProps.property.maxQueueSize"></a>

```typescript
public readonly maxQueueSize: number;
```

- *Type:* number

The maximum number of contacts that can be in the queue before it is considered full (default 0/unlimited).

---

##### `outboundCallerConfig`<sup>Optional</sup> <a name="outboundCallerConfig" id="aws-cdk-aws-connect-lib.QueueProps.property.outboundCallerConfig"></a>

```typescript
public readonly outboundCallerConfig: QueueOutboundCallerConfig;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.QueueOutboundCallerConfig">QueueOutboundCallerConfig</a>

---

##### `outboundEmail`<sup>Optional</sup> <a name="outboundEmail" id="aws-cdk-aws-connect-lib.QueueProps.property.outboundEmail"></a>

```typescript
public readonly outboundEmail: IEmailAddress;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IEmailAddress">IEmailAddress</a>

---

##### `status`<sup>Optional</sup> <a name="status" id="aws-cdk-aws-connect-lib.QueueProps.property.status"></a>

```typescript
public readonly status: QueueStatus;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.QueueStatus">QueueStatus</a>

The status of the queue.

Default QueueStats.ENABLED

---

### QuickConnectProps <a name="QuickConnectProps" id="aws-cdk-aws-connect-lib.QuickConnectProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.QuickConnectProps.Initializer"></a>

```typescript
import { QuickConnectProps } from 'aws-cdk-aws-connect-lib'

const quickConnectProps: QuickConnectProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnectProps.property.instance">instance</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a></code> | The AWS connect instance to attach the quick connect to. |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnectProps.property.name">name</a></code> | <code>string</code> | The name of the quick connect. |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnectProps.property.description">description</a></code> | <code>string</code> | The description of the quick connect. |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnectProps.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | the phone number to use for this quick connect. |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnectProps.property.queueConfig">queueConfig</a></code> | <code><a href="#aws-cdk-aws-connect-lib.QuickConnectQueueConfig">QuickConnectQueueConfig</a></code> | the queue and flow to use for this quick connect. |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnectProps.property.userConfig">userConfig</a></code> | <code><a href="#aws-cdk-aws-connect-lib.QuickConnectUserConfig">QuickConnectUserConfig</a></code> | the user to use for this quick connect. |

---

##### `instance`<sup>Required</sup> <a name="instance" id="aws-cdk-aws-connect-lib.QuickConnectProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a>

The AWS connect instance to attach the quick connect to.

---

##### `name`<sup>Required</sup> <a name="name" id="aws-cdk-aws-connect-lib.QuickConnectProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the quick connect.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-cdk-aws-connect-lib.QuickConnectProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the quick connect.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="aws-cdk-aws-connect-lib.QuickConnectProps.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

the phone number to use for this quick connect.

Cannot be set with queueConfig or userConfig

---

##### `queueConfig`<sup>Optional</sup> <a name="queueConfig" id="aws-cdk-aws-connect-lib.QuickConnectProps.property.queueConfig"></a>

```typescript
public readonly queueConfig: QuickConnectQueueConfig;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.QuickConnectQueueConfig">QuickConnectQueueConfig</a>

the queue and flow to use for this quick connect.

Cannot be set with phoneNumber or userConfig

---

##### `userConfig`<sup>Optional</sup> <a name="userConfig" id="aws-cdk-aws-connect-lib.QuickConnectProps.property.userConfig"></a>

```typescript
public readonly userConfig: QuickConnectUserConfig;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.QuickConnectUserConfig">QuickConnectUserConfig</a>

the user to use for this quick connect.

Cannot be set with phoneNumber or queueConfig

---

### QuickConnectQueueConfig <a name="QuickConnectQueueConfig" id="aws-cdk-aws-connect-lib.QuickConnectQueueConfig"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.QuickConnectQueueConfig.Initializer"></a>

```typescript
import { QuickConnectQueueConfig } from 'aws-cdk-aws-connect-lib'

const quickConnectQueueConfig: QuickConnectQueueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnectQueueConfig.property.flow">flow</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IContactFlow">IContactFlow</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnectQueueConfig.property.queue">queue</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IQueue">IQueue</a></code> | *No description.* |

---

##### `flow`<sup>Required</sup> <a name="flow" id="aws-cdk-aws-connect-lib.QuickConnectQueueConfig.property.flow"></a>

```typescript
public readonly flow: IContactFlow;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IContactFlow">IContactFlow</a>

---

##### `queue`<sup>Required</sup> <a name="queue" id="aws-cdk-aws-connect-lib.QuickConnectQueueConfig.property.queue"></a>

```typescript
public readonly queue: IQueue;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IQueue">IQueue</a>

---

### QuickConnectUserConfig <a name="QuickConnectUserConfig" id="aws-cdk-aws-connect-lib.QuickConnectUserConfig"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.QuickConnectUserConfig.Initializer"></a>

```typescript
import { QuickConnectUserConfig } from 'aws-cdk-aws-connect-lib'

const quickConnectUserConfig: QuickConnectUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnectUserConfig.property.flow">flow</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IContactFlow">IContactFlow</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnectUserConfig.property.user">user</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IUser">IUser</a></code> | *No description.* |

---

##### `flow`<sup>Required</sup> <a name="flow" id="aws-cdk-aws-connect-lib.QuickConnectUserConfig.property.flow"></a>

```typescript
public readonly flow: IContactFlow;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IContactFlow">IContactFlow</a>

---

##### `user`<sup>Required</sup> <a name="user" id="aws-cdk-aws-connect-lib.QuickConnectUserConfig.property.user"></a>

```typescript
public readonly user: IUser;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IUser">IUser</a>

---

### StorageConfigKinesisFirehose <a name="StorageConfigKinesisFirehose" id="aws-cdk-aws-connect-lib.StorageConfigKinesisFirehose"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.StorageConfigKinesisFirehose.Initializer"></a>

```typescript
import { StorageConfigKinesisFirehose } from 'aws-cdk-aws-connect-lib'

const storageConfigKinesisFirehose: StorageConfigKinesisFirehose = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfigKinesisFirehose.property.firehose">firehose</a></code> | <code>aws-cdk-lib.aws_kinesisfirehose.IDeliveryStream</code> | *No description.* |

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="aws-cdk-aws-connect-lib.StorageConfigKinesisFirehose.property.firehose"></a>

```typescript
public readonly firehose: IDeliveryStream;
```

- *Type:* aws-cdk-lib.aws_kinesisfirehose.IDeliveryStream

---

### StorageConfigKinesisStream <a name="StorageConfigKinesisStream" id="aws-cdk-aws-connect-lib.StorageConfigKinesisStream"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.StorageConfigKinesisStream.Initializer"></a>

```typescript
import { StorageConfigKinesisStream } from 'aws-cdk-aws-connect-lib'

const storageConfigKinesisStream: StorageConfigKinesisStream = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfigKinesisStream.property.stream">stream</a></code> | <code>aws-cdk-lib.aws_kinesis.IStream</code> | *No description.* |

---

##### `stream`<sup>Required</sup> <a name="stream" id="aws-cdk-aws-connect-lib.StorageConfigKinesisStream.property.stream"></a>

```typescript
public readonly stream: IStream;
```

- *Type:* aws-cdk-lib.aws_kinesis.IStream

---

### StorageConfigKinesisVideoStream <a name="StorageConfigKinesisVideoStream" id="aws-cdk-aws-connect-lib.StorageConfigKinesisVideoStream"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.StorageConfigKinesisVideoStream.Initializer"></a>

```typescript
import { StorageConfigKinesisVideoStream } from 'aws-cdk-aws-connect-lib'

const storageConfigKinesisVideoStream: StorageConfigKinesisVideoStream = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfigKinesisVideoStream.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#aws-cdk-aws-connect-lib.StorageEncryptionConfig">StorageEncryptionConfig</a></code> | The encryption configuration for the Kinesis Video Stream. |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfigKinesisVideoStream.property.prefix">prefix</a></code> | <code>string</code> | The prefix of the video stream. |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfigKinesisVideoStream.property.retentionPeriodHours">retentionPeriodHours</a></code> | <code>number</code> | Kinesis Video Streams retains the data in a data store that is associated with the stream. |

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="aws-cdk-aws-connect-lib.StorageConfigKinesisVideoStream.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: StorageEncryptionConfig;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.StorageEncryptionConfig">StorageEncryptionConfig</a>

The encryption configuration for the Kinesis Video Stream.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="aws-cdk-aws-connect-lib.StorageConfigKinesisVideoStream.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The prefix of the video stream.

---

##### `retentionPeriodHours`<sup>Optional</sup> <a name="retentionPeriodHours" id="aws-cdk-aws-connect-lib.StorageConfigKinesisVideoStream.property.retentionPeriodHours"></a>

```typescript
public readonly retentionPeriodHours: number;
```

- *Type:* number

Kinesis Video Streams retains the data in a data store that is associated with the stream.

The default value is 0, indicating that the stream does not persist data.

---

### StorageConfigS3 <a name="StorageConfigS3" id="aws-cdk-aws-connect-lib.StorageConfigS3"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.StorageConfigS3.Initializer"></a>

```typescript
import { StorageConfigS3 } from 'aws-cdk-aws-connect-lib'

const storageConfigS3: StorageConfigS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfigS3.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The bucket where the data will be stored. |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfigS3.property.prefix">prefix</a></code> | <code>string</code> | The prefix within the bucket. |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfigS3.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#aws-cdk-aws-connect-lib.StorageEncryptionConfig">StorageEncryptionConfig</a></code> | The optional encryption configuration. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="aws-cdk-aws-connect-lib.StorageConfigS3.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket where the data will be stored.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="aws-cdk-aws-connect-lib.StorageConfigS3.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The prefix within the bucket.

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="aws-cdk-aws-connect-lib.StorageConfigS3.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: StorageEncryptionConfig;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.StorageEncryptionConfig">StorageEncryptionConfig</a>

The optional encryption configuration.

---

### StorageEncryptionConfig <a name="StorageEncryptionConfig" id="aws-cdk-aws-connect-lib.StorageEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.StorageEncryptionConfig.Initializer"></a>

```typescript
import { StorageEncryptionConfig } from 'aws-cdk-aws-connect-lib'

const storageEncryptionConfig: StorageEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.StorageEncryptionConfig.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS key used for encryption. |
| <code><a href="#aws-cdk-aws-connect-lib.StorageEncryptionConfig.property.encryptionType">encryptionType</a></code> | <code><a href="#aws-cdk-aws-connect-lib.StorageEncryptionType">StorageEncryptionType</a></code> | The type of encryption used on the stream. |

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="aws-cdk-aws-connect-lib.StorageEncryptionConfig.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The KMS key used for encryption.

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="aws-cdk-aws-connect-lib.StorageEncryptionConfig.property.encryptionType"></a>

```typescript
public readonly encryptionType: StorageEncryptionType;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.StorageEncryptionType">StorageEncryptionType</a>

The type of encryption used on the stream.

---

### TelephonyConfigProps <a name="TelephonyConfigProps" id="aws-cdk-aws-connect-lib.TelephonyConfigProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.TelephonyConfigProps.Initializer"></a>

```typescript
import { TelephonyConfigProps } from 'aws-cdk-aws-connect-lib'

const telephonyConfigProps: TelephonyConfigProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.TelephonyConfigProps.property.inboundCalls">inboundCalls</a></code> | <code>boolean</code> | Whether inbound calls are allowed. |
| <code><a href="#aws-cdk-aws-connect-lib.TelephonyConfigProps.property.outboundCalls">outboundCalls</a></code> | <code>boolean</code> | Whether outbound calls are allowed. |
| <code><a href="#aws-cdk-aws-connect-lib.TelephonyConfigProps.property.earlyMediaEnabled">earlyMediaEnabled</a></code> | <code>boolean</code> | Whether early media is enabled. |
| <code><a href="#aws-cdk-aws-connect-lib.TelephonyConfigProps.property.multiPartyChatConference">multiPartyChatConference</a></code> | <code>boolean</code> | Whether multi party chat is enabled. |
| <code><a href="#aws-cdk-aws-connect-lib.TelephonyConfigProps.property.multiPartyConference">multiPartyConference</a></code> | <code>boolean</code> | Whether multi party conference is enabled. |

---

##### `inboundCalls`<sup>Required</sup> <a name="inboundCalls" id="aws-cdk-aws-connect-lib.TelephonyConfigProps.property.inboundCalls"></a>

```typescript
public readonly inboundCalls: boolean;
```

- *Type:* boolean

Whether inbound calls are allowed.

(INBOUND_CALLS)

---

##### `outboundCalls`<sup>Required</sup> <a name="outboundCalls" id="aws-cdk-aws-connect-lib.TelephonyConfigProps.property.outboundCalls"></a>

```typescript
public readonly outboundCalls: boolean;
```

- *Type:* boolean

Whether outbound calls are allowed.

(OUTBOUND_CALLS)

---

##### `earlyMediaEnabled`<sup>Optional</sup> <a name="earlyMediaEnabled" id="aws-cdk-aws-connect-lib.TelephonyConfigProps.property.earlyMediaEnabled"></a>

```typescript
public readonly earlyMediaEnabled: boolean;
```

- *Type:* boolean

Whether early media is enabled.

---

##### `multiPartyChatConference`<sup>Optional</sup> <a name="multiPartyChatConference" id="aws-cdk-aws-connect-lib.TelephonyConfigProps.property.multiPartyChatConference"></a>

```typescript
public readonly multiPartyChatConference: boolean;
```

- *Type:* boolean

Whether multi party chat is enabled.

(MULTI_PARTY_CHAT_CONFERENCE)

---

##### `multiPartyConference`<sup>Optional</sup> <a name="multiPartyConference" id="aws-cdk-aws-connect-lib.TelephonyConfigProps.property.multiPartyConference"></a>

```typescript
public readonly multiPartyConference: boolean;
```

- *Type:* boolean

Whether multi party conference is enabled.

(MULTI_PARTY_CONFERENCE)

---

### TrafficDistributionGroupProps <a name="TrafficDistributionGroupProps" id="aws-cdk-aws-connect-lib.TrafficDistributionGroupProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.TrafficDistributionGroupProps.Initializer"></a>

```typescript
import { TrafficDistributionGroupProps } from 'aws-cdk-aws-connect-lib'

const trafficDistributionGroupProps: TrafficDistributionGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroupProps.property.instance">instance</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a></code> | The AWS connect instance to attach the traffic distribution group to. |
| <code><a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroupProps.property.name">name</a></code> | <code>string</code> | The name of the traffic distribution group. |
| <code><a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroupProps.property.description">description</a></code> | <code>string</code> | A description of the traffic distribution group. |

---

##### `instance`<sup>Required</sup> <a name="instance" id="aws-cdk-aws-connect-lib.TrafficDistributionGroupProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a>

The AWS connect instance to attach the traffic distribution group to.

---

##### `name`<sup>Required</sup> <a name="name" id="aws-cdk-aws-connect-lib.TrafficDistributionGroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the traffic distribution group.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-cdk-aws-connect-lib.TrafficDistributionGroupProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the traffic distribution group.

---

### UserIdentityInfoProps <a name="UserIdentityInfoProps" id="aws-cdk-aws-connect-lib.UserIdentityInfoProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.UserIdentityInfoProps.Initializer"></a>

```typescript
import { UserIdentityInfoProps } from 'aws-cdk-aws-connect-lib'

const userIdentityInfoProps: UserIdentityInfoProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.UserIdentityInfoProps.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserIdentityInfoProps.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserIdentityInfoProps.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserIdentityInfoProps.property.mobileNumber">mobileNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserIdentityInfoProps.property.secondaryEmail">secondaryEmail</a></code> | <code>string</code> | *No description.* |

---

##### `email`<sup>Optional</sup> <a name="email" id="aws-cdk-aws-connect-lib.UserIdentityInfoProps.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="aws-cdk-aws-connect-lib.UserIdentityInfoProps.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="aws-cdk-aws-connect-lib.UserIdentityInfoProps.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `mobileNumber`<sup>Optional</sup> <a name="mobileNumber" id="aws-cdk-aws-connect-lib.UserIdentityInfoProps.property.mobileNumber"></a>

```typescript
public readonly mobileNumber: string;
```

- *Type:* string

---

##### `secondaryEmail`<sup>Optional</sup> <a name="secondaryEmail" id="aws-cdk-aws-connect-lib.UserIdentityInfoProps.property.secondaryEmail"></a>

```typescript
public readonly secondaryEmail: string;
```

- *Type:* string

---

### UserLookupOptions <a name="UserLookupOptions" id="aws-cdk-aws-connect-lib.UserLookupOptions"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.UserLookupOptions.Initializer"></a>

```typescript
import { UserLookupOptions } from 'aws-cdk-aws-connect-lib'

const userLookupOptions: UserLookupOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.UserLookupOptions.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserLookupOptions.property.userArn">userArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserLookupOptions.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="aws-cdk-aws-connect-lib.UserLookupOptions.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `userArn`<sup>Optional</sup> <a name="userArn" id="aws-cdk-aws-connect-lib.UserLookupOptions.property.userArn"></a>

```typescript
public readonly userArn: string;
```

- *Type:* string

---

##### `username`<sup>Optional</sup> <a name="username" id="aws-cdk-aws-connect-lib.UserLookupOptions.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

### UserPhoneConfigProps <a name="UserPhoneConfigProps" id="aws-cdk-aws-connect-lib.UserPhoneConfigProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.UserPhoneConfigProps.Initializer"></a>

```typescript
import { UserPhoneConfigProps } from 'aws-cdk-aws-connect-lib'

const userPhoneConfigProps: UserPhoneConfigProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.UserPhoneConfigProps.property.phoneType">phoneType</a></code> | <code><a href="#aws-cdk-aws-connect-lib.UserPhoneType">UserPhoneType</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserPhoneConfigProps.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserPhoneConfigProps.property.autoAccept">autoAccept</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserPhoneConfigProps.property.deskPhoneNumber">deskPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserPhoneConfigProps.property.persistentConnection">persistentConnection</a></code> | <code>boolean</code> | *No description.* |

---

##### `phoneType`<sup>Required</sup> <a name="phoneType" id="aws-cdk-aws-connect-lib.UserPhoneConfigProps.property.phoneType"></a>

```typescript
public readonly phoneType: UserPhoneType;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.UserPhoneType">UserPhoneType</a>

---

##### `afterContactWorkTimeLimit`<sup>Optional</sup> <a name="afterContactWorkTimeLimit" id="aws-cdk-aws-connect-lib.UserPhoneConfigProps.property.afterContactWorkTimeLimit"></a>

```typescript
public readonly afterContactWorkTimeLimit: number;
```

- *Type:* number

---

##### `autoAccept`<sup>Optional</sup> <a name="autoAccept" id="aws-cdk-aws-connect-lib.UserPhoneConfigProps.property.autoAccept"></a>

```typescript
public readonly autoAccept: boolean;
```

- *Type:* boolean

---

##### `deskPhoneNumber`<sup>Optional</sup> <a name="deskPhoneNumber" id="aws-cdk-aws-connect-lib.UserPhoneConfigProps.property.deskPhoneNumber"></a>

```typescript
public readonly deskPhoneNumber: string;
```

- *Type:* string

---

##### `persistentConnection`<sup>Optional</sup> <a name="persistentConnection" id="aws-cdk-aws-connect-lib.UserPhoneConfigProps.property.persistentConnection"></a>

```typescript
public readonly persistentConnection: boolean;
```

- *Type:* boolean

---

### UserProficiencyProps <a name="UserProficiencyProps" id="aws-cdk-aws-connect-lib.UserProficiencyProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.UserProficiencyProps.Initializer"></a>

```typescript
import { UserProficiencyProps } from 'aws-cdk-aws-connect-lib'

const userProficiencyProps: UserProficiencyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.UserProficiencyProps.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserProficiencyProps.property.attributeValue">attributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserProficiencyProps.property.proficiencyLevel">proficiencyLevel</a></code> | <code>number</code> | *No description.* |

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="aws-cdk-aws-connect-lib.UserProficiencyProps.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="aws-cdk-aws-connect-lib.UserProficiencyProps.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

---

##### `proficiencyLevel`<sup>Required</sup> <a name="proficiencyLevel" id="aws-cdk-aws-connect-lib.UserProficiencyProps.property.proficiencyLevel"></a>

```typescript
public readonly proficiencyLevel: number;
```

- *Type:* number

---

### UserProps <a name="UserProps" id="aws-cdk-aws-connect-lib.UserProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-aws-connect-lib.UserProps.Initializer"></a>

```typescript
import { UserProps } from 'aws-cdk-aws-connect-lib'

const userProps: UserProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.UserProps.property.instance">instance</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserProps.property.phoneConfig">phoneConfig</a></code> | <code><a href="#aws-cdk-aws-connect-lib.UserPhoneConfigProps">UserPhoneConfigProps</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserProps.property.proficiencies">proficiencies</a></code> | <code><a href="#aws-cdk-aws-connect-lib.UserProficiencyProps">UserProficiencyProps</a>[]</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserProps.property.routingProfile">routingProfile</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IRoutingProfile">IRoutingProfile</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserProps.property.securityProfiles">securityProfiles</a></code> | <code><a href="#aws-cdk-aws-connect-lib.ISecurityProfile">ISecurityProfile</a>[]</code> | The security profiles to associate with the user. |
| <code><a href="#aws-cdk-aws-connect-lib.UserProps.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserProps.property.directoryUserId">directoryUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserProps.property.hierarchyGroup">hierarchyGroup</a></code> | <code><a href="#aws-cdk-aws-connect-lib.IHierarchyGroup">IHierarchyGroup</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserProps.property.identityInfo">identityInfo</a></code> | <code><a href="#aws-cdk-aws-connect-lib.UserIdentityInfoProps">UserIdentityInfoProps</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserProps.property.password">password</a></code> | <code>string</code> | *No description.* |

---

##### `instance`<sup>Required</sup> <a name="instance" id="aws-cdk-aws-connect-lib.UserProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a>

---

##### `phoneConfig`<sup>Required</sup> <a name="phoneConfig" id="aws-cdk-aws-connect-lib.UserProps.property.phoneConfig"></a>

```typescript
public readonly phoneConfig: UserPhoneConfigProps;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.UserPhoneConfigProps">UserPhoneConfigProps</a>

---

##### `proficiencies`<sup>Required</sup> <a name="proficiencies" id="aws-cdk-aws-connect-lib.UserProps.property.proficiencies"></a>

```typescript
public readonly proficiencies: UserProficiencyProps[];
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.UserProficiencyProps">UserProficiencyProps</a>[]

---

##### `routingProfile`<sup>Required</sup> <a name="routingProfile" id="aws-cdk-aws-connect-lib.UserProps.property.routingProfile"></a>

```typescript
public readonly routingProfile: IRoutingProfile;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IRoutingProfile">IRoutingProfile</a>

---

##### `securityProfiles`<sup>Required</sup> <a name="securityProfiles" id="aws-cdk-aws-connect-lib.UserProps.property.securityProfiles"></a>

```typescript
public readonly securityProfiles: ISecurityProfile[];
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.ISecurityProfile">ISecurityProfile</a>[]

The security profiles to associate with the user.

At least one must be specified

---

##### `username`<sup>Required</sup> <a name="username" id="aws-cdk-aws-connect-lib.UserProps.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `directoryUserId`<sup>Optional</sup> <a name="directoryUserId" id="aws-cdk-aws-connect-lib.UserProps.property.directoryUserId"></a>

```typescript
public readonly directoryUserId: string;
```

- *Type:* string

---

##### `hierarchyGroup`<sup>Optional</sup> <a name="hierarchyGroup" id="aws-cdk-aws-connect-lib.UserProps.property.hierarchyGroup"></a>

```typescript
public readonly hierarchyGroup: IHierarchyGroup;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.IHierarchyGroup">IHierarchyGroup</a>

---

##### `identityInfo`<sup>Optional</sup> <a name="identityInfo" id="aws-cdk-aws-connect-lib.UserProps.property.identityInfo"></a>

```typescript
public readonly identityInfo: UserIdentityInfoProps;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.UserIdentityInfoProps">UserIdentityInfoProps</a>

---

##### `password`<sup>Optional</sup> <a name="password" id="aws-cdk-aws-connect-lib.UserProps.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### HoursOfOperationDefinition <a name="HoursOfOperationDefinition" id="aws-cdk-aws-connect-lib.HoursOfOperationDefinition"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationDefinition.asConfig">asConfig</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationDefinition.splitTime">splitTime</a></code> | *No description.* |

---

##### `asConfig` <a name="asConfig" id="aws-cdk-aws-connect-lib.HoursOfOperationDefinition.asConfig"></a>

```typescript
public asConfig(): HoursOfOperationConfigProperty | HoursOfOperationOverrideConfigProperty
```

##### `splitTime` <a name="splitTime" id="aws-cdk-aws-connect-lib.HoursOfOperationDefinition.splitTime"></a>

```typescript
public splitTime(time: string): HoursOfOperationTimeSliceProperty
```

###### `time`<sup>Required</sup> <a name="time" id="aws-cdk-aws-connect-lib.HoursOfOperationDefinition.splitTime.parameter.time"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationDefinition.dayOfWeek">dayOfWeek</a></code> | *No description.* |

---

##### `dayOfWeek` <a name="dayOfWeek" id="aws-cdk-aws-connect-lib.HoursOfOperationDefinition.dayOfWeek"></a>

```typescript
import { HoursOfOperationDefinition } from 'aws-cdk-aws-connect-lib'

HoursOfOperationDefinition.dayOfWeek(day: HoursOfOperationDayOfWeek, startTime: string, endTime: string)
```

###### `day`<sup>Required</sup> <a name="day" id="aws-cdk-aws-connect-lib.HoursOfOperationDefinition.dayOfWeek.parameter.day"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.HoursOfOperationDayOfWeek">HoursOfOperationDayOfWeek</a>

---

###### `startTime`<sup>Required</sup> <a name="startTime" id="aws-cdk-aws-connect-lib.HoursOfOperationDefinition.dayOfWeek.parameter.startTime"></a>

- *Type:* string

---

###### `endTime`<sup>Required</sup> <a name="endTime" id="aws-cdk-aws-connect-lib.HoursOfOperationDefinition.dayOfWeek.parameter.endTime"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationDefinition.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="aws-cdk-aws-connect-lib.HoursOfOperationDefinition.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---


### StorageConfig <a name="StorageConfig" id="aws-cdk-aws-connect-lib.StorageConfig"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfig.asStorageConfigProps">asStorageConfigProps</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfig.checkConfig">checkConfig</a></code> | *No description.* |

---

##### `asStorageConfigProps` <a name="asStorageConfigProps" id="aws-cdk-aws-connect-lib.StorageConfig.asStorageConfigProps"></a>

```typescript
public asStorageConfigProps(instanceArn: string): CfnInstanceStorageConfigProps
```

###### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="aws-cdk-aws-connect-lib.StorageConfig.asStorageConfigProps.parameter.instanceArn"></a>

- *Type:* string

---

##### `checkConfig` <a name="checkConfig" id="aws-cdk-aws-connect-lib.StorageConfig.checkConfig"></a>

```typescript
public checkConfig(): boolean
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfig.buildKinesisFirehose">buildKinesisFirehose</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfig.buildKinesisStream">buildKinesisStream</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfig.buildKinesisVideoStream">buildKinesisVideoStream</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfig.buildS3">buildS3</a></code> | *No description.* |

---

##### `buildKinesisFirehose` <a name="buildKinesisFirehose" id="aws-cdk-aws-connect-lib.StorageConfig.buildKinesisFirehose"></a>

```typescript
import { StorageConfig } from 'aws-cdk-aws-connect-lib'

StorageConfig.buildKinesisFirehose(resourceType: StorageResourceType, props: StorageConfigKinesisFirehose)
```

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="aws-cdk-aws-connect-lib.StorageConfig.buildKinesisFirehose.parameter.resourceType"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.StorageResourceType">StorageResourceType</a>

---

###### `props`<sup>Required</sup> <a name="props" id="aws-cdk-aws-connect-lib.StorageConfig.buildKinesisFirehose.parameter.props"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.StorageConfigKinesisFirehose">StorageConfigKinesisFirehose</a>

---

##### `buildKinesisStream` <a name="buildKinesisStream" id="aws-cdk-aws-connect-lib.StorageConfig.buildKinesisStream"></a>

```typescript
import { StorageConfig } from 'aws-cdk-aws-connect-lib'

StorageConfig.buildKinesisStream(resourceType: StorageResourceType, props: StorageConfigKinesisStream)
```

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="aws-cdk-aws-connect-lib.StorageConfig.buildKinesisStream.parameter.resourceType"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.StorageResourceType">StorageResourceType</a>

---

###### `props`<sup>Required</sup> <a name="props" id="aws-cdk-aws-connect-lib.StorageConfig.buildKinesisStream.parameter.props"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.StorageConfigKinesisStream">StorageConfigKinesisStream</a>

---

##### `buildKinesisVideoStream` <a name="buildKinesisVideoStream" id="aws-cdk-aws-connect-lib.StorageConfig.buildKinesisVideoStream"></a>

```typescript
import { StorageConfig } from 'aws-cdk-aws-connect-lib'

StorageConfig.buildKinesisVideoStream(resourceType: StorageResourceType, props: StorageConfigKinesisVideoStream)
```

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="aws-cdk-aws-connect-lib.StorageConfig.buildKinesisVideoStream.parameter.resourceType"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.StorageResourceType">StorageResourceType</a>

---

###### `props`<sup>Required</sup> <a name="props" id="aws-cdk-aws-connect-lib.StorageConfig.buildKinesisVideoStream.parameter.props"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.StorageConfigKinesisVideoStream">StorageConfigKinesisVideoStream</a>

---

##### `buildS3` <a name="buildS3" id="aws-cdk-aws-connect-lib.StorageConfig.buildS3"></a>

```typescript
import { StorageConfig } from 'aws-cdk-aws-connect-lib'

StorageConfig.buildS3(resourceType: StorageResourceType, props: StorageConfigS3)
```

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="aws-cdk-aws-connect-lib.StorageConfig.buildS3.parameter.resourceType"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.StorageResourceType">StorageResourceType</a>

---

###### `props`<sup>Required</sup> <a name="props" id="aws-cdk-aws-connect-lib.StorageConfig.buildS3.parameter.props"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.StorageConfigS3">StorageConfigS3</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfig.property.resourceType">resourceType</a></code> | <code><a href="#aws-cdk-aws-connect-lib.StorageResourceType">StorageResourceType</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfig.property.storageType">storageType</a></code> | <code><a href="#aws-cdk-aws-connect-lib.StorageConfigType">StorageConfigType</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfig.property.kinesisFirehose">kinesisFirehose</a></code> | <code>aws-cdk-lib.aws_kinesisfirehose.IDeliveryStream</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfig.property.kinesisStream">kinesisStream</a></code> | <code>aws-cdk-lib.aws_kinesis.IStream</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfig.property.kinesisVideoStreamConfig">kinesisVideoStreamConfig</a></code> | <code><a href="#aws-cdk-aws-connect-lib.StorageConfigKinesisVideoStream">StorageConfigKinesisVideoStream</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfig.property.s3Config">s3Config</a></code> | <code><a href="#aws-cdk-aws-connect-lib.StorageConfigS3">StorageConfigS3</a></code> | *No description.* |

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="aws-cdk-aws-connect-lib.StorageConfig.property.resourceType"></a>

```typescript
public readonly resourceType: StorageResourceType;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.StorageResourceType">StorageResourceType</a>

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="aws-cdk-aws-connect-lib.StorageConfig.property.storageType"></a>

```typescript
public readonly storageType: StorageConfigType;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.StorageConfigType">StorageConfigType</a>

---

##### `kinesisFirehose`<sup>Optional</sup> <a name="kinesisFirehose" id="aws-cdk-aws-connect-lib.StorageConfig.property.kinesisFirehose"></a>

```typescript
public readonly kinesisFirehose: IDeliveryStream;
```

- *Type:* aws-cdk-lib.aws_kinesisfirehose.IDeliveryStream

---

##### `kinesisStream`<sup>Optional</sup> <a name="kinesisStream" id="aws-cdk-aws-connect-lib.StorageConfig.property.kinesisStream"></a>

```typescript
public readonly kinesisStream: IStream;
```

- *Type:* aws-cdk-lib.aws_kinesis.IStream

---

##### `kinesisVideoStreamConfig`<sup>Optional</sup> <a name="kinesisVideoStreamConfig" id="aws-cdk-aws-connect-lib.StorageConfig.property.kinesisVideoStreamConfig"></a>

```typescript
public readonly kinesisVideoStreamConfig: StorageConfigKinesisVideoStream;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.StorageConfigKinesisVideoStream">StorageConfigKinesisVideoStream</a>

---

##### `s3Config`<sup>Optional</sup> <a name="s3Config" id="aws-cdk-aws-connect-lib.StorageConfig.property.s3Config"></a>

```typescript
public readonly s3Config: StorageConfigS3;
```

- *Type:* <a href="#aws-cdk-aws-connect-lib.StorageConfigS3">StorageConfigS3</a>

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IContactFlow <a name="IContactFlow" id="aws-cdk-aws-connect-lib.IContactFlow"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-cdk-aws-connect-lib.ContactFlow">ContactFlow</a>, <a href="#aws-cdk-aws-connect-lib.IContactFlow">IContactFlow</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.IContactFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.IContactFlow.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.IContactFlow.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.IContactFlow.property.contactFlowArn">contactFlowArn</a></code> | <code>string</code> | The ARN of the flow. |
| <code><a href="#aws-cdk-aws-connect-lib.IContactFlow.property.contactFlowName">contactFlowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.IContactFlow.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.IContactFlow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.IContactFlow.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.IContactFlow.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `contactFlowArn`<sup>Required</sup> <a name="contactFlowArn" id="aws-cdk-aws-connect-lib.IContactFlow.property.contactFlowArn"></a>

```typescript
public readonly contactFlowArn: string;
```

- *Type:* string

The ARN of the flow.

---

##### `contactFlowName`<sup>Required</sup> <a name="contactFlowName" id="aws-cdk-aws-connect-lib.IContactFlow.property.contactFlowName"></a>

```typescript
public readonly contactFlowName: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="aws-cdk-aws-connect-lib.IContactFlow.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

### IContactFlowModule <a name="IContactFlowModule" id="aws-cdk-aws-connect-lib.IContactFlowModule"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-cdk-aws-connect-lib.ContactFlowModule">ContactFlowModule</a>, <a href="#aws-cdk-aws-connect-lib.IContactFlowModule">IContactFlowModule</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.IContactFlowModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.IContactFlowModule.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.IContactFlowModule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.IContactFlowModule.property.contactFlowModuleArn">contactFlowModuleArn</a></code> | <code>string</code> | The ARN of the flow. |
| <code><a href="#aws-cdk-aws-connect-lib.IContactFlowModule.property.contactFlowModuleName">contactFlowModuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.IContactFlowModule.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.IContactFlowModule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.IContactFlowModule.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.IContactFlowModule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `contactFlowModuleArn`<sup>Required</sup> <a name="contactFlowModuleArn" id="aws-cdk-aws-connect-lib.IContactFlowModule.property.contactFlowModuleArn"></a>

```typescript
public readonly contactFlowModuleArn: string;
```

- *Type:* string

The ARN of the flow.

---

##### `contactFlowModuleName`<sup>Required</sup> <a name="contactFlowModuleName" id="aws-cdk-aws-connect-lib.IContactFlowModule.property.contactFlowModuleName"></a>

```typescript
public readonly contactFlowModuleName: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="aws-cdk-aws-connect-lib.IContactFlowModule.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

### IEmailAddress <a name="IEmailAddress" id="aws-cdk-aws-connect-lib.IEmailAddress"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-cdk-aws-connect-lib.EmailAddress">EmailAddress</a>, <a href="#aws-cdk-aws-connect-lib.IEmailAddress">IEmailAddress</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.IEmailAddress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.IEmailAddress.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.IEmailAddress.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.IEmailAddress.property.emailAddressArn">emailAddressArn</a></code> | <code>string</code> | The ARN of the email address. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.IEmailAddress.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.IEmailAddress.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.IEmailAddress.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `emailAddressArn`<sup>Required</sup> <a name="emailAddressArn" id="aws-cdk-aws-connect-lib.IEmailAddress.property.emailAddressArn"></a>

```typescript
public readonly emailAddressArn: string;
```

- *Type:* string

The ARN of the email address.

---

### IHierarchyGroup <a name="IHierarchyGroup" id="aws-cdk-aws-connect-lib.IHierarchyGroup"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-cdk-aws-connect-lib.IHierarchyGroup">IHierarchyGroup</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.IHierarchyGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.IHierarchyGroup.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.IHierarchyGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.IHierarchyGroup.property.hierarchyGroupArn">hierarchyGroupArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.IHierarchyGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.IHierarchyGroup.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.IHierarchyGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `hierarchyGroupArn`<sup>Required</sup> <a name="hierarchyGroupArn" id="aws-cdk-aws-connect-lib.IHierarchyGroup.property.hierarchyGroupArn"></a>

```typescript
public readonly hierarchyGroupArn: string;
```

- *Type:* string

---

### IHoursOfOperation <a name="IHoursOfOperation" id="aws-cdk-aws-connect-lib.IHoursOfOperation"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-cdk-aws-connect-lib.HoursOfOperation">HoursOfOperation</a>, <a href="#aws-cdk-aws-connect-lib.IHoursOfOperation">IHoursOfOperation</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.IHoursOfOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.IHoursOfOperation.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.IHoursOfOperation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.IHoursOfOperation.property.hoursOfOperationArn">hoursOfOperationArn</a></code> | <code>string</code> | The ARN of the hours of operation. |
| <code><a href="#aws-cdk-aws-connect-lib.IHoursOfOperation.property.instanceArn">instanceArn</a></code> | <code>string</code> | The ARN of the attached instance. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.IHoursOfOperation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.IHoursOfOperation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.IHoursOfOperation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `hoursOfOperationArn`<sup>Required</sup> <a name="hoursOfOperationArn" id="aws-cdk-aws-connect-lib.IHoursOfOperation.property.hoursOfOperationArn"></a>

```typescript
public readonly hoursOfOperationArn: string;
```

- *Type:* string

The ARN of the hours of operation.

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="aws-cdk-aws-connect-lib.IHoursOfOperation.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The ARN of the attached instance.

---

### IInstance <a name="IInstance" id="aws-cdk-aws-connect-lib.IInstance"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-cdk-aws-connect-lib.Instance">Instance</a>, <a href="#aws-cdk-aws-connect-lib.IInstance">IInstance</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.IInstance.addStorageConfig">addStorageConfig</a></code> | *No description.* |

---

##### `addStorageConfig` <a name="addStorageConfig" id="aws-cdk-aws-connect-lib.IInstance.addStorageConfig"></a>

```typescript
public addStorageConfig(config: StorageConfig): void
```

###### `config`<sup>Required</sup> <a name="config" id="aws-cdk-aws-connect-lib.IInstance.addStorageConfig.parameter.config"></a>

- *Type:* <a href="#aws-cdk-aws-connect-lib.StorageConfig">StorageConfig</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.IInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.IInstance.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.IInstance.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.IInstance.property.instanceArn">instanceArn</a></code> | <code>string</code> | The ARN of the instance. |
| <code><a href="#aws-cdk-aws-connect-lib.IInstance.property.instanceId">instanceId</a></code> | <code>string</code> | The instance identifier. |
| <code><a href="#aws-cdk-aws-connect-lib.IInstance.property.instanceName">instanceName</a></code> | <code>string</code> | The instance name. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.IInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.IInstance.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.IInstance.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="aws-cdk-aws-connect-lib.IInstance.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The ARN of the instance.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="aws-cdk-aws-connect-lib.IInstance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The instance identifier.

---

##### `instanceName`<sup>Optional</sup> <a name="instanceName" id="aws-cdk-aws-connect-lib.IInstance.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

The instance name.

May not always be available

---

### IPhoneNumber <a name="IPhoneNumber" id="aws-cdk-aws-connect-lib.IPhoneNumber"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-cdk-aws-connect-lib.PhoneNumber">PhoneNumber</a>, <a href="#aws-cdk-aws-connect-lib.IPhoneNumber">IPhoneNumber</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.IPhoneNumber.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.IPhoneNumber.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.IPhoneNumber.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.IPhoneNumber.property.phoneNumberArn">phoneNumberArn</a></code> | <code>string</code> | The ARN of the phone number. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.IPhoneNumber.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.IPhoneNumber.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.IPhoneNumber.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `phoneNumberArn`<sup>Required</sup> <a name="phoneNumberArn" id="aws-cdk-aws-connect-lib.IPhoneNumber.property.phoneNumberArn"></a>

```typescript
public readonly phoneNumberArn: string;
```

- *Type:* string

The ARN of the phone number.

---

### IQueue <a name="IQueue" id="aws-cdk-aws-connect-lib.IQueue"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-cdk-aws-connect-lib.Queue">Queue</a>, <a href="#aws-cdk-aws-connect-lib.IQueue">IQueue</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.IQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.IQueue.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.IQueue.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.IQueue.property.queueArn">queueArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.IQueue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.IQueue.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.IQueue.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="aws-cdk-aws-connect-lib.IQueue.property.queueArn"></a>

```typescript
public readonly queueArn: string;
```

- *Type:* string

---

### IQuickConnect <a name="IQuickConnect" id="aws-cdk-aws-connect-lib.IQuickConnect"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-cdk-aws-connect-lib.QuickConnect">QuickConnect</a>, <a href="#aws-cdk-aws-connect-lib.IQuickConnect">IQuickConnect</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.IQuickConnect.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.IQuickConnect.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.IQuickConnect.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.IQuickConnect.property.quickConnectArn">quickConnectArn</a></code> | <code>string</code> | The ARN of the quick connect. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.IQuickConnect.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.IQuickConnect.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.IQuickConnect.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `quickConnectArn`<sup>Required</sup> <a name="quickConnectArn" id="aws-cdk-aws-connect-lib.IQuickConnect.property.quickConnectArn"></a>

```typescript
public readonly quickConnectArn: string;
```

- *Type:* string

The ARN of the quick connect.

---

### IRoutingProfile <a name="IRoutingProfile" id="aws-cdk-aws-connect-lib.IRoutingProfile"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-cdk-aws-connect-lib.IRoutingProfile">IRoutingProfile</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.IRoutingProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.IRoutingProfile.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.IRoutingProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.IRoutingProfile.property.routingProfileArn">routingProfileArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.IRoutingProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.IRoutingProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.IRoutingProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `routingProfileArn`<sup>Required</sup> <a name="routingProfileArn" id="aws-cdk-aws-connect-lib.IRoutingProfile.property.routingProfileArn"></a>

```typescript
public readonly routingProfileArn: string;
```

- *Type:* string

---

### ISecurityProfile <a name="ISecurityProfile" id="aws-cdk-aws-connect-lib.ISecurityProfile"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-cdk-aws-connect-lib.ISecurityProfile">ISecurityProfile</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.ISecurityProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.ISecurityProfile.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.ISecurityProfile.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.ISecurityProfile.property.securityProfileArn">securityProfileArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.ISecurityProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.ISecurityProfile.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.ISecurityProfile.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `securityProfileArn`<sup>Required</sup> <a name="securityProfileArn" id="aws-cdk-aws-connect-lib.ISecurityProfile.property.securityProfileArn"></a>

```typescript
public readonly securityProfileArn: string;
```

- *Type:* string

---

### ITrafficDistributionGroup <a name="ITrafficDistributionGroup" id="aws-cdk-aws-connect-lib.ITrafficDistributionGroup"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-cdk-aws-connect-lib.TrafficDistributionGroup">TrafficDistributionGroup</a>, <a href="#aws-cdk-aws-connect-lib.ITrafficDistributionGroup">ITrafficDistributionGroup</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.ITrafficDistributionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.ITrafficDistributionGroup.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.ITrafficDistributionGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.ITrafficDistributionGroup.property.trafficDistributionGroupArn">trafficDistributionGroupArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.ITrafficDistributionGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.ITrafficDistributionGroup.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.ITrafficDistributionGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `trafficDistributionGroupArn`<sup>Required</sup> <a name="trafficDistributionGroupArn" id="aws-cdk-aws-connect-lib.ITrafficDistributionGroup.property.trafficDistributionGroupArn"></a>

```typescript
public readonly trafficDistributionGroupArn: string;
```

- *Type:* string

---

### IUser <a name="IUser" id="aws-cdk-aws-connect-lib.IUser"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-cdk-aws-connect-lib.User">User</a>, <a href="#aws-cdk-aws-connect-lib.IUser">IUser</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.IUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-aws-connect-lib.IUser.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-cdk-aws-connect-lib.IUser.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-cdk-aws-connect-lib.IUser.property.userArn">userArn</a></code> | <code>string</code> | The ARN of the connect user. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-aws-connect-lib.IUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-cdk-aws-connect-lib.IUser.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-cdk-aws-connect-lib.IUser.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `userArn`<sup>Required</sup> <a name="userArn" id="aws-cdk-aws-connect-lib.IUser.property.userArn"></a>

```typescript
public readonly userArn: string;
```

- *Type:* string

The ARN of the connect user.

---

## Enums <a name="Enums" id="Enums"></a>

### ContactFlowModuleState <a name="ContactFlowModuleState" id="aws-cdk-aws-connect-lib.ContactFlowModuleState"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModuleState.ACTIVE">ACTIVE</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowModuleState.ARCHIVED">ARCHIVED</a></code> | *No description.* |

---

##### `ACTIVE` <a name="ACTIVE" id="aws-cdk-aws-connect-lib.ContactFlowModuleState.ACTIVE"></a>

---


##### `ARCHIVED` <a name="ARCHIVED" id="aws-cdk-aws-connect-lib.ContactFlowModuleState.ARCHIVED"></a>

---


### ContactFlowState <a name="ContactFlowState" id="aws-cdk-aws-connect-lib.ContactFlowState"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowState.ACTIVE">ACTIVE</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowState.ARCHIVED">ARCHIVED</a></code> | *No description.* |

---

##### `ACTIVE` <a name="ACTIVE" id="aws-cdk-aws-connect-lib.ContactFlowState.ACTIVE"></a>

---


##### `ARCHIVED` <a name="ARCHIVED" id="aws-cdk-aws-connect-lib.ContactFlowState.ARCHIVED"></a>

---


### ContactFlowType <a name="ContactFlowType" id="aws-cdk-aws-connect-lib.ContactFlowType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowType.CONTACT_FLOW">CONTACT_FLOW</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowType.CUSTOMER_QUEUE">CUSTOMER_QUEUE</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowType.CUSTOMER_HOLD">CUSTOMER_HOLD</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowType.CUSTOMER_WHISPER">CUSTOMER_WHISPER</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowType.AGENT_HOLD">AGENT_HOLD</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowType.AGENT_WHISPER">AGENT_WHISPER</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowType.OUTBOUND_WHISPER">OUTBOUND_WHISPER</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowType.AGENT_TRANSFER">AGENT_TRANSFER</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowType.QUEUE_TRANSFER">QUEUE_TRANSFER</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.ContactFlowType.CAMPAIGN">CAMPAIGN</a></code> | *No description.* |

---

##### `CONTACT_FLOW` <a name="CONTACT_FLOW" id="aws-cdk-aws-connect-lib.ContactFlowType.CONTACT_FLOW"></a>

---


##### `CUSTOMER_QUEUE` <a name="CUSTOMER_QUEUE" id="aws-cdk-aws-connect-lib.ContactFlowType.CUSTOMER_QUEUE"></a>

---


##### `CUSTOMER_HOLD` <a name="CUSTOMER_HOLD" id="aws-cdk-aws-connect-lib.ContactFlowType.CUSTOMER_HOLD"></a>

---


##### `CUSTOMER_WHISPER` <a name="CUSTOMER_WHISPER" id="aws-cdk-aws-connect-lib.ContactFlowType.CUSTOMER_WHISPER"></a>

---


##### `AGENT_HOLD` <a name="AGENT_HOLD" id="aws-cdk-aws-connect-lib.ContactFlowType.AGENT_HOLD"></a>

---


##### `AGENT_WHISPER` <a name="AGENT_WHISPER" id="aws-cdk-aws-connect-lib.ContactFlowType.AGENT_WHISPER"></a>

---


##### `OUTBOUND_WHISPER` <a name="OUTBOUND_WHISPER" id="aws-cdk-aws-connect-lib.ContactFlowType.OUTBOUND_WHISPER"></a>

---


##### `AGENT_TRANSFER` <a name="AGENT_TRANSFER" id="aws-cdk-aws-connect-lib.ContactFlowType.AGENT_TRANSFER"></a>

---


##### `QUEUE_TRANSFER` <a name="QUEUE_TRANSFER" id="aws-cdk-aws-connect-lib.ContactFlowType.QUEUE_TRANSFER"></a>

---


##### `CAMPAIGN` <a name="CAMPAIGN" id="aws-cdk-aws-connect-lib.ContactFlowType.CAMPAIGN"></a>

---


### HoursOfOperationDayOfWeek <a name="HoursOfOperationDayOfWeek" id="aws-cdk-aws-connect-lib.HoursOfOperationDayOfWeek"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationDayOfWeek.SUNDAY">SUNDAY</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationDayOfWeek.MONDAY">MONDAY</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationDayOfWeek.TUESDAY">TUESDAY</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationDayOfWeek.WEDNESDAY">WEDNESDAY</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationDayOfWeek.THURSDAY">THURSDAY</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationDayOfWeek.FRIDAY">FRIDAY</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.HoursOfOperationDayOfWeek.SATURDAY">SATURDAY</a></code> | *No description.* |

---

##### `SUNDAY` <a name="SUNDAY" id="aws-cdk-aws-connect-lib.HoursOfOperationDayOfWeek.SUNDAY"></a>

---


##### `MONDAY` <a name="MONDAY" id="aws-cdk-aws-connect-lib.HoursOfOperationDayOfWeek.MONDAY"></a>

---


##### `TUESDAY` <a name="TUESDAY" id="aws-cdk-aws-connect-lib.HoursOfOperationDayOfWeek.TUESDAY"></a>

---


##### `WEDNESDAY` <a name="WEDNESDAY" id="aws-cdk-aws-connect-lib.HoursOfOperationDayOfWeek.WEDNESDAY"></a>

---


##### `THURSDAY` <a name="THURSDAY" id="aws-cdk-aws-connect-lib.HoursOfOperationDayOfWeek.THURSDAY"></a>

---


##### `FRIDAY` <a name="FRIDAY" id="aws-cdk-aws-connect-lib.HoursOfOperationDayOfWeek.FRIDAY"></a>

---


##### `SATURDAY` <a name="SATURDAY" id="aws-cdk-aws-connect-lib.HoursOfOperationDayOfWeek.SATURDAY"></a>

---


### IdentityManagementType <a name="IdentityManagementType" id="aws-cdk-aws-connect-lib.IdentityManagementType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.IdentityManagementType.SAML">SAML</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.IdentityManagementType.CONNECT_MANAGED">CONNECT_MANAGED</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.IdentityManagementType.EXISTING_DIRECTORY">EXISTING_DIRECTORY</a></code> | *No description.* |

---

##### `SAML` <a name="SAML" id="aws-cdk-aws-connect-lib.IdentityManagementType.SAML"></a>

---


##### `CONNECT_MANAGED` <a name="CONNECT_MANAGED" id="aws-cdk-aws-connect-lib.IdentityManagementType.CONNECT_MANAGED"></a>

---


##### `EXISTING_DIRECTORY` <a name="EXISTING_DIRECTORY" id="aws-cdk-aws-connect-lib.IdentityManagementType.EXISTING_DIRECTORY"></a>

---


### PhoneNumberType <a name="PhoneNumberType" id="aws-cdk-aws-connect-lib.PhoneNumberType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumberType.TOLL_FREE">TOLL_FREE</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumberType.DID">DID</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumberType.UIFN">UIFN</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumberType.SHARED">SHARED</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumberType.THIRD_PARTY_DID">THIRD_PARTY_DID</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumberType.THIRD_PARTY_TF">THIRD_PARTY_TF</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.PhoneNumberType.SHORT_CODE">SHORT_CODE</a></code> | *No description.* |

---

##### `TOLL_FREE` <a name="TOLL_FREE" id="aws-cdk-aws-connect-lib.PhoneNumberType.TOLL_FREE"></a>

---


##### `DID` <a name="DID" id="aws-cdk-aws-connect-lib.PhoneNumberType.DID"></a>

---


##### `UIFN` <a name="UIFN" id="aws-cdk-aws-connect-lib.PhoneNumberType.UIFN"></a>

---


##### `SHARED` <a name="SHARED" id="aws-cdk-aws-connect-lib.PhoneNumberType.SHARED"></a>

---


##### `THIRD_PARTY_DID` <a name="THIRD_PARTY_DID" id="aws-cdk-aws-connect-lib.PhoneNumberType.THIRD_PARTY_DID"></a>

---


##### `THIRD_PARTY_TF` <a name="THIRD_PARTY_TF" id="aws-cdk-aws-connect-lib.PhoneNumberType.THIRD_PARTY_TF"></a>

---


##### `SHORT_CODE` <a name="SHORT_CODE" id="aws-cdk-aws-connect-lib.PhoneNumberType.SHORT_CODE"></a>

---


### QueueStatus <a name="QueueStatus" id="aws-cdk-aws-connect-lib.QueueStatus"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.QueueStatus.ENABLED">ENABLED</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.QueueStatus.DISABLED">DISABLED</a></code> | *No description.* |

---

##### `ENABLED` <a name="ENABLED" id="aws-cdk-aws-connect-lib.QueueStatus.ENABLED"></a>

---


##### `DISABLED` <a name="DISABLED" id="aws-cdk-aws-connect-lib.QueueStatus.DISABLED"></a>

---


### QuickConnectType <a name="QuickConnectType" id="aws-cdk-aws-connect-lib.QuickConnectType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnectType.PHONE_NUMBER">PHONE_NUMBER</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnectType.QUEUE">QUEUE</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.QuickConnectType.USER">USER</a></code> | *No description.* |

---

##### `PHONE_NUMBER` <a name="PHONE_NUMBER" id="aws-cdk-aws-connect-lib.QuickConnectType.PHONE_NUMBER"></a>

---


##### `QUEUE` <a name="QUEUE" id="aws-cdk-aws-connect-lib.QuickConnectType.QUEUE"></a>

---


##### `USER` <a name="USER" id="aws-cdk-aws-connect-lib.QuickConnectType.USER"></a>

---


### StorageConfigType <a name="StorageConfigType" id="aws-cdk-aws-connect-lib.StorageConfigType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfigType.S3_BUCKET">S3_BUCKET</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfigType.KINESIS_VIDEO_STREAM">KINESIS_VIDEO_STREAM</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfigType.KINESIS_STREAM">KINESIS_STREAM</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.StorageConfigType.KINESIS_FIREHOSE">KINESIS_FIREHOSE</a></code> | *No description.* |

---

##### `S3_BUCKET` <a name="S3_BUCKET" id="aws-cdk-aws-connect-lib.StorageConfigType.S3_BUCKET"></a>

---


##### `KINESIS_VIDEO_STREAM` <a name="KINESIS_VIDEO_STREAM" id="aws-cdk-aws-connect-lib.StorageConfigType.KINESIS_VIDEO_STREAM"></a>

---


##### `KINESIS_STREAM` <a name="KINESIS_STREAM" id="aws-cdk-aws-connect-lib.StorageConfigType.KINESIS_STREAM"></a>

---


##### `KINESIS_FIREHOSE` <a name="KINESIS_FIREHOSE" id="aws-cdk-aws-connect-lib.StorageConfigType.KINESIS_FIREHOSE"></a>

---


### StorageEncryptionType <a name="StorageEncryptionType" id="aws-cdk-aws-connect-lib.StorageEncryptionType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.StorageEncryptionType.KMS">KMS</a></code> | *No description.* |

---

##### `KMS` <a name="KMS" id="aws-cdk-aws-connect-lib.StorageEncryptionType.KMS"></a>

---


### StorageResourceType <a name="StorageResourceType" id="aws-cdk-aws-connect-lib.StorageResourceType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.StorageResourceType.CHAT_TRANSCRIPTS">CHAT_TRANSCRIPTS</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.StorageResourceType.CALL_RECORDINGS">CALL_RECORDINGS</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.StorageResourceType.SCHEDULED_REPORTS">SCHEDULED_REPORTS</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.StorageResourceType.MEDIA_STREAMS">MEDIA_STREAMS</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.StorageResourceType.CONTACT_TRACE_RECORDS">CONTACT_TRACE_RECORDS</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.StorageResourceType.AGENT_EVENTS">AGENT_EVENTS</a></code> | *No description.* |

---

##### `CHAT_TRANSCRIPTS` <a name="CHAT_TRANSCRIPTS" id="aws-cdk-aws-connect-lib.StorageResourceType.CHAT_TRANSCRIPTS"></a>

---


##### `CALL_RECORDINGS` <a name="CALL_RECORDINGS" id="aws-cdk-aws-connect-lib.StorageResourceType.CALL_RECORDINGS"></a>

---


##### `SCHEDULED_REPORTS` <a name="SCHEDULED_REPORTS" id="aws-cdk-aws-connect-lib.StorageResourceType.SCHEDULED_REPORTS"></a>

---


##### `MEDIA_STREAMS` <a name="MEDIA_STREAMS" id="aws-cdk-aws-connect-lib.StorageResourceType.MEDIA_STREAMS"></a>

---


##### `CONTACT_TRACE_RECORDS` <a name="CONTACT_TRACE_RECORDS" id="aws-cdk-aws-connect-lib.StorageResourceType.CONTACT_TRACE_RECORDS"></a>

---


##### `AGENT_EVENTS` <a name="AGENT_EVENTS" id="aws-cdk-aws-connect-lib.StorageResourceType.AGENT_EVENTS"></a>

---


### UserPhoneType <a name="UserPhoneType" id="aws-cdk-aws-connect-lib.UserPhoneType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-aws-connect-lib.UserPhoneType.SOFT_PHONE">SOFT_PHONE</a></code> | *No description.* |
| <code><a href="#aws-cdk-aws-connect-lib.UserPhoneType.DESK_PHONE">DESK_PHONE</a></code> | *No description.* |

---

##### `SOFT_PHONE` <a name="SOFT_PHONE" id="aws-cdk-aws-connect-lib.UserPhoneType.SOFT_PHONE"></a>

---


##### `DESK_PHONE` <a name="DESK_PHONE" id="aws-cdk-aws-connect-lib.UserPhoneType.DESK_PHONE"></a>

---

