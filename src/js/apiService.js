const BASE_URL = `https://pixabay.com/api/`;
const KEY = '19178590-f2f628b09a5664f3e2bf6a47d';

export default class ApiService {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  async getImages() {
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`;

    return this.getData(url).then((res) => {
      return res.hits;
    });
  }

  async countImages() {
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`;

    return this.getData(url).then((res) => {
      return res.allHits;
    });
  }

  async getData(url) {
    const images = await fetch(url);
    const response = await images.json();

    return response;
  }

  get searchQuery() {
    return this.searchQuery;
  }

  set searchQuery(newSearchQuery) {
    this.searchQuery = newSearchQuery;
  }

  get page() {
    return this.page;
  }

  set page(newPage) {
    this.page = newPage;
  }
}
