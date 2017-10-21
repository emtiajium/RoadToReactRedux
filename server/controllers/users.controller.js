/**
 * Created by emtiaj on 10/18/17.
 */

var UserModel = require('../models/users.model');

var saveUser = function (req, res) {
  var data = req.body;

  UserModel.saveUser(data)
    .then(function (user) {
      res.send(user);
    })
    .catch(function (err) {
      res.status(err.statusCode).send(err);
    });
};

var getUser = function (req, res) {
  UserModel.getUser()
    .then(function (user) {
      res.send(user);
    })
    .catch(function (err) {
      res.status(err.statusCode).send(err);
    });
};

module.exports.saveUser = saveUser;
module.exports.getUser = getUser;