'use strict';

console.log("virtualmachine.js - esta aqui!");

angular.module('cloudDashApp')
  .service('Virtualmachine', function Virtualmachine($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    //$scope.virtualmachines="https://cloud-api-c9-wickwire.c9.io/getallvmnamesstates";
    //$scope.virtualmachines="http://localhost:8080/getallvmnamesstates";



/*

    var machines=[
  {
    "name": "zondev02",
    "snippet": "StoppedDeallocated"
  },
  {
    "name": "zon-stm-sdk2",
    "snippet": "StoppedDeallocated"
  }
];

*/


    //$http.defaults.useXDomain = true;
    delete $http.defaults.headers.common['X-Requested-With'];

    var machines;
    var url = "http://cloud-api-c9-wickwire.c9.io/getallvmnamesstates";

    $http.get(url)
    .then(function(data){


      machines=data.posts;
    })


return {
	machines: function(){

		return machines;
	}
}

  });