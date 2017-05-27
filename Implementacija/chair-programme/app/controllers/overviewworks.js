import Ember from 'ember';

export default Ember.Controller.extend({
  dokumentService: Ember.inject.service(),
  notify: Ember.inject.service('notify'),

  declined : false,
  accepted:false,
  greska:false,

  update: function(id,review) {
          this.get('dokumentService').updateReview(id, review);
    },
    decline: function(id) {
            this.get('dokumentService').declineReview(id);
      },
validation: function(review){
  this.set("declined",false);
  this.set("accepted",false);
  this.set("greska",false);

  let tacanUnos = true;

  if (review===null || review===undefined){
    tacanUnos =false;
    this.set("greska",true);
  }
  return tacanUnos;

},


actions: {
  submitReview: function(id, review){
    if(validation(review)){
    console.log(review);
          this.update(id, review);
          this.get('notify').info("Successful Document Review!");

        }

  },

  declineReview: function(id){
          this.decline(id);
          this.set("declined",true);
          this.get('notify').info("This assignment is declined!");


  }
}
});
