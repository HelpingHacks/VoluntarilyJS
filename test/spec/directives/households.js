'use strict';

describe('Directive: households', function() {
  beforeEach(module('VoluntarilyJSApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<households></households>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the households directive');
  }));
});
