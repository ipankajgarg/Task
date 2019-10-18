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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/common/Button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Button({
  content = "Press me",
  color = "red",
  onPress = () => {
    console.log("clicked");
  },
  width = 50,
  height = 50
}) {
  return __jsx("button", {
    onClick: onPress,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3068473457", [color, width, height]]]) + " " + "fontreg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, content, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3068473457",
    dynamic: [color, width, height],
    __self: this
  }, `button.__jsx-style-dynamic-selector{background-color:${color};width:${width};height:${height};border:none;color:white;font-size:15px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFHeUQsOENBQ1gsbUNBQ0Msb0NBQ3hCLFlBQ0EsWUFDRyxlQUNqQiIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2NvbW1vbi9CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIEJ1dHRvbih7XG4gIGNvbnRlbnQgPSBcIlByZXNzIG1lXCIsXG4gIGNvbG9yID0gXCJyZWRcIixcbiAgb25QcmVzcyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XG4gIH0sXG4gIHdpZHRoID0gNTAsXG4gIGhlaWdodCA9IDUwXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb250cmVnXCIgb25DbGljaz17b25QcmVzc30+XG4gICAgICB7Y29udGVudH1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9O1xuICAgICAgICAgIHdpZHRoOiAke3dpZHRofTtcbiAgICAgICAgICBoZWlnaHQ6ICR7aGVpZ2h0fTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0= */
/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/common/Button.js */`));
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
  return __jsx("div", {
    className: "jsx-3891505218" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3891505218",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3891505218" + " " + "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Follow us on"), __jsx("br", {
    className: "jsx-3891505218",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("a", {
    className: "jsx-3891505218",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, " ", __jsx("i", {
    className: "jsx-3891505218",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), __jsx("a", {
    className: "jsx-3891505218",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, " ", __jsx("i", {
    className: "jsx-3891505218",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("a", {
    className: "jsx-3891505218",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, " ", __jsx("i", {
    className: "jsx-3891505218",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-3891505218" + " " + "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3891505218",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Call Customer care"), __jsx("h3", {
    className: "jsx-3891505218" + " " + "fontreg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "1-800-419-6299")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3891505218",
    __self: this
  }, ".container.jsx-3891505218{background:rgba(52,73,94,0.88);padding:20px 30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}span.jsx-3891505218{font-size:13px;}h3.jsx-3891505218{font-size:20px;margin:5px 0px 0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJrQixBQUc2QyxBQU1uQixBQUlBLGVBSGpCLEFBSXFCLGdCQVZELEdBV3BCLGVBVmUsMEVBQ2lCLG1IQUNoQyIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndoaXRlXCI+Rm9sbG93IHVzIG9uPC9zcGFuPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGE+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIDxpPjwvaT5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPGk+PC9pPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhPlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICA8aT48L2k+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICA8c3Bhbj5DYWxsIEN1c3RvbWVyIGNhcmU8L3NwYW4+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250cmVnXCI+MS04MDAtNDE5LTYyOTk8L2gzPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg1MiwgNzMsIDk0LCAwLjg4KTtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBtYXJnaW46IDVweCAwcHggMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Footer.js */"));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bannerSection_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bannerSection/Banner */ "./components/home/bannerSection/Banner.js");
/* harmony import */ var _Caption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Caption */ "./components/home/Caption.js");
/* harmony import */ var _MembershipDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MembershipDetail */ "./components/home/MembershipDetail.js");
/* harmony import */ var _MatchProfiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MatchProfiles */ "./components/home/MatchProfiles.js");
/* harmony import */ var _DownloadApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DownloadApp */ "./components/home/DownloadApp.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./About */ "./components/home/About.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer */ "./components/home/Footer.js");
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_bannerSection_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_Caption__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_MembershipDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(_MatchProfiles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_DownloadApp__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_About__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./components/home/MatchProfiles.js":
/*!******************************************!*\
  !*** ./components/home/MatchProfiles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MatchProfiles.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const arr = ["../../static/images/nhm_img1.jpeg", "../../static/images/nhm_img2.jpeg", "../../static/images/nhm_img3.jpeg", "../../static/images/nhm_img4.jpeg"];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

function MatchProfiles() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (MatchProfiles);

/***/ }),

/***/ "./components/home/MembershipDetail.js":
/*!*********************************************!*\
  !*** ./components/home/MembershipDetail.js ***!
  \*********************************************/
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
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MembershipDetail.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const arr = [{
  text: "View Phone nos.",
  position: "-202px -76px"
}, {
  text: "Send Messages",
  position: "-153px -75px"
}, {
  text: "See Emails",
  position: "-175px 4px"
}, {
  text: "Chat Instantly",
  position: "-113px 8px"
}];

function MembershipDetail() {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2909738795", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor]]]) + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2909738795", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor]]]) + " " + "heading fontreg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Upgrade your Membership to contact people you like"), __jsx("div", {
    style: {
      display: "flex",
      flexWrap: "wrap"
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2909738795", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, arr.map(function ({
    text,
    position
  }) {
    return __jsx("div", {
      key: text,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2909738795", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor]]]) + " " + "image-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2909738795", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor]]]) + " " + "circle-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("i", {
      style: {
        backgroundPosition: `${position}`
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2909738795", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor]]]) + " " + "inner-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    })), __jsx("p", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2909738795", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor]]]) + " " + "fontreg about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, text));
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2909738795", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor]]]) + " " + "button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "279px",
    height: "48px",
    content: "BROWSE MEMBERSHIP PLANS",
    color: _static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].primaryColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2909738795", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor]]]) + " " + "call-detail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "To know more, call us @", " ", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2909738795", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor]]]) + " " + "fontreg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "1-800-419-6299"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2909738795",
    dynamic: [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor],
    __self: this
  }, `.container.__jsx-style-dynamic-selector{padding:35px 0px;background-color:#eaecee;}.heading.__jsx-style-dynamic-selector{font-size:20px;color:${_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor};text-align:center;margin:0px 40px 15px 40px;}.circle-img.__jsx-style-dynamic-selector{background-image:url(../../static/images/homeSpriteNewFinal.png);background-repeat:no-repeat;background-position:-31px -6px;width:69px;height:69px;text-align:center;display:inline-block;}.inner-image.__jsx-style-dynamic-selector{display:inline-block;width:50px;height:50px;background-image:url(../../static/images/homeSpriteNewFinal.png);background-repeat:no-repeat;}.image-container.__jsx-style-dynamic-selector{width:50%;text-align:center;margin:15px 0px;}.about.__jsx-style-dynamic-selector{margin-top:8px;color:#666666;font-size:16px;}.button-container.__jsx-style-dynamic-selector{text-align:center;}.call-detail.__jsx-style-dynamic-selector{font-size:13px;color:#666666;margin:6px 0px 0px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NZW1iZXJzaGlwRGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDa0IsQUFHNEIsQUFJRixBQU1rRCxBQVU1QyxBQVFYLEFBTUssQUFLRyxBQUdILFVBYkcsS0F4QmlCLEFBOEJyQixBQVFBLEVBMUNXLENBdUMzQixHQW5CYSxPQVNLLENBTUQsQUFRSSxHQXJCUCxVQXJCZCxFQXNCbUUsQUFPbkUsQUFNQSxJQVFBLEVBdkNvQixlQUtVLEdBSkYseUJBS0ssQ0FKakMsZUFpQjhCLGVBWmpCLFdBQ0MsRUFZZCxVQVhvQixrQkFDRyxxQkFDdkIiLCJmaWxlIjoiL2hvbWUvcGFua2FqL0RvY3VtZW50cy9teS13b3JrL3dpdGgtcmVkdXgtdGh1bmsvY29tcG9uZW50cy9ob21lL01lbWJlcnNoaXBEZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3N0YXRpYy90aGVtZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tbW9uL0J1dHRvblwiO1xuXG5jb25zdCBhcnIgPSBbXG4gIHsgdGV4dDogXCJWaWV3IFBob25lIG5vcy5cIiwgcG9zaXRpb246IFwiLTIwMnB4IC03NnB4XCIgfSxcbiAgeyB0ZXh0OiBcIlNlbmQgTWVzc2FnZXNcIiwgcG9zaXRpb246IFwiLTE1M3B4IC03NXB4XCIgfSxcbiAgeyB0ZXh0OiBcIlNlZSBFbWFpbHNcIiwgcG9zaXRpb246IFwiLTE3NXB4IDRweFwiIH0sXG4gIHsgdGV4dDogXCJDaGF0IEluc3RhbnRseVwiLCBwb3NpdGlvbjogXCItMTEzcHggOHB4XCIgfVxuXTtcblxuZnVuY3Rpb24gTWVtYmVyc2hpcERldGFpbCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGluZyBmb250cmVnXCI+XG4gICAgICAgIFVwZ3JhZGUgeW91ciBNZW1iZXJzaGlwIHRvIGNvbnRhY3QgcGVvcGxlIHlvdSBsaWtlXG4gICAgICA8L3A+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4V3JhcDogXCJ3cmFwXCIgfX0+XG4gICAgICAgIHthcnIubWFwKGZ1bmN0aW9uKHsgdGV4dCwgcG9zaXRpb24gfSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17dGV4dH0gY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWltZ1wiPlxuICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kUG9zaXRpb246IGAke3Bvc2l0aW9ufWAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubmVyLWltYWdlXCJcbiAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udHJlZyBhYm91dFwiPnt0ZXh0fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHdpZHRoPVwiMjc5cHhcIlxuICAgICAgICAgIGhlaWdodD1cIjQ4cHhcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJCUk9XU0UgTUVNQkVSU0hJUCBQTEFOU1wiXG4gICAgICAgICAgY29sb3I9e3RoZW1lLnByaW1hcnlDb2xvcn1cbiAgICAgICAgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FsbC1kZXRhaWxcIj5cbiAgICAgICAgICBUbyBrbm93IG1vcmUsIGNhbGwgdXMgQHtcIiBcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250cmVnXCI+MS04MDAtNDE5LTYyOTk8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDM1cHggMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVjZWU7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRpbmcge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5zZWNvbmRhcnlDb2xvcn07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMHB4IDQwcHggMTVweCA0MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jaXJjbGUtaW1nIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vc3RhdGljL2ltYWdlcy9ob21lU3ByaXRlTmV3RmluYWwucG5nKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMXB4IC02cHg7XG4gICAgICAgICAgd2lkdGg6IDY5cHg7XG4gICAgICAgICAgaGVpZ2h0OiA2OXB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5uZXItaW1hZ2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogNTBweDtcblxuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vc3RhdGljL2ltYWdlcy9ob21lU3ByaXRlTmV3RmluYWwucG5nKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMTVweCAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYWJvdXQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY2FsbC1kZXRhaWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgICAgICBtYXJnaW46IDZweCAwcHggMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbWJlcnNoaXBEZXRhaWw7XG4iXX0= */
/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MembershipDetail.js */`));
}

