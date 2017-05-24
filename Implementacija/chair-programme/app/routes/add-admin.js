import Ember from 'ember';
import {
  Component,
  inject
} from 'ember';

export default Ember.Route.extend({
  roleService: Ember.inject.service(),
  userService: Ember.inject.service(),
notify: Ember.inject.service('notify'),
	model: function(){
    role: this.get('roleService').getById();
		return{firstName:'',lastName:'',email:'',password:'',roleId:this.get('roleService').getById(1),isVerified:'',state:'',city:'',note:'',function:''};
	},

	setupController:function(controller,model){
		controller.set('user',model);
	},

	actions:{
		createUser:function(user){
            console.log(user);
            this.get('userService').register(user);
             this.get('notify').info('Registration Successfully Completed!');
		}
	}


});
