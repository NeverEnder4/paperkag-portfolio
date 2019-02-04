module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/bio/Bio.js":
/*!*******************************!*\
  !*** ./components/bio/Bio.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tachyons */ "./node_modules/tachyons/css/tachyons.css");
/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tachyons__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\bio\\Bio.js";




var Bio = function Bio() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4074555459" + " " + "bio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4074555459" + " " + "bio-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/street-art-4.jpeg",
    alt: "avatar",
    className: "jsx-4074555459" + " " + "avatar ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-4074555459" + " " + "name fw6 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Kenyatta Barnette"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-4074555459" + " " + "location fw2 ttu tracked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Los Angeles"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4074555459" + " " + "center ph3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur ading elit. Unde, totam asci. Facilis voluptas porro eos lium enim nihil impedit dicta odit tempora, fuga harum corporis non blanditiis fugiat voluptates! Nostrum?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4074555459" + " " + "center ph3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur ading elit. Unde, totam asci. Facilis voluptas porro eos lium enim nihil impedit dicta odit tempora, fuga harum corporis non blanditiis fugiat voluptates! Nostrum?")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4074555459",
    css: ".bio.jsx-4074555459{padding:2rem 0;}.bio-content.jsx-4074555459{text-align:center;}.bio.jsx-4074555459 .name.jsx-4074555459{font-size:1.25rem;}.bio.jsx-4074555459 .location.jsx-4074555459{font-size:0.875rem;}.bio.jsx-4074555459 p.jsx-4074555459{max-width:30em;font-size:1rem;line-height:1.4;}.avatar.jsx-4074555459{border-radius:8px;border:1px solid #000000;width:64px;}@media (min-width:700px){.bio.jsx-4074555459{padding:4rem 0;}.bio.jsx-4074555459 .name.jsx-4074555459{font-size:1.45rem;}.bio.jsx-4074555459 .location.jsx-4074555459{font-size:1rem;}.bio.jsx-4074555459 p.jsx-4074555459{max-width:40em;font-size:1.2rem;margin-bottom:2rem;}.avatar.jsx-4074555459{width:120px;}}@media (min-width:1440px){.avatar.jsx-4074555459{width:200px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcYmlvXFxCaW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JrQixBQUcwQixBQUlHLEFBSUEsQUFJQyxBQUlKLEFBTUcsQUFNRCxBQUlHLEFBSUgsQUFHQSxBQU1ILEFBTUEsWUFMZCxBQU1BLEdBbkRGLEFBZ0JpQixBQVlmLEFBUUEsQUFHbUIsR0FuQ3JCLEFBSUEsQUFjMkIsQUFVekIsQ0FwQkYsV0FLa0IsRUF1QkssV0FqQlYsR0FMYixLQXVCRSxHQWpCRiIsImZpbGUiOiJDOlxcVXNlcnNcXGFwZXR0XFx3ZWItcHJvamVjdHNcXHBhcGVyS0FHXFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXGJpb1xcQmlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd0YWNoeW9ucyc7XG5cbmNvbnN0IEJpbyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJpb1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaW8tY29udGVudFwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvc3RyZWV0LWFydC00LmpwZWdcIiBjbGFzc05hbWU9XCJhdmF0YXIgXCIgYWx0PVwiYXZhdGFyXCIgLz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm5hbWUgZnc2IFwiPktlbnlhdHRhIEJhcm5ldHRlPC9oMT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxvY2F0aW9uIGZ3MiB0dHUgdHJhY2tlZFwiPkxvcyBBbmdlbGVzPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2VudGVyIHBoM1wiPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaW5nIGVsaXQuIFVuZGUsIHRvdGFtIGFzY2kuXG4gICAgICAgICAgRmFjaWxpcyB2b2x1cHRhcyBwb3JybyBlb3MgbGl1bSBlbmltIG5paGlsIGltcGVkaXQgZGljdGEgb2RpdCB0ZW1wb3JhLFxuICAgICAgICAgIGZ1Z2EgaGFydW0gY29ycG9yaXMgbm9uIGJsYW5kaXRpaXMgZnVnaWF0IHZvbHVwdGF0ZXMhIE5vc3RydW0/XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2VudGVyIHBoM1wiPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaW5nIGVsaXQuIFVuZGUsIHRvdGFtIGFzY2kuXG4gICAgICAgICAgRmFjaWxpcyB2b2x1cHRhcyBwb3JybyBlb3MgbGl1bSBlbmltIG5paGlsIGltcGVkaXQgZGljdGEgb2RpdCB0ZW1wb3JhLFxuICAgICAgICAgIGZ1Z2EgaGFydW0gY29ycG9yaXMgbm9uIGJsYW5kaXRpaXMgZnVnaWF0IHZvbHVwdGF0ZXMhIE5vc3RydW0/XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYmlvIHtcbiAgICAgICAgICBwYWRkaW5nOiAycmVtIDA7XG4gICAgICAgIH1cblxuICAgICAgICAuYmlvLWNvbnRlbnQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iaW8gLm5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iaW8gLmxvY2F0aW9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJpbyBwIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDMwZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAuYmlvIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRyZW0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmlvIC5uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40NXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmlvIC5sb2NhdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iaW8gcCB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmlvO1xuIl19 */\n/*@ sourceURL=C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\bio\\Bio.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Bio);

