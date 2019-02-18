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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
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



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Error =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Error, _React$Component);

  function Error() {
    _classCallCheck(this, Error);

    return _possibleConstructorReturn(this, _getPrototypeOf(Error).apply(this, arguments));
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1569683718" + " " + "error flex-center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1569683718" + " " + "logo-container flex-center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://apettigrew.imgix.net/static/kag-logo.png?w=300&format=compress",
        alt: "kag logo",
        className: "jsx-1569683718" + " " + "logo scale-spin-float"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1569683718" + " " + "content-container flex-center scale-center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1569683718" + " " + "fade-up"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-1569683718" + " " + "status "
      }, "Error ", this.props.statusCode || null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-1569683718" + " " + "message "
      }, "Yo! Something went terribly wrong. Where would you like to go?")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-1569683718" + " " + "nav fade-up"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-1569683718"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1569683718"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-1569683718"
      }, "Home"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1569683718"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/art",
        passHref: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-1569683718"
      }, "Art"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1569683718"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/cinema",
        passHref: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-1569683718"
      }, "Cinema"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-1569683718"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/modeling",
        passHref: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-1569683718"
      }, "Modeling")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2540779468",
        css: ".error.jsx-1569683718{color:rgba(255,255,255,0.8);font-family:'Baloo Thambi','Sans-Serif';height:100vh;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-weight:200;}.flex-center.jsx-1569683718{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.logo-container.jsx-1569683718{padding:3rem 0;height:40vh;}.content-container.jsx-1569683718{background-color:#1d1d1d;width:100%;height:60vh;padding:0 1rem;box-sizing:border-box;text-align:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.logo.jsx-1569683718{-webkit-filter:drop-shadow(15px 10px 5px rgba(0,0,0,0.7));filter:drop-shadow(15px 10px 5px rgba(0,0,0,0.7));width:8rem;}.message.jsx-1569683718{margin-top:0;margin-bottom:0;font-size:1rem;}.status.jsx-1569683718{margin:0;}.nav.jsx-1569683718 ul.jsx-1569683718{list-style-type:none;padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;text-transform:uppercase;}.nav.jsx-1569683718 li.jsx-1569683718{margin:0 0.2rem;}.nav.jsx-1569683718 li.jsx-1569683718 a.jsx-1569683718{-webkit-text-decoration:none;text-decoration:none;font-size:1rem;color:rgba(255,255,255,0.8);-webkit-transition:all 100ms ease-out;transition:all 100ms ease-out;padding:0.1rem 0rem;position:relative;}.nav.jsx-1569683718 li.jsx-1569683718 a.jsx-1569683718::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;border-bottom:1px solid transparent;-webkit-transform:scaleY(0);-ms-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:50% 0%;-ms-transform-origin:50% 0%;transform-origin:50% 0%;-webkit-transition:all 200ms ease-out;transition:all 200ms ease-out;}.nav.jsx-1569683718 li.jsx-1569683718 a.jsx-1569683718:hover,.nav.jsx-1569683718 li.jsx-1569683718 a.jsx-1569683718:focus{color:#fff;}.nav.jsx-1569683718 li.jsx-1569683718 a.jsx-1569683718:hover.jsx-1569683718::after,.nav.jsx-1569683718 li.jsx-1569683718 a.jsx-1569683718:hover.jsx-1569683718::before{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);border-bottom:1px solid #fff;}.scale-spin-float.jsx-1569683718{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:scale-spin-jsx-1569683718 0.6s ease forwards,float-jsx-1569683718 5s infinite ease-in-out 0.7s;animation:scale-spin-jsx-1569683718 0.6s ease forwards,float-jsx-1569683718 5s infinite ease-in-out 0.7s;}.scale-center.jsx-1569683718{-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:scale-center-jsx-1569683718 0.4s cubic-bezier(0.785,0.135,0.15,0.86) forwards 0.4s;animation:scale-center-jsx-1569683718 0.4s cubic-bezier(0.785,0.135,0.15,0.86) forwards 0.4s;}.fade-up.jsx-1569683718{opacity:0;-webkit-animation:fade-up-jsx-1569683718 0.4s ease forwards 0.7s;animation:fade-up-jsx-1569683718 0.4s ease forwards 0.7s;}@-webkit-keyframes float-jsx-1569683718{0%{-webkit-transform:translatey(0px);-ms-transform:translatey(0px);transform:translatey(0px);}50%{-webkit-transform:translatey(-20px);-ms-transform:translatey(-20px);transform:translatey(-20px);}100%{-webkit-transform:translatey(0px);-ms-transform:translatey(0px);transform:translatey(0px);}}@keyframes float-jsx-1569683718{0%{-webkit-transform:translatey(0px);-ms-transform:translatey(0px);transform:translatey(0px);}50%{-webkit-transform:translatey(-20px);-ms-transform:translatey(-20px);transform:translatey(-20px);}100%{-webkit-transform:translatey(0px);-ms-transform:translatey(0px);transform:translatey(0px);}}@-webkit-keyframes scale-spin-jsx-1569683718{from{-webkit-transform:scale(0) rotate(0deg);-ms-transform:scale(0) rotate(0deg);transform:scale(0) rotate(0deg);}to{-webkit-transform:scale(1) rotate(720deg);-ms-transform:scale(1) rotate(720deg);transform:scale(1) rotate(720deg);}}@keyframes scale-spin-jsx-1569683718{from{-webkit-transform:scale(0) rotate(0deg);-ms-transform:scale(0) rotate(0deg);transform:scale(0) rotate(0deg);}to{-webkit-transform:scale(1) rotate(720deg);-ms-transform:scale(1) rotate(720deg);transform:scale(1) rotate(720deg);}}@-webkit-keyframes scale-center-jsx-1569683718{from{-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);}to{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}}@keyframes scale-center-jsx-1569683718{from{-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);}to{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}}@-webkit-keyframes fade-up-jsx-1569683718{from{opacity:0;-webkit-transform:translateY(15px);-ms-transform:translateY(15px);transform:translateY(15px);}to{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}@keyframes fade-up-jsx-1569683718{from{opacity:0;-webkit-transform:translateY(15px);-ms-transform:translateY(15px);transform:translateY(15px);}to{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}@media (min-width:600px){.status.jsx-1569683718{font-size:3.25rem;}.message.jsx-1569683718{font-size:2rem;max-width:600px;}.nav.jsx-1569683718 li.jsx-1569683718{margin:0 0.4rem;}.nav.jsx-1569683718 li.jsx-1569683718 a.jsx-1569683718{font-size:1.875rem;padding:0.2rem 0rem;}}.content-container.jsx-1569683718{min-height:40vh;}@media (min-width:1025px){.logo.jsx-1569683718{width:10rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xccGFnZXNcXF9lcnJvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRHNCLEFBRzhDLEFBUWxCLEFBT0UsQUFLVSxBQVU0QixBQUt4QyxBQU9KLEFBSVksQUFVTCxBQUlLLEFBU1YsQUFjQSxBQUtTLEFBS0QsQUFPQyxBQU9WLEFBTWtCLEFBR0UsQUFHRixBQU1NLEFBSUUsQUFNZCxBQUlBLEFBTVYsQUFJQSxBQU9RLEFBR0gsQUFLQyxBQUlHLEFBTUwsQUFLRixTQXhJaEIsQ0FpRTRDLEFBc0NiLEFBSUgsQ0FoRlIsQUFjcEIsQ0FnR0UsQ0FoSmdCLEVBcEJKLEFBZ0pNLENBdkdwQixBQTRHRSxBQVVGLEVBbEJFLENBWXNCLEVBMUhaLElBMUJDLEVBSmIsQ0FoQjJDLENBcUMxQixBQWlDVCxFQXZCRyxBQWlIVCxJQXpGTyxDQWxESyxHQW9KWixDQXpIYSxFQXdCRixFQWxDYixJQWhCaUIsRUFzQ0EsR0FhSCxVQWxEVSxFQXNDUyxBQWFLLEdBekV2QixDQTRGVyxHQUxLLEFBWUwsQUFtQ3hCLEFBSUEsRUFuSXNCLE9BTkgsSUFzQkQsS0F5RmxCLEFBTUEsR0F6RDhCLENBd0Y5QixFQWxDQSxLQXpDb0IsQUFjdEIsRUFoRStCLEFBeUg3QixLQXBIVyxBQStGWCxNQTVFZSxBQWdGZixLQWxHRixhQTZFQSxvQkFuR3lCLENBc0ZhLEdBT2tCLEtBdkNsQyxVQWJVLEVBMEJOLENBekVSLE9BNkRFLFNBNURwQixTQTZEQSwyQkF2Q0EseUJBaEJxQixNQW1FVyw2QkExQkwseUJBQzNCLGNBMEJBLG1CQW5FQSxNQTRGQSxxQkFQQSIsImZpbGUiOiJDOlxcVXNlcnNcXGFwZXR0XFx3ZWItcHJvamVjdHNcXHBhcGVyS0FHXFxwb3J0Zm9saW9cXHBhZ2VzXFxfZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyByZXMsIGVyciB9KSB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcyA/IHJlcy5zdGF0dXNDb2RlIDogZXJyID8gZXJyLnN0YXR1c0NvZGUgOiBudWxsO1xuICAgIHJldHVybiB7IHN0YXR1c0NvZGUgfTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3IgZmxleC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tY29udGFpbmVyIGZsZXgtY2VudGVyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYXBldHRpZ3Jldy5pbWdpeC5uZXQvc3RhdGljL2thZy1sb2dvLnBuZz93PTMwMCZmb3JtYXQ9Y29tcHJlc3NcIlxuICAgICAgICAgICAgICBhbHQ9XCJrYWcgbG9nb1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ28gc2NhbGUtc3Bpbi1mbG9hdFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXIgZmxleC1jZW50ZXIgc2NhbGUtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhZGUtdXBcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInN0YXR1cyBcIj5FcnJvciB7dGhpcy5wcm9wcy5zdGF0dXNDb2RlIHx8IG51bGx9PC9oMT5cblxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWVzc2FnZSBcIj5cbiAgICAgICAgICAgICAgICBZbyEgU29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmcuIFdoZXJlIHdvdWxkIHlvdSBsaWtlIHRvIGdvP1xuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2IGZhZGUtdXBcIj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL2FydFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICA8YT5BcnQ8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL2NpbmVtYVwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICA8YT5DaW5lbWE8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL21vZGVsaW5nXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgIDxhPk1vZGVsaW5nPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFsb28gVGhhbWJpJywgJ1NhbnMtU2VyaWYnO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZmxleC1jZW50ZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ28tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQwdmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDE1cHggMTBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjcpKTtcbiAgICAgICAgICAgICAgd2lkdGg6IDhyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zdGF0dXMge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXYgdWwge1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXYgbGkge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMC4ycmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2IGxpIGEge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjFyZW0gMHJlbTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2IGxpIGE6OmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdiBsaSBhOmhvdmVyLFxuICAgICAgICAgICAgLm5hdiBsaSBhOmZvY3VzIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXYgbGkgYTpob3Zlcjo6YWZ0ZXIsXG4gICAgICAgICAgICAubmF2IGxpIGE6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjYWxlLXNwaW4tZmxvYXQge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogc2NhbGUtc3BpbiAwLjZzIGVhc2UgZm9yd2FyZHMsXG4gICAgICAgICAgICAgICAgZmxvYXQgNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQgMC43cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjYWxlLWNlbnRlciB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogc2NhbGUtY2VudGVyIDAuNHNcbiAgICAgICAgICAgICAgICBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KSBmb3J3YXJkcyAwLjRzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZmFkZS11cCB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZS11cCAwLjRzIGVhc2UgZm9yd2FyZHMgMC43cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQGtleWZyYW1lcyBmbG9hdCB7XG4gICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMHB4KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgtMjBweCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDBweCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQGtleWZyYW1lcyBzY2FsZS1zcGluIHtcbiAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoNzIwZGVnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIHNjYWxlLWNlbnRlciB7XG4gICAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZS11cCB7XG4gICAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgLnN0YXR1cyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjI1cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5uYXYgbGkge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwLjRyZW07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubmF2IGxpIGEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44NzVyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4ycmVtIDByZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNDB2aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yO1xuIl19 */\n/*@ sourceURL=C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\pages\\_error.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1865293571",
        css: "body{padding:0;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xccGFnZXNcXF9lcnJvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErT2EsQUFHMkIsVUFDRCxTQUNYIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYXBldHRcXHdlYi1wcm9qZWN0c1xccGFwZXJLQUdcXHBvcnRmb2xpb1xccGFnZXNcXF9lcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIEVycm9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHJlcywgZXJyIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IG51bGw7XG4gICAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvciBmbGV4LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1jb250YWluZXIgZmxleC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hcGV0dGlncmV3LmltZ2l4Lm5ldC9zdGF0aWMva2FnLWxvZ28ucG5nP3c9MzAwJmZvcm1hdD1jb21wcmVzc1wiXG4gICAgICAgICAgICAgIGFsdD1cImthZyBsb2dvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nbyBzY2FsZS1zcGluLWZsb2F0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lciBmbGV4LWNlbnRlciBzY2FsZS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFkZS11cFwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic3RhdHVzIFwiPkVycm9yIHt0aGlzLnByb3BzLnN0YXR1c0NvZGUgfHwgbnVsbH08L2gxPlxuXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtZXNzYWdlIFwiPlxuICAgICAgICAgICAgICAgIFlvISBTb21ldGhpbmcgd2VudCB0ZXJyaWJseSB3cm9uZy4gV2hlcmUgd291bGQgeW91IGxpa2UgdG8gZ28/XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXYgZmFkZS11cFwiPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvYXJ0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgIDxhPkFydDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvY2luZW1hXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgIDxhPkNpbmVtYTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvbW9kZWxpbmdcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgPGE+TW9kZWxpbmc8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCYWxvbyBUaGFtYmknLCAnU2Fucy1TZXJpZic7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mbGV4LWNlbnRlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubG9nby1jb250YWluZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDA7XG4gICAgICAgICAgICAgIGhlaWdodDogNDB2aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMTVweCAxMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNykpO1xuICAgICAgICAgICAgICB3aWR0aDogOHJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0YXR1cyB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdiB1bCB7XG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdiBsaSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwLjJyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXYgbGkgYSB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuMXJlbSAwcmVtO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXYgbGkgYTo6YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2IGxpIGE6aG92ZXIsXG4gICAgICAgICAgICAubmF2IGxpIGE6Zm9jdXMge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdiBsaSBhOmhvdmVyOjphZnRlcixcbiAgICAgICAgICAgIC5uYXYgbGkgYTpob3Zlcjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2NhbGUtc3Bpbi1mbG9hdCB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzY2FsZS1zcGluIDAuNnMgZWFzZSBmb3J3YXJkcyxcbiAgICAgICAgICAgICAgICBmbG9hdCA1cyBpbmZpbml0ZSBlYXNlLWluLW91dCAwLjdzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2NhbGUtY2VudGVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzY2FsZS1jZW50ZXIgMC40c1xuICAgICAgICAgICAgICAgIGN1YmljLWJlemllcigwLjc4NSwgMC4xMzUsIDAuMTUsIDAuODYpIGZvcndhcmRzIDAuNHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mYWRlLXVwIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlLXVwIDAuNHMgZWFzZSBmb3J3YXJkcyAwLjdzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZsb2F0IHtcbiAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwcHgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC0yMHB4KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMHB4KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIHNjYWxlLXNwaW4ge1xuICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSg3MjBkZWcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgc2NhbGUtY2VudGVyIHtcbiAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlLXVwIHtcbiAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAuc3RhdHVzIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuMjVyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm5hdiBsaSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuNHJlbTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5uYXYgbGkgYSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjg3NXJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjJyZW0gMHJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MHZoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3I7XG4iXX0= */\n/*@ sourceURL=C:\\Users\\apett\\web-projects\\paperKAG\\portfolio\\pages\\_error.js */"
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ 1:
/*!*******************************!*\
  !*** multi ./pages/_error.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_error.js */"./pages/_error.js");


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
//# sourceMappingURL=_error.js.map