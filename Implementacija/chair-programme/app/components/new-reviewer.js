import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
userService: Ember.inject.service(),
	errors:DS.Errors.create(),
	uspjesnoDodan : false,


	validate: function(){
		let regNumber = /\d+/;
		let regCharNumber = /^[\d]*[\w]+[\d]*$/;
		this.set('errors',DS.Errors.create());
		this.set("uspjesnoDodan", false);

		if(this.get('user.firstName')==='' || this.get('user.firstName')===undefined){
			this.get('errors').add('firstName','Input firstName!');
		}

		if(this.get('user.firstName').length < 3){
			this.get('errors').add('firstName','Name must have at least 3 characters!');
		}

		if(this.get('user.lastName')==='' || this.get('user.lastName')===undefined){
			this.get('errors').add('lastName','Input lastName!');
		}
		if(this.get('user.lastName').length < 3){
			this.get('errors').add('lastName','Last name must have at least 3 characters!');
		}

		if(this.get('user.password')==='' || this.get('user.password')===undefined){
			this.get('errors').add('password','Input password!');
		}

		if(this.get('user.password').length < 8 || this.get('user.password').length > 20 || !this.get('user.password').match(regNumber) || !this.get('user.password').match(regCharNumber)){
			this.get('errors').add('password','Your password must be at least 8 characters and at least one number!');
		}


		if(this.get('user.email')==='' || this.get('user.email')===undefined){
			this.get('errors').add('email','Input email!!');
		}
		if (this.get('errors.isEmpty')==true){
			this.set('uspjesnoDodan', true);
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
