'use strict';

angular.module('quizApp2App')
  .controller('QuizController', function($scope, $timeout, $interval, scoreKeeper) {
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

    $scope.check = function(opt, quest) {
      if (!quest.answered && opt === quest.answer) {
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