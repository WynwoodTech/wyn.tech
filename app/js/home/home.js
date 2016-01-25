'use strict';

angular.module('WynTech.home', [])

.controller('HomeCtrl', ['slackSvc', '$scope', '$document', '$firebaseArray', function(slackSvc, $scope,$document, $firebaseArray){
  console.log('HomeCtrl Loaded');

  var top = 0;
  var duration = 500;
  var offset = 50;

  var messageCounterRef = new Firebase("https://wyntech.firebaseio.com/message-counter");

  var randomMessageRef  = new Firebase("https://wyntech.firebaseio.com/random");
  var generalMessageRef = new Firebase("https://wyntech.firebaseio.com/general");
  var engineeringMessageRef = new Firebase("https://wyntech.firebaseio.com/engineering");

  messageCounterRef.on("value", function(snapshot){
    $scope.messageCounter = snapshot.val();
  }, function (errorObject){
    console.log(errorObject);
  });

  randomMessageRef.on("value", function(snapshot){
    console.log(snapshot.val());
  }, function (errorObject){
    console.log(errorObject);
  });

  generalMessageRef.on("value", function(snapshot){
    console.log(snapshot.val());
  }, function (errorObject){
    console.log(errorObject);
  });

  engineeringMessageRef.on("value", function(snapshot){
    console.log(snapshot.val());
  }, function (errorObject){
    console.log(errorObject);
  });

  $scope.randomMessages = $firebaseArray(randomMessageRef);
  $scope.generalMessages = $firebaseArray(generalMessageRef);
  $scope.engineeringMessages = $firebaseArray(engineeringMessageRef);

  $scope.scrollEvent = function(id){
    var whatWeDoElement = angular.element(document.getElementById(id));
    $document.scrollToElement(whatWeDoElement, offset, duration)
  };

  $scope.master = {};

  $scope.update = function(user) {
    $scope.master = angular.copy(user);
    console.log($scope.master);
  };

  slackSvc.getSlackMembers().success(function(resp){
    $scope.slackMembers = resp;
  });

}]);
