import Ember from 'ember';
import { initialize } from 'commently/initializers/geo';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

const { run, Application } = Ember;

module('Unit | Initializer | geo', {
  beforeEach() {
    run(() => {
      this.application = Application.create();
      this.application.deferReadiness();
    });
  },
  afterEach() {
    destroyApp(this.application);
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(this.application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
