/* eslint ember-suave/require-access-in-comments: 0 */
import DS from 'ember-data';

const { JSONAPISerializer } = DS;

export default JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id) {
    if (primaryModelClass.modelName === 'user' && id === 'current') {
      /**
       * If we ask for user with id="current", ensure that the API
       * payload has a consistent "id" value, so ember-data doesn't
       * get into a strange state
       */
      payload.data.id = 'current';
    }
    return this._super(...arguments);
  }
});
