async function fetchPictures() {
  const response = await fetch('https://31.javascript.htmlacademy.pro/kekstagram/data');
  return await response.json();
}

//https://31.javascript.htmlacademy.pro/kekstagram/data
export { fetchPictures};
