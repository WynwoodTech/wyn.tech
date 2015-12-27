'use strict';

angular.module('WynTech.home', [])

.controller('HomeCtrl', ['$scope', '$document', '$firebaseArray', function($scope,$document, $firebaseArray){
  console.log('HomeCtrl Loaded');

  var top = 0;
  var duration = 500;
  var offset = 50;

  var generalMessageRef = new Firebase("https://wyntech.firebaseio.com/general");

  generalMessageRef.on("value", function(snapshot){
    console.log(snapshot.val());
  }, function (errorObject){
    console.log(erroObject);
  });

  $scope.scrollEvent = function(id){
    var whatWeDoElement = angular.element(document.getElementById(id));
    $document.scrollToElement(whatWeDoElement, offset, duration)
  };

  $scope.generalMessages = $firebaseArray(generalMessageRef);

}]);
