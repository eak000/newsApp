'use strict';

/**
 * @ngdoc function
 * @name newApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the newApp
 */

angular.module('newApp')
  .controller('CategoryCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams){
       var categoryName = $routeParams.categoryName;
}]);