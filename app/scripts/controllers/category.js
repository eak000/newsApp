'use strict';

/**
 * @ngdoc function
 * @name newsAppApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the newsAppApp
 */

angular.module('newsAppApp')
  .controller('CategoryCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams){
       var categoryName = $routeParams.categoryName;
}]);