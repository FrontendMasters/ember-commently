/* globals define:true */
import { moduleFor, test } from 'ember-qunit';

define('math', [], function() {
  return {
    default: Math,
    PI: Math.PI
  };
});

moduleFor('route:application', 'Unit | Route | application', {
  // Specify the other units that are required for this test.
  needs: ['service:session', 'service:currentUser']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});