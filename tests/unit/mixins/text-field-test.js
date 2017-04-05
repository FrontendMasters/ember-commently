import Ember from 'ember';
import TextFieldMixin from 'commently/mixins/text-field';
import { module, test } from 'qunit';

const { Object: Obj } = Ember;

module('Unit | Mixin | text field');

// Replace this with your real tests.
test('it works', function(assert) {
  let TextFieldObject = Obj.extend(TextFieldMixin);
  let subject = TextFieldObject.create();
  assert.ok(subject);
});
