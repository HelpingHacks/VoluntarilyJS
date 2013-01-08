'use strict';

voluntarilyApp.directive('households', function() {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      element.text('this is the households directive');
    }
  };
});
