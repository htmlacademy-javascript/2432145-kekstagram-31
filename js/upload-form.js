import { isEscapeKey } from './util';


const uploadFormElement = document.querySelector('.img-upload__form');
const uploadFileInputElement = uploadFormElement.querySelector('.img-upload__input');
const uploadOverlayElement = uploadFormElement.querySelector('.img-upload__overlay');
const uploadCancelButtonElement = uploadFormElement.querySelector('.img-upload__cancel');

const hashtagInputElement = uploadFormElement.querySelector('.text__hashtags');


function onDocumentKeydownUpload(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadWindow();
  }
}

function openUploadWindow() {
  uploadOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydownUpload);
}

function closeUploadWindow() {
  uploadOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydownUpload);
  uploadFileInputElement.innerHTML = '';
  hashtagInputElement.value = '';
}

function onUploadCancelButtonClick() {
  closeUploadWindow();
}

uploadCancelButtonElement.addEventListener('click', onUploadCancelButtonClick);

uploadFileInputElement.addEventListener('change', openUploadWindow);

export { openUploadWindow, closeUploadWindow };
