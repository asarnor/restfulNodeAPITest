// Boilerplate for restful model https://github.com/baugarten/node-restful
// DEPENDENCIES
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
  name:String,
  id:String
});

// EXPORTS
module.exports = restful.model('Users', userSchema);
