'use strict';

describe('Service: Azureservice', function () {

  // load the service's module
  beforeEach(module('ClouddashApp'));

  // instantiate service
  var Azureservice;
  beforeEach(inject(function (_Azureservice_) {
    Azureservice = _Azureservice_;
  }));

  it('should do something', function () {
    expect(!!Azureservice).toBe(true);
  });

});