/* harmony default export */ __webpack_exports__["default"] = (MembershipDetail);

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
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/bannerSection/Banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Banner() {
  return __jsx("div", {
    className: "jsx-3282321098" + " " + "banner-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    style: {
      padding: "15px 20px"
    },
    className: "jsx-3282321098",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3282321098" + " " + "white fontreg caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Love is looking for you. Be found."), __jsx(_SearchBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3282321098",
    __self: this
  }, ".banner-image.jsx-3282321098{background:url(\"../../../static/images/header-banner.jpg\") no-repeat center center #dbdbdb;background-size:cover;height:300px;width:100%;}.caption.jsx-3282321098{font-size:16px;margin-top:150px;margin-bottom:8px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9iYW5uZXJTZWN0aW9uL0Jhbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFja0IsQUFJa0MsQUFPUixlQUNFLGlCQUNDLGtCQUNBLGtCQUNwQix1QkFWd0Isc0JBQ1QsYUFDRixXQUNiIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9iYW5uZXJTZWN0aW9uL0Jhbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgU2VhcmNoQm94IGZyb20gXCIuL1NlYXJjaEJveFwiO1xuXG5mdW5jdGlvbiBCYW5uZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItaW1hZ2VcIj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxNXB4IDIwcHhcIiB9fT5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlIGZvbnRyZWcgY2FwdGlvblwiPlxuICAgICAgICAgIExvdmUgaXMgbG9va2luZyBmb3IgeW91LiBCZSBmb3VuZC5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTZWFyY2hCb3ggLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYmFubmVyLWltYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9zdGF0aWMvaW1hZ2VzL2hlYWRlci1iYW5uZXIuanBnXCIpIG5vLXJlcGVhdFxuICAgICAgICAgICAgY2VudGVyIGNlbnRlciAjZGJkYmRiO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXB0aW9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XG4iXX0= */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/bannerSection/Banner.js */"));
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

 //import logo from "../../static/images/logo.png";
