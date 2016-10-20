myApp.factory('carService', ['$resource', function($resource) {
	return $resource('http://localhost:8080/cars/:id', {}, {
        query: { method: 'GET', isArray: false }
	});
}]);