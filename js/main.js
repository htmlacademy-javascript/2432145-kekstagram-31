import { renderBigPhoto } from './big-picture.js';
import { configUploadHandlers } from './upload-form.js';
import { fetchPictures } from './api.js';
import { showFetchError } from './message.js';
import './filter.js';
import { configFilter } from './filter.js';

async function bootstrapApp() {
  configUploadHandlers();
  try {
    const pictures = await fetchPictures();
    renderBigPhoto(pictures);
    configFilter(pictures);
  } catch {
    showFetchError();
  }
}

bootstrapApp();
