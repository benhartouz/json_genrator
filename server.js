var express = require('express');
var app = express();
var path = require('path');
global.appRoot = path.resolve(__dirname);
// serve static files from template
app.use(express.static(__dirname + '/src'));
// listen on port 3000
app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});