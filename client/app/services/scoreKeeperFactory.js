angular.module('quizApp2App')
  .factory('scoreKeeperFactory', function() {
    var score = 0;
    return {
      addScore: function() {
        score++;
      },
      getScore: function($scope) {
        return score;
      }
    };
  });