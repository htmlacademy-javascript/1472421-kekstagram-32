import { COUNT_SHOW_RANDOM_POSTS, Filters, RANDOMNESS_LEVEL, TIMEOUT_DELAY, appContainer, filterActiveButtonClass } from './const';
import { renderMiniaturePosts } from './renderMiniaturePosts';
import { debounce, getRandomInt } from './utils';

const imageFilter = appContainer.querySelector('.img-filters');
let chousenFilterOption = Filters.DEFAULT;


function showChousenButton(){
  imageFilter.querySelector(`.${filterActiveButtonClass}`)
    .classList
    .remove(`${filterActiveButtonClass}`);

  imageFilter.querySelector(`#${chousenFilterOption}`)
    .classList
    .add(`${filterActiveButtonClass}`);
}

function getRandomPost(){
  return getRandomInt(1, RANDOMNESS_LEVEL) - getRandomInt(1, RANDOMNESS_LEVEL);
}

function getPopularFilter(postA, postB){
  return postB.comments.length - postA.comments.length;
}

function updateFilter(data) {

  let copyData = structuredClone(data);

  if(chousenFilterOption === Filters.DEFAULT){
    debounce(() => renderMiniaturePosts(data), TIMEOUT_DELAY)();
  }

  if(chousenFilterOption === Filters.RANDOM){
    copyData = copyData.sort(getRandomPost).slice(0, COUNT_SHOW_RANDOM_POSTS);
    debounce(() => renderMiniaturePosts(copyData), TIMEOUT_DELAY)();
  }

  if(chousenFilterOption === Filters.DISCUSSED){
    copyData = copyData.sort(getPopularFilter);
    debounce(() => renderMiniaturePosts(copyData), TIMEOUT_DELAY)();
  }

  showChousenButton();
}

function setFilter(data) {
  return function(evt){
    if(chousenFilterOption === evt.target.id){
      return;
    }

    chousenFilterOption = evt.target.id;
    updateFilter(data);
  };
}

function initFilter(data) {
  imageFilter.classList.remove('img-filters--inactive');

  imageFilter.addEventListener('click', setFilter(data));
}


export {initFilter};
