import Ember from 'ember';

const { Controller, run: { debounce } } = Ember;

export default Controller.extend({
  queryParams: ['search'],
  search: '',
  _refreshRoute() {
    this.send('_refreshRoute');
  },
  actions: {
    searchUpdated(paramVal) {
      this.set('search', paramVal);
      debounce(this, '_refreshRoute', 300);
    }
  }
});
