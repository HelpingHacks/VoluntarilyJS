'use strict';

voluntarilyApp.controller('HouseholdsCtrl', ['$rootScope', function($scope, $rootScope) {
  //retrieve god object from $rootScope and provide it to the local $scope
  $scope.god = $rootScope.god;
  //do ng-repeat for the household in $scope.god.households and loop...
  //household looks like: {id: 1, name: "Mrs Lois", apartment: "5E", address: "15 Mill Rd. Brooklyn, NY 11216", visited: false },
}]);
