import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  userService: Ember.inject.service(),
  errors:DS.Errors.create(),
  notify: Ember.inject.service('notify'),
  passwordGreska : false,
  oldPasswordGreska : false,
  passwordConfirmGreska : false,
  uspjesno : false,


// validacija starog i novo passworda
validation: function(oldpass, passwordConfirm){
  //ucitavanje trenutno iz modela rute
  let _u = this.get('model.trenutni');
  console.log(_u);

//postavljanje sve na false
  this.set("oldPasswordGreska",false);
  this.set("oldPasswordGreska",false);
  this.set("passwordConfirmGreska",false);
  this.set("uspjesno",false);

  let IncorrectPasswords = true;

//regexi
  let regNumber = /\d+/;
  let regCharNumber = /^[\d]*[\w]+[\d]*$/;

//provjera trenutnog
  	if(oldpass != _u.password) {
    this.set("oldPasswordGreska",true);
    IncorrectPasswords= false;
  }
  else{
    this.set("oldPasswordGreska",false);
  }

//provjera novog
  if (this.get("model.neko.password") == "" || this.get("model.neko.password") == undefined || this.get("model.neko.password").length < 8 || this.get("model.neko.password").length > 20 || !this.get("model.neko.password").match(regNumber) || !this.get("model.neko.password").match(regCharNumber)){
      this.set("passwordGreska",true);
      IncorrectPasswords = false;
  }
  else {
    this.set("passwordGreska",false);
    }

//provjera novog i potvrdjene sifre
    if(passwordConfirm != this.get("model.neko.password")) {
    this.set("passwordConfirmGreska",true);
    IncorrectPasswords= false;
  } else {
      this.set("passwordConfirmGreska",false);
      }

//vrati ima li gresaka
  return IncorrectPasswords;
},

  update: function(user, id) {
          this.get('userService').update(user, id);
      },


  actions: {
    //akcija updatevoanje user-a na dugme submit
    update: function(oldpass,password,passwordConfirm) {
    let _user = this.get('model.neko');
    console.log(_user);
    _user.password = password;
//prvo ide validacija
if(this.validation(oldpass, passwordConfirm)){
      this.update(_user.password,_user.id);
      this.get('notify').info("Password Successfully Changed!");
      this.set("uspjesno",true);
      alert("Password Successfully Changed!");
      window.location.reload();
      
       }
}}


});
