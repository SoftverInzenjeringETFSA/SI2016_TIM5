import Ember from 'ember';

export default Ember.Controller.extend({
  dokumentService: Ember.inject.service(),
  results: undefined,

  actions: {
    searchDocs: function(name){
      let rezultati= this.get('dokumentService').getByName(name);
      this.set("model.dokuments", rezultati);
    }
    }
});
