// DEPENDENCIES
let express = require('express');
let router = express.Router();

// Models go here
let Products = require('../models/products');
let Users = require('../models/users');

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
