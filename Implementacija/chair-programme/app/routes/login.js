import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  beforeModel(transition) {
    //ovo je ok
    if (this.get('session.isAuthenticated')) {
      var previousTransition = this.get('previousTransition');
      if (previousTransition) {
        this.set('previousTransition', null);
        previousTransition.retry();
      } else {
        // Default back to homepage
        this.transitionTo('index');
      }
    }
    //ako vec postoji sesija, ne moze se logovati
  }

});
