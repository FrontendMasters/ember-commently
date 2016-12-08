import Ember from 'ember';

const { Helper, inject, observer } = Ember;

export default Helper.extend({
    session: inject.service(),
    onAuthStateChanged: observer('session.isAuthenticated', function() {
        this.recompute();
    }),
    compute() {
        return this.get('session.isAuthenticated');
    }
});