import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
userService: Ember.inject.service(),
	errors:DS.Errors.create(),

	validate: function(){
		this.set('errors',DS.Errors.create());

		if(this.get('user.firstName')==='' || this.get('user.firstName')===undefined){
			this.get('errors').add('firstName','Input firstName!!');
		}

		if(this.get('user.lastName')==='' || this.get('user.lastName')===undefined){
			this.get('errors').add('lastName','Input lastName!!');
		}

		if(this.get('user.password')==='' || this.get('user.password')===undefined){
			this.get('errors').add('password','Input password!!');
		}

		if(this.get('user.email')==='' || this.get('user.email')===undefined){
			this.get('errors').add('email','Input email!!');
		}

		return this.get('errors.isEmpty');

	},



    actions:{
		submit: function(){
		if(this.validate()){
        this.sendAction('action',this.user);
            console.log(this.user);
            }
		}

	},

});
