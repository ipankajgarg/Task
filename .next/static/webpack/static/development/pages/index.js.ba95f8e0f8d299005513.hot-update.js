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
    className: "jsx-1491825703" + " " + "container simple-steps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1491825703",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Three Simple Steps to"), __jsx("h2", {
    className: "jsx-1491825703",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Find the ", __jsx("strong", {
    className: "jsx-1491825703",
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
      className: "jsx-1491825703" + " " + "list-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      style: {
        backgroundPosition: posiiton
      },
      className: "jsx-1491825703" + " " + "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1491825703" + " " + "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-1491825703",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "0".concat(index + 1)), text));
  })), __jsx("div", {
    style: {
      position: "absolute",
      bottom: 70,
      transform: " translate(-50%, 0)",
      left: "50%",
      width: "100%",
      textAlign: "center"
    },
    className: "jsx-1491825703",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onPress: function onPress() {
      return console.log("pressed");
    },
    content: "Get Started by Registering Free",
    styles: {
      fontSize: 14,
      color: "#FFF",
      padding: "10px 50px",
      background: "#d9475c",
      fontWeight: 600,
      border: "1px solid transparent",
      lineHeight: 1.5,
      borderRadius: " 0.25rem",
      fontFamily: "'Cabin', sans-serif"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1491825703",
    __self: this
  }, ".list-container.jsx-1491825703{text-align:center;margin-top:30px;}.container.jsx-1491825703{padding:32px 20px;background:#f8f9f9;position:relative;}h3.jsx-1491825703{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;text-transform:uppercase;}h2.jsx-1491825703{font-size:20px;font-weight:100;}h2.jsx-1491825703 strong.jsx-1491825703{padding:0 0 0 5px;color:#d9475c;}.image.jsx-1491825703{background:url(\"../../static/images/how_it_works.svg\") no-repeat;width:210px;height:110px;display:inline-block;}.text.jsx-1491825703{font-weight:600;font-size:14px;color:#14202b;}.text.jsx-1491825703 span.jsx-1491825703{font-style:normal;color:#d9475c;}.slick-dots.jsx-1491825703 .slick-active.jsx-1491825703{background:#d9475c;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9TaW1wbGVTdGVwcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGtCLEFBRzZCLEFBS0EsQUFNSCxBQVFBLEFBSUcsQUFLK0MsQUFPakQsQUFLRSxBQUlDLGVBaENILEFBUUEsQ0FnQkQsRUFuQ0MsQUFLRyxBQWtCTCxBQWlCQSxDQUloQixZQWhDZ0IsQUFRaEIsQUFnQmdCLENBWmhCLEFBaUJBLEVBeENBLEdBS29CLFFBT0EsQUF3QnBCLFVBOUJBLFFBT3VCLEVBY1QsWUFDQyxhQUNRLHFCQUN2QixxREFoQjJCLHlCQUMzQiIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvU2ltcGxlU3RlcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHsgc2ltcGxlU3RlcHMgfSBmcm9tIFwiLi4vLi4vc3RhdGljL2RhdGFcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbW1vbi9CdXR0b25cIjtcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG4gIGRvdHM6IHRydWUsXG4gIGluZmluaXRlOiB0cnVlLFxuICBzcGVlZDogNTAwLFxuICBzbGlkZXNUb1Nob3c6IDEsXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICBhcnJvd3M6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBTaW1wbGVTdGVwcygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzaW1wbGUtc3RlcHNcIj5cbiAgICAgIDxoMz5UaHJlZSBTaW1wbGUgU3RlcHMgdG88L2gzPlxuICAgICAgPGgyPlxuICAgICAgICBGaW5kIHRoZSA8c3Ryb25nPk9uZSBmb3IgWW91PC9zdHJvbmc+XG4gICAgICA8L2gyPlxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICB7c2ltcGxlU3RlcHMubWFwKGZ1bmN0aW9uKHsgdGV4dCwgcG9zaWl0b24gfSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRQb3NpdGlvbjogcG9zaWl0b24gfX1cbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57YDAke2luZGV4ICsgMX1gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvU2xpZGVyPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgYm90dG9tOiA3MCxcbiAgICAgICAgICB0cmFuc2Zvcm06IFwiIHRyYW5zbGF0ZSgtNTAlLCAwKVwiLFxuICAgICAgICAgIGxlZnQ6IFwiNTAlXCIsXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25QcmVzcz17KCkgPT4gY29uc29sZS5sb2coXCJwcmVzc2VkXCIpfVxuICAgICAgICAgIGNvbnRlbnQ9XCJHZXQgU3RhcnRlZCBieSBSZWdpc3RlcmluZyBGcmVlXCJcbiAgICAgICAgICBzdHlsZXM9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCA1MHB4XCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkOTQ3NWNcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIgMC4yNXJlbVwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCInQ2FiaW4nLCBzYW5zLXNlcmlmXCJcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5saXN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAzMnB4IDIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmOTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6ICM4YTlkYjA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgfVxuICAgICAgICBoMiBzdHJvbmcge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbiAgICAgICAgICBjb2xvcjogI2Q5NDc1YztcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vc3RhdGljL2ltYWdlcy9ob3dfaXRfd29ya3Muc3ZnXCIpIG5vLXJlcGVhdDtcbiAgICAgICAgICB3aWR0aDogMjEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6ICMxNDIwMmI7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQgc3BhbiB7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGNvbG9yOiAjZDk0NzVjO1xuICAgICAgICB9XG4gICAgICAgIC5zbGljay1kb3RzIC5zbGljay1hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkOTQ3NWM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gLnNsaWNrLXNsaWRlciB7XG4gICAgICAgIC8vICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gLnNsaWNrLWFjdGl2ZSB7XG4gICAgICAgIC8vICAgYmFja2dyb3VuZDogI2Q5NDc1YztcbiAgICAgICAgLy8gfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVTdGVwcztcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/SimpleSteps.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (SimpleSteps);

/***/ })

})
//# sourceMappingURL=index.js.ba95f8e0f8d299005513.hot-update.js.map