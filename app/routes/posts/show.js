import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Route, inject } = Ember;

export default Route.extend({
  currentUser: inject.service(),
  model({ id }) {
    return this.store.findRecord('post', id);
  },
  actions: {
    saveComment(post, commentBody) {
      let user = this.get('currentUser.user');
      let comment = this.store.createRecord('comment', {
        user,
        post,
        body: commentBody
      });
      return comment.save().then((d) => {
        let postInfo = stateFor('post-info').get(post);
        postInfo.set('draftComment', '');
        return d;
      });
    }
  }
});