const mongoose = require('mongoose');
const Schema = mogoose.Schema;


// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    defaul: Date.now
  },

});

module.exports = User = mogoose.model('users', UserSchema);


