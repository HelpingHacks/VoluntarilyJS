'use strict';

describe('Controller: SurveysCtrl', function() {

  // load the controller's module
  beforeEach(module('voluntarilyApp'));

  var SurveysCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    SurveysCtrl = $controller('SurveysCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {

  });
});
