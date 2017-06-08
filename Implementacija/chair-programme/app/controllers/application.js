import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  roleService: Ember.inject.service(),

  actions: {
    logout() {
      this.get('session').invalidate();
      this.transitionToRoute('/');
    }
  }

});
