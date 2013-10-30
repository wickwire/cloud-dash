'use strict';

angular.module('cloudDashApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/vmlist', {
        templateUrl: 'views/vmlist.html',
        controller: 'VmlistCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
