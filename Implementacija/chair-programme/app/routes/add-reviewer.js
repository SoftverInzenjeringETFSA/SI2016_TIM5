import Ember from 'ember';

export default Ember.Route.extend({
  roleService: Ember.inject.service(),
  userService: Ember.inject.service(),
  notify: Ember.inject.service('notify'),

	model: function(){
		return{firstName:'',lastName:'',email:'',password:'',roleId:this.get('roleService').getById(3),isVerified:'',state:'',city:'',note:'',function:''};
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
	},

  session: Ember.inject.service(),

  beforeModel(transition) {
    //ovo je ok
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
    //ovo je sad ok
    else if (this.get('session.data.authenticated.korisnik.roleId.roleName') != "Administator" )
    {
      var previousTransition = this.get('previousTransition');
      if (previousTransition) {
        this.set('previousTransition', null);
        previousTransition.retry();
      } else {
        // Default back to homepage
        this.transitionTo('index');
      }
    }
  }


});
