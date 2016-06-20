var _ = require('underscore');
var Backbone = require('backbone');
var itemModel = require('../models/ItemModel');
var ItemView = require('./ItemView');

var ListView = Backbone.View.extend({
  el: '<div></div>',

  template: _.template([
    '<h3><%= name %></h3>',
    '<ul class="tasks"></ul>'
  ].join('')),

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'destroy', this.render);
  },

  render: function() {
    this.$el.html(this.template({name: this.model.get('name')}));
    this.renderItemViews();

    return this;
  },

  renderItemViews: function() {
    var ul = this.$('.tasks');
    ul.html('');
    this.model.get('items').each(function(item) {
      var view = new ItemView({model: item});
      ul.append(view.render().el);
    });
  }
});

module.exports = ListView;
