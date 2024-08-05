import { Effects, imageElement, uploadPostForm } from './const';

const effectsElement = uploadPostForm.querySelector('.effects');
const effectLevelSlider = uploadPostForm.querySelector('.effect-level__slider');
const effectLevelValue = uploadPostForm.querySelector('.effect-level__value');
const effectLevelSliderContainer = uploadPostForm.querySelector('.effect-level');

const effectsToFilter = {
  [Effects.CHROME] : {
    style: 'grayscale',
    unit: ''
  },
  [Effects.SEPIA]: {
    style: 'sepia',
    unit: ''
  },
  [Effects.MARVIN] : {
    style: ' invert',
    unit: '%'
  },
  [Effects.PHOBOS] : {
    style: 'blur',
    unit: 'px'
  },
  [Effects.HEAT] : {
    style: 'brightness',
    unit: ''
  },
  [Effects.DEFAULT] : {
    style: 'none',
    unit: ''
  }
};

const effectsToSliderRange = {
  [Effects.CHROME] : {
    min: 0,
    max: 1,
    step: 0.1
  },
  [Effects.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1
  },
  [Effects.MARVIN] : {
    min: 0,
    max: 100,
    step: 1
  },
  [Effects.PHOBOS] : {
    min: 0,
    max: 3,
    step: 0.1
  },
  [Effects.HEAT] : {
    min: 1,
    max: 3,
    step: 0.1
  },
  [Effects.DEFAULT] : {
    min: 0,
    max: 100,
    step: 1
  }
};

/* Переменная, хранящая выбранный эффект */
let chosenEffect = Effects.DEFAULT;

function setImageStyle(){
  if(chosenEffect === Effects.DEFAULT){
    imageElement.style.filter = null;
    return;
  }

  const value = effectLevelValue.value;
  const {style, unit} = effectsToFilter[chosenEffect];
  imageElement.style.filter = `${style}(${value}${unit})`;
}

function onSliderUpdate(){
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();
  setImageStyle();
}

function createSlider({min, max, step}) {
  noUiSlider.create(effectLevelSlider, {
    range: {min, max},
    step,
    start: max,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value)
    }
  });
  effectLevelSlider.noUiSlider.on('update', onSliderUpdate);
  hideSlider();
}

function hideSlider(){
  effectLevelSliderContainer.classList.add('hidden');
}

function showSlider(){
  effectLevelSliderContainer.classList.remove('hidden');
}

/* Установит слайдеру новые макс и мин значение, в зависимости от выбранного фильтра */
function updateSlider({min, max, step}){
  effectLevelSlider.noUiSlider.updateOptions({
    range: {min, max},
    step,
    start: max
  });
}

function setSlider(){
  if(chosenEffect === Effects.DEFAULT){
    hideSlider();
  }else {
    updateSlider(effectsToSliderRange[chosenEffect]);
    showSlider();
  }
}


function setEffects(effect){
  chosenEffect = effect;
  setSlider();
  setImageStyle();
}

function onEffectsChange(evt){
  setEffects(evt.target.value);
}

function resetSlider(){
  setEffects(Effects.DEFAULT);
}

function initSlider(){
  createSlider(effectsToSliderRange[chosenEffect]);
  effectsElement.addEventListener('change', onEffectsChange);
}

export {initSlider, resetSlider};
