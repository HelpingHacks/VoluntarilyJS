'use strict';

describe('Directive: UtilitiesPanel', function() {
  beforeEach(module('voluntarilyApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<-utilities-panel></-utilities-panel>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the UtilitiesPanel directive');
  }));
});
