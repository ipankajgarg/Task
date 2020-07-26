module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./lib/with-redux-store.js":
/*!*********************************!*\
  !*** ./lib/with-redux-store.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ \"./store.js\");\nvar _jsxFileName = \"/Users/pankajgarg/Documents/interview-taks/nextjs/lib/with-redux-store.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst isServer = true;\nconst __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';\n\nfunction getOrCreateStore(initialState) {\n  // Always make a new store if server, otherwise state is shared between requests\n  if (isServer) {\n    return Object(_store__WEBPACK_IMPORTED_MODULE_1__[\"initializeStore\"])(initialState);\n  } // Create store if unavailable on the client and set it on the window object\n\n\n  if (!window[__NEXT_REDUX_STORE__]) {\n    window[__NEXT_REDUX_STORE__] = Object(_store__WEBPACK_IMPORTED_MODULE_1__[\"initializeStore\"])(initialState);\n  }\n\n  return window[__NEXT_REDUX_STORE__];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App => {\n  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    static async getInitialProps(appContext) {\n      // Get or Create the store with `undefined` as initialState\n      // This allows you to set a custom default initialState\n      const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages\n\n      appContext.ctx.reduxStore = reduxStore;\n      let appProps = {};\n\n      if (typeof App.getInitialProps === 'function') {\n        appProps = await App.getInitialProps(appContext);\n      }\n\n      return _objectSpread(_objectSpread({}, appProps), {}, {\n        initialReduxState: reduxStore.getState()\n      });\n    }\n\n    constructor(props) {\n      super(props);\n      this.reduxStore = getOrCreateStore(props.initialReduxState);\n    }\n\n    render() {\n      return __jsx(App, _extends({}, this.props, {\n        reduxStore: this.reduxStore,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 14\n        }\n      }));\n    }\n\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvd2l0aC1yZWR1eC1zdG9yZS5qcz8yYWIyIl0sIm5hbWVzIjpbImlzU2VydmVyIiwiX19ORVhUX1JFRFVYX1NUT1JFX18iLCJnZXRPckNyZWF0ZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiaW5pdGlhbGl6ZVN0b3JlIiwid2luZG93IiwiQXBwIiwiQXBwV2l0aFJlZHV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwicmVkdXhTdG9yZSIsImN0eCIsImFwcFByb3BzIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJnZXRTdGF0ZSIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxRQUFRLE9BQWQ7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7O0FBRUEsU0FBU0MsZ0JBQVQsQ0FBMkJDLFlBQTNCLEVBQXlDO0FBQ3ZDO0FBQ0EsTUFBSUgsUUFBSixFQUFjO0FBQ1osV0FBT0ksOERBQWUsQ0FBQ0QsWUFBRCxDQUF0QjtBQUNELEdBSnNDLENBTXZDOzs7QUFDQSxNQUFJLENBQUNFLE1BQU0sQ0FBQ0osb0JBQUQsQ0FBWCxFQUFtQztBQUNqQ0ksVUFBTSxDQUFDSixvQkFBRCxDQUFOLEdBQStCRyw4REFBZSxDQUFDRCxZQUFELENBQTlDO0FBQ0Q7O0FBQ0QsU0FBT0UsTUFBTSxDQUFDSixvQkFBRCxDQUFiO0FBQ0Q7O0FBRWNLLGtFQUFHLElBQUk7QUFDcEIsU0FBTyxNQUFNQyxZQUFOLFNBQTJCQyw0Q0FBSyxDQUFDQyxTQUFqQyxDQUEyQztBQUNoRCxpQkFBYUMsZUFBYixDQUE4QkMsVUFBOUIsRUFBMEM7QUFDeEM7QUFDQTtBQUNBLFlBQU1DLFVBQVUsR0FBR1YsZ0JBQWdCLEVBQW5DLENBSHdDLENBS3hDOztBQUNBUyxnQkFBVSxDQUFDRSxHQUFYLENBQWVELFVBQWYsR0FBNEJBLFVBQTVCO0FBRUEsVUFBSUUsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsVUFBSSxPQUFPUixHQUFHLENBQUNJLGVBQVgsS0FBK0IsVUFBbkMsRUFBK0M7QUFDN0NJLGdCQUFRLEdBQUcsTUFBTVIsR0FBRyxDQUFDSSxlQUFKLENBQW9CQyxVQUFwQixDQUFqQjtBQUNEOztBQUVELDZDQUNLRyxRQURMO0FBRUVDLHlCQUFpQixFQUFFSCxVQUFVLENBQUNJLFFBQVg7QUFGckI7QUFJRDs7QUFFREMsZUFBVyxDQUFFQyxLQUFGLEVBQVM7QUFDbEIsWUFBTUEsS0FBTjtBQUNBLFdBQUtOLFVBQUwsR0FBa0JWLGdCQUFnQixDQUFDZ0IsS0FBSyxDQUFDSCxpQkFBUCxDQUFsQztBQUNEOztBQUVESSxVQUFNLEdBQUk7QUFDUixhQUFPLE1BQUMsR0FBRCxlQUFTLEtBQUtELEtBQWQ7QUFBcUIsa0JBQVUsRUFBRSxLQUFLTixVQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVA7QUFDRDs7QUEzQitDLEdBQWxEO0FBNkJELENBOUJEIiwiZmlsZSI6Ii4vbGliL3dpdGgtcmVkdXgtc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBpbml0aWFsaXplU3RvcmUgfSBmcm9tICcuLi9zdG9yZSdcblxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuY29uc3QgX19ORVhUX1JFRFVYX1NUT1JFX18gPSAnX19ORVhUX1JFRFVYX1NUT1JFX18nXG5cbmZ1bmN0aW9uIGdldE9yQ3JlYXRlU3RvcmUgKGluaXRpYWxTdGF0ZSkge1xuICAvLyBBbHdheXMgbWFrZSBhIG5ldyBzdG9yZSBpZiBzZXJ2ZXIsIG90aGVyd2lzZSBzdGF0ZSBpcyBzaGFyZWQgYmV0d2VlbiByZXF1ZXN0c1xuICBpZiAoaXNTZXJ2ZXIpIHtcbiAgICByZXR1cm4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSlcbiAgfVxuXG4gIC8vIENyZWF0ZSBzdG9yZSBpZiB1bmF2YWlsYWJsZSBvbiB0aGUgY2xpZW50IGFuZCBzZXQgaXQgb24gdGhlIHdpbmRvdyBvYmplY3RcbiAgaWYgKCF3aW5kb3dbX19ORVhUX1JFRFVYX1NUT1JFX19dKSB7XG4gICAgd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXSA9IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpXG4gIH1cbiAgcmV0dXJuIHdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX11cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwID0+IHtcbiAgcmV0dXJuIGNsYXNzIEFwcFdpdGhSZWR1eCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoYXBwQ29udGV4dCkge1xuICAgICAgLy8gR2V0IG9yIENyZWF0ZSB0aGUgc3RvcmUgd2l0aCBgdW5kZWZpbmVkYCBhcyBpbml0aWFsU3RhdGVcbiAgICAgIC8vIFRoaXMgYWxsb3dzIHlvdSB0byBzZXQgYSBjdXN0b20gZGVmYXVsdCBpbml0aWFsU3RhdGVcbiAgICAgIGNvbnN0IHJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKClcblxuICAgICAgLy8gUHJvdmlkZSB0aGUgc3RvcmUgdG8gZ2V0SW5pdGlhbFByb3BzIG9mIHBhZ2VzXG4gICAgICBhcHBDb250ZXh0LmN0eC5yZWR1eFN0b3JlID0gcmVkdXhTdG9yZVxuXG4gICAgICBsZXQgYXBwUHJvcHMgPSB7fVxuICAgICAgaWYgKHR5cGVvZiBBcHAuZ2V0SW5pdGlhbFByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hcHBQcm9wcyxcbiAgICAgICAgaW5pdGlhbFJlZHV4U3RhdGU6IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICB0aGlzLnJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKHByb3BzLmluaXRpYWxSZWR1eFN0YXRlKVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICByZXR1cm4gPEFwcCB7Li4udGhpcy5wcm9wc30gcmVkdXhTdG9yZT17dGhpcy5yZWR1eFN0b3JlfSAvPlxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/with-redux-store.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\n\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\n\n\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7OztBQWVBOzs7OztBQUlBLGtDQUFrQztBQUFBO0FBQWxDO0FBQWtDLENBQWxDLEVBR3lDO0FBQ3ZDLFFBQU1BLFNBQVMsR0FBRyxNQUFNLDJDQUF4QixHQUF3QixDQUF4QjtBQUNBLFNBQU87QUFBUDtBQUFPLEdBQVA7QUFHYTs7QUFBQSxrQkFBMkNDLGVBQU1DLFNBQWpELENBR2I7QUFJQTtBQUNBO0FBQ0E7QUFDQUMsbUJBQWlCLG9CQUE0QztBQUMzRDtBQUdGQzs7QUFBQUEsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFxRCxLQUEzRDtBQUdBLHdCQUNFLHFFQUdJO0FBQ0E7QUFDSSxNQUFFQyxPQUFPLElBQVQsV0FBd0I7QUFBRUMsU0FBRyxFQUFFQyxTQUFTLENBQXhDLE1BQXdDO0FBQWhCLEtBQXhCLEdBTlYsRUFDRSxFQURGO0FBZkY7O0FBQUE7OztBQUhtQkMsRyxDQUlaQyxtQkFKWUQsR0FJVUUsa0JBSlZGO0FBQUFBLEcsQ0FLWkcsZUFMWUgsR0FLTUUsa0JBTE5GO0FBK0JyQjtBQUNBOztBQUVBLFVBQTJDO0FBQ3pDSSxlQUFhLEdBQUcscUJBQVMsTUFBTTtBQUM3QkMsV0FBTyxDQUFQQTtBQURGRCxHQUFnQixDQUFoQkE7QUFNQUUsU0FBTyxHQUFHLHFCQUFTLE1BQU07QUFDdkJELFdBQU8sQ0FBUEE7QUFERkMsR0FBVSxDQUFWQTtBQU9GLEMsQ0FBQTs7O0FBQ08sc0JBQTJCO0FBQ2hDLFlBQTJDRixhQUFhO0FBQ3hELFNBQU9HLENBQUMsQ0FBUjtBQUdLOztBQUFBLDJCQUFtQztBQUN4QztBQUNBLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQ0EsU0FBTztBQUNMLGdCQUFZO0FBQ1YsZ0JBQTJDRCxPQUFPO0FBQ2xEO0FBSEc7O0FBS0wsbUJBQWU7QUFDYixnQkFBMkNBLE9BQU87QUFDbEQ7QUFQRzs7QUFTTCxpQkFBYTtBQUNYLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVhHOztBQWFMRSxRQUFJLEVBQUUsTUFBTTtBQUNWLGdCQUEyQ0YsT0FBTztBQUNsREcsWUFBTSxDQUFOQTtBQWZHO0FBaUJMQyxRQUFJLEVBQUUsYUFBOEI7QUFDbEMsZ0JBQTJDSixPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsVUFBUCxFQUFPQSxDQUFQO0FBbkJHO0FBcUJMRSxVQUFNLEVBQUUsY0FBK0I7QUFDckMsZ0JBQTJDTCxPQUFPO0FBQ2xELFlBQU1NLFNBQVMsR0FBR0MsRUFBRSxVQUFwQjtBQUNBLFlBQU1DLE9BQU8sR0FBR0QsRUFBRSxJQUFsQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsZ0JBQVAsT0FBT0EsQ0FBUDtBQTFCRztBQTRCTE0sV0FBTyxFQUFFLGFBQThCO0FBQ3JDLGdCQUEyQ1QsT0FBTztBQUNsRCxhQUFPRyxNQUFNLENBQU5BLGFBQVAsRUFBT0EsQ0FBUDtBQTlCRztBQWdDTE8sYUFBUyxFQUFFLGNBQStCO0FBQ3hDLGdCQUEyQ1YsT0FBTztBQUNsRCxZQUFNVyxZQUFZLEdBQUdKLEVBQUUsVUFBdkI7QUFDQSxZQUFNSyxVQUFVLEdBQUdMLEVBQUUsSUFBckI7QUFFQSxhQUFPSixNQUFNLENBQU5BLHNCQUFQLFVBQU9BLENBQVA7QUFyQ0o7QUFBTyxHQUFQO0FBd0NEIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/MDJiYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_with_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/with-redux-store */ \"./lib/with-redux-store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/pankajgarg/Documents/interview-taks/nextjs/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nclass MyApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {\n  render() {\n    const {\n      Component,\n      pageProps,\n      reduxStore\n    } = this.props;\n    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n      store: reduxStore,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 7\n      }\n    }, __jsx(Component, _extends({}, pageProps, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }\n    })));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_with_redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MyApp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJBcHAiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyZWR1eFN0b3JlIiwicHJvcHMiLCJ3aXRoUmVkdXhTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQU4sU0FBb0JDLCtDQUFwQixDQUF3QjtBQUN0QkMsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFQyxlQUFGO0FBQWFDLGVBQWI7QUFBd0JDO0FBQXhCLFFBQXVDLEtBQUtDLEtBQWxEO0FBQ0EsV0FDRSxNQUFDLG9EQUFEO0FBQVUsV0FBSyxFQUFFRCxVQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxTQUFELGVBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGLENBREY7QUFLRDs7QUFScUI7O0FBV1RHLG9JQUFjLENBQUNQLEtBQUQsQ0FBN0IiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB3aXRoUmVkdXhTdG9yZSBmcm9tIFwiLi4vbGliL3dpdGgtcmVkdXgtc3RvcmVcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJlZHV4U3RvcmUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQcm92aWRlciBzdG9yZT17cmVkdXhTdG9yZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXhTdG9yZShNeUFwcCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeStore\", function() { return initializeStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ \"./types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst fetchDataReducer = (state = {\n  isLoading: false,\n  error: \"\",\n  isPaginationLoading: false\n}, {\n  type,\n  payload\n}) => {\n  switch (type) {\n    case _types__WEBPACK_IMPORTED_MODULE_3__[\"searchDataLoading\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoading: true\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_3__[\"searchDataSuccess\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        data: payload,\n        isLoading: false,\n        error: \"\"\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_3__[\"searchDataFailure\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoading: false,\n        error: payload\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_3__[\"searchPaginationDataLoading\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isPaginationLoading: true\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_3__[\"searchPaginationDataSuccess\"]:\n      state.data.results = [...state.data.results, ...payload.results];\n      state.data.page = payload.page;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isPaginationLoading: false,\n        error: \"\"\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_3__[\"searchDataSuccess\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isPaginationLoading: false,\n        error: payload\n      });\n\n    default:\n      return state;\n  }\n};\n\nconst reducers = {\n  searchResult: fetchDataReducer\n};\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])(reducers);\nfunction initializeStore(initialState) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(rootReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz8wNTcxIl0sIm5hbWVzIjpbImZldGNoRGF0YVJlZHVjZXIiLCJzdGF0ZSIsImlzTG9hZGluZyIsImVycm9yIiwiaXNQYWdpbmF0aW9uTG9hZGluZyIsInR5cGUiLCJwYXlsb2FkIiwidHlwZXMiLCJkYXRhIiwicmVzdWx0cyIsInBhZ2UiLCJyZWR1Y2VycyIsInNlYXJjaFJlc3VsdCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5pdGlhbGl6ZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxnQkFBZ0IsR0FBRyxDQUN2QkMsS0FBSyxHQUFHO0FBQUVDLFdBQVMsRUFBRSxLQUFiO0FBQW9CQyxPQUFLLEVBQUUsRUFBM0I7QUFBK0JDLHFCQUFtQixFQUFFO0FBQXBELENBRGUsRUFFdkI7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBRnVCLEtBR3BCO0FBQ0gsVUFBUUQsSUFBUjtBQUNFLFNBQUtFLHdEQUFMO0FBQ0UsNkNBQVlOLEtBQVo7QUFBbUJDLGlCQUFTLEVBQUU7QUFBOUI7O0FBQ0YsU0FBS0ssd0RBQUw7QUFDRSw2Q0FBWU4sS0FBWjtBQUFtQk8sWUFBSSxFQUFFRixPQUF6QjtBQUFrQ0osaUJBQVMsRUFBRSxLQUE3QztBQUFvREMsYUFBSyxFQUFFO0FBQTNEOztBQUNGLFNBQUtJLHdEQUFMO0FBQ0UsNkNBQVlOLEtBQVo7QUFBbUJDLGlCQUFTLEVBQUUsS0FBOUI7QUFBcUNDLGFBQUssRUFBRUc7QUFBNUM7O0FBRUYsU0FBS0Msa0VBQUw7QUFDRSw2Q0FBWU4sS0FBWjtBQUFtQkcsMkJBQW1CLEVBQUU7QUFBeEM7O0FBQ0YsU0FBS0csa0VBQUw7QUFDRU4sV0FBSyxDQUFDTyxJQUFOLENBQVdDLE9BQVgsR0FBcUIsQ0FBQyxHQUFHUixLQUFLLENBQUNPLElBQU4sQ0FBV0MsT0FBZixFQUF3QixHQUFHSCxPQUFPLENBQUNHLE9BQW5DLENBQXJCO0FBQ0FSLFdBQUssQ0FBQ08sSUFBTixDQUFXRSxJQUFYLEdBQWtCSixPQUFPLENBQUNJLElBQTFCO0FBQ0EsNkNBQ0tULEtBREw7QUFFRUcsMkJBQW1CLEVBQUUsS0FGdkI7QUFHRUQsYUFBSyxFQUFFO0FBSFQ7O0FBS0YsU0FBS0ksd0RBQUw7QUFDRSw2Q0FBWU4sS0FBWjtBQUFtQkcsMkJBQW1CLEVBQUUsS0FBeEM7QUFBK0NELGFBQUssRUFBRUc7QUFBdEQ7O0FBQ0Y7QUFDRSxhQUFPTCxLQUFQO0FBckJKO0FBdUJELENBM0JEOztBQTZCQSxNQUFNVSxRQUFRLEdBQUc7QUFDZkMsY0FBWSxFQUFFWjtBQURDLENBQWpCO0FBSUEsTUFBTWEsV0FBVyxHQUFHQyw2REFBZSxDQUFDSCxRQUFELENBQW5DO0FBRU8sU0FBU0ksZUFBVCxDQUF5QkMsWUFBekIsRUFBdUM7QUFDNUMsU0FBT0MseURBQVcsQ0FDaEJKLFdBRGdCLEVBRWhCRyxZQUZnQixFQUdoQkUsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUNDLGtEQUFELENBQWhCLENBSEgsQ0FBbEI7QUFLRCIsImZpbGUiOiIuL3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcblxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgZmV0Y2hEYXRhUmVkdWNlciA9IChcbiAgc3RhdGUgPSB7IGlzTG9hZGluZzogZmFsc2UsIGVycm9yOiBcIlwiLCBpc1BhZ2luYXRpb25Mb2FkaW5nOiBmYWxzZSB9LFxuICB7IHR5cGUsIHBheWxvYWQgfVxuKSA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgdHlwZXMuc2VhcmNoRGF0YUxvYWRpbmc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNMb2FkaW5nOiB0cnVlIH07XG4gICAgY2FzZSB0eXBlcy5zZWFyY2hEYXRhU3VjY2VzczpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhOiBwYXlsb2FkLCBpc0xvYWRpbmc6IGZhbHNlLCBlcnJvcjogXCJcIiB9O1xuICAgIGNhc2UgdHlwZXMuc2VhcmNoRGF0YUZhaWx1cmU6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNMb2FkaW5nOiBmYWxzZSwgZXJyb3I6IHBheWxvYWQgfTtcblxuICAgIGNhc2UgdHlwZXMuc2VhcmNoUGFnaW5hdGlvbkRhdGFMb2FkaW5nOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzUGFnaW5hdGlvbkxvYWRpbmc6IHRydWUgfTtcbiAgICBjYXNlIHR5cGVzLnNlYXJjaFBhZ2luYXRpb25EYXRhU3VjY2VzczpcbiAgICAgIHN0YXRlLmRhdGEucmVzdWx0cyA9IFsuLi5zdGF0ZS5kYXRhLnJlc3VsdHMsIC4uLnBheWxvYWQucmVzdWx0c107XG4gICAgICBzdGF0ZS5kYXRhLnBhZ2UgPSBwYXlsb2FkLnBhZ2U7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNQYWdpbmF0aW9uTG9hZGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBcIlwiXG4gICAgICB9O1xuICAgIGNhc2UgdHlwZXMuc2VhcmNoRGF0YVN1Y2Nlc3M6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNQYWdpbmF0aW9uTG9hZGluZzogZmFsc2UsIGVycm9yOiBwYXlsb2FkIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgcmVkdWNlcnMgPSB7XG4gIHNlYXJjaFJlc3VsdDogZmV0Y2hEYXRhUmVkdWNlclxufTtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ }),

