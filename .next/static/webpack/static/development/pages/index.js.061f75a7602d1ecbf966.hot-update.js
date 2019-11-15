webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/MembershipPlans.js":
/*!********************************************!*\
  !*** ./components/home/MembershipPlans.js ***!
  \********************************************/
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
/* harmony import */ var _static_svgHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/svgHandler */ "./static/svgHandler.js");

var _jsxFileName = "/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MembershipPlans.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 //import MembershipDetail from "./OldMembershipDetail";



var settings = {
  dots: false,
  swipe: true,
  touchMove: true,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 1.25,
  slidesToScroll: 0.5,
  centerMode: true,
  centerPadding: "4px"
};

function MembershipPlans() {
  return __jsx("div", {
    className: "jsx-2402952146" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2402952146" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2402952146",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Upgrade your account"), __jsx("strong", {
    className: "jsx-2402952146",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Membership ", __jsx("span", {
    className: "jsx-2402952146",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, " Plans"), " ")), __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    className: "jsx-2402952146" + " " + (settings && settings.className != null && settings.className || "slider"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), _static_data__WEBPACK_IMPORTED_MODULE_4__["membershipDetail"].map(function (_ref, index) {
    var iconColor = _ref.iconColor,
        list = _ref.list,
        backgroundColor = _ref.backgroundColor,
        buttonTextColor = _ref.buttonTextColor,
        textColor = _ref.textColor,
        title = _ref.title,
        borderColor = _ref.borderColor,
        buttonText = _ref.buttonText,
        buttonColor = _ref.buttonColor,
        link = _ref.link;
    return __jsx("div", {
      style: {
        backgroundColor: backgroundColor
      },
      className: "jsx-2402952146" + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("span", {
      style: {
        color: textColor,
        borderColor: borderColor
      },
      className: "jsx-2402952146" + " " + "card-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, title), list.map(function (_ref2) {
      var text = _ref2.text,
          iconColor = _ref2.iconColor,
          textColor = _ref2.textColor,
          iconStyle = _ref2.iconStyle,
          iconType = _ref2.iconType;
      return __jsx("div", {
        style: {
          height: 34
        },
        className: "jsx-2402952146",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(_static_svgHandler__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: iconType,
        css: iconStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), __jsx("span", {
        style: {
          color: textColor
        },
        className: "jsx-2402952146" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, text));
    }), __jsx("div", {
      style: {
        textAlign: "center"
      },
      className: "jsx-2402952146",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("a", {
      href: link,
      className: "jsx-2402952146",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("button", {
      style: {
        backgroundColor: buttonColor,
        color: buttonTextColor
      },
      className: "jsx-2402952146",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, buttonText))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2402952146",
    __self: this
  }, ".container.jsx-2402952146{padding:42px 0px;background-image:url(\"../../static/images/people_together_back.jpg\");background-repeat-x:repeat;background-position:left bottom;background-size:contain;}.slider.jsx-2402952146{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow-x:scroll;padding:0px 24px;margin-top:20px;width:600px;}.heading.jsx-2402952146{padding:0px 24px;}h3.jsx-2402952146{font-size:12px;font-weight:700;color:#8a9db0;margin-bottom:4px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;text-transform:uppercase;}span.jsx-2402952146{color:black;}strong.jsx-2402952146{font-size:20px;color:#d9475c;}.card.jsx-2402952146{box-shadow:0 2px 6px -1px rgba(38,48,140,0.2);border-radius:4px;margin-right:15px;padding:24px;}.text.jsx-2402952146{font-size:13px;font-weight:500;padding-left:8px;}.card-heading.jsx-2402952146{font-size:20px;color:#14202b;font-weight:500;border-top:2px solid;padding:0.5rem 0rem;display:inline-block;}button.jsx-2402952146{font-size:14px;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;padding:10px 20px;margin:0 0 0 -60px;left:50%;bottom:30px;display:inline-block;font-weight:600;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;line-height:1.5;border-radius:0.25rem;font-family:\"Cabin\",sans-serif;font-weight:700;color:#fff;line-height:14px;margin:auto !important;width:100% !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Bhbmthai9Eb2N1bWVudHMvbXktd29yay93aXRoLXJlZHV4LXRodW5rL2NvbXBvbmVudHMvaG9tZS9NZW1iZXJzaGlwUGxhbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEZrQixBQUc0QixBQVFKLEFBT0ksQUFJRixBQVFILEFBR0csQUFLa0MsQUFRbEMsQUFNQSxBQVNBLFlBOUJqQixHQVJrQixBQVdGLEFBYUUsQUFNRixBQVVHLEVBM0RvRCxBQWV2RSxZQWdCQSxBQW1Ca0IsRUE5QkYsQUF3QkcsY0F2QkMsQUE4QkcsQ0FoQkgsRUFVcEIsZUF2QnVCLENBY0gsRUFnQkUsUUE1Q0YsUUE2QkwsSUFwQ2MsQUFvRE4sTUE1Q0osR0E4Qm5CLEtBcUJvQixPQU5wQixFQTVDa0IsSUFSZ0IsS0EyRGIsT0FsRFAsWUFDZCxBQWtEVyxRQTNEZSxDQTREWixZQUVTLE1BMUNJLEtBbkIzQixVQThEa0IsVUExQ2xCLE1BMkN3QixzQkFDTCxxRkFDWSw2QkFDYixnQkFDTSxzQkFDVSwrQkFFaEIsZ0JBQ0wsV0FDTSxpQkFDTSx1QkFDRCxzQkFDeEIiLCJmaWxlIjoiL2hvbWUvcGFua2FqL0RvY3VtZW50cy9teS13b3JrL3dpdGgtcmVkdXgtdGh1bmsvY29tcG9uZW50cy9ob21lL01lbWJlcnNoaXBQbGFucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG4vL2ltcG9ydCBNZW1iZXJzaGlwRGV0YWlsIGZyb20gXCIuL09sZE1lbWJlcnNoaXBEZXRhaWxcIjtcbmltcG9ydCB7IG1lbWJlcnNoaXBEZXRhaWwgfSBmcm9tIFwiLi4vLi4vc3RhdGljL2RhdGFcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9zdGF0aWMvc3ZnSGFuZGxlclwiO1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgZG90czogZmFsc2UsXG4gIHN3aXBlOiB0cnVlLFxuICB0b3VjaE1vdmU6IHRydWUsXG4gIGluZmluaXRlOiBmYWxzZSxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgc3BlZWQ6IDUwMCxcbiAgc2xpZGVzVG9TaG93OiAxLjI1LFxuICBzbGlkZXNUb1Njcm9sbDogMC41LFxuICBjZW50ZXJNb2RlOiB0cnVlLFxuICBjZW50ZXJQYWRkaW5nOiBcIjRweFwiXG59O1xuXG5mdW5jdGlvbiBNZW1iZXJzaGlwUGxhbnMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlxuICAgICAgICA8aDM+VXBncmFkZSB5b3VyIGFjY291bnQ8L2gzPlxuXG4gICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgTWVtYmVyc2hpcCA8c3Bhbj4gUGxhbnM8L3NwYW4+e1wiIFwifVxuICAgICAgICA8L3N0cm9uZz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiIHsuLi5zZXR0aW5nc30+XG4gICAgICAgIHttZW1iZXJzaGlwRGV0YWlsLm1hcChmdW5jdGlvbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uQ29sb3IsXG4gICAgICAgICAgICBsaXN0LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgYnV0dG9uVGV4dENvbG9yLFxuICAgICAgICAgICAgdGV4dENvbG9yLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBib3JkZXJDb2xvcixcbiAgICAgICAgICAgIGJ1dHRvblRleHQsXG4gICAgICAgICAgICBidXR0b25Db2xvcixcbiAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGluZGV4XG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvciB9fSBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1oZWFkaW5nXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogdGV4dENvbG9yLCBib3JkZXJDb2xvciB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAge2xpc3QubWFwKGZ1bmN0aW9uKHtcbiAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgIGljb25Db2xvcixcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3IsXG4gICAgICAgICAgICAgICAgaWNvblN0eWxlLFxuICAgICAgICAgICAgICAgIGljb25UeXBlXG4gICAgICAgICAgICAgIH0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDM0IH19PlxuICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gc3R5bGU9e3sgY29sb3I6IGljb25Db2xvciB9fT5pY29uPC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT17aWNvblR5cGV9IGNzcz17aWNvblN0eWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCIgc3R5bGU9e3sgY29sb3I6IHRleHRDb2xvciB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17bGlua30+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBidXR0b25Db2xvcixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYnV0dG9uVGV4dENvbG9yXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtidXR0b25UZXh0fVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZzogNDJweCAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vc3RhdGljL2ltYWdlcy9wZW9wbGVfdG9nZXRoZXJfYmFjay5qcGdcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQteDogcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbGlkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAyNHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkaW5nIHtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogIzhhOWRiMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiAjZDk0NzVjO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAtMXB4IHJnYmEoMzgsIDQ4LCAxNDAsIDAuMik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICAgIC8vIG1pbi13aWR0aDogNzAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtaGVhZGluZyB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiAjMTQyMDJiO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwcmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIC8vIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICBtYXJnaW46IDAgMCAwIC02MHB4O1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICBib3R0b206IDMwcHg7XG4gICAgICAgICAgLy8gYmFja2dyb3VuZDogI2Q5NDc1YztcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJDYWJpblwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJzaGlwUGxhbnM7XG4iXX0= */\n/*@ sourceURL=/home/pankaj/Documents/my-work/with-redux-thunk/components/home/MembershipPlans.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (MembershipPlans);

/***/ })

})
//# sourceMappingURL=index.js.061f75a7602d1ecbf966.hot-update.js.map