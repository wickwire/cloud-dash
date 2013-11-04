'use strict';

angular.module('cloudDashApp')
  .factory('vmFactory', function ($http) {

  var vmFactory = {
    async: function() {

      delete $http.defaults.headers.common['X-Requested-With'];
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.jsonp('http://cloud-api-c9-wickwire.c9.io/getallvmnamesstates').then(function (response) {
        // The then function here is an opportunity to modify the response
        console.log("vmFactory: " + JSON.stringify(response.data.posts));
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller
      console.log("vmFactory: " + JSON.stringify(promise));
      return promise;
    }
  };
  return vmFactory;

  });
