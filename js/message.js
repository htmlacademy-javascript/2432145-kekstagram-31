import { isEscapeKey } from './util';

const errorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
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

function showFetchError() {
  const errorElement = errorTemplate.cloneNode(true);
  document.body.appendChild(errorElement);
  setTimeout(() => (errorElement.remove()), 5000);
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

export { showFetchError, showUploadSuccess, showErrorUpload };
