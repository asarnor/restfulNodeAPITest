// Boilerplate for restful model https://github.com/baugarten/node-restful
// DEPENDENCIES
const restful = require('node-restful');
const mongoose = restful.mongoose;

// Schema
let productSchema = new mongoose.Schema({
  name:String,
  sku:String,
  price:Number
});

// EXPORTS
module.exports = restful.model('Products', productSchema);
