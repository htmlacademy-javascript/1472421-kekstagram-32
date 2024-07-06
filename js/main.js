import { getRandomUnicInt, getRandomInt } from './utils';
import { NAME, MESSAGE, DESCRIPTION_PHOTOS } from './mocks';


const uniceIdPhoto = getRandomUnicInt(1, 25);
const unicUrlPhoto = getRandomUnicInt(1, 25);
const unicIdCometn = getRandomUnicInt(1, 250);

/* Возвращает случайное сообщение коментария */
function getCommentMessage() {
  /* Переключатель определяет будет ли в сообщении одно или два предложения */
  const toggle = getRandomInt(1, 2);

  return toggle === 2 ? `${MESSAGE[getRandomUnicInt(1, MESSAGE.length)()]}
  + ${MESSAGE[getRandomUnicInt(1, MESSAGE.length)()]}` : `${MESSAGE[getRandomUnicInt(1, MESSAGE.length)()]}`;
}

/* Программа генерирует один коментарий */
function getUserComment() {
  return {
    id: unicIdCometn(),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: getCommentMessage(),
    name: NAME[getRandomInt(0, NAME.length - 1)],
  };
}

/* Программа, генерирующая один пост */
function getUserPost() {


  return {
    id: uniceIdPhoto(),
    url: `photos/${unicUrlPhoto()}.jpg`,
    description: DESCRIPTION_PHOTOS[getRandomInt(0, DESCRIPTION_PHOTOS.length - 1)],
    likes: getRandomInt(15, 200),
    comments: getUserComment()
  };

}

function getUserPostData(){
  return Array.from({length: 25}, getUserPost);
}

const userPostData = getUserPostData();
