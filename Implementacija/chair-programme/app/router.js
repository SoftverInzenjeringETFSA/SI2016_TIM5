import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('info');
  this.route('organization');
  this.route('program');
  this.route('schedule');
  this.route('travel-accomodation');
  this.route('login');
  this.route('register');

  this.route('speaker', function() {
    this.route('show', { path: '/show/:id' });
  });
});

export default Router;
