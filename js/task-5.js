/* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться строка 'незнакомец'.*/

const imputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

imputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value !== '') {
    nameEl.textContent = event.currentTarget.value;
  } else {
    nameEl.textContent = 'незнакомец';
  }
}
