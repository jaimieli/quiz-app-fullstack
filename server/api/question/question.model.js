'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var questionSchema = new Schema({
  q: String,
  choices: [],
  answer: String,
  difficulty: Number
});

module.exports = mongoose.model('Question', questionSchema);