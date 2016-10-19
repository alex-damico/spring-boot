'use strict';

var myApp = angular.module('carApp', ['ngResource']);

myApp.factory('carService', ['$resource', function($resource) {
	return $resource('http://localhost:8080/cars/:id', {}, {
        query: { method: 'GET', isArray: false }
	});
}]);

myApp.controller('carCtrl', ['carService', '$scope', function(carService, $scope) {	
	$scope.cars = [];
	$scope.selectedCar = null;
	
	// Get a single car
    $scope.getCar = function() {
    	console.log("getCar");
    	
    	carService.get({id: 1}, function(data) {
    		console.log(data);
    		$scope.selectedCar = {brand: data.brand, color: data.color, sign: data.sign};
        });
    };
    
    // Get a single car
    $scope.getAllCars = function() {
    	console.log("getAllCars");
    	
    	carService.query(function(data) {
    	    // success handler
    		console.log(data);
    		$scope.cars = data._embedded.cars;
    		
    	}, function(error) {
    	    // error handler
    		console.log(error);
    		$scope.cars = null;
    	});
    };
	
    
    
}]);