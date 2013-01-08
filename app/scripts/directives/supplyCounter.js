'use strict';

voluntarilyApp.directive('supplyCounter', function() {
  return {
    templateUrl: 'scripts/directives/templates/supplies-counter.html',
    restrict: 'E',

    scope: {
      name: '=',
      imageUrl: '=',
      count: '=',
      color: '='
    },

    link: function postLink(scope, element, attrs) {
      scope.increment = function() {
        scope.count += 1;
      };

      scope.decrement = function() {
        if (!scope.countFloor()) {
          scope.count -= 1;
        }
      };

      scope.countFloor = function() {
        return scope.count == 0;
      }
    }
  };
});
