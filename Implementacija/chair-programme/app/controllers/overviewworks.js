import Ember from 'ember';

export default Ember.Controller.extend({
  dokumentService: Ember.inject.service(),

  update: function(id,review) {
          this.get('dokumentService').updateReview(id, review);
    },
actions: {
  submitReview: function(id, review){
    console.log(review);
          this.update(id, review);
          this.get('notify').info("Successfull!");

  }
}
});
