'use strict';
/* eslint-env node */
const normalizeEntityName = require('ember-cli-normalize-entity-name');

module.exports = {
  description: 'Generates an img placeholder url builder',
  availableOptions: [{
    name: 'base',     // Required
    key: 'baseUrl',       // Optional, default is the camelized name
    description: 'Base URL of image placeholder service',       // Optional
    type: String,             // Required
    default: 'ember-cli',     // Optional, default is undefined
    required: false           // Optional, default is false
  }],
  locals(options) {
    // Return custom template variables here.
    return {
      baseUrl: options.base
    };
  },
  normalizeEntityName(entityName) {
    return normalizeEntityName(entityName);
  }
};