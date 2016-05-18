Meteor.methods({
	addJob: function() {
		check(job, Schemas.job);

		Jobs.insert(job);
	}
});