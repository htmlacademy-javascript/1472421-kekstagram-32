const QUNTITY_POST = 25;
const MIN_QUNTITY_LIKES = 15;
const MAX_QUNTITY_LIKES = 200;
const QUNTITY_COMMETS = 30;
const QUNTITY_AVATAR_COMMETS = 6;
const MAX_ID_COMMENTS = QUNTITY_COMMETS * QUNTITY_POST;
const COMMENTS_SHOW_COUNT = 5;
const COMMENTS_STEP = 5;
const VALID_REG_EXP = new RegExp(/^#[a-zа-яё0-9]{1,19}$/i);
const MAX_HASHTAG_COUNT = 5;
const MAX_TEXT_SYMBOL_COUNT = 140;
const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const SCALE_STEP = 25;
const DEFAULT_SCALE_VALUE = 100;


const ValidErrorText = {
  INVALID_COUNT_HASHTAG: `Максимум: ${MAX_HASHTAG_COUNT} хэштегов`,
  NOT_UNIQUE_HASHTAG: 'Хэштеги должны быть уникальными',
  INVALID_HASHTAG: 'Неправельный хэштег',
  MAX_TEXT_SYMBOL_COUNT: `Максимум ${MAX_TEXT_SYMBOL_COUNT} символов`
};

const appContainer = document.querySelector('body');
const commentsList = appContainer.querySelector('.social__comments');
const bigPicture = appContainer.querySelector('.big-picture');

const uploadPostForm = appContainer.querySelector('.img-upload__form');
const uploadPostPopup = uploadPostForm.querySelector('.img-upload__overlay');
const hashtagInput = uploadPostPopup.querySelector('.text__hashtags');
const descriptionInput = uploadPostPopup.querySelector('.text__description');
const imageElement = uploadPostForm.querySelector('.img-upload__preview img');

const Effects = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const GET_URL = 'https://32.javascript.htmlacademy.pro/kekstagram/data';
const POST_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';

const filterActiveButtonClass = 'img-filters__button--active';

const COUNT_SHOW_RANDOM_POSTS = 10;

const RANDOMNESS_LEVEL = 200;

export {
  QUNTITY_POST,
  MIN_QUNTITY_LIKES,
  MAX_QUNTITY_LIKES,
  QUNTITY_COMMETS,
  QUNTITY_AVATAR_COMMETS,
  MAX_ID_COMMENTS,
  COMMENTS_SHOW_COUNT,
  COMMENTS_STEP,
  VALID_REG_EXP,
  bigPicture,
  commentsList,
  ValidErrorText,
  MAX_HASHTAG_COUNT,
  MAX_TEXT_SYMBOL_COUNT,
  uploadPostForm,
  uploadPostPopup,
  hashtagInput,
  descriptionInput,
  MIN_SCALE_VALUE,
  MAX_SCALE_VALUE,
  SCALE_STEP,
  DEFAULT_SCALE_VALUE,
  imageElement,
  Effects,
  appContainer,
  GET_URL,
  Filters,
  filterActiveButtonClass,
  COUNT_SHOW_RANDOM_POSTS,
  RANDOMNESS_LEVEL,
  POST_URL
};
