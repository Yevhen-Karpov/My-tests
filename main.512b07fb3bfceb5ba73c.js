(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);var o=n("x/Gh"),a=n.n(o);n("pW5L"),n("L1EO"),n("fp7Y"),n("JBxO"),n("FdtR");function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r="https://jordan.ashton.fashion/api/goods/30/comments",l=function(){function e(){this.page=1}var t,n,o,a=e.prototype;return a.fetchGetComments=function(){return fetch(r+"?page="+this.page).then((function(e){return e.json()})).catch()},a.fetchPostComments=function(){var e={name:inputName.value,text:inputText.value},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch(""+r,t).then((function(e){return e.json()})).catch()},a.fetchAllComments=function(){return fetch(""+r).then((function(e){return e.json()})).catch()},a.resetPage=function(){this.page=1},a.getPage=function(){return this.page},a.getTotalPages=function(){return this.pages},a.incrementPage=function(){this.page!==this.pages&&(this.page+=1)},a.decrementPage=function(){1!==this.page&&(this.page-=1)},a.currentPage=function(){return this.page},t=e,(n=[{key:"totalPages",set:function(e){this.pages=Number(e)}}])&&i(t.prototype,n),o&&i(t,o),e}(),c={titlePage:document.querySelector(".title-page"),containerComments:document.querySelector(".container-comments"),postBtn:document.querySelector("#button"),addMore:document.querySelector(".add-more"),paginationListItem:document.querySelectorAll(".pagination-list-item"),paginationList:document.querySelector(".pagination-list"),inputName:document.querySelector("#name"),inputText:document.querySelector("#comment")},u=new l,s=c.titlePage,p=c.containerComments,m=c.postBtn,f=c.addMore,h=c.paginationListItem,d=c.inputName,g=c.inputText;function y(){p.innerHTML="",u.fetchGetComments().then((function(e){p.insertAdjacentHTML("beforeend",a()(e.data)),u.incrementPage()})),f.classList.remove("disabled")}console.log(h),m.addEventListener("click",(function(e){e.preventDefault(),u.fetchPostComments().then(console.log).catch(),u.resetPage(),y(),d.value="",g.value=""})),f.addEventListener("click",y),s.addEventListener("click",y)},pW5L:function(e,t,n){var o=n("mp5j");e.exports=(o.default||o).template({1:function(e,t,n,o,a){var i,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="pagination-list-item"><button>'+e.escapeExpression("function"==typeof(i=null!=(i=r(n,"per_page")||(null!=t?r(t,"per_page"):t))?i:e.hooks.helperMissing)?i.call(null!=t?t:e.nullContext||{},{name:"per_page",hash:{},data:a,loc:{start:{line:3,column:41},end:{line:3,column:53}}}):i)+"</button></li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,o,a){var i;return"\n"+(null!=(i=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:2,column:0},end:{line:4,column:9}}}))?i:"")},useData:!0})},"x/Gh":function(e,t,n){var o=n("mp5j");e.exports=(o.default||o).template({1:function(e,t,n,o,a){var i,r=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="comment-item">\n    <p>Name: \''+c("function"==typeof(i=null!=(i=u(n,"name")||(null!=t?u(t,"name"):t))?i:l)?i.call(r,{name:"name",hash:{},data:a,loc:{start:{line:4,column:14},end:{line:4,column:22}}}):i)+"'</p>\n    <p> Comment: '"+c("function"==typeof(i=null!=(i=u(n,"text")||(null!=t?u(t,"text"):t))?i:l)?i.call(r,{name:"text",hash:{},data:a,loc:{start:{line:5,column:18},end:{line:5,column:26}}}):i)+"'</p>\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,o,a){var i;return"\n"+(null!=(i=e.hooks.blockHelperMissing.call(t,e.lambda(t,t),{name:"this",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:2,column:0},end:{line:7,column:9}}}))?i:"")},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.512b07fb3bfceb5ba73c.js.map