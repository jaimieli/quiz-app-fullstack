'use strict';

angular.module('quizApp2App')
  .controller('MainCtrl', function($scope, scoreKeeper) {
    // $scope.$watch.score;
    $scope.score = {value:0}
    // $scope.$on('increase_score', function() {
    //   $scope.score.value++;
    // })
  });
  // .controller('MainCtrl', function ($scope, $http) {
  //   $scope.awesomeThings = [];

  //   $http.get('/api/things').success(function(awesomeThings) {
  //     $scope.awesomeThings = awesomeThings;
  //   });

  //   $scope.addThing = function() {
  //     if($scope.newThing === '') {
  //       return;
  //     }
  //     $http.post('/api/things', { name: $scope.newThing });
  //     $scope.newThing = '';
  //   };

  //   $scope.deleteThing = function(thing) {
  //     $http.delete('/api/things/' + thing._id);
  //   };
  // });
