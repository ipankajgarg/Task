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
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Button */ "./components/common/Button.js");

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
  slidesToShow: 1.25,
  slidesToScroll: 0.5,
  centerMode: true,
  centerPadding: "4px"
};

function MembershipPlans() {
  return __jsx("div", {
    className: "jsx-540492078" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-540492078" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-540492078",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Upgrade your account"), __jsx("strong", {
    className: "jsx-540492078",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Membership ", __jsx("span", {
    className: "jsx-540492078",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, " Plans"), " ")), __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    className: "jsx-540492078" + " " + (settings && settings.className != null && settings.className || "slider"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), _static_data__WEBPACK_IMPORTED_MODULE_4__["membershipDetail"].map(function (_ref, index) {
    var iconColor = _ref.iconColor,
        list = _ref.list,
        backgroundColor = _ref.backgroundColor,
        buttonColor = _ref.buttonColor,
        textColor = _ref.textColor,
        title = _ref.title;
    return __jsx("div", {
      style: {
        backgroundColor: backgroundColor
      },
      className: "jsx-540492078" + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-540492078" + " " + "card-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, title), list.map(function (_ref2) {
      var text = _ref2.text,
          iconColor = _ref2.iconColor,
          textColor = _ref2.textColor;
      return __jsx("div", {
        style: {
          height: 34
        },
        className: "jsx-540492078",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("span", {
        style: {
          color: iconColor
        },
        className: "jsx-540492078",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "icon"), __jsx("span", {
        style: {
          color: textColor
        },
        className: "jsx-540492078" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, text));
    }), __jsx("div", {
      style: {
        textAlign: "center"
      },
      className: "jsx-540492078",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      textColor: textColor,
      color: buttonColor,
      width: "75%",
      height: "30px",
      content: "browse membership",
      onPress: function onPress() {
        return console.log("pressed");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "540492078",
    __self: this
  }, ".container.jsx-540492078{padding:42px 0px;background-image:url(\"../../static/images/people_together_back.jpg\");background-repeat-x:repeat;background-position:left bottom;background-size:contain;}.slider.jsx-540492078{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow-x:scroll;padding:0px 24px;}.heading.jsx-540492078{padding:0px 24px;}h3.jsx-540492078{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;}.heading.jsx-540492078 span.jsx-540492078{font-size:20px;}strong.jsx-540492078{color:#d9475c;}.card.jsx-540492078{box-shadow:0 2px 6px -1px rgba(38,48,140,0.2);border-radius:4px;margin-right:15px;padding:24px;min-width:70%;}.text.jsx-540492078{font-size:14px;font-weight:500;padding-left:8px;}.card-heading.jsx-540492078{font-size:20px;color:#14202b;font-weight:500;border-top:2px solid #d9475c;padding:0.5rem 0rem;display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NZW1iZXJzaGlwUGxhbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0VrQixBQUc0QixBQVFKLEFBS0ksQUFJRixBQU9BLEFBR0QsQUFJbUMsQUFRbEMsQUFNQSxjQWpCakIsQ0FWa0IsQUFPbEIsQUFla0IsQUFNRixFQTdDdUQsQUFhdkUsWUFpQ2tCLEVBNUJGLEFBc0JHLGNBckJDLEFBNEJXLENBaEJYLEVBVXBCLGVBckJ1QixDQVlILFVBeEJBLEFBd0NFLFFBZlAsSUFoQ2MsTUFRVixFQXdDSSxDQWZQLGNBeEJoQixBQXlCQSxJQWpDa0MsRUFnRGxDLDhCQS9DMEIsbUJBa0IxQixLQWpCQSIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvTWVtYmVyc2hpcFBsYW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbi8vaW1wb3J0IE1lbWJlcnNoaXBEZXRhaWwgZnJvbSBcIi4vT2xkTWVtYmVyc2hpcERldGFpbFwiO1xuaW1wb3J0IHsgbWVtYmVyc2hpcERldGFpbCB9IGZyb20gXCIuLi8uLi9zdGF0aWMvZGF0YVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tbW9uL0J1dHRvblwiO1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgZG90czogZmFsc2UsXG4gIHN3aXBlOiB0cnVlLFxuICB0b3VjaE1vdmU6IHRydWUsXG4gIGluZmluaXRlOiBmYWxzZSxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgc3BlZWQ6IDUwMCxcbiAgc2xpZGVzVG9TaG93OiAxLjI1LFxuICBzbGlkZXNUb1Njcm9sbDogMC41LFxuICBjZW50ZXJNb2RlOiB0cnVlLFxuICBjZW50ZXJQYWRkaW5nOiBcIjRweFwiXG59O1xuXG5mdW5jdGlvbiBNZW1iZXJzaGlwUGxhbnMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlxuICAgICAgICA8aDM+VXBncmFkZSB5b3VyIGFjY291bnQ8L2gzPlxuXG4gICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgTWVtYmVyc2hpcCA8c3Bhbj4gUGxhbnM8L3NwYW4+e1wiIFwifVxuICAgICAgICA8L3N0cm9uZz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiIHsuLi5zZXR0aW5nc30+XG4gICAgICAgIHttZW1iZXJzaGlwRGV0YWlsLm1hcChmdW5jdGlvbihcbiAgICAgICAgICB7IGljb25Db2xvciwgbGlzdCwgYmFja2dyb3VuZENvbG9yLCBidXR0b25Db2xvciwgdGV4dENvbG9yLCB0aXRsZSB9LFxuICAgICAgICAgIGluZGV4XG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvciB9fSBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtaGVhZGluZ1wiPnt0aXRsZX08L3NwYW4+XG5cbiAgICAgICAgICAgICAge2xpc3QubWFwKGZ1bmN0aW9uKHsgdGV4dCwgaWNvbkNvbG9yLCB0ZXh0Q29sb3IgfSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogMzQgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBpY29uQ29sb3IgfX0+aWNvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiIHN0eWxlPXt7IGNvbG9yOiB0ZXh0Q29sb3IgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9e3RleHRDb2xvcn1cbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtidXR0b25Db2xvcn1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNzUlXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwcHhcIlxuICAgICAgICAgICAgICAgICAgY29udGVudD1cImJyb3dzZSBtZW1iZXJzaGlwXCJcbiAgICAgICAgICAgICAgICAgIG9uUHJlc3M9eygpID0+IGNvbnNvbGUubG9nKFwicHJlc3NlZFwiKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZzogNDJweCAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vc3RhdGljL2ltYWdlcy9wZW9wbGVfdG9nZXRoZXJfYmFjay5qcGdcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQteDogcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbGlkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAyNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkaW5nIHtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogIzhhOWRiMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkaW5nIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGNvbG9yOiAjZDk0NzVjO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAtMXB4IHJnYmEoMzgsIDQ4LCAxNDAsIDAuMik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICAgIG1pbi13aWR0aDogNzAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtaGVhZGluZyB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiAjMTQyMDJiO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkOTQ3NWM7XG4gICAgICAgICAgcGFkZGluZzogMC41cmVtIDByZW07XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbWJlcnNoaXBQbGFucztcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MembershipPlans.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (MembershipPlans);

/***/ })

})
//# sourceMappingURL=index.js.3483f37f2e714eb0b931.hot-update.js.map