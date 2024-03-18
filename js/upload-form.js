import { isEscapeKey } from './util';


const uploadFormElement = document.querySelector('.img-upload__form');
const uploadFileInputElement = uploadFormElement.querySelector('.img-upload__input');
const uploadOverlayElement = uploadFormElement.querySelector('.img-upload__overlay');
const uploadCancelButtonElement = uploadFormElement.querySelector('.img-upload__cancel');
const uploadWrapperElement = uploadFormElement.querySelectorAll('.img-upload__field-wrapper');
/* const uploadErrorElement = uploadFormElement.querySelector('.upload-form--error'); */

const hashtagInputElement = uploadFormElement.querySelector('.text__hashtags');


function onDocumentKeydownUpload(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadWindow();
  }
}

/* function isUploadFieldEmpty(fieldInputValue, field) {
  if (fieldInputValue.value === '') {
    field.forEach((item) => {
      item.classList.remove('img-upload__field-wrapper--error');
    });
  }
} */

function openUploadWindow() {
  uploadOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydownUpload);
}

function closeUploadWindow() {
  uploadOverlayElement.classList.add('hidden');
  uploadWrapperElement.forEach((item) => {
    item.classList.remove('img-upload__field-wrapper--error');
  });
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydownUpload);
  uploadFileInputElement.innerHTML = '';
  hashtagInputElement.value = '';
  /* uploadErrorElement.remove(); */
}

function onUploadCancelButtonClick() {
  closeUploadWindow();
}

uploadCancelButtonElement.addEventListener('click', onUploadCancelButtonClick);

uploadFileInputElement.addEventListener('change', openUploadWindow);


export { openUploadWindow, closeUploadWindow };
