/**
 * Created by emtiaj on 10/18/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var SchemaOptions = {
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
};

var UserSchema = new Schema({
  firstName: {
    type: String
  },
  email: {
    type: String
  }
});

var User = mongoose.model('user', UserSchema);

module.exports.User = User;