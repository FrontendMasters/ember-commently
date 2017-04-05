import Ember from 'ember';

const { Helper } = Ember;

export function catUrl(params, hash) {
  return `http://placekitten.com/${hash.w}/${hash.h}`;
}

export default Helper.helper(catUrl);