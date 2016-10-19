//'use strict';
//
//angular.module('MyService').factory('Car', function($resource) {
//	return $resource('http://localhost:8080/cars/:id');
//});
//
//
//angular.module('carApp', [])
//.controller('MyController', ['MyService',  function(MyService) {	
//	$scope.cars = [];
//	$scope.selectedcar = null;
//	
//	$scope.getCar = function(){
//		var selectedcar = MyService.get({ id: 1 }, function() {
//		    console.log(selectedcar);
//		    $scope.selectedcar = selectedcar;
//		    
//		}); // get() returns a single entry
//	};
//	
//}]);


