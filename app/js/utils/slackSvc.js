'use strict';

angular.module("WynTech")

.service('slackSvc', ['$http', function slackSvc($http){
  this.getSlackMembers = function(){
    return $http({
      method: 'GET',
      url: 'https://wyn.tech:3002/members'
    })
  }
}]);
