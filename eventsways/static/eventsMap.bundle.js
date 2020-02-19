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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/events/allEventsMap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/events/allEventsMap.js":
/*!***************************************!*\
  !*** ./src/js/events/allEventsMap.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nmapboxgl.accessToken =\r\n  \"pk.eyJ1IjoicGF1bGJpZ21vdXRoIiwiYSI6ImNrNm83cTc0ZTBzNnMzbGx5YWdlNjFwOWwifQ.5V5xu7ylKhZeABTVBfwEKQ\";\r\n\r\nlet map = new mapboxgl.Map({\r\n  container: \"map\",\r\n  style: \"mapbox://styles/mapbox/streets-v9\",\r\n  zoom: 11,\r\n  center: [-77.032, 38.913],\r\n  pitch: 45,\r\n  bearing: 17.6,\r\n  trackResize: true\r\n});\r\nmap.on('dataloading', () => {\r\n  window.dispatchEvent(new Event('resize'));\r\n  // mapboxObj.resize(); also work\r\n});\r\nlet nav = new mapboxgl.NavigationControl({\r\n  showCompass: true,\r\n  showZoom: true\r\n});\r\n\r\n\r\nmap.addControl(nav, \"bottom-right\");\r\n\r\nlet geojson = {\r\n  type: \"FeatureCollection\",\r\n  features: [\r\n\r\n  ]\r\n}\r\n\r\nmap.on(\"load\", () => {\r\n  const events = document.querySelectorAll('.event-item');\r\n  map.loadImage('../../../media/img/0cea943396e58ff6b1338f64f3221d1f_Um5BWTk.jpg',\r\n    function (error, image) {\r\n      if (error) throw error;\r\n      map.addImage('marker', image);\r\n      events.forEach((elem) => {\r\n        geojson.features.push({\r\n          type: \"Feature\",\r\n          geometry: {\r\n            type: \"Point\",\r\n            coordinates: [+elem.getAttribute('data-lng'), +elem.getAttribute('data-lat')]\r\n          },\r\n          properties: {\r\n            title: elem.getAttribute('data-title'),\r\n            date: elem.getAttribute('data-date'),\r\n            time: elem.getAttribute('data-time'),\r\n            place: elem.getAttribute('data-place'),\r\n            description: elem.getAttribute('data-description'),\r\n            href: elem.getAttribute('data-href'),\r\n            image: elem.getAttribute('data-image')\r\n          }\r\n        })\r\n      })\r\n      map.addSource(\"pointsSource\", {\r\n        type: 'geojson',\r\n        data: geojson\r\n      })\r\n      map.addLayer({\r\n        id: \"points\",\r\n        source: \"pointsSource\",\r\n        type: \"symbol\",\r\n        layout: {\r\n          \"icon-image\": \"marker\",\r\n          \"icon-size\": 0.1\r\n        }\r\n\r\n\r\n      })\r\n    }\r\n\r\n  )\r\n\r\n\r\n\r\n})\r\n\r\nmap.on(\"click\", (e) => {\r\n  const result = map.queryRenderedFeatures(e.point, { layers: [\"points\"] });\r\n  if (result.length) {\r\n    map.panTo(e.lngLat)\r\n    const popup = new mapboxgl.Popup({ closeButton: false });\r\n    popup.setLngLat(e.lngLat)\r\n      .setHTML(`<section class=\"event-item\">\r\n            <div class=\"event-img\">\r\n              <a href=${result[0].properties.href} class=\"event-link-img\">\r\n                <img src=${result[0].properties.image} alt=\"\" />\r\n              </a>\r\n            </div>\r\n            <div class=\"container\">\r\n              <div class=\"event-item-title\">\r\n                <a href=${result[0].properties.href}>${result[0].properties.title}</a>\r\n              </div>\r\n              <p class=\"event-item-date\">\r\n                <i class=\"far fa-calendar-alt\"> ${result[0].properties.date}</i> \r\n                <i class=\"far fa-clock\"> ${result[0].properties.time}</i> \r\n              </p>\r\n              <p class=\"event-item-description\">\r\n                ${result[0].properties.description}\r\n              </p>\r\n              <p class=\"event-item-place\">${result[0].properties.place}</p>\r\n            </div>\r\n          </section>`)\r\n      .addTo(map)\r\n  }\r\n})\n\n//# sourceURL=webpack:///./src/js/events/allEventsMap.js?");

/***/ })

/******/ });