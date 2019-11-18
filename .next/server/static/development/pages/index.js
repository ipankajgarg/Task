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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/common/Button.js":
/*!*************************************!*\
  !*** ./components/common/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Button({
  content = "Press me",
  onPress = () => {
    console.log("clicked");
  },
  styles = {}
}) {
  return __jsx("button", {
    className: "fontreg",
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles),
    onClick: onPress
  }, content);
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/home/About.js":
/*!**********************************!*\
  !*** ./components/home/About.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/theme */ "./static/theme.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



class About extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      show: false
    });
  }

  render() {
    const {
      show
    } = this.state;
    return __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1673773280", [_static_theme__WEBPACK_IMPORTED_MODULE_3__["default"].primaryColor]]])
    }, __jsx("i", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1673773280", [_static_theme__WEBPACK_IMPORTED_MODULE_3__["default"].primaryColor]]])
    }), __jsx("p", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1673773280", [_static_theme__WEBPACK_IMPORTED_MODULE_3__["default"].primaryColor]]]) + " " + "fontreg"
    }, "Jeevansathi.com is one of the leading and most trusted matrimony websites in India. Making happy marriages happen since 1998, Jeevansathi understands the importance of choosing the right partner for marriage, especially in the Indian cultural setup.", !show ? __jsx("span", {
      onClick: () => this.setState({
        show: true
      }),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1673773280", [_static_theme__WEBPACK_IMPORTED_MODULE_3__["default"].primaryColor]]])
    }, "More") : "It believes in providing the most secure and convenient matchmaking experience to all its members by ensuring 100% screening,exclusive privacy options, photo protection features and verification of phone numbers and more information. While the online matrimonial site connects millions of people directly, Jeevansathi also maintains a dedicated Customer Care team and offers offline Match Point Centers across the country, for deeper and personal interaction with prospective brides, grooms and /or families."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1673773280",
      dynamic: [_static_theme__WEBPACK_IMPORTED_MODULE_3__["default"].primaryColor]
    }, `div.__jsx-style-dynamic-selector{text-align:center;padding:0px 25px;}i.__jsx-style-dynamic-selector{display:inline-block;background-image:url("../../static/images/homeSpriteNewFinal.png");width:33px;background-position:-294px -11px;height:34px;margin-top:18px;}p.__jsx-style-dynamic-selector{color:#9b9b9b;font-size:14px;}span.__jsx-style-dynamic-selector{color:${_static_theme__WEBPACK_IMPORTED_MODULE_3__["default"].primaryColor};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9BYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Qm9CLEFBRytCLEFBSUcsQUFTUCxBQUlxQixjQUhwQixJQWJFLEdBSWtELFFBVXJFLE1BYkEsQUFnQkEscURBWmEsV0FDc0IsaUNBQ3JCLFlBQ0ksZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9BYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3RhdGljL3RoZW1lXCI7XG5cbmNsYXNzIEFib3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IHNob3c6IGZhbHNlIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2hvdyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aT48L2k+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRyZWdcIj5cbiAgICAgICAgICBKZWV2YW5zYXRoaS5jb20gaXMgb25lIG9mIHRoZSBsZWFkaW5nIGFuZCBtb3N0IHRydXN0ZWQgbWF0cmltb255XG4gICAgICAgICAgd2Vic2l0ZXMgaW4gSW5kaWEuIE1ha2luZyBoYXBweSBtYXJyaWFnZXMgaGFwcGVuIHNpbmNlIDE5OTgsXG4gICAgICAgICAgSmVldmFuc2F0aGkgdW5kZXJzdGFuZHMgdGhlIGltcG9ydGFuY2Ugb2YgY2hvb3NpbmcgdGhlIHJpZ2h0IHBhcnRuZXJcbiAgICAgICAgICBmb3IgbWFycmlhZ2UsIGVzcGVjaWFsbHkgaW4gdGhlIEluZGlhbiBjdWx0dXJhbCBzZXR1cC5cbiAgICAgICAgICB7IXNob3cgPyAoXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KX0+TW9yZTwvc3Bhbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgXCJJdCBiZWxpZXZlcyBpbiBwcm92aWRpbmcgdGhlIG1vc3Qgc2VjdXJlIGFuZCBjb252ZW5pZW50IG1hdGNobWFraW5nIGV4cGVyaWVuY2UgdG8gYWxsIGl0cyBtZW1iZXJzIGJ5IGVuc3VyaW5nIDEwMCUgc2NyZWVuaW5nLGV4Y2x1c2l2ZSBwcml2YWN5IG9wdGlvbnMsIHBob3RvIHByb3RlY3Rpb24gZmVhdHVyZXMgYW5kIHZlcmlmaWNhdGlvbiBvZiBwaG9uZSBudW1iZXJzIGFuZCBtb3JlIGluZm9ybWF0aW9uLiBXaGlsZSB0aGUgb25saW5lIG1hdHJpbW9uaWFsIHNpdGUgY29ubmVjdHMgbWlsbGlvbnMgb2YgcGVvcGxlIGRpcmVjdGx5LCBKZWV2YW5zYXRoaSBhbHNvIG1haW50YWlucyBhIGRlZGljYXRlZCBDdXN0b21lciBDYXJlIHRlYW0gYW5kIG9mZmVycyBvZmZsaW5lIE1hdGNoIFBvaW50IENlbnRlcnMgYWNyb3NzIHRoZSBjb3VudHJ5LCBmb3IgZGVlcGVyIGFuZCBwZXJzb25hbCBpbnRlcmFjdGlvbiB3aXRoIHByb3NwZWN0aXZlIGJyaWRlcywgZ3Jvb21zIGFuZCAvb3IgZmFtaWxpZXMuXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2hvbWVTcHJpdGVOZXdGaW5hbC5wbmdcIik7XG4gICAgICAgICAgICB3aWR0aDogMzNweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yOTRweCAtMTFweDtcbiAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5wcmltYXJ5Q29sb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdfQ== */
/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/About.js */`));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/home/AboutApp.js":
/*!*************************************!*\
  !*** ./components/home/AboutApp.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function AboutApp() {
  return __jsx("div", {
    className: "jsx-532943182" + " " + "container"
  }, __jsx("div", {
    style: {
      margin: "0px 24px"
    },
    className: "jsx-532943182"
  }, __jsx("h3", {
    className: "jsx-532943182"
  }, "Stay Connected With"), __jsx("span", {
    className: "jsx-532943182"
  }, __jsx("strong", {
    className: "jsx-532943182"
  }, "Jeevansathi "), "Apps", " ")), __jsx("img", {
    src: "../../static/images/group_64.png",
    className: "jsx-532943182" + " " + "group"
  }), __jsx("p", {
    className: "jsx-532943182"
  }, "Access quick & simple search, instant updates and a great user experience on your phone. Download our apps rated best in the online matrimony segment."), __jsx("img", {
    src: "../../static/images/google_play_icon.png",
    className: "jsx-532943182" + " " + "app-icon"
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "532943182"
  }, ".container.jsx-532943182{padding-bottom:32px;}h3.jsx-532943182{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;text-transform:uppercase;}.group.jsx-532943182{background:#34495e;width:100%;display:block;padding-top:40px;margin-top:10px;}span.jsx-532943182{font-size:20px;}strong.jsx-532943182{color:#d9475c;}p.jsx-532943182{font-size:16px;color:#8a9db0;margin:20px 24px 20px;}.app-icon.jsx-532943182{width:103px;margin:0px 24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9BYm91dEFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmtCLEFBRytCLEFBR0wsQUFRSSxBQVFKLEFBR0QsQUFJQyxBQU1ILFlBQ0ksRUFWbEIsQ0FuQmtCLEFBZ0JsQixBQU9nQixJQWZILENBWGIsUUFpQ0EsQ0FOd0IsQ0FmUixDQVJBLGFBU0csQ0FSQyxNQXVCcEIsVUFka0IsRUFSSyxjQVN2Qix1RkFSMkIseUJBQzNCIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9BYm91dEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQWJvdXRBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjBweCAyNHB4XCIgfX0+XG4gICAgICAgIDxoMz5TdGF5IENvbm5lY3RlZCBXaXRoPC9oMz5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPHN0cm9uZz5KZWV2YW5zYXRoaSA8L3N0cm9uZz5BcHBze1wiIFwifVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGltZyBjbGFzc05hbWU9XCJncm91cFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvZ3JvdXBfNjQucG5nXCIgLz5cbiAgICAgIDxwPlxuICAgICAgICBBY2Nlc3MgcXVpY2sgJiBzaW1wbGUgc2VhcmNoLCBpbnN0YW50IHVwZGF0ZXMgYW5kIGEgZ3JlYXQgdXNlclxuICAgICAgICBleHBlcmllbmNlIG9uIHlvdXIgcGhvbmUuIERvd25sb2FkIG91ciBhcHBzIHJhdGVkIGJlc3QgaW4gdGhlIG9ubGluZVxuICAgICAgICBtYXRyaW1vbnkgc2VnbWVudC5cbiAgICAgIDwvcD5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPVwiYXBwLWljb25cIlxuICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2dvb2dsZV9wbGF5X2ljb24ucG5nXCJcbiAgICAgIC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiAjOGE5ZGIwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgICAuZ3JvdXAge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzNDQ5NWU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGNvbG9yOiAjZDk0NzVjO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiAjOGE5ZGIwO1xuICAgICAgICAgIG1hcmdpbjogMjBweCAyNHB4IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXBwLWljb24ge1xuICAgICAgICAgIHdpZHRoOiAxMDNweDtcbiAgICAgICAgICBtYXJnaW46IDBweCAyNHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0QXBwO1xuIl19 */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/AboutApp.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AboutApp);

/***/ }),

/***/ "./components/home/BrowseMatrimonyProfiles.js":
/*!****************************************************!*\
  !*** ./components/home/BrowseMatrimonyProfiles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/data */ "./static/data.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function BrowseMatrimonyProfiles() {
  return __jsx("div", null, __jsx("div", {
    className: "jsx-2192969299" + " " + "container"
  }, _static_data__WEBPACK_IMPORTED_MODULE_2__["browseData"].map(function (data, index) {
    return __jsx("div", {
      style: {
        width: index % 2 == 0 ? "60%" : "40%",
        maxWidth: index % 2 == 0 ? "60%" : "40%",
        textAlign: "left"
      },
      className: "jsx-2192969299" + " " + "list"
    }, __jsx("p", {
      className: "jsx-2192969299"
    }, data.title.display), __jsx("ul", {
      className: "jsx-2192969299"
    }, __jsx("li", {
      className: "jsx-2192969299"
    }, __jsx("a", {
      className: "jsx-2192969299"
    }, data.list[0].display)), __jsx("li", {
      className: "jsx-2192969299"
    }, __jsx("a", {
      className: "jsx-2192969299"
    }, data.list[1].display))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2192969299"
  }, "ul.jsx-2192969299{padding:0px;margin:0px;list-style:none;}p.jsx-2192969299{color:#666666;font-size:13px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}li.jsx-2192969299{color:#9b9b9b;font-size:12px;}.container.jsx-2192969299{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0px 20px;}a.jsx-2192969299{line-height:3;text-overflow:ellipsis;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9Ccm93c2VNYXRyaW1vbnlQcm9maWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Qm9CLEFBR3lCLEFBS0UsQUFPQSxBQUtELEFBS0MsWUFyQkgsRUFLSSxBQU9BLEFBVVEsU0FyQlAsTUFLRyxBQU9yQixRQVVBLEVBckJBLFNBS3lCLHVCQUNQLEdBU0QsYUFSakIsNENBU2tCLGdCQUNsQiIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvQnJvd3NlTWF0cmltb255UHJvZmlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBicm93c2VEYXRhIH0gZnJvbSBcIi4uLy4uL3N0YXRpYy9kYXRhXCI7XG5cbmZ1bmN0aW9uIEJyb3dzZU1hdHJpbW9ueVByb2ZpbGVzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICB7YnJvd3NlRGF0YS5tYXAoZnVuY3Rpb24oZGF0YSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogaW5kZXggJSAyID09IDAgPyBcIjYwJVwiIDogXCI0MCVcIixcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogaW5kZXggJSAyID09IDAgPyBcIjYwJVwiIDogXCI0MCVcIixcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwPntkYXRhLnRpdGxlLmRpc3BsYXl9PC9wPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGE+e2RhdGEubGlzdFswXS5kaXNwbGF5fTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxhPntkYXRhLmxpc3RbMV0uZGlzcGxheX08L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJvd3NlTWF0cmltb255UHJvZmlsZXM7XG4iXX0= */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/BrowseMatrimonyProfiles.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (BrowseMatrimonyProfiles);

/***/ }),

/***/ "./components/home/Caption.js":
/*!************************************!*\
  !*** ./components/home/Caption.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/theme */ "./static/theme.js");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Button */ "./components/common/Button.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Caption() {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2400141999", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "container white "
  }, __jsx("h3", {
    style: {
      marginTop: 0
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2400141999", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "fontreg"
  }, "The one you are perfect for, is waiting for you to log on."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2400141999", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]])
  }, "100% Screening of profiles,"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2400141999", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]])
  }, "Verified Stamp on those we've met in person"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2400141999", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]])
  }, "Advanced Privacy Settings."), __jsx("div", {
    style: {
      marginTop: 17
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2400141999", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]])
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: "REGISTER FREE",
    onPress: () => console.log("my passed function"),
    width: "192px",
    height: "48px",
    color: "#34495e"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2400141999",
    dynamic: [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]
  }, `.container.__jsx-style-dynamic-selector{background-color:${_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor};padding:34px 30px;text-align:center;}p.__jsx-style-dynamic-selector{margin:0px;padding:0px;line-height:22px;font-size:15px;}button.__jsx-style-dynamic-selector{margin-top:20px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9DYXB0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0IsQUFHeUQsQUFLbkMsQUFNSyxXQUxKLEtBTWQsT0FMbUIsaUJBQ0YsTUFQRyxTQVFwQixTQVBvQixrQkFDcEIiLCJmaWxlIjoiL2hvbWUvcGFua2FqL0RvY3VtZW50cy9teS13b3JrL3dpdGgtcmVkdXgtdGh1bmsvY29tcG9uZW50cy9ob21lL0NhcHRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3N0YXRpYy90aGVtZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tbW9uL0J1dHRvblwiO1xuXG5mdW5jdGlvbiBDYXB0aW9uKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHdoaXRlIFwiPlxuICAgICAgPGgzIHN0eWxlPXt7IG1hcmdpblRvcDogMCB9fSBjbGFzc05hbWU9XCJmb250cmVnXCI+XG4gICAgICAgIFRoZSBvbmUgeW91IGFyZSBwZXJmZWN0IGZvciwgaXMgd2FpdGluZyBmb3IgeW91IHRvIGxvZyBvbi5cbiAgICAgIDwvaDM+XG5cbiAgICAgIDxwPjEwMCUgU2NyZWVuaW5nIG9mIHByb2ZpbGVzLDwvcD5cbiAgICAgIDxwPlZlcmlmaWVkIFN0YW1wIG9uIHRob3NlIHdlJ3ZlIG1ldCBpbiBwZXJzb248L3A+XG5cbiAgICAgIDxwPkFkdmFuY2VkIFByaXZhY3kgU2V0dGluZ3MuPC9wPlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDE3IH19PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY29udGVudD1cIlJFR0lTVEVSIEZSRUVcIlxuICAgICAgICAgIG9uUHJlc3M9eygpID0+IGNvbnNvbGUubG9nKFwibXkgcGFzc2VkIGZ1bmN0aW9uXCIpfVxuICAgICAgICAgIHdpZHRoPVwiMTkycHhcIlxuICAgICAgICAgIGhlaWdodD1cIjQ4cHhcIlxuICAgICAgICAgIGNvbG9yPVwiIzM0NDk1ZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnByaW1hcnlDb2xvcn07XG4gICAgICAgICAgcGFkZGluZzogMzRweCAzMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXB0aW9uO1xuIl19 */
/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Caption.js */`));
}

