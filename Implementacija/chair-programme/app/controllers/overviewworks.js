import Ember from 'ember';

export default Ember.Controller.extend({
  dokumentService: Ember.inject.service(),

  update: function(id,review) {
          this.get('dokumentService').updateReview(id, review);
    },
    decline: function(id) {
            this.get('dokumentService').declineReview(id);
      },
actions: {
  submitReview: function(id, review){
    console.log(review);
          this.update(id, review);


  },
  declineReview: function(id){

          this.decline(id);


  }
}
});
