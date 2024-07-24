import { renderMiniaturePosts } from './renderMiniaturePosts';
import { getUserPostData } from './mocks';
import { openModalBigPicture } from './renderBigPost';
import { findById } from './utils';

const userPostsData = getUserPostData();
const userPostsContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');

renderMiniaturePosts(userPostsData);

userPostsContainer.addEventListener('click', (evt) => {
  evt.preventDefault();
  openModalBigPicture(findById(userPostsData, +evt.target.id), bigPicture);
});

