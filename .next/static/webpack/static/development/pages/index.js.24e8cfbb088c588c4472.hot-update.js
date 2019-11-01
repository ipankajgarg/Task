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
    className: "jsx-3525389033" + " " + "container",
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
        backgroundColor: "#D9475C"
      },
      className: "jsx-3525389033" + " " + "card",
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
        className: "jsx-3525389033",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("span", {
        style: {
          color: iconColor
        },
        className: "jsx-3525389033",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "icon"), __jsx("span", {
        style: {
          color: textColor
        },
        className: "jsx-3525389033",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, text));
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3525389033",
    __self: this
  }, ".container.jsx-3525389033{padding:0px 24px;}.card.jsx-3525389033{padding:24px;background:#d9475c;box-shadow:0 2px 6px -1px rgba(38,48,140,0.2);border-radius:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NZW1iZXJzaGlwUGxhbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NrQixBQUc0QixBQUdKLGFBQ00sSUFIckIsZUFJbUQsOENBQy9CLGtCQUNwQiIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvTWVtYmVyc2hpcFBsYW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbi8vaW1wb3J0IE1lbWJlcnNoaXBEZXRhaWwgZnJvbSBcIi4vT2xkTWVtYmVyc2hpcERldGFpbFwiO1xuaW1wb3J0IHsgbWVtYmVyc2hpcERldGFpbCB9IGZyb20gXCIuLi8uLi9zdGF0aWMvZGF0YVwiO1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgZG90czogZmFsc2UsXG4gIHN3aXBlOiB0cnVlLFxuICB0b3VjaE1vdmU6IHRydWUsXG4gIGluZmluaXRlOiBmYWxzZSxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgc3BlZWQ6IDUwMCxcbiAgc2xpZGVzVG9TaG93OiAxLjA1LFxuICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgY2VudGVyUGFkZGluZzogXCI0cHhcIlxufTtcblxuZnVuY3Rpb24gTWVtYmVyc2hpcFBsYW5zKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgIHttZW1iZXJzaGlwRGV0YWlsLm1hcChmdW5jdGlvbih7IGljb25Db2xvciwgbGlzdCwgYmFja2dyb3VuZENvbG9yIH0pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0Q5NDc1Q1wiIH19IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAge2xpc3QubWFwKGZ1bmN0aW9uKHsgdGV4dCwgaWNvbkNvbG9yLCB0ZXh0Q29sb3IgfSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogaWNvbkNvbG9yIH19Pmljb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiB0ZXh0Q29sb3IgfX0+e3RleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvU2xpZGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAyNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkOTQ3NWM7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IC0xcHggcmdiYSgzOCwgNDgsIDE0MCwgMC4yKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyc2hpcFBsYW5zO1xuIl19 */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MembershipPlans.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (MembershipPlans);

/***/ })

})
//# sourceMappingURL=index.js.24e8cfbb088c588c4472.hot-update.js.map