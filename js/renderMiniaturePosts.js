import { openModalBigPicture } from './renderBigPost';
import { findById} from './utils';
import { bigPicture } from './const';

const userPostsContainer = document.querySelector('.pictures');
const userPostsTemplate = document.querySelector('#picture').content.querySelector('.picture');

function createMiniaturePosts(element, template, container){
  const templateClone = template.cloneNode(true);
  const templateCloneImage = templateClone.querySelector('.picture__img');

  templateCloneImage.id = element.id;
  templateCloneImage.src = element.url;
  templateCloneImage.alt = element.description;
  templateClone.querySelector('.picture__comments').textContent = element.comments.length;
  templateClone.querySelector('.picture__likes').textContent = element.likes;

  container.append(templateClone);
}

/* Удалит все посты со страницы если они уже есть */
function delliteMiniaturePost() {
  const userPostDomElements = userPostsContainer.querySelectorAll('.picture');

  if(userPostDomElements){
    userPostDomElements.forEach((element) => {
      element.remove();
    });
  }
}

function renderMiniaturePosts(postsData) {

  const posts = document.createDocumentFragment();

  postsData.forEach((post) => {
    createMiniaturePosts(post, userPostsTemplate, posts);
  });

  delliteMiniaturePost();
  userPostsContainer.append(posts);

  userPostsContainer.querySelectorAll('.picture__img').forEach((element) => {
    element.addEventListener('click', (evt) => {
      evt.preventDefault();
      openModalBigPicture(findById(postsData, +evt.target.id), bigPicture);
    });
  });
}

export {renderMiniaturePosts};

