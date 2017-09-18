import Ember from 'ember';
const Promise = Ember.RSVP.Promise;
export default Ember.Route.extend({

	/*model(){
	return Ember.$.getJSON("/data/generated.json");
	}*/
	model(params){
	return new Promise(function(resolve){
		setTimeout(function(){
			let data = 
			Ember.$.getJSON('/data/generated.json?starts_at=${params.start}&ends_at=${params.end}');
			resolve(data);
			},400);
		});
	}
	/*model(){
	return Ember.$.getJSON('/data/generated.json?starts_at=${params.start}&ends_at=${params.end}');
	}*/
});
