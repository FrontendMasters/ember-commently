import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  post: belongsTo('post'),
  user: belongsTo('user'),
  body: attr('string'),
  createdAt: attr('string'),
  updatedAt: attr('string')
});