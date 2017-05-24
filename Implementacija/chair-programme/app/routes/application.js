import Ember from 'ember';

export default Ember.Route.extend({
  roleService: Ember.inject.service(),
  session: Ember.inject.service(),

  model: function() {
    return Ember.RSVP.hash({
      admin: this.get('roleService').getById(1),
      reviewer: this.get('roleService').getById(3),
      basicUser: this.get('roleService').getById(2)
    });
  }
});
