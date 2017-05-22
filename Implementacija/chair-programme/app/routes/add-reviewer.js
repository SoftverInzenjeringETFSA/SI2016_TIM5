import Ember from 'ember';

export default Ember.Route.extend({
  roleService: Ember.inject.service(),
  userService: Ember.inject.service(),
	model: function(){
    role: this.get('roleService').getById(3);
		return{firstName:'',lastName:'',email:'',password:'',roleId:this.get('roleService').getById(3),isVerified:'',state:'',city:'',note:'',function:''};
	},

	setupController:function(controller,model){
		controller.set('user',model);
	},

	actions:{
		createUser:function(user){
            console.log(user);
            this.get('userService').register(user);
		}
	}


});
