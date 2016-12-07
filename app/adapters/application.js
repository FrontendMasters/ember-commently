import DS from 'ember-data';
import config from '../config/environment';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend({
    host: config.DS.host
});