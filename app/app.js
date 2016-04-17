

var app = angular.module('studentFundingApp',['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/bursaries',
			{
				controller: 'SimpleController',
				templateUrl:'app/view/home.html'
			})
		.otherwise({ redirectTo: '/bursaries' });
}]);

app.controller('SimpleController', function ($scope){
	$scope.bursaries = [
		  {
		    "companyName":"Friends of Design Bursaries",
		    "field":"Computer Science and IT"
		  },
		  {
		    "companyName":"Shoprite IT Bursary",
		    "field":"Computer Science and IT"
		  },
		  {
		    "companyName":"Trudon Bursary",
		    "field":"Computer Science and IT"
		  },
		  {
		    "companyName":"Vodacom Bursary",
		    "field":"Computer Science and IT"
		  },
		  {
		    "companyName":"Women in IT Bursary",
		    "field":"Computer Science and IT"
		  },
		  {
		    "companyName":"ANGLO AMERICAN HEAD OFFICE Bursary",
		    "field":"Accounting"
		  },
		  {
		    "companyName":"Auditor-General Bursary",
		    "field":"Accounting"
		  },
		  {
		    "companyName":"BDO Spencer Steward Bursary",
		    "field":"Accounting"
		  },
		  {
		    "companyName":"DELOITTE & TOUCHE Bursary",
		    "field":"Accounting"
		  },
		  {
		    "companyName":"ENGEN PETROLEUM LTD Bursary",
		    "field":"Accounting"
		  },
		  {
		    "companyName":"Ernest Oppenheimer Memorial Trust Bursary",
		    "field":"Accounting"
		  },
		  {
		    "companyName":"Ernst & Young Bursary",
		    "field":"Accounting"
		  },
		  {
		    "companyName":"KPMG Bursaries",
		    "field":"Accounting"
		  }

	];

	$scope.addBursary = function () {
		$scope.bursaries.push(
		{
			"companyName":$scope.companyName,
			"field": $scope.field
		});
	};

});