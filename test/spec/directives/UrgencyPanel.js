'use strict';

describe('Directive: UrgencyPanel', function() {
  beforeEach(module('voluntarilyApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<-urgency-panel></-urgency-panel>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the UrgencyPanel directive');
  }));
});
