/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Question = require('../api/question/question.model');


Question.find({}).remove(function() {
  Question.create({
      "q": "Who is the best ping pong player at FSA?",
      'choices': [{
        'value': "Mike"
      }, {
        'value': "Eddie"
      }, {
        'value': "Nimit"
      }, {
        'value': "Patrick"
      }],
      'answer': "Nimit",
      'difficulty': 3
    }, {
      "q": "Which robot name was chanted during Lego Mindstorms?",
      'choices': [{
        'value': 'infiniteLoop'
      }, {
        'value': 'noHope.js'
      }, {
        'value': 'johnny5'
      }, {
        'value': 'none of the above'
      }],
      'answer': 'noHope.js',
      'difficulty': 1
    }, {
      'q': "Out of the following frontend frameworks, which framework is most rails-like?",
      'choices': [{
        'value': 'Ember.js'
      }, {
        'value': 'Angular.js'
      }, {
        'value': 'Backbone.js'
      }, {
        'value': 'Meteor.js'
      }],
      'answer': 'Ember.js',
      'difficulty': 2
    }, {
      'q': "Which project used a local data store?",
      'choices': [{
        'value': 'TripPlanner'
      }, {
        'value': 'Twitter.js'
      }, {
        'value': 'WikiWalker'
      }, {
        'value': 'WikiStack'
      }],
      'answer': 'Twitter.js',
      'difficulty': 3
    });
});