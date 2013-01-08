'use strict';

voluntarilyApp.directive('urgencyPanel', function() {
  return {
    templateUrl: 'scripts/directives/templates/urgency-panel.html',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
//      element.text('this is the UrgencyPanel directive');
    }
  };
});
