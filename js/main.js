const messages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const names = ['Виталий', 'Артём', 'Валерий', 'Кузьма', 'Артур', 'Платон', 'Александр', 'Тимур', 'Алексей', 'Арсений', 'Олег',
  'Герасим', 'Антон', 'Василий'];

const getRandomInteger = (a = 0, b = Infinity) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

let getCommentId = 1;
const getNumberId = getRandomInteger(1, 25);
const getLikesNumber = getRandomInteger(15, 200);
const getPhotoUrl = getRandomInteger(1, 25);
const getAvatarUrl = getRandomInteger(1, 6);
const getCommentAmount = getRandomInteger(0, 30);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getObjectComment = () => ({
  id: getCommentId++,
  avatar: `../img/avatar-${getAvatarUrl}.svg`,
  messages: getRandomArrayElement(messages),
  name: getRandomArrayElement(names),
});

const getPhotoDescription = () => (
  {
    id: getNumberId,
    url: `../photos/${getPhotoUrl}.jpg`,
    description: 'С рулетом на балконе',
    likes: getLikesNumber,
    comments: Array.from({ length: getCommentAmount }, getObjectComment),
  }
);

console.table(getPhotoDescription());