/***/ "./types.js":
/*!******************!*\
  !*** ./types.js ***!
  \******************/
/*! exports provided: searchDataLoading, searchDataSuccess, searchDataFailure, searchPaginationDataLoading, searchPaginationDataSuccess, searchPaginationDataFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchDataLoading\", function() { return searchDataLoading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchDataSuccess\", function() { return searchDataSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchDataFailure\", function() { return searchDataFailure; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchPaginationDataLoading\", function() { return searchPaginationDataLoading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchPaginationDataSuccess\", function() { return searchPaginationDataSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchPaginationDataFailure\", function() { return searchPaginationDataFailure; });\n// REDUX ACTION TYPES\nconst searchDataLoading = \"SEARCH_DATA_LOADING\";\nconst searchDataSuccess = \"SEARCH_DATA_SUCCESS\";\nconst searchDataFailure = \"SEARCH_DATA_FAILURE\";\nconst searchPaginationDataLoading = \"SEARCH_PAGINATION_DATA_LOADING\";\nconst searchPaginationDataSuccess = \"SEARCH_PAGINATION_DATA_SUCCESS\";\nconst searchPaginationDataFailure = \"SEARCH_PAGINATION_DATA_FAILURE\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90eXBlcy5qcz8wYTE1Il0sIm5hbWVzIjpbInNlYXJjaERhdGFMb2FkaW5nIiwic2VhcmNoRGF0YVN1Y2Nlc3MiLCJzZWFyY2hEYXRhRmFpbHVyZSIsInNlYXJjaFBhZ2luYXRpb25EYXRhTG9hZGluZyIsInNlYXJjaFBhZ2luYXRpb25EYXRhU3VjY2VzcyIsInNlYXJjaFBhZ2luYXRpb25EYXRhRmFpbHVyZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLE1BQU1BLGlCQUFpQixHQUFHLHFCQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLHFCQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLHFCQUExQjtBQUVBLE1BQU1DLDJCQUEyQixHQUFHLGdDQUFwQztBQUNBLE1BQU1DLDJCQUEyQixHQUFHLGdDQUFwQztBQUNBLE1BQU1DLDJCQUEyQixHQUFHLGdDQUFwQyIsImZpbGUiOiIuL3R5cGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUkVEVVggQUNUSU9OIFRZUEVTXG5leHBvcnQgY29uc3Qgc2VhcmNoRGF0YUxvYWRpbmcgPSBcIlNFQVJDSF9EQVRBX0xPQURJTkdcIjtcbmV4cG9ydCBjb25zdCBzZWFyY2hEYXRhU3VjY2VzcyA9IFwiU0VBUkNIX0RBVEFfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IHNlYXJjaERhdGFGYWlsdXJlID0gXCJTRUFSQ0hfREFUQV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hQYWdpbmF0aW9uRGF0YUxvYWRpbmcgPSBcIlNFQVJDSF9QQUdJTkFUSU9OX0RBVEFfTE9BRElOR1wiO1xuZXhwb3J0IGNvbnN0IHNlYXJjaFBhZ2luYXRpb25EYXRhU3VjY2VzcyA9IFwiU0VBUkNIX1BBR0lOQVRJT05fREFUQV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3Qgc2VhcmNoUGFnaW5hdGlvbkRhdGFGYWlsdXJlID0gXCJTRUFSQ0hfUEFHSU5BVElPTl9EQVRBX0ZBSUxVUkVcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./types.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });