!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{const e=document.querySelector(".callback-btn"),t=document.getElementById("callback_form"),n=document.querySelector(".free-visit"),o=document.getElementById("free_visit_form"),l=document.getElementById("thanks"),r=(e,t)=>{e.addEventListener("click",()=>{t.style.display="block"})},c=e=>{e.addEventListener("click",t=>{let n=t.target;(n.classList.contains("overlay")||n.classList.contains("close_icon")||n.classList.contains("close-btn"))&&(e.style.display="none")})};r(e,t),r(n,o),c(t),c(o),c(l)};var l=()=>{const e=document.querySelector(".fixed-gift");if(e){const t=document.getElementById("gift");e.addEventListener("click",()=>{t.style.display="block",e.style.display="none"}),t.addEventListener("click",e=>{let n=e.target;(n.classList.contains("close_icon")||n.classList.contains("overlay")||n.classList.contains("close-btn"))&&(t.style.display="none")})}};var r=()=>{const e=document.getElementById("totop");let t=document.querySelector(".header-main").offsetHeight;e.style.display="none",window.addEventListener("scroll",()=>{pageYOffset>t?e.style.display="block":pageYOffset<t&&(e.style.display="none")})};var c=()=>{const e=document.querySelector(".menu-button").querySelector("img"),t=document.querySelector(".popup-menu"),n=document.querySelector(".head"),o=document.querySelector(".top-menu");let l=n.offsetHeight;e.addEventListener("click",()=>{t.style.display="flex"}),t.addEventListener("click",e=>{let n=e.target;console.log(n),(n.classList.contains("close-menu-btn-btn")||n.closest(".scroll"))&&(t.style.display="none")}),window.addEventListener("scroll",()=>{pageYOffset>l?o.style.position="fixed":o.style.position=""})};var s=()=>{const e=document.getElementById("card_order"),t=document.getElementById("m1"),n=document.getElementById("m2"),o=document.getElementById("m3"),l=document.getElementById("m4"),r=document.getElementById("card_leto_mozaika"),c=document.getElementById("card_leto_schelkovo"),s=document.getElementById("price-total"),a=e.querySelectorAll('input[name="name"]')[0];e.querySelectorAll('input[name="name"]')[1],document.getElementById("callback_form-phone"),document.getElementById("card_check"),document.querySelectorAll("card-order-btn");a&&e.addEventListener("change",()=>{if(t.checked&&r.checked)if("ТЕЛО2019"===a.value){let e=1999;s.textContent=`${Math.round(.7*+e)}`}else s.textContent="1999";else if(n.checked&&r.checked)if("ТЕЛО2019"===a.value){let e=9999;s.textContent=`${Math.round(.7*+e)}`}else s.textContent="9990";else if(o.checked&&r.checked)if("ТЕЛО2019"===a.value){let e=13990;s.textContent=`${Math.round(.7*+e)}`}else s.textContent="13990";else if(l.checked&&r.checked)if("ТЕЛО2019"===a.value){let e=19990;s.textContent=`${Math.round(.7*+e)}`}else s.textContent="19990";else if(t.checked&&c.checked)if("ТЕЛО2019"===a.value){let e=2990;s.textContent=`${Math.round(.7*+e)}`}else s.textContent="2990";else if(n.checked&&c.checked)if("ТЕЛО2019"===a.value){let e=14990;s.textContent=`${Math.round(.7*+e)}`}else s.textContent="14990";else if(o.checked&&c.checked)if("ТЕЛО2019"===a.value){let e=21990;s.textContent=`${Math.round(.7*+e)}`}else s.textContent="21990";else if(l.checked&&c.checked)if("ТЕЛО2019"===a.value){let e=24990;s.textContent=`${Math.round(.7*+e)}`}else s.textContent="24990"})};var a=()=>{const e=document.querySelector(".main-slider"),t=e.querySelectorAll(".slide"),n=e.querySelector(".slide-active");let o,l=0;t.forEach(e=>{e.style.display="none"}),n.style.display="flex";const r=()=>{var e,n,o;o="slide-active",(e=t)[n=l].classList.remove(o),e[n].style.display="none",l++,l>=t.length&&(l=0),((e,t,n)=>{e[t].classList.add(n),e[t].style.display="flex"})(t,l,"slide-active")};((e=3e3)=>{o=setInterval(r,e)})()};var d=()=>{document.querySelectorAll("form");document.createElement("div");const e=document.querySelectorAll("input[type=text]"),t=document.querySelectorAll("input[type=tel]");document.querySelectorAll("input[type=mess]");e.forEach(e=>{e.addEventListener("input",()=>{e.classList.contains("promo")?(console.log(e),e.value=e.value.replace(/[^А-я0-9]/g,"")):e.value=e.value.replace(/[^А-я]/gi,"")})}),t.forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^+0-9]/gi,"")})})};var i=()=>{const e=document.getElementById("banner-form"),t=document.getElementById("thanks"),n=document.createElement("div"),o=e.querySelector("input[type=checkbox]"),l=()=>{n.textContent="",o.checked=!1};e.addEventListener("submit",o=>{o.preventDefault();const c=new FormData(e);let s={},a=e.querySelectorAll("input");n.textContent="Загрузка",e.appendChild(n),c.forEach((e,t)=>{s[t]=e}),r(s).then(e=>{if(200!==e.status)throw new Error("status network not 200");console.log(e),t.style.display="block",setTimeout(l,1e3);for(let e=0;e<a.length;e++)a[e].value=""}).catch(e=>{n.textContent="Ошибка",setTimeout(l,3e3),console.error(e)})});const r=e=>fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})};var u=()=>{[document.getElementById("form2"),document.getElementById("form1")].forEach(t=>{let n=t.parentNode.parentNode.parentNode;const o=()=>{l.textContent=r,t.querySelector("input[type=checkbox]").checked=!1,n.style.display="none"};let l=t.querySelector("h4");const r=l.textContent;t.addEventListener("submit",n=>{n.preventDefault(),l.textContent="Загрузка";const r=new FormData(t);let c={},s=t.querySelectorAll("input");r.forEach((e,t)=>{c[t]=e}),e(c).then(e=>{if(200!==e.status)throw new Error("status network not 200");console.log(e),l.textContent="Мы скоро с вами связжемся!";for(let e=0;e<s.length;e++)s[e].value="";setTimeout(o,3e3)}).catch(e=>{l.textContent="Что-то пошло не так...",console.error(e)})})});const e=e=>fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})};var m=()=>{const e=document.getElementById("footer_form"),t=document.getElementById("thanks"),n=document.createElement("div"),o=()=>{n.textContent=""};e.addEventListener("submit",r=>{r.preventDefault();const c=new FormData(e);c.get("club-name");let s={},a=e.querySelectorAll("input");n.textContent="Загрузка",e.appendChild(n),c.forEach((e,t)=>{s[t]=e}),l(s).then(e=>{if(200!==e.status)throw new Error("status network not 200");console.log(e),t.style.display="block",setTimeout(o,1e3);for(let e=0;e<a.length;e++)a[e].value=""}).catch(e=>{n.textContent="Ошибка",setTimeout(o,3e3),console.error(e)})});const l=e=>fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})};var y=()=>{const e=document.getElementById("card_order"),t=document.createElement("div"),n=document.getElementById("thanks"),o=()=>{t.textContent="";let e=document.querySelector("input[type=radio]");e&&(e.checked=!1)};e.addEventListener("submit",r=>{r.preventDefault();const c=new FormData(e);c.get("card-type","form_name");let s={},a=e.querySelectorAll("input");t.textContent="Загрузка",e.appendChild(t),c.forEach((e,t)=>{s[t]=e}),l(s).then(e=>{if(200!==e.status)throw new Error("status network not 200");console.log(e),n.style.display="block",setTimeout(o,1e3);for(let e=0;e<a.length;e++)a[e].value=""}).catch(e=>{t.textContent="Ошибка",setTimeout(o,3e3),console.error(e)})});const l=e=>fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})};var p=()=>{const e=document.querySelector(".gallery-slider"),t=e.parentNode,n=e.querySelectorAll(".slide"),o=t.querySelector(".dots-wrapper");let l,r=0;n.forEach((e,t)=>{e[t]=document.createElement("li"),e[t].classList.add("dot"),e[t]===e[0]&&e[0].classList.add("dot-active"),o.appendChild(e[t])});let c=document.querySelectorAll(".dot");const s=(e,t,n)=>{e[t].classList.remove(n)},a=(e,t,n)=>{e[t].classList.add(n)},d=()=>{s(c,r,"dot-active"),s(n,r,"slide-active"),r++,r>=n.length&&(r=0),a(c,r,"dot-active"),a(n,r,"slide-active")},i=(e=3e3)=>{l=setInterval(d,e)};t.addEventListener("click",e=>{e.preventDefault();let t=e.target;console.log(t),t.matches(".arrow-btn, .dot")&&(s(n,r,"slide-active"),s(c,r,"dot-active"),t.closest("#arrowRight")?r++:t.closest("#arrowLeft")?r--:t.matches(".dot")&&c.forEach((e,n)=>{e===t&&(r=n)}),r>=n.length&&(r=0),r<0&&(r=n.length-1),a(n,r,"slide-active"),a(c,r,"dot-active"))}),t.addEventListener("mouseover",e=>{(e.target.matches(".arrow-btn")||e.target.matches(".dot"))&&clearInterval(l)}),t.addEventListener("mouseout",e=>{(e.target.matches(".arrow-btn")||e.target.matches(".dot"))&&i()}),i()};var f=()=>{const e=document.querySelector(".services-slider"),t=e.parentNode,n=e.querySelectorAll(".slide");let o=0,l=n[0].offsetWidth,r=n[0].offsetHeight;t.style.height=r,t.style.width=5*l;const c=document.getElementById("arrowLeftService");document.getElementById("arrowRightService").addEventListener("click",()=>{o-=l+10,console.log(o),o<-1100?(o=0,e.style.transform=`translateX(${o}px)`):e.style.transform=`translateX(${o}px)`}),c.addEventListener("click",()=>{o+=l+10,console.log(o),o>0?(o=-1100,e.style.transform=`translateX(${o}px)`):e.style.transform=`translateX(${o}px)`})};(()=>{const e=document.querySelector(".club-select"),t=e.querySelector("ul"),n=document.querySelector(".header-main"),o=e.querySelector("p");n.addEventListener("click",e=>{"none"===t.style.display&&e.target===o?t.style.display="block":(t.style.display=e.target===o||e.target.closest(".header-main"))&&(t.style.display="none")})})(),o(),l(),r(),c(),s(),a(),d(),i(),u(),m(),y(),p(),f()}]);