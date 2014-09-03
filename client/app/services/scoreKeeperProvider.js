angular.module('quizApp2App')
  .provider('scoreKeeper', function() {
    var score = 0;
    return {
      // setValue: function(val) {
      //   score = val;
      // },
      $get: function () {
        return  {
          addScore: function() {
            score++;
            console.log(score + " after")
          },
          getScore: function($scope) {
            return score;
          }
        };
      }
    };
  });