var app = angular.module('vacationApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/',
		{
			templateUrl: 'partials/travel-form.html',
			controller: 'FormController', 
			controllerAs: 'vm'
		});
	$routeProvider.when('/result-view',
		{
			templateUrl: 'partials/result-view.html',
			controller: 'ResultController'
		});
	$routeProvider.otherwise({redirectTo: '/',});
});


app.controller('FormController', ['$location', 'travelService', function($location, travelService) {
	var self = this;

	self.add = function() {
		travelService.add({
			name: this.name, 
			destination: this.destination
		});
		self.name = '';
		self.destination = '';
		alert("Thank You! A travel consultant will contact you shortly.");

		$location.path('/result-view');
	};
}]);