/* harmony default export */ __webpack_exports__["default"] = (Caption);

/***/ }),

/***/ "./components/home/Community.js":
/*!**************************************!*\
  !*** ./components/home/Community.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sec7links; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_svgHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/svgHandler */ "./static/svgHandler.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 // import Icon from "../../../common/components/svgHandler";
// import GA from "../../../common/components/GA";
// let API_SERVER_CONSTANTS

let accValue = null;
class Sec7links extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props); //  this.GAObject = new GA();

    this.state = {
      communityLinks: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`https://www.jeevansathi.com/seo/communityLinks/seo/communityLinks`).then(response => {
      if (response && response.data && _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(response.data)) this.setState({
        communityLinks: response.data
      });
    });
  }

  addClasses(elm, cls1, cls2) {
    let elements = document.getElementsByClassName(elm);

    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add(cls1);
      elements[i].classList.remove(cls2);
    }
  }

  handleAccordian(key) {
    let accorDian = document.getElementById(`collapse${key}`);
    let em = document.getElementById(`em${key}`);
    let el = document.getElementById(`el${key}`);

    if (accValue == key) {
      accorDian.classList.remove("show");
      accorDian.classList.add("hide");
      em.classList.remove("hide");
      em.classList.add("show");
      el.classList.remove("show");
      el.classList.add("hide");
      accValue = null;
    } else {
      this.addClasses("accordionItems", "hide", "show");
      this.addClasses("ic1", "show", "hide");
      this.addClasses("ic2", "hide", "show");
      accorDian.classList.remove("hide");
      accorDian.classList.add("show");
      em.classList.remove("show");
      em.classList.add("hide");
      el.classList.remove("hide");
      el.classList.add("show");
      accValue = key;
    }
  }

  setLinks(url) {
    //this.GAObject.gaTrack('','jsms', 'Homepage_R', 'matrimonial footer');
    window.location.href = url;
  }

  render() {
    return __jsx("div", {
      className: "jsx-3348802793" + " " + "mHomePage"
    }, this.state.communityLinks.length > 0 && __jsx("div", {
      className: "jsx-3348802793" + " " + "connect_container pUB32 pt-0 pb-0"
    }, __jsx("div", {
      className: "jsx-3348802793" + " " + "container-fluid"
    }, __jsx("div", {
      className: "jsx-3348802793" + " " + "row"
    }, __jsx("div", {
      className: "jsx-3348802793" + " " + "col-sm-12"
    }, __jsx("div", {
      className: "jsx-3348802793" + " " + "match w-100"
    }, __jsx("h3", {
      className: "jsx-3348802793" + " " + "text-uppercase"
    }, "Browse"), __jsx("span", {
      className: "jsx-3348802793"
    }, __jsx("strong", {
      className: "jsx-3348802793" + " " + "pr-1 pl-0"
    }, "Matrimonial"), "Profiles By", " ")), this.state.communityLinks && this.state.communityLinks.map((item, key) => {
      return __jsx("div", {
        className: "jsx-3348802793" + " " + "accordion_tab w-100"
      }, __jsx("div", {
        className: "jsx-3348802793" + " " + "item"
      }, __jsx("div", {
        className: "jsx-3348802793" + " " + "accordion"
      }, __jsx("div", {
        className: "jsx-3348802793" + " " + "card border-0"
      }, __jsx("div", {
        className: "jsx-3348802793" + " " + "card-header p-0 w-100"
      }, __jsx("h5", {
        className: "jsx-3348802793" + " " + "mb-0"
      }, __jsx("div", {
        onClick: e => {
          this.handleAccordian(key);
        },
        className: "jsx-3348802793" + " " + " w-100 btn btn-link d-flex  justify-content-between align-items-center"
      }, item.displayName, __jsx("span", {
        id: `em${key}`,
        className: "jsx-3348802793" + " " + "m-0 ic1 show"
      }, __jsx(_static_svgHandler__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: "expand_more",
        css: {
          height: "22px",
          width: "22px",
          color: "#4C6176"
        }
      })), __jsx("span", {
        id: `el${key}`,
        className: "jsx-3348802793" + " " + "m-0 ic2  hide"
      }, __jsx(_static_svgHandler__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: "expand_less",
        css: {
          height: "22px",
          width: "22px",
          color: "#4C6176"
        }
      }))))), __jsx("div", {
        id: `collapse${key}`,
        className: "jsx-3348802793" + " " + "mar-0 pt-4 hide accordionItems"
      }, __jsx("div", {
        className: "jsx-3348802793" + " " + "card-body p-0"
      }, __jsx("div", {
        className: "jsx-3348802793" + " " + "links"
      }, item.props.map(data => {
        return __jsx("div", {
          className: "jsx-3348802793" + " " + "mar-0 wid50p allLinks"
        }, __jsx("div", {
          className: "jsx-3348802793" + " " + "matrimonial_state"
        }, __jsx("a", {
          href: "javascript:void(0)",
          onClick: e => {
            this.setLinks(data.link);
          },
          className: "jsx-3348802793"
        }, data.name, " Matrimonial", " ")), __jsx("div", {
          className: "jsx-3348802793" + " " + "comLinks"
        }, __jsx("a", {
          href: "javascript:void(0)",
          onClick: e => {
            this.setLinks(data.brides);
          },
          className: "jsx-3348802793"
        }, data.name, " Brides")), __jsx("div", {
          className: "jsx-3348802793" + " " + "comLinks"
        }, __jsx("a", {
          href: "javascript:void(0)",
          onClick: e => {
            this.setLinks(data.grooms);
          },
          className: "jsx-3348802793"
        }, data.name, " Grooms")));
      }))))))));
    }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3348802793"
    }, "*.jsx-3348802793{margin:0 auto;padding:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);}a.jsx-3348802793{-webkit-text-decoration:none;text-decoration:none;}.wid50p.jsx-3348802793{width:50%;}.hide.jsx-3348802793{display:none;}.show.jsx-3348802793{display:block;}.row.jsx-3348802793{display:table;}.wid50p.jsx-3348802793{width:50%;}.mHomePage.jsx-3348802793 div.jsx-3348802793,.mHomePage.jsx-3348802793 a.jsx-3348802793{outline:0;}.mHomePage.jsx-3348802793 div.jsx-3348802793:focus,.mHomePage.jsx-3348802793 a.jsx-3348802793:focus{outline:0;}.mHomePage.jsx-3348802793 .mar-0.jsx-3348802793{margin:0;}.mHomePage.jsx-3348802793 .match.jsx-3348802793 h3.jsx-3348802793{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;}.mHomePage.jsx-3348802793 .match.jsx-3348802793 span.jsx-3348802793{font-size:16px;}.mHomePage.jsx-3348802793 .match.jsx-3348802793 span.jsx-3348802793 strong.jsx-3348802793{padding:0 0 0 5px;color:#d9475c;}.mHomePage.jsx-3348802793 .match.jsx-3348802793 span.jsx-3348802793{font-size:20px;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-header.jsx-3348802793{background:transparent;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-header.jsx-3348802793 .btn-link.jsx-3348802793{padding-bottom:15px;padding-top:15px;color:#4c6176;font-weight:600;font-size:14px;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-header.jsx-3348802793 .btn-link.jsx-3348802793:focus,.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-header.jsx-3348802793 .btn-link.jsx-3348802793:hover{-webkit-text-decoration:none;text-decoration:none;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-body.jsx-3348802793 a.jsx-3348802793{margin:0 0 10px;font-size:14px;color:#4c6176;display:inline-block;line-height:20px;}.mHomePage.jsx-3348802793 .container-fluid.jsx-3348802793{width:100%;padding-right:24px;padding-left:24px;}.mHomePage.jsx-3348802793 .row.jsx-3348802793{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-24px;margin-left:-24px;}.mHomePage.jsx-3348802793 .col-sm-12.jsx-3348802793{position:relative;width:100%;min-height:1px;}.mHomePage.jsx-3348802793 .links.jsx-3348802793{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}@media (min-width:576px){.mHomePage.jsx-3348802793 .col-sm-12.jsx-3348802793{-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;}}.mHomePage.jsx-3348802793 .card.jsx-3348802793{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,0.125);border-radius:0.25rem;}.mHomePage.jsx-3348802793 .card-body.jsx-3348802793{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem;}.mHomePage.jsx-3348802793 .card-header.jsx-3348802793{padding:0.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,0.03);border-bottom:1px solid rgba(0,0,0,0.125);}.mHomePage.jsx-3348802793 .card-header.jsx-3348802793:first-child{border-radius:calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card.jsx-3348802793:first-of-type{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card.jsx-3348802793:last-of-type{border-top-left-radius:0;border-top-right-radius:0;}.mHomePage.jsx-3348802793 .border-0.jsx-3348802793{border:0 !important;}.mHomePage.jsx-3348802793 .d-flex.jsx-3348802793{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;}.mHomePage.jsx-3348802793 .justify-content-between.jsx-3348802793{-webkit-box-pack:justify !important;-webkit-justify-content:space-between !important;-ms-flex-pack:justify !important;justify-content:space-between !important;}.mHomePage.jsx-3348802793 .align-items-center.jsx-3348802793{-webkit-align-items:center !important;-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important;}.mHomePage.jsx-3348802793 .w-100.jsx-3348802793{width:100% !important;}.mHomePage.jsx-3348802793 .m-0.jsx-3348802793{margin:0 !important;}.mHomePage.jsx-3348802793 .mb-0.jsx-3348802793{margin-bottom:0 !important;}.mHomePage.jsx-3348802793 .p-0.jsx-3348802793{padding:0 !important;}.mHomePage.jsx-3348802793 .pl-0.jsx-3348802793{padding-left:0 !important;}.mHomePage.jsx-3348802793 .pt-0.jsx-3348802793{padding-top:0 !important;}.mHomePage.jsx-3348802793 .pb-0.jsx-3348802793{padding-bottom:0 !important;}.mHomePage.jsx-3348802793 .pr-1.jsx-3348802793{padding-right:0.25rem !important;}.mHomePage.jsx-3348802793 .pt-4.jsx-3348802793{padding-top:1.5rem !important;}.mHomePage.jsx-3348802793 .text-uppercase.jsx-3348802793{text-transform:uppercase !important;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-header.jsx-3348802793{background:transparent;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-header.jsx-3348802793 .btn-link.jsx-3348802793{padding-bottom:15px !important;color:#4c6176;font-weight:600;font-size:14px;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-header.jsx-3348802793 .btn-link.jsx-3348802793:focus,.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-header.jsx-3348802793 .btn-link.jsx-3348802793:hover{-webkit-text-decoration:none;text-decoration:none;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-body.jsx-3348802793 a.jsx-3348802793{margin:0 0 10px;font-size:14px;color:#4c6176;display:block;line-height:20px;}.mHomePage.jsx-3348802793 .pUB32.jsx-3348802793{padding:32px 24px;}.mHomePage.jsx-3348802793 .allLinks.jsx-3348802793{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding-top:8px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.mHomePage.jsx-3348802793 .comLinks.jsx-3348802793{font-size:14px;color:rgba(0,0,0,0.6);line-height:30px;font-weight:400;margin:0;}.mHomePage.jsx-3348802793 .matrimonial_state.jsx-3348802793{font-size:14px;color:#4c6176;line-height:30px;font-weight:500;margin:0;}a.jsx-3348802793{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9Db21tdW5pdHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0xvQixBQUcyQixBQVFPLEFBR1gsQUFHRyxBQUdDLEFBR0EsQUFHSixBQUlBLEFBSUEsQUFHRCxBQUdNLEFBT0EsQUFHRyxBQUlILEFBR1EsQUFHSCxBQVFDLEFBR0wsQUFPTCxBQUtFLEFBTUssQUFLTCxBQUtHLEFBS0UsQUFXSixBQUlVLEFBTWtDLEFBRzFDLEFBS1MsQUFJTCxBQUdJLEFBR2lCLEFBR1gsQUFHUixBQUdGLEFBR08sQUFHTixBQUdLLEFBR0QsQUFHRyxBQUdLLEFBR0gsQUFHTSxBQUdiLEFBR1EsQUFPVixBQUdMLEFBT0UsQUFHUixBQU9LLEFBT0EsQUFPTSxTQXpMdkIsQ0F2QkEsQUFZQSxBQUlBLEFBSUEsQUF3S2UsQ0E1SE0sRUE3RHJCLENBZFksQUFpQlosQUFHQSxDQWlCa0IsQUFPbEIsQUFPQSxBQTJKMkIsQUFPWCxDQWpKQyxBQXlEYyxBQWdFZCxFQTlJRCxBQXVDSCxBQWVFLEFBK0ZmLEVBM0ltQixBQTZFbkIsQUFlQSxDQU1BLENBVEEsQ0E1RkEsQUEwSEEsQ0EvSzZCLEFBbUhYLENBY1UsQUErQjVCLENBSEEsQ0FOQSxDQVlBLENBN0VpQixBQStIRSxDQTFJQyxBQThGcEIsQ0FwSWdCLEFBK0JBLEFBOEdBLEFBV0EsQ0E5SWhCLENBdUhBLEdBTUEsQ0FuSGdCLEFBcUpHLEdBMUZvQixJQTdCdkMsQ0FqRG9CLEFBK0JHLEFBd0RPLEFBc0RaLEFBV0YsQ0F3QkUsRUExSWxCLEVBckVBLEFBeURBLEFBeUhBLEFBa0NBLENBMU5nQyxBQXlEZCxBQXdFbEIsR0FuQ21CLEFBZ0JELEFBZ0dBLElBdEZsQixDQXNFbUIsRUFYRixDQW1DTixDQWhMWSxHQStCSixDQVhGLEVBcUNmLENBZ0JGLEFBZ0dXLENBUVgsRUExRkEsQ0EvQ2lCLEFBV0EsQUEyQjhCLEVBZ0UvQyxBQVdBLEdBaUJBLEVBL013QixDQTBEeEIsQ0FXQSxDQWdJZ0IsUUFsR1EsV0FsR3VCLGFBbUgvQyxFQWtCQSxhQXhEcUIsQUFXckIsTUFtREEsQ0EwRGtCLE9BcE1sQixLQTZFb0IsSUF3SEksS0E5RHhCLEtBbkdBLElBMENBLEVBb0JjLFlBQ1MscUJBQ0Msc0JBQ0ssT0FpRzdCLG9CQWhHd0MsbUNBQ2hCLHNCQUN4QiIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvQ29tbXVuaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uL3N0YXRpYy9zdmdIYW5kbGVyXCI7XG4vLyBpbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvc3ZnSGFuZGxlclwiO1xuLy8gaW1wb3J0IEdBIGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29tcG9uZW50cy9HQVwiO1xuLy8gbGV0IEFQSV9TRVJWRVJfQ09OU1RBTlRTXG5sZXQgYWNjVmFsdWUgPSBudWxsO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjN2xpbmtzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gIHRoaXMuR0FPYmplY3QgPSBuZXcgR0EoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29tbXVuaXR5TGlua3M6IFtdXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0RGF0YSgpO1xuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICBheGlvc1xuICAgICAgLmdldChgaHR0cHM6Ly93d3cuamVldmFuc2F0aGkuY29tL3Nlby9jb21tdW5pdHlMaW5rcy9zZW8vY29tbXVuaXR5TGlua3NgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuZGF0YSAmJiBBcnJheS5pc0FycmF5KHJlc3BvbnNlLmRhdGEpKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21tdW5pdHlMaW5rczogcmVzcG9uc2UuZGF0YSB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYWRkQ2xhc3NlcyhlbG0sIGNsczEsIGNsczIpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGVsbSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZWxlbWVudHNbaV0uY2xhc3NMaXN0LmFkZChjbHMxKTtcbiAgICAgIGVsZW1lbnRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoY2xzMik7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWNjb3JkaWFuKGtleSkge1xuICAgIGxldCBhY2NvckRpYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY29sbGFwc2Uke2tleX1gKTtcbiAgICBsZXQgZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZW0ke2tleX1gKTtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZWwke2tleX1gKTtcbiAgICBpZiAoYWNjVmFsdWUgPT0ga2V5KSB7XG4gICAgICBhY2NvckRpYW4uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICBhY2NvckRpYW4uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICBlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIGVtLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIGFjY1ZhbHVlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRDbGFzc2VzKFwiYWNjb3JkaW9uSXRlbXNcIiwgXCJoaWRlXCIsIFwic2hvd1wiKTtcbiAgICAgIHRoaXMuYWRkQ2xhc3NlcyhcImljMVwiLCBcInNob3dcIiwgXCJoaWRlXCIpO1xuICAgICAgdGhpcy5hZGRDbGFzc2VzKFwiaWMyXCIsIFwiaGlkZVwiLCBcInNob3dcIik7XG4gICAgICBhY2NvckRpYW4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICBhY2NvckRpYW4uY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICBlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgIGVtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgIGFjY1ZhbHVlID0ga2V5O1xuICAgIH1cbiAgfVxuICBzZXRMaW5rcyh1cmwpIHtcbiAgICAvL3RoaXMuR0FPYmplY3QuZ2FUcmFjaygnJywnanNtcycsICdIb21lcGFnZV9SJywgJ21hdHJpbW9uaWFsIGZvb3RlcicpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtSG9tZVBhZ2VcIj5cbiAgICAgICAge3RoaXMuc3RhdGUuY29tbXVuaXR5TGlua3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25uZWN0X2NvbnRhaW5lciBwVUIzMiBwdC0wIHBiLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0Y2ggdy0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlXCI+QnJvd3NlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJwci0xIHBsLTBcIj5NYXRyaW1vbmlhbDwvc3Ryb25nPlByb2ZpbGVzXG4gICAgICAgICAgICAgICAgICAgICAgQnl7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29tbXVuaXR5TGlua3MgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb21tdW5pdHlMaW5rcy5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbl90YWIgdy0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib3JkZXItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIHAtMCB3LTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQWNjb3JkaWFuKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMCBidG4gYnRuLWxpbmsgZC1mbGV4ICBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLTAgaWMxIHNob3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgZW0ke2tleX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1wiZXhwYW5kX21vcmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM0QzYxNzZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLTAgaWMyICBoaWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YGVsJHtrZXl9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcImV4cGFuZF9sZXNzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNEM2MTc2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXItMCBwdC00IGhpZGUgYWNjb3JkaW9uSXRlbXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgY29sbGFwc2Uke2tleX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByb3BzLm1hcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXItMCB3aWQ1MHAgYWxsTGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRyaW1vbmlhbF9zdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExpbmtzKGRhdGEubGluayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9IE1hdHJpbW9uaWFse1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tTGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRMaW5rcyhkYXRhLmJyaWRlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9IEJyaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tTGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRMaW5rcyhkYXRhLmdyb29tcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9IEdyb29tc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAud2lkNTBwIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oaWRlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zaG93IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAud2lkNTBwIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgZGl2LFxuICAgICAgICAgIC5tSG9tZVBhZ2UgYSB7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIGRpdjpmb2N1cyxcbiAgICAgICAgICAubUhvbWVQYWdlIGE6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAubWFyLTAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5tYXRjaCBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgY29sb3I6ICM4YTlkYjA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLm1hdGNoIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5tYXRjaCBzcGFuIHN0cm9uZyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCA1cHg7XG4gICAgICAgICAgICBjb2xvcjogI2Q5NDc1YztcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAubWF0Y2ggc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmFjY29yZGlvbiAuY2FyZC1oZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmFjY29yZGlvbiAuY2FyZC1oZWFkZXIgLmJ0bi1saW5rIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgICBjb2xvcjogIzRjNjE3NjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmFjY29yZGlvbiAuY2FyZC1oZWFkZXIgLmJ0bi1saW5rOmZvY3VzLFxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmFjY29yZGlvbiAuY2FyZC1oZWFkZXIgLmJ0bi1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAuYWNjb3JkaW9uIC5jYXJkLWJvZHkgYSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM0YzYxNzY7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAuY29udGFpbmVyLWZsdWlkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAucm93IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0yNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5jb2wtc20tMTIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmxpbmtzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgLm1Ib21lUGFnZSAuY29sLXNtLTEyIHtcbiAgICAgICAgICAgICAgZmxleDogMCAwIDEwMCU7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAuY2FyZCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmNhcmQtYm9keSB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmNhcmQtaGVhZGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMjVyZW0gLSAxcHgpIGNhbGMoMC4yNXJlbSAtIDFweCkgMCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5hY2NvcmRpb24gLmNhcmQ6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5hY2NvcmRpb24gLmNhcmQ6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAuYm9yZGVyLTAge1xuICAgICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmQtZmxleCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC53LTEwMCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5tLTAge1xuICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLm1iLTAge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5wLTAge1xuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5wbC0wIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5wdC0wIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLnBiLTAge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAucHItMSB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLnB0LTQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC50ZXh0LXVwcGVyY2FzZSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmFjY29yZGlvbiAuY2FyZC1oZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmFjY29yZGlvbiAuY2FyZC1oZWFkZXIgLmJ0bi1saW5rIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogIzRjNjE3NjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmFjY29yZGlvbiAuY2FyZC1oZWFkZXIgLmJ0bi1saW5rOmZvY3VzLFxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmFjY29yZGlvbiAuY2FyZC1oZWFkZXIgLmJ0bi1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAuYWNjb3JkaW9uIC5jYXJkLWJvZHkgYSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM0YzYxNzY7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5wVUIzMiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmFsbExpbmtzIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAuY29tTGlua3Mge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAubWF0cmltb25pYWxfc3RhdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM0YzYxNzY7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Community.js */"));
  }

}

