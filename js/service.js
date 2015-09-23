app.factory('travelService', [function() {
	var travelers = [
		{ name: 'Kevin', destination: 'New York', phone: "555-555-1234"},
		{ name: 'Amber', destination: 'Los Angeles', phone: "555-123-4567"}
	];
	
	return {
		list: function() {
			return travelers;
		},

		add: function(traveler) {
			travelers.push(traveler);
		}
	};

}]);