/***/ }),

/***/ "./components/contact/Contact.js":
/*!***************************************!*\
  !*** ./components/contact/Contact.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\contact\\Contact.js";



var Contact = function Contact() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3403071563" + " " + "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3403071563" + " " + "contact-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-3403071563" + " " + "social-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/icons/phone-white.svg",
    className: "jsx-3403071563" + " " + "phone-icon icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3403071563",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "555-555-5555")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-3403071563" + " " + "social-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/icons/mail-white.svg",
    className: "jsx-3403071563" + " " + "mail-icon icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3403071563",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "paperkag@gmail.com")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-3403071563" + " " + "social-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/icons/insta-white.svg",
    className: "jsx-3403071563" + " " + "instagram-icon icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3403071563",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "mf.kag"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3403071563",
    css: ".contact.jsx-3403071563{box-sizing:border-box;width:100%;}.contact-container.jsx-3403071563{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:50%;margin:0 auto;}.title.jsx-3403071563{font-family:'Baloo Thambi';font-size:2rem;text-transform:uppercase;margin:0 0 1rem 0;}.social-link.jsx-3403071563{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;margin-bottom:1rem;-webkit-transition:opacity 100ms ease-in-out;transition:opacity 100ms ease-in-out;}.social-link.jsx-3403071563:hover,.social-link.jsx-3403071563:active{opacity:0.6;}.social-link.jsx-3403071563:hover img.jsx-3403071563{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.social-link.jsx-3403071563 span.jsx-3403071563{font-family:'Baloo Thambi';color:rgba(250,250,250,0.8);font-weight:100;}.social-link.jsx-3403071563 .icon.jsx-3403071563{height:2.5rem;margin-right:10px;-webkit-transition:-webkit-transform 200ms ease-in;-webkit-transition:transform 200ms ease-in;transition:transform 200ms ease-in;}@media (min-width:500px){.contact-container.jsx-3403071563{width:30%;}@media (min-width:700px){.contact-container.jsx-3403071563{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:35rem;}}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcY29udGFjdFxcQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmtCLEFBR2lDLEFBS1QsQUFRYyxBQU1kLEFBU0QsQUFJWSxBQUlHLEFBS2IsQUFPRixBQUlTLFVBSHJCLEVBcEJGLEVBYW9CLFFBekNQLEtBYUksQUF1QmdCLEtBTUksQ0F6Q3JDLFNBYTJCLGFBdUJULFlBdEJFLEVBcUNKLEVBZGhCLEdBakN3QixBQWNILE9Ba0NuQixHQXJCRixDQWhCQSxtRUFWZ0MsU0FxQ2hDLE1BdkJ1QixrREFDRixtQkFDa0IsK0JBZjNCLFVBQ0ksY0FDaEIsMkJBY0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxhcGV0dFxcd2ViLXByb2plY3RzXFxwYXBlcktBR1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFxjb250YWN0XFxDb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ29udGFjdCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jb250YWluZXJcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtbGlua1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaWNvbnMvcGhvbmUtd2hpdGUuc3ZnXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBob25lLWljb24gaWNvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3Bhbj41NTUtNTU1LTU1NTU8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtbGlua1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY29ucy9tYWlsLXdoaXRlLnN2Z1wiIGNsYXNzTmFtZT1cIm1haWwtaWNvbiBpY29uXCIgLz5cbiAgICAgICAgICA8c3Bhbj5wYXBlcmthZ0BnbWFpbC5jb208L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtbGlua1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaWNvbnMvaW5zdGEtd2hpdGUuc3ZnXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImluc3RhZ3JhbS1pY29uIGljb25cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4+bWYua2FnPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFjdC1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdCYWxvbyBUaGFtYmknO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAgICAgfVxuICAgICAgICAuc29jaWFsLWxpbmsge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNvY2lhbC1saW5rOmhvdmVyLFxuICAgICAgICAuc29jaWFsLWxpbms6YWN0aXZlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cblxuICAgICAgICAuc29jaWFsLWxpbms6aG92ZXIgaW1nIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAuc29jaWFsLWxpbmsgc3BhbiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdCYWxvbyBUaGFtYmknO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuOCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgfVxuICAgICAgICAuc29jaWFsLWxpbmsgLmljb24ge1xuICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xuICAgICAgICAgIC5jb250YWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAuY29udGFjdC1jb250YWluZXIge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIHdpZHRoOiAzNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iXX0= */\n/*@ sourceURL=C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\contact\\Contact.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/footer/Footer.js":
/*!*************************************!*\
  !*** ./components/footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\footer\\Footer.js";



var Footer = function Footer() {
  var getYear = function getYear() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      },
      __self: this
    }, new Date().getFullYear());
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-3990874016" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-3990874016" + " " + "logo-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3990874016" + " " + "logo-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3990874016" + " " + "brand-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "PAPERKAG"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3990874016" + " " + "artist-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\xA9 ", getYear(), " Kenyatta Barnette"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3990874016",
    css: ".footer.jsx-3990874016{width:100%;padding:2rem 0 1rem 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.logo-link.jsx-3990874016{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;padding:0 10px;}.footer.jsx-3990874016 a.jsx-3990874016{text-dcoration:none;color:rgba(250,250,250,0.8);}.logo-link.jsx-3990874016 .logo-text.jsx-3990874016{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}.logo-text.jsx-3990874016{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}.logo-link.jsx-3990874016 .brand-name.jsx-3990874016{font-size:1.5rem;font-family:'SEGA LOGO FONT';font-weight:200;}.logo-link.jsx-3990874016 .artist-name.jsx-3990874016{font-family:'Baloo Thambi';}@media (min-width:700px){.footer.jsx-3990874016{padding:3rem 0 2rem 0;}.logo-link.jsx-3990874016 .brand-name.jsx-3990874016{font-size:3rem;font-family:'SEGA LOGO FONT';font-weight:200;}.logo-link.jsx-3990874016 .artist-name.jsx-3990874016{font-family:'Baloo Thambi';}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcZm9vdGVyXFxGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWtCLEFBR3NCLEFBT0UsQUFPTyxBQUtFLEFBSVQsQUFLSSxBQU1VLEFBSUgsQUFJUCxBQU1ZLFdBL0NQLElBMENTLEVBZEYsR0FkRSxFQXdCL0IsS0FKRixBQWNFLE1BL0NhLFdBMENLLEVBZEYsRUFkbEIsWUE2QkUsRUFkRixZQXZCcUIsQUFnQkYsSUFKbkIsNkJBakJ5Qiw4QkFzQnpCLDhCQWhCdUIsdUNBTHZCLFdBTWlCLGVBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcZm9vdGVyXFxGb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGdldFllYXIgPSAoKSA9PiA8c3Bhbj57bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvc3Bhbj47XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsb2dvLWxpbmtcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXRleHRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmFuZC1uYW1lXCI+UEFQRVJLQUc8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aXN0LW5hbWVcIj5cbiAgICAgICAgICAgICZjb3B5OyB7Z2V0WWVhcigpfSBLZW55YXR0YSBCYXJuZXR0ZVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMCAxcmVtIDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvLWxpbmsge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciBhIHtcbiAgICAgICAgICB0ZXh0LWRjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28tbGluayAubG9nby10ZXh0IHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28tdGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvLWxpbmsgLmJyYW5kLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU0VHQSBMT0dPIEZPTlQnO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nby1saW5rIC5hcnRpc3QtbmFtZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdCYWxvbyBUaGFtYmknO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgcGFkZGluZzogM3JlbSAwIDJyZW0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9nby1saW5rIC5icmFuZC1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU0VHQSBMT0dPIEZPTlQnO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9nby1saW5rIC5hcnRpc3QtbmFtZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0JhbG9vIFRoYW1iaSc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9mb290ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXX0= */\n/*@ sourceURL=C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\footer\\Footer.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/head-tag/HeadTag.js":
/*!****************************************!*\
  !*** ./components/head-tag/HeadTag.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\head-tag\\HeadTag.js";



var HeadTag = function HeadTag() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "ie=edge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "The official portfolio of Kenyata Barnes.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Baloo+Thambi",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "PaperKAG Portfolio"));
};

/* harmony default export */ __webpack_exports__["default"] = (HeadTag);

