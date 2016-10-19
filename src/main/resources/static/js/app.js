var carModule = angular.module('carApp', ['ngAnimate']);

carModule.controller('carController', function ($scope,$http) {
	var urlBase="";
	$scope.toggle=true;
	$scope.selection = [];
	//$scope.statuses=['ACTIVE','COMPLETED'];
	//$scope.priorities=['HIGH','LOW','MEDIUM'];
	$http.defaults.headers.post["Content-Type"] = "application/json";
	
	function findAllTasks() {
        //get all tasks and display initially
        $http.get(urlBase + '/car/search/findByColor?color=white').
            success(function (data) {
                if (data._embedded != undefined) {
                    $scope.tasks = data._embedded.tasks;
                } else {
                    $scope.tasks = [];
                }
            });
    }

    findAllTasks();
});