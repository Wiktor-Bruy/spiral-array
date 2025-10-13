'use strict';

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
//------------------------------------------------------------------------------------

// Логіка сайту-----------------------------------------------------------------------

//-------------------------------------------------------Обробка-кліку-стартової-кнопки
const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', startOptions);
//-------------------------------------------------------------------------------------
