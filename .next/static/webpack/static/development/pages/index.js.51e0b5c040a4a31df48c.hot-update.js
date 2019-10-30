webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/MatchProfiles.js":
/*!******************************************!*\
  !*** ./components/home/MatchProfiles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/index.js");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MatchProfiles.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

var arr = [{
  imageURL: "../../static/images/nhm_img1.jpeg",
  text: "Abhinay weds Shalini"
}, {
  imageURL: "../../static/images/nhm_img2.jpeg",
  text: "Parul weds Vipin"
}, {
  imageURL: "../../static/images/nhm_img3.jpeg",
  text: "Khushbu weds Shah Jaini"
}, {
  imageURL: "../../static/images/nhm_img4.jpeg",
  text: "Nikita weds Keval"
}];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

function MatchProfiles() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      count = _useState[0],
      setCount = _useState[1];

  return __jsx("div", {
    className: "jsx-3122954223" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3122954223" + " " + "fontreg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Matched By Jeevansathi"), __jsx("div", {
    className: "jsx-3122954223" + " " + "carousel-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
    onChange: function onChange(data) {
      return setCount(data);
    },
    showIndicators: false,
    showStatus: false,
    autoPlay: true,
    showThumbs: false,
    showArrows: true,
    infiniteLoop: true,
    selectedItem: count,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, arr.map(function (profile) {
    return __jsx("div", {
      className: "jsx-3122954223",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("img", {
      src: profile.imageURL,
      className: "jsx-3122954223",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }));
  })), __jsx("p", {
    className: "jsx-3122954223" + " " + "fontreg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, arr[count].text)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3122954223",
    __self: this
  }, ".container.jsx-3122954223{padding:30px 0px 40px 0px;text-align:center;}h3.jsx-3122954223{color:#34495e;font-size:20px;margin:0px;margin-bottom:50px;}.carousel-container.jsx-3122954223{padding:0px 30px;}.slide.jsx-3122954223{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NYXRjaFByb2ZpbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEa0IsQUFHcUMsQUFJWixBQU1HLEFBR00sY0FSUixHQU1qQixNQUdBLEdBYm9CLEdBS1AsV0FDUSxJQUxyQixlQU1BIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NYXRjaFByb2ZpbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xuXG4vLyBpbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcbi8vIGltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xuXG5jb25zdCBhcnIgPSBbXG4gIHtcbiAgICBpbWFnZVVSTDogXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL25obV9pbWcxLmpwZWdcIixcbiAgICB0ZXh0OiBcIkFiaGluYXkgd2VkcyBTaGFsaW5pXCJcbiAgfSxcbiAgeyBpbWFnZVVSTDogXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL25obV9pbWcyLmpwZWdcIiwgdGV4dDogXCJQYXJ1bCB3ZWRzIFZpcGluXCIgfSxcbiAge1xuICAgIGltYWdlVVJMOiBcIi4uLy4uL3N0YXRpYy9pbWFnZXMvbmhtX2ltZzMuanBlZ1wiLFxuICAgIHRleHQ6IFwiS2h1c2hidSB3ZWRzIFNoYWggSmFpbmlcIlxuICB9LFxuICB7IGltYWdlVVJMOiBcIi4uLy4uL3N0YXRpYy9pbWFnZXMvbmhtX2ltZzQuanBlZ1wiLCB0ZXh0OiBcIk5pa2l0YSB3ZWRzIEtldmFsXCIgfVxuXTtcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG4gIGRvdHM6IHRydWUsXG4gIGluZmluaXRlOiB0cnVlLFxuICBzcGVlZDogNTAwLFxuICBzbGlkZXNUb1Nob3c6IDEsXG4gIHNsaWRlc1RvU2Nyb2xsOiAxXG59O1xuXG5mdW5jdGlvbiBNYXRjaFByb2ZpbGVzKCkge1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250cmVnXCI+TWF0Y2hlZCBCeSBKZWV2YW5zYXRoaTwvaDM+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udGFpbmVyXCI+XG4gICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgIG9uQ2hhbmdlPXtkYXRhID0+IHNldENvdW50KGRhdGEpfVxuICAgICAgICAgIHNob3dJbmRpY2F0b3JzPXtmYWxzZX1cbiAgICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cbiAgICAgICAgICBhdXRvUGxheT17dHJ1ZX1cbiAgICAgICAgICBzaG93VGh1bWJzPXtmYWxzZX1cbiAgICAgICAgICBzaG93QXJyb3dzPXt0cnVlfVxuICAgICAgICAgIGluZmluaXRlTG9vcD17dHJ1ZX1cbiAgICAgICAgICBzZWxlY3RlZEl0ZW09e2NvdW50fVxuICAgICAgICA+XG4gICAgICAgICAge2Fyci5tYXAoZnVuY3Rpb24ocHJvZmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZmlsZS5pbWFnZVVSTH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250cmVnXCI+e2Fycltjb3VudF0udGV4dH08L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDBweCA0MHB4IDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgIGNvbG9yOiAjMzQ0OTVlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJvdXNlbC1jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zbGlkZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0Y2hQcm9maWxlcztcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MatchProfiles.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (MatchProfiles);

/***/ })

})
//# sourceMappingURL=index.js.51e0b5c040a4a31df48c.hot-update.js.map