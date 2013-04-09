'use strict';

voluntarilyApp.directive('household', function($location) {
  return {
//    template: '<div>{{contactName}} {{apt}} {{address}}</div>',
    templateUrl: '/scripts/directives/templates/household.html',
    scope: {
      contactName: '=',
      address: '=',
      apt: '=',
      id: '='
    },
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      scope.changeView = function(view) {
        $location.path(view);
      };

      scope.goToSurvey = function(id) {
        scope.changeView('/surveys/' + id)
      }
    }
  };
});
