webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/Home.js":
/*!*********************************!*\
  !*** ./components/home/Home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bannerSection_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bannerSection/Banner */ "./components/home/bannerSection/Banner.js");
/* harmony import */ var _Caption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Caption */ "./components/home/Caption.js");
/* harmony import */ var _MembershipPlans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MembershipPlans */ "./components/home/MembershipPlans.js");
/* harmony import */ var _MatchProfiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MatchProfiles */ "./components/home/MatchProfiles.js");
/* harmony import */ var _DownloadApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DownloadApp */ "./components/home/DownloadApp.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./About */ "./components/home/About.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Footer */ "./components/home/Footer.js");
/* harmony import */ var _BrowseMatrimonyProfiles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BrowseMatrimonyProfiles */ "./components/home/BrowseMatrimonyProfiles.js");
/* harmony import */ var _VerificationDetail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VerificationDetail */ "./components/home/VerificationDetail.js");
/* harmony import */ var _SimpleSteps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SimpleSteps */ "./components/home/SimpleSteps.js");
/* harmony import */ var _PrivacySetting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PrivacySetting */ "./components/home/PrivacySetting.js");
/* harmony import */ var _JSExclusive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./JSExclusive */ "./components/home/JSExclusive.js");
/* harmony import */ var _AboutApp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AboutApp */ "./components/home/AboutApp.js");
/* harmony import */ var _Community__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Community */ "./components/home/Community.js");
/* harmony import */ var _static_svgHandler__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../static/svgHandler */ "./static/svgHandler.js");
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
















var iStyle = {
  height: "22px",
  verticalAlign: "middle",
  width: "22px",
  color: "#fff"
};

