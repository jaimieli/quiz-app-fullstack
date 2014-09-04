'use strict';

angular.module('quizApp2App')
  .controller('QuestionController', function ($scope, quizService) {
    this.newQuestion = {options:[]};
    this.options=[];
    this.count = 0;
    this.addOption = function() {
      this.newQuestion.options.push({value:''});
      this.count++;
    };
    this.submit = function() {
      if(this.count < 2) {
        return alert('You need at least 2 options.');
      }
      else {
        this.newQuestion.difficulty = +this.newQuestion.difficulty;
        $scope.quiz.push(this.newQuestion);
        quizService.addQuestion(this.newQuestion);
        this.newQuestion = {options:[]};
        this.count = 0;
      }
    };
    this.deleteOption = function(index) {
      this.newQuestion.options.splice(index, 1);
    }
  })
  .directive('newQuestion', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/newQuestion/newQuestion.html',
      controller: 'QuestionController',
      controllerAs: 'quest'
    }
  });
