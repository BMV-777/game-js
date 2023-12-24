'use strict';

const refs = {
  btn1: document.querySelector('.again'),
  btn: document.querySelector('.check'),
  input: document.querySelector('.number-input'),
  message: document.querySelector('.guess-message'),
  question: document.querySelector('.question'),
  score: document.querySelector('.score'),
  highscore: document.querySelector('.highscore'),
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highs = 0;

function displayMessage(message) {
  refs.message.textContent = message;
}

// function displayQuestion(text) {
//   refs.question.textContent = text;
// }

refs.btn1.addEventListener('click', resTart);

function resTart() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  refs.message.textContent = 'Начни угадывать!';
  refs.input.value = '';
  refs.question.textContent = '???';
  refs.question.style.width = '25rem';
  refs.score.textContent = score;
  document.body.style.backgroundColor = 'black';
}

refs.btn.addEventListener('click', addClick);
function addClick() {
  let event = Number(refs.input.value);
  // let messages = refs.message;
  console.log(event, typeof event);

  // messages = 'hello';

  if (!event) {
    // messages.textContent = 'Ведите число!!!';
    displayMessage('Ведите число!!!');
  } else if (event === secretNumber) {
    refs.question.textContent = secretNumber;
    displayMessage('Правильно!');
    // messages.textContent = 'Правильно!';
    document.body.style.backgroundColor = 'rgb(9, 250, 21)';
    refs.question.style.width = '50rem';

    if (score > highs) {
      highs = score;
      refs.highscore.textContent = highs;
    }
  } else if (event !== secretNumber) {
    if (score > 1) {
      displayMessage(
        event > secretNumber ? 'Слишком много!!!' : 'Слишком мало!!!'
      );
      // messages.textContent =
      //   event > secretNumber ? 'Слишком много!!!' : 'Слишком мало!!!';
      score--;
      refs.score.textContent = score;
    } else {
      displayMessage('Game over');
      // messages.textContent = 'Game over';
      refs.score.textContent = 0;
    }
  }

  // else if (event > secretNumber) {
  //   if (score > 1) {
  //     messages.textContent = 'Слишком много!!!';
  //     score--;
  //     refs.score.textContent = score;
  //   } else {
  //     messages.textContent = 'Game over';
  //     refs.score.textContent = 0;
  //   }
  // } else if (event < secretNumber) {
  //   if (score > 1) {
  //     messages.textContent = 'Слишком мало!!!';
  //     score--;
  //     refs.score.textContent = score;
  //   } else {
  //     messages.textContent = 'Game over';
  //     refs.score.textContent = 0;
  //   }
  // }
}
// 77/
