import { renderMiniaturePosts } from './renderMiniaturePosts';
import { initSlider } from './effects';
import { getRequest } from './service';
import './uploadPostForm';

const requestNow = getRequest('https://32.javascript.htmlacademy.pro/kekstagram/data', renderMiniaturePosts);

requestNow();
initSlider();



