/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/about/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/about/about.js":
/*!*******************************!*\
  !*** ./src/js/about/about.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aboutOverlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutOverlay */ \"./src/js/about/aboutOverlay.js\");\n/* harmony import */ var _utilts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilts */ \"./src/js/utilts.js\");\n\r\n\r\n\r\n\r\nconst descriptionBtn = document.querySelector('.description-btn')\r\nconst mapBtn = document.querySelector('.map-btn');\r\n\r\nconst addressLink = document.querySelector('.form-event-address')\r\n\r\nlet description = new _utilts__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.querySelector('.form-event-description-text'), false, document.querySelector('.description-btn i'), document.querySelector('.form-event-description-text div'))\r\n\r\n\r\ndescriptionBtn.addEventListener('click', () => {\r\n    description.heightChangeHandler()\r\n})\r\n\r\n\r\nlet mapDetails = new _utilts__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.querySelector('.form-event-mapbox'), false, document.querySelector('.map-btn i'), document.querySelector('#form-event-map'))\r\n\r\nmapBtn.addEventListener('click', () => {\r\n    mapDetails.heightChangeHandler()\r\n})\r\n\r\naddressLink.addEventListener('click', function () {\r\n    this.preventDefault\r\n    document.querySelector('#form-event-map').scrollIntoView({ block: \"start\", behavior: \"smooth\" })\r\n    setTimeout(() => {\r\n        if (!mapDetails.isOpen()) {\r\n            mapDetails.heightChangeHandler()\r\n        }\r\n    }, 300)\r\n})\r\n\r\n\r\n\r\n\r\nlet overviewOverlay = new _aboutOverlay__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.querySelector('#overviewOverlay'), ['choiceOverlayOpen', 'choiceOpen'], false)\r\nlet overviewOverlayBtns = [document.querySelector('.choiceCloseIcon i'), document.querySelector('.choiceOverlayEvent'), document.querySelector('.choiceButton button')]\r\n\r\n\r\noverviewOverlayBtns.forEach((elem) => {\r\n    elem.addEventListener('click', () => {\r\n        overviewOverlay.animateOverlay()\r\n    })\r\n})\r\ndocument.querySelector('.choiceOverlayEvent').addEventListener('click', function () {\r\n    console.log(this)\r\n})\r\n\r\n\r\nwindow.addEventListener('load', () => {\r\n    setTimeout(() => {\r\n        document.querySelector('.bottom-span').style.animationName = 'aboutBannerBottomSpan';\r\n        document.querySelector('.right-span').style.animationName = 'aboutBannerRightSpan';\r\n        document.querySelector('.top-span').style.animationName = 'aboutBannerTopSpan';\r\n        document.querySelector('.left-span').style.animationName = 'aboutBannerLeftSpan';\r\n        document.querySelector('.overview-banner-inner h1').style.animationName = 'aboutBannerBackground';\r\n    }, 2000);\r\n})\r\nconst overviewSocialIcons = document.querySelectorAll('.overview-social-item i')\r\nfunction overviewRemoveClass() {\r\n    return overviewSocialIcons.forEach(elem => {\r\n        elem.classList.remove('fa-3x');\r\n        elem.classList.add('fa-2x')\r\n    })\r\n}\r\nif (document.querySelector('html').clientWidth < 500) {\r\n    overviewRemoveClass()\r\n}\r\n\r\n\r\n//Практичность\r\n//Надежность\r\n//Активность\r\n//Пассивность\r\n//\n\n//# sourceURL=webpack:///./src/js/about/about.js?");

/***/ }),

/***/ "./src/js/about/aboutOverlay.js":
/*!**************************************!*\
  !*** ./src/js/about/aboutOverlay.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Overlay; });\nclass Overlay {\r\n    constructor(overlay, classes, flag) {\r\n        this.overlay = overlay;\r\n        this.classes = classes;\r\n        this.flag = flag\r\n    }\r\n\r\n    animateOverlay() {\r\n        if (!this.flag) {\r\n            this.overlay.classList.add(this.classes[0])\r\n            setTimeout(() => {\r\n                this.overlay.classList.add(this.classes[1])\r\n            }, 100)\r\n        } else {\r\n            this.overlay.classList.remove(this.classes[1])\r\n            setTimeout(() => {\r\n                this.overlay.classList.remove(this.classes[0])\r\n            }, 100)\r\n        }\r\n        this.changeFlag()\r\n    }\r\n    changeFlag() {\r\n        this.flag = !this.flag\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/about/aboutOverlay.js?");

/***/ }),

/***/ "./src/js/utilts.js":
/*!**************************!*\
  !*** ./src/js/utilts.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventDetails; });\nclass EventDetails {\r\n    constructor(elem, flag, icon, elem2, closeClassName = 'fas fa-angle-down', openClassName = 'fas fa-angle-up') {\r\n        this.name = elem;\r\n        this.flag = flag;\r\n        this.icon = icon;\r\n        this.closeClassName = closeClassName\r\n        this.openClassName = openClassName;\r\n        this.elem2 = elem2;\r\n    }\r\n\r\n\r\n    heightChangeHandler() {\r\n        if (!this.flag) {\r\n            this.name.style.height = this.heigthFinding();\r\n            this.icon.className = this.openClassName;\r\n            this.name.style.opacity = 1;\r\n        } else {\r\n            this.name.style.height = 0;\r\n            this.icon.className = this.closeClassName;\r\n            this.name.style.opacity = 0\r\n        }\r\n        this.changeFlag()\r\n    }\r\n    changeFlag() {\r\n        this.flag = !this.flag;\r\n    }\r\n    heigthFinding() {\r\n        return this.elem2.offsetHeight + 2 + 'px';\r\n    }\r\n    isOpen() {\r\n        return this.flag;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/utilts.js?");

/***/ })

/******/ });