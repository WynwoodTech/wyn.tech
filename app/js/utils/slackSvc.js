'use strict';

angular.module("WynTech")

.service('slackSvc', ['$http', function slackSvc($http){
  this.getSlackMembers = function(){
    return $http({
      method: 'GET',
      url: 'http://127.0.0.1:3002/members'
    })
  }
}]);
