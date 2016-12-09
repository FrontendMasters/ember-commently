import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
    session: inject.service(),
    currentUser: inject.service(),
    actions: {
        login(email, password) {
            this.get('session')
                .authenticate('authenticator:oauth2', email, password)
                .then(() => {
                    return this.get('currentUser').loadUserInfo();
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