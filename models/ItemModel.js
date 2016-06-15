var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var itemSchema = new Schema({	'text' : String});

module.exports = mongoose.model('Item', itemSchema);
