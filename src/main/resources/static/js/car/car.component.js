angular.module('carApp').factory('Car', function($resource) {
	return $resource('http://localhost:8080/cars/:id', {id: '@id'});
});


angular.module('carApp').controller('carController', ['Car', function(Car) {
	var vm = this;
	vm.cars = [];
	
//	this.addCar = function() {
//		//var car_temp = new car({})
//		var k = 0;
//	};
	
	this.getAllCars = function(){
		vm.cars = Car.query();
	};
	
}]);