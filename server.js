// Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Set up Express App
var app = express();
var PORT = 3030;

// Set up Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static('app'));

require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);

app.listen(PORT, function() {
	console.log("server listening on port: " + PORT);
});
