const scaleInput = document.querySelector('.scale__control--value');
const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const preview = document.querySelector('.img-upload__preview');

let scale = 1;
const MIN_SCALE = 0.25;
const MAX_SCALE = 1;
const SCALE_STEP = 0.25;

function applyScale() {
  scaleInput.value = `${scale * 100}%`;
  const transform = `scale(${scale})`;
  preview.style.transform = transform;
}

function onScaleBiggerClick() {
  scale = Math.min(scale + SCALE_STEP, MAX_SCALE);
  applyScale();
}

function onScaleSmallerClick() {
  scale = Math.max(scale - SCALE_STEP, MIN_SCALE);
  applyScale();
}

function resetScale() {
  preview.style.transform = '';

}

scaleBiggerButton.addEventListener('click', onScaleBiggerClick);
scaleSmallerButton.addEventListener('click', onScaleSmallerClick);

export { resetScale };
