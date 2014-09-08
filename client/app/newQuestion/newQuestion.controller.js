'use strict';

angular.module('quizApp2App')
  .controller('QuestionController', function ($scope, quizService, $http) {
    this.newQuestion = {choices:[]};
    this.choices=[];
    this.count = 0;
    $http.get('/api/questions').success(function(data) {
      $scope.quiz = data;
    });
    this.addOption = function() {
      this.newQuestion.choices.push({value:''});
      this.count++;
    };
    this.submit = function() {
      console.log(this.newQuestion);
      if(this.count < 2) {
        return alert('You need at least 2 choices.');
      }
      else {
        this.newQuestion.difficulty = +this.newQuestion.difficulty;
        $scope.quiz.push(this.newQuestion);
        quizService.addQuestion(this.newQuestion);
        this.count = 0;
        if(this.newQuestion === '') {
          return;
        }
        console.log('scope new question: ', this.newQuestion);
        $http.post('/api/questions', this.newQuestion);
        this.newQuestion = {choices:[]};
        this.newQuestion = '';
      }
    };
    this.deleteOption = function(index) {
      this.newQuestion.choices.splice(index, 1);
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

// .controller('MainCtrl', function ($scope, $http) {
//     $scope.awesomeThings = [];



//     $scope.deleteThing = function(thing) {
//       $http.delete('/api/things/' + thing._id);
//     };
//   });
