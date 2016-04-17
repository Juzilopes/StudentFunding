var express = require('express'),
	app = express();
app.use(express.static(__dirname + ''));
app.listen(8081);
console.log("Listening on port:8081");