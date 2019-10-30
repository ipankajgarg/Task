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

var arr = ["../../static/images/nhm_img1.jpeg", "../../static/images/nhm_img2.jpeg", "../../static/images/nhm_img3.jpeg", "../../static/images/nhm_img4.jpeg"];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

function MatchProfiles() {
  return __jsx("div", {
    className: "jsx-3122954223" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3122954223" + " " + "fontreg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Matched By Jeevansathi"), __jsx("div", {
    className: "jsx-3122954223" + " " + "carousel-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
    onChange: function onChange(data) {
      console.log(data);
    },
    showIndicators: false,
    showStatus: false // autoPlay={true}
    ,
    showThumbs: false,
    showArrows: true,
    infiniteLoop: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, arr.map(function (image) {
    return __jsx("div", {
      className: "jsx-3122954223",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("img", {
      src: image,
      className: "jsx-3122954223",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-3122954223",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Here you go"));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3122954223",
    __self: this
  }, ".container.jsx-3122954223{padding:30px 0px 40px 0px;text-align:center;}h3.jsx-3122954223{color:#34495e;font-size:20px;margin:0px;margin-bottom:50px;}.carousel-container.jsx-3122954223{padding:0px 30px;}.slide.jsx-3122954223{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NYXRjaFByb2ZpbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEa0IsQUFHcUMsQUFJWixBQU1HLEFBR00sY0FSUixHQU1qQixNQUdBLEdBYm9CLEdBS1AsV0FDUSxJQUxyQixlQU1BIiwiZmlsZSI6Ii9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NYXRjaFByb2ZpbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIjtcblxuLy8gaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG4vLyBpbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcblxuY29uc3QgYXJyID0gW1xuICBcIi4uLy4uL3N0YXRpYy9pbWFnZXMvbmhtX2ltZzEuanBlZ1wiLFxuICBcIi4uLy4uL3N0YXRpYy9pbWFnZXMvbmhtX2ltZzIuanBlZ1wiLFxuICBcIi4uLy4uL3N0YXRpYy9pbWFnZXMvbmhtX2ltZzMuanBlZ1wiLFxuICBcIi4uLy4uL3N0YXRpYy9pbWFnZXMvbmhtX2ltZzQuanBlZ1wiXG5dO1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgZG90czogdHJ1ZSxcbiAgaW5maW5pdGU6IHRydWUsXG4gIHNwZWVkOiA1MDAsXG4gIHNsaWRlc1RvU2hvdzogMSxcbiAgc2xpZGVzVG9TY3JvbGw6IDFcbn07XG5cbmZ1bmN0aW9uIE1hdGNoUHJvZmlsZXMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250cmVnXCI+TWF0Y2hlZCBCeSBKZWV2YW5zYXRoaTwvaDM+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udGFpbmVyXCI+XG4gICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgIG9uQ2hhbmdlPXtkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgc2hvd0luZGljYXRvcnM9e2ZhbHNlfVxuICAgICAgICAgIHNob3dTdGF0dXM9e2ZhbHNlfVxuICAgICAgICAgIC8vIGF1dG9QbGF5PXt0cnVlfVxuICAgICAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfVxuICAgICAgICAgIHNob3dBcnJvd3M9e3RydWV9XG4gICAgICAgICAgaW5maW5pdGVMb29wPXt0cnVlfVxuICAgICAgICA+XG4gICAgICAgICAge2Fyci5tYXAoZnVuY3Rpb24oaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSAvPlxuICAgICAgICAgICAgICAgIDxwPkhlcmUgeW91IGdvPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDBweCA0MHB4IDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgIGNvbG9yOiAjMzQ0OTVlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJvdXNlbC1jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zbGlkZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0Y2hQcm9maWxlcztcbiJdfQ== */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MatchProfiles.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (MatchProfiles);

/***/ })

})
//# sourceMappingURL=index.js.35a81bf6fb7b5be1ae3b.hot-update.js.map