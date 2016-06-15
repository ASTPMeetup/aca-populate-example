window.$ = window.jQuery = require('jquery');
var HomeView = require('./views/HomeView');
var ListCollection = require('./collections/ListCollection');

var listCollection = new ListCollection();
listCollection.fetch();
var homeView = new HomeView({collection: listCollection});

$('#app').html(homeView.render().el);
