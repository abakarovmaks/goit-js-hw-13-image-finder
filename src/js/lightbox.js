import * as basicLightbox from 'basiclightbox';

const LoadingImgPath = `<img src="./images/jpg.jpg" width="400" height="400"></img>`;

export default function bigImg(data) {
  return basicLightbox.create(`<img src="${data}"/>`);
}
