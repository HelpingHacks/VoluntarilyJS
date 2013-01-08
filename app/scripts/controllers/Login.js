'use strict';

voluntarilyApp.controller('LoginCtrl', function($scope, $location) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];
  $scope.showOrganizerForm = false;

  $scope.changeView = function(view) {
    $location.path(view);
  };

  $scope.logIn = function(){
    if ($scope.username == 'volunteer') {
      // render volunteer page
      $scope.showOrganizerForm = true;
      console.log('welcome volunteer')
    } else if ( $scope.username == 'organizer') {
      // render organizer page
      $scope.changeView('organizer');
      console.log('welcome organizer')
    } else {
      // highlight things in red and say login failed
      console.log('you are not welcome')
    }
  }
});
