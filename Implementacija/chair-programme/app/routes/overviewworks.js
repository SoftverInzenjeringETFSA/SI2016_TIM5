import Ember from 'ember';

export default Ember.Route.extend({
  dokumentService: Ember.inject.service(),
  session: Ember.inject.service(),

  model: function() {
    return Ember.RSVP.hash({
      docs: this.get('dokumentService').getReviewerDocs(this.get('session.data.authenticated.korisnik.id'))

    });
  }

});
