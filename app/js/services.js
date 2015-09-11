'use strict';

/* Services */

var cardcatServices = angular.module('cardcatServices', ['ngResource']);

cardcatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('cards/:cardId.json', {}, {
      query: {method:'GET', params:{cardId:'cards'}, isArray:true}
    });
  }]);