/***/ }),

/***/ "./components/home/DownloadApp.js":
/*!****************************************!*\
  !*** ./components/home/DownloadApp.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/theme */ "./static/theme.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function DownloadApp() {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1296489133", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]])
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1296489133", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "fontreg"
  }, "Download Jeevansathi APP"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1296489133", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "fontreg"
  }, "Best rated APP in online matrimony segment."), __jsx("img", {
    src: "../../static/images/nhm_phoneImg.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1296489133", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]])
  }), __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1296489133", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "fontreg"
  }, "DOWNLOAD APP"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1296489133",
    dynamic: [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]
  }, `div.__jsx-style-dynamic-selector{text-align:center;padding:30px;background-color:#e1e4e7;}h2.__jsx-style-dynamic-selector{color:#34495e;font-size:20px;margin-bottom:0px;}p.__jsx-style-dynamic-selector{color:#666666;font-size:15px;margin-top:5px;}a.__jsx-style-dynamic-selector{color:${_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor};-webkit-text-decoration:none;text-decoration:none;font-size:18px;}img.__jsx-style-dynamic-selector{width:100%;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9Eb3dubG9hZEFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXa0IsQUFHNkIsQUFNSixBQUtBLEFBS3FCLEFBS3hCLFdBQ2IsR0FmaUIsQUFLQSxJQVhGLFdBT0ssQUFLSCxFQVhVLElBZUosU0FIdkIsR0FMQSxTQU5BLDZCQWVpQixlQUNqQiIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvRG93bmxvYWRBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3N0YXRpYy90aGVtZVwiO1xuXG5mdW5jdGlvbiBEb3dubG9hZEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnRyZWdcIj5Eb3dubG9hZCBKZWV2YW5zYXRoaSBBUFA8L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udHJlZ1wiPkJlc3QgcmF0ZWQgQVBQIGluIG9ubGluZSBtYXRyaW1vbnkgc2VnbWVudC48L3A+XG4gICAgICA8aW1nIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbmhtX3Bob25lSW1nLnBuZ1wiIC8+XG4gICAgICA8YSBjbGFzc05hbWU9XCJmb250cmVnXCI+RE9XTkxPQUQgQVBQPC9hPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTRlNztcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBjb2xvcjogIzM0NDk1ZTtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUucHJpbWFyeUNvbG9yfTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG93bmxvYWRBcHA7XG4iXX0= */
/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/DownloadApp.js */`));
}

/* harmony default export */ __webpack_exports__["default"] = (DownloadApp);

/***/ }),

