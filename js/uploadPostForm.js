import { closePopup, openPopup } from './utils';
import { VALID_REG_EXP, ValidErrorText, MAX_HASHTAG_COUNT, MAX_TEXT_SYMBOL_COUNT, uploadPostForm, hashtagInput, descriptionInput, uploadPostPopup, appContainer, POST_URL } from './const';
import { resetScale } from './scale';
import { resetSlider } from './effects';
import { makePostRequest } from './service';
import { onErrorPostForm } from './errors';


const submitButton = uploadPostPopup.querySelector('.img-upload__submit');
const closeFormButton = uploadPostPopup.querySelector('.img-upload__cancel');


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

function successMessageButtonHandler(element){
  return function() {
    element.remove();
  };
}

function documentClickHandler(element) {
  return function(evt) {
    if(!evt.currentTarget.classList.contains('success')){
      element.remove();
      document.removeEventListener('click',documentClickHandler(element));
    }
  };
}

function whenSuccessMessegeKeyDownHandler(element){
  return function(evt) {
    if(evt.key === 'Escape'){
      element.remove();
      document.removeEventListener('keydown', whenSuccessMessegeKeyDownHandler(element));
    }
  };
}

function getSuccessMessage() {
  const succeessMessageTemplate = appContainer.querySelector('#success')
    .content.querySelector('.success');

  const succeessMessage = succeessMessageTemplate.cloneNode(true);
  const succeessMessageButton = succeessMessage.querySelector('.success__button');

  succeessMessageButton.addEventListener('click', successMessageButtonHandler(succeessMessage));
  appContainer.addEventListener('click', documentClickHandler(succeessMessage));
  document.addEventListener('keydown', whenSuccessMessegeKeyDownHandler(succeessMessage));

  appContainer.append(succeessMessage);
}

/* Функция выполняет очистку фильтров, пристина, формы и закрывает форму */
function closeForm(){
  uploadPostForm.reset();
  pristine.reset();
  resetScale();
  resetSlider();
  closePopup(uploadPostPopup);
}

/* При успешной отправки формы на сервер, обнулит форму и пристин и закроет форму */
function onSuccessPostForm() {
  closeForm();
  getSuccessMessage();
}


uploadPostForm.addEventListener('change', () => {
  openPopup(uploadPostPopup);
  pristine.validate();
  disableSubmitButton();
});

uploadPostForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  const postRequest = makePostRequest(POST_URL, onSuccessPostForm, onErrorPostForm, formData);

  postRequest();
});

function closeFormButtonHandler(){
  closeForm();
  closeFormButton.removeEventListener('click', closeFormButtonHandler);
}

function keydownCloseFormHandler(evt){
  if(evt.key === 'Escape'){
    closeForm();
    document.removeEventListener('keydown', keydownCloseFormHandler);
  }
}

closeFormButton.addEventListener('click', closeFormButtonHandler);
document.addEventListener('keydown', keydownCloseFormHandler);
