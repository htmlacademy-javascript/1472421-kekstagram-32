import { renderMiniaturePosts } from './renderMiniaturePosts';
import { getUserPostData } from './mocks';
import { fillBigPicture } from './renderBigPost';
import { findById, openPopup } from './utils';

const userPostsData = getUserPostData();
const userPostsContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');


userPostsContainer.addEventListener('click', (evt) => {
  evt.preventDefault();
  openPopup(findById(userPostsData, +evt.target.id), bigPicture, fillBigPicture);
});


renderMiniaturePosts(userPostsData);
