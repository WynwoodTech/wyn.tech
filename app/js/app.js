'use strict';

var WynTech = angular.module('WynTech', [
  'ui.router',
  'ngRoute',
  'duScroll',
  'firebase',
  'WynTech.home'
])

WynTech.config(['$locationProvider', function($locationProvider){
  $locationProvider.html5Mode(true);

  $locationProvider.html5Mode({
    enabled: true,
    requiredBase: false
  });
}]);

WynTech.config(['$stateProvider', '$httpProvider', function($stateProvider, $httpProvider){
  var templatePath = "/js/"

  $stateProvider.state('home', {
    url: '/',
    views: {
      "":{
        controller: 'HomeCtrl',
        templateUrl: templatePath + "home/home.html",
        resolve: {
          loading: function(){
            console.log("Loading home.html");
          }
        }
      },
    }
  });

}])
