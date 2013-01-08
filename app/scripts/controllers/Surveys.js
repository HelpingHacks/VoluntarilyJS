'use strict';

voluntarilyApp.controller('SurveysCtrl', function($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];

  $scope.contactName = 'John';
  $scope.address = "123 Green Street, etc.";
  $scope.urgency = 1;
  $scope.utilities = [
    {labelText: "Power", broken: false, imageUrl: "/images/power_on.png"},
    {labelText: "Heat", broken: false, imageUrl: "/images/heat_on.png"},
    {labelText: "Gas", broken: false, imageUrl: "/images/gas_on.png"},
    {labelText: "Water", broken: false, imageUrl: "/images/water_on.png"}
  ];

  $scope.supplies = [
    {name: "First Aid", count: 0, imageUrl: '/images/firstaid.png'},
    {name: "Food", count: 0, imageUrl: '/images/forkknife.png'},
    {name: "Flashlight", count: 0, imageUrl: '/images/flashlight.png'},
    {name: "Clothing", count: 0, imageUrl: '/images/shirts_dark.png'},
    {name: "Water", count: 0, imageUrl: '/images/water_bottles.png'}
  ];

  $scope.notes = ""
});
