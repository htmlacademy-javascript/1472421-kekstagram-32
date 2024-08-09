import { appContainer } from './const';

const errorMiniaturePostsRequestTemplate = appContainer.querySelector('#data-error')
  .content.querySelector('.data-error');
const errorPostFormTemplate = appContainer.querySelector('#error')
.content.querySelector('.error');

function onErrorMiniaturePostsRequest(){
  const templateClone = errorMiniaturePostsRequestTemplate.cloneNode(true);

  appContainer.append(templateClone);

  setTimeout(() => templateClone.remove(), 3000);
};

function onErrorPostForm() {
  const templateClone = errorPostFormTemplate.cloneNode(true);

  appContainer.append(templateClone);
}

export {onErrorMiniaturePostsRequest, onErrorPostForm}
