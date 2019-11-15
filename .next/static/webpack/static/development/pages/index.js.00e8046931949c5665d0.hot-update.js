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
    className: "jsx-3201431047" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3201431047" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3201431047",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Upgrade your account"), __jsx("strong", {
    className: "jsx-3201431047",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Membership ", __jsx("span", {
    className: "jsx-3201431047",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, " Plans"), " ")), __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    className: "jsx-3201431047" + " " + (settings && settings.className != null && settings.className || "slider"),
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
        title = _ref.title,
        borderColor = _ref.borderColor;
    return __jsx("div", {
      style: {
        backgroundColor: backgroundColor
      },
      className: "jsx-3201431047" + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("span", {
      style: {
        color: textColor,
        borderColor: borderColor
      },
      className: "jsx-3201431047" + " " + "card-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
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
        className: "jsx-3201431047",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("span", {
        style: {
          color: iconColor
        },
        className: "jsx-3201431047",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "icon"), __jsx("span", {
        style: {
          color: textColor
        },
        className: "jsx-3201431047" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, text));
    }), __jsx("div", {
      style: {
        textAlign: "center"
      },
      className: "jsx-3201431047",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("button", {
      className: "jsx-3201431047",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "browse membership")));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3201431047",
    __self: this
  }, ".container.jsx-3201431047{padding:42px 0px;background-image:url(\"../../static/images/people_together_back.jpg\");background-repeat-x:repeat;background-position:left bottom;background-size:contain;}.slider.jsx-3201431047{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow-x:scroll;padding:0px 24px;margin-top:20px;}.heading.jsx-3201431047{padding:0px 24px;}h3.jsx-3201431047{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;text-transform:uppercase;}span.jsx-3201431047{color:black;}strong.jsx-3201431047{font-size:20px;color:#d9475c;}.card.jsx-3201431047{box-shadow:0 2px 6px -1px rgba(38,48,140,0.2);border-radius:4px;margin-right:15px;padding:24px;min-width:70%;}.text.jsx-3201431047{font-size:14px;font-weight:500;padding-left:8px;}.card-heading.jsx-3201431047{font-size:20px;color:#14202b;font-weight:500;border-top:2px solid;padding:0.5rem 0rem;display:inline-block;}button.jsx-3201431047{font-size:14px;color:#fff;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;padding:10px 20px;margin:0 0 0 -60px;left:50%;bottom:30px;background:#d9475c;display:inline-block;font-weight:600;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;line-height:1.5;border-radius:0.25rem;font-family:\"Cabin\",sans-serif;font-weight:700;color:#fff;line-height:14px;margin:auto !important;width:100% !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NZW1iZXJzaGlwUGxhbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VrQixBQUc0QixBQVFKLEFBTUksQUFJRixBQVFILEFBR0csQUFLa0MsQUFRbEMsQUFNQSxBQVNBLFlBOUJqQixHQVJrQixBQVdGLEFBYUUsQUFNRixBQVNILEVBekQwRCxBQWN2RSxTQTRDbUIsR0E1Qm5CLEFBbUJrQixFQTlCRixBQXdCRyxjQXZCQyxBQThCRyxDQWhCSCxFQVVwQixlQXZCdUIsQ0FjSCxFQWdCRSxRQTNDRixRQTRCTCxJQW5DYyxBQW1ETixNQTNDSixHQTRCSCxZQWdCaEIsRUEzQ2tCLEFBNEJsQixFQXFCb0IsRUF6RGMsWUFTbEMsSUFpRHFCLGdCQXpESyxHQTBEZixTQUNHLE9BeENhLEtBbEIzQixBQTJEcUIsbUJBQ0UsQ0F6Q3ZCLG9CQTBDa0IsZ0JBQ00sc0JBQ0wscUZBQ1ksNkJBQ2IsZ0JBQ00sc0JBQ1UsK0JBRWhCLGdCQUNMLFdBQ00saUJBQ00sdUJBQ0Qsc0JBQ3hCIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NZW1iZXJzaGlwUGxhbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuLy9pbXBvcnQgTWVtYmVyc2hpcERldGFpbCBmcm9tIFwiLi9PbGRNZW1iZXJzaGlwRGV0YWlsXCI7XG5pbXBvcnQgeyBtZW1iZXJzaGlwRGV0YWlsIH0gZnJvbSBcIi4uLy4uL3N0YXRpYy9kYXRhXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21tb24vQnV0dG9uXCI7XG5cbmNvbnN0IHNldHRpbmdzID0ge1xuICBkb3RzOiBmYWxzZSxcbiAgc3dpcGU6IHRydWUsXG4gIHRvdWNoTW92ZTogdHJ1ZSxcbiAgaW5maW5pdGU6IGZhbHNlLFxuICBhcnJvd3M6IGZhbHNlLFxuICBzcGVlZDogNTAwLFxuICBzbGlkZXNUb1Nob3c6IDEuMjUsXG4gIHNsaWRlc1RvU2Nyb2xsOiAwLjUsXG4gIGNlbnRlck1vZGU6IHRydWUsXG4gIGNlbnRlclBhZGRpbmc6IFwiNHB4XCJcbn07XG5cbmZ1bmN0aW9uIE1lbWJlcnNoaXBQbGFucygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XG4gICAgICAgIDxoMz5VcGdyYWRlIHlvdXIgYWNjb3VudDwvaDM+XG5cbiAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICBNZW1iZXJzaGlwIDxzcGFuPiBQbGFuczwvc3Bhbj57XCIgXCJ9XG4gICAgICAgIDwvc3Ryb25nPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCIgey4uLnNldHRpbmdzfT5cbiAgICAgICAge21lbWJlcnNoaXBEZXRhaWwubWFwKGZ1bmN0aW9uKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb25Db2xvcixcbiAgICAgICAgICAgIGxpc3QsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICBidXR0b25Db2xvcixcbiAgICAgICAgICAgIHRleHRDb2xvcixcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIGluZGV4XG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvciB9fSBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1oZWFkaW5nXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogdGV4dENvbG9yLCBib3JkZXJDb2xvciB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAge2xpc3QubWFwKGZ1bmN0aW9uKHsgdGV4dCwgaWNvbkNvbG9yLCB0ZXh0Q29sb3IgfSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogMzQgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBpY29uQ29sb3IgfX0+aWNvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiIHN0eWxlPXt7IGNvbG9yOiB0ZXh0Q29sb3IgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPmJyb3dzZSBtZW1iZXJzaGlwPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiA0MnB4IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL3Blb3BsZV90b2dldGhlcl9iYWNrLmpwZ1wiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdC14OiByZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b207XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDI0cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGluZyB7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6ICM4YTlkYjA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBjb2xvcjogI2Q5NDc1YztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA2cHggLTFweCByZ2JhKDM4LCA0OCwgMTQwLCAwLjIpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDcwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWhlYWRpbmcge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBjb2xvcjogIzE0MjAyYjtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZDtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMHJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMCAtNjBweDtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgYm90dG9tOiAzMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkOTQ3NWM7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQ2FiaW5cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyc2hpcFBsYW5zO1xuIl19 */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MembershipPlans.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (MembershipPlans);

/***/ })

})
//# sourceMappingURL=index.js.00e8046931949c5665d0.hot-update.js.map