function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;
  return function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...arguments), timeoutDelay);
  };
}

export { isEscapeKey, debounce };
