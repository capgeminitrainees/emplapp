import Ember from 'ember';

export default Ember.Object.extend({

	email: Ember.computed('email', function(){return this.get('email');}),
	employeeId: Ember.computed('email', function(){return this.get('employeeId');}),
	name: Ember.computed('email', function(){return this.get('name');}),
	salary: Ember.computed('email', function(){return this.get('salary');})
});
