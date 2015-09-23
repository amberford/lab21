var app = angular.module('vacationApp', []);

app.controller('pictureCtrl', function($scope){
	$scope.pictures = [
	{image: "images/losangeles.jpeg", caption: "Los Angeles"},
	{image: "images/miami.jpeg", caption: "Miami"},
	{image: "images/newtork.jpeg", caption: "New York"},
	{image: "images/shanghai.jpeg", caption: "Shanghai"},
	{image: "images/tokyo.jpeg", caption: "Tokyo"},
	
	];

});	

app.directive('pictureBox', function(){
  
  return{
    restrict: "E",
    template: '<div class="col-xs-3"><img class="img" src="{{contents.image}}"><p class="text"> {{contents.caption}} </p></div>',
    replace: false
  };


});
