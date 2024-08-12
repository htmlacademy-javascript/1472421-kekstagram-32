import { FILE_TYPES, uploadPostForm, imageElement } from './const';

const imageUploadInput = uploadPostForm.querySelector('.img-upload__input');


function getMatches(file, fileTypes){
  return fileTypes.some((element) => file.name.toLowerCase().endsWith(element));
}

function showUploadImage(){

  const file = imageUploadInput.files[0];

  const matches = getMatches(file, FILE_TYPES);

  if(matches){
    imageElement.src = URL.createObjectURL(file);
  }

}


imageUploadInput.addEventListener('change', showUploadImage);
