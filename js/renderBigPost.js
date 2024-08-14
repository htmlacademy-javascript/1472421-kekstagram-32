import { openPopup, closePopup } from './utils';
import { renderComments } from './comments';


function setBigPicture(userPostData, bigPicture) {

  bigPicture.querySelector('.big-picture__img > img').src = userPostData.url;
  bigPicture.querySelector('.big-picture__img > img').alt = '';
  bigPicture.querySelector('.likes-count').textContent = userPostData.likes;
  bigPicture.querySelector('.social__caption').textContent = userPostData.description;
  renderComments(userPostData.comments);
}

function keydownKlickOnBigPictureHandler(evt){
  if(evt.key === 'Escape'){
    const activePopup = document.querySelector('.popup-open');
    closePopup(activePopup);
    document.removeEventListener('keydown', keydownKlickOnBigPictureHandler);
  }
}

function openModalBigPicture(userPostData, bigPicture){
  setBigPicture(userPostData, bigPicture);
  document.addEventListener('keydown', keydownKlickOnBigPictureHandler);
  openPopup(bigPicture);
}


export {openModalBigPicture};
