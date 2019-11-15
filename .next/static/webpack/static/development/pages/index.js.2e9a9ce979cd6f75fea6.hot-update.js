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
/* harmony import */ var _static_svgHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/svgHandler */ "./static/svgHandler.js");

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
  }), _static_data__WEBPACK_IMPORTED_MODULE_4__["membershipDetail"].map(function (_ref, index) {
    var iconColor = _ref.iconColor,
        list = _ref.list,
        backgroundColor = _ref.backgroundColor,
        buttonTextColor = _ref.buttonTextColor,
        textColor = _ref.textColor,
        title = _ref.title,
        borderColor = _ref.borderColor,
        buttonText = _ref.buttonText,
        buttonColor = _ref.buttonColor;
    return __jsx("div", {
      style: {
        backgroundColor: backgroundColor
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
        borderColor: borderColor
      },
      className: "jsx-1879171502" + " " + "card-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, title), list.map(function (_ref2) {
      var text = _ref2.text,
          iconColor = _ref2.iconColor,
          textColor = _ref2.textColor,
          iconStyle = _ref2.iconStyle,
          iconType = _ref2.iconType;
      return __jsx("div", {
        style: {
          height: 34
        },
        className: "jsx-1879171502",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(_static_svgHandler__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: iconType,
        css: iconStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), __jsx("span", {
        style: {
          color: textColor
        },
        className: "jsx-1879171502" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
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
        lineNumber: 72
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
        lineNumber: 73
      },
      __self: this
    }, buttonText)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1879171502",
    __self: this
  }, ".container.jsx-1879171502{padding:42px 0px;background-image:url(\"../../static/images/people_together_back.jpg\");background-repeat-x:repeat;background-position:left bottom;background-size:contain;}.slider.jsx-1879171502{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow-x:scroll;padding:0px 24px;margin-top:20px;}.heading.jsx-1879171502{padding:0px 24px;}h3.jsx-1879171502{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;text-transform:uppercase;}span.jsx-1879171502{color:black;}strong.jsx-1879171502{font-size:20px;color:#d9475c;}.card.jsx-1879171502{box-shadow:0 2px 6px -1px rgba(38,48,140,0.2);border-radius:4px;margin-right:15px;padding:24px;min-width:70%;}.text.jsx-1879171502{font-size:14px;font-weight:500;padding-left:8px;}.card-heading.jsx-1879171502{font-size:20px;color:#14202b;font-weight:500;border-top:2px solid;padding:0.5rem 0rem;display:inline-block;}button.jsx-1879171502{font-size:14px;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;padding:10px 20px;margin:0 0 0 -60px;left:50%;bottom:30px;display:inline-block;font-weight:600;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;line-height:1.5;border-radius:0.25rem;font-family:\"Cabin\",sans-serif;font-weight:700;color:#fff;line-height:14px;margin:auto !important;width:100% !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NZW1iZXJzaGlwUGxhbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0ZrQixBQUc0QixBQVFKLEFBTUksQUFJRixBQVFILEFBR0csQUFLa0MsQUFRbEMsQUFNQSxBQVNBLFlBOUJqQixHQVJrQixBQVdGLEFBYUUsQUFNRixBQVVHLEVBMURvRCxBQWN2RSxZQWdCQSxBQW1Ca0IsRUE5QkYsQUF3QkcsY0F2QkMsQUE4QkcsQ0FoQkgsRUFVcEIsZUF2QnVCLENBY0gsRUFnQkUsUUEzQ0YsUUE0QkwsSUFuQ2MsQUFtRE4sTUEzQ0osR0E0QkgsS0FzQkksT0FOcEIsRUEzQ2tCLEFBNEJsQixJQXBDa0MsS0EwRGIsT0FqRHJCLFlBa0RXLFFBMURlLENBMkRaLFlBRVMsTUExQ0ksS0FsQjNCLFVBNkRrQixVQTFDbEIsTUEyQ3dCLHNCQUNMLHFGQUNZLDZCQUNiLGdCQUNNLHNCQUNVLCtCQUVoQixnQkFDTCxXQUNNLGlCQUNNLHVCQUNELHNCQUN4QiIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvTWVtYmVyc2hpcFBsYW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbi8vaW1wb3J0IE1lbWJlcnNoaXBEZXRhaWwgZnJvbSBcIi4vT2xkTWVtYmVyc2hpcERldGFpbFwiO1xuaW1wb3J0IHsgbWVtYmVyc2hpcERldGFpbCB9IGZyb20gXCIuLi8uLi9zdGF0aWMvZGF0YVwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uL3N0YXRpYy9zdmdIYW5kbGVyXCI7XG5cbmNvbnN0IHNldHRpbmdzID0ge1xuICBkb3RzOiBmYWxzZSxcbiAgc3dpcGU6IHRydWUsXG4gIHRvdWNoTW92ZTogdHJ1ZSxcbiAgaW5maW5pdGU6IGZhbHNlLFxuICBhcnJvd3M6IGZhbHNlLFxuICBzcGVlZDogNTAwLFxuICBzbGlkZXNUb1Nob3c6IDEuMjUsXG4gIHNsaWRlc1RvU2Nyb2xsOiAwLjUsXG4gIGNlbnRlck1vZGU6IHRydWUsXG4gIGNlbnRlclBhZGRpbmc6IFwiNHB4XCJcbn07XG5cbmZ1bmN0aW9uIE1lbWJlcnNoaXBQbGFucygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XG4gICAgICAgIDxoMz5VcGdyYWRlIHlvdXIgYWNjb3VudDwvaDM+XG5cbiAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICBNZW1iZXJzaGlwIDxzcGFuPiBQbGFuczwvc3Bhbj57XCIgXCJ9XG4gICAgICAgIDwvc3Ryb25nPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCIgey4uLnNldHRpbmdzfT5cbiAgICAgICAge21lbWJlcnNoaXBEZXRhaWwubWFwKGZ1bmN0aW9uKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb25Db2xvcixcbiAgICAgICAgICAgIGxpc3QsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICBidXR0b25UZXh0Q29sb3IsXG4gICAgICAgICAgICB0ZXh0Q29sb3IsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgYnV0dG9uVGV4dCxcbiAgICAgICAgICAgIGJ1dHRvbkNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbmRleFxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3IgfX0gY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaGVhZGluZ1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IHRleHRDb2xvciwgYm9yZGVyQ29sb3IgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgIHtsaXN0Lm1hcChmdW5jdGlvbih7XG4gICAgICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgICAgICBpY29uQ29sb3IsXG4gICAgICAgICAgICAgICAgdGV4dENvbG9yLFxuICAgICAgICAgICAgICAgIGljb25TdHlsZSxcbiAgICAgICAgICAgICAgICBpY29uVHlwZVxuICAgICAgICAgICAgICB9KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAzNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBpY29uQ29sb3IgfX0+aWNvbjwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9e2ljb25UeXBlfSBjc3M9e2ljb25TdHlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiIHN0eWxlPXt7IGNvbG9yOiB0ZXh0Q29sb3IgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJ1dHRvbkNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYnV0dG9uVGV4dENvbG9yXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtidXR0b25UZXh0fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZzogNDJweCAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vc3RhdGljL2ltYWdlcy9wZW9wbGVfdG9nZXRoZXJfYmFjay5qcGdcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQteDogcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbGlkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAyNHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRpbmcge1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiAjOGE5ZGIwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgY29sb3I6ICNkOTQ3NWM7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IC0xcHggcmdiYSgzOCwgNDgsIDE0MCwgMC4yKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgICAgbWluLXdpZHRoOiA3MCU7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1oZWFkaW5nIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgY29sb3I6ICMxNDIwMmI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQ7XG4gICAgICAgICAgcGFkZGluZzogMC41cmVtIDByZW07XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgLy8gY29sb3I6ICNmZmY7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogMCAwIDAgLTYwcHg7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIGJvdHRvbTogMzBweDtcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZDk0NzVjO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkNhYmluXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbWJlcnNoaXBQbGFucztcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MembershipPlans.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (MembershipPlans);

/***/ })

})
//# sourceMappingURL=index.js.2e9a9ce979cd6f75fea6.hot-update.js.map