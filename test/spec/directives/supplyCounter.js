'use strict';

describe('Directive: supplyCounter', function() {
  beforeEach(module('VoluntarilyJSApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<supply-counter></supply-counter>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the supplyCounter directive');
  }));
});
