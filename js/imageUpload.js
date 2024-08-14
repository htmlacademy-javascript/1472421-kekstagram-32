import { FILE_TYPES, uploadPostForm, imageElement } from './const';

const imageUploadInput = uploadPostForm.querySelector('.img-upload__input');
const effectsPreview = uploadPostForm.querySelectorAll('.effects__preview');


function getMatches(file, fileTypes){
  return fileTypes.some((element) => file.name.toLowerCase().endsWith(element));
}

function showUploadImage(){

  const file = imageUploadInput.files[0];

  const matches = getMatches(file, FILE_TYPES);

  if(matches){
    imageElement.src = URL.createObjectURL(file);

    effectsPreview.forEach((preview) => {
      preview.style.backgroundImage = `url(${imageElement.src})`;
    });
  }

}


/* imageUploadInput.addEventListener('change', showUploadImage); */
export {showUploadImage};
