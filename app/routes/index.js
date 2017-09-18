import Ember from 'ember';

export default Ember.Route.extend({
	/*beforeModel(){
		this.replaceWith('employee');
	}*/
	beforeModel(){
		this.transitionTo('employee','yesterday','today');
	}
});