//TODO
//To make images importable https://github.com/twopluszero/next-images

function Header() {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3953808675", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor]]]) + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3953808675", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor]]]) + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3953808675", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor]]]) + " " + "login caption white fontreg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3953808675", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor]]]) + " " + "user-icon white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3953808675", [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Login")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3953808675",
    dynamic: [_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor],
    __self: this
  }, `.container.__jsx-style-dynamic-selector{background-color:${_static_theme__WEBPACK_IMPORTED_MODULE_2__["default"].secondaryColor};height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.logo.__jsx-style-dynamic-selector{-webkit-flex-basis:118px;-ms-flex-preferred-size:118px;flex-basis:118px;background-color:white;background-image:url(../../../static/images/homeSpriteNewFinal.png);background-repeat:no-repeat;background-position:-20px -151px;}.login.__jsx-style-dynamic-selector{line-height:40px;padding-right:13px;font-size:13px;}.user-icon.__jsx-style-dynamic-selector{background-image:url(../../../static/images/homeSpriteNewFinal.png);width:20px;background-position:-1px 2px;height:18px;display:inline-block;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9iYW5uZXJTZWN0aW9uL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFHeUQsQUFPN0IsQUFRQSxBQUttRCxpQkFKakQsbUJBQ0osVUFmSCxLQWdCZCxPQWZlLFVBa0JGLElBYlksT0FjTSxnQkFidUMsYUFjeEQsWUFFUyxZQXJCUyxTQXNCaEMsc0JBaEI4Qiw0QkFFSyxpQ0FDbkMsdUJBUkEiLCJmaWxlIjoiL2hvbWUvcGFua2FqL0RvY3VtZW50cy9teS13b3JrL3dpdGgtcmVkdXgtdGh1bmsvY29tcG9uZW50cy9ob21lL2Jhbm5lclNlY3Rpb24vSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi8uLi9zdGF0aWMvdGhlbWVcIjtcbi8vaW1wb3J0IGxvZ28gZnJvbSBcIi4uLy4uL3N0YXRpYy9pbWFnZXMvbG9nby5wbmdcIjtcblxuLy9UT0RPXG4vL1RvIG1ha2UgaW1hZ2VzIGltcG9ydGFibGUgaHR0cHM6Ly9naXRodWIuY29tL3R3b3BsdXN6ZXJvL25leHQtaW1hZ2VzXG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luIGNhcHRpb24gd2hpdGUgZm9udHJlZ1wiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJ1c2VyLWljb24gd2hpdGVcIj48L2k+XG4gICAgICAgIDxzcGFuPkxvZ2luPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuc2Vjb25kYXJ5Q29sb3J9O1xuXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBmbGV4LWJhc2lzOiAxMThweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vc3RhdGljL2ltYWdlcy9ob21lU3ByaXRlTmV3RmluYWwucG5nKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwcHggLTE1MXB4O1xuICAgICAgICB9XG4gICAgICAgIC5sb2dpbiB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTNweDtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXItaWNvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL3N0YXRpYy9pbWFnZXMvaG9tZVNwcml0ZU5ld0ZpbmFsLnBuZyk7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTFweCAycHg7XG4gICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */
/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/bannerSection/Header.js */`));
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

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
/* harmony import */ var _components_home_bannerSection_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/home/bannerSection/Banner */ "./components/home/bannerSection/Banner.js");
/* harmony import */ var _components_home_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/Home */ "./components/home/Home.js");
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_components_home_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
});

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

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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