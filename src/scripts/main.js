'use strict';

const element = document.querySelector('.logo');
const body = document.querySelector('body');

function addErrorElement(error) {
  const newElem = document.createElement('div');

  newElem.setAttribute('class', 'message');
  newElem.classList.add('error-message');
  newElem.textContent = error;

  body.appendChild(newElem);
}

function addSuccessElement(value) {
  const newElem = document.createElement('div');

  newElem.setAttribute('class', 'message');
  newElem.textContent = value;

  body.appendChild(newElem);
}

element.addEventListener('click', (e) => {
  const promise1 = new Promise((resolve) => {
    resolve('Promise was resolved!');
  });

  promise1.then(
    (value) => addSuccessElement(value),
    (error) => addErrorElement(error.message),
  );
});

document.addEventListener('DOMContentLoaded', () => {
  const promise2 = new Promise((resolve, reject) => {
    return setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  promise2.then(
    (success) => addSuccessElement(success),
    (error) => addErrorElement(error.message),
  );
});
