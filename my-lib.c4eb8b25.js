var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in n){var l=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,l.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=l),l("hZZWd"),l("akQCC"),l("cLZ64");var i=l("cLZ64"),a=l("gvHvN");const r=document.querySelector(".film-list-home"),o=document.querySelector(".header-list--lib__btn-watched"),s=document.querySelector(".header-list--lib__btn-queue"),c=document.querySelector(".clearing-modal"),d=document.querySelector("body"),u=document.querySelector(".btn-close"),p=document.querySelector(".modal");o.addEventListener("click",b),s.addEventListener("click",y),r.addEventListener("click",(function(e){const t=e.target.nodeName;"IMG"!==t&&"P"!==t&&"SPAN"!==t||(p.addEventListener("click",h),u.addEventListener("click",f))})),b();let g=0,m=0;function h(e){const t=e.target.nodeName,n=e.target.className,l=e.target.dataset.action;"BUTTON"===t&&"watched"===l&&(g+=1),"BUTTON"===t&&"queue"===l&&(m+=1),"overlay"===n&&(f(),g%2==1&&b(),m%2==1&&y(),g=0,m=0)}function f(){c.innerHTML="",p.classList.add("visibility"),d.style.overflow="visible",p.removeEventListener("click",h)}function b(){s.style.backgroundColor="transparent",s.style.border="1px solid white",o.style.backgroundColor="rgba(255, 107, 8, 1)",o.style.border="1px solid rgba(255, 107, 8, 1)",r.innerHTML="",i.arrIdCardForWatched.map((e=>{(0,a.getFetchedById)(e).then((e=>{let{poster_path:t,original_title:n,id:l,release_date:i}=e,a="https://image.tmdb.org/t/p/w500";t||(t="/wp-content/uploads/2022/05/coming-soon.jpg",a="https://en9lish.com"),i||(i="N/A");let o=e.genres.map((e=>e.name));0===o.length&&o.push("N/A"),o.length>3&&(o=o.slice(0,2)+", other"),o=o.toString().replaceAll(",",", ");const s=`<li class="film-item" >\n            <img class="film-img" src="${a}${t}" alt="123" width="336" height="455" data-action="${l}" >\n            <ul class="info-list"data-action="${l}">\n              <li>\n              <p class="film-name"data-action="${l}">${n}</p>\n              </li>\n              <li>\n            <p class="film-tag" data-action="${l}">${o} | ${i.slice(0,4)}</p></li>\n          </ul>\n                      </li>`;return r.insertAdjacentHTML("beforeend",s)}))}))}function y(){o.style.backgroundColor="transparent",o.style.border="1px solid white",s.style.backgroundColor="rgba(255, 107, 8, 1)",s.style.border="1px solid rgba(255, 107, 8, 1)",r.innerHTML="",i.arrIdCardForQueue.map((e=>{(0,a.getFetchedById)(e).then((e=>{let{poster_path:t,original_title:n,id:l,release_date:i}=e,a="https://image.tmdb.org/t/p/w500";t||(t="/wp-content/uploads/2022/05/coming-soon.jpg",a="https://en9lish.com"),i||(i="N/A");let o=e.genres.map((e=>e.name));0===o.length&&o.push("N/A"),o.length>3&&(o=o.slice(0,2)+", other"),o=o.toString().replaceAll(",",", ");const s=`<li class="film-item" >\n            <img class="film-img" src="${a}${t}" alt="123" width="336" height="455" data-action="${l}" >\n            <ul class="info-list"data-action="${l}">\n              <li>\n              <p class="film-name"data-action="${l}">${n}</p>\n              </li>\n              <li>\n            <p class="film-tag" data-action="${l}">${o} | ${i.slice(0,4)}</p></li>\n          </ul>\n                      </li>`;return r.insertAdjacentHTML("beforeend",s)}))}))}l("eMCrL"),l("bMSI7"),l("7ZPB5");
//# sourceMappingURL=my-lib.c4eb8b25.js.map
