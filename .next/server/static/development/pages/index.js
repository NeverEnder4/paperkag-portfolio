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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
var _jsxFileName = "C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\bio\\Bio.js";



var Bio = function Bio() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
    className: "jsx-2394607495" + " " + "bio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2394607495" + " " + "bio-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/street-art-4.jpeg",
    alt: "avatar",
    className: "jsx-2394607495" + " " + "avatar ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2394607495" + " " + "name fw6 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Kenyatta Barnette"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2394607495" + " " + "location fw2 ttu tracked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Los Angeles"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2394607495" + " " + "center ph3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur ading elit. Unde, totam asci. Facilis voluptas porro eos lium enim nihil impedit dicta odit tempora, fuga harum corporis non blanditiis fugiat voluptates! Nostrum?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2394607495" + " " + "center ph3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur ading elit. Unde, totam asci. Facilis voluptas porro eos lium enim nihil impedit dicta odit tempora, fuga harum corporis non blanditiis fugiat voluptates! Nostrum?")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2394607495",
    css: ".bio.jsx-2394607495{padding:2rem 0;}.bio-content.jsx-2394607495{text-align:center;}.bio.jsx-2394607495 .name.jsx-2394607495{font-size:1.25rem;}.bio.jsx-2394607495 .location.jsx-2394607495{font-size:0.875rem;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;font-weight:200;text-transform:uppercase;}.bio.jsx-2394607495 p.jsx-2394607495{max-width:30em;font-size:1rem;line-height:1.4;margin:1rem auto;padding:0 1rem;}.avatar.jsx-2394607495{border-radius:8px;border:1px solid #000000;width:64px;}@media (min-width:700px){.bio.jsx-2394607495{padding:4rem 0;}.bio.jsx-2394607495 .name.jsx-2394607495{font-size:1.45rem;}.bio.jsx-2394607495 .location.jsx-2394607495{font-size:1rem;}.bio.jsx-2394607495 p.jsx-2394607495{max-width:40em;font-size:1.2rem;margin-bottom:2rem;}.avatar.jsx-2394607495{width:120px;}}@media (min-width:1440px){.avatar.jsx-2394607495{width:200px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcYmlvXFxCaW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JrQixBQUcwQixBQUlHLEFBSUEsQUFJQyxBQU9KLEFBUUcsQUFNRCxBQUlHLEFBSUgsQUFHQSxBQU1ILEFBTUEsWUFMZCxBQU1BLEdBeERGLEFBbUJpQixBQWNmLEFBUUEsQUFHbUIsR0F4Q3JCLEFBSUEsQUFtQjJCLEFBVXpCLENBekJxQixXQVFMLEVBeUJLLFdBakJWLEdBUE0sS0F5QmpCLEdBakJGLFNBUGlCLGVBQ2pCLDBDQVZrQixnQkFDUyx5QkFDM0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxhcGV0dFxcd2ViLXByb2plY3RzXFxwYXBlcktBR1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFxiaW9cXEJpby5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJpbyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJiaW9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlvLWNvbnRlbnRcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL3N0cmVldC1hcnQtNC5qcGVnXCIgY2xhc3NOYW1lPVwiYXZhdGFyIFwiIGFsdD1cImF2YXRhclwiIC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJuYW1lIGZ3NiBcIj5LZW55YXR0YSBCYXJuZXR0ZTwvaDE+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJsb2NhdGlvbiBmdzIgdHR1IHRyYWNrZWRcIj5Mb3MgQW5nZWxlczwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNlbnRlciBwaDNcIj5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGluZyBlbGl0LiBVbmRlLCB0b3RhbSBhc2NpLlxuICAgICAgICAgIEZhY2lsaXMgdm9sdXB0YXMgcG9ycm8gZW9zIGxpdW0gZW5pbSBuaWhpbCBpbXBlZGl0IGRpY3RhIG9kaXQgdGVtcG9yYSxcbiAgICAgICAgICBmdWdhIGhhcnVtIGNvcnBvcmlzIG5vbiBibGFuZGl0aWlzIGZ1Z2lhdCB2b2x1cHRhdGVzISBOb3N0cnVtP1xuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNlbnRlciBwaDNcIj5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGluZyBlbGl0LiBVbmRlLCB0b3RhbSBhc2NpLlxuICAgICAgICAgIEZhY2lsaXMgdm9sdXB0YXMgcG9ycm8gZW9zIGxpdW0gZW5pbSBuaWhpbCBpbXBlZGl0IGRpY3RhIG9kaXQgdGVtcG9yYSxcbiAgICAgICAgICBmdWdhIGhhcnVtIGNvcnBvcmlzIG5vbiBibGFuZGl0aWlzIGZ1Z2lhdCB2b2x1cHRhdGVzISBOb3N0cnVtP1xuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmJpbyB7XG4gICAgICAgICAgcGFkZGluZzogMnJlbSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJpby1jb250ZW50IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuYmlvIC5uYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuYmlvIC5sb2NhdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJpbyBwIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDMwZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gICAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgLmJpbyB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cmVtIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJpbyAubmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNDVyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJpbyAubG9jYXRpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmlvIHAge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MGVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCaW87XG4iXX0= */\n/*@ sourceURL=C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\bio\\Bio.js */",
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
    href: "tel:12069725004",
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
  }, "206-972-5004")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:paperkag@gmail.com?Subject=YO!",
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
    href: "https://www.instagram.com/mf.kag",
    target: "_blank",
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
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3403071563",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "mf.kag"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3403071563",
    css: ".contact.jsx-3403071563{box-sizing:border-box;width:100%;}.contact-container.jsx-3403071563{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:50%;margin:0 auto;}.title.jsx-3403071563{font-family:'Baloo Thambi';font-size:2rem;text-transform:uppercase;margin:0 0 1rem 0;}.social-link.jsx-3403071563{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;margin-bottom:1rem;-webkit-transition:opacity 100ms ease-in-out;transition:opacity 100ms ease-in-out;}.social-link.jsx-3403071563:hover,.social-link.jsx-3403071563:active{opacity:0.6;}.social-link.jsx-3403071563:hover img.jsx-3403071563{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.social-link.jsx-3403071563 span.jsx-3403071563{font-family:'Baloo Thambi';color:rgba(250,250,250,0.8);font-weight:100;}.social-link.jsx-3403071563 .icon.jsx-3403071563{height:2.5rem;margin-right:10px;-webkit-transition:-webkit-transform 200ms ease-in;-webkit-transition:transform 200ms ease-in;transition:transform 200ms ease-in;}@media (min-width:500px){.contact-container.jsx-3403071563{width:30%;}@media (min-width:700px){.contact-container.jsx-3403071563{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:35rem;}}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcY29udGFjdFxcQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmtCLEFBR2lDLEFBS1QsQUFRYyxBQU1kLEFBU0QsQUFJWSxBQUlHLEFBS2IsQUFPRixBQUlTLFVBSHJCLEVBcEJGLEVBYW9CLFFBekNQLEtBYUksQUF1QmdCLEtBTUksQ0F6Q3JDLFNBYTJCLGFBdUJULFlBdEJFLEVBcUNKLEVBZGhCLEdBakN3QixBQWNILE9Ba0NuQixHQXJCRixDQWhCQSxtRUFWZ0MsU0FxQ2hDLE1BdkJ1QixrREFDRixtQkFDa0IsK0JBZjNCLFVBQ0ksY0FDaEIsMkJBY0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxhcGV0dFxcd2ViLXByb2plY3RzXFxwYXBlcktBR1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFxjb250YWN0XFxDb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ29udGFjdCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jb250YWluZXJcIj5cbiAgICAgICAgPGEgaHJlZj1cInRlbDoxMjA2OTcyNTAwNFwiIGNsYXNzTmFtZT1cInNvY2lhbC1saW5rXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pY29ucy9waG9uZS13aGl0ZS5zdmdcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGhvbmUtaWNvbiBpY29uXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuPjIwNi05NzItNTAwNDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwibWFpbHRvOnBhcGVya2FnQGdtYWlsLmNvbT9TdWJqZWN0PVlPIVwiIGNsYXNzTmFtZT1cInNvY2lhbC1saW5rXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljb25zL21haWwtd2hpdGUuc3ZnXCIgY2xhc3NOYW1lPVwibWFpbC1pY29uIGljb25cIiAvPlxuICAgICAgICAgIDxzcGFuPnBhcGVya2FnQGdtYWlsLmNvbTwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL21mLmthZ1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzb2NpYWwtbGlua1wiXG4gICAgICAgID5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ljb25zL2luc3RhLXdoaXRlLnN2Z1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnN0YWdyYW0taWNvbiBpY29uXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuPm1mLmthZzwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFsb28gVGhhbWJpJztcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgLnNvY2lhbC1saW5rIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zb2NpYWwtbGluazpob3ZlcixcbiAgICAgICAgLnNvY2lhbC1saW5rOmFjdGl2ZSB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNvY2lhbC1saW5rOmhvdmVyIGltZyB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNvY2lhbC1saW5rIHNwYW4ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFsb28gVGhhbWJpJztcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjgpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgLnNvY2lhbC1saW5rIC5pY29uIHtcbiAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW47XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAuY29udGFjdC1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICB3aWR0aDogMzVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xuIl19 */\n/*@ sourceURL=C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\contact\\Contact.js */",
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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1536351188" + " " + "top-slant",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1536351188" + " " + "info-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1536351188" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, children)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1536351188",
    css: ".info-wrapper.jsx-1536351188{background-color:#1d1d1d;color:rgba(250,250,250,0.8);margin-top:10vh;position:relative;top:12vh;}.info-wrapper.jsx-1536351188::after{content:'';left:-5%;top:-15%;width:130vw;height:50%;background-color:#1d1d1d;position:absolute;z-index:-1;-webkit-transform:rotate(-7deg);-ms-transform:rotate(-7deg);transform:rotate(-7deg);outline:1px solid transparent;}.info-wrapper.jsx-1536351188::before{content:'';right:-5%;top:-15%;width:130vw;height:50%;background-color:#1d1d1d;position:absolute;z-index:-1;-webkit-transform:rotate(7deg);-ms-transform:rotate(7deg);transform:rotate(7deg);outline:1px solid transparent;}.content.jsx-1536351188{-webkit-transform:translateY(-15%);-ms-transform:translateY(-15%);transform:translateY(-15%);margin-bottom:1vh;}@media (min-width:1200px){.info-wrapper.jsx-1536351188::after{-webkit-transform:rotate(-5deg);-ms-transform:rotate(-5deg);transform:rotate(-5deg);}.info-wrapper.jsx-1536351188::before{-webkit-transform:rotate(5deg);-ms-transform:rotate(5deg);transform:rotate(5deg);}.info-wrapper.jsx-1536351188{margin-top:25vh;top:-2vh;}.content.jsx-1536351188{margin-bottom:-4rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcaW5mby13cmFwcGVyXFxJbmZvV3JhcHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPa0IsQUFHb0MsQUFRZCxBQVlBLEFBYWdCLEFBS0QsQUFHRCxBQUlQLEFBS0ksV0F6Q2IsQUFZQyxLQXlCQyxJQXBDRixBQXlDVCxDQTdCUyxJQXJCc0IsQUE4Qy9CLElBcENZLENBWUEsV0FYRCxDQVlBLFVBWGMsQ0FYVCxBQXVCUyxnQkF0QlAsUUFXQSxDQVlBLEdBZ0JsQixHQUhBLEdBbkNTLE1BOEJTLEVBbkJQLENBVmIsQUFzQmEsVUFYYSxDQVlELElBT3pCLDZFQU5nQyxFQVpBLDRCQWFoQyxFQVpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcaW5mby13cmFwcGVyXFxJbmZvV3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEluZm9XcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXNsYW50XCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaW5mby13cmFwcGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuOCk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAxMnZoO1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZm8td3JhcHBlcjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIGxlZnQ6IC01JTtcbiAgICAgICAgICB0b3A6IC0xNSU7XG4gICAgICAgICAgd2lkdGg6IDEzMHZ3O1xuICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWQ7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC03ZGVnKTtcbiAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8td3JhcHBlcjo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICByaWdodDogLTUlO1xuICAgICAgICAgIHRvcDogLTE1JTtcbiAgICAgICAgICB3aWR0aDogMTMwdnc7XG4gICAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoN2RlZyk7XG4gICAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUlKTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxdmg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgICAgIC5pbmZvLXdyYXBwZXI6OmFmdGVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmluZm8td3JhcHBlcjo6YmVmb3JlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbmZvLXdyYXBwZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjV2aDtcbiAgICAgICAgICAgIHRvcDogLTJ2aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtNHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mb1dyYXBwZXI7XG4iXX0= */\n/*@ sourceURL=C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\info-wrapper\\InfoWrapper.js */",
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

