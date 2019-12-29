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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/container/about.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/container/about.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"._1dD_7NwyayBlAKwXg3zL5w{\\r\\n    color: red\\r\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"title\": \"_1dD_7NwyayBlAKwXg3zL5w\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/container/about.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/container/index.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/container/index.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"._2ui9Cwoc-DAaSJUwQZgdKh{\\r\\n    color: blue;\\r\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"title\": \"_2ui9Cwoc-DAaSJUwQZgdKh\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/container/index.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./server/config.js":
/*!**************************!*\
  !*** ./server/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  csr: true\n};\n\n//# sourceURL=webpack:///./server/config.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var opn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! opn */ \"opn\");\n/* harmony import */ var opn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(opn__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config */ \"./server/config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _src_store_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/store/store */ \"./src/store/store.js\");\n/* harmony import */ var _src_component_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/component/Header */ \"./src/component/Header.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);\n// 这里的node代码，会用babel-loader处理\n\n\n\n\n\n\n\n\n\n\n // 获取服务端的store\n\n\n\n\nvar proxy = __webpack_require__(/*! http-proxy-middleware */ \"http-proxy-middleware\");\n\nvar app = express__WEBPACK_IMPORTED_MODULE_3___default()();\nvar store = Object(_src_store_store__WEBPACK_IMPORTED_MODULE_10__[\"getServerStore\"])();\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a[\"static\"]('public'));\napp.use('/api/*', proxy({\n  target: 'http://localhost:8082',\n  changeOrigin: true\n}));\n\nfunction csrRender(res) {\n  var filePath = path__WEBPACK_IMPORTED_MODULE_6___default.a.resolve(process.cwd(), 'public/index.csr.html');\n  return res.send(fs__WEBPACK_IMPORTED_MODULE_7___default.a.readFileSync(filePath, 'utf-8'));\n} // 使用*监听所有路由\n\n\napp.get('*', function (req, res) {\n  //如果开启了客户端渲染\n  if (_config__WEBPACK_IMPORTED_MODULE_9___default.a.csr) {\n    console.log('csr参数开启');\n    return csrRender(res);\n  } // 获取根据路由渲染出的组件，并且拿到loadData方法获取数据\n\n\n  var promises = []; // 存储网络请求\n\n  _src_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"].some(function (route) {\n    var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"matchPath\"])(req.url, route);\n\n    if (match) {\n      var loadData = route.component.loadData;\n\n      if (loadData) {\n        // 规避报错\n        var promise = new Promise(function (resolve, reject) {\n          loadData(store).then(resolve)[\"catch\"](resolve);\n        });\n        promises.push(promise);\n      }\n    } // 取消客户端拉取数据的行为，全部由服务端拉取\n    // if (route.component.loadData) {\n    //   promises.push(route.component.loadData(store))\n    // }\n\n  }); // 等待所有网络请求结束以后再渲染\n\n  Promise.all(promises).then(function (ret) {\n    var context = {\n      css: []\n    }; // 解析成html字符串\n\n    var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n      store: store\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n      location: req.url,\n      context: context\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_component_Header__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null), _src_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map(function (route) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], route);\n    })))); // 状态码\n\n    if (content.statusCode) {}\n\n    var css = context.css.join('\\n');\n    res.send(\"\\n      <html>\\n        <head>\\n        <meta charset=\\\"utf-8\\\">\\n        <title>react ssr</title>\\n        <style>\".concat(css, \"</style>\\n        </head>\\n        <body>\\n          <div id=\\\"root\\\">\").concat(content, \"</div>\\n          <script>\\n           window.__store= \").concat(JSON.stringify(store.getState()), \"\\n          </script>\\n          <script src=\\\"/bundle.js\\\"></script>\\n        </body>\\n      </html>\\n    \"));\n  })[\"catch\"](function (err) {\n    console.log('err', err);\n    res.send('报错页面');\n  });\n});\napp.listen(8081, function () {\n  console.log('监听8081端口'); //open(\"http://localhost:8081\");\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _container_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/index */ \"./src/container/index.js\");\n/* harmony import */ var _container_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/about */ \"./src/container/about.js\");\n/* harmony import */ var _container_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container/user */ \"./src/container/user.js\");\n/* harmony import */ var _container_notfound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./container/notfound */ \"./src/container/notfound.js\");\n\n\n // 引入两个react组件\n\n\n\n //import './App.css';\n// export default (\n//     <div>\n//         <Route path=\"/\" exact component={Index}></Route>\n//         <Route path=\"/about\" exact component={About}></Route>\n//     </div>\n// )\n// 换成js的配置，这样服务端才能拿到配置\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  key: 'index',\n  component: _container_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  exact: true\n}, {\n  path: '/about',\n  key: 'about',\n  component: _container_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  exact: true\n}, {\n  path: '/user',\n  key: 'user',\n  component: _container_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  exact: true\n}, {\n  path: '/notfound',\n  key: 'notfound',\n  component: _container_notfound__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  exact: true\n}]);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/component/Header.js":
/*!*********************************!*\
  !*** ./src/component/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Header() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"\\u9996\\u9875\"), \" |\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/about\"\n  }, \"\\u5173\\u4E8E\"), \"|\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/user\"\n  }, \"\\u7528\\u6237\"), \"|\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/use444r\"\n  }, \"\\u5176\\u5B83\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/component/Header.js?");

/***/ }),

