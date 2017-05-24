import Ember from 'ember';

export default Ember.Route.extend({
  dokumentService: Ember.inject.service(),
  session: Ember.inject.service(),


  model: function() {
    return Ember.RSVP.hash({
      userdocs: this.get('dokumentService').allUserDocs(this.get('session.data.authenticated.korisnik.id'))
    });
  }

});