function Home() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      imagesLoadingAfterScroll = _useState[0],
      changeLoading = _useState[1];

  var imagesCalled = false;

  function isAnyPartOfElementInViewport(el) {
    var rect = document.getElementsByClassName(el)[0].getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    var vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
    var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
    return vertInView && horInView;
  }

  function handlePageScroll() {
    var headerContainer = document.getElementById("headerContainer");
    var floatDivBtn = document.getElementById("floatDivBtn");

    if (window.scrollY > 350) {
      headerContainer.classList.add("headerBg2");
      floatDivBtn.classList.add("bottom20");

      if (!imagesCalled) {
        changeLoading(true);
        imagesCalled = true;
      }
    } else {
      headerContainer.classList.remove("headerBg2");
      floatDivBtn.classList.remove("bottom20");
    }

    if (isAnyPartOfElementInViewport("footer")) {
      floatDivBtn.classList.remove("bottom20");
    }
  }

  function debounce(func, delay) {
    var inDebounce;
    return function () {
      // const context = this;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(function () {
        return func();
      }, delay);
    };
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var scHandler = debounce(handlePageScroll, 50);
    window.addEventListener("scroll", scHandler, true);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    id: "floatDivBtn",
    className: "jsx-553295745" + " " + "w-100 regFloatBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick(e) {
      _this.GAObject.gaTrack("", "jsms", "Homepage_R", "registration floater ");

      window.location.href = "/profile/registration_new.php?source=home_float";
    },
    className: "jsx-553295745" + " " + "d-flex align-items-center floatDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-553295745",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Register Free"), __jsx("span", {
    className: "jsx-553295745" + " " + "nMargin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_static_svgHandler__WEBPACK_IMPORTED_MODULE_16__["default"], {
    type: "chevron_right",
    css: iStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })))), __jsx(_bannerSection_Banner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx(_VerificationDetail__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx(_SimpleSteps__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx(_PrivacySetting__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx(_MembershipPlans__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx(_JSExclusive__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx(_MatchProfiles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx(_AboutApp__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx(_Community__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "553295745",
    __self: this
  }, "div.jsx-553295745{outline:0;}div.jsx-553295745:focus{outline:0;}.d-flex.jsx-553295745{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;margin:0 auto;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.align-items-center.jsx-553295745{-webkit-align-items:center !important;-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important;}.w-100.jsx-553295745{width:100% !important;}.floatDiv.jsx-553295745{background:rgb(217,71,92);color:rgb(255,255,255);padding:8px;border-radius:24px;line-height:25px;font-size:14px;font-weight:600;width:142px;box-shadow:0 3px 6px 0 rgba(0,0,0,0.2);}.regFloatBtn.jsx-553295745{position:fixed;bottom:-80px;z-index:10;-webkit-transition:all 0.4s cubic-bezier(0.165,0.84,0.44,1);transition:all 0.4s cubic-bezier(0.165,0.84,0.44,1);}.bottom20.jsx-553295745{bottom:20px;}.nMargin.jsx-553295745{margin:0 0 1px -10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9Ib21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdHa0IsQUFHcUIsQUFHQSxBQUdjLEFBS00sQUFHUixBQUdNLEFBV2IsQUFNSCxBQUdTLFVBcEN2QixBQUdBLEVBK0JBLEdBTmUsTUFTZixDQXZCQSxJQUcyQixFQVlkLFdBQzRDLFVBWjNDLFlBQ08sbUJBQ0YsaUJBQ0YsZUFDQyxNQWhCRixVQWlCRixJQWhCaUIsS0FJL0IsR0FhNEMsV0FPNUMsNEJBTkEsNEVBakJBIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9Ib21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4vYmFubmVyU2VjdGlvbi9CYW5uZXJcIjtcbmltcG9ydCBDYXB0aW9uIGZyb20gXCIuL0NhcHRpb25cIjtcbmltcG9ydCBNZW1iZXJzaGlwUGxhbnMgZnJvbSBcIi4vTWVtYmVyc2hpcFBsYW5zXCI7XG5pbXBvcnQgTWF0Y2hQcm9maWxlcyBmcm9tIFwiLi9NYXRjaFByb2ZpbGVzXCI7XG5pbXBvcnQgRG93bmxvYWRBcHAgZnJvbSBcIi4vRG93bmxvYWRBcHBcIjtcbmltcG9ydCBBYm91dCBmcm9tIFwiLi9BYm91dFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBCcm93c2VNYXRyaW1vbnlQcm9maWxlcyBmcm9tIFwiLi9Ccm93c2VNYXRyaW1vbnlQcm9maWxlc1wiO1xuaW1wb3J0IFZlcmlmaWNhdGlvbkRldGFpbCBmcm9tIFwiLi9WZXJpZmljYXRpb25EZXRhaWxcIjtcbmltcG9ydCBTaW1wbGVTdGVwcyBmcm9tIFwiLi9TaW1wbGVTdGVwc1wiO1xuaW1wb3J0IFByaXZhY3lTZXR0aW5nIGZyb20gXCIuL1ByaXZhY3lTZXR0aW5nXCI7XG5pbXBvcnQgSlNFeGNsdXNpdmUgZnJvbSBcIi4vSlNFeGNsdXNpdmVcIjtcbmltcG9ydCBBYm91dEFwcCBmcm9tIFwiLi9BYm91dEFwcFwiO1xuaW1wb3J0IENvbW11bml0eSBmcm9tIFwiLi9Db21tdW5pdHlcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9zdGF0aWMvc3ZnSGFuZGxlclwiO1xuXG5sZXQgaVN0eWxlID0ge1xuICBoZWlnaHQ6IFwiMjJweFwiLFxuICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICB3aWR0aDogXCIyMnB4XCIsXG4gIGNvbG9yOiBcIiNmZmZcIlxufTtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2ltYWdlc0xvYWRpbmdBZnRlclNjcm9sbCwgY2hhbmdlTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHZhciBpbWFnZXNDYWxsZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBpc0FueVBhcnRPZkVsZW1lbnRJblZpZXdwb3J0KGVsKSB7XG4gICAgbGV0IHJlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGVsKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgd2luZG93SGVpZ2h0ID1cbiAgICAgIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICBsZXQgdmVydEluVmlldyA9IHJlY3QudG9wIDw9IHdpbmRvd0hlaWdodCAmJiByZWN0LnRvcCArIHJlY3QuaGVpZ2h0ID49IDA7XG4gICAgbGV0IGhvckluVmlldyA9IHJlY3QubGVmdCA8PSB3aW5kb3dXaWR0aCAmJiByZWN0LmxlZnQgKyByZWN0LndpZHRoID49IDA7XG4gICAgcmV0dXJuIHZlcnRJblZpZXcgJiYgaG9ySW5WaWV3O1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUGFnZVNjcm9sbCgpIHtcbiAgICBsZXQgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJDb250YWluZXJcIik7XG4gICAgbGV0IGZsb2F0RGl2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbG9hdERpdkJ0blwiKTtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiAzNTApIHtcbiAgICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyQmcyXCIpO1xuICAgICAgZmxvYXREaXZCdG4uY2xhc3NMaXN0LmFkZChcImJvdHRvbTIwXCIpO1xuICAgICAgaWYgKCFpbWFnZXNDYWxsZWQpIHtcbiAgICAgICAgY2hhbmdlTG9hZGluZyh0cnVlKTtcbiAgICAgICAgaW1hZ2VzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJCZzJcIik7XG4gICAgICBmbG9hdERpdkJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYm90dG9tMjBcIik7XG4gICAgfVxuICAgIGlmIChpc0FueVBhcnRPZkVsZW1lbnRJblZpZXdwb3J0KFwiZm9vdGVyXCIpKSB7XG4gICAgICBmbG9hdERpdkJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYm90dG9tMjBcIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgZGVsYXkpIHtcbiAgICB2YXIgaW5EZWJvdW5jZTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICAgIGNsZWFyVGltZW91dChpbkRlYm91bmNlKTtcbiAgICAgIGluRGVib3VuY2UgPSBzZXRUaW1lb3V0KCgpID0+IGZ1bmMoKSwgZGVsYXkpO1xuICAgIH07XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciBzY0hhbmRsZXIgPSBkZWJvdW5jZShoYW5kbGVQYWdlU2Nyb2xsLCA1MCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2NIYW5kbGVyLCB0cnVlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcmVnRmxvYXRCdG5cIiBpZD1cImZsb2F0RGl2QnRuXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGZsb2F0RGl2XCJcbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgIHRoaXMuR0FPYmplY3QuZ2FUcmFjayhcbiAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgXCJqc21zXCIsXG4gICAgICAgICAgICAgIFwiSG9tZXBhZ2VfUlwiLFxuICAgICAgICAgICAgICBcInJlZ2lzdHJhdGlvbiBmbG9hdGVyIFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPVxuICAgICAgICAgICAgICBcIi9wcm9maWxlL3JlZ2lzdHJhdGlvbl9uZXcucGhwP3NvdXJjZT1ob21lX2Zsb2F0XCI7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuPlJlZ2lzdGVyIEZyZWU8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibk1hcmdpblwiPlxuICAgICAgICAgICAgPEljb24gdHlwZT17XCJjaGV2cm9uX3JpZ2h0XCJ9IGNzcz17aVN0eWxlfSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCYW5uZXIgLz5cbiAgICAgIDxWZXJpZmljYXRpb25EZXRhaWwgLz5cbiAgICAgIDxTaW1wbGVTdGVwcyAvPlxuICAgICAgPFByaXZhY3lTZXR0aW5nIC8+XG4gICAgICA8TWVtYmVyc2hpcFBsYW5zIC8+XG4gICAgICA8SlNFeGNsdXNpdmUgLz5cbiAgICAgIDxNYXRjaFByb2ZpbGVzIC8+XG4gICAgICA8QWJvdXRBcHAgLz5cblxuICAgICAgPENvbW11bml0eSAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIH1cbiAgICAgICAgZGl2OmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5kLWZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuICAgICAgICAuYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLnctMTAwIHtcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5mbG9hdERpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIxNywgNzEsIDkyKTtcbiAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHdpZHRoOiAxNDJweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIH1cbiAgICAgICAgLnJlZ0Zsb2F0QnRuIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAtODBweDtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xuICAgICAgICB9XG4gICAgICAgIC5ib3R0b20yMCB7XG4gICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uTWFyZ2luIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcHggLTEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Home.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.a3d7406e6aa4a4b14032.hot-update.js.map