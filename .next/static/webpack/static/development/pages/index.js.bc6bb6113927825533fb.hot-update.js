webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/SimpleSteps.js":
/*!****************************************!*\
  !*** ./components/home/SimpleSteps.js ***!
  \****************************************/
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

var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/SimpleSteps.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

function SimpleSteps() {
  return __jsx("div", {
    className: "jsx-3114935493" + " " + "container simple-steps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3114935493",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Three Simple Steps to"), __jsx("h2", {
    className: "jsx-3114935493",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Find the ", __jsx("strong", {
    className: "jsx-3114935493",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "One for You")), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), _static_data__WEBPACK_IMPORTED_MODULE_4__["simpleSteps"].map(function (_ref, index) {
    var text = _ref.text,
        posiiton = _ref.posiiton;
    return __jsx("div", {
      className: "jsx-3114935493" + " " + "list-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      style: {
        backgroundPosition: posiiton
      },
      className: "jsx-3114935493" + " " + "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-3114935493" + " " + "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-3114935493",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "0".concat(index + 1)), text));
  })), __jsx("div", {
    className: "jsx-3114935493" + " " + "button-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("button", {
    className: "jsx-3114935493",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, " Get Started by Registering Free")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3114935493",
    __self: this
  }, ".list-container.jsx-3114935493{text-align:center;margin-top:30px;}.container.jsx-3114935493{padding:32px 20px;background:#f8f9f9;position:relative;}h3.jsx-3114935493{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;text-transform:uppercase;}h2.jsx-3114935493{font-size:20px;font-weight:100;}h2.jsx-3114935493 strong.jsx-3114935493{padding:0 0 0 5px;color:#d9475c;}.image.jsx-3114935493{background:url(\"../../static/images/how_it_works.svg\") no-repeat;width:210px;height:110px;display:inline-block;}.text.jsx-3114935493{font-weight:600;font-size:14px;color:#14202b;}.text.jsx-3114935493 span.jsx-3114935493{font-style:normal;color:#d9475c;}.button-container.jsx-3114935493{position:absolute;bottom:80px;width:100%;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 20px;box-sizing:border-box;}button.jsx-3114935493{width:100% padding:10px 20px;font-size:14px;color:#fff;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;background:#d9475c;display:inline-block;font-weight:600;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;line-height:1.5;border-radius:0.25rem;font-family:\"Cabin\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9TaW1wbGVTdGVwcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ2tCLEFBRzZCLEFBS0EsQUFNSCxBQVFBLEFBSUcsQUFLK0MsQUFPakQsQUFLRSxBQUlBLEFBWUQsZUE1Q0QsQUFRQSxDQWdCRCxFQW5DQyxBQUtHLEFBa0JMLEFBaUJBLEFBSUYsV0FZRyxDQVhKLENBakNHLEFBUWhCLEFBZ0JnQixDQVpoQixBQWlCQSxFQXhDQSxHQUtvQixJQXdDWCxHQVdJLENBNUNPLEFBd0JwQixHQVVlLE9BeENmLEFBbURtQixRQTVDSSxFQWNULFlBQ0MsYUFDUSxxQkFDdkIsV0FpQnlCLGtCQVlKLG1CQUNFLEtBOUNJLGdCQStDVCxTQTlDbEIsT0ErQ3dCLHNCQUNMLEdBZkYsZUFDTyxzQkFDMUIsNkNBY2lDLDZCQUNiLGdCQUNNLHNCQUNVLCtCQUNsQyIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvU2ltcGxlU3RlcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHsgc2ltcGxlU3RlcHMgfSBmcm9tIFwiLi4vLi4vc3RhdGljL2RhdGFcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbW1vbi9CdXR0b25cIjtcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG4gIGRvdHM6IHRydWUsXG4gIGluZmluaXRlOiB0cnVlLFxuICBzcGVlZDogNTAwLFxuICBzbGlkZXNUb1Nob3c6IDEsXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICBhcnJvd3M6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBTaW1wbGVTdGVwcygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzaW1wbGUtc3RlcHNcIj5cbiAgICAgIDxoMz5UaHJlZSBTaW1wbGUgU3RlcHMgdG88L2gzPlxuICAgICAgPGgyPlxuICAgICAgICBGaW5kIHRoZSA8c3Ryb25nPk9uZSBmb3IgWW91PC9zdHJvbmc+XG4gICAgICA8L2gyPlxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICB7c2ltcGxlU3RlcHMubWFwKGZ1bmN0aW9uKHsgdGV4dCwgcG9zaWl0b24gfSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRQb3NpdGlvbjogcG9zaWl0b24gfX1cbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57YDAke2luZGV4ICsgMX1gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvU2xpZGVyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbj4gR2V0IFN0YXJ0ZWQgYnkgUmVnaXN0ZXJpbmcgRnJlZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmxpc3QtY29udGFpbmVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDMycHggMjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWY5O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogIzhhOWRiMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICB9XG4gICAgICAgIGgyIHN0cm9uZyB7XG4gICAgICAgICAgcGFkZGluZzogMCAwIDAgNXB4O1xuICAgICAgICAgIGNvbG9yOiAjZDk0NzVjO1xuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2hvd19pdF93b3Jrcy5zdmdcIikgbm8tcmVwZWF0O1xuICAgICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogIzE0MjAyYjtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCBzcGFuIHtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgY29sb3I6ICNkOTQ3NWM7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbi1jb250YWluZXJ7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogODBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDoxMDAlXG4gICAgICAgICAgcGFkZGluZzoxMHB4IDIwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgIC8qIHBhZGRpbmc6IDEwcHggMjBweDsgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDk0NzVjO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkNhYmluXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlU3RlcHM7XG4iXX0= */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/SimpleSteps.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (SimpleSteps);

/***/ })

})
//# sourceMappingURL=index.js.bc6bb6113927825533fb.hot-update.js.map