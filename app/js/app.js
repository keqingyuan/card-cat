'use strict';

/* App Module */

var cardcatApp = angular.module('cardcatApp', [
  'ngRoute',
  'cardcatAnimations',

  'cardcatControllers',
  'cardcatFilters',
  'cardcatServices'
]);

cardcatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cards', {
        templateUrl: 'partials/card-list.html',
        controller: 'CardListCtrl'
      }).
      when('/cards/:cardId', {
        templateUrl: 'partials/card-detail.html',
        controller: 'CardDetailCtrl'
      }).
      otherwise({
        redirectTo: '/cards'
      });
  }]);
