import { openModalBigPicture } from './renderBigPost';
import { findById} from './utils';
import { bigPicture } from './const';

const userPostsContainer = document.querySelector('.pictures');
const userPostsTemplate = document.querySelector('#picture').content.querySelector('.picture');

function createMiniaturePosts(element, template, container){
  const templateClone = template.cloneNode(true);

  templateClone.querySelector('.picture__img').id = element.id;
  templateClone.querySelector('.picture__img').src = element.url;
  templateClone.querySelector('.picture__img').alt = element.description;
  templateClone.querySelector('.picture__comments').textContent = element.comments.length;
  templateClone.querySelector('.picture__likes').textContent = element.likes;

  container.append(templateClone);
}

function renderMiniaturePosts(postsData) {

  const posts = document.createDocumentFragment();

  postsData.forEach((post) => {
    createMiniaturePosts(post, userPostsTemplate, posts);
  });

  userPostsContainer.append(posts);

  userPostsContainer.querySelectorAll('.picture__img').forEach((element) => {
    element.addEventListener('click', (evt) => {
      evt.preventDefault();
      openModalBigPicture(findById(postsData, +evt.target.id), bigPicture);
    });
  });
}

export {renderMiniaturePosts};

