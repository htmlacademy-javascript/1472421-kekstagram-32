import { renderMiniaturePosts } from './renderMiniaturePosts';
import { initSlider } from './effects';
import { makeRequest } from './service';
import { errorMiniaturePostsRequestHandler } from './errors';
import './uploadPostForm';

const initRenderMiniaturePosts = makeRequest('https://32.javascript.htmlacademy.pro/kekstagram/data', renderMiniaturePosts, errorMiniaturePostsRequestHandler);

initRenderMiniaturePosts();
initSlider();



