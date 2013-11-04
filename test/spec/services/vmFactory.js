'use strict';

describe('Service: Vmfactory', function () {

  // load the service's module
  beforeEach(module('ClouddashApp'));

  // instantiate service
  var Vmfactory;
  beforeEach(inject(function (_Vmfactory_) {
    Vmfactory = _Vmfactory_;
  }));

  it('should do something', function () {
    expect(!!Vmfactory).toBe(true);
  });

});
