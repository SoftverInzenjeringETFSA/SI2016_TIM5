import Ember from 'ember';

export default Ember.Controller.extend({
  dokumentService: Ember.inject.service(),
  notify: Ember.inject.service('notify'),

  declined : false,
  accepted:false,
  greska:false,

  update: function(id) {
          this.get('dokumentService').acceptReview(id);
    },
    decline: function(id) {
            this.get('dokumentService').declineReview(id);
      },

actions: {
  acceptReview: function(id){
          this.update(id);
          this.set("accepted",true);
          this.set("declined",false);
          this.get('notify').info("Document successfully accepted!");
          alert("Document successfully accepted!");
          window.location.reload();
  },

  declineReview: function(id){
          this.decline(id);
          this.set("declined",true);
          this.set("accepted",false);

          this.get('notify').info("This assignment is declined!");
          alert("Assigment is declined!");
          window.location.reload();


  }
}
});
