var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in n){var l=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,l.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=l),l("akQCC"),l("cLZ64");var i=l("cLZ64"),o=l("gvHvN");const r=document.querySelector(".film-list"),a=document.querySelector(".header-list--lib__btn-watched"),s=document.querySelector(".header-list--lib__btn-queue"),c=document.querySelector(".clearing-modal"),d=document.querySelector("body"),p=document.querySelector(".btn-close"),u=document.querySelector(".modal");a.addEventListener("click",f),s.addEventListener("click",y),r.addEventListener("click",(function(e){const t=e.target.nodeName;"IMG"!==t&&"P"!==t&&"UL"!==t||(u.addEventListener("click",m),p.addEventListener("click",b))})),f(),console.log(123);let g=0,h=0;function m(e){const t=e.target.nodeName,n=e.target.className,l=e.target.dataset.action;"BUTTON"===t&&"watched"===l&&(g+=1),"BUTTON"===t&&"queue"===l&&(h+=1),"overlay"===n&&(b(),g%2==1&&f(),h%2==1&&y(),g=0,h=0)}function b(){c.innerHTML="",u.classList.add("visibility"),d.style.overflow="visible",u.removeEventListener("click",m)}async function f(){s.style.backgroundColor="transparent",s.style.border="1px solid white",a.style.backgroundColor="rgba(255, 107, 8, 1)",a.style.border="1px solid rgba(255, 107, 8, 1)",r.innerHTML="",i.arrIdCardForWatched.map((e=>{(0,o.getFetchedById)(e).then((e=>{let{poster_path:t,original_title:n,id:l,release_date:i}=e,o="https://image.tmdb.org/t/p/w500";t||(t="/wp-content/uploads/2022/05/coming-soon.jpg",o="https://en9lish.com"),i||(i="N/A");let a=e.genres.map((e=>e.name));0===a.length&&a.push("N/A"),a.length>3&&(a=a.slice(0,2)+", other"),a=a.toString().replaceAll(",",", ");const s=`<article class="box" ">\n            <img class="movie-preview"src="${o}${t}" alt="123" width="336" height="455" data-action="${l}" >\n            <ul class="info-list"data-action="${l}">\n              <li>\n              <p class="info-list__title"data-action="${l}">${n}</p>\n              </li>\n              <li>\n            <p class="info-list__genres"data-action="${l}">${a} | ${i.slice(0,4)}</p></li>\n          </ul>\n                      </article>`;return r.insertAdjacentHTML("beforeend",s)}))}))}async function y(){a.style.backgroundColor="transparent",a.style.border="1px solid white",s.style.backgroundColor="rgba(255, 107, 8, 1)",s.style.border="1px solid rgba(255, 107, 8, 1)",r.innerHTML="",i.arrIdCardForQueue.map((e=>{(0,o.getFetchedById)(e).then((e=>{let{poster_path:t,original_title:n,id:l,release_date:i}=e,o="https://image.tmdb.org/t/p/w500";t||(t="/wp-content/uploads/2022/05/coming-soon.jpg",o="https://en9lish.com"),i||(i="N/A");let a=e.genres.map((e=>e.name));0===a.length&&a.push("N/A"),a.length>3&&(a=a.slice(0,2)+", other"),a=a.toString().replaceAll(",",", ");const s=`<article class="box" ">\n            <img class="movie-preview"src="${o}${t}" alt="123" width="336" height="455" data-action="${l}" >\n            <ul class="info-list"data-action="${l}">\n              <li>\n              <p class="info-list__title"data-action="${l}">${n}</p>\n              </li>\n              <li>\n            <p class="info-list__genres"data-action="${l}">${a} | ${i.slice(0,4)}</p></li>\n          </ul>\n                      </article>`;return r.insertAdjacentHTML("beforeend",s)}))}))}
//# sourceMappingURL=my-lib.93f4d32e.js.map
