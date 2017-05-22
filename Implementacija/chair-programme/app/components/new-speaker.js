import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
	errors:DS.Errors.create(),

	validate: function(){
		this.set('errors',DS.Errors.create());

		if(this.get('speaker.firstName')==='' || this.get('speaker.firstName')===undefined){
			this.get('errors').add('firstName','Input firstName!');
		}

		if(this.get('speaker.firstName').length < 3){
			this.get('errors').add('firstName','Name must have at least 3 characters!');
		}

		if(this.get('speaker.lastName')==='' || this.get('speaker.lastName')===undefined){
			this.get('errors').add('lastName','Input lastName!');
		}
		if(this.get('speaker.lastName').length < 3){
			this.get('errors').add('lastName','Last name must have at least 3 characters!');
		}

		if(this.get('speaker.email')==='' || this.get('speaker.email')===undefined){
			this.get('errors').add('email','Input email!');
		}

    if(this.get('speaker.imageLink')==='' || this.get('speaker.imageLink')===undefined){
			this.get('errors').add('imageLink','Input image link!');
		}

    if(this.get('speaker.info')==='' || this.get('speaker.info')===undefined){
      this.get('errors').add('info','Input info!');
    }

		return this.get('errors.isEmpty');

	},

    actions:{
		submit: function(){
		if(this.validate()){
        this.sendAction('action',this.speaker);
            console.log(this.speaker);
            }
		}

	},

});
