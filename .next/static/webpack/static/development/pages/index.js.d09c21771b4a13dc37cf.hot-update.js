webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/MembershipPlans.js":
/*!********************************************!*\
  !*** ./components/home/MembershipPlans.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/data */ "./static/data.js");
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MembershipPlans.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //import MembershipDetail from "./OldMembershipDetail";



function MembershipPlans() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, _static_data__WEBPACK_IMPORTED_MODULE_2__["membershipDetail"].map(function (_ref) {
    var iconColor = _ref.iconColor,
        list = _ref.list;
    return list.map(function (_ref2) {
      var text = _ref2.text,
          iconColor = _ref2.iconColor,
          textColor = _ref2.textColor;
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("span", {
        style: {
          color: iconColor
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "icon"), __jsx("span", {
        style: {
          color: textColor
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, text));
    });
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MembershipPlans);

/***/ })

})
//# sourceMappingURL=index.js.d09c21771b4a13dc37cf.hot-update.js.map