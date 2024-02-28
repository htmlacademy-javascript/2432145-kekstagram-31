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

export {getRandomInteger, getGenerateId, getRandomArrayElement};
