'use strict';

angular.module('WynTech.home', [])

.controller('HomeCtrl', ['$scope', '$document', function($scope,$document){
  console.log('HomeCtrl Loaded');

  var top = 0;
  var duration = 500;
  var offset = 50;

  $scope.scrollEvent = function(id){
    var whatWeDoElement = angular.element(document.getElementById(id));
    $document.scrollToElement(whatWeDoElement, offset, duration)
  }

}]);
