import { getUserPostData } from './mocks';

const userPostsData = getUserPostData();
const userPostsContainer = document.querySelector('.pictures');
const userPorsTemplate = document.querySelector('#picture').content.querySelector('.picture');

function getUserPostTemplates(postsData, template) {

  const templateContainer = document.createDocumentFragment();

  postsData.forEach((element) => {
    const templateClone = template.cloneNode(true);

    templateClone.querySelector('.picture__img').src = element.url;
    templateClone.querySelector('.picture__img').alt = element.description;
    templateClone.querySelector('.picture__comments').textContent = element.comments.length;
    templateClone.querySelector('.picture__likes').textContent = element.likes;

    templateContainer.append(templateClone);
  });

  return templateContainer;
}

function renderPosts() {
  userPostsContainer.append(getUserPostTemplates(userPostsData, userPorsTemplate));
}

export {renderPosts};
