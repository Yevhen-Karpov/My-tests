import commentPage from './template/commentPage.hbs';
import allPages from './template/allPage.hbs';
import './styles.css';
import ApiService from './apiService';
import refs from './refs';

const apiService = new ApiService();
const {
  containerComments,
  postBtn,
  addMore,
  paginationListItem,
  paginationList,
  inputName,
  inputText,
} = refs;
console.log(paginationListItem);
postBtn.addEventListener('click', postComment);
addMore.addEventListener('click', getComment);

function postComment(e) {
  e.preventDefault();

  apiService.fetchPostComments().then(console.log).catch();
  apiService.resetPage();
  getComment();
  inputName.value = '';
  inputText.value = '';
}
function getComment() {
  containerComments.innerHTML = '';

  apiService.fetchGetComments().then(elem => {
    console.log(elem.current_page);
    //
    console.log(elem);
    containerComments.insertAdjacentHTML('beforeend', commentPage(elem.data));

    apiService.incrementPage();
  });
  addMore.classList.remove('disabled');
}
if (containerComments.innerHTML === '') {
  getComment();
}
// for (let item of paginationListItem) {
//   containerComments.innerHTML = '';
//   item.addEventListener('click', getComment);
// }
function pagination() {
  apiService.fetchAllComments().then(res => {
    console.log(res.per_page);

    paginationList.insertAdjacentHTML('beforeend', allPages(res));
  });
}
pagination();
