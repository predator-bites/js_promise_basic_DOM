'use strict';

const element = document.querySelector('.logo');
const body = document.querySelector('body');
const promise1 = new Promise((resolve) => {
  resolve('Promise was resolved!');
});

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
  promise1.then((value) => addSuccessElement(value));
  promise1.catch((error) => addErrorElement(error.message));
});

document.addEventListener('DOMContentLoaded', () => {
  const promise2 = new Promise((resolve, reject) => {
    return setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  promise2.then((success) => addSuccessElement(success));
  promise2.catch((error) => addErrorElement(error.message));
});
