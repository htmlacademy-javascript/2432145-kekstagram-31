import {getRandomInteger, getGenerateId, getRandomArrayElement} from './util.js';

const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const NAMES = ['Виталий', 'Артём', 'Валерий', 'Кузьма', 'Артур', 'Платон', 'Александр', 'Тимур', 'Алексей', 'Арсений', 'Олег',
  'Герасим', 'Антон', 'Василий'];
const PHOTOS_COUNT = 25;

const generateCommentId = getGenerateId();

//Функция для создания объекта comment.
function getObjectComment() {
  const avatarId = getRandomInteger(1, 6);
  const commentId = generateCommentId();
  return {
    id: commentId,
    avatar: `../img/avatar-${avatarId}.svg`,
    messages: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
}

const generatePhotoId = getGenerateId();

//Функция для создания описания(объекта) фотографии.
function getPhotoDescription() {
  const likesNumber = getRandomInteger(15, 200);
  const commentAmount = getRandomInteger(0, 30);
  const id = generatePhotoId();
  const photoDescription = {
    id,
    url: `../photos/${id}.jpg`,
    description: 'С рулетом на балконе',
    likes: likesNumber,
    comments: Array.from({ length: commentAmount }, getObjectComment),
  };
  return photoDescription;
}

//Функция для создания массива с описаниями фотографии.
function getPhotoArray() {
  const photoArray = Array.from({ length: PHOTOS_COUNT }, getPhotoDescription);
  return photoArray;
}

export {getPhotoArray};
