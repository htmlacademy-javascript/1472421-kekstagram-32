import { SCALE_STEP, MAX_SCALE_VALUE, MIN_SCALE_VALUE, DEFAULT_SCALE_VALUE, uploadPostForm } from './const';

const scaleSmallerButton = uploadPostForm.querySelector('.scale__control--smaller');
const scaleBiggerButton = uploadPostForm.querySelector('.scale__control--bigger');
const scaleValueInput = uploadPostForm.querySelector('.scale__control--value');
const imageElement = uploadPostForm.querySelector('.img-upload__preview img');

function setScaleValue(value){
  imageElement.style.transform = `scale(${value / 100})`;
  scaleValueInput.value = `${value}`;
}

function smallerButtonHandler(){
  setScaleValue(Math.max(+scaleValueInput.value - SCALE_STEP, MIN_SCALE_VALUE));
}

function biggerButtonHandler(){
  setScaleValue(Math.min(+scaleValueInput.value + SCALE_STEP, MAX_SCALE_VALUE));
}

function resetScale(){
  setScaleValue(DEFAULT_SCALE_VALUE);
}

scaleSmallerButton.addEventListener('click', smallerButtonHandler);
scaleBiggerButton.addEventListener('click', biggerButtonHandler);

export {resetScale}
