'use strict';

var confirmQuiz = confirm('Hello, would you like to play a game?');

if(confirmQuiz){
  console.log('Awesome! Lets do this!');
} else {
  console.log('To bad sucka.');
}
var numCorrect = 0;
//-----------------------Questions 1-5: Y/N GAME-------------------V
var user = prompt('Now that you agreed to play, what is your name?');
var correctAns = ['Y', 'N', 'Y', 'Y', 'Y'];
function questionsOneToFive(){
  var YorN = alert('Ok, ' + user + ' the following questions are yes/no questions. Please answer each with Y or N. Otherwise you may be subject to ridicule.');

  var questions = ['Is Scott a ginger?', 'Has Scott ever lived outside the great state the is Washington?', 'Does Scott ski or snowboard more (Y for ski, N for snowboard)? Ok, this is\'t yes/no. My game, my rules. Suck it up ' + user + '.', 'Is Scott a sports fan?', 'Did Scott Graduate from WWU?'];
  var Ys = ['Yup! Lucky guy.', 'No, why would he? Washington is clearly the best place to live.', 'Yup! He has even done it professionally .', 'Oh yeah! Probably a bit too much.', 'Yup with a BS! The \'a\' is important there.'];
  var Ns = ['No, he is. If you are color blind I won\'t count this point.', 'You are corrcet! Washington is the best.', 'No, learned to snowboard years after skiing.', 'Nope, he is. Well except soccer.', 'No, he did. Go Vikings!'];
  var answers = [];

  for (var i = 0; i < questions.length; i++) {
    var response = prompt(questions[i]);
    if(response.toUpperCase() === correctAns[i]) {
      numCorrect++;
    }
    var done = false;
    while (!done) {
      if(response.toUpperCase() === 'Y'){
        alert(Ys[i]);
        console.log(Ys[i]);
        answers += [Ys[i]];
        done = true;
      } else if (response.toUpperCase() === 'N') {
        alert(Ns[i]);
        console.log(Ns[i]);
        answers += [Ns[i]];
        done = true;
      } else {
        alert('Y or N means Y or N ' + user + '! You pleb.');
        console.log('Y or N means Y or N ' + user + '! You pleb.');
        response = prompt('Please answer Y or N. ' + questions[i]);
      }
    }
  }
}
questionsOneToFive();
//----------------Question 6: NUMBER GAME!----------------------V
function numGame(){
  var guesses = 1;
  var correct = false;

  while(!correct && guesses < 5){
    var remaining = 5 - guesses;
    var question6 = prompt('Alright, enough yes or no! How many years has scott been skiing for? You have ' + remaining + ' chances... no pressure.');
    if (question6 == 21){
      if (guesses == 1) {
        console.log('First guess! Either you know Scott, or we should hit up Vegas.');
        alert('First guess! Either you know Scott, or we should hit up Vegas.');
      } else {
        console.log('You got it!');
        alert('You got it!');
      }
      numCorrect++;
      correct = true;
    } else if (question6 < 21) {
      if (guesses == 3) {
        console.log('Guess higher! Last chance!');
        alert('Guess higher! Last chance!');
      } else {
        console.log('Guess higher!');
        alert('Guess higher!');
      }
      guesses++;
    } else if (question6 > 21) {
      if (guesses == 3) {
        console.log('Guess lower. Last chance!');
        alert('Guess lower. Last chance!');
      } else {
        console.log('Guess lower.');
        alert('Guess lower.');
      }
      guesses++;
    } else {
      console.log(question6 + ' is not a number...');
      alert(question6 + ' is not a number...');
      guesses++;
    }
    if (guesses == 5 && !correct){
      console.log('Better luck next time.');
      alert('Better luck next time.');
    }
  }
}
numGame();
//--------------------Question 7: MULTI ANSWER GAME-------------------V
function multiGame(){
  var countries = ['NORWAY', 'CHILE', 'UK', 'GREAT BRITAIN'];
  var correct = false;
  for (var i = 0; i < 6; i++){
    var question7 = prompt('What is one country, outside North America, that Scott has been to?');
    for (var j = 0; j < countries.length; j++){
      if(question7.toUpperCase() === countries[j]){
        correct = true;
        break;
      }
    }
    if(correct){
      if(i == 0){
        console.log('First guess! Nice! He has been to Norway, Chile and the UK');
        alert('First guess! Nice! He has been to Norway, Chile and the UK');
      } else {
        console.log('Correct! He has been to Norway, Chile and the UK');
        alert('Correct! He has been to Norway, Chile and the UK');
      }

      numCorrect++;
      break;
    } else {
      if (i == 5) {
        console.log('Nope. Better luck next time.');
        alert('Nope. Better luck next time.');
      } else if (i == 4) {
        console.log('Nope. One more try.');
        alert('Nope. One more try.');
      } else {
        console.log('Incorrect.');
        alert('Incorrect.');
      }
    }
  }
}
multiGame();
console.log(user + ', you got ' + numCorrect + '/7 correct.');
alert(user + ', you got ' + numCorrect + '/7 correct.');

// var quizResponse2 = prompt('Has Scott ever lived outside the great state the is Washington?');

// if (quizResponse2.toUpperCase() === 'Y') {
//   alert('No, why would he? Washington is clearly the best place to live.');
//   console.log('No, why would he? Washington is clearly the best place to live.');
// } else {
//   alert('You are corrcet! Unless you submitted something other than N, in which case you failed and have been launched into the pit of dispair.');
//   console.log('You are corrcet! Unless you submitted something other than N, in which case you failed and have been launched into the pit of dispair.');
// }

// var quizResponse3 = prompt();

// if (quizResponse3.toUpperCase() === 'Y') {
//   alert('For 21 years! He even has done it for a job.');
//   console.log('For 21 years! He even has done it for a job.');
// } else {
//   alert('Ok, it was a trick question he does both.');
//   console.log('Ok, it was a trick question he does both.');
// }

// var quizResponse4 = prompt();

// if (quizResponse4.toUpperCase() === 'Y') {
//   alert('Oh yeah! Probably a bit too much.');
//   console.log('Oh yeah! Probably a bit too much.');
// } else {
//   alert('Nope, he is. Well except soccer.');
//   console.log('Nope, he is. Well except soccer.');
// }

// var quizResponse5 = prompt('Ok, last one. Did Scott Graduate from WWU?');

// if (quizResponse5.toUpperCase() === 'Y') {
//   alert('Yup with a BS! The \'a\' is important there.');
//   console.log('Yup with a BS! The \'a\' is important there.');
// } else {
//   alert('No, he did. Go Vikings!');
//   console.log('No, he did. Go Vikings!');
// }
