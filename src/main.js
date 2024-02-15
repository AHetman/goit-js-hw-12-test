import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const formEl = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

formEl.addEventListener('submit', onBtnSearch);

let userSymbol;

function onBtnSearch(e) {
  e.preventDefault();
  loader.classList.add('is-open');
  userSymbol = e.target.elements.search.value.trim();
  if (userSymbol === '') {
    loader.classList.remove('is-open');
    gallery.innerHTML = '';
    iziToast.show({
      position: 'topRight',
      messageColor: 'white',
      progressBar: false,
      backgroundColor: 'red',
      closeOnClick: true,
      close: false,
      message: '❌ Please enter a search tag',
    });
  } else {
    searchImages(userSymbol)
      .then(images => {
        loader.classList.remove('is-open');
        renderGallery(images);
      })
      .catch(error => {
        loader.classList.remove('is-open');
        console.error('Error fetching images:', error);
      });
  }
  e.target.reset();
}
