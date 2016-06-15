var Backbone = require('backbone');
var ListModel = require('../models/ListModel');

var ListCollection = Backbone.Collection.extend({
  url: '/lists',
  model: ListModel
});

module.exports = ListCollection;
