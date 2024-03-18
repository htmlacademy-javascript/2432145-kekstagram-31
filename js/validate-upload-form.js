const uploadFormElement = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadFormElement, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'upload-form--error'
});

function validatorHashtag(value) {
  const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;
  /* регулярное выражение для валидации хештегов- начинается с #(^#), используются символы от A до Z и
    от А до Я с буквой Ё  и арабскими цифрами от 0 до 9([a-zа-яё0-9]), длина от 1 до 20 символов({1,19}), включая #,
   не учитывает регистр (модификатор i). */
  return hashtag.test(value);
}

function validatorComment(value) {
  const comment = /^[a-zа-яё0-9]{0,140}$/i;
  return comment.test(value);
}

function validateHashtags() {
  pristine.addValidator(uploadFormElement.querySelector('[name="hashtags"]'), validatorHashtag, 'Невалидный хештег.');
}

function validateComments() {
  pristine.addValidator(uploadFormElement.querySelector('[name="description"]'), validatorComment, 'Невалидный комментарий.');
}


uploadFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export {validateHashtags, validateComments};
