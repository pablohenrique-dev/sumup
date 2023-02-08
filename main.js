/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/faq.js":
/*!***************************!*\
  !*** ./js/modules/faq.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ faq)\n/* harmony export */ });\nfunction faq() {\n  var perguntas = document.querySelectorAll('.faq button');\n  var perguntasContainer = document.querySelectorAll('.faq div');\n  function ativarPergunta(pergunta) {\n    var elementoPai = pergunta.currentTarget.parentElement.parentElement;\n    perguntasContainer.forEach(function (perguntaContainer) {\n      perguntaContainer.classList.remove('ativo');\n      elementoPai.classList.add('ativo');\n    });\n  }\n  perguntas.forEach(function (pergunta) {\n    pergunta.addEventListener('click', ativarPergunta);\n  });\n}\n\n//# sourceURL=webpack://sumup/./js/modules/faq.js?");

/***/ }),

/***/ "./js/modules/menuMobile.js":
/*!**********************************!*\
  !*** ./js/modules/menuMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\nfunction menuMobile() {\n  var headerContainer = document.querySelector('header');\n  var menuHamburguerBtn = document.querySelector('#nav button');\n  var eventos = ['click', 'touchstart'];\n  function toggleMenu(e) {\n    if (e.type === 'touchstart') e.preventDefault();\n    headerContainer.classList.toggle('ativo');\n    var active = headerContainer.classList.contains('ativo');\n    e.currentTarget.setAttribute('aria-expanded', active);\n    if (active) e.currentTarget.setAttribute('aria-label', 'Fechar Menu');\n  }\n  if (menuHamburguerBtn) {\n    eventos.forEach(function (e) {\n      menuHamburguerBtn.addEventListener(e, toggleMenu);\n    });\n  }\n}\n\n//# sourceURL=webpack://sumup/./js/modules/menuMobile.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./js/modules/menuMobile.js\");\n/* harmony import */ var _modules_faq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/faq.js */ \"./js/modules/faq.js\");\n\n\n(0,_modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_faq_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://sumup/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;