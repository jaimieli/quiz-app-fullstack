'use strict';

// you can inject any of these dependencies into the controller
angular.module('quizApp2App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'angularLocalStorage'
])
  .config(function ($routeProvider, $locationProvider, $) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true).hashPrefix("#!");
    $scoreKeeperProvider
  });