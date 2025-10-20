'use strict';
// Змінні---------------------------------------------------------------------------
let size;
let direct;

// Функції--------------------------------------------------------------------------

//--------------------------------------------------------Функція-рандомного-кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

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
    const finishBtn = document.querySelector('.finish-btn');
    finishBtn.setAttribute('disabled', '');
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

//-------------------------------------------------------Функція-затримки-відображення
function delay(item, count) {
  setTimeout(() => {
    item.style.visibility = 'visible';
  }, count);
}

//------------------------------------------------------------Функція-створення-масиву
function createArray() {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push([]);
  }

  if (direct === 'right') {
    let countSizeX = size - 1;
    let countSizeY = size - 1;
    let countX = 0;
    let countY = 0;
    let countN = 1;
    while (countN <= size * size) {
      for (let i = countX; i <= countSizeX; i++) {
        array[countY][i] = countN;
        countN++;
      }
      countY++;
      for (let i = countY; i <= countSizeY; i++) {
        array[i][countSizeX] = countN;
        countN++;
      }
      countSizeX--;
      for (let i = countSizeX; i >= countX; i--) {
        array[countSizeY][i] = countN;
        countN++;
      }
      countSizeY--;
      for (let i = countSizeY; i >= countY; i--) {
        array[i][countX] = countN;
        countN++;
      }
      countX++;
    }
  } else if (direct === 'left') {
    let countSizeX = size - 1;
    let countSizeY = size - 1;
    let countX = 0;
    let countY = 0;
    let countN = 1;
    while (countN <= size * size) {
      for (let i = countSizeX; i >= countX; i--) {
        array[countY][i] = countN;
        countN++;
      }
      countY++;
      for (let i = countY; i <= countSizeY; i++) {
        array[i][countX] = countN;
        countN++;
      }
      countX++;
      for (let i = countX; i <= countSizeX; i++) {
        array[countSizeY][i] = countN;
        countN++;
      }
      countSizeY--;
      for (let i = countSizeY; i >= countY; i--) {
        array[i][countSizeX] = countN;
        countN++;
      }
      countSizeX--;
    }
  }
  return array;
}

//------------------------------------------------------------Функція-додавання-масиву
function addArray() {
  const array = document.querySelector('.array');
  array.innerHTML = '';
  if (size == 1) {
    const item = document.createElement('li');
    item.classList.add('array-item');
    item.textContent = '1';
    item.style.width = '50px';
    item.style.height = '50px';
    item.style.fontSize = '24px';
    item.style.backgroundColor = getRandomHexColor();
    item.style.visibility = 'hidden';
    array.append(item);
    delay(item, 350);
    setTimeout(() => {
      const finishBtn = document.querySelector('.finish-btn');
      finishBtn.removeAttribute('disabled');
    }, 350);
  } else {
    const arr = createArray();
    let myArr = [];
    const sizeItem = (990 - 5 * (size - 1)) / size;
    const fontSize = sizeItem * 0.4;
    for (let subArr of arr) {
      for (let i of subArr) {
        const item = document.createElement('li');
        item.classList.add('array-item');
        item.textContent = i;
        item.style.backgroundColor = getRandomHexColor();
        item.style.width = `${sizeItem}px`;
        item.style.height = `${sizeItem}px`;
        item.style.fontSize = `${fontSize}px`;
        item.style.visibility = 'hidden';
        myArr.push(item);
      }
    }
    array.append(...myArr);
    for (let elem of myArr) {
      const time = Number(elem.textContent) * 250;
      delay(elem, time);
    }
    const delayBtn = size * size * 250;
    setTimeout(() => {
      const finishBtn = document.querySelector('.finish-btn');
      finishBtn.removeAttribute('disabled');
    }, delayBtn);
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
