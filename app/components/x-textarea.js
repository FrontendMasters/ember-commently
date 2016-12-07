import Ember from 'ember';
import TextField from '../mixins/text-field';

const { Component } = Ember;

export default Component.extend(TextField, {
    classNames: ['x-textarea']
});