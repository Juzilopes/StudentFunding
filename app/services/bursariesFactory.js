
app.factory('bursariesFactory', function () {
	var factory = {};

	factory.getBursaries = function () {
		return bursaries;
	};



	return factory;
});