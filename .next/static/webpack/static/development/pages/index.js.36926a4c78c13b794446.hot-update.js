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
    className: "jsx-1053496640" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1053496640" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1053496640",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Lakhs of Couples"), __jsx("span", {
    className: "jsx-1053496640",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Matched by ", __jsx("strong", {
    className: "jsx-1053496640",
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
    return __jsx("div", {
      className: "jsx-1053496640" + " " + "profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("div", {
      style: {
        backgroundImage: "linear-gradient(transparent 0%, rgba(0,0,0,1) 120%),url(".concat(profile.SQUARE_PIC_URL, ")")
      },
      className: "jsx-1053496640" + " " + "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1053496640" + " " + "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1053496640",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, profile.combinedName), __jsx("div", {
      className: "jsx-1053496640" + " " + "border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-1053496640",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "`MARRIED SINCE $", profile.marriageDate, "`"))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1053496640",
    __self: this
  }, ".container.jsx-1053496640{padding:32px 24px;}.profile.jsx-1053496640{margin-top:20px;}.image.jsx-1053496640{width:98%;height:228px;margin-left:0;border-radius:8px;background-size:cover;background-repeat:no-repeat;background-position:center top;position:relative;}h3.jsx-1053496640{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;text-transform:uppercase;}span.jsx-1053496640{font-size:20px;}strong.jsx-1053496640{color:#d9475c;}.text.jsx-1053496640{position:absolute;bottom:50px;color:white;text-align:center;width:100%;}.text.jsx-1053496640 h2.jsx-1053496640{font-size:23px;text-shadow:0 1px 1px rgba(0,0,0,0.27);}.text.jsx-1053496640 span.jsx-1053496640{font-size:11px;color:#fff;-webkit-letter-spacing:1.15px;-moz-letter-spacing:1.15px;-ms-letter-spacing:1.15px;letter-spacing:1.15px;text-align:center;padding-bottom:16px;padding-top:8px;text-shadow:0 1px 1px rgba(0,0,0,0.24);}.border.jsx-1053496640{border-bottom:1px solid #fff;width:80%;margin:15px auto 5px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NYXRjaFByb2ZpbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEa0IsQUFHNkIsQUFJRixBQUlOLEFBV0ssQUFRQSxBQUdELEFBSUksQUFPSCxBQUtBLEFBVWMsVUEvQ2hCLElBc0JmLENBWGtCLEFBUWxCLEFBYzRDLEFBSy9CLENBMUNiLEVBSkEsQUFrQ2MsS0F6QkUsR0FzQ1EsR0FTWixDQXJCRSxDQWZFLE1BVkksRUErQ1EsR0FyQlIsR0FmQSxTQXFCcEIsQ0EvQndCLEtBMEJYLEdBZlUsRUFvQ3ZCLE1BcEJBLE1BMUI4Qiw0QkFDRywwQkFtQ2IsS0FsQ0EsYUFtQ0UsS0FsQ3RCLFVBUTJCLEtBMkJULGdCQUMwQixJQTNCNUMsbUNBNEJBIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NYXRjaFByb2ZpbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vVE9ETyBnZXQgdGhpcyBkYXRhIHRocm91Z2ggYXBpIGNhbGxcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG4gIGRvdHM6IGZhbHNlLFxuICBzd2lwZTogdHJ1ZSxcbiAgdG91Y2hNb3ZlOiB0cnVlLFxuICBpbmZpbml0ZTogZmFsc2UsXG4gIGFycm93czogZmFsc2UsXG4gIHNwZWVkOiA1MDAsXG4gIHNsaWRlc1RvU2hvdzogMS4wNSxcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gIGNlbnRlck1vZGU6IHRydWUsXG4gIGNlbnRlclBhZGRpbmc6IFwiNHB4XCJcbn07XG5cbmZ1bmN0aW9uIE1hdGNoUHJvZmlsZXMoKSB7XG4gIHZhciBbcHJvZmlsZXMsIHNldFByb2ZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgXCJodHRwczovL3d3dy5qZWV2YW5zYXRoaS5jb20vc3VjY2Vzc1N0b3J5L2ZpbHRlcj9zb3VyY2VUeXBlPWhvbWVwYWdlJnNvdXJjZVZhbHVlPWhvbWVwYWdlJmZyb21TUEE9MVwiXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coXCJyZXNcIiwgcmVzcG9uc2UpO1xuICAgICAgc2V0UHJvZmlsZXMocmVzcG9uc2UuZGF0YS5yZXN1bHQpO1xuICAgIH0gY2F0Y2gge31cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlxuICAgICAgICA8aDM+TGFraHMgb2YgQ291cGxlczwvaDM+XG5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgTWF0Y2hlZCBieSA8c3Ryb25nPiBKZWV2YW5zYXRoaTwvc3Ryb25nPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAge3Byb2ZpbGVzLm1hcChmdW5jdGlvbihwcm9maWxlKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHJnYmEoMCwwLDAsMSkgMTIwJSksdXJsKCR7cHJvZmlsZS5TUVVBUkVfUElDX1VSTH0pYFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxoMj57cHJvZmlsZS5jb21iaW5lZE5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5gTUFSUklFRCBTSU5DRSAke3Byb2ZpbGUubWFycmlhZ2VEYXRlfWA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1NsaWRlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZzogMzJweCAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2ZpbGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgIHdpZHRoOiA5OCU7XG4gICAgICAgICAgaGVpZ2h0OiAyMjhweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiAjOGE5ZGIwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBjb2xvcjogI2Q5NDc1YztcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNyk7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dCBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuMTVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYm9yZGVyIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIG1hcmdpbjogMTVweCBhdXRvIDVweCBhdXRvO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIGNsYXNzIE1hdGNoUHJvZmlsZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuLy8gICBzdGF0ZSA9IHsgcHJvZmlsZXM6IGFyciB9O1xuLy8gICByZW5kZXIoKSB7XG5cbi8vICAgICBjb25zdCB7IHByb2ZpbGVzIH0gPSB0aGlzLnN0YXRlO1xuLy8gICAgIGNvbnNvbGUubG9nKHByb2ZpbGVzKTtcblxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmdcIj5cbi8vICAgICAgICAgICA8aDM+TGFraHMgb2YgQ291cGxlczwvaDM+XG5cbi8vICAgICAgICAgICA8c3Bhbj5cbi8vICAgICAgICAgICAgIE1hdGNoZWQgYnkgPHN0cm9uZz4gSmVldmFuc2F0aGk8L3N0cm9uZz5cbi8vICAgICAgICAgICA8L3NwYW4+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4vLyAgICAgICAgICAge3Byb2ZpbGVzLm1hcChmdW5jdGlvbihwcm9maWxlKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVcIj5cbi8vICAgICAgICAgICAgICAgICA8ZGl2XG4vLyAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVwiXG4vLyAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuLy8gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHJnYmEoMCwwLDAsMSkgMTIwJSksdXJsKCR7cHJvZmlsZS5TUVVBUkVfUElDX1VSTH0pYFxuLy8gICAgICAgICAgICAgICAgICAgfX1cbi8vICAgICAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgPGgyPntwcm9maWxlLmNvbWJpbmVkTmFtZX08L2gyPlxuLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPjwvZGl2PlxuLy8gICAgICAgICAgICAgICAgICAgICA8c3Bhbj5gTUFSUklFRCBTSU5DRSAke3Byb2ZpbGUubWFycmlhZ2VEYXRlfWA8L3NwYW4+XG4vLyAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICApO1xuLy8gICAgICAgICAgIH0pfVxuLy8gICAgICAgICA8L1NsaWRlcj5cbi8vICAgICAgICAgPHN0eWxlIGpzeD57YFxuLy8gICAgICAgICAgIC5jb250YWluZXIge1xuLy8gICAgICAgICAgICAgcGFkZGluZzogMzJweCAyNHB4O1xuLy8gICAgICAgICAgIH1cblxuLy8gICAgICAgICAgIC5wcm9maWxlIHtcbi8vICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgLmltYWdlIHtcbi8vICAgICAgICAgICAgIHdpZHRoOiA5OCU7XG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDIyOHB4O1xuLy8gICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgaDMge1xuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbi8vICAgICAgICAgICAgIGNvbG9yOiAjOGE5ZGIwO1xuLy8gICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuLy8gICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuLy8gICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgc3BhbiB7XG4vLyAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIHN0cm9uZyB7XG4vLyAgICAgICAgICAgICBjb2xvcjogI2Q5NDc1Yztcbi8vICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAudGV4dCB7XG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICAgICAgICBib3R0b206IDUwcHg7XG4vLyAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgLnRleHQgaDIge1xuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuLy8gICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjcpO1xuLy8gICAgICAgICAgIH1cblxuLy8gICAgICAgICAgIC50ZXh0IHNwYW4ge1xuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuLy8gICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4vLyAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS4xNXB4O1xuLy8gICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4vLyAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuLy8gICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuLy8gICAgICAgICAgIH1cblxuLy8gICAgICAgICAgIC5ib3JkZXIge1xuLy8gICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4vLyAgICAgICAgICAgICB3aWR0aDogODAlO1xuLy8gICAgICAgICAgICAgbWFyZ2luOiAxNXB4IGF1dG8gNXB4IGF1dG87XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICBgfTwvc3R5bGU+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGNoUHJvZmlsZXM7XG4iXX0= */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MatchProfiles.js */"));
} // class MatchProfiles extends Component {
//   state = { profiles: arr };
//   render() {
//     const { profiles } = this.state;
//     console.log(profiles);
//     return (
//       <div className="container">
//         <div className="heading">
//           <h3>Lakhs of Couples</h3>
//           <span>
//             Matched by <strong> Jeevansathi</strong>
//           </span>
//         </div>
//         <Slider {...settings}>
//           {profiles.map(function(profile) {
//             return (
//               <div className="profile">
//                 <div
//                   className="image"
//                   style={{
//                     backgroundImage: `linear-gradient(transparent 0%, rgba(0,0,0,1) 120%),url(${profile.SQUARE_PIC_URL})`
//                   }}
//                 >
//                   <div className="text">
//                     <h2>{profile.combinedName}</h2>
//                     <div className="border"></div>
//                     <span>`MARRIED SINCE ${profile.marriageDate}`</span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </Slider>
//         <style jsx>{`
//           .container {
//             padding: 32px 24px;
//           }
//           .profile {
//             margin-top: 20px;
//           }
//           .image {
//             width: 98%;
//             height: 228px;
//             margin-left: 0;
//             border-radius: 8px;
//             background-size: cover;
//             background-repeat: no-repeat;
//             background-position: center top;
//             position: relative;
//           }
//           h3 {
//             font-size: 12px;
//             font-weight: 700;
//             color: #8a9db0;
//             margin-bottom: 4px;
//             letter-spacing: 1.5px;
//             text-transform: uppercase;
//           }
//           span {
//             font-size: 20px;
//           }
//           strong {
//             color: #d9475c;
//           }
//           .text {
//             position: absolute;
//             bottom: 50px;
//             color: white;
//             text-align: center;
//             width: 100%;
//           }
//           .text h2 {
//             font-size: 23px;
//             text-shadow: 0 1px 1px rgba(0, 0, 0, 0.27);
//           }
//           .text span {
//             font-size: 11px;
//             color: #fff;
//             letter-spacing: 1.15px;
//             text-align: center;
//             padding-bottom: 16px;
//             padding-top: 8px;
//             text-shadow: 0 1px 1px rgba(0, 0, 0, 0.24);
//           }
//           .border {
//             border-bottom: 1px solid #fff;
//             width: 80%;
//             margin: 15px auto 5px auto;
//           }
//         `}</style>
//       </div>
//     );
//   }
// }


/* harmony default export */ __webpack_exports__["default"] = (MatchProfiles);

/***/ })

})
//# sourceMappingURL=index.js.36926a4c78c13b794446.hot-update.js.map