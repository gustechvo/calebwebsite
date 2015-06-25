'use strict';

angular.module('caleb')
 .directive('featured', function ($rootScope) {
   return {
	restrict: 'AEC',      
	link: function (scope, element, attrs) {
	  	console.log("featured directive");
	},
 	templateUrl: 'views/featured.html'
 }
});