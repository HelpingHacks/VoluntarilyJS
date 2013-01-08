'use strict';

voluntarilyApp.directive('urgencyPanel', function() {
  return {
    templateUrl: 'scripts/directives/templates/urgency-panel.html',
    restrict: 'E',
    scope: {
      urgency: '='
    },
    link: function postLink(scope, element, attrs) {

    }
  };
});
