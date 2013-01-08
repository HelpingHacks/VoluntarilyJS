'use strict';

voluntarilyApp.directive('addressPanel', function() {
  return {
    template: '<div class="header-information"><input value="{{contactName}}"><h1><textarea>{{address}}</textarea></h1></div>',
    restrict: 'E',

    scope: {
      contactName: '=',
      address: '='
    },

    link: function postLink(scope, element, attrs) {

    }
  };
});