/***/ "./src/container/about.css":
/*!*********************************!*\
  !*** ./src/container/about.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./about.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/container/about.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/container/about.css?");

/***/ }),

/***/ "./src/container/about.js":
/*!********************************!*\
  !*** ./src/container/about.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.css */ \"./src/container/about.css\");\n/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction About(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _about_css__WEBPACK_IMPORTED_MODULE_1___default.a.title\n  }, \"\\u5173\\u4E8E\\u9875\\u9762\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\n//# sourceURL=webpack:///./src/container/about.js?");

/***/ }),

/***/ "./src/container/index.css":
/*!*********************************!*\
  !*** ./src/container/index.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./index.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/container/index.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/container/index.css?");

/***/ }),

/***/ "./src/container/index.js":
/*!********************************!*\
  !*** ./src/container/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/index */ \"./src/store/index.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ \"./src/container/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _withStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../withStyle */ \"./src/withStyle.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nfunction Index(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      _useState2 = _slicedToArray(_useState, 2),\n      count = _useState2[0],\n      setCount = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // 如果首屏不是这个页面，则需要进行客户端数据的获取\n    if (!props.list.length) {\n      props.getIndexList();\n    }\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: _index_css__WEBPACK_IMPORTED_MODULE_3___default.a.title\n  }, \"Index\\u9875\\u9762\"), count, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return setCount(count + 1);\n    }\n  }, \"\\u7D2F\\u52A0\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, props.list.map(function (item) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: item.id\n    }, item.name);\n  })));\n} // 获取数据，用于服务端渲染\n\n\nIndex.loadData = function (store) {\n  return store.dispatch(Object(_store_index__WEBPACK_IMPORTED_MODULE_2__[\"getIndexList\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return {\n    list: state.index.list\n  };\n}, {\n  getIndexList: _store_index__WEBPACK_IMPORTED_MODULE_2__[\"getIndexList\"]\n})(Object(_withStyle__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Index, _index_css__WEBPACK_IMPORTED_MODULE_3___default.a)));\n\n//# sourceURL=webpack:///./src/container/index.js?");

/***/ }),

/***/ "./src/container/notfound.js":
/*!***********************************!*\
  !*** ./src/container/notfound.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction NotFound(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"404\\u9875\\u9762\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/container/notfound.js?");

/***/ }),

