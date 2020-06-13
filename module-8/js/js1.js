import galleryItems from '../js/gallery-items.js'; // eslint-disable-line

const gallery = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
const img = document.querySelector('.lightbox__image');

const createGallery = galleryItems.map(elem => {
  const list = document.createElement('li');
  list.classList.add('gallery__item');
  const url = document.createElement('a');
  url.classList.add('gallery__link');
  //   url.href = elem.original;
  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = elem.preview;
  img.dataset.source = elem.original;
  img.alt = elem.description;
  list.append(url);
  url.append(img);
  return list;
});
gallery.append(...createGallery);

gallery.addEventListener('click', onTagsClick);
function onTagsClick(event) {
  lightbox.classList.add('is-open');
  img.src = event.target.dataset.source;
}
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('is-open');
  img.src = '';
});
window.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    lightbox.classList.remove('is-open');
    img.src = '';
  }
});

// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