/***/ "./components/nav-header/head-tag/HeadTag.js":
/*!***************************************************!*\
  !*** ./components/nav-header/head-tag/HeadTag.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\nav-header\\head-tag\\HeadTag.js";



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

/***/ "./components/nav-header/header/Header.js":
/*!************************************************!*\
  !*** ./components/nav-header/header/Header.js ***!
  \************************************************/
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
var _jsxFileName = "C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\nav-header\\header\\Header.js";




var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-2720969024" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2720969024" + " " + "logo-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2720969024" + " " + "logo-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2720969024" + " " + "brand-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "PAPERKAG"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2720969024" + " " + "artist-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "by Kenyatta Furious Barnette")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/kag-logo.png",
    className: "jsx-2720969024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2720969024",
    css: ".header.jsx-2720969024{width:100%;padding-top:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.logo-link.jsx-2720969024{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;padding:0 10px;}.header.jsx-2720969024 a.jsx-2720969024{text-dcoration:none;}.logo-link.jsx-2720969024 img.jsx-2720969024{height:5rem;}.logo-link.jsx-2720969024 .logo-text.jsx-2720969024{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}.logo-text.jsx-2720969024{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}.logo-link.jsx-2720969024 .brand-name.jsx-2720969024{font-size:2.4rem;color:#1d1d1d;font-family:'SEGA LOGO FONT';font-weight:200;}.logo-link.jsx-2720969024 .artist-name.jsx-2720969024{font-family:'Baloo Thambi';color:#333333;}@media (min-width:1024px){.logo-link.jsx-2720969024{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;padding:0 10px;}.logo-text.jsx-2720969024{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.logo-link.jsx-2720969024 .brand-name.jsx-2720969024{font-size:5rem;color:#1d1d1d;font-family:'SEGA LOGO FONT';font-weight:200;}.logo-link.jsx-2720969024 .artist-name.jsx-2720969024{font-family:'Baloo Thambi';color:#333333;font-size:1.2rem;}.logo-link.jsx-2720969024 img.jsx-2720969024{height:6rem;}@media (min-width:1025px){.header.jsx-2720969024{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xcbmF2LWhlYWRlclxcaGVhZGVyXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBR3NCLEFBT0UsQUFPTyxBQUlSLEFBSVUsQUFJVCxBQUtJLEFBT1UsQUFLWixBQU1BLEFBTUUsQUFPWSxBQU1mLEFBSWlCLFdBdkVkLENBa0JuQixBQWtERSxHQWJnQixFQXhCRixHQWpCaEIsT0F3QmdCLEFBd0JFLENBN0RILENBdURrQixFQXhCRixVQU8vQixBQXdCcUIsaUJBTkQsQUFPbEIsRUEvQmdCLGNBMUJHLEFBbUJGLEFBaUJJLEFBTUYsQUFTbkIsRUF4QkYsRUFaQSx3QkFwQnlCLEdBc0VyQixnQ0E3Q0osQUF1QnVCLDhCQTFDQSxBQW9DRSxrQ0F6Q3pCLGdCQU1pQixBQW9DRSxhQU1qQixFQXpDRixBQW9DRSIsImZpbGUiOiJDOlxcVXNlcnNcXGFwZXR0XFx3ZWItcHJvamVjdHNcXHBhcGVyS0FHXFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXG5hdi1oZWFkZXJcXGhlYWRlclxcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiIGFzPVwiL1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvLWxpbmtcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tdGV4dFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJhbmQtbmFtZVwiPlBBUEVSS0FHPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aXN0LW5hbWVcIj5ieSBLZW55YXR0YSBGdXJpb3VzIEJhcm5ldHRlPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9rYWctbG9nby5wbmdcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvLWxpbmsge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciBhIHtcbiAgICAgICAgICB0ZXh0LWRjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvLWxpbmsgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAubG9nby1saW5rIC5sb2dvLXRleHQge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nby10ZXh0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28tbGluayAuYnJhbmQtbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgICAgY29sb3I6ICMxZDFkMWQ7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTRUdBIExPR08gRk9OVCc7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvLWxpbmsgLmFydGlzdC1uYW1lIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0JhbG9vIFRoYW1iaSc7XG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgIC5sb2dvLWxpbmsge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dvLXRleHQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9nby1saW5rIC5icmFuZC1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjMWQxZDFkO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTRUdBIExPR08gRk9OVCc7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2dvLWxpbmsgLmFydGlzdC1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFsb28gVGhhbWJpJztcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxvZ28tbGluayBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiA2cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\nav-header\\header\\Header.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/page-wrapper/PageWrapper.js":
