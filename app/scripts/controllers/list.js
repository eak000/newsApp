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
    $scope.myList = [
      {
       item: 'item 1',
       description: 'It\'s a thing',
      },
      {
       item: 'item 2',
       description: 'It\'s a thing',
      },
      {
       item: 'item 3',
       description: 'It\'s a thing',
      },
    ];
  });