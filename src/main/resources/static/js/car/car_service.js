'use strict';

var serviceModule = angular.module('serviceModule', ['ngResource']);

serviceModule.factory('carService', ['$resource', function($resource) {
	return {
		createModel: function(){
			return {
				id: null,
				brand: "", 
				color: "", 
				sign: ""
			}
		},
		crud: function() {
			return $resource('http://localhost:8080/cars/:id', {}, {
		        query: { 
		        	method: 'GET', 
		        	isArray: false,
		        	transformResponse: function (data) {
		        		var retJson = angular.fromJson(data)._embedded;
		        		for(var index=0; index<retJson.cars.length; index++){
		        			retJson.cars[index].id = retJson.cars[index]._links.self.href.split("/").slice(-1)[0];
		        		}
		        		return retJson;
		            }
		        },
		        get: {
		        	transformResponse: function (data) {
		        		var retJson = angular.fromJson(data);
		        		retJson.id = retJson._links.self.href.split("/").slice(-1)[0];
		        		return retJson;
		            }
		        },
		        update: { 
		        	method: 'PUT',
		        	transformResponse: function (data) {
		        		var retJson = angular.fromJson(data);
		        		retJson.id = retJson._links.self.href.split("/").slice(-1)[0];
		        		return retJson;
		            }
		        },
		        save: { 
		        	method: 'POST',
		        	transformResponse: function (data) {
		        		var retJson = angular.fromJson(data);
		        		retJson.id = retJson._links.self.href.split("/").slice(-1)[0];
		        		return retJson;
		            }
		        }
			});
		}
	}
}]);