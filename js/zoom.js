const MIN_SCALE = 0.25;
const MAX_SCALE = 1;
const SCALE_STEP = 0.25;
let scale = 1;

const scaleInput = document.querySelector('.scale__control--value');
const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const preview = document.querySelector('.img-upload__preview > img');

const applyScale = () => {
  scaleInput.value = `${scale * 100}%`;
  preview.style.transform = `scale(${scale})`;
};

const onScaleBiggerClick = () => {
  scale = Math.min(scale + SCALE_STEP, MAX_SCALE);
  applyScale();
};

const onScaleSmallerClick = () => {
  scale = Math.max(scale - SCALE_STEP, MIN_SCALE);
  applyScale();
};

const resetScale = () => {
  preview.style.transform = '';
};

scaleBiggerButton.addEventListener('click', onScaleBiggerClick);
scaleSmallerButton.addEventListener('click', onScaleSmallerClick);

export { resetScale };
