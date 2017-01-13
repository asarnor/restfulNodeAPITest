// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// mongodb connection setup
mongoose.connect('mongodb://localhost/rest_test');

// express setup
let app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// connect routes
app.use('/api', require('./routes/api'));

// make sure its working
app.get('/', (req, res) => {
  res.send('please use api/products or api/users');
});

app.listen(3000);

console.log('running on port 3000');
