import { renderMiniaturePosts } from './renderMiniaturePosts';
import { initSlider } from './effects';
import { makeGetRequest } from './service';
import { onErrorMiniaturePostsRequest } from './errors';
import { initFilter } from './imageFilter';
import { GET_URL } from './const';
import './uploadPostForm';


const initRenderMiniaturePosts = makeGetRequest(GET_URL, renderMiniaturePosts, onErrorMiniaturePostsRequest, initFilter);

initRenderMiniaturePosts();
initSlider();
