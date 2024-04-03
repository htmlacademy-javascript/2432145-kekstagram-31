import { openModal } from './modal.js';
import { renderPictures } from './picture.js';

const pictureContainer = document.querySelector('.pictures');
let pictures = [];

const clearBigPhoto = () => {
  pictureContainer.querySelectorAll('a.picture').forEach((item) => item.remove());
};

const onBigPhotoClick = (evt) => {
  const picture = evt.target.closest('a.picture[data-id]');
  if (!picture) {
    return;
  }
  evt.preventDefault();
  const id = Number(picture.dataset.id);
  const pictureData = pictures.find((item) => item.id === id);
  openModal(pictureData);
};

const renderBigPhoto = (picturesData) => {
  clearBigPhoto();
  pictures = picturesData;
  renderPictures(picturesData);
  pictureContainer.addEventListener('click', onBigPhotoClick);
};


export { renderBigPhoto };
