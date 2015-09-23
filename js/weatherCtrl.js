app.controller('weatherCtrl', ['$scope', 'weatherService', function($scope, weatherService) {
  function fetchWeather(zip) {
    weatherService.getWeather(zip).then(function(data){
      $scope.place = data;
    }); 
  }
  
  fetchWeather('90001');
  
  $scope.findWeather = function(zip) {
    $scope.place = '';
    fetchWeather(zip);
  };

}]);

