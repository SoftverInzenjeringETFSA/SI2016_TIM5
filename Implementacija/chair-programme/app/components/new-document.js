import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
errors:DS.Errors.create(),

validate: function(){
  this.set('errors',DS.Errors.create());
  if(this.get('dokument.name')==='' || this.get('dokument.name')===undefined){
    this.get('errors').add('name','Input document name!');
  }
  if(this.get('dokument.documentLink')==='' || this.get('dokument.documentLink')===undefined){
    this.get('errors').add('documentLink','Input document link!');
  }
  

  return this.get('errors.isEmpty');
},

  actions:{
  submit: function(){
    if(this.validate()){
      this.sendAction('action',this.dokument);
          console.log(this.dokument);
}
  }

},
});
