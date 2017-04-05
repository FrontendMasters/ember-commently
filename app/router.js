import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;

const MyRouter = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

MyRouter.map(function() {
  this.route('posts', function() {
    this.route('show', { path: ':id' });
  });

  this.route('auth', function() {
    this.route('login');
    this.route('register');
  });
});

export default MyRouter;