/***/ }),

/***/ "./components/header/Header.js":
/*!*************************************!*\
  !*** ./components/header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\header\\Header.js";




var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-2042093091" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "jsx-2042093091" + " " + "logo-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2042093091" + " " + "logo-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2042093091" + " " + "brand-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "PAPERKAG"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2042093091" + " " + "artist-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "by Kenyatta Furious Barnette")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/kag-logo.jpg",
    className: "jsx-2042093091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2042093091",
    css: ".header.jsx-2042093091{width:100%;padding-top:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.logo-link.jsx-2042093091{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;padding:0 10px;}.header.jsx-2042093091 a.jsx-2042093091{text-dcoration:none;}.logo-link.jsx-2042093091 img.jsx-2042093091{height:5rem;}.logo-link.jsx-2042093091 .logo-text.jsx-2042093091{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}.logo-text.jsx-2042093091{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}.logo-link.jsx-2042093091 .brand-name.jsx-2042093091{font-size:2.4rem;color:#1d1d1d;font-family:'SEGA LOGO FONT';font-weight:200;}.logo-link.jsx-2042093091 .artist-name.jsx-2042093091{font-family:'Baloo Thambi';color:#333333;}@media (min-width:1024px){.logo-link.jsx-2042093091{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;padding:0 10px;}.logo-text.jsx-2042093091{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.logo-link.jsx-2042093091 .brand-name.jsx-2042093091{font-size:5rem;color:#1d1d1d;font-family:'SEGA LOGO FONT';font-weight:200;}.logo-link.jsx-2042093091 .artist-name.jsx-2042093091{font-family:'Baloo Thambi';color:#333333;font-size:1.2rem;}.logo-link.jsx-2042093091 img.jsx-2042093091{height:6rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcaGVhZGVyXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBR3NCLEFBT0UsQUFPTyxBQUlSLEFBSVUsQUFJVCxBQUtJLEFBT1UsQUFLWixBQU1BLEFBTUUsQUFPWSxBQU1mLFdBbkVHLENBa0JuQixBQWtERSxHQWJnQixFQXhCRixHQWpCaEIsT0F3QmdCLEFBd0JFLENBN0RILENBdURrQixFQXhCRixVQU8vQixBQXdCcUIsaUJBTkQsQUFPbEIsRUEvQmdCLGNBMUJHLEFBbUJGLEFBaUJJLEFBTUYsQUFTbkIsRUF4QkYsRUFaQSx3QkFwQnlCLG1DQXlCekIsQUF1QnVCLDhCQTFDQSxBQW9DRSxrQ0F6Q3pCLGdCQU1pQixBQW9DRSxhQU1qQixFQXpDRixBQW9DRSIsImZpbGUiOiJDOlxcVXNlcnNcXGFwZXR0XFx3ZWItcHJvamVjdHNcXHBhcGVyS0FHXFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXGhlYWRlclxcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICA8TGluayBocmVmPVwiL2luZGV4XCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibG9nby1saW5rXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXRleHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyYW5kLW5hbWVcIj5QQVBFUktBRzwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFydGlzdC1uYW1lXCI+YnkgS2VueWF0dGEgRnVyaW91cyBCYXJuZXR0ZTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMva2FnLWxvZ28uanBnXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nby1saW5rIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIgYSB7XG4gICAgICAgICAgdGV4dC1kY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nby1saW5rIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28tbGluayAubG9nby10ZXh0IHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28tdGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvLWxpbmsgLmJyYW5kLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgICAgICAgIGNvbG9yOiAjMWQxZDFkO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU0VHQSBMT0dPIEZPTlQnO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nby1saW5rIC5hcnRpc3QtbmFtZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdCYWxvbyBUaGFtYmknO1xuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAubG9nby1saW5rIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubG9nby10ZXh0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxvZ28tbGluayAuYnJhbmQtbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDVyZW07XG4gICAgICAgICAgICBjb2xvcjogIzFkMWQxZDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU0VHQSBMT0dPIEZPTlQnO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9nby1saW5rIC5hcnRpc3QtbmFtZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0JhbG9vIFRoYW1iaSc7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2dvLWxpbmsgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\header\\Header.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/info-wrapper/InfoWrapper.js":
/*!************************************************!*\
  !*** ./components/info-wrapper/InfoWrapper.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\info-wrapper\\InfoWrapper.js";



var InfoWrapper = function InfoWrapper(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2057928367" + " " + "info-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2057928367",
    css: ".info-wrapper.jsx-2057928367{background-color:#1d1d1d;color:rgba(250,250,250,0.8);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcaW5mby13cmFwcGVyXFxJbmZvV3JhcHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0IsQUFHb0MseUJBQ00sNEJBQ2pDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcaW5mby13cmFwcGVyXFxJbmZvV3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEluZm9XcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby13cmFwcGVyXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pbmZvLXdyYXBwZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWQ7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC44KTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mb1dyYXBwZXI7XG4iXX0= */\n/*@ sourceURL=C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\info-wrapper\\InfoWrapper.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoWrapper);

/***/ }),

