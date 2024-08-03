import { openPopup, closePopup } from './utils';
import { VALID_REG_EXP, ValidErrorText, MAX_HASHTAG_COUNT, MAX_TEXT_SYMBOL_COUNT } from './const';


const uploadPostForm = document.querySelector('.img-upload__form');
const uploadPostPopup = uploadPostForm.querySelector('.img-upload__overlay');
const hashtagInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const isInputFocused = () => document.activeElement === hashtagInput || document.activeElement === descriptionInput;


const pristine = new Pristine(uploadPostForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

function normalizeTags(tagsString){
  return tagsString.trim().split(' ').filter((tag) => Boolean(tag.length));
}

function validateTags(tagsString){
  return normalizeTags(tagsString).every((tag) => VALID_REG_EXP.test(tag));
}

function validateTagsCount(tagsString){
  return normalizeTags(tagsString).length <= MAX_HASHTAG_COUNT;
}

function validateTagsUnique(tagsString){
  const lowerCaseTags = normalizeTags(tagsString).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
}

function validateTextareaCount(textareaString){
  return textareaString.length <= MAX_TEXT_SYMBOL_COUNT;
}


pristine.addValidator(
  hashtagInput,
  validateTags,
  ValidErrorText.INVALID_HASHTAG,
  1,
  true
);

pristine.addValidator(
  hashtagInput,
  validateTagsUnique,
  ValidErrorText.NOT_UNIQUE_HASHTAG,
  2,
  true
);

pristine.addValidator(
  hashtagInput,
  validateTagsCount,
  ValidErrorText.INVALID_COUNT_HASHTAG,
  3,
  true
);

pristine.addValidator(
  descriptionInput,
  validateTextareaCount,
  ValidErrorText.MAX_TEXT_SYMBOL_COUNT,
  0,
  true
);

/* Функция блокирует кнопку отправки формы при наличии ошибок валидации */
function disableSubmitButton() {
  if(pristine.getErrors().length){
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

function closeClickHandler(evt) {
  if(evt.target.classList.contains('cancel')){
    uploadPostForm.reset();
    pristine.reset();
    closePopup(evt.currentTarget, closeClickHandler, keydownHandler);
  }
}

function keydownHandler(evt){
  if(evt.key === 'Escape' && !isInputFocused()){
    evt.preventDefault();
    uploadPostForm.reset();
    pristine.reset();
    document.querySelector('.popup-open').classList.add('hidden');
    document.querySelector('.popup-open').classList.remove('popup-open');
  }
}


uploadPostForm.addEventListener('change', () => {
  openPopup(uploadPostPopup, closeClickHandler, keydownHandler);
  disableSubmitButton();
  pristine.validate();
});
