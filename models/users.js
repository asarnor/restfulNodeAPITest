// Boilerplate for restful model https://github.com/baugarten/node-restful
// DEPENDENCIES
const restful = require('node-restful');
const mongoose = restful.mongoose;

// Schema
let userSchema = new mongoose.Schema({
  name:String,
  id:String
});

// EXPORTS
module.exports = restful.model('Users', userSchema);
