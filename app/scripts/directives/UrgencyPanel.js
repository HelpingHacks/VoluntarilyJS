'use strict';

voluntarilyApp.directive('urgencyPanel', function() {
  return {
    templateUrl: 'scripts/directives/templates/urgency-panel.html',
    restrict: 'E',
    scope: {
      urgency: '='
    },
    link: function postLink(scope, element, attrs) {
//      element.bind('change', function(e){
//        if (scope.urgency == 5) {
//          console.log(angular.element(e.currentTarget).find('a')[0]);
//          angular.element(e.currentTarget).find('a')[0].show();
//        }
//      })

    }
  };
});
