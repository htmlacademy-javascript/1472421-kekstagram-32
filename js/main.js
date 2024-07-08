import { getRandomUnicInt, getRandomInt } from './utils';
import { NAME, MESSAGE, DESCRIPTION_PHOTOS } from './mocks';
import { QUNTITY_POST, QUNTITY_COMMETS, QUNTITY_AVATAR_COMMETS, MAX_ID_COMMENTS, MIN_QUNTITY_LIKES, MAX_QUNTITY_LIKES} from './const';


const uniceIdPhoto = getRandomUnicInt(1, QUNTITY_POST);
const unicUrlPhoto = getRandomUnicInt(1, QUNTITY_POST);
const unicIdCometn = getRandomUnicInt(1, MAX_ID_COMMENTS);

/* Возвращает случайное сообщение коментария */
function getCommentMessage() {
  /* Переключатель определяет будет ли в сообщении одно или два предложения */
  const toggle = getRandomInt(1, 2);

  return toggle === 2 ? `${MESSAGE[getRandomUnicInt(0, MESSAGE.length - 1)()]} ${MESSAGE[getRandomUnicInt(0, MESSAGE.length - 1)()]}` : `${MESSAGE[getRandomUnicInt(0, MESSAGE.length - 1)()]}`;
}

/* Программа генерирует один коментарий */
function getUserComment() {
  return {
    id: unicIdCometn(),
    avatar: `img/avatar-${getRandomInt(1, QUNTITY_AVATAR_COMMETS)}.svg`,
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
    likes: getRandomInt(MIN_QUNTITY_LIKES, MAX_QUNTITY_LIKES),
    comments: Array.from({length: getRandomInt(1, QUNTITY_COMMETS)}, getUserComment)
  };

}

function getUserPostData(){
  return Array.from({length: QUNTITY_POST}, getUserPost);
}

const userPostData = getUserPostData();

console.log(userPostData)
