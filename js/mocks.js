import { getRandomUnicInt, getRandomInt } from './utils';
import { QUNTITY_POST, QUNTITY_COMMETS, QUNTITY_AVATAR_COMMETS, MAX_ID_COMMENTS, MIN_QUNTITY_LIKES, MAX_QUNTITY_LIKES, COMMENTS_SHOW_COUNT} from './const';

const NAMES = ['Андрей', 'Артём', 'Яна', 'Александр', 'Анастасия', 'Катя'];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Отличный кадр!',
  'Так проходит вечер...',
  'Посмотрите, какая красота!',
  'Удивлены?',
];


const uniceIdPhoto = getRandomUnicInt(1, QUNTITY_POST);
const unicIdCometn = getRandomUnicInt(1, MAX_ID_COMMENTS);

/* Возвращает случайное сообщение коментария */
function getCommentMessage() {
  /* Переключатель определяет будет ли в сообщении одно или два предложения */
  const toggle = getRandomInt(1, 2);

  return toggle === 2 ? `${MESSAGES[getRandomUnicInt(0, MESSAGES.length - 1)()]} ${MESSAGES[getRandomUnicInt(0, MESSAGES.length - 1)()]}` : `${MESSAGES[getRandomUnicInt(0, MESSAGES.length - 1)()]}`;
}

/* Программа генерирует один коментарий */
function getUserComment() {
  return {
    id: unicIdCometn(),
    avatar: `img/avatar-${getRandomInt(1, QUNTITY_AVATAR_COMMETS)}.svg`,
    message: getCommentMessage(),
    name: NAMES[getRandomInt(0, NAMES.length - 1)],
  };
}

/* Программа, генерирующая один пост */
function getUserPost() {

  const id = uniceIdPhoto();

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length - 1)],
    likes: getRandomInt(MIN_QUNTITY_LIKES, MAX_QUNTITY_LIKES),
    comments: Array.from({length: getRandomInt(COMMENTS_SHOW_COUNT, QUNTITY_COMMETS)}, getUserComment)
  };

}

function getUserPostData(){
  return Array.from({length: QUNTITY_POST}, getUserPost);
}

export {getUserPostData};
