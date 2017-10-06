'use strict'

// Can't tell if writing recursive functions using promises is good practice or spaghetti code
function getCorrectAnswer(target){
  return new Promise(function (fulfill, reject){
    let answer = chalk.entrybox();
    answer.then(function(value) {
      if(value == target){
        fulfill(value);
      }
      else{
        chalk.println('Wrong!  Try again:');
        getCorrectAnswer(target).then(function(value){
          fulfill(value);
        });
      }
    });
  });
}

function quizUser(){
  let num1 = Math.ceil(Math.random() * 10);
  let num2 = Math.ceil(Math.random() * 10);
  chalk.println('What is ' + num1 + ' + ' + num2 + '?');
  let correctVal = getCorrectAnswer(num1 + num2);
  correctVal.then(function(value){
    chalk.println('Correct.  You win a cookie!  And another go...');
    quizUser();
  })
}

quizUser();
