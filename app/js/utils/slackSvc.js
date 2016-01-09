'use strict';

angular.module("WynTech")

.service('slackSvc', ['$http', function slackSvc($http){
  this.getSlackMembers = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:3002/members'
    })
  }
}]);
