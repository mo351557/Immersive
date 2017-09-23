var mongoose = require('mongoose');
var schema = mongoose.Schema;
var mob = new schema({
  name : String,
  modelId : Number
});

module.exports = mongoose.model('mobileList',mob); //mobileList - collection name
