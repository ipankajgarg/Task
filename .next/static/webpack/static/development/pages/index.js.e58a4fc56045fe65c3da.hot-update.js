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
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
















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

  var floatReg = __jsx("div", {
    className: "w-100 regFloatBtn",
    id: "floatDivBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("div", {
    className: "d-flex align-items-center floatDiv",
    onClick: function onClick(e) {
      _this.GAObject.gaTrack("", "jsms", "Homepage_R", "registration floater ");

      window.location.href = "/profile/registration_new.php?source=home_float";
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Register Free"), __jsx("span", {
    className: "nMargin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    id: "floatDivBtn",
    className: "jsx-1541247752" + " " + "w-100 regFloatBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick(e) {
      _this.GAObject.gaTrack("", "jsms", "Homepage_R", "registration floater ");

      window.location.href = "/profile/registration_new.php?source=home_float";
    },
    className: "jsx-1541247752" + " " + "d-flex align-items-center floatDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1541247752",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Register Free"), __jsx("span", {
    className: "jsx-1541247752" + " " + "nMargin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }))), __jsx(_bannerSection_Banner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx(_VerificationDetail__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx(_SimpleSteps__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx(_PrivacySetting__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx(_MembershipPlans__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), __jsx(_JSExclusive__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx(_MatchProfiles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx(_AboutApp__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), __jsx(_Community__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1541247752",
    __self: this
  }, "div.jsx-1541247752{outline:0;}div.jsx-1541247752:focus{outline:0;}.d-flex.jsx-1541247752{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;margin:0 auto;}.align-items-center.jsx-1541247752{-webkit-align-items:center !important;-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important;}.w-100.jsx-1541247752{width:100% !important;}.floatDiv.jsx-1541247752{background:rgb(217,71,92);color:rgb(255,255,255);padding:8px;border-radius:24px;line-height:25px;font-size:14px;font-weight:600;width:142px;box-shadow:0 3px 6px 0 rgba(0,0,0,0.2);}.regFloatBtn.jsx-1541247752{position:fixed;bottom:-80px;z-index:10;-webkit-transition:all 0.4s cubic-bezier(0.165,0.84,0.44,1);transition:all 0.4s cubic-bezier(0.165,0.84,0.44,1);}.bottom20.jsx-1541247752{bottom:20px;}.nMargin.jsx-1541247752{margin:0 0 1px -10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9Ib21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtIa0IsQUFHcUIsQUFHQSxBQUdjLEFBSU0sQUFHUixBQUdNLEFBV2IsQUFNSCxBQUdTLFVBbkN2QixBQUdBLEVBOEJBLEdBTmUsTUFTZixDQXZCQSxJQUcyQixFQVlkLFdBQzRDLFVBWjNDLFlBQ08sbUJBQ0YsaUJBQ0YsZUFDQyxNQWZGLFVBZ0JGLElBZmQsS0FHQSxHQWE0QyxXQU81Qyw0QkFOQSIsImZpbGUiOiIvaG9tZS9wYW5rYWovRG9jdW1lbnRzL215LXdvcmsvd2l0aC1yZWR1eC10aHVuay9jb21wb25lbnRzL2hvbWUvSG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmFubmVyIGZyb20gXCIuL2Jhbm5lclNlY3Rpb24vQmFubmVyXCI7XG5pbXBvcnQgQ2FwdGlvbiBmcm9tIFwiLi9DYXB0aW9uXCI7XG5pbXBvcnQgTWVtYmVyc2hpcFBsYW5zIGZyb20gXCIuL01lbWJlcnNoaXBQbGFuc1wiO1xuaW1wb3J0IE1hdGNoUHJvZmlsZXMgZnJvbSBcIi4vTWF0Y2hQcm9maWxlc1wiO1xuaW1wb3J0IERvd25sb2FkQXBwIGZyb20gXCIuL0Rvd25sb2FkQXBwXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vQWJvdXRcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgQnJvd3NlTWF0cmltb255UHJvZmlsZXMgZnJvbSBcIi4vQnJvd3NlTWF0cmltb255UHJvZmlsZXNcIjtcbmltcG9ydCBWZXJpZmljYXRpb25EZXRhaWwgZnJvbSBcIi4vVmVyaWZpY2F0aW9uRGV0YWlsXCI7XG5pbXBvcnQgU2ltcGxlU3RlcHMgZnJvbSBcIi4vU2ltcGxlU3RlcHNcIjtcbmltcG9ydCBQcml2YWN5U2V0dGluZyBmcm9tIFwiLi9Qcml2YWN5U2V0dGluZ1wiO1xuaW1wb3J0IEpTRXhjbHVzaXZlIGZyb20gXCIuL0pTRXhjbHVzaXZlXCI7XG5pbXBvcnQgQWJvdXRBcHAgZnJvbSBcIi4vQWJvdXRBcHBcIjtcbmltcG9ydCBDb21tdW5pdHkgZnJvbSBcIi4vQ29tbXVuaXR5XCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpbWFnZXNMb2FkaW5nQWZ0ZXJTY3JvbGwsIGNoYW5nZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICB2YXIgaW1hZ2VzQ2FsbGVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gaXNBbnlQYXJ0T2ZFbGVtZW50SW5WaWV3cG9ydChlbCkge1xuICAgIGxldCByZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlbClbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IHdpbmRvd0hlaWdodCA9XG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICBsZXQgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgbGV0IHZlcnRJblZpZXcgPSByZWN0LnRvcCA8PSB3aW5kb3dIZWlnaHQgJiYgcmVjdC50b3AgKyByZWN0LmhlaWdodCA+PSAwO1xuICAgIGxldCBob3JJblZpZXcgPSByZWN0LmxlZnQgPD0gd2luZG93V2lkdGggJiYgcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCA+PSAwO1xuICAgIHJldHVybiB2ZXJ0SW5WaWV3ICYmIGhvckluVmlldztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVBhZ2VTY3JvbGwoKSB7XG4gICAgbGV0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyQ29udGFpbmVyXCIpO1xuICAgIGxldCBmbG9hdERpdkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxvYXREaXZCdG5cIik7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMzUwKSB7XG4gICAgICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlckJnMlwiKTtcbiAgICAgIGZsb2F0RGl2QnRuLmNsYXNzTGlzdC5hZGQoXCJib3R0b20yMFwiKTtcbiAgICAgIGlmICghaW1hZ2VzQ2FsbGVkKSB7XG4gICAgICAgIGNoYW5nZUxvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGltYWdlc0NhbGxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyQmcyXCIpO1xuICAgICAgZmxvYXREaXZCdG4uY2xhc3NMaXN0LnJlbW92ZShcImJvdHRvbTIwXCIpO1xuICAgIH1cbiAgICBpZiAoaXNBbnlQYXJ0T2ZFbGVtZW50SW5WaWV3cG9ydChcImZvb3RlclwiKSkge1xuICAgICAgZmxvYXREaXZCdG4uY2xhc3NMaXN0LnJlbW92ZShcImJvdHRvbTIwXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIGRlbGF5KSB7XG4gICAgdmFyIGluRGVib3VuY2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgLy8gY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgICBjbGVhclRpbWVvdXQoaW5EZWJvdW5jZSk7XG4gICAgICBpbkRlYm91bmNlID0gc2V0VGltZW91dCgoKSA9PiBmdW5jKCksIGRlbGF5KTtcbiAgICB9O1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgc2NIYW5kbGVyID0gZGVib3VuY2UoaGFuZGxlUGFnZVNjcm9sbCwgNTApO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjSGFuZGxlciwgdHJ1ZSk7XG4gIH0sIFtdKTtcbiAgbGV0IGZsb2F0UmVnID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcmVnRmxvYXRCdG5cIiBpZD1cImZsb2F0RGl2QnRuXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZmxvYXREaXZcIlxuICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICB0aGlzLkdBT2JqZWN0LmdhVHJhY2soXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgXCJqc21zXCIsXG4gICAgICAgICAgICBcIkhvbWVwYWdlX1JcIixcbiAgICAgICAgICAgIFwicmVnaXN0cmF0aW9uIGZsb2F0ZXIgXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID1cbiAgICAgICAgICAgIFwiL3Byb2ZpbGUvcmVnaXN0cmF0aW9uX25ldy5waHA/c291cmNlPWhvbWVfZmxvYXRcIjtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPHNwYW4+UmVnaXN0ZXIgRnJlZTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibk1hcmdpblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcmVnRmxvYXRCdG5cIiBpZD1cImZsb2F0RGl2QnRuXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGZsb2F0RGl2XCJcbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgIHRoaXMuR0FPYmplY3QuZ2FUcmFjayhcbiAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgXCJqc21zXCIsXG4gICAgICAgICAgICAgIFwiSG9tZXBhZ2VfUlwiLFxuICAgICAgICAgICAgICBcInJlZ2lzdHJhdGlvbiBmbG9hdGVyIFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPVxuICAgICAgICAgICAgICBcIi9wcm9maWxlL3JlZ2lzdHJhdGlvbl9uZXcucGhwP3NvdXJjZT1ob21lX2Zsb2F0XCI7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuPlJlZ2lzdGVyIEZyZWU8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibk1hcmdpblwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCYW5uZXIgLz5cbiAgICAgIDxWZXJpZmljYXRpb25EZXRhaWwgLz5cbiAgICAgIDxTaW1wbGVTdGVwcyAvPlxuICAgICAgPFByaXZhY3lTZXR0aW5nIC8+XG4gICAgICA8TWVtYmVyc2hpcFBsYW5zIC8+XG4gICAgICA8SlNFeGNsdXNpdmUgLz5cbiAgICAgIDxNYXRjaFByb2ZpbGVzIC8+XG4gICAgICA8QWJvdXRBcHAgLz5cblxuICAgICAgPENvbW11bml0eSAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIH1cbiAgICAgICAgZGl2OmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5kLWZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLnctMTAwIHtcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5mbG9hdERpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIxNywgNzEsIDkyKTtcbiAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHdpZHRoOiAxNDJweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIH1cbiAgICAgICAgLnJlZ0Zsb2F0QnRuIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAtODBweDtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xuICAgICAgICB9XG4gICAgICAgIC5ib3R0b20yMCB7XG4gICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uTWFyZ2luIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcHggLTEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/Home.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.e58a4fc56045fe65c3da.hot-update.js.map