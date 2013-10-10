angular.module('sliderServices', ['ngResource']).
	factory('GetSliderItem', function($resource) {
		return $resource('data/json.js', {}, {query : {method:'GET'}});
	})