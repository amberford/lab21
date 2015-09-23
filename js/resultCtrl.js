app.controller('ResultController', ['travelService', function(travelService) {
	var self = this;

	self.list = function(){
		return travelService.list();
	};
}]);