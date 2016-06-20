var _ = require('underscore');
var Backbone = require('backbone');

var ItemView = Backbone.View.extend({
  el: '<li></li>',
  template: _.template('<span><%= text %></span>'),

  initialize: function(){
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.render, this);
  },

  render: function() {
    this.$el.html(this.template({text: this.model.get('text')}));
    return this;
  }
});

module.exports = ItemView;
