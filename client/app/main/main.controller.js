'use strict';

angular.module('quizApp2App')
  .controller('MainCtrl', function($scope, scoreKeeper) {
    // $scope.$watch.score;
    $scope.score = {value:0}
    // $scope.$on('increase_score', function() {
    //   $scope.score.value++;
    // })
  });
