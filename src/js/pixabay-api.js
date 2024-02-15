import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function searchImages(userValue) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const PARAMS = `?key=42361876-39dc0f6de1023fb2a8c585c35&q=${userValue}&image_type=photo&orientation=horizontal&safesearch=true`;
  const url = BASE_URL + END_POINT + PARAMS;
  return fetch(url)
    .then(result => result.json())
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          position: 'topRight',
          messageColor: 'white',
          progressBar: false,
          backgroundColor: 'red',
          closeOnClick: true,
          close: false,
          message:
            '😭 Sorry, there are no images matching youre search query. Please, try again!',
        });
      }
      return data;
    });
}
