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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contact.js */ \"./src/pages/contact.js\");\n/* harmony import */ var _pages_events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/events.js */ \"./src/pages/events.js\");\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav.js */ \"./src/nav.js\");\n// Variables to be passed into each pages render function.\nlet title = document.getElementById(\"title\")\nlet content = document.querySelector(\".main\")\n// title.textContent = \"dsdsasda\"\n\n// Import the seperate pages Js files.\n;\n\n\n\n// Nav and page switching handler\n\n\n// Run NavGen and set nav to the object it returns\nconst nav = (0,_nav_js__WEBPACK_IMPORTED_MODULE_3__.navGen)();\n\n// Home is the default so automatically render it\nnav.navHandler(_pages_home_js__WEBPACK_IMPORTED_MODULE_0__.homeSet, content, title, nav.home)\n\n// Event Listeners for each of the nav buttons\nnav.contact.addEventListener(\"click\", () => {\n    nav.navHandler(_pages_contact_js__WEBPACK_IMPORTED_MODULE_1__.conSet, content, title, nav.contact)\n})\n\nnav.home.addEventListener(\"click\", () => {\n    console.log(\"REGI\")\n    nav.navHandler(_pages_home_js__WEBPACK_IMPORTED_MODULE_0__.homeSet, content, title, nav.home)\n})\n\nnav.events.addEventListener(\"click\", () => {\n    nav.navHandler(_pages_events_js__WEBPACK_IMPORTED_MODULE_2__.eventSet, content, title, nav.events)\n})\n\n\n\n// nav.navHandler(conSet, content, title, nav.contact)\n\n// Automatically start the homereturn function since that is the landng page.\n// homeSet(content, title);\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navGen\": () => (/* binding */ navGen)\n/* harmony export */ });\nlet navGen = () => {\n    let linkCon = document.querySelector(\".links\")\n    let home = document.createElement(\"a\")\n    let contact = document.createElement(\"a\")\n    let events = document.createElement(\"a\")\n    home.textContent = \"home\"\n    contact.textContent = \"contact\"\n    events.textContent = \"events\"\n    linkCon.appendChild(home)\n    linkCon.appendChild(contact)\n    linkCon.appendChild(events)\n    // Function for changing active page\n    let navHandler = (func, content, title, item) => {\n        func(content, title);\n        let links = document.querySelectorAll(\".links a\")\n        console.log(links)\n        links.forEach(child => {\n            child.classList.remove(\"active\")\n        })\n        item.classList.add(\"active\")\n    }\n    return {home, contact, events, navHandler}\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/nav.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conSet\": () => (/* binding */ conSet)\n/* harmony export */ });\nconst conSet = (element, title) => {\n    title.textContent = \"Contact\"\n    element.innerHTML = `\n    <div class=\"contactcard\">\n    <h3>For Questions and Concerns</h3>\n    <b>Email:</b><a> nully@null.cafe</a> <br>\n    <b>Phone:</b><a> (123)-122-1237</a> <br>\n    <b>Nanotech BrainComID:</b><a> X55-17181-A18292-JDJ887</a>\n    </div>\n    `\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/events.js":
/*!*****************************!*\
  !*** ./src/pages/events.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventSet\": () => (/* binding */ eventSet)\n/* harmony export */ });\nconst eventSet = (element, title) => {\n    title.textContent = \"Events\"\n    element.innerHTML = `\n    <div id=\"events\">\n    <div class=\"event\">\n            <img src=\"./assets/rave.png\">\n            <b>PsychaRave</b><br>\n            <i>Monday @ 11pm</i>\n            <p>Come to the third annual PsychaRave, an insane party to be enjoyed by all</p>\n        </div>\n        <div class=\"event\">\n            <img src=\"./assets/drinks.png\">\n            <b>Oldies Happy Hour</b><br>\n            <i>Wednesday @ 5pm</i>\n            <p>Celebrate the the classic beverages from the 2010s</p>\n        </div>\n        <div class=\"event\">\n            <img src=\"./assets/ipaddr.png\">\n            <b>Hacking Jam</b><br>\n            <i>Saturday @ 1am</i>\n            <p>Help the Null Cafe take down our coorporate enemies! First person to breach Starbucks gets 500 credits!</p>\n        </div>\n    </div>\n    `\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/pages/events.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeSet\": () => (/* binding */ homeSet)\n/* harmony export */ });\nconst homeSet = (element, title) => {\n    title.textContent = \"Welcome To The Null Cafe\"\n    element.innerHTML = `\n\t\t\t<h1>About Us</h1>\n\t\t\t<p>We are a group of cybernetically enhanced bartenders ready to provide the most\n\t\t\t\tunique and memorable experience you can think of. Our story begins in 2089 following\n\t\t\t\tthe Second Great Depression, we strived to create a sanctuary for all to escape the montony of life.\n\t\t\t\tWe hope to see you soon!\n\t\t\t</p>\n\t\t\t<h1>What we offer</h1>\n\t\t\t<p>Our fine establishment has a 3 meter long bar staffed by 2 of our finest cyborg bartenders. \n\t\t\t\tHowever, we also offer several private rooms for our finest patrons. On weekends, we have a live \n\t\t\t\tperformance by the local DJ's, and a late night rave for those who can stand crowds.\n\t\t\t</p>\n\t\t\t<h1>Lorem</h1>\n\t\t\t<p>\n\t\t\t\tLorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis itaque a at quia nesciunt, necessitatibus labore veniam nihil qui sunt beatae neque quibusdam ipsa reprehenderit quae, eligendi iusto provident voluptatibus?\n\t\t\t</p>\n\t\t\t<h1>What are you waiting for?</h1>\n\t\t\t<div id=\"findus\">\n\t\t\t\t<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.60448274312418!2d139.77190313482868!3d35.669945687534636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be00bb03549%3A0x7a5e1ef1474858ce!2sByakudan!5e0!3m2!1sen!2sus!4v1622576715663!5m2!1sen!2sus\" width=\"400\" height=\"300\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>\n\t\t\t\t<p>\n\t\t\t\t\t<b>Come join us and make some memories!</b>\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\n\t\t\t\t\t<i class=\"fas fa-map-marker-alt\"></i> <br>\n\t\t\t\t\t1 Chome-5-4 Tsukiji, Chuo City, Tokyo 104-0045, Japan\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\n\t\t\t\t\t<i class=\"far fa-clock\"></i> <br>\n\t\t\t\t\tMon-Fri: 8am-4am <br>\n\t\t\t\t\tOpen all day Sun/Sat\n\t\t\t\t</p>\n\t\t\t</div>\n    `\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/pages/home.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;