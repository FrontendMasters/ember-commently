import Ember from 'ember';
import { initialize } from 'commently/instance-initializers/request-info';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

const { run, Application } = Ember;

module('Unit | Instance Initializer | request info', {
  beforeEach() {
    run(() => {
      this.application = Application.create();
      this.appInstance = this.application.buildInstance();
    });
  },
  afterEach() {
    run(this.appInstance, 'destroy');
    destroyApp(this.application);
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(this.appInstance);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
