import Ember from 'ember';

export default Ember.Route.extend({
	speakerService: Ember.inject.service(),

  model: function() {
    return Ember.RSVP.hash({
      speakers: this.get('speakerService').all()
    });
  }
});
