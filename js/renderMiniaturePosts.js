const userPostsContainer = document.querySelector('.pictures');
const userPostsTemplate = document.querySelector('#picture').content.querySelector('.picture');

function getMiniaturePostsTemplates(postsData, template) {

  const templateContainer = document.createDocumentFragment();

  postsData.forEach((element) => {
    const templateClone = template.cloneNode(true);

    templateClone.querySelector('.picture__img').id = element.id;
    templateClone.querySelector('.picture__img').src = element.url;
    templateClone.querySelector('.picture__img').alt = element.description;
    templateClone.querySelector('.picture__comments').textContent = element.comments.length;
    templateClone.querySelector('.picture__likes').textContent = element.likes;

    templateContainer.append(templateClone);
  });

  return templateContainer;
}

function renderMiniaturePosts(userPostsData) {
  userPostsContainer.append(getMiniaturePostsTemplates(userPostsData, userPostsTemplate));
}

export {renderMiniaturePosts};
