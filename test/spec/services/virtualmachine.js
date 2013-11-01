'use strict';

describe('Service: Virtualmachine', function () {

  // load the service's module
  beforeEach(module('ClouddashApp'));

  // instantiate service
  var Virtualmachine;
  beforeEach(inject(function (_Virtualmachine_) {
    Virtualmachine = _Virtualmachine_;
  }));

  it('should do something', function () {
    expect(!!Virtualmachine).toBe(true);
  });

});
