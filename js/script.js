'use strict';
// Змінні---------------------------------------------------------------------------
let size;
let direct;

// Функції--------------------------------------------------------------------------

//----------------------------------------------------Відкриття-сторінки-вводу-даних
function startOptions() {
  const startWWind = document.querySelector('.start');
  if (!startWWind.classList.contains('invis')) {
    startWWind.classList.add('invis');
  }
  const optionsWind = document.querySelector('.options');
  if (!optionsWind.classList.contains('vis')) {
    optionsWind.classList.add('vis');
  }
}

//---------------------------------------Відкриття-та-закриття-вікна-помилкового-вводу
function visErrorMes() {
  const block = document.querySelector('.error-enter');
  block.classList.toggle('is-open');
}

//---------------------------------------------Відкриття-та-закриття-діалогового-вікна
function dialogWimdow() {
  const block = document.querySelector('.try-again');
  block.classList.toggle('is-open');
}

//-----------------------------------------------------------------------Обробка-форми
function formSubmit(event) {
  event.preventDefault();
  const preSize = event.target.elements.size.value;
  if (preSize <= 0 || preSize > 20) {
    visErrorMes();
  } else {
    size = preSize;
    direct = event.target.elements.direct.value;
    form.reset();
    const optionsWind = document.querySelector('.options');
    optionsWind.classList.remove('vis');
    const arrayPage = document.querySelector('.array-page');
    if (!arrayPage.classList.contains('vis')) {
      arrayPage.classList.add('vis');
    }
    addArray();
  }
}

//-----------------------------------------------------------------------Спробувати-ще
function tryYes() {
  dialogWimdow();
  const arrayPage = document.querySelector('.array-page');
  arrayPage.classList.remove('vis');
  const optionsWind = document.querySelector('.options');
  if (!optionsWind.classList.contains('vis')) {
    optionsWind.classList.add('vis');
  }
}

//--------------------------------------------------------------------------На-головну
function tryNo() {
  dialogWimdow();
  const arrayPage = document.querySelector('.array-page');
  arrayPage.classList.remove('vis');
  const startWWind = document.querySelector('.start');
  startWWind.classList.remove('invis');
}

//------------------------------------------------------------Функція-створення-масиву
function createArray() {}

//------------------------------------------------------------Функція-додавання-масиву
function addArray() {
  if (size === 1) {
    const item = document.createElement('li');
    item.classList.add('.array-item');
    const text = document.createElement('span');
    text.textContent = 1;
    item.append(text);
    const array = document.querySelector('.array');
    array.append(item);
  }
}

//------------------------------------------------------------------------------------

// Логіка сайту-----------------------------------------------------------------------

//-------------------------------------------------------Обробка-кліку-стартової-кнопки
const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', startOptions);

//-------------------------------------------------------------------------Сабміт-форми
const form = document.querySelector('.inp-form');
form.addEventListener('submit', formSubmit);

//--------------------------------------------------------Кнопка-закриття-вікна-помилки
const errorBtn = document.querySelector('.error-btn');
errorBtn.addEventListener('click', visErrorMes);

//-------------------------------------------------------------------------Кнопка-фініш
const finishBtn = document.querySelector('.finish-btn');
finishBtn.addEventListener('click', dialogWimdow);

//-----------------------------------------------------------Кнопки-у-діалоговому-вікні
const yesBtn = document.querySelector('.try-yes');
yesBtn.addEventListener('click', tryYes);
const noBtn = document.querySelector('.try-no');
noBtn.addEventListener('click', tryNo);

//-------------------------------------------------------------------------------------
