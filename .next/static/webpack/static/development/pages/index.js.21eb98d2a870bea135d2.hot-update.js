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
  slidesToShow: 1.05,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "4px"
};

function MembershipPlans() {
  return __jsx("div", {
    className: "jsx-889169226" + " " + "container",
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
  }), _static_data__WEBPACK_IMPORTED_MODULE_4__["membershipDetail"].map(function (_ref, index) {
    var iconColor = _ref.iconColor,
        list = _ref.list,
        backgroundColor = _ref.backgroundColor;
    return __jsx("div", {
      className: "jsx-889169226",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-889169226" + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, list.map(function (_ref2) {
      var text = _ref2.text,
          iconColor = _ref2.iconColor,
          textColor = _ref2.textColor;
      return __jsx("div", {
        className: "jsx-889169226",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("span", {
        style: {
          color: iconColor
        },
        className: "jsx-889169226",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "icon"), __jsx("span", {
        style: {
          color: textColor
        },
        className: "jsx-889169226",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, text));
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "889169226",
    __self: this
  }, ".card.jsx-889169226{background:#d9475c;box-shadow:0 2px 6px -1px rgba(38,48,140,0.2);border-radius:4px;margin-right:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NZW1iZXJzaGlwUGxhbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENrQixBQUs4QixtQkFDOEIsOENBQy9CLGtCQUNELGlCQUNuQiIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvTWVtYmVyc2hpcFBsYW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbi8vaW1wb3J0IE1lbWJlcnNoaXBEZXRhaWwgZnJvbSBcIi4vT2xkTWVtYmVyc2hpcERldGFpbFwiO1xuaW1wb3J0IHsgbWVtYmVyc2hpcERldGFpbCB9IGZyb20gXCIuLi8uLi9zdGF0aWMvZGF0YVwiO1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgZG90czogZmFsc2UsXG4gIHN3aXBlOiB0cnVlLFxuICB0b3VjaE1vdmU6IHRydWUsXG4gIGluZmluaXRlOiBmYWxzZSxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgc3BlZWQ6IDUwMCxcbiAgc2xpZGVzVG9TaG93OiAxLjA1LFxuICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgY2VudGVyUGFkZGluZzogXCI0cHhcIlxufTtcblxuZnVuY3Rpb24gTWVtYmVyc2hpcFBsYW5zKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgIHttZW1iZXJzaGlwRGV0YWlsLm1hcChmdW5jdGlvbihcbiAgICAgICAgICB7IGljb25Db2xvciwgbGlzdCwgYmFja2dyb3VuZENvbG9yIH0sXG4gICAgICAgICAgaW5kZXhcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBwYWRkaW5nTGVmdDogaW5kZXggPT0gMCA/IDIwIDogMCB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xpc3QubWFwKGZ1bmN0aW9uKHsgdGV4dCwgaWNvbkNvbG9yLCB0ZXh0Q29sb3IgfSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogaWNvbkNvbG9yIH19Pmljb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IHRleHRDb2xvciB9fT57dGV4dH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvU2xpZGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDk0NzVjO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAtMXB4IHJnYmEoMzgsIDQ4LCAxNDAsIDAuMik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbWJlcnNoaXBQbGFucztcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MembershipPlans.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (MembershipPlans);

/***/ })

})
//# sourceMappingURL=index.js.21eb98d2a870bea135d2.hot-update.js.map