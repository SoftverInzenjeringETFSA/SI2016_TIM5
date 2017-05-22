import Ember from 'ember';

export default Ember.Route.extend({
  speakerService: Ember.inject.service(),
	model: function(){
		return{firstName:'',lastName:'',email:'',link:'',cv:'',info:'',imageLink:''};
	},

	setupController:function(controller,model){
		controller.set('speaker',model);
	},

	actions:{
		createUser:function(speaker){
            console.log(speaker);
            this.get('speakerService').register(speaker);
		}
	}

});
