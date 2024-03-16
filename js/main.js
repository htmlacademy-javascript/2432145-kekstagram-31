import {getPhotoArray} from './data.js';
import {renderPictures} from './picture.js';
import {renderBigPhoto} from './big-picture.js';
import { openUploadWindow, closeUploadWindow } from './upload-form.js';

const pictures = getPhotoArray();
renderPictures(pictures);
renderBigPhoto(pictures);

