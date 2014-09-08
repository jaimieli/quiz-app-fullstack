angular.module('quizApp2App')
  .provider('scoreKeeper', function() {
    var score;
    return {
      setValue: function(val) {
        score = val;
      },
      $get: function () {
        return  {
          addScore: function() {
            score++;
          },
          getScore: function($scope) {
            return score;
          }
        };
      }
    };
  })
  .config(function(scoreKeeperProvider) {
    scoreKeeperProvider.setValue(0);
  });