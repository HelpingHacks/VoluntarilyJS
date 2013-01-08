'use strict';

voluntarilyApp.directive('utilitiesPanel', function() {
  return {
    templateUrl: 'scripts/directives/templates/utilities-panel.html',
    restrict: 'E',
    scope: {
      utilities: '='
    },

    link: function postLink(scope, element, attrs) {
    }
  };
});
