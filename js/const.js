const QUNTITY_POST = 25;
const MIN_QUNTITY_LIKES = 15;
const MAX_QUNTITY_LIKES = 200;
const QUNTITY_COMMETS = 30;
const QUNTITY_AVATAR_COMMETS = 6;
const MAX_ID_COMMENTS = QUNTITY_COMMETS * QUNTITY_POST;
const COMMENTS_SHOW_COUNT = 5;
const COMMENTS_STEP = 5;

const commentsList = document.querySelector('.social__comments');
const bigPicture = document.querySelector('.big-picture');


export {QUNTITY_POST, MIN_QUNTITY_LIKES, MAX_QUNTITY_LIKES, QUNTITY_COMMETS, QUNTITY_AVATAR_COMMETS, MAX_ID_COMMENTS, COMMENTS_SHOW_COUNT, COMMENTS_STEP, bigPicture, commentsList};
