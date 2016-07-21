// Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// ROUTER points our server to a series of "route" files.
var htmlRoutes = require('./app/routing/html-routes.js');
var apiRoutes = require('./app/routing/api-routes.js');
var friends = require('./app/data/friends.js');

// Set up Express App
var app = express();
app.listen(3030, function(){
	console.log('listening...');
});

// Set up Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var htmlServing = new htmlRoutes();
var api = new ApiRoutes();

htmlServing.default(app, path);
htmlServing.survey(app, path);

api.getApi(app, friends);
api.postAPI(app, friends);
