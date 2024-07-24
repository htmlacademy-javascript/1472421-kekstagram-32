const userPostsContainer = document.querySelector('.pictures');
const userPostsTemplate = document.querySelector('#picture').content.querySelector('.picture');

function creategetMiniaturePosts(element, template, container){
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
    creategetMiniaturePosts(post, userPostsTemplate, posts);
  });

  userPostsContainer.append(posts);

}

export {renderMiniaturePosts};
