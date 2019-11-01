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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/data */ "./static/data.js");

var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MembershipPlans.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 //import MembershipDetail from "./OldMembershipDetail";


var settings = {
  dots: false,
  swipe: true,
  touchMove: true,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "4px"
};

function MembershipPlans() {
  return __jsx("div", {
    className: "jsx-2863940457",
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
  }), _static_data__WEBPACK_IMPORTED_MODULE_4__["membershipDetail"].map(function (_ref) {
    var iconColor = _ref.iconColor,
        list = _ref.list,
        backgroundColor = _ref.backgroundColor;
    return __jsx("div", {
      style: {
        backgroundColor: backgroundColor
      },
      className: "jsx-2863940457" + " " + "card",
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
        className: "jsx-2863940457",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("span", {
        style: {
          color: iconColor
        },
        className: "jsx-2863940457",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "icon"), __jsx("span", {
        style: {
          color: textColor
        },
        className: "jsx-2863940457",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, text));
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2863940457",
    __self: this
  }, ".card.jsx-2863940457{padding:24px;background:#ffffff;box-shadow:0 2px 6px -1px rgba(38,48,140,0.2);border-radius:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NZW1iZXJzaGlwUGxhbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NrQixBQUd3QixhQUNNLG1CQUM4Qiw4Q0FDL0Isa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NZW1iZXJzaGlwUGxhbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuLy9pbXBvcnQgTWVtYmVyc2hpcERldGFpbCBmcm9tIFwiLi9PbGRNZW1iZXJzaGlwRGV0YWlsXCI7XG5pbXBvcnQgeyBtZW1iZXJzaGlwRGV0YWlsIH0gZnJvbSBcIi4uLy4uL3N0YXRpYy9kYXRhXCI7XG5cbmNvbnN0IHNldHRpbmdzID0ge1xuICBkb3RzOiBmYWxzZSxcbiAgc3dpcGU6IHRydWUsXG4gIHRvdWNoTW92ZTogdHJ1ZSxcbiAgaW5maW5pdGU6IGZhbHNlLFxuICBhcnJvd3M6IGZhbHNlLFxuICBzcGVlZDogNTAwLFxuICBzbGlkZXNUb1Nob3c6IDEsXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICBjZW50ZXJNb2RlOiB0cnVlLFxuICBjZW50ZXJQYWRkaW5nOiBcIjRweFwiXG59O1xuXG5mdW5jdGlvbiBNZW1iZXJzaGlwUGxhbnMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAge21lbWJlcnNoaXBEZXRhaWwubWFwKGZ1bmN0aW9uKHsgaWNvbkNvbG9yLCBsaXN0LCBiYWNrZ3JvdW5kQ29sb3IgfSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvciB9fSBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgIHtsaXN0Lm1hcChmdW5jdGlvbih7IHRleHQsIGljb25Db2xvciwgdGV4dENvbG9yIH0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IGljb25Db2xvciB9fT5pY29uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogdGV4dENvbG9yIH19Pnt0ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1NsaWRlcj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAtMXB4IHJnYmEoMzgsIDQ4LCAxNDAsIDAuMik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbWJlcnNoaXBQbGFucztcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MembershipPlans.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (MembershipPlans);

/***/ })

})
//# sourceMappingURL=index.js.b6a30f8b96f871cc103e.hot-update.js.map