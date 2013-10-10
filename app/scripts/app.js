'use strict';

angular.module('sessionsList', [])
  .config(function ($routeProvider) {
    $routeProvider
     /** .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })**/
      .when('/', {
        templateUrl: 'views/sessions.html',
        controller: 'SessionsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
