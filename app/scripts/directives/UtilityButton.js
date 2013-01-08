'use strict';

voluntarilyApp.directive('utilityButton', function() {
  return {
    template: '<img class="utility-image" src="{{imageUrl}}"><label>{{labelText}}:</label><label class="status"></label>',
    scope: {
          labelText: '=',
          imageUrl: '=',
          broken: '='
        },
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
//      element.text('this is the UtilityButton directive');
      //TODO: this is broken and we need to fix it.
      element.find('label.status').text('testing');
//        scope.onOrOff(scope.broken));

      scope.onOrOff = function(broken) {
        return broken ? 'Off' : 'On';
      }

      element.bind('click',function(e){
        console.log(scope.broken);
        scope.broken = !scope.broken;
        console.log(scope.broken);
        var mainElement = angular.element(e.currentTarget);
        mainElement.find('img').toggleClass('opacity-half', scope.broken);
        if (scope.broken === true) {
          mainElement.find('label.status').text('Off')
        } else {
          mainElement.find('label.status').text('On')
        }

      });
    }
  };
});


