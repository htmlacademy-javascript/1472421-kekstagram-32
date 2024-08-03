function getRandomInt(min, max) {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

/* Функция генерации случайных уникальных целых
чисел в диапозоне */
function getRandomUnicInt(min, max){
  /* Хранилище уже имеющихся сгенерированных чисел */
  const previousValues = [];
  /* Возврат функции-замыкания, которая вернет уникальное
  значение числа, не входящего в массив previousValues и добавит сгенерированное
  число в массив previousValues */
  return function(){
    let currentInt = getRandomInt(min, max);
    /* Проверка на заполненность хранилища уникальных чисел.
    (количество элементов хранилища не должно превышать
    число max из задонного диапазона ) */
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }

    /* Цикл продолжит работу, пока значение переменной currentInt
    будет равно одному из ранее сгенерированных значений
    в массиве previousValues */
    while(previousValues.includes(currentInt)){
      /* Заново генерирует случайное значение и помещает в переменную currentInt */
      currentInt = getRandomInt(min, max);
    }
    /* Добавляет сгенерированное значение в хранилище previousValues */
    previousValues.push(currentInt);
    /* Вернет уникальное случайное значение */
    return currentInt;
  };
}

/* Функция поиска объекта по id в массиве объектов */
function findById(arr, id) {
  return arr.find((element) => element.id === id);
}

function closePopup(element, closeClickHandler, keydownHandler){

  element.classList.add('hidden');
  element.classList.remove('popup-open');
  document.querySelector('body').classList.remove('modal-open');

  document.removeEventListener('keydown', keydownHandler);
  element.removeEventListener('click', closeClickHandler);

}


/* Выполнит рендер любого попапа и повесит на него слушатель события клика по кнопке закрытия */
function openPopup(element, closeClickHandler, keydownHandler){

  element.classList.add('popup-open');
  element.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  element.addEventListener('click', closeClickHandler);
  document.addEventListener('keydown', keydownHandler);
}

export {getRandomUnicInt, getRandomInt, findById, openPopup, closePopup};
