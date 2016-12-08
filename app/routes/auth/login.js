import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
    actions: {
        login({ email /*, password*/ }) {
            alert(`Attempted Login: ${email}`);
        }
    },
    model() {
        return {
            email: '',
            password: ''
        };
    }
});