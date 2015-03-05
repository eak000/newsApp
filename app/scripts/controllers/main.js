'use strict';

/**
 * @ngdoc function
 * @name newsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newsAppApp
 */
angular.module('newsAppApp')
  .controller('MainCtrl', function ($scope) {

    /** NEWS CATEGORIES **/

    $scope.categories = [
          {
          name: 'design',
          image: '../../images/origami.jpg' ,
          },
          {
          name: 'gaming',
          image: '../../images/gaming.jpg' ,
          },
          {
          name: 'science',
          image: '../../images/science.jpg',
          },
          {
          name: 'sports',
          image: '../../images/reign.jpg',
          },
          {
          name: 'travel',
          image: '../../images/traveling.jpg',
          },
          {
          name: 'finance',
          image: '../../images/finance.jpg',
          },
          {
          name: 'cinema',
          image: '../../images/cinema3.jpg',
          },
          {
          name: 'tech',
          image: '../../images/circuit3.jpg',
          },
          {
          name: 'business',
          image: '../../images/meeting.jpg',
          },
          ];

  });
