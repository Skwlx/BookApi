(this.webpackJsonpbookapi=this.webpackJsonpbookapi||[]).push([[0],[,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/Background.e4f2fd23.jpg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(2),r=n.n(c),l=n(3),i=(n(9),n(10),function(){var e=Object(o.useState)({}),t=Object(l.a)(e,2),n=t[0],c=t[1];return a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"contentFormBox"},a.a.createElement("input",{type:"text",name:"searchedValue"}),a.a.createElement("button",{onClick:function(e){var t;e.preventDefault(),""!==(t=document.querySelector("input").value)&&void 0!==n&&fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(t)).then((function(e){return e.json()})).then((function(e){c(e.items)}))}},"Search")),a.a.createElement("div",{className:"contentContainer"},void 0===n[0]?a.a.createElement("p",{className:"contentContainerInfo"},"No books here"):n.map((function(e){return a.a.createElement("div",{className:"contentBook",key:e.id},a.a.createElement("div",{className:"contentBookDescription"},a.a.createElement("h3",{className:"contentBookDescriptionTitle"},e.volumeInfo.title),a.a.createElement("h5",{className:"contentBookDescriptionTitle"},e.volumeInfo.publisher," ",e.volumeInfo.publishedDate),a.a.createElement("p",{className:"contentBookDescriptionInfo"},void 0===e.volumeInfo.description?"There is no description":"".concat(e.volumeInfo.description.slice(0,200),"...")),a.a.createElement("a",{className:"contentBookSource",href:e.accessInfo.webReaderLink,target:"_blank",rel:"noreferrer"},"Read")),a.a.createElement("div",{className:"contentBookCover"},a.a.createElement("img",{src:void 0===e.volumeInfo.imageLinks?"":"".concat(e.volumeInfo.imageLinks.thumbnail),className:"contentBookFront",alt:"There is no front site of the book",onClick:function(e){!function(e){window.innerWidth<=768&&e.target.classList.toggle("show")}(e)}}),a.a.createElement("img",{src:void 0===e.volumeInfo.imageLinks?"":"".concat(e.volumeInfo.imageLinks.thumbnail),className:"contentBookBack",alt:"There is no front side of the book"})))}))))}),s=(n(11),function(){return a.a.createElement("footer",{className:"footer"},a.a.createElement("p",null,"Copyright \xa9 ",(new Date).getFullYear()," ",a.a.createElement("a",{href:"https://github.com/Skwlx"},"Pawe\u0142 S\u0142awuta")))}),m=(n(12),function(){return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"BookShelf"))}),u=(n(13),function(e){return a.a.createElement("div",null,a.a.createElement(m,null),e.children,a.a.createElement(s,null))}),f=function(){return a.a.createElement(u,null,a.a.createElement(i,null))};r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.15c34be6.chunk.js.map