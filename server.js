// DEPENDENCIES
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// mongodb connection setup
mongoose.connect('mongodb://localhost/rest_test');

// express setup
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// connect routes
app.use('/api', require('./routes/api'));

// make sure its working
app.get('/', function(req, res) {
  res.send('please use api/products or api/users');
});

app.listen(3000);

console.log('running on port 3000');
