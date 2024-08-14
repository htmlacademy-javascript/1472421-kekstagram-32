import { renderMiniaturePosts } from './renderMiniaturePosts';
import { initSlider } from './effects';
import { getData } from './service';
import { onErrorMiniaturePostsRequest } from './errors';
import { initFilter } from './imageFilter';
import './uploadPostForm';
import './imageUpload';


initSlider();

try {
  const data = await getData();
  renderMiniaturePosts(data);
  initFilter(data);
} catch {
  onErrorMiniaturePostsRequest();
}