/***/ "./components/menu/Menu.css":
/*!**********************************!*\
  !*** ./components/menu/Menu.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/menu/Menu.js":
/*!*********************************!*\
  !*** ./components/menu/Menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Menu_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu.css */ "./components/menu/Menu.css");
/* harmony import */ var _Menu_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Menu_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_paintings_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/paintings.jpg */ "./static/paintings.jpg");
/* harmony import */ var _static_paintings_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_paintings_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_kag_model_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/kag-model.jpg */ "./static/kag-model.jpg");
/* harmony import */ var _static_kag_model_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_kag_model_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_skating_2_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/skating-2.jpeg */ "./static/skating-2.jpeg");
/* harmony import */ var _static_skating_2_jpeg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_skating_2_jpeg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\menu\\Menu.js";








var Menu = function Menu() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2349725608", [_static_paintings_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _static_skating_2_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a, _static_kag_model_jpg__WEBPACK_IMPORTED_MODULE_5___default.a]]]) + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/art",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2349725608", [_static_paintings_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _static_skating_2_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a, _static_kag_model_jpg__WEBPACK_IMPORTED_MODULE_5___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2349725608", [_static_paintings_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _static_skating_2_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a, _static_kag_model_jpg__WEBPACK_IMPORTED_MODULE_5___default.a]]]) + " " + "menu-item-container art",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2349725608", [_static_paintings_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _static_skating_2_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a, _static_kag_model_jpg__WEBPACK_IMPORTED_MODULE_5___default.a]]]) + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Art")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/cinema",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2349725608", [_static_paintings_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _static_skating_2_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a, _static_kag_model_jpg__WEBPACK_IMPORTED_MODULE_5___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2349725608", [_static_paintings_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _static_skating_2_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a, _static_kag_model_jpg__WEBPACK_IMPORTED_MODULE_5___default.a]]]) + " " + "menu-item-container cinema",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2349725608", [_static_paintings_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _static_skating_2_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a, _static_kag_model_jpg__WEBPACK_IMPORTED_MODULE_5___default.a]]]) + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Cinema")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/modeling",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2349725608", [_static_paintings_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _static_skating_2_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a, _static_kag_model_jpg__WEBPACK_IMPORTED_MODULE_5___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2349725608", [_static_paintings_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _static_skating_2_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a, _static_kag_model_jpg__WEBPACK_IMPORTED_MODULE_5___default.a]]]) + " " + "menu-item-container model",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2349725608", [_static_paintings_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _static_skating_2_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a, _static_kag_model_jpg__WEBPACK_IMPORTED_MODULE_5___default.a]]]) + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Modeling")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2349725608",
    css: ".menu.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;padding:10px;box-sizing:border-box;}.menu-item-container.__jsx-style-dynamic-selector{-webkit-backface-visibility:hidden;backface-visibility:hidden;border:2px solid #000000;height:25vh;display:block;margin-bottom:10px;position:relative;-webkit-filter:grayscale(75%);filter:grayscale(75%);-webkit-transition:filter 300ms ease-out;transition:filter 300ms ease-out;}.menu.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover .menu-item-container.__jsx-style-dynamic-selector,.menu.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:focus .menu-item-container.__jsx-style-dynamic-selector{-webkit-filter:grayscale(0%);filter:grayscale(0%);}.menu-item-container.art.__jsx-style-dynamic-selector{background-image:url(".concat(_static_paintings_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, ");background-size:cover;background-position:center;}.menu-item-container.cinema.__jsx-style-dynamic-selector{background-image:url(").concat(_static_skating_2_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a, ");background-size:cover;background-position:50% 80%;}.menu-item-container.model.__jsx-style-dynamic-selector{background-image:url(").concat(_static_kag_model_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, ");background-size:cover;background-position:50% 15%;}.menu.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;}.menu-item-container.__jsx-style-dynamic-selector .text.__jsx-style-dynamic-selector{font-size:3rem;text-transform:uppercase;color:#ffffff;font-family:'Baloo Thambi';position:absolute;right:10px;bottom:0%;text-shadow:2px 2px rgba(0,0,0,0.5);}@media (min-width:1025px){.menu.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:5vh 10px;box-sizing:border-box;}.menu-item-container.__jsx-style-dynamic-selector{-webkit-backface-visibility:hidden;backface-visibility:hidden;text-align:center;border:2px solid #000000;width:32vw;height:75vh;display:block;margin-bottom:10px;position:static;-webkit-filter:grayscale(75%);filter:grayscale(75%);-webkit-transition:filter 100ms ease-out;transition:filter 100ms ease-out;}.menu.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover .menu-item-container.__jsx-style-dynamic-selector .text.__jsx-style-dynamic-selector,.menu.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:focus .menu-item-container.__jsx-style-dynamic-selector .text.__jsx-style-dynamic-selector{opacity:1;visibility:visible;}.menu-item-container.__jsx-style-dynamic-selector .text.__jsx-style-dynamic-selector{display:inline-block;font-size:5vw;text-transform:uppercase;color:#ffffff;font-family:'Baloo Thambi';position:static;text-shadow:2px 2px rgba(0,0,0,0.5);opacity:0;visibility:hidden;-webkit-transform:translate(0,200%);-ms-transform:translate(0,200%);transform:translate(0,200%);-webkit-transition:all 200ms ease-out;transition:all 200ms ease-out;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcbWVudVxcTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ29CLEFBRzBCLEFBT2MsQUFZTixBQUk4QixBQU1BLEFBTUEsQUFNOUIsQUFJTixBQVdNLEFBT1EsQUFjakIsQUFLVyxVQUpGLEtBaENJLE1BcUNULFFBSmhCLE1BSzJCLEtBckNiLFVBM0JoQixBQXNCQSxDQWxCd0IsQUFNQSxBQU1BLEdBWUssTUFxQ1gsRUE3RVMsQUF3REwsT0FQWSxJQWhDTCxBQU1DLEFBTUEsQ0FwQ04sQUFxRk8sTUFyQkYsQ0FoQlQsTUF4Q04sWUFDRSxBQXdDSCxDQXhCYixDQU1BLEFBTUEsQUFpRG9CLElBckJMLEtBZkgsR0F4Q1MsR0F3REwsQ0FxQjJCLEdBcENGLFFBZ0J2QixJQXhERSxVQXlERyxRQXhEQyxFQVhYLENBdUZDLEdBcENkLEtBaUJvQixFQW5FTCxBQXVGTyxhQXRGRSxDQW1FRSxJQW9CTyxHQWpDWixjQXJEckIsR0FzRDBCLENBN0NTLHFCQThDakMsTUFZbUMsK0NBekRyQyxDQThFa0MsMEJBcEJoQywwQ0FxQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxhcGV0dFxcd2ViLXByb2plY3RzXFxwYXBlcktBR1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFxtZW51XFxNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0ICcuL01lbnUuY3NzJztcbmltcG9ydCBiZ0ltZ0FydCBmcm9tICcuLi8uLi9zdGF0aWMvcGFpbnRpbmdzLmpwZyc7XG5pbXBvcnQgYmdJbWdNb2RlbCBmcm9tICcuLi8uLi9zdGF0aWMva2FnLW1vZGVsLmpwZyc7XG5pbXBvcnQgYmdJbWdDaW5lbWEgZnJvbSAnLi4vLi4vc3RhdGljL3NrYXRpbmctMi5qcGVnJztcblxuY29uc3QgTWVudSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bmF2PlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hcnRcIj5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW0tY29udGFpbmVyIGFydFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+QXJ0PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9jaW5lbWFcIj5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW0tY29udGFpbmVyIGNpbmVtYVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+Q2luZW1hPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RlbGluZ1wiPlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbS1jb250YWluZXIgbW9kZWxcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPk1vZGVsaW5nPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVudS1pdGVtLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXZoO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoNzUlKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAzMDBtcyBlYXNlLW91dDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVudSBhOmhvdmVyIC5tZW51LWl0ZW0tY29udGFpbmVyLFxuICAgICAgICAgIC5tZW51IGE6Zm9jdXMgLm1lbnUtaXRlbS1jb250YWluZXIge1xuICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51LWl0ZW0tY29udGFpbmVyLmFydCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtiZ0ltZ0FydH0pO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVudS1pdGVtLWNvbnRhaW5lci5jaW5lbWEge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7YmdJbWdDaW5lbWF9KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgODAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51LWl0ZW0tY29udGFpbmVyLm1vZGVsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2JnSW1nTW9kZWx9KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMTUlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51IGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51LWl0ZW0tY29udGFpbmVyIC50ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFsb28gVGhhbWJpJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgYm90dG9tOiAwJTtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDV2aCAxMHB4O1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudS1pdGVtLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xuICAgICAgICAgICAgICB3aWR0aDogMzJ2dztcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3NXZoO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoNzUlKTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDEwMG1zIGVhc2Utb3V0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudSBhOmhvdmVyIC5tZW51LWl0ZW0tY29udGFpbmVyIC50ZXh0LFxuICAgICAgICAgICAgLm1lbnUgYTpmb2N1cyAubWVudS1pdGVtLWNvbnRhaW5lciAudGV4dCB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZW51LWl0ZW0tY29udGFpbmVyIC50ZXh0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDV2dztcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFsb28gVGhhbWJpJztcbiAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIwMCUpO1xuXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIl19 */\n/*@ sourceURL=C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\menu\\Menu.js */"),
    dynamic: [_static_paintings_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _static_skating_2_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a, _static_kag_model_jpg__WEBPACK_IMPORTED_MODULE_5___default.a],
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/tachyons/css/tachyons.css":
/*!************************************************!*\
  !*** ./node_modules/tachyons/css/tachyons.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_head_tag_HeadTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/head-tag/HeadTag */ "./components/head-tag/HeadTag.js");
