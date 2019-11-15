webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/MatchProfiles.js":
/*!******************************************!*\
  !*** ./components/home/MatchProfiles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MatchProfiles.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;


 //TODO get this data through api call

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

function MatchProfiles() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      profiles = _useState[0],
      setProfiles = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(
  /*#__PURE__*/
  Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("https://www.jeevansathi.com/successStory/filter?sourceType=homepage&sourceValue=homepage&fromSPA=1");

          case 3:
            response = _context.sent;
            console.log("res", response);
            setProfiles(response.data.result);
            _context.next = 10;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  })), []);
  return __jsx("div", {
    className: "jsx-1062075684" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1062075684" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1062075684",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Lakhs of Couples"), __jsx("span", {
    className: "jsx-1062075684",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Matched by ", __jsx("strong", {
    className: "jsx-1062075684",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, " Jeevansathi"))), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), profiles.map(function (profile) {
    return __jsx("a", {
      href: "story?year=".concat(profile.YEAR, "&SID=").concat(profile.SID),
      className: "jsx-1062075684",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1062075684" + " " + "profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      style: {
        backgroundImage: "linear-gradient(transparent 0%, rgba(0,0,0,1) 120%),url(".concat(profile.SQUARE_PIC_URL, ")")
      },
      className: "jsx-1062075684" + " " + "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1062075684" + " " + "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1062075684",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, profile.combinedName), __jsx("div", {
      className: "jsx-1062075684" + " " + "border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-1062075684",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "`MARRIED SINCE $", profile.marriageDate, "`")))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1062075684",
    __self: this
  }, ".container.jsx-1062075684{padding:32px 24px;}.profile.jsx-1062075684{margin-top:20px;}.image.jsx-1062075684{width:98%;height:228px;margin-left:0;border-radius:8px;background-size:cover;background-repeat:no-repeat;background-position:center top;position:relative;}h3.jsx-1062075684{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;text-transform:uppercase;}span.jsx-1062075684{font-size:20px;}strong.jsx-1062075684{color:#d9475c;}.text.jsx-1062075684{position:absolute;bottom:50px;color:white;text-align:center;width:100%;}.text.jsx-1062075684 h2.jsx-1062075684{font-size:40px;text-shadow:0 1px 1px rgba(0,0,0,0.27);font-family:\"sarah-script\",\"sans-serif\";font-weight:lighter;}.text.jsx-1062075684 span.jsx-1062075684{font-size:11px;color:#fff;-webkit-letter-spacing:1.15px;-moz-letter-spacing:1.15px;-ms-letter-spacing:1.15px;letter-spacing:1.15px;text-align:center;padding-bottom:16px;padding-top:8px;text-shadow:0 1px 1px rgba(0,0,0,0.24);}.border.jsx-1062075684{border-bottom:1px solid #fff;width:80%;margin:15px auto 5px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NYXRjaFByb2ZpbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEa0IsQUFHNkIsQUFJRixBQUlOLEFBV0ssQUFRQSxBQUdELEFBSUksQUFPSCxBQU9BLEFBVWMsVUFqRGhCLElBc0JmLENBWGtCLEFBUWxCLEFBYzRDLEFBTy9CLENBNUNiLEVBSkEsQUFrQ2MsS0F6QkUsR0F3Q1EsR0FTWixDQXZCRSxDQWZFLE1BVkksRUFpRFEsR0F2QlIsR0FmQSxTQXFCdUIsQ0EvQm5CLEtBMEJYLEdBZlUsRUFzQ3ZCLE1BdEJBLE1BMUI4QixpQkErQlIsV0E5QlcsU0ErQmpDLGlCQU1vQixLQXBDQSxhQXFDRSxLQXBDdEIsVUFRMkIsS0E2QlQsZ0JBQzBCLElBN0I1QyxtQ0E4QkEiLCJmaWxlIjoiL2hvbWUvcGFua2FqL0RvY3VtZW50cy9teS13b3JrL3dpdGgtcmVkdXgtdGh1bmsvY29tcG9uZW50cy9ob21lL01hdGNoUHJvZmlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLy9UT0RPIGdldCB0aGlzIGRhdGEgdGhyb3VnaCBhcGkgY2FsbFxuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgZG90czogZmFsc2UsXG4gIHN3aXBlOiB0cnVlLFxuICB0b3VjaE1vdmU6IHRydWUsXG4gIGluZmluaXRlOiBmYWxzZSxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgc3BlZWQ6IDUwMCxcbiAgc2xpZGVzVG9TaG93OiAxLjA1LFxuICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgY2VudGVyUGFkZGluZzogXCI0cHhcIlxufTtcblxuZnVuY3Rpb24gTWF0Y2hQcm9maWxlcygpIHtcbiAgdmFyIFtwcm9maWxlcywgc2V0UHJvZmlsZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBcImh0dHBzOi8vd3d3LmplZXZhbnNhdGhpLmNvbS9zdWNjZXNzU3RvcnkvZmlsdGVyP3NvdXJjZVR5cGU9aG9tZXBhZ2Umc291cmNlVmFsdWU9aG9tZXBhZ2UmZnJvbVNQQT0xXCJcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc1wiLCByZXNwb25zZSk7XG4gICAgICBzZXRQcm9maWxlcyhyZXNwb25zZS5kYXRhLnJlc3VsdCk7XG4gICAgfSBjYXRjaCB7fVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XG4gICAgICAgIDxoMz5MYWtocyBvZiBDb3VwbGVzPC9oMz5cblxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICBNYXRjaGVkIGJ5IDxzdHJvbmc+IEplZXZhbnNhdGhpPC9zdHJvbmc+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICB7cHJvZmlsZXMubWFwKGZ1bmN0aW9uKHByb2ZpbGUpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEgaHJlZj17YHN0b3J5P3llYXI9JHtwcm9maWxlLllFQVJ9JlNJRD0ke3Byb2ZpbGUuU0lEfWB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHJnYmEoMCwwLDAsMSkgMTIwJSksdXJsKCR7cHJvZmlsZS5TUVVBUkVfUElDX1VSTH0pYFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPntwcm9maWxlLmNvbWJpbmVkTmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5gTUFSUklFRCBTSU5DRSAke3Byb2ZpbGUubWFycmlhZ2VEYXRlfWA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1NsaWRlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZzogMzJweCAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2ZpbGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgIHdpZHRoOiA5OCU7XG4gICAgICAgICAgaGVpZ2h0OiAyMjhweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiAjOGE5ZGIwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBjb2xvcjogI2Q5NDc1YztcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNyk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwic2FyYWgtc2NyaXB0XCIsIFwic2Fucy1zZXJpZlwiO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjE1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvcmRlciB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBtYXJnaW46IDE1cHggYXV0byA1cHggYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRjaFByb2ZpbGVzO1xuIl19 */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MatchProfiles.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (MatchProfiles);

/***/ })

})
//# sourceMappingURL=index.js.9a52447c956797d1a0f4.hot-update.js.map