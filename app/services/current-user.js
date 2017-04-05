import Ember from 'ember';

const { Service, inject, Logger } = Ember;

export default Service.extend({
  store: inject.service(),
  loadUserInfo() {
    let user = this.get('store').peekRecord('user', 'current');
    if (user) {
      this.set('user', user);
      return user;
    } else {
      return this.get('store').findRecord('user', 'current')
      .then((user) => {
        this.set('user', user);
        return user;
      })
      .catch((e) => {
        Logger.error('Problem loading current user data', e);
      });
    }
  }
});