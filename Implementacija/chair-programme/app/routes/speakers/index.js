import Ember from 'ember';

export default Ember.Route.extend({
	speakerService: Ember.inject.service(), // ovo automatski injecta onaj ranije kreirani accountService

  model: function() {
    return Ember.RSVP.hash({
      speakers: this.get('speakerService').all()
    });
  }
});
