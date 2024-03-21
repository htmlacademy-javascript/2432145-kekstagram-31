import { isEscapeKey } from './util';
import { pristine } from './validate-upload-form';
import { resetScale } from './zoom';


const uploadFormElement = document.querySelector('.img-upload__form');
const uploadFileInputElement = uploadFormElement.querySelector('.img-upload__input');
const uploadOverlayElement = uploadFormElement.querySelector('.img-upload__overlay');
const uploadCancelButtonElement = uploadFormElement.querySelector('.img-upload__cancel');

const hashtagInputElement = uploadFormElement.querySelector('.text__hashtags');


function onDocumentKeydownUpload(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (document.activeElement.closest('.img-upload__field-wrapper')) {
      return;
    }
    closeUploadWindow();
  }
}

function onFileInputChange() {
  openUploadWindow();
}

function onUploadCancelButtonClick() {
  closeUploadWindow();
}

function onSubmitForm(evt) {
  evt.preventDefault();
  pristine.validate();
}

function openUploadWindow() {
  uploadOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydownUpload);
  uploadFormElement.addEventListener('submit', onSubmitForm);
}

function closeUploadWindow() {
  uploadOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydownUpload);
  uploadFormElement.removeEventListener('submit', onSubmitForm);

  hashtagInputElement.value = '';
  uploadFormElement.reset();
  pristine.reset();
  resetScale();
}

function createUploadHandlers() {
  uploadCancelButtonElement.addEventListener('click', onUploadCancelButtonClick);
  uploadFileInputElement.addEventListener('change', onFileInputChange);
}


export { createUploadHandlers };
