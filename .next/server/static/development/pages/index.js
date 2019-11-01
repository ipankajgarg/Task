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
    className: "jsx-1195979293" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1195979293" + " " + "logo-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("img", {
    src: "../../static/images/js_footer_logo.png",
    className: "jsx-1195979293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1195979293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("cite", {
    className: "jsx-1195979293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Jeevansathi"), __jsx("span", {
    className: "jsx-1195979293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Be found"))), __jsx("p", {
    className: "jsx-1195979293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Jeevansathi.com is one of the leading and most trusted matrimony websites in India. Making happy marriages happen since 1998, Jeevansathi understands the importance of choosing the right partner for marriage, especially in the Indian cultural setup. It believes in providing the most secure and convenient matchmaking experience to all its members by ensuring 100% screening exclusive privacy options, photo protection features and verification of phone numbers and more information. While the online matrimonial site connects millions of people directly, Jeevansathi also maintains a dedicated Customer Care team and offers offline Match Point Centers across the country, for deeper and personal interaction with prospective brides, grooms and/or families.", __jsx("br", {
    className: "jsx-1195979293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), "Please note: Jeevansathi is only meant for users with a bonafide intent to enter into a matrimonial alliance and is not meant for users interested in dating only. Jeevansathi platform should not be used to post any obscene material, such actions may lead to permanent deletion of the profile used to upload such content."), __jsx("div", {
    className: "jsx-1195979293" + " " + "follow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1195979293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1195979293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Follow us on"), __jsx("div", {
    className: "jsx-1195979293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1195979293" + " " + "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("a", {
    className: "jsx-1195979293" + " " + "twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("a", {
    className: "jsx-1195979293" + " " + "instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-1195979293" + " " + "shift-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1195979293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "App available on"), __jsx("div", {
    className: "jsx-1195979293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1195979293" + " " + "play-store",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("a", {
    className: "jsx-1195979293" + " " + "app-store",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-1195979293" + " " + "toll-free",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1195979293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Customer Service (Toll Free)"), __jsx("b", {
    className: "jsx-1195979293",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "1-800-419-6299")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1195979293",
    __self: this
  }, ".container.jsx-1195979293{padding:32px 24px;background:#34495e;color:white;}.logo-title.jsx-1195979293{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.jsx-1195979293{margin-right:15px;}cite.jsx-1195979293{font-size:12px;}.logo-title.jsx-1195979293 span.jsx-1195979293{font-size:9px;color:#959499;display:block;}p.jsx-1195979293{font-size:14px;line-height:23px;}a.jsx-1195979293{background-image:url(../../static/images/footerIconsSprite.svg);background-repeat:no-repeat;width:17px;height:17px;margin:10px 10px 0px 0px;display:inline-block;}.follow.jsx-1195979293{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.shift-right.jsx-1195979293{margin-left:70px;}.follow.jsx-1195979293 span.jsx-1195979293{font-size:12px;font-weight:600;}.facebook.jsx-1195979293{background-position:-90px -1px;}.twitter.jsx-1195979293{background-position:-140px -1px;}.instagram.jsx-1195979293{background-position:-116px -1px;}.play-store.jsx-1195979293{background-position:-66px 0;}.app-store.jsx-1195979293{background-position:-40px -1px;}.toll-free.jsx-1195979293{font-size:12px;margin-top:20px;}.toll-free.jsx-1195979293 b.jsx-1195979293{display:block;margin-top:10px;font-size:12px;font-weight:normal;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RrQixBQUc2QixBQU1MLEFBS0ssQUFJSCxBQUdELEFBS0MsQUFLaUQsQUFTbkQsQUFHSSxBQUlGLEFBS2dCLEFBR0MsQUFHQSxBQUdKLEFBR0csQUFHaEIsQUFJRCxjQWpEQSxBQWtERSxDQXJEbEIsQUFRbUIsQUFxQkQsQUFvQkEsRUF4QmxCLENBeENxQixBQVdyQixVQVFnQixBQXVDaEIsRUFXaUIsQ0F4QmpCLEFBSUEsQUFZQSxBQUlBLENBekNBLEFBNEJBLEFBR0EsS0F0RGMsS0FtQmQsR0FrRHFCLElBcEVyQixlQTBCOEIsQUEyQzlCLFVBakVxQixBQStCckIsa0JBUmEsV0FDQyxZQUNhLHlCQUNKLHFCQUN2QixNQTFCQSIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby10aXRsZVwiPlxuICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvanNfZm9vdGVyX2xvZ28ucG5nXCIgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Y2l0ZT5KZWV2YW5zYXRoaTwvY2l0ZT5cblxuICAgICAgICAgIDxzcGFuPkJlIGZvdW5kPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8cD5cbiAgICAgICAgSmVldmFuc2F0aGkuY29tIGlzIG9uZSBvZiB0aGUgbGVhZGluZyBhbmQgbW9zdCB0cnVzdGVkIG1hdHJpbW9ueVxuICAgICAgICB3ZWJzaXRlcyBpbiBJbmRpYS4gTWFraW5nIGhhcHB5IG1hcnJpYWdlcyBoYXBwZW4gc2luY2UgMTk5OCwgSmVldmFuc2F0aGlcbiAgICAgICAgdW5kZXJzdGFuZHMgdGhlIGltcG9ydGFuY2Ugb2YgY2hvb3NpbmcgdGhlIHJpZ2h0IHBhcnRuZXIgZm9yIG1hcnJpYWdlLFxuICAgICAgICBlc3BlY2lhbGx5IGluIHRoZSBJbmRpYW4gY3VsdHVyYWwgc2V0dXAuIEl0IGJlbGlldmVzIGluIHByb3ZpZGluZyB0aGVcbiAgICAgICAgbW9zdCBzZWN1cmUgYW5kIGNvbnZlbmllbnQgbWF0Y2htYWtpbmcgZXhwZXJpZW5jZSB0byBhbGwgaXRzIG1lbWJlcnMgYnlcbiAgICAgICAgZW5zdXJpbmcgMTAwJSBzY3JlZW5pbmcgZXhjbHVzaXZlIHByaXZhY3kgb3B0aW9ucywgcGhvdG8gcHJvdGVjdGlvblxuICAgICAgICBmZWF0dXJlcyBhbmQgdmVyaWZpY2F0aW9uIG9mIHBob25lIG51bWJlcnMgYW5kIG1vcmUgaW5mb3JtYXRpb24uIFdoaWxlXG4gICAgICAgIHRoZSBvbmxpbmUgbWF0cmltb25pYWwgc2l0ZSBjb25uZWN0cyBtaWxsaW9ucyBvZiBwZW9wbGUgZGlyZWN0bHksXG4gICAgICAgIEplZXZhbnNhdGhpIGFsc28gbWFpbnRhaW5zIGEgZGVkaWNhdGVkIEN1c3RvbWVyIENhcmUgdGVhbSBhbmQgb2ZmZXJzXG4gICAgICAgIG9mZmxpbmUgTWF0Y2ggUG9pbnQgQ2VudGVycyBhY3Jvc3MgdGhlIGNvdW50cnksIGZvciBkZWVwZXIgYW5kIHBlcnNvbmFsXG4gICAgICAgIGludGVyYWN0aW9uIHdpdGggcHJvc3BlY3RpdmUgYnJpZGVzLCBncm9vbXMgYW5kL29yIGZhbWlsaWVzLlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgUGxlYXNlIG5vdGU6IEplZXZhbnNhdGhpIGlzIG9ubHkgbWVhbnQgZm9yIHVzZXJzIHdpdGggYSBib25hZmlkZSBpbnRlbnRcbiAgICAgICAgdG8gZW50ZXIgaW50byBhIG1hdHJpbW9uaWFsIGFsbGlhbmNlIGFuZCBpcyBub3QgbWVhbnQgZm9yIHVzZXJzXG4gICAgICAgIGludGVyZXN0ZWQgaW4gZGF0aW5nIG9ubHkuIEplZXZhbnNhdGhpIHBsYXRmb3JtIHNob3VsZCBub3QgYmUgdXNlZCB0b1xuICAgICAgICBwb3N0IGFueSBvYnNjZW5lIG1hdGVyaWFsLCBzdWNoIGFjdGlvbnMgbWF5IGxlYWQgdG8gcGVybWFuZW50IGRlbGV0aW9uXG4gICAgICAgIG9mIHRoZSBwcm9maWxlIHVzZWQgdG8gdXBsb2FkIHN1Y2ggY29udGVudC5cbiAgICAgIDwvcD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb2xsb3dcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Bhbj5Gb2xsb3cgdXMgb248L3NwYW4+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZhY2Vib29rXCI+PC9hPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidHdpdHRlclwiPjwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImluc3RhZ3JhbVwiPjwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpZnQtcmlnaHRcIj5cbiAgICAgICAgICA8c3Bhbj5BcHAgYXZhaWxhYmxlIG9uPC9zcGFuPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwbGF5LXN0b3JlXCI+PC9hPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYXBwLXN0b3JlXCI+PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2xsLWZyZWVcIj5cbiAgICAgICAgPHNwYW4+Q3VzdG9tZXIgU2VydmljZSAoVG9sbCBGcmVlKTwvc3Bhbj5cbiAgICAgICAgPGI+MS04MDAtNDE5LTYyOTk8L2I+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzM0NDk1ZTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nby10aXRsZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBjaXRlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ28tdGl0bGUgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgICAgY29sb3I6ICM5NTk0OTk7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL3N0YXRpYy9pbWFnZXMvZm9vdGVySWNvbnNTcHJpdGUuc3ZnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAwcHggMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb2xsb3cge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLnNoaWZ0LXJpZ2h0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb2xsb3cgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZmFjZWJvb2sge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05MHB4IC0xcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnR3aXR0ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDBweCAtMXB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbnN0YWdyYW0ge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTZweCAtMXB4O1xuICAgICAgICB9XG4gICAgICAgIC5wbGF5LXN0b3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjZweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5hcHAtc3RvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00MHB4IC0xcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRvbGwtZnJlZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRvbGwtZnJlZSBiIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Footer.js */"));
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
/* harmony import */ var _MembershipPlans__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MembershipPlans */ "./components/home/MembershipPlans.js");
/* harmony import */ var _MatchProfiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MatchProfiles */ "./components/home/MatchProfiles.js");
/* harmony import */ var _DownloadApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DownloadApp */ "./components/home/DownloadApp.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./About */ "./components/home/About.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer */ "./components/home/Footer.js");
/* harmony import */ var _BrowseMatrimonyProfiles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BrowseMatrimonyProfiles */ "./components/home/BrowseMatrimonyProfiles.js");
/* harmony import */ var _VerificationDetail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VerificationDetail */ "./components/home/VerificationDetail.js");
/* harmony import */ var _SimpleSteps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SimpleSteps */ "./components/home/SimpleSteps.js");
/* harmony import */ var _PrivacySetting__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrivacySetting */ "./components/home/PrivacySetting.js");
/* harmony import */ var _JSExclusive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./JSExclusive */ "./components/home/JSExclusive.js");
/* harmony import */ var _AboutApp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AboutApp */ "./components/home/AboutApp.js");
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_bannerSection_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_VerificationDetail__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_SimpleSteps__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(_PrivacySetting__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_MembershipPlans__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_JSExclusive__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(_AboutApp__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_MatchProfiles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }));
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
  slidesToShow: 1.05,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "4px"
};

