const uploadFormElement = document.querySelector('.img-upload__form');
const hashtagsInputElement = document.querySelector('.text__hashtags');
const REGEX_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
/* регулярное выражение для валидации хештегов- начинается с #(^#), используются символы от A до Z и
  от А до Я с буквой Ё  и арабскими цифрами от 0 до 9([a-zа-яё0-9]), длина от 1 до 20 символов({1,19}), включая #,
  не учитывает регистр (модификатор i). */

const pristine = new Pristine(uploadFormElement, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'upload-form--error'
}, false
);

function formatHashtags(value) {
  return value.trim().split(' ').filter(Boolean);
}

function validateHashtagsCount(value) {
  const hashtags = formatHashtags(value);
  return hashtags.length <= 5;
}

function validateHashtagsDuplicates(value) {
  const lowerCaseTags = formatHashtags(value).map((tag) => tag.toLowerCase());
  const uniqTags = new Set(lowerCaseTags);
  return uniqTags.size === lowerCaseTags.length;
}

function validateHashtags(value) {
  const hashtags = formatHashtags(value);
  return hashtags.every((item) => REGEX_HASHTAG.test(item));
}


pristine.addValidator(hashtagsInputElement, validateHashtags, 'Невалидный хештег.', 1, false);
pristine.addValidator(hashtagsInputElement, validateHashtagsCount, 'Не более 5 хештегов.', 2, false);
pristine.addValidator(hashtagsInputElement, validateHashtagsDuplicates, 'Хештег должен быть уникальным.', 3, false);

uploadFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export { pristine };
