import { renderMiniaturePosts } from './renderMiniaturePosts';
import { initSlider } from './effects';
import { makeGetRequest } from './service';
import { onErrorMiniaturePostsRequest } from './errors';
import './uploadPostForm';

const initRenderMiniaturePosts = makeGetRequest('https://32.javascript.htmlacademy.pro/kekstagram/data', renderMiniaturePosts, onErrorMiniaturePostsRequest);

initRenderMiniaturePosts();
initSlider();
