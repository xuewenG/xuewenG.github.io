"use strict";function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,t){if(r){if("string"==typeof r)return _arrayLikeToArray(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Map"===(e="Object"===e&&r.constructor?r.constructor.name:e)||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(r,t):void 0}}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _arrayLikeToArray(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=r[e];return o}firebase.initializeApp({apiKey:CONFIG.firestore.apiKey,projectId:CONFIG.firestore.projectId}),function(){function n(t,e){return t.get().then(function(r){r=r.exists?r.data().count:0;return e&&t.set({count:++r}),r})}function a(t){return function(r){t.innerText=r}}document.addEventListener("page:loaded",function(){var r,t,e,o=firebase.firestore().collection(CONFIG.firestore.collection);CONFIG.page.isPost?(r=document.querySelector(".post-title").textContent.trim(),t=o.doc(r),e=CONFIG.hostname===location.hostname,localStorage.getItem(r)?e=!1:localStorage.setItem(r,!0),n(t,e).then(a(document.querySelector(".firestore-visitors-count")))):CONFIG.page.isHome&&(e=_toConsumableArray(document.querySelectorAll(".post-title")).map(function(r){r=r.textContent.trim(),r=o.doc(r);return n(r)}),Promise.all(e).then(function(r){var e=document.querySelectorAll(".firestore-visitors-count");r.forEach(function(r,t){a(e[t])(r)})}))})}();