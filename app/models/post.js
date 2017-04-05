import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  body: attr('string'),
  title: attr('string'),
  authorName: attr('string'),
  authorPhotoUrl: attr('string'),
  featuredImageUrl: attr('string'),
  categoryName: attr('string'),
  createdAt: attr('string'),
  updatedAt: attr('string'),
  comments: hasMany('comments')
});