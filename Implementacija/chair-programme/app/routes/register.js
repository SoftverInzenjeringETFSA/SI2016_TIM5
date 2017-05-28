import Ember from 'ember';

export default Ember.Route.extend({
  roleService: Ember.inject.service(),
  userService: Ember.inject.service(),
  notify: Ember.inject.service('notify'),

  jedinstvenEmail : false,

	model: function(){
    role: this.get('roleService').getById(2);
    users:this.get('userService').all();
		return{firstName:'',lastName:'',email:'',password:'',roleId:this.get('roleService').getById(2),isVerified:'',state:'',city:'',note:'',function:''};
	},

	setupController:function(controller,model){
		controller.set('user',model);
	},

  validation: function(user){
    var users = this.get('userService').all();
    this.set("jedinstvenEmail", false);
    var jedinstvenE=true;
    var i;
    for (i = 0; i<users.length; i++){
      var u = users[i];
      if (u.email == user.email){
        jedinstvenE = false;
        this.set("jedinstvenEmail", true);
        return false;
        break;
      }
    }
    return jedinstvenE;

  },

	actions:{
		createUser:function(user){
      if (this.validation(user)){
            console.log(user);
            this.get('userService').register(user);
            this.get('notify').info('Registration Successfully Completed!');
          }
      else {
        this.get('notify').info("This email already exists!!!");
      }
		}
	}


});
