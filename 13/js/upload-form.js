import { isEscapeKey } from './util';
import { pristine } from './validate-upload-form';
import { resetScale } from './zoom';
import { resetEffect } from './effects';
import { uploadPicture } from './api';
import { showUploadSuccess, showErrorUpload } from './message';


const uploadFormElement = document.querySelector('.img-upload__form');
const uploadFileInputElement = uploadFormElement.querySelector('.img-upload__input');
const uploadOverlayElement = uploadFormElement.querySelector('.img-upload__overlay');
const uploadCancelButtonElement = uploadFormElement.querySelector('.img-upload__cancel');
const uplodadSubmitButton = uploadFormElement.querySelector('#upload-submit');

const hashtagInputElement = uploadFormElement.querySelector('.text__hashtags');


function onDocumentKeydownUpload(evt) {
  const isErrorUploadVisible = document.querySelector('.error');
  if (isErrorUploadVisible) {
    return;
  }
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

async function onSubmitForm(evt) {
  evt.preventDefault();
  const isFormValid = pristine.validate();
  if (!isFormValid) {
    return;
  }
  const formData = new FormData(uploadFormElement);
  uplodadSubmitButton.disabled = true;
  uplodadSubmitButton.textContent = 'Сохраняю';
  try {
    await uploadPicture(formData);
    closeUploadWindow();
    showUploadSuccess();
  } catch {
    showErrorUpload();
  } finally {
    uplodadSubmitButton.disabled = false;
    uplodadSubmitButton.textContent = 'Опубликовать';
  }
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
  resetEffect();
}

function configUploadHandlers() {
  uploadCancelButtonElement.addEventListener('click', onUploadCancelButtonClick);
  uploadFileInputElement.addEventListener('change', onFileInputChange);
}


export { configUploadHandlers };
