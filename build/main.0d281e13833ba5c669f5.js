(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("lmye"),t("D/wG");var r=t("x/Gh"),a=t.n(r),o=t("pW5L"),i=t.n(o);t("L1EO"),t("JBxO"),t("FdtR"),t("wcNg");function c(e,n,t,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,a)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){c(o,r,a,i,u,"next",e)}function u(e){c(o,r,a,i,u,"throw",e)}i(void 0)}))}}var l="https://jordan.ashton.fashion/api/goods/30/comments",s=function(){function e(){this.page=1}var n=e.prototype;return n.fetchGetComments=function(){var e=u(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l+"?page="+this.page);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.fetchGetPage=function(){var e=u(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l+"?page="+n);case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n.fetchPostComments=function(){var e=u(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},e.next=3,fetch(""+l,t);case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n.fetchAllComments=function(){var e=u(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(""+l);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n.resetPage=function(){this.page=1},n.getPage=function(){return this.page},n.setPage=function(e){return this.page=e},n.getTotalPages=function(){return this.pages},n.incrementPage=function(){this.page!==this.pages&&(this.page+=1)},n.decrementPage=function(){1!==this.page&&(this.page-=1)},n.currentPage=function(){return this.page},e}(),p={titlePage:document.querySelector(".title-page"),containerComments:document.querySelector(".container-comments"),postBtn:document.querySelector("#button"),addMore:document.querySelector(".add-more"),paginationListItem:document.querySelectorAll(".pagination-list-item"),paginationList:document.querySelector(".pagination-list"),inputName:document.querySelector("#name"),inputText:document.querySelector("#comment")},m=new s,f=p.titlePage,h=p.containerComments,d=p.addMore,g=p.paginationList,v=p.inputName,x=p.inputText;function y(){h.innerHTML="",m.fetchGetComments().then((function(e){h.insertAdjacentHTML("beforeend",a()(e.data)),m.incrementPage(),g.innerHTML="",m.fetchAllComments().then((function(e){console.log(e.links),g.insertAdjacentHTML("beforeend",i()(e.links));var n=[];e.links.map((function(e){n.push(e.label);var t=document.getElementById(""+e.label);t.addEventListener("click",(function(e){for(var n=g.getElementsByClassName("btn"),r=1;r<n.length-1;r++)n[r].classList.remove("active");e.target.classList.toggle("active"),"&laquo; Previous"===t.textContent?y():"Next &raquo;"===t.textContent?(h.innerHTML="",m.fetchGetComments().then((function(e){h.insertAdjacentHTML("beforeend",a()(e.data))})),m.incrementPage()):(h.innerHTML="",m.fetchGetPage(t.textContent).then((function(e){h.insertAdjacentHTML("beforeend",a()(e.data),console.log(t.textContent))})));var o=m.page;console.log(o)}))}))}))})),d.classList.remove("disabled")}p.postBtn.addEventListener("click",(function(e){e.preventDefault();var n={name:v.value,text:x.value};if(""==n.name||""==n.text)return alert("Поле не должно быть пустым");m.fetchPostComments(n).then((function(e){return console.log(e)})).catch(),m.resetPage(),console.log(v.value),y(),v.value="",x.value=""})),d.addEventListener("click",y),f.addEventListener("click",y)},pW5L:function(e,n,t){var r=t("mp5j");e.exports=(r.default||r).template({1:function(e,n,t,r,a){var o,i=null!=n?n:e.nullContext||{},c=e.hooks.helperMissing,u=e.escapeExpression,l=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='pagination-list-item'><button\r\n      class='btn'\r\n      id='"+u("function"==typeof(o=null!=(o=l(t,"label")||(null!=n?l(n,"label"):n))?o:c)?o.call(i,{name:"label",hash:{},data:a,loc:{start:{line:4,column:10},end:{line:4,column:19}}}):o)+"'\r\n    >"+u("function"==typeof(o=null!=(o=l(t,"label")||(null!=n?l(n,"label"):n))?o:c)?o.call(i,{name:"label",hash:{},data:a,loc:{start:{line:5,column:5},end:{line:5,column:14}}}):o)+"</button></li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,r,a){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:6,column:9}}}))?o:""},useData:!0})},"x/Gh":function(e,n,t){var r=t("mp5j");e.exports=(r.default||r).template({1:function(e,n,t,r,a){var o,i=null!=n?n:e.nullContext||{},c=e.hooks.helperMissing,u=e.escapeExpression,l=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li class="comment-item">\r\n    <p>Name: \''+u("function"==typeof(o=null!=(o=l(t,"name")||(null!=n?l(n,"name"):n))?o:c)?o.call(i,{name:"name",hash:{},data:a,loc:{start:{line:4,column:14},end:{line:4,column:22}}}):o)+"'</p>\r\n    <p> Comment: '"+u("function"==typeof(o=null!=(o=l(t,"text")||(null!=n?l(n,"text"):n))?o:c)?o.call(i,{name:"text",hash:{},data:a,loc:{start:{line:5,column:18},end:{line:5,column:26}}}):o)+"'</p>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,r,a){var o;return"\r\n"+(null!=(o=e.hooks.blockHelperMissing.call(n,e.lambda(n,n),{name:"this",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:2,column:0},end:{line:7,column:9}}}))?o:"")},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.0d281e13833ba5c669f5.js.map