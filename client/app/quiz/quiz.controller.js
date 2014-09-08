'use strict';

angular.module('quizApp2App')
  .controller('QuizController', function($scope, $timeout, $interval, quizService, scoreKeeper) {
    $scope.timeLeft = 30;

    var intervalId;
    $scope.isRunning = false;

    $scope.startTimer = function() {
      $scope.isRunning = true;
      intervalId = $interval(function() {
        $scope.timeLeft--;
      }, 1000);
    };

    $scope.pauseTimer = function() {
      $scope.isRunning = false;
      $interval.cancel(intervalId);
    };

    $scope.restartTimer = function() {
      $scope.timeLeft = 30;
    };
    $scope.quiz = [];
    // $scope.quiz = quizService.getQuestions();
    // $scope.quiz = [{
    //   "q": "Who is the best ping pong player at FSA?",
    //   'options': [{
    //     'value': "Mike"
    //   }, {
    //     'value': "Eddie"
    //   }, {
    //     'value': "Nimit"
    //   }, {
    //     'value': "Patrick"
    //   }],
    //   'answer': "Nimit",
    //   'difficulty': 3
    // }, {
    //   "q": "Which robot name was chanted during Lego Mindstorms?",
    //   'options': [{
    //     'value': 'infiniteLoop'
    //   }, {
    //     'value': 'noHope.js'
    //   }, {
    //     'value': 'johnny5'
    //   }, {
    //     'value': 'none of the above'
    //   }],
    //   'answer': 'noHope.js',
    //   'difficulty': 1
    // }, {
    //   'q': "Out of the following frontend frameworks, which framework is most rails-like?",
    //   'options': [{
    //     'value': 'Ember.js'
    //   }, {
    //     'value': 'Angular.js'
    //   }, {
    //     'value': 'Backbone.js'
    //   }, {
    //     'value': 'Meteor.js'
    //   }],
    //   'answer': 'Ember.js',
    //   'difficulty': 2
    // }, {
    //   'q': "Which project used a local data store?",
    //   'options': [{
    //     'value': 'TripPlanner'
    //   }, {
    //     'value': 'Twitter.js'
    //   }, {
    //     'value': 'WikiWalker'
    //   }, {
    //     'value': 'WikiStack'
    //   }],
    //   'answer': 'Twitter.js',
    //   'difficulty': 3
    // }];

    $scope.check = function(opt, quest) {
      console.log('clicked!');
      if (!quest.answered && opt === quest.answer) {
        console.log("OK!");
        scoreKeeper.addScore();
        $scope.score.value = scoreKeeper.getScore();
      }
      quest.answered = true;
    };
  })
  .directive('quiz', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/quiz/quiz.html',
      controller:"QuizController"
    }
  });