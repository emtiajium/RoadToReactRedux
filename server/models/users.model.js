/**
 * Created by emtiaj on 10/18/17.
 */

var UserSchema = require('../schemas/users.schema').User;

var saveUser = function (userData) {
  var newUser = new UserSchema(userData);

  return new Promise(function (fulfill, reject) {
    newUser.save()
      .then(function (user) {
        fulfill({data: user, message: 'Saved user info'});
      })
      .catch(function (err) {
        reject({statusCode: 500, message: 'Error saving user info'});
      });
  })
};

var getUser = function () {
  /**
   * query with lean()
   * return plain js object
   */
  return new Promise(function (fulfill, reject) {
    UserSchema.find()
      .lean()
      .then(function (users) {
        fulfill({data: users[users.length - 1]});
      })
      .catch(function (err) {
        reject({statusCode: 500, message: 'Error getting user info'});
      });
  })
};

module.exports.saveUser = saveUser;
module.exports.getUser = getUser;