import Ember from 'ember';

const { Helper } = Ember;

export function <%= camelizedModuleName %>(params, hash) {
  return `http://<%= baseUrl %>/${hash.w}/${hash.h}`;
}

export default Helper.helper(<%= camelizedModuleName %>);