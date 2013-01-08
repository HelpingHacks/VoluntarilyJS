'use strict';

voluntarilyApp.controller('SurveysCtrl', function($scope) {
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
    {name: "First Aid", color: "#BE1622", count: 0, imageUrl: '/images/firstaid.png'},
    {name: "Food", color: "#E94E1B", count: 0, imageUrl: '/images/forkknife.png'},
    {name: "Flashlight", color: "#1D71B8", count: 0, imageUrl: '/images/flashlight.png'},
    {name: "Clothing", color: "#1BA75E", count: 0, imageUrl: '/images/shirts_dark.png'},
    {name: "Water", color: "#07AFB9", count: 0, imageUrl: '/images/water_bottles.png'}
  ];

  $scope.notes = ""
});
