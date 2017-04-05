/* globals define: true*/
import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const { Application } = Ember;

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

define('math', [], function() {
  return {
    default: Math,
    PI: Math.PI
  };
});

loadInitializers(App, config.modulePrefix);

export default App;
