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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/createEvents/createEvents.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/createEvents/createEvents.js":
/*!*********************************************!*\
  !*** ./src/js/createEvents/createEvents.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nmapboxgl.accessToken =\r\n    \"pk.eyJ1IjoicGF1bGJpZ21vdXRoIiwiYSI6ImNrNm83cTc0ZTBzNnMzbGx5YWdlNjFwOWwifQ.5V5xu7ylKhZeABTVBfwEKQ\";\r\n\r\n\r\nlet map = new mapboxgl.Map({\r\n    container: \"create-event-map\",\r\n    style: \"mapbox://styles/mapbox/streets-v9\",\r\n    zoom: 5,\r\n    center: [27.586669921875, 53.93021986394],\r\n    pitch: 45,\r\n    bearing: 17.6,\r\n    trackResize: true\r\n})\r\n\r\nlet nav = new mapboxgl.NavigationControl({\r\n    showCompass: true,\r\n    showZoom: true\r\n});\r\n\r\nmap.addControl(nav, \"bottom-right\");\r\n\r\nlet geojson = {\r\n    type: \"FeatureCollection\",\r\n    features: [\r\n\r\n    ]\r\n}\r\n\r\n\r\n\r\nmap.on('click', (e) => {\r\n    if (document.querySelectorAll('.marker').length) {\r\n        document.querySelector('.marker').remove()\r\n    }\r\n    console.log(e.lngLat.toArray())\r\n    const geojson = {\r\n        type: \"FeatureCollection\",\r\n        features: [\r\n            {\r\n                type: \"Feature\",\r\n                geometry: {\r\n                    type: \"Point\",\r\n                    coordinates: e.lngLat.toArray()\r\n                },\r\n                properties: {\r\n\r\n                }\r\n            }\r\n        ]\r\n    }\r\n    //const input = document.querySelector('input');\r\n    //input.value = e.lngLat.toArray()[0]\r\n    var el = document.createElement(\"div\");\r\n    el.className = \"marker\";\r\n\r\n    new mapboxgl.Marker(el)\r\n        .setLngLat(e.lngLat.toArray())\r\n        .addTo(map)\r\n})\n\n//# sourceURL=webpack:///./src/js/createEvents/createEvents.js?");

/***/ })

/******/ });