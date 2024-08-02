import { renderMiniaturePosts } from './renderMiniaturePosts';
import { getUserPostData } from './mocks';
import { openModalBigPicture } from './renderBigPost';
import { findById} from './utils';
import { bigPicture } from './const';
import './uploadPostForm';

const userPostsData = getUserPostData();
const userPostsContainer = document.querySelector('.pictures');


renderMiniaturePosts(userPostsData);

userPostsContainer.addEventListener('click', (evt) => {
  if(evt.target.classList.contains('picture__img')){
    evt.preventDefault();
    openModalBigPicture(findById(userPostsData, +evt.target.id), bigPicture);
  }
});
