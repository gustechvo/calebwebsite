'use strict';

angular.module('caleb')
 .directive('navigationDir', function ($rootScope,$route) {
   return {
	restrict: 'AEC',      
	link: function (scope, element, attrs) {

		var desktopOffset = $('#mainContent').offset().top;
		var mobileOffset = $('#nav').offset().top;

		scope.sticky = function(){
			if($route.current.$$route.originalPath == '/'){
				if($(window).width() >=768){
					if(this.scrollY >= desktopOffset){
						$('#nav').addClass('sticky');
					}
					else{
						$('#nav').removeClass('sticky');
					}
				}
				else{
					if(this.scrollY >= mobileOffset){
						$('#nav').addClass('sticky');
					}
					else{
						$('#nav').removeClass('sticky');
					}
				}
			}
		}

		window.addEventListener("scroll", scope.sticky);
	}
 }
});