'use strict';

var confirmQuiz = confirm('Hello, would you like to play a game?');

if(confirmQuiz){
  console.log('Awesome! Lets do this!');
} else {
  console.log('To bad sucka.');
}

var user = prompt('Now that you agreed to play, what is your name?');
var YorN = alert('Ok, ' + user + ' the following questions are yes/no questions. Please answer each with Y or N. Otherwise you may be subject to ridicule.');

var quizResponse1 = prompt('Is Scott a ginger?');
//var done1 = false;

//while (!done1) {
if(quizResponse1.toUpperCase() === 'Y'){
  alert('Yup! Lucky guy.');
  console.log('Yup! Lucky guy.');
  //done1 = true;
} else if (quizResponse1.toUpperCase() === 'N') {
  alert('No, he is. If you are color blind I won\'t count this point.');
  console.log('No, he is. If you are color blind I won\'t count this point.');
  //done1 = true;
} else {
  alert('Y or N means Y or N ' + user + '! You pleb.');
  console.log('Y or N means Y or N ' + user + '! You pleb.');
  //quizResponse1 = prompt('Please answer Y or N. Is Scott a ginger?');
}
//}

var quizResponse2 = prompt('Has Scott ever lived outside the great state the is Washington?');

if (quizResponse2.toUpperCase() === 'Y') {
  alert('No, why would he? Washington is clearly the best place to live.');
  console.log('No, why would he? Washington is clearly the best place to live.');
} else {
  alert('You are corrcet! Unless you submitted something other than N, in which case you failed and have been launched into the pit of dispair.');
  console.log('You are corrcet! Unless you submitted something other than N, in which case you failed and have been launched into the pit of dispair.');
}

var quizResponse3 = prompt('Does Scott ski or snowboard (Y for ski, N for snowboard)? Ok, this is\'t yes/no. My game, my rules. Suck it up ' + user + '.');

if (quizResponse3.toUpperCase() === 'Y') {
  alert('For 21 years! He even has done it for a job.');
  console.log('For 21 years! He even has done it for a job.');
} else {
  alert('Ok, it was a trick question he does both.');
  console.log('Ok, it was a trick question he does both.');
}

var quizResponse4 = prompt('Is Scott a sports fan?');

if (quizResponse4.toUpperCase() === 'Y') {
  alert('Oh yeah! Probably a bit too much.');
  console.log('Oh yeah! Probably a bit too much.');
} else {
  alert('Nope, he is. Well except soccer.');
  console.log('Nope, he is. Well except soccer.');
}

var quizResponse5 = prompt('Ok, last one. Did Scott Graduate from WWU?');

if (quizResponse5.toUpperCase() === 'Y') {
  alert('Yup with a BS! The \'a\' is important there.');
  console.log('Yup with a BS! The \'a\' is important there.');
} else {
  alert('No, he did. Go Vikings!');
  console.log('No, he did. Go Vikings!');
}