/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/Header */ "./components/header/Header.js");
/* harmony import */ var _components_menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/menu/Menu */ "./components/menu/Menu.js");
/* harmony import */ var _components_bio_Bio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/bio/Bio */ "./components/bio/Bio.js");
/* harmony import */ var _components_contact_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/contact/Contact */ "./components/contact/Contact.js");
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer/Footer */ "./components/footer/Footer.js");
/* harmony import */ var _components_info_wrapper_InfoWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/info-wrapper/InfoWrapper */ "./components/info-wrapper/InfoWrapper.js");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\pages\\index.js";










var index = function index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_head_tag_HeadTag__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_menu_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_info_wrapper_InfoWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_bio_Bio__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_contact_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./static/kag-model.jpg":
/*!******************************!*\
  !*** ./static/kag-model.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/kag-model-cec3358f0024dc93e5644458286b7643.jpg";

/***/ }),

/***/ "./static/paintings.jpg":
/*!******************************!*\
  !*** ./static/paintings.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/paintings-6244795650b5c0d7c07e2e4732317952.jpg";

/***/ }),

/***/ "./static/skating-2.jpeg":
/*!*******************************!*\
  !*** ./static/skating-2.jpeg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/skating-2-b0f58c371164d26e497179dc8af39abc.jpeg";

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map