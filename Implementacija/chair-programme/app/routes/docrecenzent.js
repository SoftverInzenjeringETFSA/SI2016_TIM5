import Ember from 'ember';

export default Ember.Route.extend({
  userService: Ember.inject.service(),
  dokumentService: Ember.inject.service(),

  model: function() {
    return Ember.RSVP.hash({
      reviewers: this.get('userService').getReviewers(),
        dokuments: this.get('dokumentService').all()
    });

  }

});
