import Ember from 'ember';

const { Service, inject } = Ember;

export default Service.extend({
  store: inject.service(),
  loadUserInfo() {
    return this.get('store').peekRecord('user', 'current')
    || this.get('store').findRecord('user', 'current');
  }
});