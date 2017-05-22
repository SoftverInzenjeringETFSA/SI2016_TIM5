import Ember from 'ember';

export default Ember.Route.extend({
  dokumentService: Ember.inject.service(),
     model: function(params) {
        return Ember.RSVP.hash({
            dokument: this.get('dokumentService').getById(params.id)
        });
    }


});
