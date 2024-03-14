import { isEscapeKey } from './util.js';
import { renderComments, resetCommentsCount } from './comment.js';

const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureCancelButton = bigPictureContainer.querySelector('.big-picture__cancel');

const bigPictureImg = bigPictureContainer.querySelector('.big-picture__img > img');
const likesCount = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoaderButton = document.querySelector('.comments-loader');

let pictureComments = [];

function openBigPicture(data) {
  bigPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);

  bigPictureImg.src = data.url;
  bigPictureImg.alt = data.description;
  likesCount.textContent = data.likes;
  socialCaption.textContent = data.description;
  pictureComments = data.comments;

  renderComments(data.comments);
}

function closeBigPicture() {
  bigPictureContainer.classList.add('hidden');
  socialCommentCount.classList.remove('hidden');
  commentsLoaderButton.classList.remove('hidden');
  document.body.classList.remove('modal-open');

  resetCommentsCount();
  document.removeEventListener('keydown', onDocumentKeydown);
}

function onBigPictureCancelButtonClick() {
  closeBigPicture();
}

bigPictureCancelButton.addEventListener('click', onBigPictureCancelButtonClick);

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

function onCommentLoaderClick() {
  renderComments(pictureComments);
}

commentsLoaderButton.addEventListener('click', onCommentLoaderClick);

export { openBigPicture };
