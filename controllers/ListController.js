var ListModel = require('../models/ListModel.js');

/**
* ListController.js
*
* @description :: Server-side logic for managing lists.
*/
module.exports = {

  /**
  * ListController.list()
  */
  list: function (req, res) {
    ListModel.find({}).populate('items').exec(function (err, lists) {
      if (err) {
        return res.json(500, {
          message: 'Error getting list.'
        });
      }
      return res.json(lists);
    });
  },

  /**
  * ListController.show()
  */
  show: function (req, res) {
    var id = req.params.id;
    ListModel.findOne({_id: id}).populate('items').exec(function (err, list) {
      if (err) {
        return res.json(500, {
          message: 'Error getting list.'
        });
      }
      if (!list) {
        return res.json(404, {
          message: 'No such list'
        });
      }
      return res.json(list);
    });
  },

  /**
  * ListController.create()
  */
  create: function (req, res) {
    var list = new ListModel({			name : req.body.name,			items : req.body.items
    });

    list.save(function (err, list) {
      if (err) {
        return res.json(500, {
          message: 'Error saving list',
          error: err
        });
      }
      return res.json(list);
    });
  },

  /**
  * ListController.update()
  */
  update: function (req, res) {
    var id = req.params.id;
    ListModel.findOne({_id: id}, function (err, list) {
      if (err) {
        return res.json(500, {
          message: 'Error saving list',
          error: err
        });
      }
      if (!list) {
        return res.json(404, {
          message: 'No such list'
        });
      }

      list.name = req.body.name ? req.body.name : list.name;			list.items = req.body.items ? req.body.items : list.items;
      list.save(function (err, list) {
        if (err) {
          return res.json(500, {
            message: 'Error getting list.'
          });
        }
        if (!list) {
          return res.json(404, {
            message: 'No such list'
          });
        }
        return res.json(list);
      });
    });
  },

  /**
  * ListController.remove()
  */
  remove: function (req, res) {
    var id = req.params.id;
    ListModel.findByIdAndRemove(id, function (err, list) {
      if (err) {
        return res.json(500, {
          message: 'Error getting list.'
        });
      }
      return res.json(list);
    });
  }
};
