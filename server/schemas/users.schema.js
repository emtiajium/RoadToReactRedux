/**
 * Created by emtiaj on 10/18/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var schemaOptions = {
  timestamps: true // mongoose assigns createdAt, updatedAt fields
};

var UserSchema = new Schema({
  firstName: {
    type: String
  },
  email: {
    type: String
  }
}, schemaOptions);

var User = mongoose.model('user', UserSchema);

module.exports.User = User;