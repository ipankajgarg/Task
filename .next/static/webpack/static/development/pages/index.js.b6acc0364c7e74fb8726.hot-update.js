webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/MembershipPlans.js":
/*!********************************************!*\
  !*** ./components/home/MembershipPlans.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/data */ "./static/data.js");

var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MembershipPlans.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 //import MembershipDetail from "./OldMembershipDetail";


var settings = {
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), _static_data__WEBPACK_IMPORTED_MODULE_3__["membershipDetail"].map(function (_ref) {
    var iconColor = _ref.iconColor,
        list = _ref.list;
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, list.map(function (_ref2) {
      var text = _ref2.text,
          iconColor = _ref2.iconColor,
          textColor = _ref2.textColor;
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("span", {
        style: {
          color: iconColor
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "icon"), __jsx("span", {
        style: {
          color: textColor
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, text));
    }));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MembershipPlans);

/***/ })

})
//# sourceMappingURL=index.js.b6acc0364c7e74fb8726.hot-update.js.map