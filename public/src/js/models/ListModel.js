var Backbone = require('backbone');
var ItemsCollection = require('../collections/ItemsCollection');

var ListModel = Backbone.Model.extend({
  urlRoot: '/lists',
  idAttribute: '_id',

  defaults: {
    name: '',
    items: []
  },


  parse: function(model) {
    var items = model.items || [];
    model.items = new Backbone.Collection(items);
    return model;
  }

});


module.exports = ListModel;
