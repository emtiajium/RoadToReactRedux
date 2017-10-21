/**
 * Created by emtiaj on 10/18/17.
 */

var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var DatabaseConnection = require('./databaseConnection');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), function (err) {
  if(err) {
    return console.log('Error while starting server');
  }
  console.log('Server started at http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

DatabaseConnection.mongooseConnection();

var rootDirectory =   path.normalize(__dirname + '/../');
app.set('appPath', rootDirectory + '/client/public');

// app.use(express.static(path.join(rootDirectory, '/client/public')));
//
// app.get('/', function (req, res) {
//   res.sendFile(app.get('appPath') + '/index.html');
// });

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

module.exports = app;

// load the routes

require('./routes/index')(app);
