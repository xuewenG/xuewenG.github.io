"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _createForOfIteratorHelper(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,t=function(){};return{s:t,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){i=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}document.addEventListener("DOMContentLoaded",function(){var o,a,i,y,p,m,r,t,e,n;CONFIG.path?(o=!1,i=document.querySelector(".search-input"),y=function(e,a){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],c=[],l=new Set;return e.forEach(function(e){var t;CONFIG.localsearch.unescape&&((t=document.createElement("div")).innerText=e,e=t.innerHTML);var r=e.length;if(0!==r){var n,o=0;for(i||(a=a.toLowerCase(),e=e.toLowerCase());-1<(n=a.indexOf(e,o));)c.push({position:n,word:e}),l.add(e),o=n+r}}),c.sort(function(e,t){return e.position!==t.position?e.position-t.position:t.word.length-e.word.length}),[c,l]},p=function(e,t,r){for(var n=r[0],o=n.position,a=n.word,i=[],c=new Set;o+a.length<=t&&0!==r.length;){c.add(a),i.push({position:o,length:a.length});var l=o+a.length;for(r.shift();0!==r.length&&(o=(n=r[0]).position,a=n.word,o<l);)r.shift()}return{hits:i,start:e,end:t,count:c.size}},m=function(e,t){var r,n="",o=t.start,a=_createForOfIteratorHelper(t.hits);try{for(a.s();!(r=a.n()).done;){var i=r.value,c=i.position,l=i.length;n+=e.substring(o,c),o=c+l,n+='<mark class="search-keyword">'.concat(e.substr(c,l),"</mark>")}}catch(e){a.e(e)}finally{a.f()}return n+=e.substring(o,t.end)},r=function(){var e,t,r,f,h,n;o&&(n=(e=i.value.trim().toLowerCase()).split(/[-\s]+/),t=document.querySelector(".search-result-container"),r=[],0<e.length&&(f=n,h=[],a.forEach(function(e){var t=e.title,r=e.content,n=e.url,o=_slicedToArray(y(f,t),2),a=o[0],i=o[1],e=_slicedToArray(y(f,r),2),c=e[0],o=e[1],e=new Set([].concat(_toConsumableArray(i),_toConsumableArray(o))).size,i=a.length+c.length;if(0!==i){o=[];0!==a.length&&o.push(p(0,t.length,a));for(var l=[];0!==c.length;){var u=c[0].position,s=Math.max(0,u-20),u=Math.min(r.length,u+80);l.push(p(s,u,c))}l.sort(function(e,t){return e.count!==t.count?t.count-e.count:e.hits.length!==t.hits.length?t.hits.length-e.hits.length:e.start-t.start});a=parseInt(CONFIG.localsearch.top_n_per_article,10);0<=a&&(l=l.slice(0,a));var d="";(n=new URL(n,location.origin)).searchParams.append("highlight",f.join(" ")),0!==o.length?d+='<li><a href="'.concat(n.href,'" class="search-result-title">').concat(m(t,o[0]),"</a>"):d+='<li><a href="'.concat(n.href,'" class="search-result-title">').concat(t,"</a>"),l.forEach(function(e){d+='<a href="'.concat(n.href,'"><p class="search-result">').concat(m(r,e),"...</p></a>")}),d+="</li>",h.push({item:d,id:h.length,hitCount:i,includedCount:e})}}),r=h),1===n.length&&""===n[0]?(t.classList.add("no-result"),t.innerHTML='<div class="search-result-icon"><i class="fa fa-search fa-5x"></i></div>'):0===r.length?(t.classList.add("no-result"),t.innerHTML='<div class="search-result-icon"><i class="far fa-frown fa-5x"></i></div>'):(r.sort(function(e,t){return e.includedCount!==t.includedCount?t.includedCount-e.includedCount:e.hitCount!==t.hitCount?t.hitCount-e.hitCount:t.id-e.id}),n=CONFIG.i18n.hits.replace(/\$\{hits}/,r.length),t.classList.remove("no-result"),t.innerHTML='<div class="search-stats">'.concat(n,'</div>\n        <hr>\n        <ul class="search-result-list">').concat(r.map(function(e){return e.item}).join(""),"</ul>"),"object"===("undefined"==typeof pjax?"undefined":_typeof(pjax))&&pjax.refresh(t)))},t=function(){var t=!CONFIG.path.endsWith("json");fetch(CONFIG.path).then(function(e){return e.text()}).then(function(e){o=!0,a=(a=t?_toConsumableArray((new DOMParser).parseFromString(e,"text/xml").querySelectorAll("entry")).map(function(e){return{title:e.querySelector("title").textContent,content:e.querySelector("content").textContent,url:e.querySelector("url").textContent}}):JSON.parse(e)).filter(function(e){return e.title}).map(function(e){return e.title=e.title.trim(),e.content=e.content?e.content.trim().replace(/<[^>]+>/g,""):"",e.url=decodeURIComponent(e.url).replace(/\/{2,}/g,"/"),e}),r()})},(e=function(){var e=new URL(location.href).searchParams.get("highlight"),r=e?e.split(" "):[],e=document.querySelector(".post-body");if(r.length&&e){for(var t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null),n=[];t.nextNode();)t.currentNode.parentNode.matches("button, select, textarea")||n.push(t.currentNode);n.forEach(function(e){var t=_slicedToArray(y(r,e.nodeValue),1)[0];t.length&&function(t,e,r){var n,o=t.nodeValue,a=e.start,i=[],c=_createForOfIteratorHelper(e.hits);try{for(c.s();!(n=c.n()).done;){var l=n.value,u=l.position,s=l.length,d=document.createTextNode(o.substring(a,u)),a=u+s,f=document.createElement("mark");f.className=r,f.appendChild(document.createTextNode(o.substr(u,s))),i.push(d,f)}}catch(e){c.e(e)}finally{c.f()}t.nodeValue=o.substring(a,e.end),i.forEach(function(e){t.parentNode.insertBefore(e,t)})}(e,p(0,e.nodeValue.length,t),"search-keyword")})}})(),CONFIG.localsearch.preload&&t(),"auto"===CONFIG.localsearch.trigger?i.addEventListener("input",r):(document.querySelector(".search-icon").addEventListener("click",r),i.addEventListener("keypress",function(e){"Enter"===e.key&&r()})),document.querySelectorAll(".popup-trigger").forEach(function(e){e.addEventListener("click",function(){document.body.classList.add("search-active"),setTimeout(function(){return i.focus()},500),o||t()})}),n=function(){document.body.classList.remove("search-active")},document.querySelector(".search-pop-overlay").addEventListener("click",function(e){e.target===document.querySelector(".search-pop-overlay")&&n()}),document.querySelector(".popup-btn-close").addEventListener("click",n),document.addEventListener("pjax:success",function(){e(),n()}),window.addEventListener("keyup",function(e){"Escape"===e.key&&n()})):console.warn("`hexo-generator-searchdb` plugin is not installed!")});