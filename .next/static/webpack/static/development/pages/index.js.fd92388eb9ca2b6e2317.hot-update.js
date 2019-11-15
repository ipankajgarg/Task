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

var arr = [{
  FRAME_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245781-1536998402.jpeg",
  HEADING: "Sandeep Singh Bindra weds Gaganpreet Kaur",
  IS_EXCLUSIVE: "0",
  MAIN_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245779-1536998402.jpeg",
  NAME1: "Sandeep Singh Bindra",
  NAME2: "Gaganpreet Kaur",
  SID: "8265",
  SQUARE_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245783-1536998402.jpeg",
  STORY: "It is my imense pleasure to say that Jeevansathi is 'The Platform' where I met my soulmate. It has been almost six month we have been together and I am very happy to say we are enjoying every part of it. Thanks Jeevansathi.com for making me meet my dream girl. Jeevansathi.com platform is like a miracle.You never know what is coming for you .",
  STORYID: "17741",
  YEAR: "2018",
  combinedName: "Sandeep & Gaganpreet",
  marriageDate: "21, August 2018"
}, {
  FRAME_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245781-1536998402.jpeg",
  HEADING: "Sandeep Singh Bindra weds Gaganpreet Kaur",
  IS_EXCLUSIVE: "0",
  MAIN_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245779-1536998402.jpeg",
  NAME1: "Sandeep Singh Bindra",
  NAME2: "Gaganpreet Kaur",
  SID: "8265",
  SQUARE_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245783-1536998402.jpeg",
  STORY: "It is my imense pleasure to say that Jeevansathi is 'The Platform' where I met my soulmate. It has been almost six month we have been together and I am very happy to say we are enjoying every part of it. Thanks Jeevansathi.com for making me meet my dream girl. Jeevansathi.com platform is like a miracle.You never know what is coming for you .",
  STORYID: "17741",
  YEAR: "2018",
  combinedName: "Sandeep & Gaganpreet",
  marriageDate: "21, August 2018"
}, {
  FRAME_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245781-1536998402.jpeg",
  HEADING: "Sandeep Singh Bindra weds Gaganpreet Kaur",
  IS_EXCLUSIVE: "0",
  MAIN_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245779-1536998402.jpeg",
  NAME1: "Sandeep Singh Bindra",
  NAME2: "Gaganpreet Kaur",
  SID: "8265",
  SQUARE_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245783-1536998402.jpeg",
  STORY: "It is my imense pleasure to say that Jeevansathi is 'The Platform' where I met my soulmate. It has been almost six month we have been together and I am very happy to say we are enjoying every part of it. Thanks Jeevansathi.com for making me meet my dream girl. Jeevansathi.com platform is like a miracle.You never know what is coming for you .",
  STORYID: "17741",
  YEAR: "2018",
  combinedName: "Sandeep & Gaganpreet",
  marriageDate: "21, August 2018"
}, {
  FRAME_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245781-1536998402.jpeg",
  HEADING: "Sandeep Singh Bindra weds Gaganpreet Kaur",
  IS_EXCLUSIVE: "0",
  MAIN_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245779-1536998402.jpeg",
  NAME1: "Sandeep Singh Bindra",
  NAME2: "Gaganpreet Kaur",
  SID: "8265",
  SQUARE_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245783-1536998402.jpeg",
  STORY: "It is my imense pleasure to say that Jeevansathi is 'The Platform' where I met my soulmate. It has been almost six month we have been together and I am very happy to say we are enjoying every part of it. Thanks Jeevansathi.com for making me meet my dream girl. Jeevansathi.com platform is like a miracle.You never know what is coming for you .",
  STORYID: "17741",
  YEAR: "2018",
  combinedName: "Sandeep & Gaganpreet",
  marriageDate: "21, August 2018"
}, {
  FRAME_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245781-1536998402.jpeg",
  HEADING: "Sandeep Singh Bindra weds Gaganpreet Kaur",
  IS_EXCLUSIVE: "0",
  MAIN_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245779-1536998402.jpeg",
  NAME1: "Sandeep Singh Bindra",
  NAME2: "Gaganpreet Kaur",
  SID: "8265",
  SQUARE_PIC_URL: "https://mediacdn.jeevansathi.com/10762/5/215245783-1536998402.jpeg",
  STORY: "It is my imense pleasure to say that Jeevansathi is 'The Platform' where I met my soulmate. It has been almost six month we have been together and I am very happy to say we are enjoying every part of it. Thanks Jeevansathi.com for making me meet my dream girl. Jeevansathi.com platform is like a miracle.You never know what is coming for you .",
  STORYID: "17741",
  YEAR: "2018",
  combinedName: "Sandeep & Gaganpreet",
  marriageDate: "21, August 2018"
}];
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
      lineNumber: 132
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1053496640" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1053496640",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Lakhs of Couples"), __jsx("span", {
    className: "jsx-1053496640",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Matched by ", __jsx("strong", {
    className: "jsx-1053496640",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, " Jeevansathi"))), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), profiles.map(function (profile) {
    return __jsx("div", {
      className: "jsx-1053496640" + " " + "profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, __jsx("div", {
      style: {
        backgroundImage: "linear-gradient(transparent 0%, rgba(0,0,0,1) 120%),url(".concat(profile.SQUARE_PIC_URL, ")")
      },
      className: "jsx-1053496640" + " " + "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1053496640" + " " + "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1053496640",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, profile.combinedName), __jsx("div", {
      className: "jsx-1053496640" + " " + "border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-1053496640",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, "`MARRIED SINCE $", profile.marriageDate, "`"))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1053496640",
    __self: this
  }, ".container.jsx-1053496640{padding:32px 24px;}.profile.jsx-1053496640{margin-top:20px;}.image.jsx-1053496640{width:98%;height:228px;margin-left:0;border-radius:8px;background-size:cover;background-repeat:no-repeat;background-position:center top;position:relative;}h3.jsx-1053496640{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;text-transform:uppercase;}span.jsx-1053496640{font-size:20px;}strong.jsx-1053496640{color:#d9475c;}.text.jsx-1053496640{position:absolute;bottom:50px;color:white;text-align:center;width:100%;}.text.jsx-1053496640 h2.jsx-1053496640{font-size:23px;text-shadow:0 1px 1px rgba(0,0,0,0.27);}.text.jsx-1053496640 span.jsx-1053496640{font-size:11px;color:#fff;-webkit-letter-spacing:1.15px;-moz-letter-spacing:1.15px;-ms-letter-spacing:1.15px;letter-spacing:1.15px;text-align:center;padding-bottom:16px;padding-top:8px;text-shadow:0 1px 1px rgba(0,0,0,0.24);}.border.jsx-1053496640{border-bottom:1px solid #fff;width:80%;margin:15px auto 5px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NYXRjaFByb2ZpbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStKa0IsQUFHNkIsQUFJRixBQUlOLEFBV0ssQUFRQSxBQUdELEFBSUksQUFPSCxBQUtBLEFBVWMsVUEvQ2hCLElBc0JmLENBWGtCLEFBUWxCLEFBYzRDLEFBSy9CLENBMUNiLEVBSkEsQUFrQ2MsS0F6QkUsR0FzQ1EsR0FTWixDQXJCRSxDQWZFLE1BVkksRUErQ1EsR0FyQlIsR0FmQSxTQXFCcEIsQ0EvQndCLEtBMEJYLEdBZlUsRUFvQ3ZCLE1BcEJBLE1BMUI4Qiw0QkFDRywwQkFtQ2IsS0FsQ0EsYUFtQ0UsS0FsQ3RCLFVBUTJCLEtBMkJULGdCQUMwQixJQTNCNUMsbUNBNEJBIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NYXRjaFByb2ZpbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vVE9ETyBnZXQgdGhpcyBkYXRhIHRocm91Z2ggYXBpIGNhbGxcblxuY29uc3QgYXJyID0gW1xuICB7XG4gICAgRlJBTUVfUElDX1VSTDpcbiAgICAgIFwiaHR0cHM6Ly9tZWRpYWNkbi5qZWV2YW5zYXRoaS5jb20vMTA3NjIvNS8yMTUyNDU3ODEtMTUzNjk5ODQwMi5qcGVnXCIsXG4gICAgSEVBRElORzogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYSB3ZWRzIEdhZ2FucHJlZXQgS2F1clwiLFxuICAgIElTX0VYQ0xVU0lWRTogXCIwXCIsXG4gICAgTUFJTl9QSUNfVVJMOlxuICAgICAgXCJodHRwczovL21lZGlhY2RuLmplZXZhbnNhdGhpLmNvbS8xMDc2Mi81LzIxNTI0NTc3OS0xNTM2OTk4NDAyLmpwZWdcIixcbiAgICBOQU1FMTogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYVwiLFxuICAgIE5BTUUyOiBcIkdhZ2FucHJlZXQgS2F1clwiLFxuICAgIFNJRDogXCI4MjY1XCIsXG4gICAgU1FVQVJFX1BJQ19VUkw6XG4gICAgICBcImh0dHBzOi8vbWVkaWFjZG4uamVldmFuc2F0aGkuY29tLzEwNzYyLzUvMjE1MjQ1NzgzLTE1MzY5OTg0MDIuanBlZ1wiLFxuICAgIFNUT1JZOlxuICAgICAgXCJJdCBpcyBteSBpbWVuc2UgcGxlYXN1cmUgdG8gc2F5IHRoYXQgSmVldmFuc2F0aGkgaXMgJ1RoZSBQbGF0Zm9ybScgd2hlcmUgSSBtZXQgbXkgc291bG1hdGUuIEl0IGhhcyBiZWVuIGFsbW9zdCBzaXggbW9udGggd2UgaGF2ZSBiZWVuIHRvZ2V0aGVyIGFuZCBJIGFtIHZlcnkgaGFwcHkgdG8gc2F5IHdlIGFyZSBlbmpveWluZyBldmVyeSBwYXJ0IG9mIGl0LiBUaGFua3MgSmVldmFuc2F0aGkuY29tIGZvciBtYWtpbmcgbWUgbWVldCBteSBkcmVhbSBnaXJsLiBKZWV2YW5zYXRoaS5jb20gcGxhdGZvcm0gaXMgbGlrZSBhIG1pcmFjbGUuWW91IG5ldmVyIGtub3cgd2hhdCBpcyBjb21pbmcgZm9yIHlvdSAuXCIsXG4gICAgU1RPUllJRDogXCIxNzc0MVwiLFxuICAgIFlFQVI6IFwiMjAxOFwiLFxuICAgIGNvbWJpbmVkTmFtZTogXCJTYW5kZWVwICYgR2FnYW5wcmVldFwiLFxuICAgIG1hcnJpYWdlRGF0ZTogXCIyMSwgQXVndXN0IDIwMThcIlxuICB9LFxuICB7XG4gICAgRlJBTUVfUElDX1VSTDpcbiAgICAgIFwiaHR0cHM6Ly9tZWRpYWNkbi5qZWV2YW5zYXRoaS5jb20vMTA3NjIvNS8yMTUyNDU3ODEtMTUzNjk5ODQwMi5qcGVnXCIsXG4gICAgSEVBRElORzogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYSB3ZWRzIEdhZ2FucHJlZXQgS2F1clwiLFxuICAgIElTX0VYQ0xVU0lWRTogXCIwXCIsXG4gICAgTUFJTl9QSUNfVVJMOlxuICAgICAgXCJodHRwczovL21lZGlhY2RuLmplZXZhbnNhdGhpLmNvbS8xMDc2Mi81LzIxNTI0NTc3OS0xNTM2OTk4NDAyLmpwZWdcIixcbiAgICBOQU1FMTogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYVwiLFxuICAgIE5BTUUyOiBcIkdhZ2FucHJlZXQgS2F1clwiLFxuICAgIFNJRDogXCI4MjY1XCIsXG4gICAgU1FVQVJFX1BJQ19VUkw6XG4gICAgICBcImh0dHBzOi8vbWVkaWFjZG4uamVldmFuc2F0aGkuY29tLzEwNzYyLzUvMjE1MjQ1NzgzLTE1MzY5OTg0MDIuanBlZ1wiLFxuICAgIFNUT1JZOlxuICAgICAgXCJJdCBpcyBteSBpbWVuc2UgcGxlYXN1cmUgdG8gc2F5IHRoYXQgSmVldmFuc2F0aGkgaXMgJ1RoZSBQbGF0Zm9ybScgd2hlcmUgSSBtZXQgbXkgc291bG1hdGUuIEl0IGhhcyBiZWVuIGFsbW9zdCBzaXggbW9udGggd2UgaGF2ZSBiZWVuIHRvZ2V0aGVyIGFuZCBJIGFtIHZlcnkgaGFwcHkgdG8gc2F5IHdlIGFyZSBlbmpveWluZyBldmVyeSBwYXJ0IG9mIGl0LiBUaGFua3MgSmVldmFuc2F0aGkuY29tIGZvciBtYWtpbmcgbWUgbWVldCBteSBkcmVhbSBnaXJsLiBKZWV2YW5zYXRoaS5jb20gcGxhdGZvcm0gaXMgbGlrZSBhIG1pcmFjbGUuWW91IG5ldmVyIGtub3cgd2hhdCBpcyBjb21pbmcgZm9yIHlvdSAuXCIsXG4gICAgU1RPUllJRDogXCIxNzc0MVwiLFxuICAgIFlFQVI6IFwiMjAxOFwiLFxuICAgIGNvbWJpbmVkTmFtZTogXCJTYW5kZWVwICYgR2FnYW5wcmVldFwiLFxuICAgIG1hcnJpYWdlRGF0ZTogXCIyMSwgQXVndXN0IDIwMThcIlxuICB9LFxuICB7XG4gICAgRlJBTUVfUElDX1VSTDpcbiAgICAgIFwiaHR0cHM6Ly9tZWRpYWNkbi5qZWV2YW5zYXRoaS5jb20vMTA3NjIvNS8yMTUyNDU3ODEtMTUzNjk5ODQwMi5qcGVnXCIsXG4gICAgSEVBRElORzogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYSB3ZWRzIEdhZ2FucHJlZXQgS2F1clwiLFxuICAgIElTX0VYQ0xVU0lWRTogXCIwXCIsXG4gICAgTUFJTl9QSUNfVVJMOlxuICAgICAgXCJodHRwczovL21lZGlhY2RuLmplZXZhbnNhdGhpLmNvbS8xMDc2Mi81LzIxNTI0NTc3OS0xNTM2OTk4NDAyLmpwZWdcIixcbiAgICBOQU1FMTogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYVwiLFxuICAgIE5BTUUyOiBcIkdhZ2FucHJlZXQgS2F1clwiLFxuICAgIFNJRDogXCI4MjY1XCIsXG4gICAgU1FVQVJFX1BJQ19VUkw6XG4gICAgICBcImh0dHBzOi8vbWVkaWFjZG4uamVldmFuc2F0aGkuY29tLzEwNzYyLzUvMjE1MjQ1NzgzLTE1MzY5OTg0MDIuanBlZ1wiLFxuICAgIFNUT1JZOlxuICAgICAgXCJJdCBpcyBteSBpbWVuc2UgcGxlYXN1cmUgdG8gc2F5IHRoYXQgSmVldmFuc2F0aGkgaXMgJ1RoZSBQbGF0Zm9ybScgd2hlcmUgSSBtZXQgbXkgc291bG1hdGUuIEl0IGhhcyBiZWVuIGFsbW9zdCBzaXggbW9udGggd2UgaGF2ZSBiZWVuIHRvZ2V0aGVyIGFuZCBJIGFtIHZlcnkgaGFwcHkgdG8gc2F5IHdlIGFyZSBlbmpveWluZyBldmVyeSBwYXJ0IG9mIGl0LiBUaGFua3MgSmVldmFuc2F0aGkuY29tIGZvciBtYWtpbmcgbWUgbWVldCBteSBkcmVhbSBnaXJsLiBKZWV2YW5zYXRoaS5jb20gcGxhdGZvcm0gaXMgbGlrZSBhIG1pcmFjbGUuWW91IG5ldmVyIGtub3cgd2hhdCBpcyBjb21pbmcgZm9yIHlvdSAuXCIsXG4gICAgU1RPUllJRDogXCIxNzc0MVwiLFxuICAgIFlFQVI6IFwiMjAxOFwiLFxuICAgIGNvbWJpbmVkTmFtZTogXCJTYW5kZWVwICYgR2FnYW5wcmVldFwiLFxuICAgIG1hcnJpYWdlRGF0ZTogXCIyMSwgQXVndXN0IDIwMThcIlxuICB9LFxuICB7XG4gICAgRlJBTUVfUElDX1VSTDpcbiAgICAgIFwiaHR0cHM6Ly9tZWRpYWNkbi5qZWV2YW5zYXRoaS5jb20vMTA3NjIvNS8yMTUyNDU3ODEtMTUzNjk5ODQwMi5qcGVnXCIsXG4gICAgSEVBRElORzogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYSB3ZWRzIEdhZ2FucHJlZXQgS2F1clwiLFxuICAgIElTX0VYQ0xVU0lWRTogXCIwXCIsXG4gICAgTUFJTl9QSUNfVVJMOlxuICAgICAgXCJodHRwczovL21lZGlhY2RuLmplZXZhbnNhdGhpLmNvbS8xMDc2Mi81LzIxNTI0NTc3OS0xNTM2OTk4NDAyLmpwZWdcIixcbiAgICBOQU1FMTogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYVwiLFxuICAgIE5BTUUyOiBcIkdhZ2FucHJlZXQgS2F1clwiLFxuICAgIFNJRDogXCI4MjY1XCIsXG4gICAgU1FVQVJFX1BJQ19VUkw6XG4gICAgICBcImh0dHBzOi8vbWVkaWFjZG4uamVldmFuc2F0aGkuY29tLzEwNzYyLzUvMjE1MjQ1NzgzLTE1MzY5OTg0MDIuanBlZ1wiLFxuICAgIFNUT1JZOlxuICAgICAgXCJJdCBpcyBteSBpbWVuc2UgcGxlYXN1cmUgdG8gc2F5IHRoYXQgSmVldmFuc2F0aGkgaXMgJ1RoZSBQbGF0Zm9ybScgd2hlcmUgSSBtZXQgbXkgc291bG1hdGUuIEl0IGhhcyBiZWVuIGFsbW9zdCBzaXggbW9udGggd2UgaGF2ZSBiZWVuIHRvZ2V0aGVyIGFuZCBJIGFtIHZlcnkgaGFwcHkgdG8gc2F5IHdlIGFyZSBlbmpveWluZyBldmVyeSBwYXJ0IG9mIGl0LiBUaGFua3MgSmVldmFuc2F0aGkuY29tIGZvciBtYWtpbmcgbWUgbWVldCBteSBkcmVhbSBnaXJsLiBKZWV2YW5zYXRoaS5jb20gcGxhdGZvcm0gaXMgbGlrZSBhIG1pcmFjbGUuWW91IG5ldmVyIGtub3cgd2hhdCBpcyBjb21pbmcgZm9yIHlvdSAuXCIsXG4gICAgU1RPUllJRDogXCIxNzc0MVwiLFxuICAgIFlFQVI6IFwiMjAxOFwiLFxuICAgIGNvbWJpbmVkTmFtZTogXCJTYW5kZWVwICYgR2FnYW5wcmVldFwiLFxuICAgIG1hcnJpYWdlRGF0ZTogXCIyMSwgQXVndXN0IDIwMThcIlxuICB9LFxuICB7XG4gICAgRlJBTUVfUElDX1VSTDpcbiAgICAgIFwiaHR0cHM6Ly9tZWRpYWNkbi5qZWV2YW5zYXRoaS5jb20vMTA3NjIvNS8yMTUyNDU3ODEtMTUzNjk5ODQwMi5qcGVnXCIsXG4gICAgSEVBRElORzogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYSB3ZWRzIEdhZ2FucHJlZXQgS2F1clwiLFxuICAgIElTX0VYQ0xVU0lWRTogXCIwXCIsXG4gICAgTUFJTl9QSUNfVVJMOlxuICAgICAgXCJodHRwczovL21lZGlhY2RuLmplZXZhbnNhdGhpLmNvbS8xMDc2Mi81LzIxNTI0NTc3OS0xNTM2OTk4NDAyLmpwZWdcIixcbiAgICBOQU1FMTogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYVwiLFxuICAgIE5BTUUyOiBcIkdhZ2FucHJlZXQgS2F1clwiLFxuICAgIFNJRDogXCI4MjY1XCIsXG4gICAgU1FVQVJFX1BJQ19VUkw6XG4gICAgICBcImh0dHBzOi8vbWVkaWFjZG4uamVldmFuc2F0aGkuY29tLzEwNzYyLzUvMjE1MjQ1NzgzLTE1MzY5OTg0MDIuanBlZ1wiLFxuICAgIFNUT1JZOlxuICAgICAgXCJJdCBpcyBteSBpbWVuc2UgcGxlYXN1cmUgdG8gc2F5IHRoYXQgSmVldmFuc2F0aGkgaXMgJ1RoZSBQbGF0Zm9ybScgd2hlcmUgSSBtZXQgbXkgc291bG1hdGUuIEl0IGhhcyBiZWVuIGFsbW9zdCBzaXggbW9udGggd2UgaGF2ZSBiZWVuIHRvZ2V0aGVyIGFuZCBJIGFtIHZlcnkgaGFwcHkgdG8gc2F5IHdlIGFyZSBlbmpveWluZyBldmVyeSBwYXJ0IG9mIGl0LiBUaGFua3MgSmVldmFuc2F0aGkuY29tIGZvciBtYWtpbmcgbWUgbWVldCBteSBkcmVhbSBnaXJsLiBKZWV2YW5zYXRoaS5jb20gcGxhdGZvcm0gaXMgbGlrZSBhIG1pcmFjbGUuWW91IG5ldmVyIGtub3cgd2hhdCBpcyBjb21pbmcgZm9yIHlvdSAuXCIsXG4gICAgU1RPUllJRDogXCIxNzc0MVwiLFxuICAgIFlFQVI6IFwiMjAxOFwiLFxuICAgIGNvbWJpbmVkTmFtZTogXCJTYW5kZWVwICYgR2FnYW5wcmVldFwiLFxuICAgIG1hcnJpYWdlRGF0ZTogXCIyMSwgQXVndXN0IDIwMThcIlxuICB9XG5dO1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgZG90czogZmFsc2UsXG4gIHN3aXBlOiB0cnVlLFxuICB0b3VjaE1vdmU6IHRydWUsXG4gIGluZmluaXRlOiBmYWxzZSxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgc3BlZWQ6IDUwMCxcbiAgc2xpZGVzVG9TaG93OiAxLjA1LFxuICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgY2VudGVyUGFkZGluZzogXCI0cHhcIlxufTtcblxuZnVuY3Rpb24gTWF0Y2hQcm9maWxlcygpIHtcbiAgdmFyIFtwcm9maWxlcywgc2V0UHJvZmlsZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBcImh0dHBzOi8vd3d3LmplZXZhbnNhdGhpLmNvbS9zdWNjZXNzU3RvcnkvZmlsdGVyP3NvdXJjZVR5cGU9aG9tZXBhZ2Umc291cmNlVmFsdWU9aG9tZXBhZ2UmZnJvbVNQQT0xXCJcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc1wiLCByZXNwb25zZSk7XG4gICAgICBzZXRQcm9maWxlcyhyZXNwb25zZS5kYXRhLnJlc3VsdCk7XG4gICAgfSBjYXRjaCB7fVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XG4gICAgICAgIDxoMz5MYWtocyBvZiBDb3VwbGVzPC9oMz5cblxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICBNYXRjaGVkIGJ5IDxzdHJvbmc+IEplZXZhbnNhdGhpPC9zdHJvbmc+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICB7cHJvZmlsZXMubWFwKGZ1bmN0aW9uKHByb2ZpbGUpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgcmdiYSgwLDAsMCwxKSAxMjAlKSx1cmwoJHtwcm9maWxlLlNRVUFSRV9QSUNfVVJMfSlgXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPGgyPntwcm9maWxlLmNvbWJpbmVkTmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPmBNQVJSSUVEIFNJTkNFICR7cHJvZmlsZS5tYXJyaWFnZURhdGV9YDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvU2xpZGVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZmlsZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgd2lkdGg6IDk4JTtcbiAgICAgICAgICBoZWlnaHQ6IDIyOHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6ICM4YTlkYjA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGNvbG9yOiAjZDk0NzVjO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI3KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0IHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS4xNXB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib3JkZXIge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgbWFyZ2luOiAxNXB4IGF1dG8gNXB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gY2xhc3MgTWF0Y2hQcm9maWxlcyBleHRlbmRzIENvbXBvbmVudCB7XG4vLyAgIHN0YXRlID0geyBwcm9maWxlczogYXJyIH07XG4vLyAgIHJlbmRlcigpIHtcblxuLy8gICAgIGNvbnN0IHsgcHJvZmlsZXMgfSA9IHRoaXMuc3RhdGU7XG4vLyAgICAgY29uc29sZS5sb2cocHJvZmlsZXMpO1xuXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlxuLy8gICAgICAgICAgIDxoMz5MYWtocyBvZiBDb3VwbGVzPC9oMz5cblxuLy8gICAgICAgICAgIDxzcGFuPlxuLy8gICAgICAgICAgICAgTWF0Y2hlZCBieSA8c3Ryb25nPiBKZWV2YW5zYXRoaTwvc3Ryb25nPlxuLy8gICAgICAgICAgIDwvc3Bhbj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbi8vICAgICAgICAgICB7cHJvZmlsZXMubWFwKGZ1bmN0aW9uKHByb2ZpbGUpIHtcbi8vICAgICAgICAgICAgIHJldHVybiAoXG4vLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxuLy8gICAgICAgICAgICAgICAgIDxkaXZcbi8vICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlXCJcbi8vICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4vLyAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgcmdiYSgwLDAsMCwxKSAxMjAlKSx1cmwoJHtwcm9maWxlLlNRVUFSRV9QSUNfVVJMfSlgXG4vLyAgICAgICAgICAgICAgICAgICB9fVxuLy8gICAgICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aDI+e3Byb2ZpbGUuY29tYmluZWROYW1lfTwvaDI+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+PC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmBNQVJSSUVEIFNJTkNFICR7cHJvZmlsZS5tYXJyaWFnZURhdGV9YDwvc3Bhbj5cbi8vICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICk7XG4vLyAgICAgICAgICAgfSl9XG4vLyAgICAgICAgIDwvU2xpZGVyPlxuLy8gICAgICAgICA8c3R5bGUganN4PntgXG4vLyAgICAgICAgICAgLmNvbnRhaW5lciB7XG4vLyAgICAgICAgICAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XG4vLyAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgLnByb2ZpbGUge1xuLy8gICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAuaW1hZ2Uge1xuLy8gICAgICAgICAgICAgd2lkdGg6IDk4JTtcbi8vICAgICAgICAgICAgIGhlaWdodDogMjI4cHg7XG4vLyAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICBoMyB7XG4vLyAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuLy8gICAgICAgICAgICAgY29sb3I6ICM4YTlkYjA7XG4vLyAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4vLyAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4vLyAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBzcGFuIHtcbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgc3Ryb25nIHtcbi8vICAgICAgICAgICAgIGNvbG9yOiAjZDk0NzVjO1xuLy8gICAgICAgICAgIH1cblxuLy8gICAgICAgICAgIC50ZXh0IHtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgICAgIGJvdHRvbTogNTBweDtcbi8vICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICAudGV4dCBoMiB7XG4vLyAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XG4vLyAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNyk7XG4vLyAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgLnRleHQgc3BhbiB7XG4vLyAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4vLyAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbi8vICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjE1cHg7XG4vLyAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbi8vICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4vLyAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4vLyAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgLmJvcmRlciB7XG4vLyAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbi8vICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4vLyAgICAgICAgICAgICBtYXJnaW46IDE1cHggYXV0byA1cHggYXV0bztcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIGB9PC9zdHlsZT5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgTWF0Y2hQcm9maWxlcztcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MatchProfiles.js */"));
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
//# sourceMappingURL=index.js.fd92388eb9ca2b6e2317.hot-update.js.map