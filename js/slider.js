const sliderElement = document.querySelector('.effect-level__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  connect: 'lower'
});

const updateSliderConfig = (effect) => {
  const config = {
    range: {
      min: effect.min,
      max: effect.max,
    },
    start: effect.max,
    step: effect.step
  };
  sliderElement.noUiSlider.updateOptions(config);
};

export { updateSliderConfig, sliderElement };
