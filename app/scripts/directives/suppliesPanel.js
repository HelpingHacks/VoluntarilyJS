'use strict';

voluntarilyApp.directive('suppliesPanel', function() {
  return {
    template: '<div class="supplies-list"><ul><li ng-repeat="supply in supplies"><supply-counter name="supply.name" count="supply.count" image-url="supply.imageUrl"></supply-counter></li></ul></div>',
    restrict: 'E',
    scope: {
      supplies: '='
    },
    link: function postLink(scope, element, attrs) {

    }
  };
});