/*!************************************************!*\
  !*** ./components/page-wrapper/PageWrapper.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\page-wrapper\\PageWrapper.js";



var PageWrapper = function PageWrapper(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-353641926" + " " + "page-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "353641926",
    css: ".page-wrapper.jsx-353641926{width:100%;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xccGFnZS13cmFwcGVyXFxQYWdlV3JhcHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0IsQUFHc0IsV0FDSyxnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxhcGV0dFxcd2ViLXByb2plY3RzXFxwYXBlcktBR1xccG9ydGZvbGlvXFxjb21wb25lbnRzXFxwYWdlLXdyYXBwZXJcXFBhZ2VXcmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUGFnZVdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXdyYXBwZXJcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBhZ2Utd3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVdyYXBwZXI7XG4iXX0= */\n/*@ sourceURL=C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\components\\page-wrapper\\PageWrapper.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PageWrapper);

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_nav_header_head_tag_HeadTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav-header/head-tag/HeadTag */ "./components/nav-header/head-tag/HeadTag.js");
/* harmony import */ var _components_nav_header_header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav-header/header/Header */ "./components/nav-header/header/Header.js");
/* harmony import */ var _components_menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menu/Menu */ "./components/menu/Menu.js");
/* harmony import */ var _components_bio_Bio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/bio/Bio */ "./components/bio/Bio.js");
/* harmony import */ var _components_contact_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/contact/Contact */ "./components/contact/Contact.js");
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/footer/Footer */ "./components/footer/Footer.js");
/* harmony import */ var _components_info_wrapper_InfoWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/info-wrapper/InfoWrapper */ "./components/info-wrapper/InfoWrapper.js");
/* harmony import */ var _components_page_wrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/page-wrapper/PageWrapper */ "./components/page-wrapper/PageWrapper.js");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\pages\\index.js";












