var voluntarilyApp = angular.module('voluntarilyApp', ['ngResource'])
    .config(function($routeProvider){
        $routeProvider.when('/', {
            controller: 'mainController',
            templateUrl: 'views/main.html'
        })
    })

    .controller('mainController', function($scope){
        // bootstrapped!
    });