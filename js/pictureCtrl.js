app.controller('pictureCtrl', function($scope){
	$scope.pictures = [
	{image: "images/losangeles.jpg", caption: "Los Angeles"},
	{image: "images/miami.jpg", caption: "Miami"},
	{image: "images/newyork.jpg", caption: "New York"},
	{image: "images/chicago.jpg", caption: "Chicago"},
	{image: "images/lasvegas.jpg", caption: "Las Vegas"}

	];

});	

app.directive('pictureBox', function(){
  
  return{
    restrict: "E",
    template: '<div class="col-xs-3"><img class="img" ng-src={{contents.image}}><p class="text"> {{contents.caption}}</p></div>',
    replace: false
  };

});
