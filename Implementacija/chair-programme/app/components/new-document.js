import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
errors:DS.Errors.create(),

isChecked:false,
checkchange:function(){
  console.log("test5");
}.observes("isChecked"),

validate: function(){
  this.set('errors',DS.Errors.create());
  if(this.get('dokument.name')==='' || this.get('dokument.name')===undefined){
    this.get('errors').add('name','Input document name!');
  }
  if(this.get('dokument.documentLink')==='' || this.get('dokument.documentLink')===undefined){
    this.get('errors').add('documentLink','Input document link!');
  }
  if(this.get('isChecked')==false){
    this.get('errors').add('checkbox','You must accept the Terms and Conditions!');
  }

  return this.get('errors.isEmpty');
},

  actions:{
  submit: function(){
    if(this.validate()){
      var dialog = window.confirm("Add document?");
      if (dialog == true) {

      this.sendAction('action',this.dokument);
          console.log(this.dokument);
          alert("Document sent successfully!");
                      window.location.reload();
                    }
          }
  }

},
});
