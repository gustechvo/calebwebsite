'use strict';

angular.module('caleb')
 .directive('navDir', function ($rootScope) {
   return {
	restrict: 'AEC',      
	link: function (scope, element, attrs) {
	  	scope.scrollFooter = function(){
	  		$('#footer')[0].scrollIntoView();
		}
		scope.scrollHeader = function(){
			$('#header')[0].scrollIntoView();
			console.log("scrollHeader");
		}
	},
 }
});