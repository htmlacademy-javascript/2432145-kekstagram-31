const DEBOUNCE_DELAY = 500;

function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

function debounce(callback, timeoutDelay = DEBOUNCE_DELAY) {
  let timeoutId;
  return function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...arguments), timeoutDelay);
  };
}

export { isEscapeKey, debounce };
