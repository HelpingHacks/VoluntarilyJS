'use strict';

describe('Directive: suppliesPanel', function() {
  beforeEach(module('VoluntarilyJSApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<supplies-panel></supplies-panel>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the suppliesPanel directive');
  }));
});
