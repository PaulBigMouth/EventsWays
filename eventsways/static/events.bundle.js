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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/events/events.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/events/events.js":
/*!*********************************!*\
  !*** ./src/js/events/events.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nconst eventsFilters = document.querySelector(\".filters\");\r\nconst eventsFiltersInner = document.querySelector(\".filters-inner\");\r\nconst html = document.querySelector('html');\r\n\r\nconst eventsFiltersBtn = document.querySelector(\".events-filters-btn button\");\r\n\r\nconst filterObject = {\r\n    flag: false,\r\n    changeFlag: function () {\r\n        this.flag = !this.flag;\r\n    },\r\n    openFilter() {\r\n        if (!this.flag) {\r\n            eventsFilters.style.display = \"block\";\r\n            setTimeout(() => {\r\n                eventsFiltersInner.style.left = 0;\r\n                document.querySelector(\"#overlay\").style.display = \"block\";\r\n                document.querySelector(\".filters-close i\").style.display = \"block\";\r\n            }, 100);\r\n            this.changeFlag();\r\n        } else {\r\n            eventsFiltersInner.style.left = -500 + \"px\";\r\n            document.querySelector(\"#overlay\").style.display = \"none\";\r\n            this.changeFlag();\r\n        }\r\n    }\r\n};\r\n\r\nconst closeElements = [\r\n    document.querySelector(\"#overlay\"),\r\n    document.querySelector(\".filters-close i\"),\r\n    eventsFiltersBtn\r\n];\r\n\r\ncloseElements.forEach(elem => {\r\n    elem.addEventListener(\"click\", () => {\r\n        filterObject.openFilter();\r\n    });\r\n});\r\n\r\nconst mainEventsUl = document.querySelector('.main-event-ul');\r\nconst eventItem = document.querySelectorAll('.event-item');\r\nconst eventItemTitle = document.querySelectorAll('.event-item-title');\r\nconst eventItemDescription = document.querySelectorAll('.event-item-description');\r\nconst eventItemImage = document.querySelectorAll('.event-img')\r\nconst mapBlock = document.querySelector('.mapbox');\r\n\r\n\r\nconst viewEvents = {\r\n\r\n    btn: [document.querySelector('#grid-events-btn'), document.querySelector('#list-events-btn'), document.querySelector('#map-events-btn')]\r\n\r\n}\r\nviewEvents.btn.forEach((elem, index) => {\r\n    elem.addEventListener('click', () => {\r\n        const flag = +elem.getAttribute('data-flag');\r\n        elem.disabled = true;\r\n        elem.className = 'active-btn';\r\n\r\n        viewEvents.btn.map((elem, index) => {\r\n            if (index !== flag) {\r\n                elem.disabled = false;\r\n                elem.className = ''\r\n            }\r\n        })\r\n        if (flag === 2) {\r\n            mapBlock.classList.add('mapActive');\r\n            mapBlock.classList.remove('mapOff');\r\n            mainEventsUl.style.display = 'none';\r\n\r\n        } else {\r\n            mapBlock.classList.remove('mapActive');\r\n            mapBlock.classList.add('mapOff')\r\n            mainEventsUl.style.display = \"grid\"\r\n        }\r\n\r\n        if (flag === 0) {\r\n            mainEventsUl.classList.add('all-events-list');\r\n            mainEventsUl.classList.remove('list-events-list');\r\n            eventItem.forEach((elem) => {\r\n                elem.classList.remove('event-item__list')\r\n            })\r\n            eventItemTitle.forEach((elem) => {\r\n                elem.classList.remove('event-item-title--list')\r\n            })\r\n            eventItemDescription.forEach((elem) => {\r\n                elem.classList.remove('event-item-description__list')\r\n\r\n            })\r\n            eventItemImage.forEach((elem) => {\r\n                elem.classList.remove('event-img__list')\r\n            })\r\n        }\r\n        if (flag === 1) {\r\n            mainEventsUl.classList.add('list-events-list');\r\n            mainEventsUl.classList.remove('all-events-list');\r\n            eventItem.forEach((elem) => {\r\n                elem.classList.add('event-item__list')\r\n            })\r\n            eventItemTitle.forEach((elem) => {\r\n                elem.classList.add('event-item-title--list')\r\n            })\r\n            eventItemDescription.forEach((elem) => {\r\n                elem.classList.add('event-item-description__list')\r\n\r\n            })\r\n            eventItemImage.forEach((elem) => {\r\n                elem.classList.add('event-img__list')\r\n            })\r\n        }\r\n\r\n    })\r\n})\r\n\n\n//# sourceURL=webpack:///./src/js/events/events.js?");

/***/ })

/******/ });