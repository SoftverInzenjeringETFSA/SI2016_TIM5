import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  userService: Ember.inject.service(),


  actions: {
    update: function(newpassword){
      console.log(newpassword);
    let _user = this.get('session.data.authenticated.korisnik');

    let u = this.get('userService').getById(_user.id);
    u.password= newpassword;
    console.log(u);
    this.get('userService').update(u, _user.id);

  }},

});
