import { COMMENTS_SHOW_COUNT } from './const';


const bigPictureComentTemplate = document.querySelector('.comment_template').content.querySelector('.social__comment');

function getComment(postCommentData){
  const commentElement = bigPictureComentTemplate.cloneNode(true);

  commentElement.querySelector('img').src = postCommentData.avatar;
  commentElement.querySelector('img').alt = postCommentData.name;
  commentElement.querySelector('p').textContent = postCommentData.message;

  return commentElement;
}

function getComments(postsCommentsData, bigPicture, commentsShowCount){
  /* очистит список коментариев */
  bigPicture.querySelector('.social__comments').innerHTML = '';

  const bigPictureComentContainer = document.createDocumentFragment();

  for(let i = 0; i < commentsShowCount; i++){
    bigPictureComentContainer.append(getComment(postsCommentsData[i]));
  }

  return bigPictureComentContainer;
}

function fillBigPicture(userPostData, bigPicture) {

  bigPicture.querySelector('.big-picture__img > img').src = userPostData.url;
  bigPicture.querySelector('.big-picture__img > img').alt = '';
  bigPicture.querySelector('.likes-count').textContent = userPostData.likes;
  bigPicture.querySelector('.social__comment-shown-count').textContent = COMMENTS_SHOW_COUNT;
  bigPicture.querySelector('.social__comment-total-count').textContent = userPostData.comments.length;
  bigPicture.querySelector('.social__comments').append(getComments(userPostData.comments, bigPicture, COMMENTS_SHOW_COUNT));
  bigPicture.querySelector('.social__caption').textContent = userPostData.description;

  bigPicture.classList.remove('hidden');
}

export {fillBigPicture};
