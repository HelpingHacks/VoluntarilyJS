'use strict';

voluntarilyApp.controller('SurveysCtrl', function($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];

  $scope.contactName = 'John';
  $scope.address = "123 Green Street, etc.";
  $scope.utilities = [
    {labelText: "Power", broken: false, imageUrl: "/images/power_on.png"},
    {labelText: "Heat", broken: false, imageUrl: "/images/heat_on.png"},
    {labelText: "Gas", broken: false, imageUrl: "/images/gas_on.png"},
    {labelText: "Water", broken: false, imageUrl: "/images/water_on.png"}
  ];
});
