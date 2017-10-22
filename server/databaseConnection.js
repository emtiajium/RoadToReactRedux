/**
 * Created by emtiaj on 10/18/17.
 */

var mongoose = require('mongoose');

var mongooseConnection = function () {

  mongoose.Promise = global.Promise;

  // block that line, and run the app
  // Hmm are you using promises anywhere?
  // You shouldn't be getting this warning unless you use promises...
  // https://github.com/Automattic/mongoose/issues/4291

  mongoose.connect('mongodb://localhost/react_app_test_db', {
    useMongoClient: true
  })
    .then(function (db) {
      console.log('Connected to react_app_test_db');
    })
    .catch(function (err) {
      console.error(err.message);
    });
};

module.exports.mongooseConnection = mongooseConnection;