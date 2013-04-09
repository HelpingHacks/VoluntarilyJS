'use strict';

voluntarilyApp.controller('TeamCtrl', function($scope, $location) {
  $scope.changeView = function(view) {
    $location.path(view);
  };

  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];
});
