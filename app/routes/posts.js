/* eslint  promise/no-nesting: 0 */
import Ember from 'ember';

const { Route, RSVP: { all } } = Ember;

export default Route.extend({
  queryParams: {
    search: {
      replace: true,
      as: 's'
    }
  },
  actions: {
    _refreshRoute() {
      this.refresh();
    }
  },
  model({ search }) {
    let p = null;
    if (search) {
      p =  this.store.query('post', { search });
    } else {
      p = this.store.findAll('post');
    }
    return p.then((posts) => {
      let commentsPromises = posts.map((pr) => pr.get('comments'));
      return all(commentsPromises).then(() => {
        return posts;
      });
    });
  }
});