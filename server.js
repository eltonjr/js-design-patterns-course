var express = require('express');
var app = express();

var PORT = 9646;

app.use(express.static('.'));

var server = app.listen(PORT, function () {
  console.log('There\'s a monkey on port %s', PORT);
});
