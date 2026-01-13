import boto3

connect = boto3.client('connect')

def on_event(event, context):
  request_type = event['RequestType']
  if request_type == 'Create': return on_create(event)
  if request_type == 'Update': return on_update(event)
  if request_type == 'Delete': return on_delete(event)
  raise Exception("Invalid request type: %s" % request_type)

def on_create(event):
  props = event["ResourceProperties"]

  instance_id = props.get('InstanceId')
  if not instance_id:
    raise Exception('Invalid request: missing InstanceId')

  attributes = props.get('CustomAttributes', {})

  for (attrib, value) in attributes.items():
    connect.update_instance_attribute(
      InstanceId=instance_id,
      AttributeType=attrib,
      Value=value,
    )

  return {
    'PhysicalResourceId': f'{instance_id}-CustomAttributes',
  }

def on_update(event):
  physical_id = event["PhysicalResourceId"]

  props = event["ResourceProperties"]
  old_props = event["OldResourceProperties"]

  instance_id = props.get('InstanceId')
  old_instance_id = old_props.get('InstanceId')
  if not instance_id:
    raise Exception('Invalid request: missing InstanceId')
  if instance_id != old_instance_id:
    raise Exception('Cannot change InstanceId on update')

  attributes = props.get('CustomAttributes', {})
  old_attributes = old_props.get('CustomAttributes', {})

  removed = old_attributes.keys() - attributes.keys()
  for attrib in removed:
    connect.update_instance_attribute(
      InstanceId=instance_id,
      AttributeType=attrib,
      Value='false',
    )

  for (attrib, value) in attributes.items():
    if attrib not in old_attributes or old_attributes[attrib] != value:
      connect.update_instance_attribute(
        InstanceId=instance_id,
        AttributeType=attrib,
        Value=value,
      )

  return {
    'PhysicalResourceId': physical_id,
  }

def on_delete(event):
  physical_id = event["PhysicalResourceId"]

  props = event["ResourceProperties"]

  instance_id = props.get('InstanceId')
  if not instance_id:
    raise Exception('Invalid request: missing InstanceId')

  attributes = props.get('CustomAttributes', {})

  for (attrib, value) in attributes.items():
    connect.update_instance_attribute(
      InstanceId=instance_id,
      AttributeType=attrib,
      Value='false',
    )

  return {
    'PhysicalResourceId': physical_id,
  }
