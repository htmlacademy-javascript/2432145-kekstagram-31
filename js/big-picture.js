import { openModal } from './modal.js';

const pictureContainer = document.querySelector('.pictures');

function renderBigPhoto(pictures) {
  pictureContainer.addEventListener('click', (evt) => {
    const picture = evt.target.closest('a.picture[data-id]');
    if (!picture) {
      return;
    }
    evt.preventDefault();
    const id = Number(picture.dataset.id);
    const pictureData = pictures.find((item) => item.id === id);
    openModal(pictureData);
  });

}

export { renderBigPhoto };
