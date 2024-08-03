import { openPopup, closePopup } from './utils';
import { renderComments } from './comments';


function setBigPicture(userPostData, bigPicture) {

  bigPicture.querySelector('.big-picture__img > img').src = userPostData.url;
  bigPicture.querySelector('.big-picture__img > img').alt = '';
  bigPicture.querySelector('.likes-count').textContent = userPostData.likes;
  bigPicture.querySelector('.social__caption').textContent = userPostData.description;
  renderComments(userPostData.comments);
}

function closeClickHandler(evt) {
  if(evt.target.classList.contains('cancel')){
    closePopup(evt.currentTarget, closeClickHandler, keydownHandler);
  }
}

function keydownHandler(evt){
  if(evt.key === 'Escape'){
    document.querySelector('.popup-open').classList.add('hidden');
    document.querySelector('.popup-open').classList.remove('popup-open');
  }
}

function openModalBigPicture(userPostData, bigPicture){
  setBigPicture(userPostData, bigPicture);
  openPopup(bigPicture, closeClickHandler, keydownHandler);
}

export {openModalBigPicture};
