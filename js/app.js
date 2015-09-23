var app = angular.module("vacationChoiceApp", ['ngRoute']);

app.config(function($routeProvider){
 $routeProvider.when('/', {
   templateUrl: 'partials/display-view.html',
   controller: 'pictureCtrl'
 });
 
 $routeProvider.when('/results-view', {
   templateUrl: 'partials/results-view.html',
   controller: 'resultsCtrl'
 });

 $routeProvider.otherwise('/');
});

app.controller('pictureCtrl', function(){
 
});

app.controller('resultsCtrl', function(){


});


app.controller('FormController', ['$location', 'myService', function($location, myService) {
    var self = this;

    self.add = function() {
        myService.add({
            name: this.name, 
            location: this.location
        });
        self.name = '';
        self.location = '';
        $location.path('/results-view');
    };
}]);