/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  return app.toTree();
};
