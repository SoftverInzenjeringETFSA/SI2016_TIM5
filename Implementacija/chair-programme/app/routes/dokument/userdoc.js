import Ember from 'ember';

export default Ember.Route.extend({
  dokumentService: Ember.inject.service(),
  session: Ember.inject.service(),


  model: function() {
    return Ember.RSVP.hash({
      userdocs: this.get('dokumentService').allUserDocs(this.get('session.data.authenticated.korisnik.id'))
    });
  },

  session: Ember.inject.service(),

  beforeModel(transition) {
    //ovo je ok
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
    //ovo je sad ok
    else if (this.get('session.data.authenticated.korisnik.roleId.roleName') != "Registered user" )
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
