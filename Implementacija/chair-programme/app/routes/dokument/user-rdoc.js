import Ember from 'ember';

export default Ember.Route.extend({
  dokumentService: Ember.inject.service(),
  session: Ember.inject.service(),


  model: function() {
    return Ember.RSVP.hash({
      userReviewedDocs :  this.get('dokumentService').allUserRDocs(this.get('session.data.authenticated.korisnik.id'))
    });
  }

});
