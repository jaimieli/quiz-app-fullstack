angular.module('quizApp2App')
  .factory('scoreKeeperFactory', function(scoreKeeper) {
    var score = 0;

    return {
      addScore: function() {
        return scoreKeeper.score++;
      },
      getScore: function() {
        return scoreKeeper.score;
      }
    };
  });