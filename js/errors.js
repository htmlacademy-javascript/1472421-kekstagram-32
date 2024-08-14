import { appContainer } from './const';

const errorMiniaturePostsRequestTemplate = appContainer.querySelector('#data-error')
  .content.querySelector('.data-error');
const errorPostFormTemplate = appContainer.querySelector('#error')
  .content.querySelector('.error');

function onErrorMiniaturePostsRequest(){
  const templateClone = errorMiniaturePostsRequestTemplate.cloneNode(true);

  appContainer.append(templateClone);

  setTimeout(() => templateClone.remove(), 3000);
}

function closeErrorPostFormClickHandler(element) {
  return function(){
    element.remove();
    element.removeEventListener('click', closeErrorPostFormClickHandler(element));
  };
}

function documentClickHandler(element) {
  return function(evt) {
    if(!evt.target.classList.contains('error__inner')){
      element.remove();
      appContainer.removeEventListener('click',documentClickHandler(element));
    }
  };
}

function whenErrorMessegeKeyDownHandler(element){
  return function(evt) {
    if(evt.key === 'Escape'){
      element.remove();
      document.removeEventListener('keydown', whenErrorMessegeKeyDownHandler(element));
    }
  };
}

function onErrorPostForm() {
  const templateClone = errorPostFormTemplate.cloneNode(true);

  templateClone.querySelector('.error__button')
    .addEventListener('click', closeErrorPostFormClickHandler(templateClone));
  appContainer.addEventListener('click', documentClickHandler(templateClone));
  document.addEventListener('keydown', whenErrorMessegeKeyDownHandler(templateClone));
  appContainer.append(templateClone);
}

export {onErrorMiniaturePostsRequest, onErrorPostForm};
