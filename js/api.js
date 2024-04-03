const BASE_GET = 'https://31.javascript.htmlacademy.pro/kekstagram/data';
const BASE_POST = 'https://31.javascript.htmlacademy.pro/kekstagram/';

const fetchPictures = async () => {
  const response = await fetch(BASE_GET);
  return await response.json();
};


const uploadPicture = async(body) => {
  const response = await fetch(BASE_POST, {
    method: 'POST',
    body
  });
  return response.json();
};

export { fetchPictures, uploadPicture };
