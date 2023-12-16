'use strict';

const refs = {
  btn: document.querySelector('.check'),
  input: document.querySelector('.number-input'),
  message: document.querySelector('.guess-message'),
  question: document.querySelector('.question'),
};

refs.btn.addEventListener('click', addClick);
function addClick() {
  let event = Number(refs.input.value);
  let messages = (refs.message.textContent = 'Правильно!');
  let quest = (refs.question.textContent = event);

  console.log(event, typeof event);
  console.log(typeof messages);
  console.log(typeof quest);
  if (!event) {
    refs.message.textContent = 'Ведите число!!!';
  } else {
    messages;
  }
}
77/