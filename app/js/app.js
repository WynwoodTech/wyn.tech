'use strict';

var WynTech = angular.module('WynTech', [
  'ui.router',
  'ngRoute',
  'duScroll',
  'firebase',
  'angular-google-analytics',
  'WynTech.home'
])

WynTech.config(['$locationProvider', 'AnalyticsProvider', function($locationProvider, AnalyticsProvider){
  $locationProvider.html5Mode(true);

  $locationProvider.html5Mode({
    enabled: true,
    requiredBase: false
  });

  // AnalyticsProvider
  AnalyticsProvider
  .setAccount('UA-72542635-1')
  .logAllCalls(true)
  .startOffline(true);

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
