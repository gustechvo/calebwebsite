'use strict';

angular
  .module('caleb', ['ngRoute','angular-flexslider','ngSanitize'])
  .run(function($route, $rootScope) {
    console.log("Caleb app starting");
  })
  .config(function ($routeProvider) {
   //adding routes and controllers to $route service
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .otherwise({
        redirectTo: '/',
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      });
  });


function pf(){
  var width = $(window).width();
  if(width > 1440){
    console.log("xxlarge");
    return "xxlarge"
  }
  else if(width > 1280){
    console.log("xlarge");
    return "xlarge"
  }
  else if(width > 960){
    console.log("large");
    return "large"
  }
  else if(width > 768){
    console.log("medium");
    return "medium"
  }
  else if(width > 640){
    console.log("small");
    return "small"
  }
  else{
    console.log("xsmall");
    return "xsmall"
  }
}






