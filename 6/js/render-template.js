import { getUserPostData } from './mocks';

const userPosts = getUserPostData();
const userPostsContainer = document.querySelector('.pictures');

function getUserPostTemplate(userPostsData) {
  return `<a href="#" class="picture">
            <img class="picture__img" src="${userPostsData.url}" width="182" height="182" alt="${userPostsData.description}">
            <p class="picture__info">
              <span class="picture__comments">${userPostsData.comments.length}</span>
              <span class="picture__likes">${userPostsData.likes}</span>
            </p>
          </a>`;
}

function renderPosts() {
  userPosts.forEach((element) => {
    userPostsContainer.insertAdjacentHTML('beforeend', getUserPostTemplate(element));
  });
}

export {renderPosts};
