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
  })));
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
  }, ".container.jsx-1053496640{padding:32px 24px;}.profile.jsx-1053496640{margin-top:20px;}.image.jsx-1053496640{width:98%;height:228px;margin-left:0;border-radius:8px;background-size:cover;background-repeat:no-repeat;background-position:center top;position:relative;}h3.jsx-1053496640{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;text-transform:uppercase;}span.jsx-1053496640{font-size:20px;}strong.jsx-1053496640{color:#d9475c;}.text.jsx-1053496640{position:absolute;bottom:50px;color:white;text-align:center;width:100%;}.text.jsx-1053496640 h2.jsx-1053496640{font-size:23px;text-shadow:0 1px 1px rgba(0,0,0,0.27);}.text.jsx-1053496640 span.jsx-1053496640{font-size:11px;color:#fff;-webkit-letter-spacing:1.15px;-moz-letter-spacing:1.15px;-ms-letter-spacing:1.15px;letter-spacing:1.15px;text-align:center;padding-bottom:16px;padding-top:8px;text-shadow:0 1px 1px rgba(0,0,0,0.24);}.border.jsx-1053496640{border-bottom:1px solid #fff;width:80%;margin:15px auto 5px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NYXRjaFByb2ZpbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStKa0IsQUFHNkIsQUFJRixBQUlOLEFBV0ssQUFRQSxBQUdELEFBSUksQUFPSCxBQUtBLEFBVWMsVUEvQ2hCLElBc0JmLENBWGtCLEFBUWxCLEFBYzRDLEFBSy9CLENBMUNiLEVBSkEsQUFrQ2MsS0F6QkUsR0FzQ1EsR0FTWixDQXJCRSxDQWZFLE1BVkksRUErQ1EsR0FyQlIsR0FmQSxTQXFCcEIsQ0EvQndCLEtBMEJYLEdBZlUsRUFvQ3ZCLE1BcEJBLE1BMUI4Qiw0QkFDRywwQkFtQ2IsS0FsQ0EsYUFtQ0UsS0FsQ3RCLFVBUTJCLEtBMkJULGdCQUMwQixJQTNCNUMsbUNBNEJBIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NYXRjaFByb2ZpbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vVE9ETyBnZXQgdGhpcyBkYXRhIHRocm91Z2ggYXBpIGNhbGxcblxuY29uc3QgYXJyID0gW1xuICB7XG4gICAgRlJBTUVfUElDX1VSTDpcbiAgICAgIFwiaHR0cHM6Ly9tZWRpYWNkbi5qZWV2YW5zYXRoaS5jb20vMTA3NjIvNS8yMTUyNDU3ODEtMTUzNjk5ODQwMi5qcGVnXCIsXG4gICAgSEVBRElORzogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYSB3ZWRzIEdhZ2FucHJlZXQgS2F1clwiLFxuICAgIElTX0VYQ0xVU0lWRTogXCIwXCIsXG4gICAgTUFJTl9QSUNfVVJMOlxuICAgICAgXCJodHRwczovL21lZGlhY2RuLmplZXZhbnNhdGhpLmNvbS8xMDc2Mi81LzIxNTI0NTc3OS0xNTM2OTk4NDAyLmpwZWdcIixcbiAgICBOQU1FMTogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYVwiLFxuICAgIE5BTUUyOiBcIkdhZ2FucHJlZXQgS2F1clwiLFxuICAgIFNJRDogXCI4MjY1XCIsXG4gICAgU1FVQVJFX1BJQ19VUkw6XG4gICAgICBcImh0dHBzOi8vbWVkaWFjZG4uamVldmFuc2F0aGkuY29tLzEwNzYyLzUvMjE1MjQ1NzgzLTE1MzY5OTg0MDIuanBlZ1wiLFxuICAgIFNUT1JZOlxuICAgICAgXCJJdCBpcyBteSBpbWVuc2UgcGxlYXN1cmUgdG8gc2F5IHRoYXQgSmVldmFuc2F0aGkgaXMgJ1RoZSBQbGF0Zm9ybScgd2hlcmUgSSBtZXQgbXkgc291bG1hdGUuIEl0IGhhcyBiZWVuIGFsbW9zdCBzaXggbW9udGggd2UgaGF2ZSBiZWVuIHRvZ2V0aGVyIGFuZCBJIGFtIHZlcnkgaGFwcHkgdG8gc2F5IHdlIGFyZSBlbmpveWluZyBldmVyeSBwYXJ0IG9mIGl0LiBUaGFua3MgSmVldmFuc2F0aGkuY29tIGZvciBtYWtpbmcgbWUgbWVldCBteSBkcmVhbSBnaXJsLiBKZWV2YW5zYXRoaS5jb20gcGxhdGZvcm0gaXMgbGlrZSBhIG1pcmFjbGUuWW91IG5ldmVyIGtub3cgd2hhdCBpcyBjb21pbmcgZm9yIHlvdSAuXCIsXG4gICAgU1RPUllJRDogXCIxNzc0MVwiLFxuICAgIFlFQVI6IFwiMjAxOFwiLFxuICAgIGNvbWJpbmVkTmFtZTogXCJTYW5kZWVwICYgR2FnYW5wcmVldFwiLFxuICAgIG1hcnJpYWdlRGF0ZTogXCIyMSwgQXVndXN0IDIwMThcIlxuICB9LFxuICB7XG4gICAgRlJBTUVfUElDX1VSTDpcbiAgICAgIFwiaHR0cHM6Ly9tZWRpYWNkbi5qZWV2YW5zYXRoaS5jb20vMTA3NjIvNS8yMTUyNDU3ODEtMTUzNjk5ODQwMi5qcGVnXCIsXG4gICAgSEVBRElORzogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYSB3ZWRzIEdhZ2FucHJlZXQgS2F1clwiLFxuICAgIElTX0VYQ0xVU0lWRTogXCIwXCIsXG4gICAgTUFJTl9QSUNfVVJMOlxuICAgICAgXCJodHRwczovL21lZGlhY2RuLmplZXZhbnNhdGhpLmNvbS8xMDc2Mi81LzIxNTI0NTc3OS0xNTM2OTk4NDAyLmpwZWdcIixcbiAgICBOQU1FMTogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYVwiLFxuICAgIE5BTUUyOiBcIkdhZ2FucHJlZXQgS2F1clwiLFxuICAgIFNJRDogXCI4MjY1XCIsXG4gICAgU1FVQVJFX1BJQ19VUkw6XG4gICAgICBcImh0dHBzOi8vbWVkaWFjZG4uamVldmFuc2F0aGkuY29tLzEwNzYyLzUvMjE1MjQ1NzgzLTE1MzY5OTg0MDIuanBlZ1wiLFxuICAgIFNUT1JZOlxuICAgICAgXCJJdCBpcyBteSBpbWVuc2UgcGxlYXN1cmUgdG8gc2F5IHRoYXQgSmVldmFuc2F0aGkgaXMgJ1RoZSBQbGF0Zm9ybScgd2hlcmUgSSBtZXQgbXkgc291bG1hdGUuIEl0IGhhcyBiZWVuIGFsbW9zdCBzaXggbW9udGggd2UgaGF2ZSBiZWVuIHRvZ2V0aGVyIGFuZCBJIGFtIHZlcnkgaGFwcHkgdG8gc2F5IHdlIGFyZSBlbmpveWluZyBldmVyeSBwYXJ0IG9mIGl0LiBUaGFua3MgSmVldmFuc2F0aGkuY29tIGZvciBtYWtpbmcgbWUgbWVldCBteSBkcmVhbSBnaXJsLiBKZWV2YW5zYXRoaS5jb20gcGxhdGZvcm0gaXMgbGlrZSBhIG1pcmFjbGUuWW91IG5ldmVyIGtub3cgd2hhdCBpcyBjb21pbmcgZm9yIHlvdSAuXCIsXG4gICAgU1RPUllJRDogXCIxNzc0MVwiLFxuICAgIFlFQVI6IFwiMjAxOFwiLFxuICAgIGNvbWJpbmVkTmFtZTogXCJTYW5kZWVwICYgR2FnYW5wcmVldFwiLFxuICAgIG1hcnJpYWdlRGF0ZTogXCIyMSwgQXVndXN0IDIwMThcIlxuICB9LFxuICB7XG4gICAgRlJBTUVfUElDX1VSTDpcbiAgICAgIFwiaHR0cHM6Ly9tZWRpYWNkbi5qZWV2YW5zYXRoaS5jb20vMTA3NjIvNS8yMTUyNDU3ODEtMTUzNjk5ODQwMi5qcGVnXCIsXG4gICAgSEVBRElORzogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYSB3ZWRzIEdhZ2FucHJlZXQgS2F1clwiLFxuICAgIElTX0VYQ0xVU0lWRTogXCIwXCIsXG4gICAgTUFJTl9QSUNfVVJMOlxuICAgICAgXCJodHRwczovL21lZGlhY2RuLmplZXZhbnNhdGhpLmNvbS8xMDc2Mi81LzIxNTI0NTc3OS0xNTM2OTk4NDAyLmpwZWdcIixcbiAgICBOQU1FMTogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYVwiLFxuICAgIE5BTUUyOiBcIkdhZ2FucHJlZXQgS2F1clwiLFxuICAgIFNJRDogXCI4MjY1XCIsXG4gICAgU1FVQVJFX1BJQ19VUkw6XG4gICAgICBcImh0dHBzOi8vbWVkaWFjZG4uamVldmFuc2F0aGkuY29tLzEwNzYyLzUvMjE1MjQ1NzgzLTE1MzY5OTg0MDIuanBlZ1wiLFxuICAgIFNUT1JZOlxuICAgICAgXCJJdCBpcyBteSBpbWVuc2UgcGxlYXN1cmUgdG8gc2F5IHRoYXQgSmVldmFuc2F0aGkgaXMgJ1RoZSBQbGF0Zm9ybScgd2hlcmUgSSBtZXQgbXkgc291bG1hdGUuIEl0IGhhcyBiZWVuIGFsbW9zdCBzaXggbW9udGggd2UgaGF2ZSBiZWVuIHRvZ2V0aGVyIGFuZCBJIGFtIHZlcnkgaGFwcHkgdG8gc2F5IHdlIGFyZSBlbmpveWluZyBldmVyeSBwYXJ0IG9mIGl0LiBUaGFua3MgSmVldmFuc2F0aGkuY29tIGZvciBtYWtpbmcgbWUgbWVldCBteSBkcmVhbSBnaXJsLiBKZWV2YW5zYXRoaS5jb20gcGxhdGZvcm0gaXMgbGlrZSBhIG1pcmFjbGUuWW91IG5ldmVyIGtub3cgd2hhdCBpcyBjb21pbmcgZm9yIHlvdSAuXCIsXG4gICAgU1RPUllJRDogXCIxNzc0MVwiLFxuICAgIFlFQVI6IFwiMjAxOFwiLFxuICAgIGNvbWJpbmVkTmFtZTogXCJTYW5kZWVwICYgR2FnYW5wcmVldFwiLFxuICAgIG1hcnJpYWdlRGF0ZTogXCIyMSwgQXVndXN0IDIwMThcIlxuICB9LFxuICB7XG4gICAgRlJBTUVfUElDX1VSTDpcbiAgICAgIFwiaHR0cHM6Ly9tZWRpYWNkbi5qZWV2YW5zYXRoaS5jb20vMTA3NjIvNS8yMTUyNDU3ODEtMTUzNjk5ODQwMi5qcGVnXCIsXG4gICAgSEVBRElORzogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYSB3ZWRzIEdhZ2FucHJlZXQgS2F1clwiLFxuICAgIElTX0VYQ0xVU0lWRTogXCIwXCIsXG4gICAgTUFJTl9QSUNfVVJMOlxuICAgICAgXCJodHRwczovL21lZGlhY2RuLmplZXZhbnNhdGhpLmNvbS8xMDc2Mi81LzIxNTI0NTc3OS0xNTM2OTk4NDAyLmpwZWdcIixcbiAgICBOQU1FMTogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYVwiLFxuICAgIE5BTUUyOiBcIkdhZ2FucHJlZXQgS2F1clwiLFxuICAgIFNJRDogXCI4MjY1XCIsXG4gICAgU1FVQVJFX1BJQ19VUkw6XG4gICAgICBcImh0dHBzOi8vbWVkaWFjZG4uamVldmFuc2F0aGkuY29tLzEwNzYyLzUvMjE1MjQ1NzgzLTE1MzY5OTg0MDIuanBlZ1wiLFxuICAgIFNUT1JZOlxuICAgICAgXCJJdCBpcyBteSBpbWVuc2UgcGxlYXN1cmUgdG8gc2F5IHRoYXQgSmVldmFuc2F0aGkgaXMgJ1RoZSBQbGF0Zm9ybScgd2hlcmUgSSBtZXQgbXkgc291bG1hdGUuIEl0IGhhcyBiZWVuIGFsbW9zdCBzaXggbW9udGggd2UgaGF2ZSBiZWVuIHRvZ2V0aGVyIGFuZCBJIGFtIHZlcnkgaGFwcHkgdG8gc2F5IHdlIGFyZSBlbmpveWluZyBldmVyeSBwYXJ0IG9mIGl0LiBUaGFua3MgSmVldmFuc2F0aGkuY29tIGZvciBtYWtpbmcgbWUgbWVldCBteSBkcmVhbSBnaXJsLiBKZWV2YW5zYXRoaS5jb20gcGxhdGZvcm0gaXMgbGlrZSBhIG1pcmFjbGUuWW91IG5ldmVyIGtub3cgd2hhdCBpcyBjb21pbmcgZm9yIHlvdSAuXCIsXG4gICAgU1RPUllJRDogXCIxNzc0MVwiLFxuICAgIFlFQVI6IFwiMjAxOFwiLFxuICAgIGNvbWJpbmVkTmFtZTogXCJTYW5kZWVwICYgR2FnYW5wcmVldFwiLFxuICAgIG1hcnJpYWdlRGF0ZTogXCIyMSwgQXVndXN0IDIwMThcIlxuICB9LFxuICB7XG4gICAgRlJBTUVfUElDX1VSTDpcbiAgICAgIFwiaHR0cHM6Ly9tZWRpYWNkbi5qZWV2YW5zYXRoaS5jb20vMTA3NjIvNS8yMTUyNDU3ODEtMTUzNjk5ODQwMi5qcGVnXCIsXG4gICAgSEVBRElORzogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYSB3ZWRzIEdhZ2FucHJlZXQgS2F1clwiLFxuICAgIElTX0VYQ0xVU0lWRTogXCIwXCIsXG4gICAgTUFJTl9QSUNfVVJMOlxuICAgICAgXCJodHRwczovL21lZGlhY2RuLmplZXZhbnNhdGhpLmNvbS8xMDc2Mi81LzIxNTI0NTc3OS0xNTM2OTk4NDAyLmpwZWdcIixcbiAgICBOQU1FMTogXCJTYW5kZWVwIFNpbmdoIEJpbmRyYVwiLFxuICAgIE5BTUUyOiBcIkdhZ2FucHJlZXQgS2F1clwiLFxuICAgIFNJRDogXCI4MjY1XCIsXG4gICAgU1FVQVJFX1BJQ19VUkw6XG4gICAgICBcImh0dHBzOi8vbWVkaWFjZG4uamVldmFuc2F0aGkuY29tLzEwNzYyLzUvMjE1MjQ1NzgzLTE1MzY5OTg0MDIuanBlZ1wiLFxuICAgIFNUT1JZOlxuICAgICAgXCJJdCBpcyBteSBpbWVuc2UgcGxlYXN1cmUgdG8gc2F5IHRoYXQgSmVldmFuc2F0aGkgaXMgJ1RoZSBQbGF0Zm9ybScgd2hlcmUgSSBtZXQgbXkgc291bG1hdGUuIEl0IGhhcyBiZWVuIGFsbW9zdCBzaXggbW9udGggd2UgaGF2ZSBiZWVuIHRvZ2V0aGVyIGFuZCBJIGFtIHZlcnkgaGFwcHkgdG8gc2F5IHdlIGFyZSBlbmpveWluZyBldmVyeSBwYXJ0IG9mIGl0LiBUaGFua3MgSmVldmFuc2F0aGkuY29tIGZvciBtYWtpbmcgbWUgbWVldCBteSBkcmVhbSBnaXJsLiBKZWV2YW5zYXRoaS5jb20gcGxhdGZvcm0gaXMgbGlrZSBhIG1pcmFjbGUuWW91IG5ldmVyIGtub3cgd2hhdCBpcyBjb21pbmcgZm9yIHlvdSAuXCIsXG4gICAgU1RPUllJRDogXCIxNzc0MVwiLFxuICAgIFlFQVI6IFwiMjAxOFwiLFxuICAgIGNvbWJpbmVkTmFtZTogXCJTYW5kZWVwICYgR2FnYW5wcmVldFwiLFxuICAgIG1hcnJpYWdlRGF0ZTogXCIyMSwgQXVndXN0IDIwMThcIlxuICB9XG5dO1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgZG90czogZmFsc2UsXG4gIHN3aXBlOiB0cnVlLFxuICB0b3VjaE1vdmU6IHRydWUsXG4gIGluZmluaXRlOiBmYWxzZSxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgc3BlZWQ6IDUwMCxcbiAgc2xpZGVzVG9TaG93OiAxLjA1LFxuICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgY2VudGVyUGFkZGluZzogXCI0cHhcIlxufTtcblxuZnVuY3Rpb24gTWF0Y2hQcm9maWxlcygpIHtcbiAgdmFyIFtwcm9maWxlcywgc2V0UHJvZmlsZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBcImh0dHBzOi8vd3d3LmplZXZhbnNhdGhpLmNvbS9zdWNjZXNzU3RvcnkvZmlsdGVyP3NvdXJjZVR5cGU9aG9tZXBhZ2Umc291cmNlVmFsdWU9aG9tZXBhZ2UmZnJvbVNQQT0xXCJcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc1wiLCByZXNwb25zZSk7XG4gICAgICBzZXRQcm9maWxlcyhyZXNwb25zZS5kYXRhLnJlc3VsdCk7XG4gICAgfSBjYXRjaCB7fVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmdcIj5cbiAgICAgICAgPGgzPkxha2hzIG9mIENvdXBsZXM8L2gzPlxuXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIE1hdGNoZWQgYnkgPHN0cm9uZz4gSmVldmFuc2F0aGk8L3N0cm9uZz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgIHtwcm9maWxlcy5tYXAoZnVuY3Rpb24ocHJvZmlsZSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCByZ2JhKDAsMCwwLDEpIDEyMCUpLHVybCgke3Byb2ZpbGUuU1FVQVJFX1BJQ19VUkx9KWBcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8aDI+e3Byb2ZpbGUuY29tYmluZWROYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4+YE1BUlJJRUQgU0lOQ0UgJHtwcm9maWxlLm1hcnJpYWdlRGF0ZX1gPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9TbGlkZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDMycHggMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9maWxlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICB3aWR0aDogOTglO1xuICAgICAgICAgIGhlaWdodDogMjI4cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogIzhhOWRiMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgY29sb3I6ICNkOTQ3NWM7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogNTBweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjE1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvcmRlciB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBtYXJnaW46IDE1cHggYXV0byA1cHggYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBjbGFzcyBNYXRjaFByb2ZpbGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbi8vICAgc3RhdGUgPSB7IHByb2ZpbGVzOiBhcnIgfTtcbi8vICAgcmVuZGVyKCkge1xuXG4vLyAgICAgY29uc3QgeyBwcm9maWxlcyB9ID0gdGhpcy5zdGF0ZTtcbi8vICAgICBjb25zb2xlLmxvZyhwcm9maWxlcyk7XG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XG4vLyAgICAgICAgICAgPGgzPkxha2hzIG9mIENvdXBsZXM8L2gzPlxuXG4vLyAgICAgICAgICAgPHNwYW4+XG4vLyAgICAgICAgICAgICBNYXRjaGVkIGJ5IDxzdHJvbmc+IEplZXZhbnNhdGhpPC9zdHJvbmc+XG4vLyAgICAgICAgICAgPC9zcGFuPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuLy8gICAgICAgICAgIHtwcm9maWxlcy5tYXAoZnVuY3Rpb24ocHJvZmlsZSkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XG4vLyAgICAgICAgICAgICAgICAgPGRpdlxuLy8gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxuLy8gICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbi8vICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCByZ2JhKDAsMCwwLDEpIDEyMCUpLHVybCgke3Byb2ZpbGUuU1FVQVJFX1BJQ19VUkx9KWBcbi8vICAgICAgICAgICAgICAgICAgIH19XG4vLyAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxoMj57cHJvZmlsZS5jb21iaW5lZE5hbWV9PC9oMj5cbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj48L2Rpdj5cbi8vICAgICAgICAgICAgICAgICAgICAgPHNwYW4+YE1BUlJJRUQgU0lOQ0UgJHtwcm9maWxlLm1hcnJpYWdlRGF0ZX1gPC9zcGFuPlxuLy8gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgKTtcbi8vICAgICAgICAgICB9KX1cbi8vICAgICAgICAgPC9TbGlkZXI+XG4vLyAgICAgICAgIDxzdHlsZSBqc3g+e2Bcbi8vICAgICAgICAgICAuY29udGFpbmVyIHtcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDMycHggMjRweDtcbi8vICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAucHJvZmlsZSB7XG4vLyAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gICAgICAgICAgIH1cblxuLy8gICAgICAgICAgIC5pbWFnZSB7XG4vLyAgICAgICAgICAgICB3aWR0aDogOTglO1xuLy8gICAgICAgICAgICAgaGVpZ2h0OiAyMjhweDtcbi8vICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgIH1cblxuLy8gICAgICAgICAgIGgzIHtcbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4vLyAgICAgICAgICAgICBjb2xvcjogIzhhOWRiMDtcbi8vICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbi8vICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbi8vICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIHNwYW4ge1xuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBzdHJvbmcge1xuLy8gICAgICAgICAgICAgY29sb3I6ICNkOTQ3NWM7XG4vLyAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgLnRleHQge1xuLy8gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICAgICAgICAgYm90dG9tOiA1MHB4O1xuLy8gICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIC50ZXh0IGgyIHtcbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbi8vICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI3KTtcbi8vICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAudGV4dCBzcGFuIHtcbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbi8vICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuLy8gICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuMTVweDtcbi8vICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuLy8gICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbi8vICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbi8vICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAuYm9yZGVyIHtcbi8vICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuLy8gICAgICAgICAgICAgd2lkdGg6IDgwJTtcbi8vICAgICAgICAgICAgIG1hcmdpbjogMTVweCBhdXRvIDVweCBhdXRvO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgYH08L3N0eWxlPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBNYXRjaFByb2ZpbGVzO1xuIl19 */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MatchProfiles.js */"));
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
//# sourceMappingURL=index.js.8de58f5b08d178d972de.hot-update.js.map