import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  actions: {
    register() {
      this.get('currentModel').save();
    }
  },
  model() {
    return this.store.createRecord('user');
  }
});