var express = require('express');
var app = express();
var path = require('path');
var routes = require('./routes');
var bodyParser = require('body-parser');

global.appRoot = path.resolve(__dirname);

// Serve static files from template
app.use(express.static(__dirname + '/src'));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// Use routes
app.use(routes);

// Listen on port 3000
app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});