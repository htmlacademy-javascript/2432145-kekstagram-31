import { effectData } from './effectsData';

let currentEffect = 'none';
const effectsList = document.querySelector('.effects__list');
const preview = document.querySelector('.img-upload__preview > img');

function onEffectChange(evt) {
  const effectElement = evt.target.closest('input[type="radio"]');
  if (!effectElement) {
    return;
  }
  currentEffect = effectElement.value;
  applyFilter();
}

function applyFilter() {
  if(currentEffect === 'none') {
    preview.style.filter = '';
    return;
  }
  const effect = effectData[currentEffect];
  const { filter, max, unit } = effect;
  const filterValue = `${filter}(${max}${unit || ''})`;
  preview.style.filter = filterValue;
}

effectsList.addEventListener('click', onEffectChange);
