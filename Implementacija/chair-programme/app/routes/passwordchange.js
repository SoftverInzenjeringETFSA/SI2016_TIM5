import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  userService: Ember.inject.service(),

  


  beforeModel(transition) {
    //ovo je ok
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
    //sifra se ne moze promijeniti ako korisnik nije logovan
  }
});
