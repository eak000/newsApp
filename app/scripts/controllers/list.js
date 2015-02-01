'use strict';

/**
 * @ngdoc function
 * @name newsAppApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the newsAppApp
 */
angular.module('newsAppApp')
  .controller('ListCtrl', function ($scope) {
    $scope.list = [
      {
       item: 'item 1',
       description: 'It\' a thing',
      },
      {
       item: 'item 2',
       description: 'It\' a thing',
      },
      {
       item: 'item 3',
       description: 'It\' a thing',
      },
    ];
  });