import Ember from 'ember';

export default Ember.Route.extend({
 speakerService: Ember.inject.service(), // ovo automatski injecta onaj ranije kreirani accountService

  // ovo u template stavlja one modele koje si ondje navela u speakers rutu,
  // samo sa RSVP.hash se moze poslati vise modela. inace Ember.RSVP
  // je za resolveanje 'promise'-a koji su prica sama za sebe u JS
  // malo proguglaj poslije o cemu se tu radi, ugl svaki ajax poziv
  // moze
  model: function() {
    return Ember.RSVP.hash({
      speakers: this.get('speakerService').all()
    });
  }
});
