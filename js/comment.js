const COMMETNS_TO_FETCH = 5;
let renderingCommentsCount = 0;

const commentTemplate = document.querySelector('#comments').content.querySelector('.social__comment');
const socialCommentsContainer = document.querySelector('.social__comments');
const commentsLoaderButton = document.querySelector('.comments-loader');
const commentTotalCount = document.querySelector('.social__comment-total-count');
const commentShownCount = document.querySelector('.social__comment-shown-count');

function createComment(data) {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = data.avatar;
  comment.querySelector('.social__picture').alt = data.name;
  comment.querySelector('.social__text').textContent = data.message;

  return comment;
}

function renderComments(comments) {
  renderingCommentsCount += COMMETNS_TO_FETCH;
  if (renderingCommentsCount >= comments.length) {
    commentsLoaderButton.classList.add('hidden');
    renderingCommentsCount = comments.length;
  } else {
    commentsLoaderButton.classList.remove('hidden');
  }
  commentTotalCount.textContent = comments.length;
  commentShownCount.textContent = renderingCommentsCount;

  socialCommentsContainer.innerHTML = '';
  const fragment = document.createDocumentFragment();
  comments.slice(0, renderingCommentsCount).forEach((item) => {
    const comment = createComment(item);
    fragment.append(comment);
  });
  socialCommentsContainer.append(fragment);
}

function resetCommentsCount() {
  renderingCommentsCount = 0;
}

export { renderComments, resetCommentsCount };
