'use strict';

var confirmQuiz = confirm('Hello, would you like to play a game?');

if(confirmQuiz){
  console.log('Awesome! Lets do this!');
} else {
  console.log('To bad sucka.');
}

var quizResponse1 = prompt('Please answer Y or N. Is Scott a ginger?');
var done1 = false;

while (!done1) {
  if(quizResponse1.toUpperCase() === 'Y'){
    console.log('Yup! Lucky guy.');
    done1 = true;
  } else if (quizResponse1.toUpperCase() === 'N') {
    console.log('No, he is. If you are color blind I won\'t count this point.');
    done1 = true;
  } else {
    alert('Y or N means Y or N!');
    quizResponse1 = prompt('Please answer Y or N. Is Scott a ginger?');
  }
}
