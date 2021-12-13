const BASE_URL = 'https://jordan.ashton.fashion/api/goods/30/comments';
export default class ApiService {
  constructor() {
    this.page = 1;
  }
  async fetchGetComments() {
    const result = await fetch(`${BASE_URL}?page=${this.page}`);
    return await result.json();
  }
  async fetchGetPage(value) {
    const result = await fetch(`${BASE_URL}?page=${value}`);
    return await result.json();
  }
  async fetchPostComments(newComment) {
    // const newComment = {
    //   name: inputName.value,
    //   text: inputText.value,
    // };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newComment),
    };

    const res = await fetch(`${BASE_URL}`, options);
    return await res.json();
  }
  async fetchAllComments() {
    const res = await fetch(`${BASE_URL}`);
    return await res.json();
  }
  resetPage() {
    this.page = 1;
  }
  getPage() {
    return this.page;
  }
  setPage(value) {
    return (this.page = value);
  }
  getTotalPages() {
    return this.pages;
  }
  // set totalPages(pgs) {
  //   this.pages = Number(pgs);
  // }
  incrementPage() {
    if (this.page === this.pages) {
      return;
    }
    this.page += 1;
  }
  decrementPage() {
    if (this.page === 1) {
      return;
    }
    this.page -= 1;
  }

  currentPage() {
    return this.page;
  }
}
