import Ember from 'ember';

export default Ember.Controller.extend( {
  showing:true,
  actions: {
    alert(){
      console.log('alert',...arguments);

    },
    toggleShowing(){
      this.set('showing',!this.get('showing'));
    }
  }

});
