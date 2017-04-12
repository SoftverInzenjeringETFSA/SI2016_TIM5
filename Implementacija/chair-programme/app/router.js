import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('info');
  this.route('organizacija');
  this.route('raspored');
  this.route('sadržaj');
  this.route('put-i-smještaj');
});

export default Router;
