import {getPhotoArray} from './data.js';
import {renderPictures} from './picture.js';
import {renderBigPhoto} from './big-picture.js';
import { createUploadHandlers } from './upload-form.js';

const pictures = getPhotoArray();
createUploadHandlers();
renderPictures(pictures);
renderBigPhoto(pictures);
