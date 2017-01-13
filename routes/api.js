// DEPENDENCIES
var express = require('express');
var router = express.Router();

// Models go here
var Products = require('../models/products');
var Users = require('../models/users');

// Apply methods and register models
Products.methods(['put', 'post', 'get', 'delete'])
  .register(router, '/products');

Users.methods(['put', 'post', 'get', 'delete'])
  .register(router, '/users');

/*
// test route
router.get('/products', function(req, res) {
  res.send('is working')
});
*/

module.exports = router;
