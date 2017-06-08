import Ember from 'ember';

export default Ember.Controller.extend({
  dokumentService: Ember.inject.service(),
  notify: Ember.inject.service('notify'),
  userService: Ember.inject.service(),
  izabranDoc : false,
  izabranReviewer : false,
  greska:false,


validation: function(id, reviewerId){
  this.set("izabranDoc",false);
  this.set("izabranReviewer",false);
  let tacanUnos = true;

  if (id === null || id === undefined) {
    tacanUnos = false;
    this.set("izabranDoc",true);
  }else{
    this.set("izabranDoc",false);
  }

  if (reviewerId === null || reviewerId === undefined) {
    tacanUnos = false;
    this.set("izabranReviewer",true);
  } else {
    this.set("izabranReviewer",false);
  }

  let docs = this.get('model.dokuments');
  let revs = this.get('model.reviewers');
  let postojiDoc = false;
  let postojiRev = false;

  let i = 1;
  for (i = 0; i<docs.length; i++)
  {
    let d = docs[i];
    if (d.id == id){
      postojiDoc=true;
      break;
    }
  }
  let j = 0;
  for (j = 0; j<revs.length; j++)
  {
    let d = revs[j];
    if (d.id == reviewerId){
      postojiRev=true;
      break;
    }
  }
  if (!postojiDoc || !postojiRev){
    tacanUnos = false;
  }
  if (!postojiDoc) this.set("izabranDoc",true);
  if(!postojiRev) this.set("izabranReviewer",true);
  this.set("greska",tacanUnos);
  return tacanUnos;
},

update: function(reviewerId,id) {
        this.get('dokumentService').updateReviewer(reviewerId, id);
  },

actions: {
 clickDoc: function(id) {

      let doc = this.get('dokumentService').getById(id);
      console.log(doc);
      this.set('selection', this.get('value'));
  },
  clickReviewer: function(id) {
    let user = this.get('userService').getById(id);
    console.log(user);
    this.set('selection', this.get('value'));
   },

  submit: function(id, reviewerId){
    if(this.validation(id, reviewerId)){
          this.update(reviewerId, id);
          this.get('notify').info("Successful!");
          alert("Document successfully assigned to reviewer!");
          window.location.reload();
         }
  }
}

});
