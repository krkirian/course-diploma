!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{const e=document.querySelector(".callback-btn"),t=document.getElementById("callback_form"),n=document.querySelector(".free-visit"),o=document.getElementById("free_visit_form"),l=(e,t)=>{e.addEventListener("click",()=>{t.style.display="block"})},c=e=>{e.addEventListener("click",t=>{let n=t.target;(n.classList.contains("overlay")||n.classList.contains("close_icon"))&&(e.style.display="none")})};l(e,t),l(n,o),c(t),c(o)};var l=()=>{const e=document.querySelector(".fixed-gift");if(e){const t=document.getElementById("gift");e.addEventListener("click",()=>{t.style.display="block",e.style.display="none"}),t.addEventListener("click",e=>{let n=e.target;(n.classList.contains("close_icon")||n.classList.contains("overlay")||n.classList.contains("close-btn"))&&(t.style.display="none")})}};var c=()=>{const e=document.getElementById("totop");let t=document.querySelector(".header-main").offsetHeight;e.style.display="none",window.addEventListener("scroll",()=>{pageYOffset>t?e.style.display="block":pageYOffset<t&&(e.style.display="none")})};var r=()=>{const e=document.querySelector(".menu-button").querySelector("img"),t=document.querySelector(".popup-menu"),n=document.querySelector(".head"),o=document.querySelector(".top-menu");let l=n.offsetHeight;e.addEventListener("click",()=>{t.style.display="flex"}),t.addEventListener("click",e=>{let n=e.target;console.log(n),(n.classList.contains("close-menu-btn-btn")||n.closest(".scroll"))&&(t.style.display="none")}),window.addEventListener("scroll",()=>{pageYOffset>l?o.style.position="fixed":o.style.position=""})};var s=()=>{const e=document.getElementById("card_order"),t=document.getElementById("m1"),n=document.getElementById("m2"),o=document.getElementById("m3"),l=document.getElementById("m4"),c=document.getElementById("card_leto_mozaika"),r=document.getElementById("card_leto_schelkovo"),s=document.getElementById("price-total"),d=e.querySelectorAll('input[name="name"]')[0];e.querySelectorAll('input[name="name"]')[1],document.getElementById("callback_form-phone"),document.getElementById("card_check"),document.querySelectorAll("card-order-btn");e.addEventListener("change",()=>{t.checked&&c.checked?s.textContent="1999":n.checked&&c.checked?s.textContent="9990":o.checked&&c.checked?s.textContent="13990":l.checked&&c.checked?s.textContent="19990":t.checked&&r.checked?s.textContent="2990":n.checked&&r.checked?s.textContent="14990":o.checked&&r.checked?s.textContent="21990":l.checked&&r.checked&&(s.textContent="24990")}),d.addEventListener("keyup",()=>{if(console.log(d.value),"ТЕЛО2019"===d.value){let e=s.textContent;s.textContent=`${Math.round(.7*+e)}`}})};var d=()=>{const e=document.querySelector(".main-slider"),t=e.querySelectorAll(".slide"),n=e.querySelector(".slide-active");let o,l=0;t.forEach(e=>{e.style.display="none"}),n.style.display="flex";const c=()=>{var e,n,o;o="slide-active",(e=t)[n=l].classList.remove(o),e[n].style.display="none",l++,l>=t.length&&(l=0),((e,t,n)=>{e[t].classList.add(n),e[t].style.display="flex"})(t,l,"slide-active")};((e=3e3)=>{o=setInterval(c,e)})()};var a=()=>{const e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide"),n=e.querySelector(".slide-active"),o=document.querySelector(".prev-arrow"),l=document.querySelector(".next-arrow"),c=e.querySelector(".dots-wrapper");e.style.position="relative",o.style.cssText="width: 40px; height: 40px; background-color: #ffd11a; position: absolute; top: 45%; left: 0; border-radius: 50%; border: none; font-size: 20px;",l.style.cssText="width: 40px; height: 40px; background-color: #ffd11a; position: absolute; top: 45%; right: 0; border-radius: 50%; border: none; font-size: 20px;";let r,s=0;t.forEach(e=>{e.style.display="none"}),n.style.display="flex",c.style.cssText="display: flex; position: absolute; bottom: 0; left: 50%";t.forEach((e,t)=>{e[t]=document.createElement("li"),e[t].classList.add("dot"),e[t].style.cssText="width: 20px; height: 5px; background-color: #ffffff; margin: 5px; border: none; border-radius: 10px; z-index: 55;",e[t]===e[0]&&(e[0].classList.add("dot-active"),e[0].style.background="#ffd11a"),c.appendChild(e[t])});let d=document.querySelectorAll(".dot");const a=(e,t,n)=>{e[t].classList.remove(n),e[t].style.display="none"},i=(e,t,n)=>{e[t].classList.add(n),e[t].style.display="flex"},u=()=>{a(t,s,"slide-active"),a(d,s,"dot-active"),s++,s>=t.length&&(s=0),i(t,s,"slide-active"),i(d,s,"dot-active")},y=(e=3e3)=>{r=setInterval(u,e)};e.addEventListener("click",e=>{e.preventDefault();let n=e.target;n.matches(".portfolio-btn, .dot")&&(a(t,s,"slide-active"),a(d,s,"dot-active"),n.matches(".next-arrow")?s++:n.matches(".prev-arrow")?s--:n.matches(".dot")&&d.forEach((e,t)=>{e===n&&(s=t)}),s>=t.length&&(s=0),s<0&&(s=t.length-1),i(t,s,"slide-active"),i(d,s,"dot-active"))}),e.addEventListener("mouseover",e=>{console.log(e.target),(e.target.matches(".next-arrow")||e.target.matches(".prev-arrow"))&&clearInterval(r)}),e.addEventListener("mouseout",e=>{(e.target.matches(".next-arrow")||e.target.matches(".prev-arrow"))&&y()}),y()};(()=>{const e=document.querySelector(".club-select"),t=e.querySelector("ul"),n=document.querySelector(".header-main"),o=e.querySelector("p");n.addEventListener("click",e=>{"none"===t.style.display&&e.target===o?t.style.display="block":(t.style.display=e.target===o||e.target.closest(".header-main"))&&(t.style.display="none")})})(),o(),l(),c(),r(),s(),d(),a()}]);