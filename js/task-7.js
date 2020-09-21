/* Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться размер текста. */

const inputRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

/* console.dir(textEl); */

inputRangeEl.addEventListener('input', onInputFontSize);

function onInputFontSize(event) {
  textEl.style.fontSize = event.currentTarget.value + 'px';
}
