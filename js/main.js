//import {getPhotoArray} from './data.js';
import {renderPictures} from './picture.js';
import {renderBigPhoto} from './big-picture.js';
import { createUploadHandlers } from './upload-form.js';
import { fetchPictures } from './api.js';

/* const pictures = getPhotoArray(); */
createUploadHandlers();
const pictures = await fetchPictures();
renderPictures(pictures);
renderBigPhoto(pictures);
