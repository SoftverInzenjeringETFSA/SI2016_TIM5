import Ember from 'ember';




export default Ember.Controller.extend({


  isChecked:false,
  checkchange:function(){
    console.log("rinaka");
  }.observes("isChecked"),

});