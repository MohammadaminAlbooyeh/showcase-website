/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./App.css":
/*!*****************!*\
  !*** ./App.css ***!
  \*****************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./components/FixedBottomBar.css":
/*!***************************************!*\
  !*** ./components/FixedBottomBar.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./components/FixedBottomBar.jsx":
/*!***************************************!*\
  !*** ./components/FixedBottomBar.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FixedBottomBar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FixedBottomBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FixedBottomBar.module.css */ \"(pages-dir-node)/./components/FixedBottomBar.module.css\");\n/* harmony import */ var _FixedBottomBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FixedBottomBar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction FixedBottomBar() {\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleClose = ()=>{\n        setIsVisible(false);\n        document.body.style.paddingBottom = '0';\n    };\n    const handleKeyDown = (event)=>{\n        if (event.key === 'Escape') {\n            handleClose();\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"FixedBottomBar.useEffect\": ()=>{\n            if (isVisible) {\n                document.body.style.paddingBottom = '80px'; // Adjust to match bar height\n                window.addEventListener('keydown', handleKeyDown);\n            }\n            return ({\n                \"FixedBottomBar.useEffect\": ()=>{\n                    window.removeEventListener('keydown', handleKeyDown);\n                }\n            })[\"FixedBottomBar.useEffect\"];\n        }\n    }[\"FixedBottomBar.useEffect\"], [\n        isVisible\n    ]);\n    if (!isVisible) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed-bottom-bar\",\n        role: \"complementary\",\n        \"aria-label\": \"Fixed bottom bar\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Welcome to our website! This is a fixed bottom bar.\"\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/FixedBottomBar.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"close-button\",\n                    onClick: handleClose,\n                    \"aria-label\": \"Close bottom bar\",\n                    children: \"\\xd7\"\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/FixedBottomBar.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/FixedBottomBar.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/FixedBottomBar.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvRml4ZWRCb3R0b21CYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0s7QUFFbEMsU0FBU0c7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1NLGNBQWM7UUFDbEJELGFBQWE7UUFDYkUsU0FBU0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLGFBQWEsR0FBRztJQUN0QztJQUVBLE1BQU1DLGdCQUFnQixDQUFDQztRQUNyQixJQUFJQSxNQUFNQyxHQUFHLEtBQUssVUFBVTtZQUMxQlA7UUFDRjtJQUNGO0lBRUFMLGdEQUFTQTtvQ0FBQztZQUNSLElBQUlHLFdBQVc7Z0JBQ2JHLFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxhQUFhLEdBQUcsUUFBUSw2QkFBNkI7Z0JBQ3pFSSxPQUFPQyxnQkFBZ0IsQ0FBQyxXQUFXSjtZQUNyQztZQUNBOzRDQUFPO29CQUNMRyxPQUFPRSxtQkFBbUIsQ0FBQyxXQUFXTDtnQkFDeEM7O1FBQ0Y7bUNBQUc7UUFBQ1A7S0FBVTtJQUVkLElBQUksQ0FBQ0EsV0FBVyxPQUFPO0lBRXZCLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVO1FBQW1CQyxNQUFLO1FBQWdCQyxjQUFXO2tCQUNoRSw0RUFBQ0g7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNHOzhCQUFFOzs7Ozs7OEJBQ0gsOERBQUNDO29CQUFPSixXQUFVO29CQUFlSyxTQUFTakI7b0JBQWFjLGNBQVc7OEJBQW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQUk3RiIsInNvdXJjZXMiOlsiL1VzZXJzL2FtaW4vRGVza3RvcC9NeVByb2plY3RzL3Nob3djYXNlLXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9GaXhlZEJvdHRvbUJhci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9GaXhlZEJvdHRvbUJhci5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRml4ZWRCb3R0b21CYXIoKSB7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRJc1Zpc2libGUoZmFsc2UpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ0JvdHRvbSA9ICcwJztcbiAgfTtcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nQm90dG9tID0gJzgwcHgnOyAvLyBBZGp1c3QgdG8gbWF0Y2ggYmFyIGhlaWdodFxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG4gICAgfTtcbiAgfSwgW2lzVmlzaWJsZV0pO1xuXG4gIGlmICghaXNWaXNpYmxlKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtYm90dG9tLWJhclwiIHJvbGU9XCJjb21wbGVtZW50YXJ5XCIgYXJpYS1sYWJlbD1cIkZpeGVkIGJvdHRvbSBiYXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICA8cD5XZWxjb21lIHRvIG91ciB3ZWJzaXRlISBUaGlzIGlzIGEgZml4ZWQgYm90dG9tIGJhci48L3A+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2UtYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWw9XCJDbG9zZSBib3R0b20gYmFyXCI+w5c8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkZpeGVkQm90dG9tQmFyIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwiaGFuZGxlQ2xvc2UiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsInBhZGRpbmdCb3R0b20iLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJrZXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsInJvbGUiLCJhcmlhLWxhYmVsIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/FixedBottomBar.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./components/FixedBottomBar.module.css":
