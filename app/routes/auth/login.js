import Ember from 'ember';

const { Route, inject, Logger } = Ember;

export default Route.extend({
  session: inject.service(),
  currentUser: inject.service(),
  actions: {
    login(email, password) {
      this.get('session')
        .authenticate('authenticator:oauth2', email, password)
        .then(() => {
          return this.get('currentUser').loadUserInfo();
        })
        .catch((e) => {
          Logger.error('Problem logging in', e);
        });
    }
  },
  model() {
    return {
      email: '',
      password: ''
    };
  }
});