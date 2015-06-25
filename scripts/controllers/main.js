'use strict';

angular.module('caleb').controller('MainCtrl', function ($scope,$rootScope, LoadData, $http,$sce) {

  console.log("Main Controller");
  if(!$rootScope.postData){
    LoadData.fetch().then(
      function(result) {
        $rootScope.result = result;
        $rootScope.projects = result.projects;
        $rootScope.portfolioTypes = result.portfolio_types;
        console.log("postData",result);
        $rootScope.$broadcast('dataFetched');
    });
  }
  else{
    console.error("Error retrieving data.");
  };

  $rootScope.pf = pf();
  var resizeId;
  $(window).on('resize', function (){
    clearTimeout(resizeId);
    resizeId = setTimeout(function(){
      $rootScope.pf = pf();
      $rootScope.$apply();
    }, 500);
  });

  //Active States on tags
  $scope.select= function(item) {
      $('article.project').removeClass('fadeIn');
      $('.tag a').removeClass('active');
      $scope.selected = item;
      $('article.project').addClass('fadeIn');
  };

  $scope.isActive = function(item) {
    return $scope.selected === item;
  };

  $rootScope.randomOffset = function(){
    return Math.floor(Math.random() * 3000);
  }
})