var index = function index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_page_wrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1383027027" + " " + "index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_nav_header_head_tag_HeadTag__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1383027027" + " " + "header-position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_nav_header_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_menu_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_info_wrapper_InfoWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_bio_Bio__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_contact_Contact__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1188844631",
    css: ".header-position.jsx-1383027027{display:inline;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHMEIsZUFDRCxjQUNoQiIsImZpbGUiOiJDOlxcVXNlcnNcXGFwZXR0XFx3ZWItcHJvamVjdHNcXHBhcGVyS0FHXFxwb3J0Zm9saW9cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkVGFnIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2LWhlYWRlci9oZWFkLXRhZy9IZWFkVGFnJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYtaGVhZGVyL2hlYWRlci9IZWFkZXInO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9tZW51L01lbnUnO1xuaW1wb3J0IEJpbyBmcm9tICcuLi9jb21wb25lbnRzL2Jpby9CaW8nO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWN0L0NvbnRhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEluZm9XcmFwcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaW5mby13cmFwcGVyL0luZm9XcmFwcGVyJztcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2Utd3JhcHBlci9QYWdlV3JhcHBlcic7XG5cbmltcG9ydCAnbm9ybWFsaXplLmNzcyc7XG5cbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXhcIj5cbiAgICAgICAgPEhlYWRUYWcgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcG9zaXRpb25cIj5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TWVudSAvPlxuICAgICAgICA8SW5mb1dyYXBwZXI+XG4gICAgICAgICAgPEJpbyAvPlxuICAgICAgICAgIDxDb250YWN0IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L0luZm9XcmFwcGVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZWFkZXItcG9zaXRpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEwMCcgaGVpZ2h0PScxMDAnIHZpZXdCb3g9JzAgMCAxMDAgMTAwJyUzRSUzQ2cgc3Ryb2tlPSclMjNDQ0MnIHN0cm9rZS13aWR0aD0nMCcgJTNFJTNDcmVjdCBmaWxsPSclMjNGNUY1RjUnIHg9Jy02MCcgeT0nLTYwJyB3aWR0aD0nMTEwJyBoZWlnaHQ9JzI0MCcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9QYWdlV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIl19 */\n/*@ sourceURL=C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\pages\\index.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "574563085",
    css: "body{background-color:#ffffff;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='%23CCC' stroke-width='0' %3E%3Crect fill='%23F5F5F5' x='-60' y='-60' width='110' height='240'/%3E%3C/g%3E%3C/svg%3E\");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDeUIsQUFHb0MseUJBQzhPLHVRQUN6USIsImZpbGUiOiJDOlxcVXNlcnNcXGFwZXR0XFx3ZWItcHJvamVjdHNcXHBhcGVyS0FHXFxwb3J0Zm9saW9cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkVGFnIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2LWhlYWRlci9oZWFkLXRhZy9IZWFkVGFnJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYtaGVhZGVyL2hlYWRlci9IZWFkZXInO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9tZW51L01lbnUnO1xuaW1wb3J0IEJpbyBmcm9tICcuLi9jb21wb25lbnRzL2Jpby9CaW8nO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWN0L0NvbnRhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEluZm9XcmFwcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaW5mby13cmFwcGVyL0luZm9XcmFwcGVyJztcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2Utd3JhcHBlci9QYWdlV3JhcHBlcic7XG5cbmltcG9ydCAnbm9ybWFsaXplLmNzcyc7XG5cbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYWdlV3JhcHBlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXhcIj5cbiAgICAgICAgPEhlYWRUYWcgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcG9zaXRpb25cIj5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TWVudSAvPlxuICAgICAgICA8SW5mb1dyYXBwZXI+XG4gICAgICAgICAgPEJpbyAvPlxuICAgICAgICAgIDxDb250YWN0IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L0luZm9XcmFwcGVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZWFkZXItcG9zaXRpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEwMCcgaGVpZ2h0PScxMDAnIHZpZXdCb3g9JzAgMCAxMDAgMTAwJyUzRSUzQ2cgc3Ryb2tlPSclMjNDQ0MnIHN0cm9rZS13aWR0aD0nMCcgJTNFJTNDcmVjdCBmaWxsPSclMjNGNUY1RjUnIHg9Jy02MCcgeT0nLTYwJyB3aWR0aD0nMTEwJyBoZWlnaHQ9JzI0MCcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9QYWdlV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIl19 */\n/*@ sourceURL=C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\pages\\index.js */",
    __self: this
  }));
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

/***/ 6:
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