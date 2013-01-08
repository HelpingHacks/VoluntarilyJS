'use strict';

describe('Directive: UtilityButton', function() {
  beforeEach(module('voluntarilyApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<-utility-button></-utility-button>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the UtilityButton directive');
  }));
});
