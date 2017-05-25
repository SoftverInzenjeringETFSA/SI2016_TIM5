import Ember from 'ember';

export default Ember.Controller.extend({
  userService: Ember.inject.service(),
  results: undefined,

  actions: {
    searchUsers: function(name){
      let rezultati= this.get('userService').getByName(name);
      this.set("model.users", rezultati);
    }
    }
});
