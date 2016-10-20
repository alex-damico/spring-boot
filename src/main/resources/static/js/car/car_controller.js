'use strict';

myApp.controller('carCtrl', ['$scope', 'carService', function($scope, carService) {	
	$scope.garage =  {
		cars: [],
		selectedCar: null
	}
	
	// Get a single car
    $scope.getCar = function() {
    	console.log("getCar");
    	
    	carService.get({id: 1}, function(data) {
    		console.log(data);
    		$scope.garage.selectedCar = {brand: data.brand, color: data.color, sign: data.sign};
        });
    };
    
    // Get a single car
    $scope.getAllCars = function() {
    	console.log("getAllCars");
    	
    	carService.query(function(data) {
    	    // success handler
    		console.log(data);
    		$scope.garage.cars = data.cars;
    		
    	}, function(error) {
    	    // error handler
    		console.log(error);
    		$scope.garage.cars = null;
    	});
    };
    
}]);