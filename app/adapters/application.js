/* eslint no-case-declarations: 0 */
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

const { JSONAPIAdapter } = DS;
const { host, namespace } = config.DS;

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth2',
  host,
  namespace,

  urlForCreateRecord(modelName, snapshot) {
    switch (modelName) {
      case 'comment':
      case 'comments':
        let postUrl = this.urlForFindRecord(snapshot.belongsTo('post').id, 'post', snapshot);
        return `${postUrl}/comments`;
      default:
        return this._super(...arguments);
    }
  },

  urlForDeleteRecord(id, modelName, snapshot) {
    switch (modelName) {
      case 'comment':
      case 'comments':
        let postUrl = this.urlForFindRecord(snapshot.belongsTo('post').id, 'post', snapshot);
        return `${postUrl}/comments/${id}`;
      default:
        return this._super(...arguments);
    }
  }
});