/*!**********************************************!*\
  !*** ./components/FixedBottomBar.module.css ***!
  \**********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"fixedBottomBar\": \"FixedBottomBar_fixedBottomBar__iALem\",\n\t\"content\": \"FixedBottomBar_content__Wkat_\",\n\t\"closeButton\": \"FixedBottomBar_closeButton__si0wB\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvRml4ZWRCb3R0b21CYXIubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluL0Rlc2t0b3AvTXlQcm9qZWN0cy9zaG93Y2FzZS13ZWJzaXRlL2Zyb250ZW5kL2NvbXBvbmVudHMvRml4ZWRCb3R0b21CYXIubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmaXhlZEJvdHRvbUJhclwiOiBcIkZpeGVkQm90dG9tQmFyX2ZpeGVkQm90dG9tQmFyX19pQUxlbVwiLFxuXHRcImNvbnRlbnRcIjogXCJGaXhlZEJvdHRvbUJhcl9jb250ZW50X19Xa2F0X1wiLFxuXHRcImNsb3NlQnV0dG9uXCI6IFwiRml4ZWRCb3R0b21CYXJfY2xvc2VCdXR0b25fX3NpMHdCXCJcbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/FixedBottomBar.module.css\n");

/***/ }),

/***/ "(pages-dir-node)/./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Footer() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"\\xa9 \",\n                    new Date().getFullYear(),\n                    \" Amin Albooyeh — Showcase Website\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/Footer.jsx\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/MohammadaminAlbooyeh\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: \"GitHub\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/Footer.jsx\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"mailto:your@email.com\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/Footer.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/Footer.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/Footer.jsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvRm9vdGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0E7SUFDdEIscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7O29CQUFJO29CQUNLLElBQUlDLE9BQU9DLFdBQVc7b0JBQUc7Ozs7Ozs7MEJBRW5DLDhEQUFDRjs7a0NBQ0MsOERBQUNHO3dCQUFFQyxNQUFLO3dCQUEwQ0MsUUFBTzt3QkFBU0MsS0FBSTtrQ0FBc0I7Ozs7OztrQ0FDNUYsOERBQUNIO3dCQUFFQyxNQUFLO2tDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hDIiwic291cmNlcyI6WyIvVXNlcnMvYW1pbi9EZXNrdG9wL015UHJvamVjdHMvc2hvd2Nhc2Utd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL0Zvb3Rlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICAmY29weTsge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gQW1pbiBBbGJvb3llaCAmbWRhc2g7IFNob3djYXNlIFdlYnNpdGVcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Nb2hhbW1hZGFtaW5BbGJvb3llaFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5HaXRIdWI8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJtYWlsdG86eW91ckBlbWFpbC5jb21cIj5FbWFpbDwvYT5cbiAgICAgICAgey8qIEFkZCBtb3JlIHNvY2lhbC9jb250YWN0IGxpbmtzIGFzIG5lZWRlZCAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkZvb3RlciIsImZvb3RlciIsImRpdiIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Footer.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./components/NavBar.jsx":
/*!*******************************!*\
  !*** ./components/NavBar.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavBar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction NavBar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const getNavLinkClass = (href)=>router.pathname === href ? 'nav-link active' : 'nav-link';\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar\",\n        \"aria-label\": \"Main navigation\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"navbar-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navbar-logo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        className: getNavLinkClass('/'),\n                        tabIndex: 0,\n                        \"aria-label\": \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navbar-links\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            className: getNavLinkClass('/'),\n                            tabIndex: 0,\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/portfolio\",\n                            className: getNavLinkClass('/portfolio'),\n                            tabIndex: 0,\n                            children: \"Portfolio\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/projects\",\n                            className: getNavLinkClass('/projects'),\n                            tabIndex: 0,\n                            children: \"Projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/resume\",\n                            className: getNavLinkClass('/resume'),\n                            tabIndex: 0,\n                            children: \"Resume\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/contactus\",\n                            className: getNavLinkClass('/contactus'),\n                            tabIndex: 0,\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTmF2QmFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUNXO0FBR3pCLFNBQVNFO0lBQ3RCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNRyxrQkFBa0IsQ0FBQ0MsT0FDdkJGLE9BQU9HLFFBQVEsS0FBS0QsT0FBTyxvQkFBb0I7SUFFakQscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7UUFBU0MsY0FBVztrQkFDakMsNEVBQUNDO1lBQUlGLFdBQVU7OzhCQUNiLDhEQUFDRTtvQkFBSUYsV0FBVTs4QkFDYiw0RUFBQ1Isa0RBQUlBO3dCQUFDSyxNQUFLO3dCQUFJRyxXQUFXSixnQkFBZ0I7d0JBQU1PLFVBQVU7d0JBQUdGLGNBQVc7Ozs7Ozs7Ozs7OzhCQUUxRSw4REFBQ0M7b0JBQUlGLFdBQVU7O3NDQUNiLDhEQUFDUixrREFBSUE7NEJBQUNLLE1BQUs7NEJBQUlHLFdBQVdKLGdCQUFnQjs0QkFBTU8sVUFBVTtzQ0FBRzs7Ozs7O3NDQUM3RCw4REFBQ1gsa0RBQUlBOzRCQUFDSyxNQUFLOzRCQUFhRyxXQUFXSixnQkFBZ0I7NEJBQWVPLFVBQVU7c0NBQUc7Ozs7OztzQ0FDL0UsOERBQUNYLGtEQUFJQTs0QkFBQ0ssTUFBSzs0QkFBWUcsV0FBV0osZ0JBQWdCOzRCQUFjTyxVQUFVO3NDQUFHOzs7Ozs7c0NBQzdFLDhEQUFDWCxrREFBSUE7NEJBQUNLLE1BQUs7NEJBQVVHLFdBQVdKLGdCQUFnQjs0QkFBWU8sVUFBVTtzQ0FBRzs7Ozs7O3NDQUN6RSw4REFBQ1gsa0RBQUlBOzRCQUFDSyxNQUFLOzRCQUFhRyxXQUFXSixnQkFBZ0I7NEJBQWVPLFVBQVU7c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pGIiwic291cmNlcyI6WyIvVXNlcnMvYW1pbi9EZXNrdG9wL015UHJvamVjdHMvc2hvd2Nhc2Utd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL05hdkJhci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBnZXROYXZMaW5rQ2xhc3MgPSAoaHJlZikgPT5cbiAgICByb3V0ZXIucGF0aG5hbWUgPT09IGhyZWYgPyAnbmF2LWxpbmsgYWN0aXZlJyA6ICduYXYtbGluayc7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiIGFyaWEtbGFiZWw9XCJNYWluIG5hdmlnYXRpb25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1sb2dvXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9e2dldE5hdkxpbmtDbGFzcygnLycpfSB0YWJJbmRleD17MH0gYXJpYS1sYWJlbD1cIkhvbWVcIj48L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1saW5rc1wiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtnZXROYXZMaW5rQ2xhc3MoJy8nKX0gdGFiSW5kZXg9ezB9PkhvbWU8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3J0Zm9saW9cIiBjbGFzc05hbWU9e2dldE5hdkxpbmtDbGFzcygnL3BvcnRmb2xpbycpfSB0YWJJbmRleD17MH0+UG9ydGZvbGlvPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIiBjbGFzc05hbWU9e2dldE5hdkxpbmtDbGFzcygnL3Byb2plY3RzJyl9IHRhYkluZGV4PXswfT5Qcm9qZWN0czwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc3VtZVwiIGNsYXNzTmFtZT17Z2V0TmF2TGlua0NsYXNzKCcvcmVzdW1lJyl9IHRhYkluZGV4PXswfT5SZXN1bWU8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0dXNcIiBjbGFzc05hbWU9e2dldE5hdkxpbmtDbGFzcygnL2NvbnRhY3R1cycpfSB0YWJJbmRleD17MH0+Q29udGFjdDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiTmF2QmFyIiwicm91dGVyIiwiZ2V0TmF2TGlua0NsYXNzIiwiaHJlZiIsInBhdGhuYW1lIiwibmF2IiwiY2xhc3NOYW1lIiwiYXJpYS1sYWJlbCIsImRpdiIsInRhYkluZGV4Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/NavBar.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_FixedBottomBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FixedBottomBar.css */ \"(pages-dir-node)/./components/FixedBottomBar.css\");\n/* harmony import */ var _components_FixedBottomBar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_FixedBottomBar_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App.css */ \"(pages-dir-node)/./App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBar */ \"(pages-dir-node)/./components/NavBar.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"(pages-dir-node)/./components/Footer.jsx\");\n/* harmony import */ var _components_FixedBottomBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FixedBottomBar */ \"(pages-dir-node)/./components/FixedBottomBar.jsx\");\n// frontend/pages/_app.jsx\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"content\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQkFBMEI7O0FBQ2dCO0FBQ3RCO0FBQ3NCO0FBQ0E7QUFDZ0I7QUFFM0MsU0FBU0csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNwRCxxQkFDRTs7MEJBQ0UsOERBQUNMLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNNO2dCQUFLQyxXQUFVOzBCQUNkLDRFQUFDSDtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OzswQkFFMUIsOERBQUNKLDBEQUFNQTs7Ozs7OztBQUdiIiwic291cmNlcyI6WyIvVXNlcnMvYW1pbi9EZXNrdG9wL015UHJvamVjdHMvc2hvd2Nhc2Utd2Vic2l0ZS9mcm9udGVuZC9wYWdlcy9fYXBwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmcm9udGVuZC9wYWdlcy9fYXBwLmpzeFxuaW1wb3J0ICcuLi9jb21wb25lbnRzL0ZpeGVkQm90dG9tQmFyLmNzcyc7XG5pbXBvcnQgJy4uL0FwcC5jc3MnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBGaXhlZEJvdHRvbUJhciBmcm9tICcuLi9jb21wb25lbnRzL0ZpeGVkQm90dG9tQmFyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZCYXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJOYXZCYXIiLCJGb290ZXIiLCJGaXhlZEJvdHRvbUJhciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibWFpbiIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.jsx\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.jsx")));
module.exports = __webpack_exports__;

})();