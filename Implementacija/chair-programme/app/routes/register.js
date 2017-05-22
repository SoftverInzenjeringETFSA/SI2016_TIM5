import Ember from 'ember';

export default Ember.Route.extend({
  userService: Ember.inject.service(),



	model: function(){
		return{firstName:'',lastName:'',email:'',password:'','2':'',1:''};
	},

	setupController:function(controller,model){
		controller.set('User',model);
	},

	actions:{
		createUser:function(user){
            console.log(user);
            this.get('userService').register(user);
		}
	}


});
