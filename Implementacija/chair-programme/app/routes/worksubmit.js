import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  dokumentService: Ember.inject.service(),
  userService: Ember.inject.service(),
  notify: Ember.inject.service('notify'),

  model: function(){
    return{documentLink:'',userId:this.get('userService').getById(this.get('session.data.authenticated.korisnik.id')),reviewerId:null,isApproved:'',review:null,name:''};
  },

  setupController:function(controller,model){
    controller.set('dokument',model);
  },

  actions:{
    createDoc:function(dokument){
            console.log(dokument);
            this.get('dokumentService').register(dokument);
            this.get('notify').info('Successfull!');

    }
  },

  beforeModel(transition) {
    //ovo je ok
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
    //ovo je sad ok
    else if (this.get('session.data.authenticated.korisnik.roleId.roleName') != "Registered user" )
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
