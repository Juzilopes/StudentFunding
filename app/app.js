

var app = angular.module('studentFundingApp',['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: 'SimpleController',
				templateUrl:'app/partials/home.html'
			})
		.otherwise({ redirectTo: '/' });
}]);

app.controller('SimpleController', function ($scope, bursariesFactory){
	$scope.bursaries = [];

	init();

	function init() {
		$scope.bursaries = bursariesFactory.getBursaries();
	}

	$scope.addBursary = function () {
		$scope.bursaries.push(
		{
			"companyName":$scope.companyName,
			"field": $scope.field
		});
	};

});