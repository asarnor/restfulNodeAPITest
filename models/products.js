// Boilerplate for restful model https://github.com/baugarten/node-restful
// DEPENDENCIES
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({
  name:String,
  sku:String,
  price:Number
});

// EXPORTS
module.exports = restful.model('Products', productSchema);
