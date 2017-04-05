import Ember from 'ember';
import TextField from '../mixins/text-field';
import layout from '../templates/components/x-input';

const { Component } = Ember;

export default Component.extend(TextField, {
  layout,
  classNames: ['x-input'],
  type: 'text'
});