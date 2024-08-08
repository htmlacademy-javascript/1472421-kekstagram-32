import { appContainer } from './const';

const errorMiniaturePostsRequestTemplate = document.querySelector('#data-error')
  .content.querySelector('.data-error');

function errorMiniaturePostsRequestHandler(){
  const templateClone = errorMiniaturePostsRequestTemplate.cloneNode(true);

  appContainer.append(templateClone);

  setTimeout(() => templateClone.remove(), 3000);
};

export {errorMiniaturePostsRequestHandler}
