'use strict';

voluntarilyApp.controller('HouseholdsCtrl', function($scope) {

  $scope.households = [
    {id: 1, apt: '1A', address: "123 Green Street", contactName: 'Theodore Geisel'},
    {id: 2, apt: '1B', address: "123 Green Street", contactName: 'Theodore Geisel'}
  ]
});
