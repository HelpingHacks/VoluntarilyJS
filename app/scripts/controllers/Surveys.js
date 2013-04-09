'use strict';

voluntarilyApp.controller('SurveysCtrl', function($scope, $routeParams, $http, householdsService) {
  console.log($routeParams.id);
  $scope.household = householdsService.getHousehold($routeParams.id);
  console.log($scope.household);

  $scope.postToBackend = function() {
    $http.post('http://localhost:3000/surveys',{
      survey: {
//        power: true,
//        heat: true,
//        water: true,
//        gas: false,
        power: !$scope.utilities[0].broken,
        heat: !$scope.utilities[1].broken,
        gas: !$scope.utilities[2].broken,
        water: !$scope.utilities[3].broken,
//        medical: false,
//        medical: $scope.supplies[0].count,
//        clothing: 6,
//        flashlights: 3,
//        misc: 'this has been a test',
        misc: $scope.notes,
//        address: '123 test street',
        address: $scope.address,
        food: $scope.supplies[1].count,
        flashlights: $scope.supplies[2].count,
        clothing: $scope.supplies[3].count
      }


    })
  };

//  $scope.contactName = 'John';
  $scope.contactName = $scope.household.contactName;
//  $scope.address = "123 Green Street Apt: 1B";
  $scope.address = $scope.household.address;
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
