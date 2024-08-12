import { COMMENTS_SHOW_COUNT, COMMENTS_STEP, bigPicture, commentsList } from './const';

const bigPictureComentTemplate = document.querySelector('.comment_template').content.querySelector('.social__comment');

let currentComments = [];

function createComment(postCommentData){
  const commentElement = bigPictureComentTemplate.cloneNode(true);

  commentElement.querySelector('img').src = postCommentData.avatar;
  commentElement.querySelector('img').alt = postCommentData.name;
  commentElement.querySelector('p').textContent = postCommentData.message;

  return commentElement;
}

function createListComment(postsCommentsData){
  const bigPictureComentContainer = document.createDocumentFragment();

  postsCommentsData.forEach((element) => {
    bigPictureComentContainer.append(createComment(element));
  });

  commentsList.append(bigPictureComentContainer);
}

function moreCommentsClickHandler(){
  /* В переменной хранится актуальное значение коментариев(потомков списка коментариев)
  childElementCount считает количество элементов живой коллекции children  */
  const showComments = commentsList.childElementCount;

  /* В переменную записываются какое количество коментариев(элементов массива currentComments)
  положить в контейнер с коментариями (отобразить на странице) */
  let endOfSlice = showComments + COMMENTS_STEP;
  /* Проверка не привысило ли число коментариев для отображения на странице число коментариев к посту(длинну массива объектов с коментариями) */
  const isAllCommentsShow = endOfSlice >= currentComments.length;
  endOfSlice = isAllCommentsShow ? currentComments.length : endOfSlice;

  /*Получаем массив коментариев от последнего отображенного и последующие 5
  (COMMENTS_STEP = 5, количество вновь отборажающихся коментариев по нажатию на кнопку загрузки) коментариев
  Т.е. обрезаем массив коментариев от по равного по счету числу уже отображенных коментариев до элемента равного по счету либо максимальному числу коментариев
  либо  отображенные + шаг */
  const commentsSlice = currentComments.slice(showComments, endOfSlice);

  /* Рендерим новые коментарии */
  createListComment(commentsSlice);

  bigPicture.querySelector('.social__comment-shown-count').textContent = endOfSlice;
  if(isAllCommentsShow){
    bigPicture.querySelector('.social__comments-loader').classList.add('hidden');
  } else {
    bigPicture.querySelector('.social__comments-loader').classList.remove('hidden');
  }
}

bigPicture.querySelector('.social__comments-loader').addEventListener('click', moreCommentsClickHandler);

function renderComments(postsCommentsData){
  /* очистит список коментариев */
  commentsList.textContent = '';

  bigPicture.querySelector('.social__comment-shown-count').textContent = COMMENTS_SHOW_COUNT;
  bigPicture.querySelector('.social__comment-total-count').textContent = postsCommentsData.length;
  /* Данная строка позволяет поместить пробрасываемый массив объектов с коментами в переменную,
  которая доступна в любой функции данного модуля. С помощью такого подхода мы можем доставать из экспортируемой функции
  (в данном случае renderComments, которая используется в renderBigPost) пробрасываемое в нее значение извне
  и сделать значение доступным на весь модуль, положив его в объявленную в этом модуле переменную*/
  currentComments = postsCommentsData;

  bigPicture.querySelector('.social__comments-loader').click();

}

export {renderComments};
