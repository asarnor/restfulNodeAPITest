// DEPENDENCIES
const express = require('express');
const router = express.Router();

// Models go here
const Products = require('../models/products');
const Users = require('../models/users');

// Apply methods and register models
Products.methods(['put', 'post', 'get', 'delete'])
  .register(router, '/products');

Users.methods(['put', 'post', 'get', 'delete'])
  .register(router, '/users');

/*
// test route
router.get('/products', (req, res) => {
  res.send('is working')
});
*/

module.exports = router;