/***/ "./components/home/Footer.js":
/*!***********************************!*\
  !*** ./components/home/Footer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Footer() {
  const {
    0: isVisible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return __jsx("div", {
    className: "jsx-3172299521" + " " + "container footer"
  }, __jsx("div", {
    className: "jsx-3172299521" + " " + "logo-title"
  }, __jsx("img", {
    src: "../../static/images/js_footer_logo.png",
    className: "jsx-3172299521"
  }), __jsx("div", {
    className: "jsx-3172299521"
  }, __jsx("cite", {
    className: "jsx-3172299521"
  }, "Jeevansathi"), __jsx("span", {
    className: "jsx-3172299521"
  }, "Be found"))), __jsx("div", {
    style: {
      position: "relative"
    },
    className: "jsx-3172299521"
  }, __jsx("p", {
    className: "jsx-3172299521"
  }, "Jeevansathi.com is one of the leading and most trusted matrimony websites in India. Making happy marriages happen since 1998, Jeevansathi understands the importance of choosing the right partner for marriage, especially in the Indian cultural setup. It believes in providing the most secure and convenient matchmaking experience to all its members by ensuring 100% screening exclusive privacy options, photo protection features and verification of phone numbers and more information. While the online matrimonial site connects millions of people directly, Jeevansathi also maintains a dedicated Customer Care team and offers offline Match Point Centers across the country, for deeper and personal interaction with prospective brides, grooms and/or families.", __jsx("br", {
    className: "jsx-3172299521"
  }), __jsx("p", {
    style: {
      display: isVisible ? "block" : "none",
      marginTop: 0
    },
    className: "jsx-3172299521"
  }, "Please note: Jeevansathi is only meant for users with a bonafide intent to enter into a matrimonial alliance and is not meant for users interested in dating only. Jeevansathi platform should not be used to post any obscene material, such actions may lead to permanent deletion of the profile used to upload such content.")), __jsx("div", {
    style: {
      position: "absolute",
      display: isVisible ? "none" : "block"
    },
    className: "jsx-3172299521" + " " + "view-more"
  }, __jsx("span", {
    onClick: () => setVisible(true),
    className: "jsx-3172299521"
  }, "View more"))), __jsx("div", {
    className: "jsx-3172299521" + " " + "follow"
  }, __jsx("div", {
    className: "jsx-3172299521"
  }, __jsx("span", {
    className: "jsx-3172299521"
  }, "Follow us on"), __jsx("div", {
    className: "jsx-3172299521"
  }, __jsx("a", {
    href: "https://www.facebook.com/jeevansathi",
    className: "jsx-3172299521" + " " + "facebook"
  }), __jsx("a", {
    href: "https://www.twitter.com/jeevansathi",
    className: "jsx-3172299521" + " " + "twitter"
  }), __jsx("a", {
    href: "https://www.instagram.com/jeevansathi",
    className: "jsx-3172299521" + " " + "instagram"
  }))), __jsx("div", {
    className: "jsx-3172299521" + " " + "shift-right"
  }, __jsx("span", {
    className: "jsx-3172299521"
  }, "App available on"), __jsx("div", {
    className: "jsx-3172299521"
  }, __jsx("a", {
    href: "https://play.google.com/store/apps/details?id=com.jeevansathi.android",
    target: "_blank",
    className: "jsx-3172299521" + " " + "play-store"
  }), __jsx("a", {
    href: "https://itunes.apple.com/in/app/jeevansathi/id969994186?mt=8",
    target: "_blank",
    className: "jsx-3172299521" + " " + "app-store"
  })))), __jsx("div", {
    className: "jsx-3172299521" + " " + "toll-free"
  }, __jsx("span", {
    className: "jsx-3172299521"
  }, "Customer Service (Toll Free)"), __jsx("b", {
    className: "jsx-3172299521"
  }, "1-800-419-6299")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3172299521"
  }, ".container.jsx-3172299521{padding:32px 24px;background:#34495e;color:white;}.logo-title.jsx-3172299521{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.jsx-3172299521{margin-right:15px;}cite.jsx-3172299521{font-size:12px;}.logo-title.jsx-3172299521 span.jsx-3172299521{font-size:9px;color:#959499;display:block;}p.jsx-3172299521{font-size:14px;line-height:23px;-webkit-transition:height 0.3s ease;transition:height 0.3s ease;}a.jsx-3172299521{background-image:url(../../static/images/footerIconsSprite.svg);background-repeat:no-repeat;width:17px;height:17px;margin:10px 10px 0px 0px;display:inline-block;}.view-more.jsx-3172299521{bottom:0;left:0;text-align:center;width:100%;color:#fff;min-height:120px;background-image:linear-gradient( -180deg, rgba(52,73,94,0) 0%, #34495e 74% );}.view-more.jsx-3172299521 span.jsx-3172299521{position:absolute;bottom:0;-webkit-transform:translate(-50%,0%);-ms-transform:translate(-50%,0%);transform:translate(-50%,0%);}.follow.jsx-3172299521{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.shift-right.jsx-3172299521{margin-left:70px;}.follow.jsx-3172299521 span.jsx-3172299521{font-size:12px;font-weight:600;}.facebook.jsx-3172299521{background-position:-90px -1px;}.twitter.jsx-3172299521{background-position:-140px -1px;}.instagram.jsx-3172299521{background-position:-116px -1px;}.play-store.jsx-3172299521{background-position:-66px 0;}.app-store.jsx-3172299521{background-position:-40px -1px;}.toll-free.jsx-3172299521{font-size:12px;margin-top:20px;}.toll-free.jsx-3172299521 b.jsx-3172299521{display:block;margin-top:10px;font-size:16px;font-weight:normal;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0ZrQixBQUc2QixBQU1MLEFBS0ssQUFJSCxBQUdELEFBS0MsQUFNaUQsQUFTdkQsQUFjUyxBQU1MLEFBR0ksQUFJRixBQUtnQixBQUdDLEFBR0EsQUFHSixBQUdHLEFBR2hCLEFBSUQsU0FsRFAsS0FwQk8sQUF1RUUsQ0ExRWxCLEFBUW1CLEFBMENELEFBb0JBLENBOUNFLENBc0JwQixDQTdEcUIsQUFXckIsQUF5Q1csU0FDcUIsQ0FsQ2hCLEFBNERoQixFQVdpQixDQXhCakIsQUFJQSxBQVlBLEFBSUEsQ0E5RDhCLEFBaUQ5QixBQUdBLEVBcENhLEdBdkNDLEtBbUJkLEdBcUJhLEFBa0RRLElBekZyQixPQXdDbUIsUUFiVyxBQStEOUIsU0E3Q0csQ0F6Q2tCLEFBb0RyQixrQkE1QmEsSUFMYixPQU1jLFlBQ2EsV0FzQjNCLGNBckJ1QixXQWV2QixVQWRBLE1BM0JBIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gRm9vdGVyKCkge1xuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZvb3RlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXRpdGxlXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9qc19mb290ZXJfbG9nby5wbmdcIiAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxjaXRlPkplZXZhbnNhdGhpPC9jaXRlPlxuXG4gICAgICAgICAgPHNwYW4+QmUgZm91bmQ8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEplZXZhbnNhdGhpLmNvbSBpcyBvbmUgb2YgdGhlIGxlYWRpbmcgYW5kIG1vc3QgdHJ1c3RlZCBtYXRyaW1vbnlcbiAgICAgICAgICB3ZWJzaXRlcyBpbiBJbmRpYS4gTWFraW5nIGhhcHB5IG1hcnJpYWdlcyBoYXBwZW4gc2luY2UgMTk5OCxcbiAgICAgICAgICBKZWV2YW5zYXRoaSB1bmRlcnN0YW5kcyB0aGUgaW1wb3J0YW5jZSBvZiBjaG9vc2luZyB0aGUgcmlnaHQgcGFydG5lclxuICAgICAgICAgIGZvciBtYXJyaWFnZSwgZXNwZWNpYWxseSBpbiB0aGUgSW5kaWFuIGN1bHR1cmFsIHNldHVwLiBJdCBiZWxpZXZlcyBpblxuICAgICAgICAgIHByb3ZpZGluZyB0aGUgbW9zdCBzZWN1cmUgYW5kIGNvbnZlbmllbnQgbWF0Y2htYWtpbmcgZXhwZXJpZW5jZSB0byBhbGxcbiAgICAgICAgICBpdHMgbWVtYmVycyBieSBlbnN1cmluZyAxMDAlIHNjcmVlbmluZyBleGNsdXNpdmUgcHJpdmFjeSBvcHRpb25zLFxuICAgICAgICAgIHBob3RvIHByb3RlY3Rpb24gZmVhdHVyZXMgYW5kIHZlcmlmaWNhdGlvbiBvZiBwaG9uZSBudW1iZXJzIGFuZCBtb3JlXG4gICAgICAgICAgaW5mb3JtYXRpb24uIFdoaWxlIHRoZSBvbmxpbmUgbWF0cmltb25pYWwgc2l0ZSBjb25uZWN0cyBtaWxsaW9ucyBvZlxuICAgICAgICAgIHBlb3BsZSBkaXJlY3RseSwgSmVldmFuc2F0aGkgYWxzbyBtYWludGFpbnMgYSBkZWRpY2F0ZWQgQ3VzdG9tZXIgQ2FyZVxuICAgICAgICAgIHRlYW0gYW5kIG9mZmVycyBvZmZsaW5lIE1hdGNoIFBvaW50IENlbnRlcnMgYWNyb3NzIHRoZSBjb3VudHJ5LCBmb3JcbiAgICAgICAgICBkZWVwZXIgYW5kIHBlcnNvbmFsIGludGVyYWN0aW9uIHdpdGggcHJvc3BlY3RpdmUgYnJpZGVzLCBncm9vbXMgYW5kL29yXG4gICAgICAgICAgZmFtaWxpZXMuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgZGlzcGxheTogaXNWaXNpYmxlID8gXCJibG9ja1wiIDogXCJub25lXCIsIG1hcmdpblRvcDogMCB9fT5cbiAgICAgICAgICAgIFBsZWFzZSBub3RlOiBKZWV2YW5zYXRoaSBpcyBvbmx5IG1lYW50IGZvciB1c2VycyB3aXRoIGEgYm9uYWZpZGVcbiAgICAgICAgICAgIGludGVudCB0byBlbnRlciBpbnRvIGEgbWF0cmltb25pYWwgYWxsaWFuY2UgYW5kIGlzIG5vdCBtZWFudCBmb3JcbiAgICAgICAgICAgIHVzZXJzIGludGVyZXN0ZWQgaW4gZGF0aW5nIG9ubHkuIEplZXZhbnNhdGhpIHBsYXRmb3JtIHNob3VsZCBub3QgYmVcbiAgICAgICAgICAgIHVzZWQgdG8gcG9zdCBhbnkgb2JzY2VuZSBtYXRlcmlhbCwgc3VjaCBhY3Rpb25zIG1heSBsZWFkIHRvXG4gICAgICAgICAgICBwZXJtYW5lbnQgZGVsZXRpb24gb2YgdGhlIHByb2ZpbGUgdXNlZCB0byB1cGxvYWQgc3VjaCBjb250ZW50LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBpc1Zpc2libGUgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIlxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidmlldy1tb3JlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUodHJ1ZSl9PlZpZXcgbW9yZTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb2xsb3dcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Bhbj5Gb2xsb3cgdXMgb248L3NwYW4+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vamVldmFuc2F0aGlcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYWNlYm9va1wiXG4gICAgICAgICAgICA+PC9hPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL2plZXZhbnNhdGhpXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHdpdHRlclwiXG4gICAgICAgICAgICA+PC9hPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vamVldmFuc2F0aGlcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnN0YWdyYW1cIlxuICAgICAgICAgICAgPjwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpZnQtcmlnaHRcIj5cbiAgICAgICAgICA8c3Bhbj5BcHAgYXZhaWxhYmxlIG9uPC9zcGFuPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5qZWV2YW5zYXRoaS5hbmRyb2lkXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGxheS1zdG9yZVwiXG4gICAgICAgICAgICA+PC9hPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9pbi9hcHAvamVldmFuc2F0aGkvaWQ5Njk5OTQxODY/bXQ9OFwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcC1zdG9yZVwiXG4gICAgICAgICAgICA+PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2xsLWZyZWVcIj5cbiAgICAgICAgPHNwYW4+Q3VzdG9tZXIgU2VydmljZSAoVG9sbCBGcmVlKTwvc3Bhbj5cbiAgICAgICAgPGI+MS04MDAtNDE5LTYyOTk8L2I+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzM0NDk1ZTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nby10aXRsZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBjaXRlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ28tdGl0bGUgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgICAgY29sb3I6ICM5NTk0OTk7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vc3RhdGljL2ltYWdlcy9mb290ZXJJY29uc1Nwcml0ZS5zdmcpO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDBweCAwcHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZpZXctbW9yZSB7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgIC0xODBkZWcsXG4gICAgICAgICAgICByZ2JhKDUyLCA3MywgOTQsIDApIDAlLFxuICAgICAgICAgICAgIzM0NDk1ZSA3NCVcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZpZXctbW9yZSBzcGFuIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb2xsb3cge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLnNoaWZ0LXJpZ2h0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb2xsb3cgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFjZWJvb2sge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05MHB4IC0xcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnR3aXR0ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDBweCAtMXB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbnN0YWdyYW0ge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTZweCAtMXB4O1xuICAgICAgICB9XG4gICAgICAgIC5wbGF5LXN0b3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjZweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5hcHAtc3RvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00MHB4IC0xcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRvbGwtZnJlZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRvbGwtZnJlZSBiIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Footer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/home/Home.js":
/*!*********************************!*\
  !*** ./components/home/Home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bannerSection_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bannerSection/Banner */ "./components/home/bannerSection/Banner.js");
/* harmony import */ var _Caption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Caption */ "./components/home/Caption.js");
/* harmony import */ var _MembershipPlans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MembershipPlans */ "./components/home/MembershipPlans.js");
/* harmony import */ var _MatchProfiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MatchProfiles */ "./components/home/MatchProfiles.js");
/* harmony import */ var _DownloadApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DownloadApp */ "./components/home/DownloadApp.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./About */ "./components/home/About.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Footer */ "./components/home/Footer.js");
/* harmony import */ var _BrowseMatrimonyProfiles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BrowseMatrimonyProfiles */ "./components/home/BrowseMatrimonyProfiles.js");
/* harmony import */ var _VerificationDetail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VerificationDetail */ "./components/home/VerificationDetail.js");
/* harmony import */ var _SimpleSteps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SimpleSteps */ "./components/home/SimpleSteps.js");
/* harmony import */ var _PrivacySetting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PrivacySetting */ "./components/home/PrivacySetting.js");
/* harmony import */ var _JSExclusive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./JSExclusive */ "./components/home/JSExclusive.js");
/* harmony import */ var _AboutApp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AboutApp */ "./components/home/AboutApp.js");
/* harmony import */ var _Community__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Community */ "./components/home/Community.js");
/* harmony import */ var _static_svgHandler__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../static/svgHandler */ "./static/svgHandler.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
















let iStyle = {
  height: "22px",
  verticalAlign: "middle",
  width: "22px",
  color: "#fff"
};

