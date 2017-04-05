import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Component } = Ember;

export default Component.extend({
  classNames: ['post-full'],
  postInfo: stateFor('post-info', 'model'),
  actions: {
    deleteComment(comment) {
      comment.destroyRecord();
    }
  }
});