/***/ "./src/container/user.js":
/*!*******************************!*\
  !*** ./src/container/user.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/user */ \"./src/store/user.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction User(_ref) {\n  var userinfo = _ref.userinfo,\n      getUserInfo = _ref.getUserInfo;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    // 如果首屏不是这个页面，则需要进行客户端数据的获取\n    if (Object.keys(userinfo) == 0) {\n      getUserInfo();\n    }\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"h1\", null, \"User\\u9875\\u9762\"), \"\\u60A8\\u597D,\", userinfo.title);\n} // 获取数据，用于服务端渲染\n\n\nUser.loadData = function (store) {\n  return store.dispatch(Object(_store_user__WEBPACK_IMPORTED_MODULE_1__[\"getUserInfo\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(function (state) {\n  return {\n    userinfo: state.user.userinfo\n  };\n}, {\n  getUserInfo: _store_user__WEBPACK_IMPORTED_MODULE_1__[\"getUserInfo\"]\n})(User));\n\n//# sourceURL=webpack:///./src/container/user.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: indexReducer, getIndexList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"indexReducer\", function() { return indexReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIndexList\", function() { return getIndexList; });\n//action type\nvar GET_LIST = 'INDEX/GET_LIST';\nvar defaultState = {\n  list: []\n}; // 默认的状态\n\nvar indexReducer = function indexReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case GET_LIST:\n      return {\n        list: action.list\n      };\n\n    default:\n      return state;\n  }\n};\nvar getIndexList = function getIndexList() {\n  return function (dispatch, getState, $axios) {\n    return $axios.get('/api/course/list').then(function (res) {\n      var list = res.data.list;\n      dispatch({\n        type: GET_LIST,\n        list: list\n      });\n    })[\"catch\"](function (e) {\n      // 在这里需要捕获错误，才不会出现所有页面都挂了的情况\n      console.log(e);\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: getClientStore, getServerStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerStore\", function() { return getServerStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./src/store/index.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ \"./src/store/user.js\");\n// 存储入口\n\n\n\n\n\nvar reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  index: _index__WEBPACK_IMPORTED_MODULE_3__[\"indexReducer\"],\n  user: _user__WEBPACK_IMPORTED_MODULE_4__[\"userReducer\"]\n});\nvar serverAxios = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({\n  baseURL: 'http://localhost:8081'\n});\nvar clientAxios = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({\n  baseURL: '/'\n}); // 获取客户端的store\n\nvar getClientStore = function getClientStore() {\n  // 通过window对象来获取服务端获取的数据\n  var defaultStore = window.__store ? window.__store : {};\n  console.log('客户端defaultStore', defaultStore);\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducers, defaultStore, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(clientAxios)));\n}; // 获取服务端的store\n\nvar getServerStore = function getServerStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducers, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(serverAxios)));\n};\n\n//# sourceURL=webpack:///./src/store/store.js?");

/***/ }),

/***/ "./src/store/user.js":
/*!***************************!*\
  !*** ./src/store/user.js ***!
  \***************************/
/*! exports provided: userReducer, getUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userReducer\", function() { return userReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserInfo\", function() { return getUserInfo; });\n//action type\nvar USER_INFO = 'USER/USER_INFO';\nvar defaultState = {\n  userinfo: {}\n}; // 默认的状态\n\nvar userReducer = function userReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case USER_INFO:\n      return {\n        userinfo: action.userinfo\n      };\n\n    default:\n      return state;\n  }\n};\nvar getUserInfo = function getUserInfo() {\n  return function (dispatch, getState, $axios) {\n    return $axios.get('/api/user/info').then(function (res) {\n      var data = res.data.data;\n      dispatch({\n        type: USER_INFO,\n        userinfo: data\n      });\n    })[\"catch\"](function (e) {\n      // 在这里需要捕获错误，才不会出现所有页面都挂了的情况\n      console.log(e);\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/store/user.js?");

/***/ }),

/***/ "./src/withStyle.js":
/*!**************************!*\
  !*** ./src/withStyle.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ \"hoist-non-react-statics\");\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction withStyle(Comp, styles) {\n  function newCom(props) {\n    if (props.staticContext) {\n      props.staticContext.css.push(styles._getCss());\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, props);\n  } // newCom.loadData = Comp.loadData\n  // return newCom\n\n\n  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(Comp, newCom);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withStyle);\n\n//# sourceURL=webpack:///./src/withStyle.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hoist-non-react-statics\");\n\n//# sourceURL=webpack:///external_%22hoist-non-react-statics%22?");

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-proxy-middleware\");\n\n//# sourceURL=webpack:///external_%22http-proxy-middleware%22?");

/***/ }),

/***/ "opn":
/*!**********************!*\
  !*** external "opn" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"opn\");\n\n//# sourceURL=webpack:///external_%22opn%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });