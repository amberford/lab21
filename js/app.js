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