import Ember from 'ember';

export default Ember.Route.extend({
  speakerService: Ember.inject.service(), // ovo automatski injecta onaj ranije kreirani accountService

     model: function(params) {
        return Ember.RSVP.hash({
            speaker: this.get('speakerService').getById(params.id)
        });
    }
});
