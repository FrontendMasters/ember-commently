import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import config from '../config/environment';

const { host, namespace } = config.DS;

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: `${host}/${namespace}/sessions`
});