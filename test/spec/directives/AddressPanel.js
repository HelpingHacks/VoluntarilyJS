'use strict';

describe('Directive: AddressPanel', function() {
  beforeEach(module('voluntarilyApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<-address-panel></-address-panel>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the AddressPanel directive');
  }));
});
