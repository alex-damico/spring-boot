'use strict';

var serviceModule = angular.module('serviceModule', ['ngResource']);

serviceModule.factory('carService', ['$resource', function($resource) {
	return $resource('http://localhost:8080/cars/:id', {}, {
        query: { 
        	method: 'GET', 
        	isArray: false,
        	transformResponse: function (data) {
        		return angular.fromJson(data)._embedded;
            }
        }
	});
}]);