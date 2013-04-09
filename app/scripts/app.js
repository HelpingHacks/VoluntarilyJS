'use strict';

var voluntarilyApp = angular.module('voluntarilyApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl'
      })

      .when('/households', {
        templateUrl: 'views/households.html',
        controller: 'HouseholdsCtrl'
      })
      .when('/surveys/:id', {
        templateUrl: 'views/surveys.html',
        controller: 'SurveysCtrl'
      })
      .when('/organizer', {
        templateUrl: 'views/organizer.html',
        controller: 'OrganizerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
