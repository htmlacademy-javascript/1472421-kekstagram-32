import { renderMiniaturePosts } from './renderMiniaturePosts';
import { getUserPostData } from './mocks';
import './uploadPostForm';

const userPostsData = getUserPostData();
const userPostsContainer = document.querySelector('.pictures');


renderMiniaturePosts(userPostsData);


