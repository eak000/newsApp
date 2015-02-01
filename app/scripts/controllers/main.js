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
          image: '../../images/design.jpg' ,
          },
          {
          name: 'gaming',
          image: '../../images/mario.jpg' ,
          },
          {
          name: 'cars',
          image: '../../images/cars.jpg',
          },
          {
          name: 'finance',
          image: '../../images/finance.jpg',
          },
          {
          name: 'sports',
          image: '../../images/reign.jpg',
          },
          {
          name: 'travel',
          image: '../../images/beach.jpg',
          },
          {
          name: 'science',
          image: '../../images/dinosci.jpg',
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
          image: '../../images/business.jpg',
          },
          ];

  });
