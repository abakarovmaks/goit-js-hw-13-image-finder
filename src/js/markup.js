import cardGallery from '../template/cardGallery.hbs';
import getRefs from './get-refs';
export default { imageCards, clearImageCard };

const refs = getRefs();

function imageCards(data) {
  const markup = cardGallery(data);
  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}

function clearImageCard() {
  refs.galleryContainer.innerHTML = '';
}
