async function fetchPictures() {
  const response = await fetch('https://31.javascript.htmlacademy.pro/kekstagram/data');
  return await response.json();
}

async function uploadPicture(body) {
  await fetch('https://31.javascript.htmlacademy.pro/kekstagram', {
    method: 'POST',
    body
  });
}

export { fetchPictures, uploadPicture };
