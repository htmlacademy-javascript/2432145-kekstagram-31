import {getPhotoArray} from './data.js';
import {renderPictures} from './picture.js';
import {renderBigPhoto} from './big-picture.js';

renderPictures(getPhotoArray());

renderBigPhoto(getPhotoArray());
