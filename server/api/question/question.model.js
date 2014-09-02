'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var questionSchema = new Schema({
  question: String,
  choices: [{value: String}],
  answer: String,
  difficulty: Number
});

module.exports = mongoose.model('Question', questionSchema);