// Boilerplate for restful model https://github.com/baugarten/node-restful
// DEPENDENCIES
let restful = require('node-restful');
let mongoose = restful.mongoose;

// Schema
let productSchema = new mongoose.Schema({
  name:String,
  sku:String,
  price:Number
});

// EXPORTS
module.exports = restful.model('Products', productSchema);
