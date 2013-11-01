'use strict';

describe('Controller: VmlistnamesCtrl', function () {

  // load the controller's module
  beforeEach(module('cloudDashApp'));

  var VmlistnamesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VmlistnamesCtrl = $controller('VmlistnamesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
