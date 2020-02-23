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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/eventDetail/eventDetailMap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/eventDetail/eventDetailMap.js":
/*!**********************************************!*\
  !*** ./src/js/eventDetail/eventDetailMap.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_createMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map/createMap */ \"./src/js/map/createMap.js\");\n/* harmony import */ var _map_marker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/marker */ \"./src/js/map/marker.js\");\n\r\nmapboxgl.accessToken =\r\n    \"pk.eyJ1IjoicGF1bGJpZ21vdXRoIiwiYSI6ImNrNm83cTc0ZTBzNnMzbGx5YWdlNjFwOWwifQ.5V5xu7ylKhZeABTVBfwEKQ\";\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet map = Object(_map_createMap__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('form-event-map', 13, [-77.032, 38.913])\r\n\r\n\r\n\r\nlet nav = new mapboxgl.NavigationControl({\r\n    showCompass: true,\r\n    showZoom: true\r\n});\r\n\r\n\r\nmap.addControl(nav, \"bottom-right\");\r\n\r\n\r\n\r\n\r\n\r\nmap.on('load', () => {\r\n    map.addSource('points', {\r\n        'type': 'geojson',\r\n        'data': {\r\n            'type': 'FeatureCollection',\r\n            'features': [\r\n                {\r\n                    'type': 'Feature',\r\n                    'geometry': {\r\n                        'type': 'Point',\r\n                        'coordinates': [-77.032, 38.913]\r\n                    }\r\n                }\r\n            ]\r\n        }\r\n    });\r\n\r\n    map.addImage('pulsing-dot', Object(_map_marker__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(map, 150), { pixelRatio: 2 });\r\n    map.addLayer({\r\n        'id': 'points',\r\n        'type': 'symbol',\r\n        'source': 'points',\r\n        'layout': {\r\n            'icon-image': 'pulsing-dot'\r\n        }\r\n    });\r\n\r\n})\n\n//# sourceURL=webpack:///./src/js/eventDetail/eventDetailMap.js?");

/***/ }),

/***/ "./src/js/map/createMap.js":
/*!*********************************!*\
  !*** ./src/js/map/createMap.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createMap; });\nfunction createMap(container, zoom, center) {\r\n    let map = new mapboxgl.Map({\r\n        container: container,\r\n        style: \"mapbox://styles/mapbox/streets-v9\",\r\n        zoom: zoom,\r\n        center: center,\r\n        pitch: 45,\r\n        bearing: 17.6\r\n    });\r\n    return map\r\n} \n\n//# sourceURL=webpack:///./src/js/map/createMap.js?");

/***/ }),

/***/ "./src/js/map/marker.js":
/*!******************************!*\
  !*** ./src/js/map/marker.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return pulsingMarker; });\n\r\nfunction pulsingMarker(map, size) {\r\n    var pulsingDot = {\r\n        width: size,\r\n        height: size,\r\n        data: new Uint8Array(size * size * 4),\r\n\r\n        // get rendering context for the map canvas when layer is added to the map\r\n        onAdd: function () {\r\n            var canvas = document.createElement('canvas');\r\n            canvas.width = this.width;\r\n            canvas.height = this.height;\r\n            this.context = canvas.getContext('2d');\r\n        },\r\n\r\n        // called once before every frame where the icon will be used\r\n        render: function () {\r\n            var duration = 1000;\r\n            var t = (performance.now() % duration) / duration;\r\n\r\n            var radius = (size / 2) * 0.3;\r\n            var outerRadius = (size / 2) * 0.7 * t + radius;\r\n            var context = this.context;\r\n\r\n            // draw outer circle\r\n            context.clearRect(0, 0, this.width, this.height);\r\n            context.beginPath();\r\n            context.arc(\r\n                this.width / 2,\r\n                this.height / 2,\r\n                outerRadius,\r\n                0,\r\n                Math.PI * 2\r\n            );\r\n            context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';\r\n            context.fill();\r\n\r\n            // draw inner circle\r\n            context.beginPath();\r\n            context.arc(\r\n                this.width / 2,\r\n                this.height / 2,\r\n                radius,\r\n                0,\r\n                Math.PI * 2\r\n            );\r\n            context.fillStyle = 'rgba(255, 100, 100, 1)';\r\n            context.strokeStyle = 'white';\r\n            context.lineWidth = 2 + 4 * (1 - t);\r\n            context.fill();\r\n            context.stroke();\r\n\r\n            // update this image's data with data from the canvas\r\n            this.data = context.getImageData(\r\n                0,\r\n                0,\r\n                this.width,\r\n                this.height\r\n            ).data;\r\n\r\n            // continuously repaint the map, resulting in the smooth animation of the dot\r\n            map.triggerRepaint();\r\n\r\n            // return `true` to let the map know that the image was updated\r\n            return true;\r\n        }\r\n    };\r\n    return pulsingDot;\r\n}\n\n//# sourceURL=webpack:///./src/js/map/marker.js?");

/***/ })

/******/ });