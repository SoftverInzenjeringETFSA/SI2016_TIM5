import Ember from 'ember';

export default Ember.Route.extend({
  roleService: Ember.inject.service(),
  session: Ember.inject.service(),

  beforeModel(transition) {
    //ovo je ok
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
    //ovo jos nije, ne poredi modele
    else if (this.get('session.data.authenticated.korisnik.roleId') === this.get('roleService').getById(2) || this.get('session.data.authenticated.korisnik.roleId') === this.get('roleService').getById(3) )
    {
      var previousTransition = this.get('previousTransition');
      if (previousTransition) {
        this.set('previousTransition', null);
        previousTransition.retry();
      } else {
        // Default back to homepage
        this.transitionTo('index');
      }
    }
  }

});
