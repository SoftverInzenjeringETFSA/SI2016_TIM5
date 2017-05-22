import Ember from 'ember';

export default Ember.Route.extend({
	dokumentService: Ember.inject.service(),

  model: function() {
    return Ember.RSVP.hash({
      dokuments: this.get('dokumentService').all()
    });
  }


});
