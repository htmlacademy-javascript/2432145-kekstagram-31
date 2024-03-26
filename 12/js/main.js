import { renderBigPhoto } from './big-picture.js';
import { configUploadHandlers } from './upload-form.js';
import { fetchPictures } from './api.js';
import { showFetchError } from './message.js';

async function bootstrapApp() {
  configUploadHandlers();
  try {
    const pictures = await fetchPictures();
    renderBigPhoto(pictures);
  } catch {
    showFetchError();
  }
}

bootstrapApp();
