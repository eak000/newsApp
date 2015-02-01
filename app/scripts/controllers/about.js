'use strict';

/**
 * @ngdoc function
 * @name newsAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newsAppApp
 */
angular.module('newsAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      {
       name: 'kittens!',
       url: 'https://www.youtube.com/watch?v=i_mKY2CQ9Kk'
      },
      {
        name: 'Corgis!',
        url: 'https://www.youtube.com/watch?v=to0JYZJxXOc'
      },
      {
      name: 'rainbows!',
      url: 'http://www.physicsclassroom.com/class/refrn/Lesson-4/Rainbow-Formation'
      },
       {
      name: 'ponies!',
      url: 'https://www.youtube.com/watch?v=aYk1DgaeZC8'
      }
    ];
  });
