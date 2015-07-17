'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  name: String,
  info: String,
  owner: {type: Schema.Types.ObjectId, ref: 'User'},
  isbn: String,
  image: String,
  active: Boolean
});

module.exports = mongoose.model('Book', BookSchema);
