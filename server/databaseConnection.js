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

  var connection =  mongoose.connection.openUri('mongodb://localhost/react_app_test_db');

  var database = mongoose.connection; // database will have the opened connection

  database.on('error', console.error);
  database.once('open', function () {
    console.log('Connected to react_app_test_db');
  });
};

module.exports.mongooseConnection = mongooseConnection;