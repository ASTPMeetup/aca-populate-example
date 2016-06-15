var ItemModel = require('../models/ItemModel.js');

/**
* ItemController.js
*
* @description :: Server-side logic for managing items.
*/
module.exports = {

  /**
  * ItemController.list()
  */
  list: function (req, res) {
    ItemModel.find(function (err, items) {
      if (err) {
        return res.json(500, {
          message: 'Error getting item.'
        });
      }
      return res.json(items);
    });
  },

  /**
  * ItemController.show()
  */
  show: function (req, res) {
    var id = req.params.id;
    ItemModel.findOne({_id: id}, function (err, item) {
      if (err) {
        return res.json(500, {
          message: 'Error getting item.'
        });
      }
      if (!item) {
        return res.json(404, {
          message: 'No such item'
        });
      }
      return res.json(item);
    });
  },

  /**
  * ItemController.create()
  */
  create: function (req, res) {
    var item = new ItemModel({			text : req.body.text
    });

    console.log('create - item');

    item.save(function (err, item) {
      if (err) {
        return res.json(500, {
          message: 'Error saving item',
          error: err
        });
      }
      res.json(item);
    });
  },

  /**
  * ItemController.update()
  */
  update: function (req, res) {
    var id = req.params.id;
    ItemModel.findOne({_id: id}, function (err, item) {
      if (err) {
        return res.json(500, {
          message: 'Error saving item',
          error: err
        });
      }
      if (!item) {
        return res.json(404, {
          message: 'No such item'
        });
      }

      item.text = req.body.text ? req.body.text : item.text;
      item.save(function (err, item) {
        if (err) {
          return res.json(500, {
            message: 'Error getting item.'
          });
        }
        if (!item) {
          return res.json(404, {
            message: 'No such item'
          });
        }
        return res.json(item);
      });
    });
  },

  /**
  * ItemController.remove()
  */
  remove: function (req, res) {
    var id = req.params.id;
    ItemModel.findByIdAndRemove(id, function (err, item) {
      if (err) {
        return res.json(500, {
          message: 'Error getting item.'
        });
      }
      return res.json(item);
    });
  }
};
