/**
 * Created by emtiaj on 10/18/17.
 */

var UserController = require('../controllers/users.controller');

module.exports = function (app) {
  app.post('/save_user', UserController.saveUser);
  app.get('/get_user', UserController.getUser);
};