function MembershipPlans() {
  return __jsx("div", {
    className: "jsx-3707092200" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), _static_data__WEBPACK_IMPORTED_MODULE_4__["membershipDetail"].map(function ({
    iconColor,
    list,
    backgroundColor
  }, index) {
    return __jsx("div", {
      className: "jsx-3707092200",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3707092200" + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, list.map(function ({
      text,
      iconColor,
      textColor
    }) {
      return __jsx("div", {
        className: "jsx-3707092200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("span", {
        style: {
          color: iconColor
        },
        className: "jsx-3707092200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "icon"), __jsx("span", {
        style: {
          color: textColor
        },
        className: "jsx-3707092200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, text));
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3707092200",
    __self: this
  }, ".container.jsx-3707092200{margin-left:20px;}.card.jsx-3707092200{background:#d9475c;box-shadow:0 2px 6px -1px rgba(38,48,140,0.2);border-radius:4px;margin-right:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NZW1iZXJzaGlwUGxhbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENrQixBQUc0QixBQUdFLGlCQUZyQixFQUdtRCw4Q0FDL0Isa0JBQ0QsaUJBQ25CIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NZW1iZXJzaGlwUGxhbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuLy9pbXBvcnQgTWVtYmVyc2hpcERldGFpbCBmcm9tIFwiLi9PbGRNZW1iZXJzaGlwRGV0YWlsXCI7XG5pbXBvcnQgeyBtZW1iZXJzaGlwRGV0YWlsIH0gZnJvbSBcIi4uLy4uL3N0YXRpYy9kYXRhXCI7XG5cbmNvbnN0IHNldHRpbmdzID0ge1xuICBkb3RzOiBmYWxzZSxcbiAgc3dpcGU6IHRydWUsXG4gIHRvdWNoTW92ZTogdHJ1ZSxcbiAgaW5maW5pdGU6IGZhbHNlLFxuICBhcnJvd3M6IGZhbHNlLFxuICBzcGVlZDogNTAwLFxuICBzbGlkZXNUb1Nob3c6IDEuMDUsXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICBjZW50ZXJNb2RlOiB0cnVlLFxuICBjZW50ZXJQYWRkaW5nOiBcIjRweFwiXG59O1xuXG5mdW5jdGlvbiBNZW1iZXJzaGlwUGxhbnMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAge21lbWJlcnNoaXBEZXRhaWwubWFwKGZ1bmN0aW9uKFxuICAgICAgICAgIHsgaWNvbkNvbG9yLCBsaXN0LCBiYWNrZ3JvdW5kQ29sb3IgfSxcbiAgICAgICAgICBpbmRleFxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBpbmRleCA9PSAwID8gMjAgOiAwIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGlzdC5tYXAoZnVuY3Rpb24oeyB0ZXh0LCBpY29uQ29sb3IsIHRleHRDb2xvciB9KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBpY29uQ29sb3IgfX0+aWNvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogdGV4dENvbG9yIH19Pnt0ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9TbGlkZXI+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkOTQ3NWM7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IC0xcHggcmdiYSgzOCwgNDgsIDE0MCwgMC4yKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyc2hpcFBsYW5zO1xuIl19 */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MembershipPlans.js */"));
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
    className: "jsx-3289910976" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3289910976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Three Simple Steps to"), __jsx("h2", {
    className: "jsx-3289910976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Find the ", __jsx("strong", {
    className: "jsx-3289910976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "One for You")), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), _static_data__WEBPACK_IMPORTED_MODULE_4__["simpleSteps"].map(function ({
    text,
    posiiton
  }, index) {
    return __jsx("div", {
      className: "jsx-3289910976" + " " + "list-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      style: {
        backgroundPosition: posiiton
      },
      className: "jsx-3289910976" + " " + "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3289910976" + " " + "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-3289910976",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, `0${index + 1}`), text));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3289910976",
    __self: this
  }, ".list-container.jsx-3289910976{text-align:center;margin-top:30px;}.container.jsx-3289910976{padding:32px 20px;background:#f8f9f9;}h3.jsx-3289910976{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;}h2.jsx-3289910976{font-size:20px;font-weight:100;}h2.jsx-3289910976 strong.jsx-3289910976{padding:0 0 0 5px;color:#d9475c;}.image.jsx-3289910976{background:url(\"../../static/images/how_it_works.svg\") no-repeat;width:210px;height:110px;display:inline-block;}.text.jsx-3289910976{font-weight:600;font-size:14px;color:#14202b;}.text.jsx-3289910976 span.jsx-3289910976{font-style:normal;color:#d9475c;}.slick-dot.jsx-3289910976{background:#d9475c;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9TaW1wbGVTdGVwcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2tCLEFBRzZCLEFBS0EsQUFLSCxBQU9BLEFBSUcsQUFLK0MsQUFPakQsQUFLRSxBQUlDLGVBL0JILEFBT0EsQ0FnQkQsRUFqQ0MsQUFLRyxBQWdCTCxBQWlCQSxDQUloQixZQS9CZ0IsQUFPaEIsQUFnQmdCLENBWmhCLEFBaUJBLEVBdENBLEdBS0EsUUFNb0IsQUF1QnBCLGtCQXRCdUIsRUFhVCxZQUNDLGFBQ1EscUJBQ3ZCLHFEQWZBIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9TaW1wbGVTdGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgeyBzaW1wbGVTdGVwcyB9IGZyb20gXCIuLi8uLi9zdGF0aWMvZGF0YVwiO1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgZG90czogdHJ1ZSxcbiAgaW5maW5pdGU6IHRydWUsXG4gIHNwZWVkOiA1MDAsXG4gIHNsaWRlc1RvU2hvdzogMSxcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gIGFycm93czogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIFNpbXBsZVN0ZXBzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDM+VGhyZWUgU2ltcGxlIFN0ZXBzIHRvPC9oMz5cbiAgICAgIDxoMj5cbiAgICAgICAgRmluZCB0aGUgPHN0cm9uZz5PbmUgZm9yIFlvdTwvc3Ryb25nPlxuICAgICAgPC9oMj5cbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAge3NpbXBsZVN0ZXBzLm1hcChmdW5jdGlvbih7IHRleHQsIHBvc2lpdG9uIH0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kUG9zaXRpb246IHBvc2lpdG9uIH19XG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2AwJHtpbmRleCArIDF9YH08L3NwYW4+XG4gICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1NsaWRlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmxpc3QtY29udGFpbmVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDMycHggMjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWY5O1xuICAgICAgICB9XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiAjOGE5ZGIwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICB9XG4gICAgICAgIGgyIHN0cm9uZyB7XG4gICAgICAgICAgcGFkZGluZzogMCAwIDAgNXB4O1xuICAgICAgICAgIGNvbG9yOiAjZDk0NzVjO1xuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2hvd19pdF93b3Jrcy5zdmdcIikgbm8tcmVwZWF0O1xuICAgICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogIzE0MjAyYjtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCBzcGFuIHtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgY29sb3I6ICNkOTQ3NWM7XG4gICAgICAgIH1cbiAgICAgICAgLnNsaWNrLWRvdCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Q5NDc1YztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVTdGVwcztcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/SimpleSteps.js */"));
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
    className: "jsx-233134665" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-233134665",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "More Than 20 years of"), __jsx("h2", {
    className: "jsx-233134665",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Bringing People", __jsx("span", {
    className: "jsx-233134665",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Together")), __jsx("div", {
    style: {},
    className: "jsx-233134665",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, _static_data__WEBPACK_IMPORTED_MODULE_2__["verificationData"].map(function (data) {
    return __jsx("div", {
      className: "jsx-233134665" + " " + "list-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-233134665",
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
      className: "jsx-233134665",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-233134665" + " " + "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("h4", {
      className: "jsx-233134665",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, data.heading), __jsx("p", {
      className: "jsx-233134665",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, data.about)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "233134665",
    __self: this
  }, ".container.jsx-233134665{font-family:\"Cabin\",sans-serif;margin:32px 20px;}h3.jsx-233134665{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;}h2.jsx-233134665{font-size:20px;font-weight:100;}span.jsx-233134665{padding:0 0 0 5px;color:#d9475c;}.list-container.jsx-233134665{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:20px 0px;}.content.jsx-233134665{padding:0px 0px 0px 10px;border-left:1px solid #dee2e6;}h4.jsx-233134665{font-size:14px;color:#14202b;font-weight:600;padding:0px;}p.jsx-233134665{font-size:12px;color:#33495f;line-height:17px;margin:0px;padding:0px;margin-top:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9WZXJpZmljYXRpb25EZXRhaWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJrQixBQUcyQyxBQUtqQixBQVFBLEFBS0csQUFLTCxBQU1ZLEFBSVYsQUFPQSxlQWxDQyxBQVFBLEFBb0JGLEFBT0EsR0F0QkEsT0FXZ0IsSUFLZCxBQU9DLEVBekNBLEFBTUgsQUFRaEIsQ0FLQSxhQVpvQixBQTZCTixDQU1ELEVBekNiLE9BNkJBLEVBT0EsQUFNYyxNQW5DUyxNQW9DTixLQXJCSSxVQXNCckIsZ0ZBcENBLEdBZXlCLG1HQUNQLGdCQUNsQiIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvVmVyaWZpY2F0aW9uRGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdmVyaWZpY2F0aW9uRGF0YSB9IGZyb20gXCIuLi8uLi9zdGF0aWMvZGF0YVwiO1xuXG5mdW5jdGlvbiBWZXJpZmljYXRpb25EZXRhaWwoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMz5Nb3JlIFRoYW4gMjAgeWVhcnMgb2Y8L2gzPlxuICAgICAgPGgyPlxuICAgICAgICBCcmluZ2luZyBQZW9wbGU8c3Bhbj5Ub2dldGhlcjwvc3Bhbj5cbiAgICAgIDwvaDI+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3t9fT5cbiAgICAgICAge3ZlcmlmaWNhdGlvbkRhdGEubWFwKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4IDEwcHggMHB4IDBweFwiIH19XG4gICAgICAgICAgICAgICAgICBzcmM9e2RhdGEuaW1hZ2VVUkx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxoND57ZGF0YS5oZWFkaW5nfTwvaDQ+XG4gICAgICAgICAgICAgICAgPHA+e2RhdGEuYWJvdXR9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkNhYmluXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgbWFyZ2luOiAzMnB4IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6ICM4YTlkYjA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbiAgICAgICAgICBjb2xvcjogI2Q5NDc1YztcbiAgICAgICAgfVxuXG4gICAgICAgIC5saXN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgICAgICB9XG4gICAgICAgIGg0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6ICMxNDIwMmI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6ICMzMzQ5NWY7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBWZXJpZmljYXRpb25EZXRhaWw7XG4iXX0= */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/VerificationDetail.js */"));
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
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/bannerSection/Banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Banner() {
  return __jsx("div", {
    className: "jsx-3511945792" + " " + "banner-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3511945792",
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
    className: "jsx-3511945792" + " " + "white fontreg caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3511945792",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Love is looking for you"), __jsx("h1", {
    className: "jsx-3511945792",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, " Be found"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3511945792",
    __self: this
  }, ".banner-image.jsx-3511945792{background:url(../../../static/images/cover_picture.jpg) left top no-repeat;background-size:cover;min-height:360px;}.caption.jsx-3511945792{font-size:16px;margin-top:150px;margin-bottom:8px;text-align:center;}p.jsx-3511945792{font-size:14px;text-shadow:1px 2px 2px rgba(0,0,0,0.5);}h1.jsx-3511945792{font-size:70px;font-family:\"sarah-script\",\"sans-serif\";font-weight:400;margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9iYW5uZXJTZWN0aW9uL0Jhbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFJc0IsQUFNSSxBQU1BLEFBSUEsZUFURSxBQU0wQixBQUlGLGlCQVR2QixrQkFDQSxLQUtwQixBQUlrQixhQVJsQixHQVNhLEtBbEJXLE1BbUJ4QixnQkFsQm1CLGlCQUNuQiIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvYmFubmVyU2VjdGlvbi9CYW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tIFwiLi9TZWFyY2hCb3hcIjtcblxuZnVuY3Rpb24gQmFubmVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWltYWdlXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hpdGUgZm9udHJlZyBjYXB0aW9uXCI+XG4gICAgICAgICAgPHA+TG92ZSBpcyBsb29raW5nIGZvciB5b3U8L3A+XG4gICAgICAgICAgPGgxPiBCZSBmb3VuZDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPFNlYXJjaEJveCAvPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYmFubmVyLWltYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vc3RhdGljL2ltYWdlcy9jb3Zlcl9waWN0dXJlLmpwZykgbGVmdCB0b3BcbiAgICAgICAgICAgIG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDM2MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcHRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDcwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwic2FyYWgtc2NyaXB0XCIsIFwic2Fucy1zZXJpZlwiO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xuIl19 */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/bannerSection/Banner.js */"));
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
    className: "jsx-3383297284" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3383297284" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, " ", __jsx("a", {
    className: "jsx-3383297284",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    src: "../../../static/images/js_logo.svg",
    className: "jsx-3383297284",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-3383297284" + " " + "login caption white fontreg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-3383297284" + " " + "user-icon white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-3383297284",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Login")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3383297284",
    __self: this
  }, ".container.jsx-3383297284{background:rgba(0,0,0,0.5);padding:8px 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.logo.jsx-3383297284{width:70px;height:26px;}.logo.jsx-3383297284 img.jsx-3383297284{width:100%;}.login.jsx-3383297284{line-height:40px;font-size:13px;}.user-icon.jsx-3383297284{background-image:url(../../../static/images/homeSpriteNewFinal.png);width:20px;background-position:-1px 2px;height:18px;display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9iYW5uZXJTZWN0aW9uL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmtCLEFBR3lDLEFBT25CLEFBSUEsQUFHTSxBQUttRCxXQVh4RCxBQUlkLE1BSWlCLE1BUGpCLElBUm1CLEtBZ0JuQixZQWZlLHdCQWtCRixXQUNrQiw2QkFDakIsVUFuQmtCLEVBcUJULHFCQUN2Qiw0RkFyQnFCLDZGQUNyQiIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvYmFubmVyU2VjdGlvbi9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uLy4uL3N0YXRpYy90aGVtZVwiO1xuLy9pbXBvcnQgbG9nbyBmcm9tIFwiLi4vLi4vLi4vc3RhdGljL2ltYWdlcy9sb2dvLnBuZ1wiO1xuXG4vL1RPRE9cbi8vVG8gbWFrZSBpbWFnZXMgaW1wb3J0YWJsZSBodHRwczovL2dpdGh1Yi5jb20vdHdvcGx1c3plcm8vbmV4dC1pbWFnZXNcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAge1wiIFwifVxuICAgICAgICA8YT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9pbWFnZXMvanNfbG9nby5zdmdcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4gY2FwdGlvbiB3aGl0ZSBmb250cmVnXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cInVzZXItaWNvbiB3aGl0ZVwiPjwvaT5cbiAgICAgICAgPHNwYW4+TG9naW48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgfVxuICAgICAgICAubG9nbyBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5sb2dpbiB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG5cbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXItaWNvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL3N0YXRpYy9pbWFnZXMvaG9tZVNwcml0ZU5ld0ZpbmFsLnBuZyk7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTFweCAycHg7XG4gICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/bannerSection/Header.js */"));
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
  backgroundColor: "#D9475C",
  buttonColor: "#D9475C",
  title: "Free",
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
  buttonColor: "#D9475C",
  title: "Free",
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