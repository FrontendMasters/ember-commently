import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Component } = Ember;

export default Component.extend({
  classNames: ['post-comment'],
  editMode: false,
  saveComment: task(function* () {
    yield this.get('model').save();
    this.set('editMode', false);
  })
});