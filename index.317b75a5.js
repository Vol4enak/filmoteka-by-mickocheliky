!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},n.parcelRequired7c6=o),o.register("5sC0c",(function(n,r){e(n.exports,"addMurkupOnPage",(function(){return g})),e(n.exports,"paginationOptions",(function(){return v})),e(n.exports,"renderModalInformation",(function(){return _}));var i=o("bpxeT"),a=o("2TvXO"),s=o("1VFfL"),c=o("iXPk2");c=o("iXPk2");o("iRy3t");var u=document.querySelector(".clearing-modal"),l=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],p=document.querySelector(".film-list");console.log(p),console.log(123);document.querySelector("#pagination");var f=new(0,c.PopularMovieFromServer);function h(){return d.apply(this,arguments)}function d(){return d=t(i)(t(a).mark((function e(){var n,r,i=arguments;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:1,f.page=n,t.next=4,f.getPopularMovieFromServer().then((function(t){return t}));case 4:r=t.sent,p.innerHTML="",g(r.results);case 7:case"end":return t.stop()}}),e)}))),d.apply(this,arguments)}function g(t){var e=t.map((function(t){var e=t.id,n=t.poster_path,r=t.title,i=t.genre_ids,o=t.release_date,a='src="https://www.themoviedb.org/t/p/w500/'.concat(n,'"'),s=function(t){var e=[],n=!0,r=!1,i=void 0;try{for(var o,a=function(t,n){var r=n.value;l.map((function(t){r===t.id&&e.push(t.name)}))},s=t[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)a(s,o)}catch(t){r=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return e}(i),c="";return c=1===s.length?s[0]:2===s.length?s[0]+", "+s[1]:3===s.length?s[0]+", "+s[1]+", "+s[2]:s.length>=4?s[0]+", "+s[1]+", Other":"There is no genre",'<li class="film-item">\n    <img width="280" class="film-img" '.concat(n?a:'src="https://media.istockphoto.com/id/984996502/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%BD%D0%B5%D0%B7%D0%B0%D0%B1%D0%B0%D1%80%D0%BE%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B8%D0%B9-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D1%83.jpg?s=612x612&w=0&k=20&c=fWxMbUFQMxaL5_wB6SjZ9LLGnvpkCYAIdpqgde_ieR4="','" alt="').concat(r,'" data-action="').concat(e,'" />\n    <p class="film-name"data-action="').concat(e,'">\n      ').concat(r,' <br />\n      <span class="film-tag" data-action="').concat(e,'">').concat(c," | ").concat(o?o.slice(0,4):"There is no date","</span>\n\n    </p>\n  </li>")})).join("");p.insertAdjacentHTML("beforeend",e)}function m(){return(m=t(i)(t(a).mark((function e(){var n,r;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getPopularMovieFromServer().then((function(t){return t.total_pages}));case 2:n=e.sent,r=v(n),new(t(s))("pagination",r).on("beforeMove",(function(t){h(t.page)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(t){return{totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">:::</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">:::</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">...<span class="tui-ico-ellip"></span></a>'}}}function _(t){var e=t.poster_path,n=t.original_title,r=t.id,i=t.release_date,o=t.vote_average,a=t.vote_count,s=t.popularity,l=t.overview,p="https://image.tmdb.org/t/p/w500";e||(e="/wp-content/uploads/2022/05/coming-soon.jpg",p="https://en9lish.com"),i||(i="N/A"),(0,c.getFetchedById)(r).then((function(t){var i=t.genres.map((function(t){return t.name}));0===i.length&&i.push("N/A"),i=i.slice(0,1);var c=' \n      <img src="'.concat(p).concat(e,'" alt="123" width="240" height="357">\n                <h2 class="mobal__title">').concat(n,'</h2>\n                <div class="helper-in-modal">\n                    <ul class="mobal__list--description">\n                        <li class="mobal-list__item">\n                            <p class="mobal-item__text">Vote / Votes</p>\n                        </li>\n                        <li class="mobal-list__item">\n                            <p class="mobal-item__text"> <span class="module__text-popularity">Popularity</span> </p>\n                        </li>\n                        <li class="mobal-list__item">\n                            <p class="mobal-item__text">Original Title</p>\n                        </li>\n                        <li class="mobal-list__item">\n                            <p class="mobal-item__text">Genre</p>\n                        </li>\n                    </ul>\n                    <ul class="mobal__list--info">\n                        <li class="mobal-list__item">\n                            <p class="mobal-item__text"><span class="module__text-vote">').concat(o,'</span> /\n                                <span class="module__text-votes">').concat(a,'</span>\n                            </p>\n                        </li>\n                        <li class="mobal-list__item">\n                            <p class="mobal-item__text">').concat(s,'</p>\n                        </li>\n                        <li class="mobal-list__item">\n                            <p class="mobal-item__text">').concat(n,'</p>\n                        </li>\n                        <li class="mobal-list__item">\n                            <p class="mobal-item__text">').concat(i,'</p>\n                        </li>\n                    </ul>\n                </div>\n                <p class="mobal__title--about">About</p>\n                <p class="mobal__title--about-text">').concat(l,"</p>\n                ").concat(function(t){var e=t.toString(),n="",r="",i=localStorage.getItem("data-watched"),o=JSON.parse(i),a=localStorage.getItem("data-queue"),s=JSON.parse(a);n=o.includes(e)?"remove from Watched":"add to Watched";r=s.includes(e)?"remove from queue":"add to queue";return'<ul class="modal-btn__list">\n                    <li class="modal-btn__item">\n                        <button type="button" class="modal-btn__watched " data-action="watched" >'.concat(n,'</button>\n                    </li>\n                    <li class="modal-btn__item">\n                        <button type="button" class="modal-btn__queue " data-action="queue" >').concat(r,"</button>\n                    </li>\n                </ul>")}(r));return u.insertAdjacentHTML("beforeend",c)}))}h(),function(){m.apply(this,arguments)}()})),o.register("bpxeT",(function(t,e){"use strict";function n(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function s(t){n(a,i,o,s,c,"next",t)}function c(t){n(a,i,o,s,c,"throw",t)}s(void 0)}))}}})),o.register("2TvXO",(function(t,e){var n=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),a=new L(r||[]);return o._invoke=function(t,e,n){var r=p;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return I()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=B(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?d:f,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p="suspendedStart",f="suspendedYield",h="executing",d="completed",g={};function m(){}function v(){}function _(){}var y={};c(y,o,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(D([])));b&&b!==n&&r.call(b,o)&&(y=b);var w=_.prototype=m.prototype=Object.create(y);function P(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(i,o,a,s){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,p=u.value;return p&&"object"==typeof p&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(p).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function B(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,B(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function D(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:I}}function I(){return{value:e,done:!0}}return v.prototype=_,c(w,"constructor",_),c(_,"constructor",v),v.displayName=c(_,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},P(E.prototype),c(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new E(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(w),c(w,s,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=D,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(M),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;M(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:D(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),o.register("1VFfL",(function(t,e){
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
var n;window,n=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,r,i,o,a=Object.prototype.hasOwnProperty;for(i=1,o=arguments.length;i<o;i+=1)for(r in n=arguments[i])a.call(n,r)&&(t[r]=n[r]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var r=n(2),i=n(17),o=n(6);t.exports=function(t,e,n){r(t)?i(t,e,n):o(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r;for(r in n=n||null,t)if(t.hasOwnProperty(r)&&!1===e.call(n,t[r],r,t))break}},function(t,e,n){"use strict";var r=n(18),i=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&r(n,t),e.hasOwnProperty("static")&&(i(n,e.static),delete e.static),i(n.prototype,e),n}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e,n){var i,o;if(n=n||0,!r(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(o=e.length,i=n;n>=0&&i<o;i+=1)if(e[i]===t)return i;return-1}},function(t,e,n){"use strict";var r=n(29),i=n(30),o=n(5),a={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),i=o(t)?t(e):r(t,e);return n.innerHTML=i,n.firstChild},bind:function(t,e){var n,r=Array.prototype.slice;return t.bind?t.bind.apply(t,r.call(arguments,1)):(n=r.call(arguments,2),function(){return t.apply(e,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};t.exports=a},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var r=n(13),i=n(7),o=n(0),a=n(1),s=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=i({init:function(t,e){this._options=o({},u,e),this._currentPage=0,this._view=new s(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===t;return this._options.centerAlign?r?e-1:e+n:r?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),r=this._getPageIndex(t),i=this._getPageIndex(n),o=this._getEdge(t);return e.leftPageNumber=o.left,e.rightPageNumber=o.right,e.prevMore=r>1,e.nextMore=r<i,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,r,i=this._getLastPage(),o=this._options.visiblePages,a=this._getPageIndex(t);return this._options.centerAlign?(r=Math.floor(o/2),(n=(e=Math.max(t-r,1))+o-1)>i&&(e=Math.max(i-o+1,1),n=i)):(e=(a-1)*o+1,n=a*o,n=Math.min(n,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){a(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),t.exports=l},function(t,e,n){"use strict";var r=n(0),i=n(14),o=n(4),a=n(16),s=n(2),c=n(5),u=n(3),l=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){r(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var r=this._safeEvent(t);this._memorizeContext(n),r.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var r=this;o(t)?(t=t.split(l),u(t,(function(t){r._bindEvent(t,e,n)}))):a(t)&&(n=e,u(t,(function(t,e){r.on(e,t,n)})))},p.prototype.once=function(t,e,n){var r=this;if(a(t))return n=e,void u(t,(function(t,e){r.once(e,t,n)}));this.on(t,(function i(){e.apply(n,arguments),r.off(t,i,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,r=0;if(s(t))for(n=t.length;r<n;r+=1)!0===e(t[r])&&(t.splice(r,1),n-=1,r-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var r=t===n.handler;return r&&e._forgetContext(n.context),r}},p.prototype._matchContext=function(t){var e=this;return function(n){var r=t===n.context;return r&&e._forgetContext(n.context),r}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(r){var i=t===r.handler,o=e===r.context,a=i&&o;return a&&n._forgetContext(r.context),a}},p.prototype._offByEventName=function(t,e){var n=this,r=c(e),i=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);r?n._spliceMatches(e,i):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,r=this;this._indexOfContext(t)<0?u(t,(function(t,e){r.off(e,t)})):o(e)?(n=this._matchContext(t),r._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)})))},p.prototype.off=function(t,e){o(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):a(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,r,i;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),r=0;e[r];){if(!1===(i=e[r]).handler.apply(i.context,n))return!1;r+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var r=n(1),i=n(15);t.exports=function(t){return!r(t)&&!i(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r=0,i=t.length;for(n=n||null;r<i&&!1!==e.call(n,t[r],r,t);r+=1);}},function(t,e,n){"use strict";var r=n(19);t.exports=function(t,e){var n=r(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var r=n(3),i=n(7),o=n(21),a=n(22),s=n(24),c=n(25),u=n(0),l=n(4),p=n(28),f=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},d=["first","prev","next","last"],g=["prev","next"],m=i({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},h,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){r(d,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){r(d,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){r(g,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,r=t.leftPageNumber,i=t.rightPageNumber;for(n=r;n<=i;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==r||t.prevMore||c(e,this._firstItemClassName),n!==i||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();a(e,"click",(function(e){var n,r,i=o(e);s(e),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),t(r,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return r(n,(function(n,r){return!f.isContained(t,n)||(e=r,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=m},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var r=n(4),i=n(3),o=n(23);function a(t,e,n,r){function a(e){n.call(r||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,a):"attachEvent"in t&&t.attachEvent("on"+e,a),function(t,e,n,r){var a=o(t,e),s=!1;i(a,(function(t){return t.handler!==n||(s=!0,!1)})),s||a.push({handler:n,wrappedHandler:r})}(t,e,n,a)}t.exports=function(t,e,n,o){r(e)?i(e.split(/\s+/g),(function(e){a(t,e,n,o)})):i(e,(function(e,r){a(t,r,e,n)}))}},function(t,e,n){"use strict";var r="_feEventKey";t.exports=function(t,e){var n,i=t[r];return i||(i=t[r]={}),(n=i[e])||(n=i[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var r=n(3),i=n(8),o=n(26),a=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),s=t.classList,c=[];s?r(n,(function(e){t.classList.add(e)})):((e=o(t))&&(n=[].concat(e.split(/\s+/),n)),r(n,(function(t){i(t,c)<0&&c.push(t)})),a(t,c))}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t){return t&&t.className?r(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var r=n(2),i=n(1);t.exports=function(t,e){e=(e=r(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var r=n(8),i=n(3),o=n(2),a=n(4),s=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,h=/^["']\w+["']$/,d=/"|'/g,g=/^-?\d+\.?\d*$/,m={if:function(t,e,n){var r=function(t,e){var n=[t],r=[],o=0,a=0;return i(e,(function(t,i){0===t.indexOf("if")?o+=1:"/if"===t?o-=1:o||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),r.push(e.slice(a,i)),a=i+1)})),r.push(e.slice(a)),{exps:n,sourcesInsideIf:r}}(t,e),o=!1,a="";return i(r.exps,(function(t,e){return(o=x(t,n))&&(a=b(r.sourcesInsideIf[e],n)),!o})),a},each:function(t,e,n){var r=x(t,n),a=o(r)?"@index":"@key",c={},u="";return i(r,(function(t,r){c[a]=r,c["@this"]=t,s(n,c),u+=b(e.slice(),n)})),u},with:function(t,e,n){var i=r("as",t),o=t[i+1],a=x(t.slice(0,i),n),c={};return c[o]=a,b(e,s(n,c))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,r,i=[],o=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)r=n.index,i.push(t.slice(o,r)),o=r+n[0].length,n=e.exec(t);return i.push(t.slice(o)),i};function _(t,e){var n,r=e[t];return"true"===t?r=!0:"false"===t?r=!1:h.test(t)?r=t.replace(d,""):u.test(t)?r=_((n=t.split(l))[0],e)[_(n[1],e)]:p.test(t)?r=_((n=t.split(f))[0],e)[n[1]]:g.test(t)&&(r=parseFloat(t)),r}function y(t,e,n){for(var r,i,o,s,c=m[t],u=1,l=2,p=e[l];u&&a(p);)0===p.indexOf(t)?u+=1:0===p.indexOf("/"+t)&&(u-=1,r=l),p=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(i=0,o=r,(s=e.splice(i+1,o-i)).pop(),s),n),e}function x(t,e){var n=_(t[0],e);return n instanceof Function?function(t,e,n){var r=[];return i(e,(function(t){r.push(_(t,n))})),t.apply(null,r)}(n,t.slice(1),e):n}function b(t,e){for(var n,r,i,o=1,s=t[o];a(s);)r=(n=s.split(" "))[0],m[r]?(i=y(r,t.splice(o,t.length-o),e),t=t.concat(i)):t[o]=x(n,e),s=t[o+=2];return t.join("")}t.exports=function(t,e){return b(v(t,c),e)}},function(t,e,n){"use strict";var r=n(1),i=n(31);t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",a=window.localStorage.getItem(o);(r(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(t){return(new Date).getTime()-t>6048e5}(a)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var r=n(6);t.exports=function(t,e){var n=document.createElement("img"),i="";return r(e,(function(t,e){i+="&"+e+"="+t})),i=i.substring(1),n.src=t+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},t.exports=n()})),o.register("iXPk2",(function(n,r){e(n.exports,"PopularMovieFromServer",(function(){return p})),e(n.exports,"getFetchedById",(function(){return f}));var i=o("bpxeT"),a=o("8MBJY"),s=o("a2hTj"),c=o("2TvXO"),u="https://api.themoviedb.org/3",l="bcde96d2248e63a51f520e697b2ad108",p=function(){"use strict";function e(){t(a)(this,e),this.currentPage=1,this.searchQuery=""}return t(s)(e,[{key:"getPopularMovieFromServer",value:function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("197007a676a4d3e84c6bdb6f21b18a1a","&page=").concat(this.page)).then((function(t){return t.json()}))}},{key:"getSubmitMovieFromServer",value:function(){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("197007a676a4d3e84c6bdb6f21b18a1a","&page=").concat(this.page,"&query=").concat(this.searchQuery,"&include_adult=false")).then((function(t){return t.json()}))}},{key:"page",get:function(){return this.currentPage},set:function(t){this.currentPage=t}},{key:"query",get:function(){return this.searchQuery},set:function(t){this.searchQuery=t}}]),e}();function f(t){return h.apply(this,arguments)}function h(){return(h=t(i)(t(c).mark((function e(n){var r,i;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),n=n.toString(),t.next=4,fetch("".concat(u,"/movie/").concat(n,"?api_key=").concat(l,"&language=en-US"));case 4:return r=t.sent,t.next=7,r.json();case 7:return i=t.sent,t.abrupt("return",i);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}})),o.register("8MBJY",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}})),o.register("a2hTj",(function(t,e){"use strict";function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,r){e&&n(t.prototype,e);r&&n(t,r);return t}})),o.register("iRy3t",(function(t,e){})),o.register("8hTGM",(function(t,e){var n=o("5sC0c"),r=o("iXPk2"),i=o("8pdLi"),a=document.querySelector(".film-list"),s=document.querySelector(".modal"),c=document.querySelector(".clearing-modal"),u=document.querySelector(".btn-close"),l=document.querySelector("body"),p=document.querySelector(".modal-window");function f(){c.innerHTML="",s.classList.add("visibility"),l.style.overflow="visible",p.style.opacity="0",s.removeEventListener("click",h),localStorage.setItem("data-watched",JSON.stringify(i.arrIdCardForWatched)),localStorage.setItem("data-queue",JSON.stringify(i.arrIdCardForQueue))}function h(t){var e=t.target.nodeName,n=t.target.className,r=t.target.dataset.action,o=t.target.textContent,a=document.querySelector(".modal-btn__queue"),s=document.querySelector(".modal-btn__watched");"overlay"===n&&f(),"BUTTON"===e&&"watched"===r&&(0,i.btnWatched)(s,o),"BUTTON"===e&&"queue"===r&&(0,i.btnQueue)(a,o)}a.addEventListener("click",(function(t){var e=t.target.nodeName,i=t.target.dataset.action;o=i,void localStorage.setItem("data",o),p.style.opacity="1",("IMG"===e||"P"===e||"SPAN"===e)&&((0,r.getFetchedById)(i).then((function(t){(0,n.renderModalInformation)(t)})),s.addEventListener("click",h),s.classList.remove("visibility"),l.style.overflow="hidden",u.addEventListener("click",f));var o}))})),o.register("8pdLi",(function(t,n){e(t.exports,"arrIdCardForWatched",(function(){return s})),e(t.exports,"arrIdCardForQueue",(function(){return c})),e(t.exports,"btnWatched",(function(){return u})),e(t.exports,"btnQueue",(function(){return l}));var r,i,o=(r=localStorage.getItem("data-watched"),parseItemWatched=JSON.parse(r)),a=(i=localStorage.getItem("data-queue"),parseItemQueue=JSON.parse(i)),s=[],c=[];function u(t,e){var n=localStorage.getItem("data");if("remove from Watched"!==e)t.textContent="remove from Watched",t.style.padding="6px",s.push(n);else{if(1===s.length)return s=[],void(t.textContent="add to Watched");for(var r=0;r<o.length;r++)o[r]===n&&(o.splice(r,1),t.textContent="Add to Watched")}}function l(t,e){var n=localStorage.getItem("data");if("remove from queue"!==e)t.textContent="remove from queue",t.style.padding="6px",c.push(n);else{if(1===c.length)return c=[],t.textContent="add to queue",t.style.paddingRight="16px",void(t.style.paddingLeft="16px");for(var r=0;r<a.length;r++)a[r]===n&&(a.splice(r,1),t.textContent="Add to queue")}}o&&(s=o),a&&(c=a)}))}();
//# sourceMappingURL=index.317b75a5.js.map
