'use strict';

describe('Controller: ListvmsCtrl', function () {

  // load the controller's module
  beforeEach(module('cloudDashApp'));

  var ListvmsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListvmsCtrl = $controller('ListvmsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
