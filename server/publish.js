Meteor.publish('jobSearch', function(searchData) {
	if (!searchData) {
		return [];
	};

	var radius = searchData.radius;
	var centerLat = searchData.lat;
	var centerLng = searchData.lng;

	var selector = {
		'location.geometry': {
			$near: {
				$geometry: {
					type: 'Point',
					coordinates: [centerLng, centerLat]
				},
				$maxDistance: radius * 1000,
				$minDistance: 0
			}
		}
	}

	return Job.find(selector);
});