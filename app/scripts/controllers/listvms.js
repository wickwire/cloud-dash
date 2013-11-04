'use strict';


console.log("listvms.js - esta aqui!");

angular.module('cloudDashApp')
  .controller('ListvmsCtrl', function ($scope,$http,vmFactory) {


    /* working example - REST JSON - the response only arrives after 5~12sec, the page element automatically refreshes */
    
    /*
    var url = "https://cloud-api-c9-wickwire.c9.io/getallvmnamesstates";

    $http.jsonp(url)
    .success(function(data){
        if(data)
      $scope.virtualmachines=data.posts;
    }).
      error(function(data, status, headers, config) {
        console.error('Error fetching feed SERVICE: ' + " status : " + status + " headers : " + headers + " config: " + config );
      })

    console.log("CONTROLLER: " + JSON.stringify($scope.virtualmachines));
    */
    
    /* if using this solution, the service must be empty */
    /* working example - REST JSON - the response only arrives after 5~12sec, the page element automatically refreshes */

      // Call the async method and then do stuff with what is returned inside our own then function
  vmFactory.async().then(function(d) {
    $scope.virtualmachines = d.posts;
  });



});
