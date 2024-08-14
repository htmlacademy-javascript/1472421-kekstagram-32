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

function closeClickHandler(evt) {
  if(evt.target.classList.contains('cancel')){
    closePopup(evt.currentTarget);
  }
}


function closePopup(activePopup){

  activePopup.classList.add('hidden');
  activePopup.classList.remove('popup-open');
  document.querySelector('body').classList.remove('modal-open');

  activePopup.removeEventListener('click', closeClickHandler);

}


/* Выполнит показ любого попапа и повесит на него слушатель события клика по кнопке закрытия */
function openPopup(element){

  element.classList.add('popup-open');
  element.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  element.addEventListener('click', closeClickHandler);
}

/* При вызове debounce и передачи результата вызова в переменную,
будет создано лексическое окружение результата вызова, в котором будет перемення
timeoutId и анонимная функция, знающая о переменной timeoutId и переданных в
debounce в момент вызова параметров */

function debounce(callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {getRandomUnicInt, getRandomInt, findById, openPopup, closePopup, debounce};
