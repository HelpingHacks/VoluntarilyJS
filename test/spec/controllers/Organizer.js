'use strict';

describe('Controller: OrganizerCtrl', function() {

  // load the controller's module
  beforeEach(module('voluntarilyApp'));

  var OrganizerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    OrganizerCtrl = $controller('OrganizerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