function Home() {
  const {
    0: imagesLoadingAfterScroll,
    1: changeLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  var imagesCalled = false;

  function isAnyPartOfElementInViewport(el) {
    let rect = document.getElementsByClassName(el)[0].getBoundingClientRect();
    let windowHeight = window.innerHeight || document.documentElement.clientHeight;
    let windowWidth = window.innerWidth || document.documentElement.clientWidth;
    let vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
    let horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
    return vertInView && horInView;
  }

  function handlePageScroll() {
    let headerContainer = document.getElementById("headerContainer");
    let floatDivBtn = document.getElementById("floatDivBtn");

    if (window.scrollY > 350) {
      headerContainer.classList.add("headerBg2");
      floatDivBtn.classList.add("bottom20");

      if (!imagesCalled) {
        changeLoading(true);
        imagesCalled = true;
      }
    } else {
      headerContainer.classList.remove("headerBg2");
      floatDivBtn.classList.remove("bottom20");
    }

    if (isAnyPartOfElementInViewport("footer")) {
      floatDivBtn.classList.remove("bottom20");
    }
  }

  function debounce(func, delay) {
    var inDebounce;
    return function () {
      // const context = this;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func(), delay);
    };
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    var scHandler = debounce(handlePageScroll, 50);
    window.addEventListener("scroll", scHandler, true);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    id: "floatDivBtn",
    className: "jsx-553295745" + " " + "w-100 regFloatBtn"
  }, __jsx("div", {
    onClick: e => {
      // this.GAObject.gaTrack(
      //   "",
      //   "jsms",
      //   "Homepage_R",
      //   "registration floater "
      // );
      window.location.href = "/profile/registration_new.php?source=home_float";
    },
    className: "jsx-553295745" + " " + "d-flex align-items-center floatDiv"
  }, __jsx("span", {
    className: "jsx-553295745"
  }, "Register Free"), __jsx("span", {
    className: "jsx-553295745" + " " + "nMargin"
  }, __jsx(_static_svgHandler__WEBPACK_IMPORTED_MODULE_16__["default"], {
    type: "chevron_right",
    css: iStyle
  })))), __jsx(_bannerSection_Banner__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_VerificationDetail__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(_SimpleSteps__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx(_PrivacySetting__WEBPACK_IMPORTED_MODULE_12__["default"], null), __jsx(_MembershipPlans__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_JSExclusive__WEBPACK_IMPORTED_MODULE_13__["default"], null), __jsx(_MatchProfiles__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_AboutApp__WEBPACK_IMPORTED_MODULE_14__["default"], null), __jsx(_Community__WEBPACK_IMPORTED_MODULE_15__["default"], null), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "553295745"
  }, "div.jsx-553295745{outline:0;}div.jsx-553295745:focus{outline:0;}.d-flex.jsx-553295745{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;margin:0 auto;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.align-items-center.jsx-553295745{-webkit-align-items:center !important;-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important;}.w-100.jsx-553295745{width:100% !important;}.floatDiv.jsx-553295745{background:rgb(217,71,92);color:rgb(255,255,255);padding:8px;border-radius:24px;line-height:25px;font-size:14px;font-weight:600;width:142px;box-shadow:0 3px 6px 0 rgba(0,0,0,0.2);}.regFloatBtn.jsx-553295745{position:fixed;bottom:-80px;z-index:10;-webkit-transition:all 0.4s cubic-bezier(0.165,0.84,0.44,1);transition:all 0.4s cubic-bezier(0.165,0.84,0.44,1);}.bottom20.jsx-553295745{bottom:20px;}.nMargin.jsx-553295745{margin:0 0 1px -10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9Ib21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdHa0IsQUFHcUIsQUFHQSxBQUdjLEFBS00sQUFHUixBQUdNLEFBV2IsQUFNSCxBQUdTLFVBcEN2QixBQUdBLEVBK0JBLEdBTmUsTUFTZixDQXZCQSxJQUcyQixFQVlkLFdBQzRDLFVBWjNDLFlBQ08sbUJBQ0YsaUJBQ0YsZUFDQyxNQWhCRixVQWlCRixJQWhCaUIsS0FJL0IsR0FhNEMsV0FPNUMsNEJBTkEsNEVBakJBIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9Ib21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4vYmFubmVyU2VjdGlvbi9CYW5uZXJcIjtcbmltcG9ydCBDYXB0aW9uIGZyb20gXCIuL0NhcHRpb25cIjtcbmltcG9ydCBNZW1iZXJzaGlwUGxhbnMgZnJvbSBcIi4vTWVtYmVyc2hpcFBsYW5zXCI7XG5pbXBvcnQgTWF0Y2hQcm9maWxlcyBmcm9tIFwiLi9NYXRjaFByb2ZpbGVzXCI7XG5pbXBvcnQgRG93bmxvYWRBcHAgZnJvbSBcIi4vRG93bmxvYWRBcHBcIjtcbmltcG9ydCBBYm91dCBmcm9tIFwiLi9BYm91dFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBCcm93c2VNYXRyaW1vbnlQcm9maWxlcyBmcm9tIFwiLi9Ccm93c2VNYXRyaW1vbnlQcm9maWxlc1wiO1xuaW1wb3J0IFZlcmlmaWNhdGlvbkRldGFpbCBmcm9tIFwiLi9WZXJpZmljYXRpb25EZXRhaWxcIjtcbmltcG9ydCBTaW1wbGVTdGVwcyBmcm9tIFwiLi9TaW1wbGVTdGVwc1wiO1xuaW1wb3J0IFByaXZhY3lTZXR0aW5nIGZyb20gXCIuL1ByaXZhY3lTZXR0aW5nXCI7XG5pbXBvcnQgSlNFeGNsdXNpdmUgZnJvbSBcIi4vSlNFeGNsdXNpdmVcIjtcbmltcG9ydCBBYm91dEFwcCBmcm9tIFwiLi9BYm91dEFwcFwiO1xuaW1wb3J0IENvbW11bml0eSBmcm9tIFwiLi9Db21tdW5pdHlcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9zdGF0aWMvc3ZnSGFuZGxlclwiO1xuXG5sZXQgaVN0eWxlID0ge1xuICBoZWlnaHQ6IFwiMjJweFwiLFxuICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICB3aWR0aDogXCIyMnB4XCIsXG4gIGNvbG9yOiBcIiNmZmZcIlxufTtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2ltYWdlc0xvYWRpbmdBZnRlclNjcm9sbCwgY2hhbmdlTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHZhciBpbWFnZXNDYWxsZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBpc0FueVBhcnRPZkVsZW1lbnRJblZpZXdwb3J0KGVsKSB7XG4gICAgbGV0IHJlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGVsKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgd2luZG93SGVpZ2h0ID1cbiAgICAgIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICBsZXQgdmVydEluVmlldyA9IHJlY3QudG9wIDw9IHdpbmRvd0hlaWdodCAmJiByZWN0LnRvcCArIHJlY3QuaGVpZ2h0ID49IDA7XG4gICAgbGV0IGhvckluVmlldyA9IHJlY3QubGVmdCA8PSB3aW5kb3dXaWR0aCAmJiByZWN0LmxlZnQgKyByZWN0LndpZHRoID49IDA7XG4gICAgcmV0dXJuIHZlcnRJblZpZXcgJiYgaG9ySW5WaWV3O1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUGFnZVNjcm9sbCgpIHtcbiAgICBsZXQgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJDb250YWluZXJcIik7XG4gICAgbGV0IGZsb2F0RGl2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbG9hdERpdkJ0blwiKTtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiAzNTApIHtcbiAgICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyQmcyXCIpO1xuICAgICAgZmxvYXREaXZCdG4uY2xhc3NMaXN0LmFkZChcImJvdHRvbTIwXCIpO1xuICAgICAgaWYgKCFpbWFnZXNDYWxsZWQpIHtcbiAgICAgICAgY2hhbmdlTG9hZGluZyh0cnVlKTtcbiAgICAgICAgaW1hZ2VzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJCZzJcIik7XG4gICAgICBmbG9hdERpdkJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYm90dG9tMjBcIik7XG4gICAgfVxuICAgIGlmIChpc0FueVBhcnRPZkVsZW1lbnRJblZpZXdwb3J0KFwiZm9vdGVyXCIpKSB7XG4gICAgICBmbG9hdERpdkJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYm90dG9tMjBcIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgZGVsYXkpIHtcbiAgICB2YXIgaW5EZWJvdW5jZTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICAgIGNsZWFyVGltZW91dChpbkRlYm91bmNlKTtcbiAgICAgIGluRGVib3VuY2UgPSBzZXRUaW1lb3V0KCgpID0+IGZ1bmMoKSwgZGVsYXkpO1xuICAgIH07XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciBzY0hhbmRsZXIgPSBkZWJvdW5jZShoYW5kbGVQYWdlU2Nyb2xsLCA1MCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2NIYW5kbGVyLCB0cnVlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcmVnRmxvYXRCdG5cIiBpZD1cImZsb2F0RGl2QnRuXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGZsb2F0RGl2XCJcbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMuR0FPYmplY3QuZ2FUcmFjayhcbiAgICAgICAgICAgIC8vICAgXCJcIixcbiAgICAgICAgICAgIC8vICAgXCJqc21zXCIsXG4gICAgICAgICAgICAvLyAgIFwiSG9tZXBhZ2VfUlwiLFxuICAgICAgICAgICAgLy8gICBcInJlZ2lzdHJhdGlvbiBmbG9hdGVyIFwiXG4gICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPVxuICAgICAgICAgICAgICBcIi9wcm9maWxlL3JlZ2lzdHJhdGlvbl9uZXcucGhwP3NvdXJjZT1ob21lX2Zsb2F0XCI7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuPlJlZ2lzdGVyIEZyZWU8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibk1hcmdpblwiPlxuICAgICAgICAgICAgPEljb24gdHlwZT17XCJjaGV2cm9uX3JpZ2h0XCJ9IGNzcz17aVN0eWxlfSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCYW5uZXIgLz5cbiAgICAgIDxWZXJpZmljYXRpb25EZXRhaWwgLz5cbiAgICAgIDxTaW1wbGVTdGVwcyAvPlxuICAgICAgPFByaXZhY3lTZXR0aW5nIC8+XG4gICAgICA8TWVtYmVyc2hpcFBsYW5zIC8+XG4gICAgICA8SlNFeGNsdXNpdmUgLz5cbiAgICAgIDxNYXRjaFByb2ZpbGVzIC8+XG4gICAgICA8QWJvdXRBcHAgLz5cblxuICAgICAgPENvbW11bml0eSAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIH1cbiAgICAgICAgZGl2OmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5kLWZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuICAgICAgICAuYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLnctMTAwIHtcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5mbG9hdERpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIxNywgNzEsIDkyKTtcbiAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHdpZHRoOiAxNDJweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIH1cbiAgICAgICAgLnJlZ0Zsb2F0QnRuIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAtODBweDtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xuICAgICAgICB9XG4gICAgICAgIC5ib3R0b20yMCB7XG4gICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uTWFyZ2luIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcHggLTEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Home.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./components/home/JSExclusive.js":
/*!****************************************!*\
  !*** ./components/home/JSExclusive.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/data */ "./static/data.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function JSExclusive() {
  return __jsx("div", {
    className: "jsx-1348463277" + " " + "container"
  }, __jsx("div", {
    className: "jsx-1348463277"
  }, __jsx("h3", {
    className: "jsx-1348463277"
  }, "Personalised Match-Making Service"), __jsx("span", {
    className: "jsx-1348463277"
  }, "Introducing ", __jsx("strong", {
    className: "jsx-1348463277"
  }, " JS Exclusive"), " ")), __jsx("div", {
    className: "jsx-1348463277"
  }, __jsx("img", {
    src: "../../static/images/exclusive.png",
    className: "jsx-1348463277" + " " + "exclusive"
  })), __jsx("div", {
    className: "jsx-1348463277"
  }, __jsx("ul", {
    className: "jsx-1348463277"
  }, _static_data__WEBPACK_IMPORTED_MODULE_2__["exclusiveList"].map(function ({
    imgURL,
    text
  }) {
    return __jsx("li", {
      className: "jsx-1348463277"
    }, __jsx("img", {
      src: imgURL,
      className: "jsx-1348463277"
    }), __jsx("span", {
      className: "jsx-1348463277"
    }, text));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1348463277"
  }, ".container.jsx-1348463277{padding:32px 24px;}h3.jsx-1348463277{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;text-transform:uppercase;}span.jsx-1348463277{font-size:20px;}strong.jsx-1348463277{color:#d9475c;}.exclusive.jsx-1348463277{width:100%;margin:20px 0;max-height:190px;}li.jsx-1348463277{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:15px;}li.jsx-1348463277 img.jsx-1348463277{margin-right:10px;}li.jsx-1348463277 span.jsx-1348463277{color:#14202b;font-size:16px;font-weight:500;line-height:19px;text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9KU0V4Y2x1c2l2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmtCLEFBRzZCLEFBSUgsQUFRQSxBQUdELEFBSUgsQUFNUyxBQUtGLEFBR0osV0FiQSxHQUpoQixBQWtCaUIsQ0E3QkMsQUFRbEIsR0FaQSxBQThCQSxPQVZtQixJQWNELEVBN0JGLFdBZ0JoQixHQWZvQixBQTZCRCxpQkFDRCxDQTdCSyxlQThCdkIsd0JBWnFCLDhEQWpCTSx5QkFDM0IsTUFpQnFCLG1CQUNyQiIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvSlNFeGNsdXNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBleGNsdXNpdmVMaXN0IH0gZnJvbSBcIi4uLy4uL3N0YXRpYy9kYXRhXCI7XG5cbmZ1bmN0aW9uIEpTRXhjbHVzaXZlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+UGVyc29uYWxpc2VkIE1hdGNoLU1ha2luZyBTZXJ2aWNlPC9oMz5cblxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICBJbnRyb2R1Y2luZyA8c3Ryb25nPiBKUyBFeGNsdXNpdmU8L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJleGNsdXNpdmVcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2V4Y2x1c2l2ZS5wbmdcIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7ZXhjbHVzaXZlTGlzdC5tYXAoZnVuY3Rpb24oeyBpbWdVUkwsIHRleHQgfSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdVUkx9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3RleHR9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDMycHggMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogIzhhOWRiMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgY29sb3I6ICNkOTQ3NWM7XG4gICAgICAgIH1cblxuICAgICAgICAuZXhjbHVzaXZlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgbGkgaW1nIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgbGkgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICMxNDIwMmI7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBKU0V4Y2x1c2l2ZTtcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/JSExclusive.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (JSExclusive);

/***/ }),

/***/ "./components/home/MatchProfiles.js":
/*!******************************************!*\
  !*** ./components/home/MatchProfiles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 //TODO get this data through api call

const settings = {
  dots: false,
  swipe: true,
  touchMove: true,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 1.05,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "4px"
};

function MatchProfiles() {
  var {
    0: profiles,
    1: setProfiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(async () => {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://www.jeevansathi.com/successStory/filter?sourceType=homepage&sourceValue=homepage&fromSPA=1");
      console.log("res", response);
      setProfiles(response.data.result);
    } catch (err) {}
  }, []);
  return __jsx("div", {
    className: "jsx-3009888426" + " " + "container"
  }, __jsx("div", {
    className: "jsx-3009888426" + " " + "heading"
  }, __jsx("h3", {
    className: "jsx-3009888426"
  }, "Lakhs of Couples"), __jsx("span", {
    className: "jsx-3009888426"
  }, "Matched by ", __jsx("strong", {
    className: "jsx-3009888426"
  }, " Jeevansathi"))), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, settings, profiles.map(function (profile) {
    return __jsx("a", {
      style: {
        display: "block"
      },
      href: `story?year=${profile.YEAR}&SID=${profile.SID}`,
      className: "jsx-3009888426"
    }, __jsx("div", {
      className: "jsx-3009888426" + " " + "profile"
    }, __jsx("div", {
      style: {
        backgroundImage: `linear-gradient(transparent 0%, rgba(0,0,0,1) 120%),url(${profile.SQUARE_PIC_URL})`
      },
      className: "jsx-3009888426" + " " + "image"
    }, __jsx("div", {
      className: "jsx-3009888426" + " " + "text"
    }, __jsx("h2", {
      className: "jsx-3009888426"
    }, profile.combinedName), __jsx("div", {
      className: "jsx-3009888426" + " " + "border"
    }), __jsx("span", {
      className: "jsx-3009888426"
    }, "`MARRIED SINCE $", profile.marriageDate, "`")))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3009888426"
  }, ".container.jsx-3009888426{padding:32px 0px 32px 24px;}.profile.jsx-3009888426{margin-top:20px;}.image.jsx-3009888426{width:98%;height:228px;margin-left:0;border-radius:8px;background-size:cover;background-repeat:no-repeat;background-position:center top;position:relative;}h3.jsx-3009888426{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;text-transform:uppercase;}span.jsx-3009888426{font-size:20px;}strong.jsx-3009888426{color:#d9475c;}.text.jsx-3009888426{position:absolute;bottom:50px;color:white;text-align:center;width:100%;}.text.jsx-3009888426 h2.jsx-3009888426{font-size:40px;text-shadow:0 1px 1px rgba(0,0,0,0.27);font-family:\"sarah-script\",\"sans-serif\";font-weight:lighter;}.text.jsx-3009888426 span.jsx-3009888426{font-size:11px;color:#fff;-webkit-letter-spacing:1.15px;-moz-letter-spacing:1.15px;-ms-letter-spacing:1.15px;letter-spacing:1.15px;text-align:center;padding-bottom:16px;padding-top:8px;text-shadow:0 1px 1px rgba(0,0,0,0.24);}.border.jsx-3009888426{border-bottom:1px solid #fff;width:80%;margin:15px auto 5px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NYXRjaFByb2ZpbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFa0IsQUFHc0MsQUFJWCxBQUlOLEFBV0ssQUFRQSxBQUdELEFBSUksQUFPSCxBQU9BLEFBVWMsVUFqRGhCLElBc0JmLENBWGtCLEFBUWxCLEFBYzRDLEFBTy9CLENBNUNiLEVBOEJjLEtBekJFLEdBd0NRLENBakR4QixFQTBEWSxDQXZCRSxDQWZFLE1BVkksRUFpRFEsR0F2QlIsR0FmQSxTQXFCdUIsQ0EvQm5CLEtBMEJYLEdBZlUsRUFzQ3ZCLE1BdEJBLE1BMUI4QixpQkErQlIsV0E5QlcsU0ErQmpDLGlCQU1vQixLQXBDQSxhQXFDRSxLQXBDdEIsVUFRMkIsS0E2QlQsZ0JBQzBCLElBN0I1QyxtQ0E4QkEiLCJmaWxlIjoiL2hvbWUvcGFua2FqL0RvY3VtZW50cy9teS13b3JrL3dpdGgtcmVkdXgtdGh1bmsvY29tcG9uZW50cy9ob21lL01hdGNoUHJvZmlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLy9UT0RPIGdldCB0aGlzIGRhdGEgdGhyb3VnaCBhcGkgY2FsbFxuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgZG90czogZmFsc2UsXG4gIHN3aXBlOiB0cnVlLFxuICB0b3VjaE1vdmU6IHRydWUsXG4gIGluZmluaXRlOiBmYWxzZSxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgc3BlZWQ6IDUwMCxcbiAgc2xpZGVzVG9TaG93OiAxLjA1LFxuICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgY2VudGVyUGFkZGluZzogXCI0cHhcIlxufTtcblxuZnVuY3Rpb24gTWF0Y2hQcm9maWxlcygpIHtcbiAgdmFyIFtwcm9maWxlcywgc2V0UHJvZmlsZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBcImh0dHBzOi8vd3d3LmplZXZhbnNhdGhpLmNvbS9zdWNjZXNzU3RvcnkvZmlsdGVyP3NvdXJjZVR5cGU9aG9tZXBhZ2Umc291cmNlVmFsdWU9aG9tZXBhZ2UmZnJvbVNQQT0xXCJcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc1wiLCByZXNwb25zZSk7XG4gICAgICBzZXRQcm9maWxlcyhyZXNwb25zZS5kYXRhLnJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XG4gICAgICAgIDxoMz5MYWtocyBvZiBDb3VwbGVzPC9oMz5cblxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICBNYXRjaGVkIGJ5IDxzdHJvbmc+IEplZXZhbnNhdGhpPC9zdHJvbmc+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICB7cHJvZmlsZXMubWFwKGZ1bmN0aW9uKHByb2ZpbGUpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19XG4gICAgICAgICAgICAgIGhyZWY9e2BzdG9yeT95ZWFyPSR7cHJvZmlsZS5ZRUFSfSZTSUQ9JHtwcm9maWxlLlNJRH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHJnYmEoMCwwLDAsMSkgMTIwJSksdXJsKCR7cHJvZmlsZS5TUVVBUkVfUElDX1VSTH0pYFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPntwcm9maWxlLmNvbWJpbmVkTmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5gTUFSUklFRCBTSU5DRSAke3Byb2ZpbGUubWFycmlhZ2VEYXRlfWA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1NsaWRlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZzogMzJweCAwcHggMzJweCAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2ZpbGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgIHdpZHRoOiA5OCU7XG4gICAgICAgICAgaGVpZ2h0OiAyMjhweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiAjOGE5ZGIwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBjb2xvcjogI2Q5NDc1YztcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNyk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwic2FyYWgtc2NyaXB0XCIsIFwic2Fucy1zZXJpZlwiO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjE1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvcmRlciB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBtYXJnaW46IDE1cHggYXV0byA1cHggYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRjaFByb2ZpbGVzO1xuIl19 */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MatchProfiles.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (MatchProfiles);

/***/ }),

/***/ "./components/home/MembershipPlans.js":
/*!********************************************!*\
  !*** ./components/home/MembershipPlans.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/data */ "./static/data.js");
/* harmony import */ var _static_svgHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/svgHandler */ "./static/svgHandler.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 //import MembershipDetail from "./OldMembershipDetail";



const settings = {
  dots: false,
  swipe: true,
  touchMove: true,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 1.25,
  slidesToScroll: 0.5,
  centerMode: true,
  centerPadding: "4px"
};

function MembershipPlans() {
  return __jsx("div", {
    className: "jsx-1941098627" + " " + "container"
  }, __jsx("div", {
    className: "jsx-1941098627" + " " + "heading"
  }, __jsx("h3", {
    className: "jsx-1941098627"
  }, "Upgrade your account"), __jsx("strong", {
    className: "jsx-1941098627"
  }, "Membership ", __jsx("span", {
    className: "jsx-1941098627"
  }, " Plans"), " ")), __jsx("div", {
    style: {
      overflowX: "scroll"
    },
    className: "jsx-1941098627"
  }, __jsx("div", {
    className: "jsx-1941098627" + " " + "slider"
  }, _static_data__WEBPACK_IMPORTED_MODULE_3__["membershipDetail"].map(function ({
    iconColor,
    list,
    backgroundColor,
    buttonTextColor,
    textColor,
    title,
    borderColor,
    buttonText,
    buttonColor,
    link
  }, index) {
    return __jsx("div", {
      style: {
        backgroundColor
      },
      className: "jsx-1941098627" + " " + "card"
    }, __jsx("span", {
      style: {
        color: textColor,
        borderColor
      },
      className: "jsx-1941098627" + " " + "card-heading"
    }, title), list.map(function ({
      text,
      iconColor,
      textColor,
      iconStyle,
      iconType
    }) {
      return __jsx("div", {
        style: {
          height: 34
        },
        className: "jsx-1941098627"
      }, __jsx(_static_svgHandler__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: iconType,
        css: iconStyle
      }), __jsx("span", {
        style: {
          color: textColor
        },
        className: "jsx-1941098627" + " " + "text"
      }, text));
    }), __jsx("div", {
      style: {
        textAlign: "center"
      },
      className: "jsx-1941098627"
    }, __jsx("a", {
      href: link,
      className: "jsx-1941098627"
    }, __jsx("button", {
      style: {
        backgroundColor: buttonColor,
        color: buttonTextColor
      },
      className: "jsx-1941098627"
    }, buttonText))));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1941098627"
  }, ".container.jsx-1941098627{padding:42px 0px;background-image:url(\"../../static/images/people_together_back.jpg\");background-repeat-x:repeat;background-position:left bottom;background-size:contain;}.slider.jsx-1941098627{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow-x:scroll;padding:0px 0px 0px 24px;margin-top:20px;width:600px;}.heading.jsx-1941098627{padding:0px 24px;}h3.jsx-1941098627{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;text-transform:uppercase;}span.jsx-1941098627{color:black;}strong.jsx-1941098627{font-size:20px;color:#d9475c;}.card.jsx-1941098627{box-shadow:0 2px 6px -1px rgba(38,48,140,0.2);border-radius:4px;margin-right:15px;padding:24px;}.text.jsx-1941098627{font-size:13px;font-weight:500;padding-left:8px;}.card-heading.jsx-1941098627{font-size:20px;color:#14202b;font-weight:500;border-top:2px solid;padding:0.5rem 0rem;display:inline-block;}button.jsx-1941098627{font-size:14px;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;padding:10px 20px;margin:0 0 0 -60px;left:50%;bottom:30px;display:inline-block;font-weight:600;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;line-height:1.5;border-radius:0.25rem;font-family:\"Cabin\",sans-serif;font-weight:700;color:#fff;line-height:14px;margin:auto !important;width:100% !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NZW1iZXJzaGlwUGxhbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkZrQixBQUc0QixBQVFKLEFBT0ksQUFJRixBQVFILEFBR0csQUFLa0MsQUFRbEMsQUFNQSxBQVNBLFlBOUJqQixHQVJrQixBQVdGLEFBYUUsQUFNRixBQVVHLEVBM0RvRCxBQWV2RSxZQWdCQSxBQW1Ca0IsRUE5QkYsQUF3QkcsY0F2QkMsQUE4QkcsQ0FoQkgsRUFVcEIsZUF2QnVCLENBY0gsRUFnQkUsUUE1Q0YsUUE2QkwsSUFwQ2MsQUFvRE4sTUE1Q0ksR0E4QjNCLEtBcUJvQixPQU5wQixNQXBEa0MsSUFRaEIsQ0FtREcsZUFsRFAsSUFtREgsUUEzRGUsQUFTMUIsQ0FtRGMsWUFFUyxNQTFDSSxLQW5CM0IsVUE4RGtCLFVBMUNsQixNQTJDd0Isc0JBQ0wscUZBQ1ksNkJBQ2IsZ0JBQ00sc0JBQ1UsK0JBRWhCLGdCQUNMLFdBQ00saUJBQ00sdUJBQ0Qsc0JBQ3hCIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NZW1iZXJzaGlwUGxhbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuLy9pbXBvcnQgTWVtYmVyc2hpcERldGFpbCBmcm9tIFwiLi9PbGRNZW1iZXJzaGlwRGV0YWlsXCI7XG5pbXBvcnQgeyBtZW1iZXJzaGlwRGV0YWlsIH0gZnJvbSBcIi4uLy4uL3N0YXRpYy9kYXRhXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vc3RhdGljL3N2Z0hhbmRsZXJcIjtcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG4gIGRvdHM6IGZhbHNlLFxuICBzd2lwZTogdHJ1ZSxcbiAgdG91Y2hNb3ZlOiB0cnVlLFxuICBpbmZpbml0ZTogZmFsc2UsXG4gIGFycm93czogZmFsc2UsXG4gIHNwZWVkOiA1MDAsXG4gIHNsaWRlc1RvU2hvdzogMS4yNSxcbiAgc2xpZGVzVG9TY3JvbGw6IDAuNSxcbiAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgY2VudGVyUGFkZGluZzogXCI0cHhcIlxufTtcblxuZnVuY3Rpb24gTWVtYmVyc2hpcFBsYW5zKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmdcIj5cbiAgICAgICAgPGgzPlVwZ3JhZGUgeW91ciBhY2NvdW50PC9oMz5cblxuICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgIE1lbWJlcnNoaXAgPHNwYW4+IFBsYW5zPC9zcGFuPntcIiBcIn1cbiAgICAgICAgPC9zdHJvbmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3dYOiBcInNjcm9sbFwiIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiPlxuICAgICAgICAgIHttZW1iZXJzaGlwRGV0YWlsLm1hcChmdW5jdGlvbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbkNvbG9yLFxuICAgICAgICAgICAgICBsaXN0LFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICAgIGJ1dHRvblRleHRDb2xvcixcbiAgICAgICAgICAgICAgdGV4dENvbG9yLFxuICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICAgIGJ1dHRvblRleHQsXG4gICAgICAgICAgICAgIGJ1dHRvbkNvbG9yLFxuICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yIH19IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1oZWFkaW5nXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiB0ZXh0Q29sb3IsIGJvcmRlckNvbG9yIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIHtsaXN0Lm1hcChmdW5jdGlvbih7XG4gICAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgICAgaWNvbkNvbG9yLFxuICAgICAgICAgICAgICAgICAgdGV4dENvbG9yLFxuICAgICAgICAgICAgICAgICAgaWNvblN0eWxlLFxuICAgICAgICAgICAgICAgICAgaWNvblR5cGVcbiAgICAgICAgICAgICAgICB9KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogMzQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBpY29uQ29sb3IgfX0+aWNvbjwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT17aWNvblR5cGV9IGNzcz17aWNvblN0eWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIiBzdHlsZT17eyBjb2xvcjogdGV4dENvbG9yIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmt9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYnV0dG9uQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYnV0dG9uVGV4dENvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtidXR0b25UZXh0fVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDQycHggMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL3N0YXRpYy9pbWFnZXMvcGVvcGxlX3RvZ2V0aGVyX2JhY2suanBnXCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0LXg6IHJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIH1cblxuICAgICAgICAuc2xpZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAyNHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkaW5nIHtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogIzhhOWRiMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiAjZDk0NzVjO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAtMXB4IHJnYmEoMzgsIDQ4LCAxNDAsIDAuMik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICAgIC8vbWluLXdpZHRoOiA3MCU7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1oZWFkaW5nIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgY29sb3I6ICMxNDIwMmI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQ7XG4gICAgICAgICAgcGFkZGluZzogMC41cmVtIDByZW07XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgLy8gY29sb3I6ICNmZmY7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogMCAwIDAgLTYwcHg7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIGJvdHRvbTogMzBweDtcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZDk0NzVjO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkNhYmluXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbWJlcnNoaXBQbGFucztcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MembershipPlans.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (MembershipPlans);

/***/ }),

/***/ "./components/home/PrivacySetting.js":
/*!*******************************************!*\
  !*** ./components/home/PrivacySetting.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/data */ "./static/data.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function PrivacySetting() {
  return __jsx("div", {
    className: "jsx-572172037" + " " + "container"
  }, __jsx("img", {
    src: "../../static/images/privacy_Illustration.svg",
    className: "jsx-572172037" + " " + "privacy"
  }), __jsx("div", {
    className: "jsx-572172037"
  }, __jsx("h3", {
    className: "jsx-572172037"
  }, "Complete Control over your Privacy Settings"), __jsx("ul", {
    className: "jsx-572172037"
  }, _static_data__WEBPACK_IMPORTED_MODULE_2__["privacySetting"].map(function ({
    imgURL,
    text
  }) {
    return __jsx("li", {
      className: "jsx-572172037"
    }, __jsx("img", {
      style: {
        marginRight: 20
      },
      src: imgURL,
      className: "jsx-572172037"
    }), __jsx("span", {
      className: "jsx-572172037"
    }, text));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "572172037"
  }, ".container.jsx-572172037{padding:32px 24px;background-color:#d9475c;color:white;}.privacy.jsx-572172037{margin:0px auto;display:block;}h3.jsx-572172037{margin:20px 0px;}li.jsx-572172037{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:16px;margin-bottom:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9Qcml2YWN5U2V0dGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmtCLEFBRzZCLEFBTUYsQUFJQSxBQUlJLGdCQVBOLEFBSWhCLEVBVjJCLFlBTzNCLGFBTmMsWUFDZCwrQ0FZcUIsNkZBQ0osZUFDSSxtQkFDckIiLCJmaWxlIjoiL2hvbWUvcGFua2FqL0RvY3VtZW50cy9teS13b3JrL3dpdGgtcmVkdXgtdGh1bmsvY29tcG9uZW50cy9ob21lL1ByaXZhY3lTZXR0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcHJpdmFjeVNldHRpbmcgfSBmcm9tIFwiLi4vLi4vc3RhdGljL2RhdGFcIjtcblxuZnVuY3Rpb24gUHJpdmFjeVNldHRpbmcoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPVwicHJpdmFjeVwiXG4gICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvcHJpdmFjeV9JbGx1c3RyYXRpb24uc3ZnXCJcbiAgICAgIC8+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5Db21wbGV0ZSBDb250cm9sIG92ZXIgeW91ciBQcml2YWN5IFNldHRpbmdzPC9oMz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtwcml2YWN5U2V0dGluZy5tYXAoZnVuY3Rpb24oeyBpbWdVUkwsIHRleHQgfSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDIwIH19IHNyYz17aW1nVVJMfSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt0ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NDc1YztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAucHJpdmFjeSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaXZhY3lTZXR0aW5nO1xuIl19 */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/PrivacySetting.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (PrivacySetting);

/***/ }),

/***/ "./components/home/SimpleSteps.js":
/*!****************************************!*\
  !*** ./components/home/SimpleSteps.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/data */ "./static/data.js");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Button */ "./components/common/Button.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

function SimpleSteps() {
  return __jsx("div", {
    className: "jsx-1797984012" + " " + "container simple-steps"
  }, __jsx("h3", {
    className: "jsx-1797984012"
  }, "Three Simple Steps to"), __jsx("h2", {
    className: "jsx-1797984012"
  }, "Find the ", __jsx("strong", {
    className: "jsx-1797984012"
  }, "One for You")), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, settings, _static_data__WEBPACK_IMPORTED_MODULE_3__["simpleSteps"].map(function ({
    text,
    posiiton
  }, index) {
    return __jsx("div", {
      className: "jsx-1797984012" + " " + "list-container"
    }, __jsx("div", {
      style: {
        backgroundPosition: posiiton
      },
      className: "jsx-1797984012" + " " + "image"
    }), __jsx("div", {
      className: "jsx-1797984012" + " " + "text"
    }, __jsx("span", {
      className: "jsx-1797984012"
    }, `0${index + 1}`), text));
  })), __jsx("a", {
    href: "profile/registration_new.php?source=home_hero",
    className: "jsx-1797984012"
  }, __jsx("div", {
    className: "jsx-1797984012" + " " + "button-container"
  }, __jsx("button", {
    className: "jsx-1797984012"
  }, " Get Started by Registering Free"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1797984012"
  }, ".list-container.jsx-1797984012{text-align:center;margin-top:30px;}.container.jsx-1797984012{padding:32px 20px;background:#f8f9f9;position:relative;}h3.jsx-1797984012{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;text-transform:uppercase;}h2.jsx-1797984012{font-size:20px;font-weight:100;}h2.jsx-1797984012 strong.jsx-1797984012{padding:0 0 0 5px;color:#d9475c;}.image.jsx-1797984012{background:url(\"../../static/images/how_it_works.svg\") no-repeat;width:210px;height:110px;display:inline-block;}.text.jsx-1797984012{font-weight:600;font-size:14px;color:#14202b;}.text.jsx-1797984012 span.jsx-1797984012{font-style:normal;color:#d9475c;}.button-container.jsx-1797984012{position:absolute;bottom:70px;width:100%;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 20px;box-sizing:border-box;}button.jsx-1797984012{width:100%;padding:10px 20px;font-size:14px;color:#fff;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;background:#d9475c;display:inline-block;font-weight:600;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;line-height:1.5;border-radius:0.25rem;font-family:\"Cabin\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9TaW1wbGVTdGVwcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2tCLEFBRzZCLEFBS0EsQUFNSCxBQVFBLEFBSUcsQUFLK0MsQUFPakQsQUFLRSxBQUlBLEFBV1IsV0FDTyxJQTVDRCxBQVFBLENBZ0JELEVBbkNDLEFBS0csQUFrQkwsQUFpQkEsQUFJRixXQVlHLENBWEosQ0FqQ0csQUFRaEIsQUFnQmdCLENBWmhCLEFBaUJBLEVBeENBLEdBS29CLElBd0NYLEdBV0ksQ0E1Q08sQUF3QnBCLEdBVWUsT0F4Q2YsQUFtRG1CLFFBNUNJLEVBY1QsWUFDQyxhQUNRLHFCQUN2QixXQWlCeUIsa0JBWUosbUJBQ0UsS0E5Q0ksZ0JBK0NULFNBOUNsQixPQStDd0Isc0JBQ0wsR0FmRixlQUNPLHNCQUMxQiw2Q0FjaUMsNkJBQ2IsZ0JBQ00sc0JBQ1UsK0JBQ2xDIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9TaW1wbGVTdGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgeyBzaW1wbGVTdGVwcyB9IGZyb20gXCIuLi8uLi9zdGF0aWMvZGF0YVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tbW9uL0J1dHRvblwiO1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgZG90czogdHJ1ZSxcbiAgaW5maW5pdGU6IHRydWUsXG4gIHNwZWVkOiA1MDAsXG4gIHNsaWRlc1RvU2hvdzogMSxcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gIGFycm93czogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIFNpbXBsZVN0ZXBzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNpbXBsZS1zdGVwc1wiPlxuICAgICAgPGgzPlRocmVlIFNpbXBsZSBTdGVwcyB0bzwvaDM+XG4gICAgICA8aDI+XG4gICAgICAgIEZpbmQgdGhlIDxzdHJvbmc+T25lIGZvciBZb3U8L3N0cm9uZz5cbiAgICAgIDwvaDI+XG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgIHtzaW1wbGVTdGVwcy5tYXAoZnVuY3Rpb24oeyB0ZXh0LCBwb3NpaXRvbiB9LCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZFBvc2l0aW9uOiBwb3NpaXRvbiB9fVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPntgMCR7aW5kZXggKyAxfWB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9TbGlkZXI+XG4gICAgICA8YSBocmVmPVwicHJvZmlsZS9yZWdpc3RyYXRpb25fbmV3LnBocD9zb3VyY2U9aG9tZV9oZXJvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxidXR0b24+IEdldCBTdGFydGVkIGJ5IFJlZ2lzdGVyaW5nIEZyZWU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmxpc3QtY29udGFpbmVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDMycHggMjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWY5O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogIzhhOWRiMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICB9XG4gICAgICAgIGgyIHN0cm9uZyB7XG4gICAgICAgICAgcGFkZGluZzogMCAwIDAgNXB4O1xuICAgICAgICAgIGNvbG9yOiAjZDk0NzVjO1xuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2hvd19pdF93b3Jrcy5zdmdcIikgbm8tcmVwZWF0O1xuICAgICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogIzE0MjAyYjtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCBzcGFuIHtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgY29sb3I6ICNkOTQ3NWM7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbi1jb250YWluZXJ7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogNzBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6MTBweCAyMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICAvKiBwYWRkaW5nOiAxMHB4IDIwcHg7ICovXG4gICAgICAgICAgYmFja2dyb3VuZDogI2Q5NDc1YztcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJDYWJpblwiLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZVN0ZXBzO1xuIl19 */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/SimpleSteps.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (SimpleSteps);

/***/ }),

/***/ "./components/home/VerificationDetail.js":
/*!***********************************************!*\
  !*** ./components/home/VerificationDetail.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/data */ "./static/data.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function VerificationDetail() {
  return __jsx("div", {
    className: "jsx-3732194804" + " " + "container"
  }, __jsx("h3", {
    className: "jsx-3732194804"
  }, "More Than 20 years of"), __jsx("h2", {
    className: "jsx-3732194804"
  }, "Bringing People", __jsx("span", {
    className: "jsx-3732194804"
  }, "Together")), __jsx("div", {
    style: {},
    className: "jsx-3732194804"
  }, _static_data__WEBPACK_IMPORTED_MODULE_2__["verificationData"].map(function (data) {
    return __jsx("div", {
      className: "jsx-3732194804" + " " + "list-container"
    }, __jsx("div", {
      className: "jsx-3732194804"
    }, __jsx("img", {
      style: {
        padding: "0px 10px 0px 0px"
      },
      src: data.imageURL,
      className: "jsx-3732194804"
    })), __jsx("div", {
      className: "jsx-3732194804" + " " + "content"
    }, __jsx("h4", {
      className: "jsx-3732194804"
    }, data.heading), __jsx("p", {
      className: "jsx-3732194804"
    }, data.about)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3732194804"
  }, ".container.jsx-3732194804{font-family:\"Cabin\",sans-serif;margin:32px 20px;}h3.jsx-3732194804{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;text-transform:uppercase;}h2.jsx-3732194804{font-size:20px;font-weight:100;}span.jsx-3732194804{padding:0 0 0 5px;color:#d9475c;}.list-container.jsx-3732194804{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:20px 0px;}.content.jsx-3732194804{padding:0px 0px 0px 10px;border-left:1px solid #dee2e6;}h4.jsx-3732194804{font-size:14px;color:#14202b;font-weight:600;padding:0px;}p.jsx-3732194804{font-size:12px;color:#33495f;line-height:17px;margin:0px;padding:0px;margin-top:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9WZXJpZmljYXRpb25EZXRhaWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJrQixBQUcyQyxBQUtqQixBQVNBLEFBS0csQUFLTCxBQU1ZLEFBSVYsQUFPQSxlQW5DQyxBQVNBLEFBb0JGLEFBT0EsR0F0QkEsT0FXZ0IsSUFLZCxBQU9DLEVBMUNBLEFBTUgsQUFTaEIsQ0FLQSxhQWJvQixBQThCTixDQU1ELEVBMUNiLE9BOEJBLEVBT0EsQUFNYyxNQXBDUyxNQXFDTixLQXJCSSxVQXNCckIsZ0ZBckMyQixHQWdCRixzQkFmekIsNkVBZ0JrQixnQkFDbEIiLCJmaWxlIjoiL2hvbWUvcGFua2FqL0RvY3VtZW50cy9teS13b3JrL3dpdGgtcmVkdXgtdGh1bmsvY29tcG9uZW50cy9ob21lL1ZlcmlmaWNhdGlvbkRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHZlcmlmaWNhdGlvbkRhdGEgfSBmcm9tIFwiLi4vLi4vc3RhdGljL2RhdGFcIjtcblxuZnVuY3Rpb24gVmVyaWZpY2F0aW9uRGV0YWlsKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDM+TW9yZSBUaGFuIDIwIHllYXJzIG9mPC9oMz5cbiAgICAgIDxoMj5cbiAgICAgICAgQnJpbmdpbmcgUGVvcGxlPHNwYW4+VG9nZXRoZXI8L3NwYW4+XG4gICAgICA8L2gyPlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7fX0+XG4gICAgICAgIHt2ZXJpZmljYXRpb25EYXRhLm1hcChmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjBweCAxMHB4IDBweCAwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLmltYWdlVVJMfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aDQ+e2RhdGEuaGVhZGluZ308L2g0PlxuICAgICAgICAgICAgICAgIDxwPntkYXRhLmFib3V0fTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJDYWJpblwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIG1hcmdpbjogMzJweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiAjOGE5ZGIwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbiAgICAgICAgICBjb2xvcjogI2Q5NDc1YztcbiAgICAgICAgfVxuXG4gICAgICAgIC5saXN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgICAgICB9XG4gICAgICAgIGg0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6ICMxNDIwMmI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6ICMzMzQ5NWY7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBWZXJpZmljYXRpb25EZXRhaWw7XG4iXX0= */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/VerificationDetail.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (VerificationDetail);

/***/ }),

/***/ "./components/home/bannerSection/Banner.js":
/*!*************************************************!*\
  !*** ./components/home/bannerSection/Banner.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/home/bannerSection/Header.js");
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBox */ "./components/home/bannerSection/SearchBox.js");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Button */ "./components/common/Button.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Banner() {
  return __jsx("div", {
    className: "jsx-3308289319" + " " + "banner-image"
  }, __jsx("div", {
    className: "jsx-3308289319"
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx("div", {
    className: "jsx-3308289319" + " " + "white fontreg caption"
  }, __jsx("p", {
    className: "jsx-3308289319"
  }, "Love is looking for you,"), __jsx("h1", {
    className: "jsx-3308289319"
  }, " Be found")), __jsx("a", {
    href: "profile/registration_new.php?source=home_hero",
    className: "jsx-3308289319"
  }, __jsx("button", {
    className: "jsx-3308289319"
  }, "Register Free"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3308289319"
  }, ".banner-image.jsx-3308289319{background:url(../../../static/images/cover_picture.jpg) left top no-repeat;background-size:cover;min-height:360px;position:relative;font-family:\"Cabin\",sans-serif;}.caption.jsx-3308289319{font-size:16px;margin-bottom:8px;text-align:center;position:absolute;width:100%;bottom:70px;}p.jsx-3308289319{font-size:14px;text-shadow:1px 2px 2px rgba(0,0,0,0.5);margin:0px;padding-left:60px;}h1.jsx-3308289319{font-size:70px;font-family:\"sarah-script\",\"sans-serif\";font-weight:400;margin:0px;margin-top:-10px;}button.jsx-3308289319{font-size:14px;color:#fff;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;padding:10px 20px;position:absolute;bottom:30px;left:50%;-webkit-transform:translate(-50%,0%);-ms-transform:translate(-50%,0%);transform:translate(-50%,0%);background:#d9475c;display:inline-block;font-weight:600;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;line-height:1.5;border-radius:0.25rem;font-family:\"Cabin\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9iYW5uZXJTZWN0aW9uL0Jhbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmtCLEFBSXNCLEFBUUksQUFTQSxBQU1BLEFBUUEsZUFyQkcsQUFReUIsQUFNRixBQVE5QixXQUNNLE9BdEJDLGtCQUNBLElBT1AsQUFNSyxXQUxFLEdBUFAsRUFhQSxLQXpCVyxJQWFWLEVBYUssRUFObkIsUUFOQSxNQWJtQixDQTBCbkIsWUFNb0IsSUEvQkEsY0FnQ0EsSUEvQmMsY0FnQ3BCLFlBQ0gsS0FoQ1gsSUFpQ2dDLG1HQUNYLG1CQUNFLHFCQUNMLGdCQUNNLHNCQUNMLHFGQUNZLDZCQUNiLGdCQUNNLHNCQUNVLCtCQUNsQyIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvYmFubmVyU2VjdGlvbi9CYW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tIFwiLi9TZWFyY2hCb3hcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbW1vbi9CdXR0b25cIjtcblxuZnVuY3Rpb24gQmFubmVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWltYWdlXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hpdGUgZm9udHJlZyBjYXB0aW9uXCI+XG4gICAgICAgICAgPHA+TG92ZSBpcyBsb29raW5nIGZvciB5b3UsPC9wPlxuICAgICAgICAgIDxoMT4gQmUgZm91bmQ8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGEgaHJlZj1cInByb2ZpbGUvcmVnaXN0cmF0aW9uX25ldy5waHA/c291cmNlPWhvbWVfaGVyb1wiPlxuICAgICAgICAgIDxidXR0b24+UmVnaXN0ZXIgRnJlZTwvYnV0dG9uPlxuICAgICAgICA8L2E+XG4gICAgICAgIHsvKiA8U2VhcmNoQm94IC8+ICovfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5iYW5uZXItaW1hZ2Uge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9zdGF0aWMvaW1hZ2VzL2NvdmVyX3BpY3R1cmUuanBnKSBsZWZ0IHRvcFxuICAgICAgICAgICAgbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgbWluLWhlaWdodDogMzYwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkNhYmluXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FwdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDE1MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvdHRvbTogNzBweDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJzYXJhaC1zY3JpcHRcIiwgXCJzYW5zLXNlcmlmXCI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAzMHB4O1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Q5NDc1YztcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJDYWJpblwiLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/bannerSection/Banner.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/home/bannerSection/Header.js":
/*!*************************************************!*\
  !*** ./components/home/bannerSection/Header.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../static/theme */ "./static/theme.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 //import logo from "../../../static/images/logo.png";
//TODO
//To make images importable https://github.com/twopluszero/next-images

function Header() {
  return __jsx("div", {
    style: {
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 500
    }
  }, __jsx("div", {
    id: "headerContainer",
    className: "jsx-933721822" + " " + "container "
  }, __jsx("div", {
    className: "jsx-933721822" + " " + "logo"
  }, " ", __jsx("a", {
    onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    }),
    className: "jsx-933721822"
  }, __jsx("img", {
    src: "../../../static/images/js_logo.svg",
    className: "jsx-933721822"
  }))), __jsx("div", {
    className: "jsx-933721822" + " " + "login caption white fontreg"
  }, __jsx("a", {
    href: "/login",
    className: "jsx-933721822"
  }, __jsx("i", {
    className: "jsx-933721822" + " " + "user-icon white"
  }), __jsx("span", {
    className: "jsx-933721822"
  }, "Login"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "933721822"
  }, ".container.jsx-933721822{background:rgba(0,0,0,0.5);padding:8px 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.headerBg2.jsx-933721822{background:#34495e;}.logo.jsx-933721822{width:70px;height:26px;}.logo.jsx-933721822 img.jsx-933721822{width:100%;}.login.jsx-933721822{line-height:40px;font-size:13px;}.user-icon.jsx-933721822{background-image:url(../../../static/images/homeSpriteNewFinal.png);width:20px;background-position:-1px 2px;height:18px;display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9iYW5uZXJTZWN0aW9uL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qm9CLEFBRzJDLEFBT1gsQUFHUixBQUlBLEFBR00sQUFLbUQsV0FYeEQsQUFJZCxNQUlpQixFQVhqQixJQUlBLElBWG1CLEtBbUJuQixZQWxCZSx3QkFxQkYsV0FDa0IsNkJBQ2pCLFVBdEJrQixFQXdCVCxxQkFDdkIsNEZBeEJxQiw2RkFDckIiLCJmaWxlIjoiL2hvbWUvcGFua2FqL0RvY3VtZW50cy9teS13b3JrL3dpdGgtcmVkdXgtdGh1bmsvY29tcG9uZW50cy9ob21lL2Jhbm5lclNlY3Rpb24vSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi8uLi9zdGF0aWMvdGhlbWVcIjtcbi8vaW1wb3J0IGxvZ28gZnJvbSBcIi4uLy4uLy4uL3N0YXRpYy9pbWFnZXMvbG9nby5wbmdcIjtcblxuLy9UT0RPXG4vL1RvIG1ha2UgaW1hZ2VzIGltcG9ydGFibGUgaHR0cHM6Ly9naXRodWIuY29tL3R3b3BsdXN6ZXJvL25leHQtaW1hZ2VzXG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImZpeGVkXCIsIHRvcDogMCwgd2lkdGg6IFwiMTAwJVwiLCB6SW5kZXg6IDUwMCB9fT5cbiAgICAgIDxkaXYgaWQ9XCJoZWFkZXJDb250YWluZXJcIiBjbGFzc05hbWU9XCJjb250YWluZXIgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vc3RhdGljL2ltYWdlcy9qc19sb2dvLnN2Z1wiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbiBjYXB0aW9uIHdoaXRlIGZvbnRyZWdcIj5cbiAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1c2VyLWljb24gd2hpdGVcIj48L2k+XG4gICAgICAgICAgICA8c3Bhbj5Mb2dpbjwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyQmcyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNDQ5NWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubG9nbyBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dpbiB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcblxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudXNlci1pY29uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9zdGF0aWMvaW1hZ2VzL2hvbWVTcHJpdGVOZXdGaW5hbC5wbmcpO1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMXB4IDJweDtcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcblxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/bannerSection/Header.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/home/bannerSection/SearchBox.js":
/*!****************************************************!*\
  !*** ./components/home/bannerSection/SearchBox.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../static/theme */ "./static/theme.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import { Input } from "antd";

 //const { Search } = Input;

function SearchBox() {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1261407272", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "container"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1261407272", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "input-box"
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1261407272", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "input-text"
  }, "Search for Bride / Groom")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1261407272", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "search-icon-container"
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1261407272", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "search-icon"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1261407272",
    dynamic: [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]
  }, `.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:40px;}.input-box.__jsx-style-dynamic-selector{-webkit-flex-basis:86%;-ms-flex-preferred-size:86%;flex-basis:86%;background-color:white;}.search-icon-container.__jsx-style-dynamic-selector{-webkit-flex-basis:14%;-ms-flex-preferred-size:14%;flex-basis:14%;background-color:${_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor};line-height:45px;text-align:center;}.input-text.__jsx-style-dynamic-selector{line-height:40px;color:#666666;opacity:0.6;margin-left:15px;}.search-icon.__jsx-style-dynamic-selector{background-image:url("../../../static/images/homeSpriteNewFinal.png");background-repeat:no-repeat;width:24px;background-position:-332px -101px;height:16px;display:inline-block;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9iYW5uZXJTZWN0aW9uL1NlYXJjaEJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmtCLEFBR3dCLEFBSUUsQUFJQSxBQU1FLEFBTXFELGlCQUx4RCxjQUNGLFlBQ0ssaUJBQ25CLE1BYnlCLEFBSXVCLElBWWxCLElBcEJoQixZQUNkLEdBSUEsU0FnQmEsV0FDdUIsR0FiakIsaUJBQ0MsY0FhTixJQVpkLFFBYXVCLHFCQUN2QiIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvYmFubmVyU2VjdGlvbi9TZWFyY2hCb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vL2ltcG9ydCB7IElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vLi4vc3RhdGljL3RoZW1lXCI7XG5cbi8vY29uc3QgeyBTZWFyY2ggfSA9IElucHV0O1xuXG5mdW5jdGlvbiBTZWFyY2hCb3goKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LXRleHRcIj5TZWFyY2ggZm9yIEJyaWRlIC8gR3Jvb208L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWljb24tY29udGFpbmVyXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cInNlYXJjaC1pY29uXCI+PC9pPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmlucHV0LWJveCB7XG4gICAgICAgICAgZmxleC1iYXNpczogODYlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2gtaWNvbi1jb250YWluZXIge1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDE0JTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnByaW1hcnlDb2xvcn07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5pbnB1dC10ZXh0IHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaC1pY29uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9zdGF0aWMvaW1hZ2VzL2hvbWVTcHJpdGVOZXdGaW5hbC5wbmdcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzMycHggLTEwMXB4O1xuICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQm94O1xuIl19 */
/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/bannerSection/SearchBox.js */`));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchBox);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_home_bannerSection_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/bannerSection/Banner */ "./components/home/bannerSection/Banner.js");
/* harmony import */ var _components_home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/Home */ "./components/home/Home.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_components_home_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null);
});

/***/ }),

/***/ "./static/data.js":
/*!************************!*\
  !*** ./static/data.js ***!
  \************************/
/*! exports provided: browseData, verificationData, simpleSteps, privacySetting, exclusiveList, membershipDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browseData", function() { return browseData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verificationData", function() { return verificationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleSteps", function() { return simpleSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "privacySetting", function() { return privacySetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclusiveList", function() { return exclusiveList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "membershipDetail", function() { return membershipDetail; });
const iStyle1 = {
  height: "20px",
  verticalAlign: "middle",
  width: "20px",
  color: "#d9475c"
};
const iStyle2 = {
  height: "20px",
  verticalAlign: "middle",
  width: "20px",
  color: "#8A9DB0 "
};
const iStyle3 = {
  height: "20px",
  verticalAlign: "middle",
  width: "20px",
  color: "#fff"
};
const browseData = [{
  title: {
    display: "Bihari Matrimonial",
    link: ""
  },
  list: [{
    display: "Bihar Brides",
    link: ""
  }, {
    display: "Bihari Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Tamil Matrimonial",
    link: ""
  },
  list: [{
    display: "Tamil Brides",
    link: ""
  }, {
    display: "Tamil Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Bengali Matrimonial",
    link: ""
  },
  list: [{
    display: "Bengali Brides",
    link: ""
  }, {
    display: "Bengali Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Telegu Matrimonial",
    link: ""
  },
  list: [{
    display: "Telegu Brides",
    link: ""
  }, {
    display: "Telegu Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Hindi Matrimonial",
    link: ""
  },
  list: [{
    display: "Hindi Brides",
    link: ""
  }, {
    display: "Hindi Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Hindi-UP Matrimonial",
    link: ""
  },
  list: [{
    display: "Hindi-UP Brides",
    link: ""
  }, {
    display: "Hindi-UP Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Gujarati Matrimonial",
    link: ""
  },
  list: [{
    display: "Gujarati Brides",
    link: ""
  }, {
    display: "Gujarati Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Hindi-MP Matrimonial",
    link: ""
  },
  list: [{
    display: "Hindi-MP Brides",
    link: ""
  }, {
    display: "Hindi-MP Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Kannada Matrimonial",
    link: ""
  },
  list: [{
    display: "Kannada Brides",
    link: ""
  }, {
    display: "Kannada Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Konkani Matrimonial",
    link: ""
  },
  list: [{
    display: "Konkani Brides",
    link: ""
  }, {
    display: "Konkani Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Malayalam Matrimonial",
    link: ""
  },
  list: [{
    display: "Malayalam Brides",
    link: ""
  }, {
    display: "Malayalam Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Himachali Matrimonial",
    link: ""
  },
  list: [{
    display: "Himachali Brides",
    link: ""
  }, {
    display: "Himachali Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Marathi Matrimonial",
    link: ""
  },
  list: [{
    display: "Marathi Brides",
    link: ""
  }, {
    display: "Marathi Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Haryanvi Matrimonial",
    link: ""
  },
  list: [{
    display: "Haryanvi Brides",
    link: ""
  }, {
    display: "Haryanvi Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Oriya Matrimonial",
    link: ""
  },
  list: [{
    display: "Oriya Brides",
    link: ""
  }, {
    display: "Oriya Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Assamese Matrimonial",
    link: ""
  },
  list: [{
    display: "Assamese Brides",
    link: ""
  }, {
    display: "Assamese Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Punjabi Matrimonial",
    link: ""
  },
  list: [{
    display: "Punjabi Brides",
    link: ""
  }, {
    display: "Punjabi Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Kashmiri Matrimonial",
    link: ""
  },
  list: [{
    display: "Kashmiri Brides",
    link: ""
  }, {
    display: "Kashmiri Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Rajasthani Matrimonial",
    link: ""
  },
  list: [{
    display: "Rajasthani Brides",
    link: ""
  }, {
    display: "Rajasthani Grooms",
    link: ""
  }]
}, {
  title: {
    display: "Sikkim/Nepali Matrimonial",
    link: ""
  },
  list: [{
    display: "Sikkim/Nepali Brides",
    link: ""
  }, {
    display: "Sikkim/Nepali Grooms",
    link: ""
  }]
}];
const verificationData = [{
  heading: "100% Manually Screened Profiles",
  about: "  Search by location, community, profession & more from lakhs of active profiles.",
  imageURL: "../static/images/screened_profiles.svg"
}, {
  heading: "Verifications by Personal Visit",
  about: "Special listing for profiles verified by our agents through personal visits.",
  imageURL: "../static/images/verfications_by_personal_visit.svg"
}, {
  heading: "Lakhs of Success Stories",
  about: "Discover members like you who found their ideal match through Jeevansathi.",
  imageURL: "../static/images/success_stories.svg"
}];
const simpleSteps = [{
  text: " Define Your Partner Preferences",
  position: "0px 0px"
}, {
  text: " Browse Profiles",
  posiiton: "-230px 0px"
}, {
  text: " Send Interests & Connect ",
  posiiton: "-450px 0px"
}];
const privacySetting = [{
  text: "Control Profile Visibility",
  imgURL: "../static/images/privacy_1.svg"
}, {
  text: "Limit Access to Pictures",
  imgURL: "../static/images/privacy_2.svg"
}, {
  text: "Restrict Unwanted Access to Contact Details",
  imgURL: "../static/images/privacy_3.svg"
}];
const exclusiveList = [{
  text: "Meet your Relationship Manager",
  imgURL: "../static/images/meet_your_advisor.svg"
}, {
  text: "Communicate your preferences ",
  imgURL: "../static/images/meet_your_advisor.svg"
}, {
  text: "Choose from handpicked profiles",
  imgURL: "../static/images/handpicked.svg"
}];
const membershipDetail = [{
  backgroundColor: "white",
  buttonColor: "#D9475C",
  buttonText: "Register Free",
  buttonTextColor: "white",
  textColor: "black",
  title: "Free",
  link: "profile/registration_new.php?source=home_plan",
  borderColor: "#d9475c",
  list: [{
    iconColor: "#D9475C",
    text: "Browse Profiles",
    textColor: "black",
    iconType: "check_circle",
    iconStyle: iStyle1
  }, {
    iconColor: "#D9475C",
    text: "Shortlist & Send Interest",
    textColor: "black",
    iconType: "check_circle",
    iconStyle: iStyle1
  }, {
    iconColor: "#8A9DB0",
    text: "Message & chat with unlimited users",
    textColor: "#8A9DB0",
    iconType: "cross_circle",
    iconStyle: iStyle2
  }, {
    iconColor: "#8A9DB0",
    text: "View contacts of members you like",
    textColor: "#8A9DB0",
    iconType: "cross_circle",
    iconStyle: iStyle2
  }, {
    iconColor: "#8A9DB0",
    text: "Message & chat with unlimited users",
    textColor: "#8A9DB0",
    iconType: "cross_circle",
    iconStyle: iStyle2
  }, {
    iconColor: "#8A9DB0",
    text: "Priority customer support",
    textColor: "#8A9DB0",
    iconType: "cross_circle",
    iconStyle: iStyle2
  }, {
    iconColor: "#8A9DB0",
    text: "Make your contacts visible to others",
    textColor: "#8A9DB0",
    iconType: "cross_circle",
    iconStyle: iStyle2
  }, {
    iconColor: "#8A9DB0",
    text: "Profile Boost",
    textColor: "#8A9DB0",
    iconType: "cross_circle",
    iconStyle: iStyle2
  }]
}, {
  backgroundColor: "#D9475C",
  buttonColor: "white",
  buttonText: "Browse Membership Plans",
  buttonTextColor: "#D9475C",
  textColor: "white",
  title: "Paid",
  link: "profile/mem_comparison.php",
  borderColor: "white",
  list: [{
    iconColor: "white",
    text: "Browse Profiles",
    textColor: "white",
    iconType: "check_circle",
    iconStyle: iStyle3
  }, {
    iconColor: "white",
    text: "Shortlist & Send Interest",
    textColor: "white",
    iconType: "check_circle",
    iconStyle: iStyle3
  }, {
    iconColor: "white",
    text: "Message & chat with unlimited users",
    textColor: "white",
    iconType: "check_circle",
    iconStyle: iStyle3
  }, {
    iconColor: "white",
    text: "View contacts of members you like",
    textColor: "white",
    iconType: "check_circle",
    iconStyle: iStyle3
  }, {
    iconColor: "white",
    text: "Message & chat with unlimited users",
    textColor: "white",
    iconType: "check_circle",
    iconStyle: iStyle3
  }, {
    iconColor: "white",
    text: "Priority customer support",
    textColor: "white",
    iconType: "check_circle",
    iconStyle: iStyle3
  }, {
    iconColor: "white",
    text: "Make your contacts visible to others",
    textColor: "white",
    iconType: "check_circle",
    iconStyle: iStyle3
  }, {
    iconColor: "white",
    text: "Profile Boost",
    textColor: "white",
    iconType: "check_circle",
    iconStyle: iStyle3
  }]
}];

/***/ }),

/***/ "./static/svgHandler.js":
/*!******************************!*\
  !*** ./static/svgHandler.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // icons


















 // imgs
// url : https://react-icons.netlify.com/#/

const Icon = props => {
  switch (props.type) {
    case "img":
      return __jsx("img", {
        src: props.name,
        alt: "props.name"
      });

    case "download":
      return __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdFileDownload"], {
        style: props.css
      });

    case "home":
      return __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdHome"], {
        style: props.css
      });

    case "search":
      return __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdSearch"], {
        style: props.css
      });

    case "edit":
      return __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdModeEdit"], {
        style: props.css
      });

    case "people":
      return __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdPeople"], {
        style: props.css
      });

    case "contacts":
      return __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdContacts"], {
        style: props.css
      });

    case "star":
      return __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdStar"], {
        style: props.css
      });

    case "phoneMsg":
      return __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdPermPhoneMsg"], {
        style: props.css
      });

    case "eye":
      return __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdRemoveRedEye"], {
        style: props.css
      });

    case "info":
      return __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdInfo"], {
        style: props.css
      });

    case "help":
      return __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdHelp"], {
        style: props.css
      });

    case "setting":
      return __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdSettings"], {
        style: props.css
      });

    case "expand_more":
      return __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdExpandMore"], {
        style: props.css
      });

    case "expand_less":
      return __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdExpandLess"], {
        style: props.css
      });

    case "chevron_right":
      return __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdChevronRight"], {
        style: props.css
      });

    case "check_circle":
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaRegCheckCircle"], {
        style: props.css
      });

    case "cross_circle":
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaRegTimesCircle"], {
        style: props.css
      });

    case "tune":
      return __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdTune"], {
        style: props.css
      });

    default:
      return __jsx("span", null);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./static/theme.js":
/*!*************************!*\
  !*** ./static/theme.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  primaryColor: "rgb(217, 71, 92)",
  secondaryColor: "rgba(52, 73, 94, 0.88)"
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pankaj/Documents/my-work/with-redux-thunk/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map