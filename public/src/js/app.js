window.$ = window.jQuery = require('jquery');
var _ = require('underscore');
var ItemModel = require('./models/ItemModel');
var ListModel = require('./models/ListModel');
var ListCollection = require('./collections/ListCollection');
var ItemsCollection = require('./collections/ItemsCollection');
var HomeView = require('./views/HomeView');

$(document).ready(function(){


  var resetCollection = new ItemsCollection();
  resetCollection.fetch({
    success: function(){
        _.invoke(resetCollection.toArray(), 'destroy');

      var food1 = new ItemModel({text: "pizza"});
      food1.save();
      var food2 = new ItemModel({text: "breadsticks"});
      food2.save();

      var food3 = new ItemModel({text: "burrito"});
      food3.save();
      var food4 = new ItemModel({text: "tacos"});
      food4.save();

      var food5 = new ItemModel({text: "whataburger jr."});
      food5.save();
      var food6 = new ItemModel({text: "french fries"});
      food6.save();

      var restaurantCollection = new ItemsCollection();
      restaurantCollection.fetch({
        success: function() {

          var restartList = new ListCollection();
          restartList.fetch({
            success: function(){
              _.invoke(restartList.toArray(), 'destroy');

              var food1ID = food1.get('_id');
              var food2ID = food2.get('_id');

              var PJ_food_list = new ListModel({items: [food1ID, food2ID] , name: "Papa  John's"});
              PJ_food_list.save();

              var food3ID = food3.get('_id');
              var food4ID = food4.get('_id');

              var Chipotle_food_list = new ListModel({items: [food3ID, food4ID] , name: 'Chipotle'});
              Chipotle_food_list.save();

              var food5ID = food5.get('_id');
              var food6ID = food6.get('_id');

              var Whataburger_food_list = new ListModel({items: [food5ID, food6ID] , name: 'Whataburger'});
              Whataburger_food_list.save();

              var restaurantList = new ListCollection();
              restaurantList.fetch({
                success: function(){
                  var homeView = new HomeView({collection: restaurantList});
                  $('#app').html(homeView.render().el);
                }
              });
            }
          });
        }
      });
    }
  });
});
