'use strict';

angular.module('WynTech.home', [])

.controller('HomeCtrl', ['$scope', '$document', '$firebaseArray', function($scope,$document, $firebaseArray){
  console.log('HomeCtrl Loaded');

  var top = 0;
  var duration = 500;
  var offset = 50;

  var randomMessageRef = new Firebase("https://wyntech.firebaseio.com/random");
  var generalMessageRef = new Firebase("https://wyntech.firebaseio.com/general");
  var engineeringMessageRef = new Firebase("https://wyntech.firebaseio.com/engineering");

    randomMessageRef.on("value", function(snapshot){
      console.log(snapshot.val());
    }, function (errorObject){
      console.log(erroObject);
    });

    generalMessageRef.on("value", function(snapshot){
      console.log(snapshot.val());
    }, function (errorObject){
      console.log(erroObject);
    });

    engineeeringMessageRef.on("value", function(snapshot){
      console.log(snapshot.val());
    }, function (errorObject){
      console.log(erroObject);
    });

    $scope.randomMessages = $firebaseArray(randomMessageRef);
    $scope.generalMessages = $firebaseArray(generalMessageRef);
    $scope.engineeringMessages = $firebaseArray(engineeringlMessageRef);

    $scope.scrollEvent = function(id){
      var whatWeDoElement = angular.element(document.getElementById(id));
      $document.scrollToElement(whatWeDoElement, offset, duration)
    };

    $scope.master = {};

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
      console.log($scope.master);
    };
}]);
