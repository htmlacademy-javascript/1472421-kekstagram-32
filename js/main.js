import { renderMiniaturePosts } from './renderMiniaturePosts';
import { getUserPostData } from './mocks';
import { initSlider } from './effects';
import './uploadPostForm';

const userPostsData = getUserPostData();


initSlider();
renderMiniaturePosts(userPostsData);


