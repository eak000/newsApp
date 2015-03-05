'use strict';

/**
 * @ngdoc overview
 * @name newsAppApp
 * @description
 * # newsAppApp
 *
 * Main module of the application.
 */
angular
  .module('newsAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'wu.masonry'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/categories/:categoryName', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
