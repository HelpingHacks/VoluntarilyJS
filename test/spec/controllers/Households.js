'use strict';

describe('Controller: HouseholdsCtrl', function() {

  // load the controller's module
  beforeEach(module('voluntarilyApp'));

  var HouseholdsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    HouseholdsCtrl = $controller('HouseholdsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
