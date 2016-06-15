var Backbone = require('backbone');
var ListModel = require('../models/ListModel');
var ListView = require('./ListView');

var HomeView = Backbone.View.extend({
  el: '<div> <div id="lists"></div> </div>',

  initialize: function() {
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function() {
    this.renderLists();
    return this;
  },

  renderLists: function() {
    var lists = this.$('#lists');
    lists.html('');

    this.collection.each(function(list) {
      var listView = new ListView({model: list});
      lists.append(listView.render().el);
    });
  }
});

module.exports = HomeView;
