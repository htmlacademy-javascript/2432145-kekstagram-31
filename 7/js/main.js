import {getPhotoArray} from './data.js';
import {renderPictures} from './picture.js';
import {renderBigPhoto} from './big-picture.js';

const pictures = getPhotoArray();
renderPictures(pictures);
renderBigPhoto(pictures);

