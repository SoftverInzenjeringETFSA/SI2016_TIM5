import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  userService: Ember.inject.service(),
  errors:DS.Errors.create(),
  notify: Ember.inject.service('notify'),
  passwordGreska : false,
  oldPasswordGreska : false,

// validacija starog i novo passworda
validation: function(oldpass){
  let p = this.get('session.data.authenticated.korisnik.password');
  this.set("oldPasswordGreska",false);
  this.set("oldPasswordGreska",false);
  let IncorrectPasswords = true;
//  let regNumber = /\d+/;
//  let regCharNumber = /^[\d]*[\w]+[\d]*$/;

  	if(oldpass != p) {
    this.set("oldPasswordGreska",true);
    IncorrectPasswords= false;
  }
  else{
    this.set("oldPasswordGreska",false);
  }

//|| !this.get("model.neko.password").match(regNumber) || !this.get("model.neko.password").match(regCharNumber)
  if (this.get("model.neko.password") == "" || this.get("model.neko.password").length < 8 || this.get("model.neko.password").length > 20 ){
      this.set("passwordGreska",true);
      IncorrectPasswords = false;
  }
  else {
    this.set("passwordGreska",false);
    }

  return IncorrectPasswords;
},

  update: function(user, id) {
          this.get('userService').update(user, id);
      },


  actions: {
    //akcija updatevoanje user-a na dugme submit
    update: function(oldpass) {
    let _user = this.get('model.neko');
    console.log(_user);
//prvo ide validacija
//	if(this.validation(oldpass)){
    //_user.password = novipass;
      this.update(_user.password,_user.id);
      this.get('notify').info("Password Successfully Changed!");
}}


});
