import Ember from 'ember';

export default Ember.Route.extend({
	userService: Ember.inject.service(),

  model: function() {
    return Ember.RSVP.hash({
      reviewers: this.get('userService').getReviewers()
    });
  }


});
