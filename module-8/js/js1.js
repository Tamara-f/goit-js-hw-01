import galleryItems from '../js/gallery-items.js'; // eslint-disable-line

const gallery = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
const img = document.querySelector('.lightbox__image');
const backDrop = document.querySelector('.lightbox__content');

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
  window.addEventListener('keydown', onPressEsc);
}

closeBtn.addEventListener('click', closeModal);

backDrop.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
});
function onPressEsc(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

function closeModal(event) {
  lightbox.classList.remove('is-open');
  img.src = '';
  window.removeEventListener('keydown', onPressEsc);
}

// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
