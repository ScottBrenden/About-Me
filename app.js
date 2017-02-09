'use strict';

var confirmQuiz = confirm('Hello, would you like to play a game?');

if(confirmQuiz){
  console.log('Awesome! Lets do this!');
} else {
  console.log('To bad sucka.');
}

var user = prompt('Now that you agreed to play, what is your name?');
var YorN = alert('Ok, ' + user + ' the following questions are yes/no questions. Please answer each with Y or N. Otherwise you may be subject to ridicule.');

var questions = ['Is Scott a ginger?', 'Has Scott ever lived outside the great state the is Washington?', 'Does Scott ski or snowboard (Y for ski, N for snowboard)? Ok, this is\'t yes/no. My game, my rules. Suck it up ' + user + '.', 'Is Scott a sports fan?', 'Did Scott Graduate from WWU?'];
var Ys = ['Yup! Lucky guy.', 'No, why would he? Washington is clearly the best place to live.', 'Yup! He has even done it professionally .', 'Oh yeah! Probably a bit too much.', 'Yup with a BS! The \'a\' is important there.'];
var Ns = ['No, he is. If you are color blind I won\'t count this point.', 'You are corrcet! Unless you submitted something other than N, in which case you failed and have been launched into the pit of dispair.', 'Ok, it was a trick question he does both.', 'Nope, he is. Well except soccer.', 'No, he did. Go Vikings!'];
var answers = [];

for (var i = 0; i < questions.length; i++) {
  var response = prompt(questions[i]);
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

var guesses = 1;
var correct = false;

while(!correct && guesses < 5){
  var remaining = 5 - guesses;
  var question6 = prompt('Alright, enough yes or no! How many years has scott been skiing for? You have ' + remaining + ' chances... no pressure.');
  if (question6 == 21){
    if (guesses == 1) {
      console.log('First guess! Either you know Scott, or we should hit up Vegas.');
    } else {
      console.log('You got it!');
    }
    correct = true;
  } else if (question6 < 21) {
    if (guesses < 3) {
      console.log('Higher!');
    } else {
      console.log('Higher! Last chance!');
    }
    guesses++;
  } else if (question6 > 21) {
    if (guesses < 3) {
      console.log('Lower.');
    } else {
      console.log('Lower. Last chance!');
    }
    guesses++;
  } else {
    console.log(question6 + ' is not a number...');
    guesses++;
  }
  if (guesses == 5 && !correct){
    console.log('Better luck next time.');
  }
}
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
