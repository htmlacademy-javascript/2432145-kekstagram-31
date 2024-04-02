import { isEscapeKey } from './util';

const REMOVE_ERROR_BLOCK_TIMER = 5000;

const errorDataTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const templates = {
  successUploadTemplate: document.querySelector('#success').content.querySelector('.success'),
  errorUploadTemplate: document.querySelector('#error').content.querySelector('.error')
};

function showMessage(template) {
  const messageElement = template.cloneNode(true);
  const closeTemplateButton = messageElement.querySelector('.success__button, .error__button');
  closeTemplateButton.addEventListener('click', closeMessage);
  document.addEventListener('keydown', onDocumentKeydown);
  document.body.addEventListener('click', onBodyClick);
  document.body.appendChild(messageElement);
}

function closeMessage() {
  const messageElement = document.querySelector('.success, .error');
  messageElement.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.removeEventListener('click', onBodyClick);
}

function showUploadSuccess() {
  return showMessage(templates.successUploadTemplate);
}

function showErrorUpload() {
  return showMessage(templates.errorUploadTemplate);
}

function showToastError(errorMessage) {
  const errorElement = errorDataTemplate.cloneNode(true);
  if (errorMessage) {
    errorElement.querySelector('.data-error__title').textContent = errorMessage;
  }
  document.body.appendChild(errorElement);
  setTimeout(() => (errorElement.remove()), REMOVE_ERROR_BLOCK_TIMER);
}

function showFetchError() {
  showToastError();
}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
}

function onBodyClick(evt) {
  if (!evt.target.closest('.success__inner, .error__inner')) {
    closeMessage();
  }
}

export { showFetchError, showUploadSuccess, showErrorUpload, showToastError };
