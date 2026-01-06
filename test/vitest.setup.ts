import { expect } from 'vitest';

expect.extend({
  hasResource: (template, resource_type, props = null) => {
    try {
      template.hasResource(resource_type, props ?? {});

      return { message: () => `Resource ${resource_type} was found`, pass: true };
    } catch (_) {
      return { message: () => `Resource ${resource_type} was not found`, pass: false };
    }
  },

  hasResourceProperties: (template, resource_type, props = null) => {
    try {
      template.hasResourceProperties(resource_type, props ?? {});

      return { message: () => `Resource ${resource_type} was found`, pass: true };
    } catch (_) {
      return { message: () => `Resource ${resource_type} was not found`, pass: false };
    }
  },

  hasParameter: (template, logical_id, props = null) => {
    try {
      template.hasParameter(logical_id, props ?? {});

      return { message: () => `Parameter ${logical_id} was found`, pass: true };
    } catch (_) {
      return { message: () => `Parameter ${logical_id} was not found`, pass: false };
    }
  },

  hasResourceCount: (template, resource_type, count) => {
    try {
      template.resourceCountIs(resource_type, count);
      return { message: () => `Found ${count} resources of type ${resource_type}`, pass: true };
    } catch (_) {
      return { message: () => 'Error checking resource count', pass: false };
    }
  },
});

expect.extend({
  hasError: (annotations, constructPath, message) => {
    try {
      annotations.hasError(constructPath, message);
      return { message: () => 'Found expected error annotation', pass: true };
    } catch (_) {
      return { message: () => `Expected error annotation ${message} not found`, pass: false };
    }
  },
});