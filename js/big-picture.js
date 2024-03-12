import { isEscapeKey } from './util.js';

const bigPictureContainer = document.querySelector('.big-picture');
const pictureContainer = document.querySelector('.pictures');
const bigPictureImg = bigPictureContainer.querySelector('.big-picture__img');
const pictureImgs = document.querySelectorAll('.picture__img');
const bigPictureCancelButton = bigPictureContainer.querySelector('.big-picture__cancel');

/* function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
} */

function renderBigPhoto (pictures) {
  pictureContainer.addEventListener ('click', (evt) => {
    const picture = evt.target.closest('a.picture[data-id]');
    if (!picture) {
      return;
    }
    const id = Number(picture.dataset.id);
    console.log(pictures.find((item) => item.id === id));
  });

}

/* function openBigPicture(evt) {
  if (evt.target.matches('.picture__img')) {
    bigPictureContainer.classList.remove('hidden');
    document.addEventListener('keydown', onDocumentKeydown);
  }
} */

/* function closeBigPicture() {
  bigPictureContainer.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}

function openBigPicture() {
  bigPictureContainer.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
}

pictureImgs.forEach((pictureImg) => {
  pictureImg.addEventListener('click', openBigPicture);
});

parentPicture.addEventListener('click', openBigPicture);

bigPictureCancelButton.addEventListener('click', closeBigPicture); */

export {renderBigPhoto};
