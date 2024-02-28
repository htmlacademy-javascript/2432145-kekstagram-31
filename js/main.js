const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const NAMES = ['Виталий', 'Артём', 'Валерий', 'Кузьма', 'Артур', 'Платон', 'Александр', 'Тимур', 'Алексей', 'Арсений', 'Олег',
  'Герасим', 'Антон', 'Василий'];
const PHOTOS_COUNT = 25;

//Функция для создания рандомного числа из выбранного диапазона.
const getRandomInteger = (a = 0, b = Infinity) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Функция для создания рандомного ID.
function getGenerateId() {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId++;
    return lastGeneratedId;
  };
}

//Функция для выбора рандомного элемента массива.
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const generateCommentId = getGenerateId();

//Функция для создания объекта comment.
function getObjectComment() {
  const getAvatarUrl = getRandomInteger(1, 6);
  const commeintId = generateCommentId();
  return {
    id: commeintId,
    avatar: `../img/avatar-${getAvatarUrl}.svg`,
    messages: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
}

const generatePhotoId = getGenerateId();

//Функция для создания описания(объекта) фотографии.
function getPhotoDescription() {
  const photoId = getRandomInteger(1, 25);
  const likesNumber = getRandomInteger(15, 200);
  const commentAmount = getRandomInteger(0, 30);
  const id = generatePhotoId();
  const photoDescription = {
    id,
    url: `../photos/${photoId}.jpg`,
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

getPhotoArray();

//ТЗ.
/* В файле main.js напишите необходимые функции для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.

Структура каждого объекта должна быть следующей:

id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

description, строка — описание фотографии. Описание придумайте самостоятельно.

likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:

{
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
}

У каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться.

Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.

Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:

Всё отлично!
В целом всё неплохо. Но не всё.
Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!

Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name. */
