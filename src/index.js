import commentPage from './template/commentPage.hbs';
import allPages from './template/allPage.hbs';
import './styles.css';
import ApiService from './apiService';
import refs from './refs';
// import './task1';
// import './task2';

const apiService = new ApiService();
const {
  titlePage,
  containerComments,
  postBtn,
  addMore,
  paginationListItem,
  paginationList,
  inputName,
  inputText,
} = refs;

postBtn.addEventListener('click', postComment);
addMore.addEventListener('click', getComment);

function postComment(e) {
  e.preventDefault();
  const newComment = {
    name: inputName.value,
    text: inputText.value,
  };
  if (newComment.name == '' || newComment.text == '') {
    return alert('Поле не должно быть пустым');
  }
  apiService
    .fetchPostComments(newComment)
    .then(newComment => console.log(newComment))
    .catch();
  apiService.resetPage();
  console.log(inputName.value);
  getComment();

  inputName.value = '';
  inputText.value = '';
}
function getComment() {
  containerComments.innerHTML = '';

  apiService.fetchGetComments().then(elem => {
    containerComments.insertAdjacentHTML('beforeend', commentPage(elem.data));

    apiService.incrementPage();
    paginationList.innerHTML = '';
    pagination();
  });
  addMore.classList.remove('disabled');
}
// function getPage() {
//   containerComments.innerHTML = '';
//   apiService.fetchGetPage().then(elem => {
//     containerComments.insertAdjacentHTML('beforeend', commentPage(elem.data));

//     paginationList.innerHTML = '';
//     pagination();
//   });
// }
titlePage.addEventListener('click', getComment);
// const a = apiService.page;
// console.log(a);
function pagination() {
  apiService.fetchAllComments().then(res => {
    console.log(res.links);

    paginationList.insertAdjacentHTML('beforeend', allPages(res.links));
    const newLink = [];
    res.links.map(link => {
      newLink.push(link.label);
      const el = document.getElementById(`${link.label}`);

      function onClick(e) {
        const btns = paginationList.getElementsByClassName('btn');
        for (let i = 1; i < btns.length - 1; i++) {
          btns[i].classList.remove('active');
        }
        e.target.classList.toggle('active');
        if (el.textContent === '&laquo; Previous') {
          // apiService.decrementPage();

          getComment();
        } else if (el.textContent === 'Next &raquo;') {
          containerComments.innerHTML = '';

          apiService.fetchGetComments().then(elem => {
            containerComments.insertAdjacentHTML(
              'beforeend',
              commentPage(elem.data),
            );
          });
          apiService.incrementPage();
        } else {
          containerComments.innerHTML = '';
          apiService.fetchGetPage(el.textContent).then(elem => {
            containerComments.insertAdjacentHTML(
              'beforeend',
              commentPage(elem.data),
              console.log(el.textContent),
            );
          });
        }
        let a = apiService.page;
        console.log(a);
      }

      el.addEventListener('click', onClick);
    });
  });
}
