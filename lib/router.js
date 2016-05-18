Router.route('/', {
	name: 'main',
	onBeforeAction: function() {
		if(!GoogleMaps.loaded()) {
			GoogleMaps.load({
				key: 'AIzaSyBIxFdNNVfwUPvRh2eCEvCwpKCn2U5Y-aE',
				libraries: 'geometry,places'
			});
		}
		this.next();
	},
	action: function() {
		this.render('main');
	}
});