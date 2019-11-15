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

var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/common/Button.js";
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
    onClick: onPress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
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

var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/About.js";

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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1673773280", [_static_theme__WEBPACK_IMPORTED_MODULE_3__["default"].primaryColor]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("i", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1673773280", [_static_theme__WEBPACK_IMPORTED_MODULE_3__["default"].primaryColor]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), __jsx("p", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1673773280", [_static_theme__WEBPACK_IMPORTED_MODULE_3__["default"].primaryColor]]]) + " " + "fontreg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Jeevansathi.com is one of the leading and most trusted matrimony websites in India. Making happy marriages happen since 1998, Jeevansathi understands the importance of choosing the right partner for marriage, especially in the Indian cultural setup.", !show ? __jsx("span", {
      onClick: () => this.setState({
        show: true
      }),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1673773280", [_static_theme__WEBPACK_IMPORTED_MODULE_3__["default"].primaryColor]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "More") : "It believes in providing the most secure and convenient matchmaking experience to all its members by ensuring 100% screening,exclusive privacy options, photo protection features and verification of phone numbers and more information. While the online matrimonial site connects millions of people directly, Jeevansathi also maintains a dedicated Customer Care team and offers offline Match Point Centers across the country, for deeper and personal interaction with prospective brides, grooms and /or families."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1673773280",
      dynamic: [_static_theme__WEBPACK_IMPORTED_MODULE_3__["default"].primaryColor],
      __self: this
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
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/AboutApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function AboutApp() {
  return __jsx("div", {
    className: "jsx-733307527" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    style: {
      margin: "0px 24px"
    },
    className: "jsx-733307527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-733307527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Stay Connected With"), __jsx("span", {
    className: "jsx-733307527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("strong", {
    className: "jsx-733307527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Jeevansathi "), "Apps", " ")), __jsx("img", {
    src: "../../static/images/group_64.png",
    className: "jsx-733307527" + " " + "group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-733307527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Access quick & simple search, instant updates and a great user experience on your phone. Download our apps rated best in the online matrimony segment."), __jsx("img", {
    src: "../../static/images/google_play_icon.png",
    className: "jsx-733307527" + " " + "app-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "733307527",
    __self: this
  }, ".container.jsx-733307527{padding-bottom:32px;}h3.jsx-733307527{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;}.group.jsx-733307527{background:#34495e;width:100%;display:block;padding-top:40px;margin-top:10px;}span.jsx-733307527{font-size:20px;}strong.jsx-733307527{color:#d9475c;}p.jsx-733307527{font-size:16px;color:#8a9db0;margin:20px 24px 20px;}.app-icon.jsx-733307527{width:103px;margin:0px 24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9BYm91dEFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmtCLEFBRytCLEFBR0wsQUFPSSxBQVFKLEFBR0QsQUFJQyxBQU1ILFlBQ0ksRUFWbEIsQ0FsQmtCLEFBZWxCLEFBT2dCLElBZkgsQ0FWYixRQWdDQSxDQU53QixDQWZSLENBUEEsYUFRRyxDQVBDLE1Bc0JwQixVQWRrQixFQVBLLGNBUXZCLHVGQVBBIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9BYm91dEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQWJvdXRBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjBweCAyNHB4XCIgfX0+XG4gICAgICAgIDxoMz5TdGF5IENvbm5lY3RlZCBXaXRoPC9oMz5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPHN0cm9uZz5KZWV2YW5zYXRoaSA8L3N0cm9uZz5BcHBze1wiIFwifVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGltZyBjbGFzc05hbWU9XCJncm91cFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvZ3JvdXBfNjQucG5nXCIgLz5cbiAgICAgIDxwPlxuICAgICAgICBBY2Nlc3MgcXVpY2sgJiBzaW1wbGUgc2VhcmNoLCBpbnN0YW50IHVwZGF0ZXMgYW5kIGEgZ3JlYXQgdXNlclxuICAgICAgICBleHBlcmllbmNlIG9uIHlvdXIgcGhvbmUuIERvd25sb2FkIG91ciBhcHBzIHJhdGVkIGJlc3QgaW4gdGhlIG9ubGluZVxuICAgICAgICBtYXRyaW1vbnkgc2VnbWVudC5cbiAgICAgIDwvcD5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPVwiYXBwLWljb25cIlxuICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2dvb2dsZV9wbGF5X2ljb24ucG5nXCJcbiAgICAgIC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiAjOGE5ZGIwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmdyb3VwIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzQ0OTVlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBjb2xvcjogI2Q5NDc1YztcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjb2xvcjogIzhhOWRiMDtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMjRweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFwcC1pY29uIHtcbiAgICAgICAgICB3aWR0aDogMTAzcHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHggMjRweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dEFwcDtcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/AboutApp.js */"));
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
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/BrowseMatrimonyProfiles.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function BrowseMatrimonyProfiles() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2192969299" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, _static_data__WEBPACK_IMPORTED_MODULE_2__["browseData"].map(function (data, index) {
    return __jsx("div", {
      style: {
        width: index % 2 == 0 ? "60%" : "40%",
        maxWidth: index % 2 == 0 ? "60%" : "40%",
        textAlign: "left"
      },
      className: "jsx-2192969299" + " " + "list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-2192969299",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, data.title.display), __jsx("ul", {
      className: "jsx-2192969299",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("li", {
      className: "jsx-2192969299",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-2192969299",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, data.list[0].display)), __jsx("li", {
      className: "jsx-2192969299",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-2192969299",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, data.list[1].display))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2192969299",
    __self: this
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
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Caption.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Caption() {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2400141999", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "container white ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h3", {
    style: {
      marginTop: 0
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2400141999", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "fontreg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "The one you are perfect for, is waiting for you to log on."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2400141999", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "100% Screening of profiles,"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2400141999", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Verified Stamp on those we've met in person"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2400141999", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Advanced Privacy Settings."), __jsx("div", {
    style: {
      marginTop: 17
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2400141999", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: "REGISTER FREE",
    onPress: () => console.log("my passed function"),
    width: "192px",
    height: "48px",
    color: "#34495e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2400141999",
    dynamic: [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor],
    __self: this
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

var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Community.js";

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
      className: "jsx-3348802793" + " " + "mHomePage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, this.state.communityLinks.length > 0 && __jsx("div", {
      className: "jsx-3348802793" + " " + "connect_container pUB32 pt-0 pb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3348802793" + " " + "container-fluid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3348802793" + " " + "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3348802793" + " " + "col-sm-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3348802793" + " " + "match w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("h3", {
      className: "jsx-3348802793" + " " + "text-uppercase",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Browse"), __jsx("span", {
      className: "jsx-3348802793",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("strong", {
      className: "jsx-3348802793" + " " + "pr-1 pl-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Matrimonial"), "Profiles By", " ")), this.state.communityLinks && this.state.communityLinks.map((item, key) => {
      return __jsx("div", {
        className: "jsx-3348802793" + " " + "accordion_tab w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3348802793" + " " + "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3348802793" + " " + "accordion",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3348802793" + " " + "card border-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3348802793" + " " + "card-header p-0 w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("h5", {
        className: "jsx-3348802793" + " " + "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("div", {
        onClick: e => {
          this.handleAccordian(key);
        },
        className: "jsx-3348802793" + " " + " w-100 btn btn-link d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, item.displayName, __jsx("span", {
        id: `em${key}`,
        className: "jsx-3348802793" + " " + "m-0 ic1 show",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), __jsx("span", {
        id: `el${key}`,
        className: "jsx-3348802793" + " " + "m-0 ic2  hide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })))), __jsx("div", {
        id: `collapse${key}`,
        className: "jsx-3348802793" + " " + "mar-0 pt-4 hide accordionItems",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3348802793" + " " + "card-body p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3348802793" + " " + "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, item.props.map(data => {
        return __jsx("div", {
          className: "jsx-3348802793" + " " + "mar-0 wid50p allLinks",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-3348802793" + " " + "matrimonial_state",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, __jsx("a", {
          href: "javascript:void(0)",
          onClick: e => {
            this.setLinks(data.link);
          },
          className: "jsx-3348802793",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, data.name, " Matrimonial", " ")), __jsx("div", {
          className: "jsx-3348802793" + " " + "comLinks",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, __jsx("a", {
          href: "javascript:void(0)",
          onClick: e => {
            this.setLinks(data.brides);
          },
          className: "jsx-3348802793",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, data.name, " Brides")), __jsx("div", {
          className: "jsx-3348802793" + " " + "comLinks",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }, __jsx("a", {
          href: "javascript:void(0)",
          onClick: e => {
            this.setLinks(data.grooms);
          },
          className: "jsx-3348802793",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, data.name, " Grooms")));
      }))))))));
    }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3348802793",
      __self: this
    }, "*.jsx-3348802793{margin:0 auto;padding:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);}a.jsx-3348802793{-webkit-text-decoration:none;text-decoration:none;}.wid50p.jsx-3348802793{width:50%;}.hide.jsx-3348802793{display:none;}.show.jsx-3348802793{display:block;}.row.jsx-3348802793{display:table;}.wid50p.jsx-3348802793{width:50%;}.mHomePage.jsx-3348802793 div.jsx-3348802793,.mHomePage.jsx-3348802793 a.jsx-3348802793{outline:0;}.mHomePage.jsx-3348802793 div.jsx-3348802793:focus,.mHomePage.jsx-3348802793 a.jsx-3348802793:focus{outline:0;}.mHomePage.jsx-3348802793 .mar-0.jsx-3348802793{margin:0;}.mHomePage.jsx-3348802793 .match.jsx-3348802793 h3.jsx-3348802793{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;}.mHomePage.jsx-3348802793 .match.jsx-3348802793 span.jsx-3348802793{font-size:16px;}.mHomePage.jsx-3348802793 .match.jsx-3348802793 span.jsx-3348802793 strong.jsx-3348802793{padding:0 0 0 5px;color:#d9475c;}.mHomePage.jsx-3348802793 .match.jsx-3348802793 span.jsx-3348802793{font-size:20px;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-header.jsx-3348802793{background:transparent;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-header.jsx-3348802793 .btn-link.jsx-3348802793{padding-bottom:15px;padding-top:15px;color:#4c6176;font-weight:600;font-size:14px;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-header.jsx-3348802793 .btn-link.jsx-3348802793:focus,.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-header.jsx-3348802793 .btn-link.jsx-3348802793:hover{-webkit-text-decoration:none;text-decoration:none;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-body.jsx-3348802793 a.jsx-3348802793{margin:0 0 10px;font-size:14px;color:#4c6176;display:inline-block;line-height:20px;}.mHomePage.jsx-3348802793 .container-fluid.jsx-3348802793{width:100%;padding-right:24px;padding-left:24px;}.mHomePage.jsx-3348802793 .row.jsx-3348802793{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-24px;margin-left:-24px;}.mHomePage.jsx-3348802793 .col-sm-12.jsx-3348802793{position:relative;width:100%;min-height:1px;}.mHomePage.jsx-3348802793 .links.jsx-3348802793{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}@media (min-width:576px){.mHomePage.jsx-3348802793 .col-sm-12.jsx-3348802793{-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;}}.mHomePage.jsx-3348802793 .card.jsx-3348802793{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,0.125);border-radius:0.25rem;}.mHomePage.jsx-3348802793 .card-body.jsx-3348802793{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem;}.mHomePage.jsx-3348802793 .card-header.jsx-3348802793{padding:0.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,0.03);border-bottom:1px solid rgba(0,0,0,0.125);}.mHomePage.jsx-3348802793 .card-header.jsx-3348802793:first-child{border-radius:calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card.jsx-3348802793:first-of-type{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card.jsx-3348802793:last-of-type{border-top-left-radius:0;border-top-right-radius:0;}.mHomePage.jsx-3348802793 .border-0.jsx-3348802793{border:0 !important;}.mHomePage.jsx-3348802793 .d-flex.jsx-3348802793{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;}.mHomePage.jsx-3348802793 .justify-content-between.jsx-3348802793{-webkit-box-pack:justify !important;-webkit-justify-content:space-between !important;-ms-flex-pack:justify !important;justify-content:space-between !important;}.mHomePage.jsx-3348802793 .align-items-center.jsx-3348802793{-webkit-align-items:center !important;-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important;}.mHomePage.jsx-3348802793 .w-100.jsx-3348802793{width:100% !important;}.mHomePage.jsx-3348802793 .m-0.jsx-3348802793{margin:0 !important;}.mHomePage.jsx-3348802793 .mb-0.jsx-3348802793{margin-bottom:0 !important;}.mHomePage.jsx-3348802793 .p-0.jsx-3348802793{padding:0 !important;}.mHomePage.jsx-3348802793 .pl-0.jsx-3348802793{padding-left:0 !important;}.mHomePage.jsx-3348802793 .pt-0.jsx-3348802793{padding-top:0 !important;}.mHomePage.jsx-3348802793 .pb-0.jsx-3348802793{padding-bottom:0 !important;}.mHomePage.jsx-3348802793 .pr-1.jsx-3348802793{padding-right:0.25rem !important;}.mHomePage.jsx-3348802793 .pt-4.jsx-3348802793{padding-top:1.5rem !important;}.mHomePage.jsx-3348802793 .text-uppercase.jsx-3348802793{text-transform:uppercase !important;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-header.jsx-3348802793{background:transparent;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-header.jsx-3348802793 .btn-link.jsx-3348802793{padding-bottom:15px !important;color:#4c6176;font-weight:600;font-size:14px;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-header.jsx-3348802793 .btn-link.jsx-3348802793:focus,.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-header.jsx-3348802793 .btn-link.jsx-3348802793:hover{-webkit-text-decoration:none;text-decoration:none;}.mHomePage.jsx-3348802793 .accordion.jsx-3348802793 .card-body.jsx-3348802793 a.jsx-3348802793{margin:0 0 10px;font-size:14px;color:#4c6176;display:block;line-height:20px;}.mHomePage.jsx-3348802793 .pUB32.jsx-3348802793{padding:32px 24px;}.mHomePage.jsx-3348802793 .allLinks.jsx-3348802793{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding-top:8px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.mHomePage.jsx-3348802793 .comLinks.jsx-3348802793{font-size:14px;color:rgba(0,0,0,0.6);line-height:30px;font-weight:400;margin:0;}.mHomePage.jsx-3348802793 .matrimonial_state.jsx-3348802793{font-size:14px;color:#4c6176;line-height:30px;font-weight:500;margin:0;}a.jsx-3348802793{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9Db21tdW5pdHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNktvQixBQUcyQixBQVFPLEFBR1gsQUFHRyxBQUdDLEFBR0EsQUFHSixBQUlBLEFBSUEsQUFHRCxBQUdNLEFBT0EsQUFHRyxBQUlILEFBR1EsQUFHSCxBQVFDLEFBR0wsQUFPTCxBQUtFLEFBTUssQUFLTCxBQUtHLEFBS0UsQUFXSixBQUlVLEFBTWtDLEFBRzFDLEFBS1MsQUFJTCxBQUdJLEFBR2lCLEFBR1gsQUFHUixBQUdGLEFBR08sQUFHTixBQUdLLEFBR0QsQUFHRyxBQUdLLEFBR0gsQUFHTSxBQUdiLEFBR1EsQUFPVixBQUdMLEFBT0UsQUFHUixBQU9LLEFBT0EsQUFPTSxTQXpMdkIsQ0F2QkEsQUFZQSxBQUlBLEFBSUEsQUF3S2UsQ0E1SE0sRUE3RHJCLENBZFksQUFpQlosQUFHQSxDQWlCa0IsQUFPbEIsQUFPQSxBQTJKMkIsQUFPWCxDQWpKQyxBQXlEYyxBQWdFZCxFQTlJRCxBQXVDSCxBQWVFLEFBK0ZmLEVBM0ltQixBQTZFbkIsQUFlQSxDQU1BLENBVEEsQ0E1RkEsQUEwSEEsQ0EvSzZCLEFBbUhYLENBY1UsQUErQjVCLENBSEEsQ0FOQSxDQVlBLENBN0VpQixBQStIRSxDQTFJQyxBQThGcEIsQ0FwSWdCLEFBK0JBLEFBOEdBLEFBV0EsQ0E5SWhCLENBdUhBLEdBTUEsQ0FuSGdCLEFBcUpHLEdBMUZvQixJQTdCdkMsQ0FqRG9CLEFBK0JHLEFBd0RPLEFBc0RaLEFBV0YsQ0F3QkUsRUExSWxCLEVBckVBLEFBeURBLEFBeUhBLEFBa0NBLENBMU5nQyxBQXlEZCxBQXdFbEIsR0FuQ21CLEFBZ0JELEFBZ0dBLElBdEZsQixDQXNFbUIsRUFYRixDQW1DTixDQWhMWSxHQStCSixDQVhGLEVBcUNmLENBZ0JGLEFBZ0dXLENBUVgsRUExRkEsQ0EvQ2lCLEFBV0EsQUEyQjhCLEVBZ0UvQyxBQVdBLEdBaUJBLEVBL013QixDQTBEeEIsQ0FXQSxDQWdJZ0IsUUFsR1EsV0FsR3VCLGFBbUgvQyxFQWtCQSxhQXhEcUIsQUFXckIsTUFtREEsQ0EwRGtCLE9BcE1sQixLQTZFb0IsSUF3SEksS0E5RHhCLEtBbkdBLElBMENBLEVBb0JjLFlBQ1MscUJBQ0Msc0JBQ0ssT0FpRzdCLG9CQWhHd0MsbUNBQ2hCLHNCQUN4QiIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvQ29tbXVuaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL3N2Z0hhbmRsZXJcIjtcbi8vIGltcG9ydCBHQSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvR0FcIjtcbi8vIGxldCBBUElfU0VSVkVSX0NPTlNUQU5UU1xubGV0IGFjY1ZhbHVlID0gbnVsbDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYzdsaW5rcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vICB0aGlzLkdBT2JqZWN0ID0gbmV3IEdBKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbW11bml0eUxpbmtzOiBbXVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldERhdGEoKTtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoYGh0dHBzOi8vd3d3LmplZXZhbnNhdGhpLmNvbS9zZW8vY29tbXVuaXR5TGlua3Mvc2VvL2NvbW11bml0eUxpbmtzYClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLmRhdGEgJiYgQXJyYXkuaXNBcnJheShyZXNwb25zZS5kYXRhKSlcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tbXVuaXR5TGlua3M6IHJlc3BvbnNlLmRhdGEgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGFkZENsYXNzZXMoZWxtLCBjbHMxLCBjbHMyKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlbG0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVsZW1lbnRzW2ldLmNsYXNzTGlzdC5hZGQoY2xzMSk7XG4gICAgICBlbGVtZW50c1tpXS5jbGFzc0xpc3QucmVtb3ZlKGNsczIpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUFjY29yZGlhbihrZXkpIHtcbiAgICBsZXQgYWNjb3JEaWFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvbGxhcHNlJHtrZXl9YCk7XG4gICAgbGV0IGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVtJHtrZXl9YCk7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVsJHtrZXl9YCk7XG4gICAgaWYgKGFjY1ZhbHVlID09IGtleSkge1xuICAgICAgYWNjb3JEaWFuLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgYWNjb3JEaWFuLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICBlbS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICBhY2NWYWx1ZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3NlcyhcImFjY29yZGlvbkl0ZW1zXCIsIFwiaGlkZVwiLCBcInNob3dcIik7XG4gICAgICB0aGlzLmFkZENsYXNzZXMoXCJpYzFcIiwgXCJzaG93XCIsIFwiaGlkZVwiKTtcbiAgICAgIHRoaXMuYWRkQ2xhc3NlcyhcImljMlwiLCBcImhpZGVcIiwgXCJzaG93XCIpO1xuICAgICAgYWNjb3JEaWFuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgYWNjb3JEaWFuLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgZW0uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICBlbS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICBhY2NWYWx1ZSA9IGtleTtcbiAgICB9XG4gIH1cbiAgc2V0TGlua3ModXJsKSB7XG4gICAgLy90aGlzLkdBT2JqZWN0LmdhVHJhY2soJycsJ2pzbXMnLCAnSG9tZXBhZ2VfUicsICdtYXRyaW1vbmlhbCBmb290ZXInKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibUhvbWVQYWdlXCI+XG4gICAgICAgIHt0aGlzLnN0YXRlLmNvbW11bml0eUxpbmtzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29ubmVjdF9jb250YWluZXIgcFVCMzIgcHQtMCBwYi0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdGNoIHctMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZVwiPkJyb3dzZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwicHItMSBwbC0wXCI+TWF0cmltb25pYWw8L3N0cm9uZz5Qcm9maWxlc1xuICAgICAgICAgICAgICAgICAgICAgIEJ5e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbW11bml0eUxpbmtzICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29tbXVuaXR5TGlua3MubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb25fdGFiIHctMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9yZGVyLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBwLTAgdy0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUFjY29yZGlhbihrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDAgYnRuIGJ0bi1saW5rIGQtZmxleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tMCBpYzEgc2hvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BlbSR7a2V5fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEljb24gdHlwZT17J2V4cGFuZF9tb3JlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzPXt7aGVpZ2h0OiAnMjJweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyMnB4JywgY29sb3I6ICcjNEM2MTc2J319Lz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tMCBpYzIgIGhpZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgZWwke2tleX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxJY29uIHR5cGU9eydleHBhbmRfbGVzcyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcz17e2hlaWdodDogJzIycHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjJweCcsIGNvbG9yOiAnIzRDNjE3Nid9fS8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hci0wIHB0LTQgaGlkZSBhY2NvcmRpb25JdGVtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Bjb2xsYXBzZSR7a2V5fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJvcHMubWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hci0wIHdpZDUwcCBhbGxMaW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpbW9uaWFsX3N0YXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TGlua3MoZGF0YS5saW5rKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX0gTWF0cmltb25pYWx7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21MaW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExpbmtzKGRhdGEuYnJpZGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX0gQnJpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21MaW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExpbmtzKGRhdGEuZ3Jvb21zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX0gR3Jvb21zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC53aWQ1MHAge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhpZGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNob3cge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yb3cge1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC53aWQ1MHAge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSBkaXYsXG4gICAgICAgICAgLm1Ib21lUGFnZSBhIHtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgZGl2OmZvY3VzLFxuICAgICAgICAgIC5tSG9tZVBhZ2UgYTpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5tYXItMCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLm1hdGNoIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjogIzhhOWRiMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAubWF0Y2ggc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLm1hdGNoIHNwYW4gc3Ryb25nIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZDk0NzVjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5tYXRjaCBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAuYWNjb3JkaW9uIC5jYXJkLWhlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAuYWNjb3JkaW9uIC5jYXJkLWhlYWRlciAuYnRuLWxpbmsge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNGM2MTc2O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAuYWNjb3JkaW9uIC5jYXJkLWhlYWRlciAuYnRuLWxpbms6Zm9jdXMsXG4gICAgICAgICAgLm1Ib21lUGFnZSAuYWNjb3JkaW9uIC5jYXJkLWhlYWRlciAuYnRuLWxpbms6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5hY2NvcmRpb24gLmNhcmQtYm9keSBhIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzRjNjE3NjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5jb250YWluZXItZmx1aWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5yb3cge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTI0cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTI0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmNvbC1zbS0xMiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAubGlua3Mge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICAubUhvbWVQYWdlIC5jb2wtc20tMTIge1xuICAgICAgICAgICAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5jYXJkIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAuY2FyZC1ib2R5IHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMS4yNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAuY2FyZC1oZWFkZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmNhcmQtaGVhZGVyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4yNXJlbSAtIDFweCkgY2FsYygwLjI1cmVtIC0gMXB4KSAwIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmFjY29yZGlvbiAuY2FyZDpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmFjY29yZGlvbiAuY2FyZDpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5ib3JkZXItMCB7XG4gICAgICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAuZC1mbGV4IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAuanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLnctMTAwIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLm0tMCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAubWItMCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLnAtMCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLnBsLTAge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLnB0LTAge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAucGItMCB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5wci0xIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAucHQtNCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLnRleHQtdXBwZXJjYXNlIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAuYWNjb3JkaW9uIC5jYXJkLWhlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAuYWNjb3JkaW9uIC5jYXJkLWhlYWRlciAuYnRuLWxpbmsge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiAjNGM2MTc2O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAuYWNjb3JkaW9uIC5jYXJkLWhlYWRlciAuYnRuLWxpbms6Zm9jdXMsXG4gICAgICAgICAgLm1Ib21lUGFnZSAuYWNjb3JkaW9uIC5jYXJkLWhlYWRlciAuYnRuLWxpbms6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5hY2NvcmRpb24gLmNhcmQtYm9keSBhIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzRjNjE3NjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tSG9tZVBhZ2UgLnBVQjMyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMycHggMjRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1Ib21lUGFnZSAuYWxsTGlua3Mge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5jb21MaW5rcyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubUhvbWVQYWdlIC5tYXRyaW1vbmlhbF9zdGF0ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzRjNjE3NjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Community.js */"));
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
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/DownloadApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function DownloadApp() {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1296489133", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1296489133", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "fontreg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Download Jeevansathi APP"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1296489133", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "fontreg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Best rated APP in online matrimony segment."), __jsx("img", {
    src: "../../static/images/nhm_phoneImg.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1296489133", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1296489133", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "fontreg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "DOWNLOAD APP"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1296489133",
    dynamic: [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor],
    __self: this
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
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Footer() {
  const {
    0: isVisible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return __jsx("div", {
    className: "jsx-3918804521" + " " + "container footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3918804521" + " " + "logo-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    src: "../../static/images/js_footer_logo.png",
    className: "jsx-3918804521",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3918804521",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("cite", {
    className: "jsx-3918804521",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Jeevansathi"), __jsx("span", {
    className: "jsx-3918804521",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Be found"))), __jsx("div", {
    style: {
      position: "relative"
    },
    className: "jsx-3918804521",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3918804521",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Jeevansathi.com is one of the leading and most trusted matrimony websites in India. Making happy marriages happen since 1998, Jeevansathi understands the importance of choosing the right partner for marriage, especially in the Indian cultural setup. It believes in providing the most secure and convenient matchmaking experience to all its members by ensuring 100% screening exclusive privacy options, photo protection features and verification of phone numbers and more information. While the online matrimonial site connects millions of people directly, Jeevansathi also maintains a dedicated Customer Care team and offers offline Match Point Centers across the country, for deeper and personal interaction with prospective brides, grooms and/or families.", __jsx("br", {
    className: "jsx-3918804521",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("p", {
    style: {
      display: isVisible ? "block" : "none"
    },
    className: "jsx-3918804521",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Please note: Jeevansathi is only meant for users with a bonafide intent to enter into a matrimonial alliance and is not meant for users interested in dating only. Jeevansathi platform should not be used to post any obscene material, such actions may lead to permanent deletion of the profile used to upload such content.")), __jsx("div", {
    style: {
      position: "absolute",
      display: isVisible ? "none" : "block"
    },
    className: "jsx-3918804521" + " " + "view-more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("span", {
    onClick: () => setVisible(true),
    className: "jsx-3918804521",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "View more"))), __jsx("div", {
    className: "jsx-3918804521" + " " + "follow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3918804521",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3918804521",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Follow us on"), __jsx("div", {
    className: "jsx-3918804521",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3918804521" + " " + "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("a", {
    className: "jsx-3918804521" + " " + "twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("a", {
    className: "jsx-3918804521" + " " + "instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-3918804521" + " " + "shift-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3918804521",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "App available on"), __jsx("div", {
    className: "jsx-3918804521",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3918804521" + " " + "play-store",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx("a", {
    className: "jsx-3918804521" + " " + "app-store",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-3918804521" + " " + "toll-free",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3918804521",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Customer Service (Toll Free)"), __jsx("b", {
    className: "jsx-3918804521",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "1-800-419-6299")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3918804521",
    __self: this
  }, ".container.jsx-3918804521{padding:32px 24px;background:#34495e;color:white;}.logo-title.jsx-3918804521{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.jsx-3918804521{margin-right:15px;}cite.jsx-3918804521{font-size:12px;}.logo-title.jsx-3918804521 span.jsx-3918804521{font-size:9px;color:#959499;display:block;}p.jsx-3918804521{font-size:14px;line-height:23px;-webkit-transition:height 0.3s ease;transition:height 0.3s ease;}a.jsx-3918804521{background-image:url(../../static/images/footerIconsSprite.svg);background-repeat:no-repeat;width:17px;height:17px;margin:10px 10px 0px 0px;display:inline-block;}.view-more.jsx-3918804521{bottom:0;left:0;text-align:center;width:100%;color:#fff;min-height:120px;background-image:linear-gradient( -180deg, rgba(52,73,94,0) 0%, #34495e 74% );}.view-more.jsx-3918804521 span.jsx-3918804521{position:absolute;bottom:0;-webkit-transform:translate(-50%,0%);-ms-transform:translate(-50%,0%);transform:translate(-50%,0%);}.follow.jsx-3918804521{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.shift-right.jsx-3918804521{margin-left:70px;}.follow.jsx-3918804521 span.jsx-3918804521{font-size:12px;font-weight:600;}.facebook.jsx-3918804521{background-position:-90px -1px;}.twitter.jsx-3918804521{background-position:-140px -1px;}.instagram.jsx-3918804521{background-position:-116px -1px;}.play-store.jsx-3918804521{background-position:-66px 0;}.app-store.jsx-3918804521{background-position:-40px -1px;}.toll-free.jsx-3918804521{font-size:12px;margin-top:20px;}.toll-free.jsx-3918804521 b.jsx-3918804521{display:block;margin-top:10px;font-size:12px;font-weight:normal;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUVrQixBQUc2QixBQU1MLEFBS0ssQUFJSCxBQUdELEFBS0MsQUFNaUQsQUFTdkQsQUFjUyxBQU1MLEFBR0ksQUFJRixBQUtnQixBQUdDLEFBR0EsQUFHSixBQUdHLEFBR2hCLEFBSUQsU0FsRFAsS0FwQk8sQUF1RUUsQ0ExRWxCLEFBUW1CLEFBMENELEFBb0JBLENBOUNFLENBc0JwQixDQTdEcUIsQUFXckIsQUF5Q1csU0FDcUIsQ0FsQ2hCLEFBNERoQixFQVdpQixDQXhCakIsQUFJQSxBQVlBLEFBSUEsQ0E5RDhCLEFBaUQ5QixBQUdBLEVBcENhLEdBdkNDLEtBbUJkLEdBcUJhLEFBa0RRLElBekZyQixPQXdDbUIsUUFiVyxBQStEOUIsU0E3Q0csQ0F6Q2tCLEFBb0RyQixrQkE1QmEsSUFMYixPQU1jLFlBQ2EsV0FzQjNCLGNBckJ1QixXQWV2QixVQWRBLE1BM0JBIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gRm9vdGVyKCkge1xuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZvb3RlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXRpdGxlXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9qc19mb290ZXJfbG9nby5wbmdcIiAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxjaXRlPkplZXZhbnNhdGhpPC9jaXRlPlxuXG4gICAgICAgICAgPHNwYW4+QmUgZm91bmQ8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEplZXZhbnNhdGhpLmNvbSBpcyBvbmUgb2YgdGhlIGxlYWRpbmcgYW5kIG1vc3QgdHJ1c3RlZCBtYXRyaW1vbnlcbiAgICAgICAgICB3ZWJzaXRlcyBpbiBJbmRpYS4gTWFraW5nIGhhcHB5IG1hcnJpYWdlcyBoYXBwZW4gc2luY2UgMTk5OCxcbiAgICAgICAgICBKZWV2YW5zYXRoaSB1bmRlcnN0YW5kcyB0aGUgaW1wb3J0YW5jZSBvZiBjaG9vc2luZyB0aGUgcmlnaHQgcGFydG5lclxuICAgICAgICAgIGZvciBtYXJyaWFnZSwgZXNwZWNpYWxseSBpbiB0aGUgSW5kaWFuIGN1bHR1cmFsIHNldHVwLiBJdCBiZWxpZXZlcyBpblxuICAgICAgICAgIHByb3ZpZGluZyB0aGUgbW9zdCBzZWN1cmUgYW5kIGNvbnZlbmllbnQgbWF0Y2htYWtpbmcgZXhwZXJpZW5jZSB0byBhbGxcbiAgICAgICAgICBpdHMgbWVtYmVycyBieSBlbnN1cmluZyAxMDAlIHNjcmVlbmluZyBleGNsdXNpdmUgcHJpdmFjeSBvcHRpb25zLFxuICAgICAgICAgIHBob3RvIHByb3RlY3Rpb24gZmVhdHVyZXMgYW5kIHZlcmlmaWNhdGlvbiBvZiBwaG9uZSBudW1iZXJzIGFuZCBtb3JlXG4gICAgICAgICAgaW5mb3JtYXRpb24uIFdoaWxlIHRoZSBvbmxpbmUgbWF0cmltb25pYWwgc2l0ZSBjb25uZWN0cyBtaWxsaW9ucyBvZlxuICAgICAgICAgIHBlb3BsZSBkaXJlY3RseSwgSmVldmFuc2F0aGkgYWxzbyBtYWludGFpbnMgYSBkZWRpY2F0ZWQgQ3VzdG9tZXIgQ2FyZVxuICAgICAgICAgIHRlYW0gYW5kIG9mZmVycyBvZmZsaW5lIE1hdGNoIFBvaW50IENlbnRlcnMgYWNyb3NzIHRoZSBjb3VudHJ5LCBmb3JcbiAgICAgICAgICBkZWVwZXIgYW5kIHBlcnNvbmFsIGludGVyYWN0aW9uIHdpdGggcHJvc3BlY3RpdmUgYnJpZGVzLCBncm9vbXMgYW5kL29yXG4gICAgICAgICAgZmFtaWxpZXMuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgZGlzcGxheTogaXNWaXNpYmxlID8gXCJibG9ja1wiIDogXCJub25lXCIgfX0+XG4gICAgICAgICAgICBQbGVhc2Ugbm90ZTogSmVldmFuc2F0aGkgaXMgb25seSBtZWFudCBmb3IgdXNlcnMgd2l0aCBhIGJvbmFmaWRlXG4gICAgICAgICAgICBpbnRlbnQgdG8gZW50ZXIgaW50byBhIG1hdHJpbW9uaWFsIGFsbGlhbmNlIGFuZCBpcyBub3QgbWVhbnQgZm9yXG4gICAgICAgICAgICB1c2VycyBpbnRlcmVzdGVkIGluIGRhdGluZyBvbmx5LiBKZWV2YW5zYXRoaSBwbGF0Zm9ybSBzaG91bGQgbm90IGJlXG4gICAgICAgICAgICB1c2VkIHRvIHBvc3QgYW55IG9ic2NlbmUgbWF0ZXJpYWwsIHN1Y2ggYWN0aW9ucyBtYXkgbGVhZCB0b1xuICAgICAgICAgICAgcGVybWFuZW50IGRlbGV0aW9uIG9mIHRoZSBwcm9maWxlIHVzZWQgdG8gdXBsb2FkIHN1Y2ggY29udGVudC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgZGlzcGxheTogaXNWaXNpYmxlID8gXCJub25lXCIgOiBcImJsb2NrXCJcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInZpZXctbW9yZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKHRydWUpfT5WaWV3IG1vcmU8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9sbG93XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4+Rm9sbG93IHVzIG9uPC9zcGFuPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmYWNlYm9va1wiPjwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInR3aXR0ZXJcIj48L2E+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbnN0YWdyYW1cIj48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaWZ0LXJpZ2h0XCI+XG4gICAgICAgICAgPHNwYW4+QXBwIGF2YWlsYWJsZSBvbjwvc3Bhbj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGxheS1zdG9yZVwiPjwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFwcC1zdG9yZVwiPjwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9sbC1mcmVlXCI+XG4gICAgICAgIDxzcGFuPkN1c3RvbWVyIFNlcnZpY2UgKFRvbGwgRnJlZSk8L3NwYW4+XG4gICAgICAgIDxiPjEtODAwLTQxOS02Mjk5PC9iPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZzogMzJweCAyNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzNDQ5NWU7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28tdGl0bGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgY2l0ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5sb2dvLXRpdGxlIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgIGNvbG9yOiAjOTU5NDk5O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL3N0YXRpYy9pbWFnZXMvZm9vdGVySWNvbnNTcHJpdGUuc3ZnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAwcHggMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC52aWV3LW1vcmUge1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAtMTgwZGVnLFxuICAgICAgICAgICAgcmdiYSg1MiwgNzMsIDk0LCAwKSAwJSxcbiAgICAgICAgICAgICMzNDQ5NWUgNzQlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC52aWV3LW1vcmUgc3BhbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9sbG93IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5zaGlmdC1yaWdodCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9sbG93IHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZhY2Vib29rIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTBweCAtMXB4O1xuICAgICAgICB9XG4gICAgICAgIC50d2l0dGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQwcHggLTFweDtcbiAgICAgICAgfVxuICAgICAgICAuaW5zdGFncmFtIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTE2cHggLTFweDtcbiAgICAgICAgfVxuICAgICAgICAucGxheS1zdG9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY2cHggMDtcbiAgICAgICAgfVxuICAgICAgICAuYXBwLXN0b3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDBweCAtMXB4O1xuICAgICAgICB9XG4gICAgICAgIC50b2xsLWZyZWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50b2xsLWZyZWUgYiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXX0= */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Footer.js */"));
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
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
















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

  let floatReg = __jsx("div", {
    className: "w-100 regFloatBtn",
    id: "floatDivBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("div", {
    className: "d-flex align-items-center floatDiv",
    onClick: e => {
      this.GAObject.gaTrack("", "jsms", "Homepage_R", "registration floater ");
      window.location.href = "/profile/registration_new.php?source=home_float";
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Register Free"), __jsx("span", {
    className: "nMargin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    id: "floatDivBtn",
    className: "jsx-1541247752" + " " + "w-100 regFloatBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    onClick: e => {
      this.GAObject.gaTrack("", "jsms", "Homepage_R", "registration floater ");
      window.location.href = "/profile/registration_new.php?source=home_float";
    },
    className: "jsx-1541247752" + " " + "d-flex align-items-center floatDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1541247752",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Register Free"), __jsx("span", {
    className: "jsx-1541247752" + " " + "nMargin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }))), __jsx(_bannerSection_Banner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx(_VerificationDetail__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx(_SimpleSteps__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx(_PrivacySetting__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx(_MembershipPlans__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), __jsx(_JSExclusive__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx(_AboutApp__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx(_MatchProfiles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx(_Community__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1541247752",
    __self: this
  }, "div.jsx-1541247752{outline:0;}div.jsx-1541247752:focus{outline:0;}.d-flex.jsx-1541247752{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;margin:0 auto;}.align-items-center.jsx-1541247752{-webkit-align-items:center !important;-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important;}.w-100.jsx-1541247752{width:100% !important;}.floatDiv.jsx-1541247752{background:rgb(217,71,92);color:rgb(255,255,255);padding:8px;border-radius:24px;line-height:25px;font-size:14px;font-weight:600;width:142px;box-shadow:0 3px 6px 0 rgba(0,0,0,0.2);}.regFloatBtn.jsx-1541247752{position:fixed;bottom:-80px;z-index:10;-webkit-transition:all 0.4s cubic-bezier(0.165,0.84,0.44,1);transition:all 0.4s cubic-bezier(0.165,0.84,0.44,1);}.bottom20.jsx-1541247752{bottom:20px;}.nMargin.jsx-1541247752{margin:0 0 1px -10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9Ib21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdIa0IsQUFHcUIsQUFHQSxBQUdjLEFBSU0sQUFHUixBQUdNLEFBV2IsQUFNSCxBQUdTLFVBbkN2QixBQUdBLEVBOEJBLEdBTmUsTUFTZixDQXZCQSxJQUcyQixFQVlkLFdBQzRDLFVBWjNDLFlBQ08sbUJBQ0YsaUJBQ0YsZUFDQyxNQWZGLFVBZ0JGLElBZmQsS0FHQSxHQWE0QyxXQU81Qyw0QkFOQSIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvSG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmFubmVyIGZyb20gXCIuL2Jhbm5lclNlY3Rpb24vQmFubmVyXCI7XG5pbXBvcnQgQ2FwdGlvbiBmcm9tIFwiLi9DYXB0aW9uXCI7XG5pbXBvcnQgTWVtYmVyc2hpcFBsYW5zIGZyb20gXCIuL01lbWJlcnNoaXBQbGFuc1wiO1xuaW1wb3J0IE1hdGNoUHJvZmlsZXMgZnJvbSBcIi4vTWF0Y2hQcm9maWxlc1wiO1xuaW1wb3J0IERvd25sb2FkQXBwIGZyb20gXCIuL0Rvd25sb2FkQXBwXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vQWJvdXRcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgQnJvd3NlTWF0cmltb255UHJvZmlsZXMgZnJvbSBcIi4vQnJvd3NlTWF0cmltb255UHJvZmlsZXNcIjtcbmltcG9ydCBWZXJpZmljYXRpb25EZXRhaWwgZnJvbSBcIi4vVmVyaWZpY2F0aW9uRGV0YWlsXCI7XG5pbXBvcnQgU2ltcGxlU3RlcHMgZnJvbSBcIi4vU2ltcGxlU3RlcHNcIjtcbmltcG9ydCBQcml2YWN5U2V0dGluZyBmcm9tIFwiLi9Qcml2YWN5U2V0dGluZ1wiO1xuaW1wb3J0IEpTRXhjbHVzaXZlIGZyb20gXCIuL0pTRXhjbHVzaXZlXCI7XG5pbXBvcnQgQWJvdXRBcHAgZnJvbSBcIi4vQWJvdXRBcHBcIjtcbmltcG9ydCBDb21tdW5pdHkgZnJvbSBcIi4vQ29tbXVuaXR5XCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpbWFnZXNMb2FkaW5nQWZ0ZXJTY3JvbGwsIGNoYW5nZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICB2YXIgaW1hZ2VzQ2FsbGVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gaXNBbnlQYXJ0T2ZFbGVtZW50SW5WaWV3cG9ydChlbCkge1xuICAgIGxldCByZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlbClbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IHdpbmRvd0hlaWdodCA9XG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICBsZXQgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgbGV0IHZlcnRJblZpZXcgPSByZWN0LnRvcCA8PSB3aW5kb3dIZWlnaHQgJiYgcmVjdC50b3AgKyByZWN0LmhlaWdodCA+PSAwO1xuICAgIGxldCBob3JJblZpZXcgPSByZWN0LmxlZnQgPD0gd2luZG93V2lkdGggJiYgcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCA+PSAwO1xuICAgIHJldHVybiB2ZXJ0SW5WaWV3ICYmIGhvckluVmlldztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVBhZ2VTY3JvbGwoKSB7XG4gICAgbGV0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyQ29udGFpbmVyXCIpO1xuICAgIGxldCBmbG9hdERpdkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxvYXREaXZCdG5cIik7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMzUwKSB7XG4gICAgICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlckJnMlwiKTtcbiAgICAgIGZsb2F0RGl2QnRuLmNsYXNzTGlzdC5hZGQoXCJib3R0b20yMFwiKTtcbiAgICAgIGlmICghaW1hZ2VzQ2FsbGVkKSB7XG4gICAgICAgIGNoYW5nZUxvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGltYWdlc0NhbGxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyQmcyXCIpO1xuICAgICAgZmxvYXREaXZCdG4uY2xhc3NMaXN0LnJlbW92ZShcImJvdHRvbTIwXCIpO1xuICAgIH1cbiAgICBpZiAoaXNBbnlQYXJ0T2ZFbGVtZW50SW5WaWV3cG9ydChcImZvb3RlclwiKSkge1xuICAgICAgZmxvYXREaXZCdG4uY2xhc3NMaXN0LnJlbW92ZShcImJvdHRvbTIwXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIGRlbGF5KSB7XG4gICAgdmFyIGluRGVib3VuY2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgLy8gY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgICBjbGVhclRpbWVvdXQoaW5EZWJvdW5jZSk7XG4gICAgICBpbkRlYm91bmNlID0gc2V0VGltZW91dCgoKSA9PiBmdW5jKCksIGRlbGF5KTtcbiAgICB9O1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgc2NIYW5kbGVyID0gZGVib3VuY2UoaGFuZGxlUGFnZVNjcm9sbCwgNTApO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjSGFuZGxlciwgdHJ1ZSk7XG4gIH0sIFtdKTtcbiAgbGV0IGZsb2F0UmVnID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcmVnRmxvYXRCdG5cIiBpZD1cImZsb2F0RGl2QnRuXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZmxvYXREaXZcIlxuICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICB0aGlzLkdBT2JqZWN0LmdhVHJhY2soXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJqc21zXCIsXG4gICAgICAgICAgICBcIkhvbWVwYWdlX1JcIixcbiAgICAgICAgICAgIFwicmVnaXN0cmF0aW9uIGZsb2F0ZXIgXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID1cbiAgICAgICAgICAgIFwiL3Byb2ZpbGUvcmVnaXN0cmF0aW9uX25ldy5waHA/c291cmNlPWhvbWVfZmxvYXRcIjtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPHNwYW4+UmVnaXN0ZXIgRnJlZTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibk1hcmdpblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcmVnRmxvYXRCdG5cIiBpZD1cImZsb2F0RGl2QnRuXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGZsb2F0RGl2XCJcbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgIHRoaXMuR0FPYmplY3QuZ2FUcmFjayhcbiAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgXCJqc21zXCIsXG4gICAgICAgICAgICAgIFwiSG9tZXBhZ2VfUlwiLFxuICAgICAgICAgICAgICBcInJlZ2lzdHJhdGlvbiBmbG9hdGVyIFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPVxuICAgICAgICAgICAgICBcIi9wcm9maWxlL3JlZ2lzdHJhdGlvbl9uZXcucGhwP3NvdXJjZT1ob21lX2Zsb2F0XCI7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuPlJlZ2lzdGVyIEZyZWU8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibk1hcmdpblwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCYW5uZXIgLz5cbiAgICAgIDxWZXJpZmljYXRpb25EZXRhaWwgLz5cbiAgICAgIDxTaW1wbGVTdGVwcyAvPlxuICAgICAgPFByaXZhY3lTZXR0aW5nIC8+XG4gICAgICA8TWVtYmVyc2hpcFBsYW5zIC8+XG4gICAgICA8SlNFeGNsdXNpdmUgLz5cbiAgICAgIDxBYm91dEFwcCAvPlxuXG4gICAgICB7LyogPENhcHRpb24gLz4gKi99XG5cbiAgICAgIDxNYXRjaFByb2ZpbGVzIC8+XG4gICAgICB7LyogPERvd25sb2FkQXBwIC8+ICovfVxuXG4gICAgICB7LyogPEJyb3dzZU1hdHJpbW9ueVByb2ZpbGVzIC8+ICovfVxuICAgICAgey8qIDxBYm91dCAvPiAqL31cbiAgICAgIDxDb21tdW5pdHkgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICB9XG4gICAgICAgIGRpdjpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgfVxuICAgICAgICAuZC1mbGV4IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC53LTEwMCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuZmxvYXREaXYge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMTcsIDcxLCA5Mik7XG4gICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB3aWR0aDogMTQycHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICB9XG4gICAgICAgIC5yZWdGbG9hdEJ0biB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogLTgwcHg7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcbiAgICAgICAgfVxuICAgICAgICAuYm90dG9tMjAge1xuICAgICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubk1hcmdpbiB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXB4IC0xMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Home.js */"));
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
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/JSExclusive.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function JSExclusive() {
  return __jsx("div", {
    className: "jsx-534608388" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-534608388",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-534608388",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Personalised Match-Making Service"), __jsx("span", {
    className: "jsx-534608388",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Introducing ", __jsx("strong", {
    className: "jsx-534608388",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, " JS Exclusive"), " ")), __jsx("div", {
    className: "jsx-534608388",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("img", {
    src: "../../static/images/exclusive.png",
    className: "jsx-534608388" + " " + "exclusive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-534608388",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-534608388",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, _static_data__WEBPACK_IMPORTED_MODULE_2__["exclusiveList"].map(function ({
    imgURL,
    text
  }) {
    return __jsx("li", {
      className: "jsx-534608388",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("img", {
      src: imgURL,
      className: "jsx-534608388",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-534608388",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, text));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "534608388",
    __self: this
  }, ".container.jsx-534608388{padding:32px 24px;}h3.jsx-534608388{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;}span.jsx-534608388{font-size:20px;}strong.jsx-534608388{color:#d9475c;}.exclusive.jsx-534608388{width:100%;margin:20px 0;max-height:190px;}li.jsx-534608388{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:15px;}li.jsx-534608388 img.jsx-534608388{margin-right:10px;}li.jsx-534608388 span.jsx-534608388{color:#14202b;font-size:16px;font-weight:500;line-height:19px;text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9KU0V4Y2x1c2l2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmtCLEFBRzZCLEFBSUgsQUFPQSxBQUdELEFBSUgsQUFNUyxBQUtGLEFBR0osV0FiQSxHQUpoQixBQWtCaUIsQ0E1QkMsQUFPbEIsR0FYQSxBQTZCQSxPQVZtQixJQWNELEVBNUJGLFdBZWhCLEdBZG9CLEFBNEJELGlCQUNELENBNUJLLGVBNkJ2Qix3QkFacUIsOERBaEJyQiwrQkFpQnFCLG1CQUNyQiIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvSlNFeGNsdXNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBleGNsdXNpdmVMaXN0IH0gZnJvbSBcIi4uLy4uL3N0YXRpYy9kYXRhXCI7XG5cbmZ1bmN0aW9uIEpTRXhjbHVzaXZlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+UGVyc29uYWxpc2VkIE1hdGNoLU1ha2luZyBTZXJ2aWNlPC9oMz5cblxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICBJbnRyb2R1Y2luZyA8c3Ryb25nPiBKUyBFeGNsdXNpdmU8L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJleGNsdXNpdmVcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2V4Y2x1c2l2ZS5wbmdcIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7ZXhjbHVzaXZlTGlzdC5tYXAoZnVuY3Rpb24oeyBpbWdVUkwsIHRleHQgfSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdVUkx9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3RleHR9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDMycHggMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogIzhhOWRiMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGNvbG9yOiAjZDk0NzVjO1xuICAgICAgICB9XG5cbiAgICAgICAgLmV4Y2x1c2l2ZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgbWF4LWhlaWdodDogMTkwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIGxpIGltZyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGxpIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjMTQyMDJiO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSlNFeGNsdXNpdmU7XG4iXX0= */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/JSExclusive.js */"));
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MatchProfiles.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

 //TODO get this data through api call

const arr = [{
  FRAME_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245781-1536998402.jpeg",
  HEADING: "Sandeep Singh Bindra weds Gaganpreet Kaur",
  IS_EXCLUSIVE: "0",
  MAIN_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245779-1536998402.jpeg",
  NAME1: "Sandeep Singh Bindra",
  NAME2: "Gaganpreet Kaur",
  SID: "8265",
  SQUARE_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245783-1536998402.jpeg",
  STORY: "It is my imense pleasure to say that Jeevansathi is 'The Platform' where I met my soulmate. It has been almost six month we have been together and I am very happy to say we are enjoying every part of it. Thanks Jeevansathi.com for making me meet my dream girl. Jeevansathi.com platform is like a miracle.You never know what is coming for you .",
  STORYID: "17741",
  YEAR: "2018",
  combinedName: "Sandeep & Gaganpreet",
  marriageDate: "21, August 2018"
}, {
  FRAME_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245781-1536998402.jpeg",
  HEADING: "Sandeep Singh Bindra weds Gaganpreet Kaur",
  IS_EXCLUSIVE: "0",
  MAIN_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245779-1536998402.jpeg",
  NAME1: "Sandeep Singh Bindra",
  NAME2: "Gaganpreet Kaur",
  SID: "8265",
  SQUARE_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245783-1536998402.jpeg",
  STORY: "It is my imense pleasure to say that Jeevansathi is 'The Platform' where I met my soulmate. It has been almost six month we have been together and I am very happy to say we are enjoying every part of it. Thanks Jeevansathi.com for making me meet my dream girl. Jeevansathi.com platform is like a miracle.You never know what is coming for you .",
  STORYID: "17741",
  YEAR: "2018",
  combinedName: "Sandeep & Gaganpreet",
  marriageDate: "21, August 2018"
}, {
  FRAME_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245781-1536998402.jpeg",
  HEADING: "Sandeep Singh Bindra weds Gaganpreet Kaur",
  IS_EXCLUSIVE: "0",
  MAIN_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245779-1536998402.jpeg",
  NAME1: "Sandeep Singh Bindra",
  NAME2: "Gaganpreet Kaur",
  SID: "8265",
  SQUARE_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245783-1536998402.jpeg",
  STORY: "It is my imense pleasure to say that Jeevansathi is 'The Platform' where I met my soulmate. It has been almost six month we have been together and I am very happy to say we are enjoying every part of it. Thanks Jeevansathi.com for making me meet my dream girl. Jeevansathi.com platform is like a miracle.You never know what is coming for you .",
  STORYID: "17741",
  YEAR: "2018",
  combinedName: "Sandeep & Gaganpreet",
  marriageDate: "21, August 2018"
}, {
  FRAME_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245781-1536998402.jpeg",
  HEADING: "Sandeep Singh Bindra weds Gaganpreet Kaur",
  IS_EXCLUSIVE: "0",
  MAIN_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245779-1536998402.jpeg",
  NAME1: "Sandeep Singh Bindra",
  NAME2: "Gaganpreet Kaur",
  SID: "8265",
  SQUARE_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245783-1536998402.jpeg",
  STORY: "It is my imense pleasure to say that Jeevansathi is 'The Platform' where I met my soulmate. It has been almost six month we have been together and I am very happy to say we are enjoying every part of it. Thanks Jeevansathi.com for making me meet my dream girl. Jeevansathi.com platform is like a miracle.You never know what is coming for you .",
  STORYID: "17741",
  YEAR: "2018",
  combinedName: "Sandeep & Gaganpreet",
  marriageDate: "21, August 2018"
}, {
  FRAME_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245781-1536998402.jpeg",
  HEADING: "Sandeep Singh Bindra weds Gaganpreet Kaur",
  IS_EXCLUSIVE: "0",
  MAIN_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245779-1536998402.jpeg",
  NAME1: "Sandeep Singh Bindra",
  NAME2: "Gaganpreet Kaur",
  SID: "8265",
  SQUARE_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245783-1536998402.jpeg",
  STORY: "It is my imense pleasure to say that Jeevansathi is 'The Platform' where I met my soulmate. It has been almost six month we have been together and I am very happy to say we are enjoying every part of it. Thanks Jeevansathi.com for making me meet my dream girl. Jeevansathi.com platform is like a miracle.You never know what is coming for you .",
  STORYID: "17741",
  YEAR: "2018",
  combinedName: "Sandeep & Gaganpreet",
  marriageDate: "21, August 2018"
}];

class MatchProfiles extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "state", {
      profiles: arr
    });
  }

  render() {
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
    const {
      profiles
    } = this.state;
    console.log(profiles);
    return __jsx("div", {
      className: "jsx-867562434" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-867562434" + " " + "heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx("h3", {
      className: "jsx-867562434",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "Lakhs of Couples"), __jsx("span", {
      className: "jsx-867562434",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, "Matched by ", __jsx("strong", {
      className: "jsx-867562434",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, " Jeevansathi"))), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }), profiles.map(function (profile) {
      return __jsx("div", {
        className: "jsx-867562434" + " " + "profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx("div", {
        style: {
          backgroundImage: `linear-gradient(transparent 0%, rgba(0,0,0,1) 120%),url(${profile.SQUARE_PIC_URL})`
        },
        className: "jsx-867562434" + " " + "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-867562434" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-867562434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, profile.combinedName), __jsx("div", {
        className: "jsx-867562434" + " " + "border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), __jsx("span", {
        className: "jsx-867562434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "`MARRIED SINCE $", profile.marriageDate, "`"))));
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "867562434",
      __self: this
    }, ".container.jsx-867562434{padding:32px 24px;}.profile.jsx-867562434{margin-top:20px;}.image.jsx-867562434{width:98%;height:228px;margin-left:0;border-radius:8px;background-size:cover;background-repeat:no-repeat;background-position:center top;position:relative;}h3.jsx-867562434{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;}span.jsx-867562434{font-size:20px;}strong.jsx-867562434{color:#d9475c;}.text.jsx-867562434{position:absolute;bottom:50px;color:white;text-align:center;width:100%;}.text.jsx-867562434 h2.jsx-867562434{font-size:23px;text-shadow:0 1px 1px rgba(0,0,0,0.27);}.text.jsx-867562434 span.jsx-867562434{font-size:11px;color:#fff;-webkit-letter-spacing:1.15px;-moz-letter-spacing:1.15px;-ms-letter-spacing:1.15px;letter-spacing:1.15px;text-align:center;padding-bottom:16px;padding-top:8px;text-shadow:0 1px 1px rgba(0,0,0,0.24);}.border.jsx-867562434{border-bottom:1px solid #fff;width:80%;margin:15px auto 5px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NYXRjaFByb2ZpbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVKb0IsQUFHK0IsQUFJRixBQUlOLEFBV0ssQUFPQSxBQUdELEFBSUksQUFPSCxBQUtBLEFBVWMsVUE5Q2hCLElBcUJmLENBVmtCLEFBT2xCLEFBYzRDLEFBSy9CLENBekNiLEVBSkEsQUFpQ2MsS0F4QkUsR0FxQ1EsR0FTWixDQXJCRSxDQWRFLE1BVkksRUE4Q1EsR0FyQlIsR0FkQSxTQW9CcEIsQ0E5QndCLEtBeUJYLEdBZFUsRUFtQ3ZCLE1BcEJBLE1BekI4Qiw0QkFDRywwQkFrQ2IsS0FqQ0EsYUFrQ0UsS0FqQ3RCLFVBUUEsS0EwQmtCLGdCQUMwQix1Q0FDNUMiLCJmaWxlIjoiL2hvbWUvcGFua2FqL0RvY3VtZW50cy9teS13b3JrL3dpdGgtcmVkdXgtdGh1bmsvY29tcG9uZW50cy9ob21lL01hdGNoUHJvZmlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuXG4vL1RPRE8gZ2V0IHRoaXMgZGF0YSB0aHJvdWdoIGFwaSBjYWxsXG5cbmNvbnN0IGFyciA9IFtcbiAge1xuICAgIEZSQU1FX1BJQ19VUkw6XG4gICAgICBcImh0dHBzOi8vbWVkaWFjZG4uamVldmFuc2F0aGkuY29tLzEwNzYyLzUvMjE1MjQ1NzgxLTE1MzY5OTg0MDIuanBlZ1wiLFxuICAgIEhFQURJTkc6IFwiU2FuZGVlcCBTaW5naCBCaW5kcmEgd2VkcyBHYWdhbnByZWV0IEthdXJcIixcbiAgICBJU19FWENMVVNJVkU6IFwiMFwiLFxuICAgIE1BSU5fUElDX1VSTDpcbiAgICAgIFwiaHR0cHM6Ly9tZWRpYWNkbi5qZWV2YW5zYXRoaS5jb20vMTA3NjIvNS8yMTUyNDU3NzktMTUzNjk5ODQwMi5qcGVnXCIsXG4gICAgTkFNRTE6IFwiU2FuZGVlcCBTaW5naCBCaW5kcmFcIixcbiAgICBOQU1FMjogXCJHYWdhbnByZWV0IEthdXJcIixcbiAgICBTSUQ6IFwiODI2NVwiLFxuICAgIFNRVUFSRV9QSUNfVVJMOlxuICAgICAgXCJodHRwczovL21lZGlhY2RuLmplZXZhbnNhdGhpLmNvbS8xMDc2Mi81LzIxNTI0NTc4My0xNTM2OTk4NDAyLmpwZWdcIixcbiAgICBTVE9SWTpcbiAgICAgIFwiSXQgaXMgbXkgaW1lbnNlIHBsZWFzdXJlIHRvIHNheSB0aGF0IEplZXZhbnNhdGhpIGlzICdUaGUgUGxhdGZvcm0nIHdoZXJlIEkgbWV0IG15IHNvdWxtYXRlLiBJdCBoYXMgYmVlbiBhbG1vc3Qgc2l4IG1vbnRoIHdlIGhhdmUgYmVlbiB0b2dldGhlciBhbmQgSSBhbSB2ZXJ5IGhhcHB5IHRvIHNheSB3ZSBhcmUgZW5qb3lpbmcgZXZlcnkgcGFydCBvZiBpdC4gVGhhbmtzIEplZXZhbnNhdGhpLmNvbSBmb3IgbWFraW5nIG1lIG1lZXQgbXkgZHJlYW0gZ2lybC4gSmVldmFuc2F0aGkuY29tIHBsYXRmb3JtIGlzIGxpa2UgYSBtaXJhY2xlLllvdSBuZXZlciBrbm93IHdoYXQgaXMgY29taW5nIGZvciB5b3UgLlwiLFxuICAgIFNUT1JZSUQ6IFwiMTc3NDFcIixcbiAgICBZRUFSOiBcIjIwMThcIixcbiAgICBjb21iaW5lZE5hbWU6IFwiU2FuZGVlcCAmIEdhZ2FucHJlZXRcIixcbiAgICBtYXJyaWFnZURhdGU6IFwiMjEsIEF1Z3VzdCAyMDE4XCJcbiAgfSxcbiAge1xuICAgIEZSQU1FX1BJQ19VUkw6XG4gICAgICBcImh0dHBzOi8vbWVkaWFjZG4uamVldmFuc2F0aGkuY29tLzEwNzYyLzUvMjE1MjQ1NzgxLTE1MzY5OTg0MDIuanBlZ1wiLFxuICAgIEhFQURJTkc6IFwiU2FuZGVlcCBTaW5naCBCaW5kcmEgd2VkcyBHYWdhbnByZWV0IEthdXJcIixcbiAgICBJU19FWENMVVNJVkU6IFwiMFwiLFxuICAgIE1BSU5fUElDX1VSTDpcbiAgICAgIFwiaHR0cHM6Ly9tZWRpYWNkbi5qZWV2YW5zYXRoaS5jb20vMTA3NjIvNS8yMTUyNDU3NzktMTUzNjk5ODQwMi5qcGVnXCIsXG4gICAgTkFNRTE6IFwiU2FuZGVlcCBTaW5naCBCaW5kcmFcIixcbiAgICBOQU1FMjogXCJHYWdhbnByZWV0IEthdXJcIixcbiAgICBTSUQ6IFwiODI2NVwiLFxuICAgIFNRVUFSRV9QSUNfVVJMOlxuICAgICAgXCJodHRwczovL21lZGlhY2RuLmplZXZhbnNhdGhpLmNvbS8xMDc2Mi81LzIxNTI0NTc4My0xNTM2OTk4NDAyLmpwZWdcIixcbiAgICBTVE9SWTpcbiAgICAgIFwiSXQgaXMgbXkgaW1lbnNlIHBsZWFzdXJlIHRvIHNheSB0aGF0IEplZXZhbnNhdGhpIGlzICdUaGUgUGxhdGZvcm0nIHdoZXJlIEkgbWV0IG15IHNvdWxtYXRlLiBJdCBoYXMgYmVlbiBhbG1vc3Qgc2l4IG1vbnRoIHdlIGhhdmUgYmVlbiB0b2dldGhlciBhbmQgSSBhbSB2ZXJ5IGhhcHB5IHRvIHNheSB3ZSBhcmUgZW5qb3lpbmcgZXZlcnkgcGFydCBvZiBpdC4gVGhhbmtzIEplZXZhbnNhdGhpLmNvbSBmb3IgbWFraW5nIG1lIG1lZXQgbXkgZHJlYW0gZ2lybC4gSmVldmFuc2F0aGkuY29tIHBsYXRmb3JtIGlzIGxpa2UgYSBtaXJhY2xlLllvdSBuZXZlciBrbm93IHdoYXQgaXMgY29taW5nIGZvciB5b3UgLlwiLFxuICAgIFNUT1JZSUQ6IFwiMTc3NDFcIixcbiAgICBZRUFSOiBcIjIwMThcIixcbiAgICBjb21iaW5lZE5hbWU6IFwiU2FuZGVlcCAmIEdhZ2FucHJlZXRcIixcbiAgICBtYXJyaWFnZURhdGU6IFwiMjEsIEF1Z3VzdCAyMDE4XCJcbiAgfSxcbiAge1xuICAgIEZSQU1FX1BJQ19VUkw6XG4gICAgICBcImh0dHBzOi8vbWVkaWFjZG4uamVldmFuc2F0aGkuY29tLzEwNzYyLzUvMjE1MjQ1NzgxLTE1MzY5OTg0MDIuanBlZ1wiLFxuICAgIEhFQURJTkc6IFwiU2FuZGVlcCBTaW5naCBCaW5kcmEgd2VkcyBHYWdhbnByZWV0IEthdXJcIixcbiAgICBJU19FWENMVVNJVkU6IFwiMFwiLFxuICAgIE1BSU5fUElDX1VSTDpcbiAgICAgIFwiaHR0cHM6Ly9tZWRpYWNkbi5qZWV2YW5zYXRoaS5jb20vMTA3NjIvNS8yMTUyNDU3NzktMTUzNjk5ODQwMi5qcGVnXCIsXG4gICAgTkFNRTE6IFwiU2FuZGVlcCBTaW5naCBCaW5kcmFcIixcbiAgICBOQU1FMjogXCJHYWdhbnByZWV0IEthdXJcIixcbiAgICBTSUQ6IFwiODI2NVwiLFxuICAgIFNRVUFSRV9QSUNfVVJMOlxuICAgICAgXCJodHRwczovL21lZGlhY2RuLmplZXZhbnNhdGhpLmNvbS8xMDc2Mi81LzIxNTI0NTc4My0xNTM2OTk4NDAyLmpwZWdcIixcbiAgICBTVE9SWTpcbiAgICAgIFwiSXQgaXMgbXkgaW1lbnNlIHBsZWFzdXJlIHRvIHNheSB0aGF0IEplZXZhbnNhdGhpIGlzICdUaGUgUGxhdGZvcm0nIHdoZXJlIEkgbWV0IG15IHNvdWxtYXRlLiBJdCBoYXMgYmVlbiBhbG1vc3Qgc2l4IG1vbnRoIHdlIGhhdmUgYmVlbiB0b2dldGhlciBhbmQgSSBhbSB2ZXJ5IGhhcHB5IHRvIHNheSB3ZSBhcmUgZW5qb3lpbmcgZXZlcnkgcGFydCBvZiBpdC4gVGhhbmtzIEplZXZhbnNhdGhpLmNvbSBmb3IgbWFraW5nIG1lIG1lZXQgbXkgZHJlYW0gZ2lybC4gSmVldmFuc2F0aGkuY29tIHBsYXRmb3JtIGlzIGxpa2UgYSBtaXJhY2xlLllvdSBuZXZlciBrbm93IHdoYXQgaXMgY29taW5nIGZvciB5b3UgLlwiLFxuICAgIFNUT1JZSUQ6IFwiMTc3NDFcIixcbiAgICBZRUFSOiBcIjIwMThcIixcbiAgICBjb21iaW5lZE5hbWU6IFwiU2FuZGVlcCAmIEdhZ2FucHJlZXRcIixcbiAgICBtYXJyaWFnZURhdGU6IFwiMjEsIEF1Z3VzdCAyMDE4XCJcbiAgfSxcbiAge1xuICAgIEZSQU1FX1BJQ19VUkw6XG4gICAgICBcImh0dHBzOi8vbWVkaWFjZG4uamVldmFuc2F0aGkuY29tLzEwNzYyLzUvMjE1MjQ1NzgxLTE1MzY5OTg0MDIuanBlZ1wiLFxuICAgIEhFQURJTkc6IFwiU2FuZGVlcCBTaW5naCBCaW5kcmEgd2VkcyBHYWdhbnByZWV0IEthdXJcIixcbiAgICBJU19FWENMVVNJVkU6IFwiMFwiLFxuICAgIE1BSU5fUElDX1VSTDpcbiAgICAgIFwiaHR0cHM6Ly9tZWRpYWNkbi5qZWV2YW5zYXRoaS5jb20vMTA3NjIvNS8yMTUyNDU3NzktMTUzNjk5ODQwMi5qcGVnXCIsXG4gICAgTkFNRTE6IFwiU2FuZGVlcCBTaW5naCBCaW5kcmFcIixcbiAgICBOQU1FMjogXCJHYWdhbnByZWV0IEthdXJcIixcbiAgICBTSUQ6IFwiODI2NVwiLFxuICAgIFNRVUFSRV9QSUNfVVJMOlxuICAgICAgXCJodHRwczovL21lZGlhY2RuLmplZXZhbnNhdGhpLmNvbS8xMDc2Mi81LzIxNTI0NTc4My0xNTM2OTk4NDAyLmpwZWdcIixcbiAgICBTVE9SWTpcbiAgICAgIFwiSXQgaXMgbXkgaW1lbnNlIHBsZWFzdXJlIHRvIHNheSB0aGF0IEplZXZhbnNhdGhpIGlzICdUaGUgUGxhdGZvcm0nIHdoZXJlIEkgbWV0IG15IHNvdWxtYXRlLiBJdCBoYXMgYmVlbiBhbG1vc3Qgc2l4IG1vbnRoIHdlIGhhdmUgYmVlbiB0b2dldGhlciBhbmQgSSBhbSB2ZXJ5IGhhcHB5IHRvIHNheSB3ZSBhcmUgZW5qb3lpbmcgZXZlcnkgcGFydCBvZiBpdC4gVGhhbmtzIEplZXZhbnNhdGhpLmNvbSBmb3IgbWFraW5nIG1lIG1lZXQgbXkgZHJlYW0gZ2lybC4gSmVldmFuc2F0aGkuY29tIHBsYXRmb3JtIGlzIGxpa2UgYSBtaXJhY2xlLllvdSBuZXZlciBrbm93IHdoYXQgaXMgY29taW5nIGZvciB5b3UgLlwiLFxuICAgIFNUT1JZSUQ6IFwiMTc3NDFcIixcbiAgICBZRUFSOiBcIjIwMThcIixcbiAgICBjb21iaW5lZE5hbWU6IFwiU2FuZGVlcCAmIEdhZ2FucHJlZXRcIixcbiAgICBtYXJyaWFnZURhdGU6IFwiMjEsIEF1Z3VzdCAyMDE4XCJcbiAgfSxcbiAge1xuICAgIEZSQU1FX1BJQ19VUkw6XG4gICAgICBcImh0dHBzOi8vbWVkaWFjZG4uamVldmFuc2F0aGkuY29tLzEwNzYyLzUvMjE1MjQ1NzgxLTE1MzY5OTg0MDIuanBlZ1wiLFxuICAgIEhFQURJTkc6IFwiU2FuZGVlcCBTaW5naCBCaW5kcmEgd2VkcyBHYWdhbnByZWV0IEthdXJcIixcbiAgICBJU19FWENMVVNJVkU6IFwiMFwiLFxuICAgIE1BSU5fUElDX1VSTDpcbiAgICAgIFwiaHR0cHM6Ly9tZWRpYWNkbi5qZWV2YW5zYXRoaS5jb20vMTA3NjIvNS8yMTUyNDU3NzktMTUzNjk5ODQwMi5qcGVnXCIsXG4gICAgTkFNRTE6IFwiU2FuZGVlcCBTaW5naCBCaW5kcmFcIixcbiAgICBOQU1FMjogXCJHYWdhbnByZWV0IEthdXJcIixcbiAgICBTSUQ6IFwiODI2NVwiLFxuICAgIFNRVUFSRV9QSUNfVVJMOlxuICAgICAgXCJodHRwczovL21lZGlhY2RuLmplZXZhbnNhdGhpLmNvbS8xMDc2Mi81LzIxNTI0NTc4My0xNTM2OTk4NDAyLmpwZWdcIixcbiAgICBTVE9SWTpcbiAgICAgIFwiSXQgaXMgbXkgaW1lbnNlIHBsZWFzdXJlIHRvIHNheSB0aGF0IEplZXZhbnNhdGhpIGlzICdUaGUgUGxhdGZvcm0nIHdoZXJlIEkgbWV0IG15IHNvdWxtYXRlLiBJdCBoYXMgYmVlbiBhbG1vc3Qgc2l4IG1vbnRoIHdlIGhhdmUgYmVlbiB0b2dldGhlciBhbmQgSSBhbSB2ZXJ5IGhhcHB5IHRvIHNheSB3ZSBhcmUgZW5qb3lpbmcgZXZlcnkgcGFydCBvZiBpdC4gVGhhbmtzIEplZXZhbnNhdGhpLmNvbSBmb3IgbWFraW5nIG1lIG1lZXQgbXkgZHJlYW0gZ2lybC4gSmVldmFuc2F0aGkuY29tIHBsYXRmb3JtIGlzIGxpa2UgYSBtaXJhY2xlLllvdSBuZXZlciBrbm93IHdoYXQgaXMgY29taW5nIGZvciB5b3UgLlwiLFxuICAgIFNUT1JZSUQ6IFwiMTc3NDFcIixcbiAgICBZRUFSOiBcIjIwMThcIixcbiAgICBjb21iaW5lZE5hbWU6IFwiU2FuZGVlcCAmIEdhZ2FucHJlZXRcIixcbiAgICBtYXJyaWFnZURhdGU6IFwiMjEsIEF1Z3VzdCAyMDE4XCJcbiAgfVxuXTtcblxuY2xhc3MgTWF0Y2hQcm9maWxlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0geyBwcm9maWxlczogYXJyIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgc3dpcGU6IHRydWUsXG4gICAgICB0b3VjaE1vdmU6IHRydWUsXG4gICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMS4wNSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgIGNlbnRlclBhZGRpbmc6IFwiNHB4XCJcbiAgICB9O1xuXG4gICAgY29uc3QgeyBwcm9maWxlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zb2xlLmxvZyhwcm9maWxlcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XG4gICAgICAgICAgPGgzPkxha2hzIG9mIENvdXBsZXM8L2gzPlxuXG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBNYXRjaGVkIGJ5IDxzdHJvbmc+IEplZXZhbnNhdGhpPC9zdHJvbmc+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgIHtwcm9maWxlcy5tYXAoZnVuY3Rpb24ocHJvZmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCByZ2JhKDAsMCwwLDEpIDEyMCUpLHVybCgke3Byb2ZpbGUuU1FVQVJFX1BJQ19VUkx9KWBcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57cHJvZmlsZS5jb21iaW5lZE5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+YE1BUlJJRUQgU0lOQ0UgJHtwcm9maWxlLm1hcnJpYWdlRGF0ZX1gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMycHggMjRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucHJvZmlsZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogOTglO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMjhweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjogIzhhOWRiMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICBjb2xvcjogI2Q5NDc1YztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHQgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50ZXh0IHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS4xNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ib3JkZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IGF1dG8gNXB4IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGNoUHJvZmlsZXM7XG4iXX0= */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MatchProfiles.js */"));
  }

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/data */ "./static/data.js");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Button */ "./components/common/Button.js");

var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MembershipPlans.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

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
    className: "jsx-1879171502" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1879171502" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1879171502",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Upgrade your account"), __jsx("strong", {
    className: "jsx-1879171502",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Membership ", __jsx("span", {
    className: "jsx-1879171502",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, " Plans"), " ")), __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    className: "jsx-1879171502" + " " + (settings && settings.className != null && settings.className || "slider"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), _static_data__WEBPACK_IMPORTED_MODULE_4__["membershipDetail"].map(function ({
    iconColor,
    list,
    backgroundColor,
    buttonTextColor,
    textColor,
    title,
    borderColor,
    buttonText,
    buttonColor
  }, index) {
    return __jsx("div", {
      style: {
        backgroundColor
      },
      className: "jsx-1879171502" + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("span", {
      style: {
        color: textColor,
        borderColor
      },
      className: "jsx-1879171502" + " " + "card-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, title), list.map(function ({
      text,
      iconColor,
      textColor
    }) {
      return __jsx("div", {
        style: {
          height: 34
        },
        className: "jsx-1879171502",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("span", {
        style: {
          color: iconColor
        },
        className: "jsx-1879171502",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "icon"), __jsx("span", {
        style: {
          color: textColor
        },
        className: "jsx-1879171502" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, text));
    }), __jsx("div", {
      style: {
        textAlign: "center"
      },
      className: "jsx-1879171502",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("button", {
      style: {
        backgroundColor: buttonColor,
        color: buttonTextColor
      },
      className: "jsx-1879171502",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, buttonText)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1879171502",
    __self: this
  }, ".container.jsx-1879171502{padding:42px 0px;background-image:url(\"../../static/images/people_together_back.jpg\");background-repeat-x:repeat;background-position:left bottom;background-size:contain;}.slider.jsx-1879171502{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow-x:scroll;padding:0px 24px;margin-top:20px;}.heading.jsx-1879171502{padding:0px 24px;}h3.jsx-1879171502{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;text-transform:uppercase;}span.jsx-1879171502{color:black;}strong.jsx-1879171502{font-size:20px;color:#d9475c;}.card.jsx-1879171502{box-shadow:0 2px 6px -1px rgba(38,48,140,0.2);border-radius:4px;margin-right:15px;padding:24px;min-width:70%;}.text.jsx-1879171502{font-size:14px;font-weight:500;padding-left:8px;}.card-heading.jsx-1879171502{font-size:20px;color:#14202b;font-weight:500;border-top:2px solid;padding:0.5rem 0rem;display:inline-block;}button.jsx-1879171502{font-size:14px;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;padding:10px 20px;margin:0 0 0 -60px;left:50%;bottom:30px;display:inline-block;font-weight:600;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;line-height:1.5;border-radius:0.25rem;font-family:\"Cabin\",sans-serif;font-weight:700;color:#fff;line-height:14px;margin:auto !important;width:100% !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NZW1iZXJzaGlwUGxhbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0VrQixBQUc0QixBQVFKLEFBTUksQUFJRixBQVFILEFBR0csQUFLa0MsQUFRbEMsQUFNQSxBQVNBLFlBOUJqQixHQVJrQixBQVdGLEFBYUUsQUFNRixBQVVHLEVBMURvRCxBQWN2RSxZQWdCQSxBQW1Ca0IsRUE5QkYsQUF3QkcsY0F2QkMsQUE4QkcsQ0FoQkgsRUFVcEIsZUF2QnVCLENBY0gsRUFnQkUsUUEzQ0YsUUE0QkwsSUFuQ2MsQUFtRE4sTUEzQ0osR0E0QkgsS0FzQkksT0FOcEIsRUEzQ2tCLEFBNEJsQixJQXBDa0MsS0EwRGIsT0FqRHJCLFlBa0RXLFFBMURlLENBMkRaLFlBRVMsTUExQ0ksS0FsQjNCLFVBNkRrQixVQTFDbEIsTUEyQ3dCLHNCQUNMLHFGQUNZLDZCQUNiLGdCQUNNLHNCQUNVLCtCQUVoQixnQkFDTCxXQUNNLGlCQUNNLHVCQUNELHNCQUN4QiIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvTWVtYmVyc2hpcFBsYW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbi8vaW1wb3J0IE1lbWJlcnNoaXBEZXRhaWwgZnJvbSBcIi4vT2xkTWVtYmVyc2hpcERldGFpbFwiO1xuaW1wb3J0IHsgbWVtYmVyc2hpcERldGFpbCB9IGZyb20gXCIuLi8uLi9zdGF0aWMvZGF0YVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tbW9uL0J1dHRvblwiO1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgZG90czogZmFsc2UsXG4gIHN3aXBlOiB0cnVlLFxuICB0b3VjaE1vdmU6IHRydWUsXG4gIGluZmluaXRlOiBmYWxzZSxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgc3BlZWQ6IDUwMCxcbiAgc2xpZGVzVG9TaG93OiAxLjI1LFxuICBzbGlkZXNUb1Njcm9sbDogMC41LFxuICBjZW50ZXJNb2RlOiB0cnVlLFxuICBjZW50ZXJQYWRkaW5nOiBcIjRweFwiXG59O1xuXG5mdW5jdGlvbiBNZW1iZXJzaGlwUGxhbnMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlxuICAgICAgICA8aDM+VXBncmFkZSB5b3VyIGFjY291bnQ8L2gzPlxuXG4gICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgTWVtYmVyc2hpcCA8c3Bhbj4gUGxhbnM8L3NwYW4+e1wiIFwifVxuICAgICAgICA8L3N0cm9uZz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiIHsuLi5zZXR0aW5nc30+XG4gICAgICAgIHttZW1iZXJzaGlwRGV0YWlsLm1hcChmdW5jdGlvbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uQ29sb3IsXG4gICAgICAgICAgICBsaXN0LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgYnV0dG9uVGV4dENvbG9yLFxuICAgICAgICAgICAgdGV4dENvbG9yLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBib3JkZXJDb2xvcixcbiAgICAgICAgICAgIGJ1dHRvblRleHQsXG4gICAgICAgICAgICBidXR0b25Db2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5kZXhcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yIH19IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWhlYWRpbmdcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiB0ZXh0Q29sb3IsIGJvcmRlckNvbG9yIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICB7bGlzdC5tYXAoZnVuY3Rpb24oeyB0ZXh0LCBpY29uQ29sb3IsIHRleHRDb2xvciB9KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAzNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGljb25Db2xvciB9fT5pY29uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCIgc3R5bGU9e3sgY29sb3I6IHRleHRDb2xvciB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYnV0dG9uQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBidXR0b25UZXh0Q29sb3JcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2J1dHRvblRleHR9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiA0MnB4IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3Blb3BsZV90b2dldGhlcl9iYWNrLmpwZ1wiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdC14OiByZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b207XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDI0cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGluZyB7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6ICM4YTlkYjA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBjb2xvcjogI2Q5NDc1YztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA2cHggLTFweCByZ2JhKDM4LCA0OCwgMTQwLCAwLjIpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDcwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWhlYWRpbmcge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBjb2xvcjogIzE0MjAyYjtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZDtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMHJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAvLyBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMCAtNjBweDtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgYm90dG9tOiAzMHB4O1xuICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICNkOTQ3NWM7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQ2FiaW5cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyc2hpcFBsYW5zO1xuIl19 */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MembershipPlans.js */"));
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
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/PrivacySetting.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function PrivacySetting() {
  return __jsx("div", {
    className: "jsx-572172037" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("img", {
    src: "../../static/images/privacy_Illustration.svg",
    className: "jsx-572172037" + " " + "privacy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-572172037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-572172037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Complete Control over your Privacy Settings"), __jsx("ul", {
    className: "jsx-572172037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, _static_data__WEBPACK_IMPORTED_MODULE_2__["privacySetting"].map(function ({
    imgURL,
    text
  }) {
    return __jsx("li", {
      className: "jsx-572172037",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("img", {
      style: {
        marginRight: 20
      },
      src: imgURL,
      className: "jsx-572172037",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-572172037",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, text));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "572172037",
    __self: this
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/data */ "./static/data.js");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Button */ "./components/common/Button.js");

var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/SimpleSteps.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




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
    className: "jsx-1797984012" + " " + "container simple-steps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1797984012",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Three Simple Steps to"), __jsx("h2", {
    className: "jsx-1797984012",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Find the ", __jsx("strong", {
    className: "jsx-1797984012",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "One for You")), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), _static_data__WEBPACK_IMPORTED_MODULE_4__["simpleSteps"].map(function ({
    text,
    posiiton
  }, index) {
    return __jsx("div", {
      className: "jsx-1797984012" + " " + "list-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      style: {
        backgroundPosition: posiiton
      },
      className: "jsx-1797984012" + " " + "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1797984012" + " " + "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-1797984012",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, `0${index + 1}`), text));
  })), __jsx("a", {
    href: "profile/registration_new.php?source=home_hero",
    className: "jsx-1797984012",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1797984012" + " " + "button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("button", {
    className: "jsx-1797984012",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, " Get Started by Registering Free"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1797984012",
    __self: this
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
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/VerificationDetail.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function VerificationDetail() {
  return __jsx("div", {
    className: "jsx-3732194804" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3732194804",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "More Than 20 years of"), __jsx("h2", {
    className: "jsx-3732194804",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Bringing People", __jsx("span", {
    className: "jsx-3732194804",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Together")), __jsx("div", {
    style: {},
    className: "jsx-3732194804",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, _static_data__WEBPACK_IMPORTED_MODULE_2__["verificationData"].map(function (data) {
    return __jsx("div", {
      className: "jsx-3732194804" + " " + "list-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3732194804",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("img", {
      style: {
        padding: "0px 10px 0px 0px"
      },
      src: data.imageURL,
      className: "jsx-3732194804",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-3732194804" + " " + "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("h4", {
      className: "jsx-3732194804",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, data.heading), __jsx("p", {
      className: "jsx-3732194804",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, data.about)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3732194804",
    __self: this
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
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/bannerSection/Banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Banner() {
  return __jsx("div", {
    className: "jsx-3308289319" + " " + "banner-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3308289319",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3308289319" + " " + "white fontreg caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3308289319",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Love is looking for you,"), __jsx("h1", {
    className: "jsx-3308289319",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, " Be found")), __jsx("a", {
    href: "profile/registration_new.php?source=home_hero",
    className: "jsx-3308289319",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("button", {
    className: "jsx-3308289319",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Register Free"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3308289319",
    __self: this
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
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/bannerSection/Header.js";

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
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    id: "headerContainer",
    className: "jsx-933721822" + " " + "container ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-933721822" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, " ", __jsx("a", {
    onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    }),
    className: "jsx-933721822",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("img", {
    src: "../../../static/images/js_logo.svg",
    className: "jsx-933721822",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-933721822" + " " + "login caption white fontreg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("a", {
    href: "/login",
    className: "jsx-933721822",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-933721822" + " " + "user-icon white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-933721822",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Login"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "933721822",
    __self: this
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
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/bannerSection/SearchBox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import { Input } from "antd";

 //const { Search } = Input;

function SearchBox() {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1261407272", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1261407272", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "input-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1261407272", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "input-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Search for Bride / Groom")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1261407272", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "search-icon-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1261407272", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor]]]) + " " + "search-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1261407272",
    dynamic: [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor],
    __self: this
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_components_home_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
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
  borderColor: "#d9475c",
  list: [{
    iconColor: "#D9475C",
    text: "Browse Profiles",
    textColor: "black"
  }, {
    iconColor: "#D9475C",
    text: "Shortlist & Send Interest",
    textColor: "black"
  }, {
    iconColor: "#8A9DB0",
    text: "Message & chat with unlimited users",
    textColor: "#8A9DB0"
  }, {
    iconColor: "#8A9DB0",
    text: "View contacts of members you like",
    textColor: "#8A9DB0"
  }, {
    iconColor: "#8A9DB0",
    text: "Message & chat with unlimited users",
    textColor: "#8A9DB0"
  }, {
    iconColor: "#8A9DB0",
    text: "Priority customer support",
    textColor: "#8A9DB0"
  }, {
    iconColor: "#8A9DB0",
    text: "Make your contacts visible to others",
    textColor: "#8A9DB0"
  }, {
    iconColor: "#8A9DB0",
    text: "Profile Boost",
    textColor: "#8A9DB0"
  }]
}, {
  backgroundColor: "#D9475C",
  buttonColor: "white",
  buttonText: "Browse Membership Plans",
  buttonTextColor: "#D9475C",
  textColor: "white",
  title: "Paid",
  borderColor: "white",
  list: [{
    iconColor: "white",
    text: "Browse Profiles",
    textColor: "white"
  }, {
    iconColor: "white",
    text: "Shortlist & Send Interest",
    textColor: "white"
  }, {
    iconColor: "white",
    text: "Message & chat with unlimited users",
    textColor: "white"
  }, {
    iconColor: "white",
    text: "View contacts of members you like",
    textColor: "white"
  }, {
    iconColor: "white",
    text: "Message & chat with unlimited users",
    textColor: "white"
  }, {
    iconColor: "white",
    text: "Priority customer support",
    textColor: "white"
  }, {
    iconColor: "white",
    text: "Make your contacts visible to others",
    textColor: "white"
  }, {
    iconColor: "white",
    text: "Profile Boost",
    textColor: "white"
  }]
}];

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

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

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