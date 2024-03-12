import { isEscapeKey } from './util.js';

const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureCancelButton = bigPictureContainer.querySelector('.big-picture__cancel');

const bigPictureImg = bigPictureContainer.querySelector('.big-picture__img > img');
const likesCount = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');
const commentTemplate = document.querySelector('#comments').content.querySelector('.social__comment');
const socialCommentsContainer = document.querySelector('.social__comments');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoaderButton = document.querySelector('.comments-loader');

function openBigPicture(data) {
  bigPictureContainer.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  commentsLoaderButton.classList.add('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);

  bigPictureImg.src = data.url;
  bigPictureImg.alt = data.description;
  likesCount.textContent = data.likes;
  socialCaption.textContent = data.description;

  renderComments(data.comments);
}

function closeBigPicture() {
  bigPictureContainer.classList.add('hidden');
  socialCommentCount.classList.remove('hidden');
  commentsLoaderButton.classList.remove('hidden');
  document.body.classList.remove('modal-open');

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

function createComment(data) {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = data.avatar;
  comment.querySelector('.social__picture').alt = data.name;
  comment.querySelector('.social__text').textContent = data.messages;

  return comment;
}

function renderComments(comments) {
  socialCommentsContainer.innerHTML = '';
  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    const comment = createComment(item);
    fragment.append(comment);
  });
  socialCommentsContainer.append(fragment);
}

export { openBigPicture };
