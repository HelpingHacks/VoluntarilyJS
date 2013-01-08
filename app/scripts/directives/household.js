'use strict';

voluntarilyApp.directive('household', function() {
  return {
//    template: '<div>{{contactName}} {{apt}} {{address}}</div>',
    templateUrl: '/scripts/directives/templates/household.html',
    scope: {
      contactName: '=',
      address: '=',
      apt: '='
    },
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      scope.changeView = function(view) {
        angular.$location.path(view);
      };
    }
  };
});
