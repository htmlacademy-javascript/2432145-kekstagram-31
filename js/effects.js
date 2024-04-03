import { effectData } from './effects-data';
import { updateSliderConfig, sliderElement } from './slider';

let currentEffect = 'none';
const effectsList = document.querySelector('.effects__list');
const preview = document.querySelector('.img-upload__preview > img');
const effectLevelValue = document.querySelector('.effect-level__value');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');

const applyFilter = (value) => {
  const effect = effectData[currentEffect];
  const { filter, max, unit } = effect;
  const filterValue = `${filter}(${value ?? max}${unit || ''})`;
  preview.style.filter = currentEffect === 'none' ? 'none' : filterValue;
  effectLevelValue.value = value ?? max;
  sliderContainerElement.style.display = currentEffect === 'none' ? 'none' : '';
};

const onEffectChange = (evt) => {
  const effectElement = evt.target.closest('input[type="radio"]');
  if (!effectElement) {
    return;
  }
  currentEffect = effectElement.value;
  updateSliderConfig(effectData[currentEffect]);
  applyFilter();
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get(true);
  applyFilter(sliderValue);
};

const resetEffect = () => {
  preview.style.filter = '';
  sliderContainerElement.style.display = 'none';
};

effectsList.addEventListener('click', onEffectChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);
export { resetEffect };
