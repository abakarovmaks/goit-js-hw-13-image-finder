import ApiService from './apiService';
import getRefs from './get-refs';
import markup from './markup';
import lightbox from './lightbox';
import throttle from 'lodash.throttle';
import notify from './notifications';

const refs = getRefs();
const apiService = new ApiService();

let currentWindowHeight = 0;
const throttledScroll = throttle(onScroll, 500);

refs.form.addEventListener('submit', onSearch);
refs.galleryContainer.addEventListener('click', openModal);

function openModal(elem) {
  if (elem.target.nodeName !== 'IMG') return;
  lightbox.bigImg(elem.target.dataset.src).show;
}

function onSearch(elem) {
  elem.preventDefault();
  let searchingField = elem.currentTarget.elements.query;

  if (searchingField.value === '') {
    notify.errorNoQuery();
    return;
  }
  markup.clearImageCard();
  apiService.page = 1;
  apiService.searchQuery = searchField.value;
  try {
    apiService.countImages().then((count) => {
      if (count === 0) {
        notify.errorNotFound();
        return;
      }
      apiService.getImages().then((data) => {
        markup.imageCards(data);
        window.addEventListener('scroll', throttledScroll);
      });
    });
  } catch (error) {
    notify.errorNotice();
  }
  searchingField.value === '';
}

function onScroll(elem) {
  try {
    apiService.countImages().then((count) => {
      if (count === refs.galleryContainer.childElementCount) {
        notify.errorInfo();
        window.removeEventListener('scroll', throttledScroll);
        return;
      }
      apiService.getImages().then((data) => {
        apiService.page += 1;
        currentWindowHeight = refs.galleryContainer.offsetHeight;
        markup.imageCards(data);
        window.scrollTo({
          top: currentWindowHeight,
          left: 0,
          behavior: 'smooth',
        });
      });
    });
  } catch (error) {
    notify.errorNotice();
  }
}
