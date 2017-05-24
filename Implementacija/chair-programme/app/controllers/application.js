import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    roleService: Ember.inject.service(),

    actions: {
        logout() {
            this.get('session').invalidate();
        }
    },

   isAdmin: function (params) {
      //returning the boolean value to the called function
      return param1 === "Administrator";
   }.property('content.isAdmin'),

});
