const BASE_URL = 'https://jordan.ashton.fashion/api/goods/30/comments';
export default class ApiService {
  constructor() {
    this.page = 1;
  }
  fetchGetComments() {
    return fetch(`${BASE_URL}?page=${this.page}`)
      .then(result => {
        this.page += 1;
        return result.json();
      })
      .catch();
  }
  fetchPostComments() {
    const newComment = {
      name: inputName.value,
      text: inputText.value,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newComment),
    };

    return fetch(`${BASE_URL}`, options)
      .then(res => {
        return res.json();
      })
      .catch();
  }
  fetchAllComments() {
    return fetch(`${BASE_URL}`)
      .then(res => {
        return res.json();
      })
      .catch();
  }
  resetPage() {
    this.page = 1;
  }
}
