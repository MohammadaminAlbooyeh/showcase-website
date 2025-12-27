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
exports.id = "pages/resume";
exports.ids = ["pages/resume"];
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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavBar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/AppBar */ \"(pages-dir-node)/./node_modules/@mui/material/esm/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Box */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Toolbar */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Toolbar/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/IconButton */ \"(pages-dir-node)/./node_modules/@mui/material/esm/IconButton/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Typography/index.js\");\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Drawer */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Drawer/index.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/List */ \"(pages-dir-node)/./node_modules/@mui/material/esm/List/index.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/ListItem */ \"(pages-dir-node)/./node_modules/@mui/material/esm/ListItem/index.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/ListItemText */ \"(pages-dir-node)/./node_modules/@mui/material/esm/ListItemText/index.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Menu.js\");\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/Close */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Close.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Container */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Container/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Button */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Button/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/LinearProgress */ \"(pages-dir-node)/./node_modules/@mui/material/esm/LinearProgress/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/esm/styles/index.js\");\n/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/useMediaQuery */ \"(pages-dir-node)/./node_modules/@mui/material/esm/useMediaQuery/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__, _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__, _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__, _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_8__, _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__, _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_10__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_12__, _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__, _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_14__, _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_15__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_16__, _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_17__, _mui_material_List__WEBPACK_IMPORTED_MODULE_18__, _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_19__, _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_20__]);\n([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__, _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__, _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__, _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_8__, _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__, _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_10__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_12__, _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__, _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_14__, _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_15__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_16__, _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_17__, _mui_material_List__WEBPACK_IMPORTED_MODULE_18__, _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_19__, _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst pages = [\n    {\n        label: 'Home',\n        href: '/'\n    },\n    {\n        label: 'Portfolio',\n        href: '/portfolio'\n    },\n    {\n        label: 'Projects',\n        href: '/projects'\n    },\n    {\n        label: 'Resume',\n        href: '/resume'\n    },\n    {\n        label: 'Contact',\n        href: '/contactus'\n    }\n];\nfunction NavBar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [mobileOpen, setMobileOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();\n    const isMobile = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(theme.breakpoints.down('md'));\n    const navRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    const [focusedIndex, setFocusedIndex] = react__WEBPACK_IMPORTED_MODULE_1__.useState(-1);\n    // Handle keyboard navigation\n    const handleKeyPress = (e, index)=>{\n        switch(e.key){\n            case 'Escape':\n                if (mobileOpen) {\n                    setMobileOpen(false);\n                }\n                break;\n            case 'ArrowRight':\n            case 'ArrowDown':\n                e.preventDefault();\n                setFocusedIndex((prevIndex)=>{\n                    const newIndex = prevIndex < pages.length - 1 ? prevIndex + 1 : 0;\n                    focusNavItem(newIndex);\n                    return newIndex;\n                });\n                break;\n            case 'ArrowLeft':\n            case 'ArrowUp':\n                e.preventDefault();\n                setFocusedIndex((prevIndex)=>{\n                    const newIndex = prevIndex > 0 ? prevIndex - 1 : pages.length - 1;\n                    focusNavItem(newIndex);\n                    return newIndex;\n                });\n                break;\n            case 'Home':\n                e.preventDefault();\n                setFocusedIndex(0);\n                focusNavItem(0);\n                break;\n            case 'End':\n                e.preventDefault();\n                setFocusedIndex(pages.length - 1);\n                focusNavItem(pages.length - 1);\n                break;\n        }\n    };\n    const focusNavItem = (index)=>{\n        const navItems = navRef.current?.querySelectorAll('button, a[role=\"menuitem\"]');\n        if (navItems?.[index]) {\n            navItems[index].focus();\n        }\n    };\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect({\n        \"NavBar.useEffect\": ()=>{\n            const handleStart = {\n                \"NavBar.useEffect.handleStart\": ()=>setIsLoading(true)\n            }[\"NavBar.useEffect.handleStart\"];\n            const handleComplete = {\n                \"NavBar.useEffect.handleComplete\": ()=>{\n                    setIsLoading(false);\n                    setMobileOpen(false); // Close mobile menu on navigation\n                }\n            }[\"NavBar.useEffect.handleComplete\"];\n            // Add event listeners for navigation and keyboard events\n            router.events.on('routeChangeStart', handleStart);\n            router.events.on('routeChangeComplete', handleComplete);\n            router.events.on('routeChangeError', handleComplete);\n            window.addEventListener('keydown', handleKeyPress);\n            // Focus management for mobile menu\n            if (mobileOpen && navRef.current) {\n                const focusableElements = navRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])');\n                if (focusableElements.length > 0) {\n                    focusableElements[0].focus();\n                }\n            }\n            return ({\n                \"NavBar.useEffect\": ()=>{\n                    router.events.off('routeChangeStart', handleStart);\n                    router.events.off('routeChangeComplete', handleComplete);\n                    router.events.off('routeChangeError', handleComplete);\n                    window.removeEventListener('keydown', handleKeyPress);\n                    router.events.off('routeChangeError', handleComplete);\n                }\n            })[\"NavBar.useEffect\"];\n        }\n    }[\"NavBar.useEffect\"], [\n        router\n    ]);\n    const toggleMobileMenu = ()=>{\n        setMobileOpen(!mobileOpen);\n    };\n    // Pre-fetch all routes for instant navigation\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect({\n        \"NavBar.useEffect\": ()=>{\n            pages.forEach({\n                \"NavBar.useEffect\": (page)=>router.prefetch(page.href)\n            }[\"NavBar.useEffect\"]);\n        }\n    }[\"NavBar.useEffect\"], []);\n    const isActiveRoute = (href)=>router.pathname === href;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        initial: {\n            opacity: 0,\n            y: -20\n        },\n        animate: {\n            opacity: 1,\n            y: 0\n        },\n        transition: {\n            duration: 0.5\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            position: \"sticky\",\n            color: \"default\",\n            elevation: 2,\n            component: \"nav\",\n            \"aria-label\": \"Main navigation\",\n            sx: {\n                background: 'var(--color-nav-bg)',\n                backdropFilter: 'blur(8px)',\n                borderBottom: '1px solid',\n                borderColor: 'divider'\n            },\n            children: [\n                isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    \"aria-label\": \"Page loading indicator\",\n                    sx: {\n                        position: 'absolute',\n                        top: 0,\n                        left: 0,\n                        right: 0,\n                        height: '2px',\n                        zIndex: 2000\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                    lineNumber: 148,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    maxWidth: \"lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        disableGutters: true,\n                        sx: {\n                            minHeight: {\n                                xs: '56px',\n                                sm: '64px'\n                            },\n                            justifyContent: 'space-between'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                variant: \"h6\",\n                                component: framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div,\n                                whileHover: {\n                                    scale: 1.05\n                                },\n                                sx: {\n                                    flexGrow: {\n                                        xs: 1,\n                                        md: 0\n                                    },\n                                    fontSize: {\n                                        xs: '1.25rem',\n                                        sm: '1.5rem'\n                                    },\n                                    fontWeight: 700,\n                                    textAlign: {\n                                        xs: 'center',\n                                        md: 'left'\n                                    }\n                                },\n                                children: \"My Portfolio\"\n                            }, void 0, false, {\n                                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                lineNumber: 169,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                sx: {\n                                    display: {\n                                        xs: 'flex',\n                                        md: 'none'\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                    size: \"large\",\n                                    \"aria-label\": mobileOpen ? 'close menu' : 'open menu',\n                                    onClick: toggleMobileMenu,\n                                    color: \"inherit\",\n                                    edge: \"end\",\n                                    children: mobileOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                        lineNumber: 192,\n                                        columnNumber: 31\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                        lineNumber: 192,\n                                        columnNumber: 47\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                    lineNumber: 185,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                lineNumber: 184,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                sx: {\n                                    flexGrow: 1,\n                                    display: {\n                                        xs: 'none',\n                                        md: 'flex'\n                                    },\n                                    justifyContent: 'flex-end',\n                                    gap: 2\n                                },\n                                children: pages.map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: page.href,\n                                        passHref: true,\n                                        style: {\n                                            textDecoration: 'none'\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n                                            component: framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button,\n                                            whileHover: {\n                                                scale: 1.05\n                                            },\n                                            whileTap: {\n                                                scale: 0.95\n                                            },\n                                            sx: {\n                                                color: 'text.primary',\n                                                position: 'relative',\n                                                '&::after': {\n                                                    content: '\"\"',\n                                                    position: 'absolute',\n                                                    bottom: 0,\n                                                    left: 0,\n                                                    width: '100%',\n                                                    height: '2px',\n                                                    background: 'primary.main',\n                                                    transform: isActiveRoute(page.href) ? 'scaleX(1)' : 'scaleX(0)',\n                                                    transition: 'transform 0.3s ease'\n                                                },\n                                                '&:hover::after': {\n                                                    transform: 'scaleX(1)'\n                                                }\n                                            },\n                                            children: page.label\n                                        }, void 0, false, {\n                                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                            lineNumber: 212,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, page.href, false, {\n                                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                        lineNumber: 206,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                lineNumber: 197,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n                                anchor: \"right\",\n                                open: mobileOpen && isMobile,\n                                onClose: ()=>setMobileOpen(false),\n                                PaperProps: {\n                                    sx: {\n                                        width: '80%',\n                                        maxWidth: '300px',\n                                        background: 'var(--color-nav-bg)',\n                                        backdropFilter: 'blur(8px)'\n                                    }\n                                },\n                                ModalProps: {\n                                    keepMounted: true // Better mobile performance\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n                                    sx: {\n                                        pt: 2\n                                    },\n                                    children: pages.map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {\n                                            component: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                            href: page.href,\n                                            onClick: ()=>setMobileOpen(false),\n                                            sx: {\n                                                py: 2,\n                                                borderBottom: '1px solid',\n                                                borderColor: 'divider'\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_20__[\"default\"], {\n                                                primary: page.label,\n                                                sx: {\n                                                    '& .MuiTypography-root': {\n                                                        fontSize: '1.125rem',\n                                                        fontWeight: isActiveRoute(page.href) ? 600 : 400,\n                                                        color: isActiveRoute(page.href) ? 'primary.main' : 'text.primary'\n                                                    }\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                                lineNumber: 271,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, page.href, false, {\n                                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                            lineNumber: 260,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                    lineNumber: 258,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                lineNumber: 242,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                        lineNumber: 161,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                    lineNumber: 160,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n            lineNumber: 134,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n        lineNumber: 129,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTmF2QmFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDVztBQUNOO0FBQ1E7QUFDTTtBQUNBO0FBQ1I7QUFDSjtBQUNRO0FBQ1E7QUFDTjtBQUNFO0FBQ0Y7QUFDTjtBQUNiO0FBQ1c7QUFDZ0I7QUFDRTtBQUNWO0FBQ1E7QUFFeEQsTUFBTXFCLFFBQVE7SUFDWjtRQUFFQyxPQUFPO1FBQVFDLE1BQU07SUFBSTtJQUMzQjtRQUFFRCxPQUFPO1FBQWFDLE1BQU07SUFBYTtJQUN6QztRQUFFRCxPQUFPO1FBQVlDLE1BQU07SUFBWTtJQUN2QztRQUFFRCxPQUFPO1FBQVVDLE1BQU07SUFBVTtJQUNuQztRQUFFRCxPQUFPO1FBQVdDLE1BQU07SUFBYTtDQUN4QztBQUVjLFNBQVNDO0lBQ3RCLE1BQU1DLFNBQVNWLHNEQUFTQTtJQUN4QixNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBRzNCLDJDQUFjLENBQUM7SUFDbkQsTUFBTSxDQUFDNkIsV0FBV0MsYUFBYSxHQUFHOUIsMkNBQWMsQ0FBQztJQUNqRCxNQUFNK0IsUUFBUVosOERBQVFBO0lBQ3RCLE1BQU1hLFdBQVdaLHVFQUFhQSxDQUFDVyxNQUFNRSxXQUFXLENBQUNDLElBQUksQ0FBQztJQUN0RCxNQUFNQyxTQUFTbkMseUNBQVksQ0FBQztJQUM1QixNQUFNLENBQUNxQyxjQUFjQyxnQkFBZ0IsR0FBR3RDLDJDQUFjLENBQUMsQ0FBQztJQUV4RCw2QkFBNkI7SUFDN0IsTUFBTXVDLGlCQUFpQixDQUFDQyxHQUFHQztRQUN6QixPQUFRRCxFQUFFRSxHQUFHO1lBQ1gsS0FBSztnQkFDSCxJQUFJaEIsWUFBWTtvQkFDZEMsY0FBYztnQkFDaEI7Z0JBQ0E7WUFDRixLQUFLO1lBQ0wsS0FBSztnQkFDSGEsRUFBRUcsY0FBYztnQkFDaEJMLGdCQUFnQixDQUFDTTtvQkFDZixNQUFNQyxXQUFXRCxZQUFZdkIs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eUMsS0FBS3pDLElBQUk7NENBQ2ZtRixTQUFTLElBQU0vRSxjQUFjOzRDQUM3QnFELElBQUk7Z0RBQ0Y4QyxJQUFJO2dEQUNKM0MsY0FBYztnREFDZEMsYUFBYTs0Q0FDZjtzREFFQSw0RUFBQzNFLG1FQUFZQTtnREFDWHNILFNBQVMvRCxLQUFLMUMsS0FBSztnREFDbkIwRCxJQUFJO29EQUNGLHlCQUF5Qjt3REFDdkJxQixVQUFVO3dEQUNWQyxZQUFZcEMsY0FBY0YsS0FBS3pDLElBQUksSUFBSSxNQUFNO3dEQUM3Q3FELE9BQU9WLGNBQWNGLEtBQUt6QyxJQUFJLElBQUksaUJBQWlCO29EQUNyRDtnREFDRjs7Ozs7OzJDQWxCR3lDLEtBQUt6QyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJsQyIsInNvdXJjZXMiOlsiL1VzZXJzL2FtaW4vRGVza3RvcC9NeVByb2plY3RzL3Nob3djYXNlLXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9OYXZCYXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmVhclByb2dyZXNzJztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG11aS9tYXRlcmlhbC91c2VNZWRpYVF1ZXJ5JztcblxuY29uc3QgcGFnZXMgPSBbXG4gIHsgbGFiZWw6ICdIb21lJywgaHJlZjogJy8nIH0sXG4gIHsgbGFiZWw6ICdQb3J0Zm9saW8nLCBocmVmOiAnL3BvcnRmb2xpbycgfSxcbiAgeyBsYWJlbDogJ1Byb2plY3RzJywgaHJlZjogJy9wcm9qZWN0cycgfSxcbiAgeyBsYWJlbDogJ1Jlc3VtZScsIGhyZWY6ICcvcmVzdW1lJyB9LFxuICB7IGxhYmVsOiAnQ29udGFjdCcsIGhyZWY6ICcvY29udGFjdHVzJyB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW21vYmlsZU9wZW4sIHNldE1vYmlsZU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpKTtcbiAgY29uc3QgbmF2UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCBbZm9jdXNlZEluZGV4LCBzZXRGb2N1c2VkSW5kZXhdID0gUmVhY3QudXNlU3RhdGUoLTEpO1xuXG4gIC8vIEhhbmRsZSBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGUsIGluZGV4KSA9PiB7XG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgaWYgKG1vYmlsZU9wZW4pIHtcbiAgICAgICAgICBzZXRNb2JpbGVPcGVuKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRGb2N1c2VkSW5kZXgoKHByZXZJbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gcHJldkluZGV4IDwgcGFnZXMubGVuZ3RoIC0gMSA/IHByZXZJbmRleCArIDEgOiAwO1xuICAgICAgICAgIGZvY3VzTmF2SXRlbShuZXdJbmRleCk7XG4gICAgICAgICAgcmV0dXJuIG5ld0luZGV4O1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0Rm9jdXNlZEluZGV4KChwcmV2SW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHByZXZJbmRleCA+IDAgPyBwcmV2SW5kZXggLSAxIDogcGFnZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICBmb2N1c05hdkl0ZW0obmV3SW5kZXgpO1xuICAgICAgICAgIHJldHVybiBuZXdJbmRleDtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0Rm9jdXNlZEluZGV4KDApO1xuICAgICAgICBmb2N1c05hdkl0ZW0oMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRW5kJzpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRGb2N1c2VkSW5kZXgocGFnZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIGZvY3VzTmF2SXRlbShwYWdlcy5sZW5ndGggLSAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZvY3VzTmF2SXRlbSA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IG5hdkl0ZW1zID0gbmF2UmVmLmN1cnJlbnQ/LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiwgYVtyb2xlPVwibWVudWl0ZW1cIl0nKTtcbiAgICBpZiAobmF2SXRlbXM/LltpbmRleF0pIHtcbiAgICAgIG5hdkl0ZW1zW2luZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKCkgPT4gc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IGhhbmRsZUNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHNldE1vYmlsZU9wZW4oZmFsc2UpOyAvLyBDbG9zZSBtb2JpbGUgbWVudSBvbiBuYXZpZ2F0aW9uXG4gICAgfTtcblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIG5hdmlnYXRpb24gYW5kIGtleWJvYXJkIGV2ZW50c1xuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZUNvbXBsZXRlKTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlQ29tcGxldGUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xuXG4gICAgLy8gRm9jdXMgbWFuYWdlbWVudCBmb3IgbW9iaWxlIG1lbnVcbiAgICBpZiAobW9iaWxlT3BlbiAmJiBuYXZSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBuYXZSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAnYnV0dG9uLCBbaHJlZl0sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSknXG4gICAgICApO1xuICAgICAgaWYgKGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9jdXNhYmxlRWxlbWVudHNbMF0uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZUNvbXBsZXRlKTtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlQ29tcGxldGUpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZUNvbXBsZXRlKTtcbiAgICB9O1xuICB9LCBbcm91dGVyXSk7XG5cbiAgY29uc3QgdG9nZ2xlTW9iaWxlTWVudSA9ICgpID0+IHtcbiAgICBzZXRNb2JpbGVPcGVuKCFtb2JpbGVPcGVuKTtcbiAgfTtcblxuICAvLyBQcmUtZmV0Y2ggYWxsIHJvdXRlcyBmb3IgaW5zdGFudCBuYXZpZ2F0aW9uXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcGFnZXMuZm9yRWFjaChwYWdlID0+IHJvdXRlci5wcmVmZXRjaChwYWdlLmhyZWYpKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGlzQWN0aXZlUm91dGUgPSAoaHJlZikgPT4gcm91dGVyLnBhdGhuYW1lID09PSBocmVmO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTIwIH19XG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgID5cbiAgICAgIDxBcHBCYXIgXG4gICAgICAgIHBvc2l0aW9uPVwic3RpY2t5XCIgXG4gICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiIFxuICAgICAgICBlbGV2YXRpb249ezJ9IFxuICAgICAgICBjb21wb25lbnQ9XCJuYXZcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiTWFpbiBuYXZpZ2F0aW9uXCJcbiAgICAgICAgc3g9e3sgXG4gICAgICAgICAgYmFja2dyb3VuZDogJ3ZhcigtLWNvbG9yLW5hdi1iZyknLCBcbiAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogJ2JsdXIoOHB4KScsXG4gICAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ2RpdmlkZXInXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgIDxMaW5lYXJQcm9ncmVzc1xuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlBhZ2UgbG9hZGluZyBpbmRpY2F0b3JcIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgIGhlaWdodDogJzJweCcsXG4gICAgICAgICAgICAgIHpJbmRleDogMjAwMFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cbiAgICAgICAgICA8VG9vbGJhciBcbiAgICAgICAgICAgIGRpc2FibGVHdXR0ZXJzIFxuICAgICAgICAgICAgc3g9e3sgXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogeyB4czogJzU2cHgnLCBzbTogJzY0cHgnIH0sXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbidcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgey8qIExvZ28vQnJhbmQgKi99XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e21vdGlvbi5kaXZ9XG4gICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX1cbiAgICAgICAgICAgICAgc3g9e3sgXG4gICAgICAgICAgICAgICAgZmxleEdyb3c6IHsgeHM6IDEsIG1kOiAwIH0sXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IHsgeHM6ICcxLjI1cmVtJywgc206ICcxLjVyZW0nIH0sXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogeyB4czogJ2NlbnRlcicsIG1kOiAnbGVmdCcgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNeSBQb3J0Zm9saW9cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgey8qIE1vYmlsZSBtZW51IHRvZ2dsZSAqL31cbiAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogeyB4czogJ2ZsZXgnLCBtZDogJ25vbmUnIH0gfX0+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXttb2JpbGVPcGVuID8gJ2Nsb3NlIG1lbnUnIDogJ29wZW4gbWVudSd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTW9iaWxlTWVudX1cbiAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgIGVkZ2U9XCJlbmRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21vYmlsZU9wZW4gPyA8Q2xvc2VJY29uIC8+IDogPE1lbnVJY29uIC8+fVxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgey8qIERlc2t0b3AgbWVudSAqL31cbiAgICAgICAgICAgIDxCb3ggXG4gICAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLCBcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB7IHhzOiAnbm9uZScsIG1kOiAnZmxleCcgfSxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICAgICAgICAgICAgICBnYXA6IDJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BhZ2VzLm1hcCgocGFnZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBrZXk9e3BhZ2UuaHJlZn1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e3BhZ2UuaHJlZn1cbiAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e21vdGlvbi5idXR0b259XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX1cbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3RleHQucHJpbWFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgJyY6OmFmdGVyJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzJweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncHJpbWFyeS5tYWluJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogaXNBY3RpdmVSb3V0ZShwYWdlLmhyZWYpID8gJ3NjYWxlWCgxKScgOiAnc2NhbGVYKDApJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4zcyBlYXNlJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXI6OmFmdGVyJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3BhZ2UubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgIHsvKiBNb2JpbGUgZHJhd2VyICovfVxuICAgICAgICAgICAgPERyYXdlclxuICAgICAgICAgICAgICBhbmNob3I9XCJyaWdodFwiXG4gICAgICAgICAgICAgIG9wZW49e21vYmlsZU9wZW4gJiYgaXNNb2JpbGV9XG4gICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE1vYmlsZU9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICBQYXBlclByb3BzPXt7XG4gICAgICAgICAgICAgICAgc3g6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODAlJyxcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMzAwcHgnLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3ZhcigtLWNvbG9yLW5hdi1iZyknLFxuICAgICAgICAgICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6ICdibHVyKDhweCknXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBNb2RhbFByb3BzPXt7XG4gICAgICAgICAgICAgICAga2VlcE1vdW50ZWQ6IHRydWUgLy8gQmV0dGVyIG1vYmlsZSBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TGlzdCBzeD17eyBwdDogMiB9fT5cbiAgICAgICAgICAgICAgICB7cGFnZXMubWFwKChwYWdlKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gXG4gICAgICAgICAgICAgICAgICAgIGtleT17cGFnZS5ocmVmfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e3BhZ2UuaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICAgICAgICAgIHB5OiAyLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdkaXZpZGVyJ1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IFxuICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e3BhZ2UubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICcmIC5NdWlUeXBvZ3JhcGh5LXJvb3QnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS4xMjVyZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBpc0FjdGl2ZVJvdXRlKHBhZ2UuaHJlZikgPyA2MDAgOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc0FjdGl2ZVJvdXRlKHBhZ2UuaHJlZikgPyAncHJpbWFyeS5tYWluJyA6ICd0ZXh0LnByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgIDwvRHJhd2VyPlxuICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwQmFyIiwiQm94IiwiVG9vbGJhciIsIkljb25CdXR0b24iLCJUeXBvZ3JhcGh5IiwiRHJhd2VyIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1UZXh0IiwiTWVudUljb24iLCJDbG9zZUljb24iLCJDb250YWluZXIiLCJCdXR0b24iLCJMaW5rIiwidXNlUm91dGVyIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiTGluZWFyUHJvZ3Jlc3MiLCJ1c2VUaGVtZSIsInVzZU1lZGlhUXVlcnkiLCJwYWdlcyIsImxhYmVsIiwiaHJlZiIsIk5hdkJhciIsInJvdXRlciIsIm1vYmlsZU9wZW4iLCJzZXRNb2JpbGVPcGVuIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ0aGVtZSIsImlzTW9iaWxlIiwiYnJlYWtwb2ludHMiLCJkb3duIiwibmF2UmVmIiwidXNlUmVmIiwiZm9jdXNlZEluZGV4Iiwic2V0Rm9jdXNlZEluZGV4IiwiaGFuZGxlS2V5UHJlc3MiLCJlIiwiaW5kZXgiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZJbmRleCIsIm5ld0luZGV4IiwibGVuZ3RoIiwiZm9jdXNOYXZJdGVtIiwibmF2SXRlbXMiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvY3VzIiwidXNlRWZmZWN0IiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVDb21wbGV0ZSIsImV2ZW50cyIsIm9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvY3VzYWJsZUVsZW1lbnRzIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU1vYmlsZU1lbnUiLCJmb3JFYWNoIiwicGFnZSIsInByZWZldGNoIiwiaXNBY3RpdmVSb3V0ZSIsInBhdGhuYW1lIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInBvc2l0aW9uIiwiY29sb3IiLCJlbGV2YXRpb24iLCJjb21wb25lbnQiLCJhcmlhLWxhYmVsIiwic3giLCJiYWNrZ3JvdW5kIiwiYmFja2Ryb3BGaWx0ZXIiLCJib3JkZXJCb3R0b20iLCJib3JkZXJDb2xvciIsInRvcCIsImxlZnQiLCJyaWdodCIsImhlaWdodCIsInpJbmRleCIsIm1heFdpZHRoIiwiZGlzYWJsZUd1dHRlcnMiLCJtaW5IZWlnaHQiLCJ4cyIsInNtIiwianVzdGlmeUNvbnRlbnQiLCJ2YXJpYW50Iiwid2hpbGVIb3ZlciIsInNjYWxlIiwiZmxleEdyb3ciLCJtZCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJzaXplIiwib25DbGljayIsImVkZ2UiLCJnYXAiLCJtYXAiLCJwYXNzSHJlZiIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJidXR0b24iLCJ3aGlsZVRhcCIsImNvbnRlbnQiLCJib3R0b20iLCJ3aWR0aCIsInRyYW5zZm9ybSIsImFuY2hvciIsIm9wZW4iLCJvbkNsb3NlIiwiUGFwZXJQcm9wcyIsIk1vZGFsUHJvcHMiLCJrZWVwTW91bnRlZCIsInB0IiwicHkiLCJwcmltYXJ5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/NavBar.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./components/SEO.jsx":
/*!****************************!*\
  !*** ./components/SEO.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"(pages-dir-node)/./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst SEO = ({ title = 'My Portfolio', description = 'Welcome to my professional portfolio showcasing my projects and skills in web development.', image = '/og-image.jpg', type = 'website' })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const siteName = 'My Portfolio';\n    const baseUrl = 'https://your-portfolio-url.com';\n    const currentUrl = `${baseUrl}${router.asPath}`;\n    const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: `${title} | ${siteName}`\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"title\",\n                content: `${title} | ${siteName}`\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"description\",\n                content: description\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:type\",\n                content: type\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:url\",\n                content: currentUrl\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:title\",\n                content: `${title} | ${siteName}`\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:description\",\n                content: description\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:image\",\n                content: imageUrl\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:site_name\",\n                content: siteName\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:card\",\n                content: \"summary_large_image\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:url\",\n                content: currentUrl\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:title\",\n                content: `${title} | ${siteName}`\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:description\",\n                content: description\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:image\",\n                content: imageUrl\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"twitter:creator\",\n                content: \"@yourusername\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"canonical\",\n                href: currentUrl\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"viewport\",\n                content: \"width=device-width, initial-scale=1.0\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"robots\",\n                content: \"index, follow\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"author\",\n                content: \"Your Name\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"keywords\",\n                content: \"web development, portfolio, react, nextjs, django, full stack developer\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                type: \"application/ld+json\",\n                dangerouslySetInnerHTML: {\n                    __html: JSON.stringify({\n                        '@context': 'https://schema.org',\n                        '@type': 'Person',\n                        name: 'Your Name',\n                        url: currentUrl,\n                        sameAs: [\n                            'https://github.com/yourusername',\n                            'https://linkedin.com/in/yourusername'\n                        ],\n                        jobTitle: 'Full Stack Developer',\n                        image: image,\n                        description: description,\n                        knowsAbout: [\n                            'Web Development',\n                            'React',\n                            'Next.js',\n                            'Django',\n                            'Python',\n                            'JavaScript'\n                        ]\n                    })\n                }\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/SEO.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvU0VPLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUNXO0FBRXhDLE1BQU1FLE1BQU0sQ0FBQyxFQUNYQyxRQUFRLGNBQWMsRUFDdEJDLGNBQWMsNEZBQTRGLEVBQzFHQyxRQUFRLGVBQWUsRUFDdkJDLE9BQU8sU0FBUyxFQUNqQjtJQUNDLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNTyxXQUFXO0lBQ2pCLE1BQU1DLFVBQVU7SUFDaEIsTUFBTUMsYUFBYSxHQUFHRCxVQUFVRixPQUFPSSxNQUFNLEVBQUU7SUFDL0MsTUFBTUMsV0FBV1AsTUFBTVEsVUFBVSxDQUFDLFVBQVVSLFFBQVEsR0FBR0ksVUFBVUosT0FBTztJQUV4RSxxQkFDRSw4REFBQ0wsa0RBQUlBOzswQkFFSCw4REFBQ0c7MEJBQU8sR0FBR0EsTUFBTSxHQUFHLEVBQUVLLFVBQVU7Ozs7OzswQkFDaEMsOERBQUNNO2dCQUFLQyxNQUFLO2dCQUFRQyxTQUFTLEdBQUdiLE1BQU0sR0FBRyxFQUFFSyxVQUFVOzs7Ozs7MEJBQ3BELDhEQUFDTTtnQkFBS0MsTUFBSztnQkFBY0MsU0FBU1o7Ozs7OzswQkFHbEMsOERBQUNVO2dCQUFLRyxVQUFTO2dCQUFVRCxTQUFTVjs7Ozs7OzBCQUNsQyw4REFBQ1E7Z0JBQUtHLFVBQVM7Z0JBQVNELFNBQVNOOzs7Ozs7MEJBQ2pDLDhEQUFDSTtnQkFBS0csVUFBUztnQkFBV0QsU0FBUyxHQUFHYixNQUFNLEdBQUcsRUFBRUssVUFBVTs7Ozs7OzBCQUMzRCw4REFBQ007Z0JBQUtHLFVBQVM7Z0JBQWlCRCxTQUFTWjs7Ozs7OzBCQUN6Qyw4REFBQ1U7Z0JBQUtHLFVBQVM7Z0JBQVdELFNBQVNKOzs7Ozs7MEJBQ25DLDhEQUFDRTtnQkFBS0csVUFBUztnQkFBZUQsU0FBU1I7Ozs7OzswQkFHdkMsOERBQUNNO2dCQUFLRyxVQUFTO2dCQUFlRCxTQUFROzs7Ozs7MEJBQ3RDLDhEQUFDRjtnQkFBS0csVUFBUztnQkFBY0QsU0FBU047Ozs7OzswQkFDdEMsOERBQUNJO2dCQUFLRyxVQUFTO2dCQUFnQkQsU0FBUyxHQUFHYixNQUFNLEdBQUcsRUFBRUssVUFBVTs7Ozs7OzBCQUNoRSw4REFBQ007Z0JBQUtHLFVBQVM7Z0JBQXNCRCxTQUFTWjs7Ozs7OzBCQUM5Qyw4REFBQ1U7Z0JBQUtHLFVBQVM7Z0JBQWdCRCxTQUFTSjs7Ozs7OzBCQUN4Qyw4REFBQ0U7Z0JBQUtDLE1BQUs7Z0JBQWtCQyxTQUFROzs7Ozs7MEJBR3JDLDhEQUFDRTtnQkFBS0MsS0FBSTtnQkFBWUMsTUFBTVY7Ozs7OzswQkFDNUIsOERBQUNJO2dCQUFLQyxNQUFLO2dCQUFXQyxTQUFROzs7Ozs7MEJBQzlCLDhEQUFDRjtnQkFBS0MsTUFBSztnQkFBU0MsU0FBUTs7Ozs7OzBCQUM1Qiw4REFBQ0Y7Z0JBQUtDLE1BQUs7Z0JBQVNDLFNBQVE7Ozs7OzswQkFDNUIsOERBQUNGO2dCQUFLQyxNQUFLO2dCQUFXQyxTQUFROzs7Ozs7MEJBRzlCLDhEQUFDSztnQkFDQ2YsTUFBSztnQkFDTGdCLHlCQUF5QjtvQkFDdkJDLFFBQVFDLEtBQUtDLFNBQVMsQ0FBQzt3QkFDckIsWUFBWTt3QkFDWixTQUFTO3dCQUNUVixNQUFNO3dCQUNOVyxLQUFLaEI7d0JBQ0xpQixRQUFROzRCQUNOOzRCQUNBO3lCQUVEO3dCQUNEQyxVQUFVO3dCQUNWdkIsT0FBT0E7d0JBQ1BELGFBQWFBO3dCQUNieUIsWUFBWTs0QkFDVjs0QkFDQTs0QkFDQTs0QkFDQTs0QkFDQTs0QkFDQTt5QkFDRDtvQkFDSDtnQkFDRjs7Ozs7Ozs7Ozs7O0FBSVI7QUFFQSxpRUFBZTNCLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluL0Rlc2t0b3AvTXlQcm9qZWN0cy9zaG93Y2FzZS13ZWJzaXRlL2Zyb250ZW5kL2NvbXBvbmVudHMvU0VPLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBTRU8gPSAoeyBcbiAgdGl0bGUgPSAnTXkgUG9ydGZvbGlvJywgXG4gIGRlc2NyaXB0aW9uID0gJ1dlbGNvbWUgdG8gbXkgcHJvZmVzc2lvbmFsIHBvcnRmb2xpbyBzaG93Y2FzaW5nIG15IHByb2plY3RzIGFuZCBza2lsbHMgaW4gd2ViIGRldmVsb3BtZW50LicsXG4gIGltYWdlID0gJy9vZy1pbWFnZS5qcGcnLFxuICB0eXBlID0gJ3dlYnNpdGUnXG59KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBzaXRlTmFtZSA9ICdNeSBQb3J0Zm9saW8nO1xuICBjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8veW91ci1wb3J0Zm9saW8tdXJsLmNvbSc7XG4gIGNvbnN0IGN1cnJlbnRVcmwgPSBgJHtiYXNlVXJsfSR7cm91dGVyLmFzUGF0aH1gO1xuICBjb25zdCBpbWFnZVVybCA9IGltYWdlLnN0YXJ0c1dpdGgoJ2h0dHAnKSA/IGltYWdlIDogYCR7YmFzZVVybH0ke2ltYWdlfWA7XG4gIFxuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgey8qIFByaW1hcnkgTWV0YSBUYWdzICovfVxuICAgICAgPHRpdGxlPntgJHt0aXRsZX0gfCAke3NpdGVOYW1lfWB9PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9e2Ake3RpdGxlfSB8ICR7c2l0ZU5hbWV9YH0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgXG4gICAgICB7LyogT3BlbiBHcmFwaCAvIEZhY2Vib29rICovfVxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD17dHlwZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17Y3VycmVudFVybH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgJHt0aXRsZX0gfCAke3NpdGVOYW1lfWB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17aW1hZ2VVcmx9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e3NpdGVOYW1lfSAvPlxuICAgICAgXG4gICAgICB7LyogVHdpdHRlciAqL31cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9e2N1cnJlbnRVcmx9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtgJHt0aXRsZX0gfCAke3NpdGVOYW1lfWB9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlVXJsfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJAeW91cnVzZXJuYW1lXCIgLz5cbiAgICAgIFxuICAgICAgey8qIEFkZGl0aW9uYWwgU0VPIHRhZ3MgKi99XG4gICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtjdXJyZW50VXJsfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJpbmRleCwgZm9sbG93XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiWW91ciBOYW1lXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJ3ZWIgZGV2ZWxvcG1lbnQsIHBvcnRmb2xpbywgcmVhY3QsIG5leHRqcywgZGphbmdvLCBmdWxsIHN0YWNrIGRldmVsb3BlclwiIC8+XG4gICAgICBcbiAgICAgIHsvKiBTdHJ1Y3R1cmVkIERhdGEgLyBKU09OLUxEICovfVxuICAgICAgPHNjcmlwdFxuICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAnQGNvbnRleHQnOiAnaHR0cHM6Ly9zY2hlbWEub3JnJyxcbiAgICAgICAgICAgICdAdHlwZSc6ICdQZXJzb24nLFxuICAgICAgICAgICAgbmFtZTogJ1lvdXIgTmFtZScsXG4gICAgICAgICAgICB1cmw6IGN1cnJlbnRVcmwsXG4gICAgICAgICAgICBzYW1lQXM6IFtcbiAgICAgICAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS95b3VydXNlcm5hbWUnLFxuICAgICAgICAgICAgICAnaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4veW91cnVzZXJuYW1lJyxcbiAgICAgICAgICAgICAgLy8gQWRkIG90aGVyIHNvY2lhbCBsaW5rc1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGpvYlRpdGxlOiAnRnVsbCBTdGFjayBEZXZlbG9wZXInLFxuICAgICAgICAgICAgaW1hZ2U6IGltYWdlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAga25vd3NBYm91dDogW1xuICAgICAgICAgICAgICAnV2ViIERldmVsb3BtZW50JyxcbiAgICAgICAgICAgICAgJ1JlYWN0JyxcbiAgICAgICAgICAgICAgJ05leHQuanMnLFxuICAgICAgICAgICAgICAnRGphbmdvJyxcbiAgICAgICAgICAgICAgJ1B5dGhvbicsXG4gICAgICAgICAgICAgICdKYXZhU2NyaXB0J1xuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvSGVhZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNFTzsiXSwibmFtZXMiOlsiSGVhZCIsInVzZVJvdXRlciIsIlNFTyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInR5cGUiLCJyb3V0ZXIiLCJzaXRlTmFtZSIsImJhc2VVcmwiLCJjdXJyZW50VXJsIiwiYXNQYXRoIiwiaW1hZ2VVcmwiLCJzdGFydHNXaXRoIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwicHJvcGVydHkiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNjcmlwdCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiSlNPTiIsInN0cmluZ2lmeSIsInVybCIsInNhbWVBcyIsImpvYlRpdGxlIiwia25vd3NBYm91dCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/SEO.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fresume&preferredRegion=&absolutePagePath=.%2Fpages%2Fresume.jsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fresume&preferredRegion=&absolutePagePath=.%2Fpages%2Fresume.jsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   handler: () => (/* binding */ handler),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(pages-dir-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(pages-dir-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"(pages-dir-node)/./pages/_document.jsx\");\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"(pages-dir-node)/./pages/_app.jsx\");\n/* harmony import */ var _pages_resume_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/resume.jsx */ \"(pages-dir-node)/./pages/resume.jsx\");\n/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/route-modules/pages/pages-handler */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/pages-handler.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__, private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__, _pages_resume_jsx__WEBPACK_IMPORTED_MODULE_5__]);\n([private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__, private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__, _pages_resume_jsx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_resume_jsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_resume_jsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_resume_jsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_resume_jsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_resume_jsx__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_resume_jsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_resume_jsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_resume_jsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_resume_jsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_resume_jsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_resume_jsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/resume\",\n        pathname: \"/resume\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    distDir: \".next\" || 0,\n    relativeProjectDir:  false || '',\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    userland: _pages_resume_jsx__WEBPACK_IMPORTED_MODULE_5__\n});\nconst handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({\n    srcPage: \"/resume\",\n    config,\n    userland: _pages_resume_jsx__WEBPACK_IMPORTED_MODULE_5__,\n    routeModule,\n    getStaticPaths,\n    getStaticProps,\n    getServerSideProps\n});\n\n//# sourceMappingURL=pages.js.map\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVMmcGFnZT0lMkZyZXN1bWUmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyUyRnJlc3VtZS5qc3gmYWJzb2x1dGVBcHBQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9hcHAmYWJzb2x1dGVEb2N1bWVudFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2RvY3VtZW50Jm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0Y7QUFDaEM7QUFDRTtBQUMxRDtBQUN5RDtBQUNWO0FBQy9DO0FBQytDO0FBQ2lDO0FBQ2hGO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyw4Q0FBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyx1QkFBdUIsd0VBQUssQ0FBQyw4Q0FBUTtBQUNyQyx1QkFBdUIsd0VBQUssQ0FBQyw4Q0FBUTtBQUNyQywyQkFBMkIsd0VBQUssQ0FBQyw4Q0FBUTtBQUN6QyxlQUFlLHdFQUFLLENBQUMsOENBQVE7QUFDN0Isd0JBQXdCLHdFQUFLLENBQUMsOENBQVE7QUFDN0M7QUFDTyxnQ0FBZ0Msd0VBQUssQ0FBQyw4Q0FBUTtBQUM5QyxnQ0FBZ0Msd0VBQUssQ0FBQyw4Q0FBUTtBQUM5QyxpQ0FBaUMsd0VBQUssQ0FBQyw4Q0FBUTtBQUMvQyxnQ0FBZ0Msd0VBQUssQ0FBQyw4Q0FBUTtBQUM5QyxvQ0FBb0Msd0VBQUssQ0FBQyw4Q0FBUTtBQUN6RDtBQUNPLHdCQUF3QixrR0FBZ0I7QUFDL0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFvQyxJQUFJLENBQUU7QUFDdkQsd0JBQXdCLE1BQXVDO0FBQy9EO0FBQ0E7QUFDQSxhQUFhLDhEQUFXO0FBQ3hCLGtCQUFrQixtRUFBZ0I7QUFDbEMsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDO0FBQ00sZ0JBQWdCLDhGQUFVO0FBQ2pDO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgYXBwIGFuZCBkb2N1bWVudCBtb2R1bGVzLlxuaW1wb3J0ICogYXMgZG9jdW1lbnQgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fZG9jdW1lbnRcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHBcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzL3Jlc3VtZS5qc3hcIjtcbmltcG9ydCB7IGdldEhhbmRsZXIgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzL3BhZ2VzLWhhbmRsZXJcIjtcbi8vIFJlLWV4cG9ydCB0aGUgY29tcG9uZW50IChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCAnZGVmYXVsdCcpO1xuLy8gUmUtZXhwb3J0IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFN0YXRpY1Byb3BzJyk7XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFN0YXRpY1BhdGhzJyk7XG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gaG9pc3QodXNlcmxhbmQsICdnZXRTZXJ2ZXJTaWRlUHJvcHMnKTtcbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgJ2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IHJlcG9ydFdlYlZpdGFscyA9IGhvaXN0KHVzZXJsYW5kLCAncmVwb3J0V2ViVml0YWxzJyk7XG4vLyBSZS1leHBvcnQgbGVnYWN5IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1Byb3BzJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1BhdGhzJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U2VydmVyUHJvcHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcycpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVMsXG4gICAgICAgIHBhZ2U6IFwiL3Jlc3VtZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvcmVzdW1lXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJ1xuICAgIH0sXG4gICAgZGlzdERpcjogcHJvY2Vzcy5lbnYuX19ORVhUX1JFTEFUSVZFX0RJU1RfRElSIHx8ICcnLFxuICAgIHJlbGF0aXZlUHJvamVjdERpcjogcHJvY2Vzcy5lbnYuX19ORVhUX1JFTEFUSVZFX1BST0pFQ1RfRElSIHx8ICcnLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgLy8gZGVmYXVsdCBleHBvcnQgbWlnaHQgbm90IGV4aXN0IHdoZW4gb3B0aW1pemVkIGZvciBkYXRhIG9ubHlcbiAgICAgICAgQXBwOiBhcHAuZGVmYXVsdCxcbiAgICAgICAgRG9jdW1lbnQ6IGRvY3VtZW50LmRlZmF1bHRcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gZ2V0SGFuZGxlcih7XG4gICAgc3JjUGFnZTogXCIvcmVzdW1lXCIsXG4gICAgY29uZmlnLFxuICAgIHVzZXJsYW5kLFxuICAgIHJvdXRlTW9kdWxlLFxuICAgIGdldFN0YXRpY1BhdGhzLFxuICAgIGdldFN0YXRpY1Byb3BzLFxuICAgIGdldFNlcnZlclNpZGVQcm9wc1xufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fresume&preferredRegion=&absolutePagePath=.%2Fpages%2Fresume.jsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/esm/styles/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"(pages-dir-node)/./node_modules/@mui/material/esm/CssBaseline/index.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ \"(pages-dir-node)/./styles/theme.js\");\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/variables.css */ \"(pages-dir-node)/./styles/variables.css\");\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_variables_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_FixedBottomBar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FixedBottomBar.css */ \"(pages-dir-node)/./components/FixedBottomBar.css\");\n/* harmony import */ var _components_FixedBottomBar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_FixedBottomBar_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../App.css */ \"(pages-dir-node)/./App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ \"(pages-dir-node)/./components/NavBar.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ \"(pages-dir-node)/./components/Footer.jsx\");\n/* harmony import */ var _components_FixedBottomBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/FixedBottomBar */ \"(pages-dir-node)/./components/FixedBottomBar.jsx\");\n/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SEO */ \"(pages-dir-node)/./components/SEO.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles_theme__WEBPACK_IMPORTED_MODULE_3__, _components_NavBar__WEBPACK_IMPORTED_MODULE_7__, _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__, _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_12__]);\n([_styles_theme__WEBPACK_IMPORTED_MODULE_3__, _components_NavBar__WEBPACK_IMPORTED_MODULE_7__, _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__, _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            // Remove the server-side injected CSS\n            const jssStyles = document.querySelector('#jss-server-side');\n            if (jssStyles) {\n                jssStyles.parentElement.removeChild(jssStyles);\n            }\n            // Pre-fetch all routes for instant navigation\n            [\n                '/',\n                '/portfolio',\n                '/projects',\n                '/resume',\n                '/contactus'\n            ].forEach({\n                \"MyApp.useEffect\": (route)=>{\n                    router.prefetch(route);\n                }\n            }[\"MyApp.useEffect\"]);\n        }\n    }[\"MyApp.useEffect\"], []);\n    // Define SEO metadata based on current route\n    const getPageMetadata = ()=>{\n        const path = router.pathname;\n        const baseUrl = 'https://your-portfolio-url.com';\n        const metadata = {\n            '/': {\n                title: 'My Portfolio - Full Stack Developer',\n                description: 'Welcome to my portfolio showcasing my expertise in web development, featuring projects in React, Next.js, and Django.',\n                image: `${baseUrl}/og-home.jpg`,\n                type: 'website'\n            },\n            '/portfolio': {\n                title: 'Portfolio - My Work and Projects',\n                description: 'Explore my portfolio of web development projects, including full-stack applications, responsive websites, and interactive UIs.',\n                image: `${baseUrl}/og-portfolio.jpg`,\n                type: 'website'\n            },\n            '/projects': {\n                title: 'Projects - Web Development Showcase',\n                description: 'View my latest web development projects built with modern technologies like React, Next.js, and Django.',\n                image: `${baseUrl}/og-projects.jpg`,\n                type: 'website'\n            },\n            '/resume': {\n                title: 'Resume - Full Stack Developer',\n                description: 'Professional experience, skills, and qualifications in web development and software engineering.',\n                image: `${baseUrl}/og-resume.jpg`,\n                type: 'profile'\n            },\n            '/contactus': {\n                title: 'Contact Me - Let\\'s Work Together',\n                description: 'Get in touch for collaboration opportunities, project inquiries, or professional connections.',\n                image: `${baseUrl}/og-contact.jpg`,\n                type: 'website'\n            }\n        };\n        return metadata[path] || metadata['/'];\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider, {\n        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SEO__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                ...getPageMetadata()\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"content\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FixedBottomBar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNNO0FBQ2E7QUFDRDtBQUNoQjtBQUNIO0FBQ1M7QUFDdEI7QUFDc0I7QUFDQTtBQUNnQjtBQUN0QjtBQUVwQyxTQUFTUyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLE1BQU1DLFNBQVNYLHNEQUFTQTtJQUV4QkQsZ0RBQVNBOzJCQUFDO1lBQ1Isc0NBQXNDO1lBQ3RDLE1BQU1hLFlBQVlDLFNBQVNDLGFBQWEsQ0FBQztZQUN6QyxJQUFJRixXQUFXO2dCQUNiQSxVQUFVRyxhQUFhLENBQUNDLFdBQVcsQ0FBQ0o7WUFDdEM7WUFFQSw4Q0FBOEM7WUFDOUM7Z0JBQUM7Z0JBQUs7Z0JBQWM7Z0JBQWE7Z0JBQVc7YUFBYSxDQUFDSyxPQUFPO21DQUFDQyxDQUFBQTtvQkFDaEVQLE9BQU9RLFFBQVEsQ0FBQ0Q7Z0JBQ2xCOztRQUNGOzBCQUFHLEVBQUU7SUFFTCw2Q0FBNkM7SUFDN0MsTUFBTUUsa0JBQWtCO1FBQ3RCLE1BQU1DLE9BQU9WLE9BQU9XLFFBQVE7UUFDNUIsTUFBTUMsVUFBVTtRQUVoQixNQUFNQyxXQUFXO1lBQ2YsS0FBSztnQkFDSEMsT0FBTztnQkFDUEMsYUFBYTtnQkFDYkMsT0FBTyxHQUFHSixRQUFRLFlBQVksQ0FBQztnQkFDL0JLLE1BQU07WUFDUjtZQUNBLGNBQWM7Z0JBQ1pILE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLE9BQU8sR0FBR0osUUFBUSxpQkFBaUIsQ0FBQztnQkFDcENLLE1BQU07WUFDUjtZQUNBLGFBQWE7Z0JBQ1hILE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLE9BQU8sR0FBR0osUUFBUSxnQkFBZ0IsQ0FBQztnQkFDbkNLLE1BQU07WUFDUjtZQUNBLFdBQVc7Z0JBQ1RILE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLE9BQU8sR0FBR0osUUFBUSxjQUFjLENBQUM7Z0JBQ2pDSyxNQUFNO1lBQ1I7WUFDQSxjQUFjO2dCQUNaSCxPQUFPO2dCQUNQQyxhQUFhO2dCQUNiQyxPQUFPLEdBQUdKLFFBQVEsZUFBZSxDQUFDO2dCQUNsQ0ssTUFBTTtZQUNSO1FBQ0Y7UUFFQSxPQUFPSixRQUFRLENBQUNILEtBQUssSUFBSUcsUUFBUSxDQUFDLElBQUk7SUFDeEM7SUFFQSxxQkFDRSw4REFBQ3ZCLGdFQUFhQTtRQUFDRSxPQUFPQSxxREFBS0E7OzBCQUN6Qiw4REFBQ0Qsa0VBQVdBOzs7OzswQkFDWiw4REFBQ0ssd0RBQUdBO2dCQUFFLEdBQUdhLGlCQUFpQjs7Ozs7OzBCQUMxQiw4REFBQ2hCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUN5QjtnQkFBS0MsV0FBVTswQkFDZCw0RUFBQ3JCO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OzBCQUUxQiw4REFBQ0wsMERBQU1BOzs7OzswQkFDUCw4REFBQ0Msa0VBQWNBOzs7Ozs7Ozs7OztBQUdyQjtBQUVBLGlFQUFlRSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvYW1pbi9EZXNrdG9wL015UHJvamVjdHMvc2hvd2Nhc2Utd2Vic2l0ZS9mcm9udGVuZC9wYWdlcy9fYXBwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XG5pbXBvcnQgJy4uL3N0eWxlcy92YXJpYWJsZXMuY3NzJztcbmltcG9ydCAnLi4vY29tcG9uZW50cy9GaXhlZEJvdHRvbUJhci5jc3MnO1xuaW1wb3J0ICcuLi9BcHAuY3NzJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgRml4ZWRCb3R0b21CYXIgZnJvbSAnLi4vY29tcG9uZW50cy9GaXhlZEJvdHRvbUJhcic7XG5pbXBvcnQgU0VPIGZyb20gJy4uL2NvbXBvbmVudHMvU0VPJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1NcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XG4gICAgaWYgKGpzc1N0eWxlcykge1xuICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcbiAgICB9XG5cbiAgICAvLyBQcmUtZmV0Y2ggYWxsIHJvdXRlcyBmb3IgaW5zdGFudCBuYXZpZ2F0aW9uXG4gICAgWycvJywgJy9wb3J0Zm9saW8nLCAnL3Byb2plY3RzJywgJy9yZXN1bWUnLCAnL2NvbnRhY3R1cyddLmZvckVhY2gocm91dGUgPT4ge1xuICAgICAgcm91dGVyLnByZWZldGNoKHJvdXRlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vIERlZmluZSBTRU8gbWV0YWRhdGEgYmFzZWQgb24gY3VycmVudCByb3V0ZVxuICBjb25zdCBnZXRQYWdlTWV0YWRhdGEgPSAoKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IHJvdXRlci5wYXRobmFtZTtcbiAgICBjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8veW91ci1wb3J0Zm9saW8tdXJsLmNvbSc7XG4gICAgXG4gICAgY29uc3QgbWV0YWRhdGEgPSB7XG4gICAgICAnLyc6IHtcbiAgICAgICAgdGl0bGU6ICdNeSBQb3J0Zm9saW8gLSBGdWxsIFN0YWNrIERldmVsb3BlcicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnV2VsY29tZSB0byBteSBwb3J0Zm9saW8gc2hvd2Nhc2luZyBteSBleHBlcnRpc2UgaW4gd2ViIGRldmVsb3BtZW50LCBmZWF0dXJpbmcgcHJvamVjdHMgaW4gUmVhY3QsIE5leHQuanMsIGFuZCBEamFuZ28uJyxcbiAgICAgICAgaW1hZ2U6IGAke2Jhc2VVcmx9L29nLWhvbWUuanBnYCxcbiAgICAgICAgdHlwZTogJ3dlYnNpdGUnXG4gICAgICB9LFxuICAgICAgJy9wb3J0Zm9saW8nOiB7XG4gICAgICAgIHRpdGxlOiAnUG9ydGZvbGlvIC0gTXkgV29yayBhbmQgUHJvamVjdHMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0V4cGxvcmUgbXkgcG9ydGZvbGlvIG9mIHdlYiBkZXZlbG9wbWVudCBwcm9qZWN0cywgaW5jbHVkaW5nIGZ1bGwtc3RhY2sgYXBwbGljYXRpb25zLCByZXNwb25zaXZlIHdlYnNpdGVzLCBhbmQgaW50ZXJhY3RpdmUgVUlzLicsXG4gICAgICAgIGltYWdlOiBgJHtiYXNlVXJsfS9vZy1wb3J0Zm9saW8uanBnYCxcbiAgICAgICAgdHlwZTogJ3dlYnNpdGUnXG4gICAgICB9LFxuICAgICAgJy9wcm9qZWN0cyc6IHtcbiAgICAgICAgdGl0bGU6ICdQcm9qZWN0cyAtIFdlYiBEZXZlbG9wbWVudCBTaG93Y2FzZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVmlldyBteSBsYXRlc3Qgd2ViIGRldmVsb3BtZW50IHByb2plY3RzIGJ1aWx0IHdpdGggbW9kZXJuIHRlY2hub2xvZ2llcyBsaWtlIFJlYWN0LCBOZXh0LmpzLCBhbmQgRGphbmdvLicsXG4gICAgICAgIGltYWdlOiBgJHtiYXNlVXJsfS9vZy1wcm9qZWN0cy5qcGdgLFxuICAgICAgICB0eXBlOiAnd2Vic2l0ZSdcbiAgICAgIH0sXG4gICAgICAnL3Jlc3VtZSc6IHtcbiAgICAgICAgdGl0bGU6ICdSZXN1bWUgLSBGdWxsIFN0YWNrIERldmVsb3BlcicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvZmVzc2lvbmFsIGV4cGVyaWVuY2UsIHNraWxscywgYW5kIHF1YWxpZmljYXRpb25zIGluIHdlYiBkZXZlbG9wbWVudCBhbmQgc29mdHdhcmUgZW5naW5lZXJpbmcuJyxcbiAgICAgICAgaW1hZ2U6IGAke2Jhc2VVcmx9L29nLXJlc3VtZS5qcGdgLFxuICAgICAgICB0eXBlOiAncHJvZmlsZSdcbiAgICAgIH0sXG4gICAgICAnL2NvbnRhY3R1cyc6IHtcbiAgICAgICAgdGl0bGU6ICdDb250YWN0IE1lIC0gTGV0XFwncyBXb3JrIFRvZ2V0aGVyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdHZXQgaW4gdG91Y2ggZm9yIGNvbGxhYm9yYXRpb24gb3Bwb3J0dW5pdGllcywgcHJvamVjdCBpbnF1aXJpZXMsIG9yIHByb2Zlc3Npb25hbCBjb25uZWN0aW9ucy4nLFxuICAgICAgICBpbWFnZTogYCR7YmFzZVVybH0vb2ctY29udGFjdC5qcGdgLFxuICAgICAgICB0eXBlOiAnd2Vic2l0ZSdcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIG1ldGFkYXRhW3BhdGhdIHx8IG1ldGFkYXRhWycvJ107XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICA8U0VPIHsuLi5nZXRQYWdlTWV0YWRhdGEoKX0gLz5cbiAgICAgIDxOYXZCYXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgICAgPEZpeGVkQm90dG9tQmFyIC8+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiVGhlbWVQcm92aWRlciIsIkNzc0Jhc2VsaW5lIiwidGhlbWUiLCJOYXZCYXIiLCJGb290ZXIiLCJGaXhlZEJvdHRvbUJhciIsIlNFTyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiZm9yRWFjaCIsInJvdXRlIiwicHJlZmV0Y2giLCJnZXRQYWdlTWV0YWRhdGEiLCJwYXRoIiwicGF0aG5hbWUiLCJiYXNlVXJsIiwibWV0YWRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0eXBlIiwibWFpbiIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_document.jsx":
/*!*****************************!*\
  !*** ./pages/_document.jsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"(pages-dir-node)/./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\n/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ \"(pages-dir-node)/./styles/theme.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles_theme__WEBPACK_IMPORTED_MODULE_4__]);\n_styles_theme__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 12,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"apple-touch-icon\",\n                            sizes: \"180x180\",\n                            href: \"/apple-touch-icon.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            type: \"image/png\",\n                            sizes: \"32x32\",\n                            href: \"/favicon-32x32.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            type: \"image/png\",\n                            sizes: \"16x16\",\n                            href: \"/favicon-16x16.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"manifest\",\n                            href: \"/site.webmanifest\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"preconnect\",\n                            href: \"https://fonts.googleapis.com\",\n                            crossOrigin: \"anonymous\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"preconnect\",\n                            href: \"https://fonts.gstatic.com\",\n                            crossOrigin: \"anonymous\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            href: \"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap\",\n                            rel: \"stylesheet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"theme-color\",\n                            content: _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].palette.primary.main\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            httpEquiv: \"X-UA-Compatible\",\n                            content: \"IE=edge\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"format-detection\",\n                            content: \"telephone=no\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"apple-mobile-web-app-capable\",\n                            content: \"yes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"apple-mobile-web-app-status-bar-style\",\n                            content: \"default\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"google-site-verification\",\n                            content: \"your-verification-code\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"author\",\n                            content: \"Your Name\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"keywords\",\n                            content: \"web development, portfolio, react, nextjs, django, full stack developer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"dns-prefetch\",\n                            href: \"https://fonts.googleapis.com\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"dns-prefetch\",\n                            href: \"https://fonts.gstatic.com\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this);\n    }\n}\n// `getInitialProps` belongs to `_document` (instead of `_app`),\n// it's compatible with server-side generation (SSG).\nMyDocument.getInitialProps = async (ctx)=>{\n    // Resolution order\n    //\n    // On the server:\n    // 1. app.getInitialProps\n    // 2. page.getInitialProps\n    // 3. document.getInitialProps\n    // 4. app.render\n    // 5. page.render\n    // 6. document.render\n    //\n    // On the server with error:\n    // 1. document.getInitialProps\n    // 2. app.render\n    // 3. page.render\n    // 4. document.render\n    //\n    // On the client\n    // 1. app.getInitialProps\n    // 2. page.getInitialProps\n    // 3. app.render\n    // 4. page.render\n    // Render app and page and get the context of the page with collected side effects.\n    const sheets = new _mui_styles__WEBPACK_IMPORTED_MODULE_3__.ServerStyleSheets();\n    const originalRenderPage = ctx.renderPage;\n    ctx.renderPage = ()=>originalRenderPage({\n            enhanceApp: (App)=>(props)=>sheets.collect(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                        ...props\n                    }, void 0, false, {\n                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_document.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 54\n                    }, undefined))\n        });\n    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(ctx);\n    return {\n        ...initialProps,\n        // Styles fragment is rendered after the app and page rendering finish.\n        styles: [\n            ...react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(initialProps.styles),\n            sheets.getStyleElement()\n        ]\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19kb2N1bWVudC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDd0M7QUFDdkI7QUFDWjtBQUVyQixNQUFNUSxtQkFBbUJQLHNEQUFRQTtJQUM5Q1EsU0FBUztRQUNQLHFCQUNFLDhEQUFDUCwrQ0FBSUE7WUFBQ1EsTUFBSzs7OEJBQ1QsOERBQUNQLCtDQUFJQTs7c0NBRUgsOERBQUNROzRCQUFLQyxLQUFJOzRCQUFPQyxNQUFLOzs7Ozs7c0NBQ3RCLDhEQUFDRjs0QkFBS0MsS0FBSTs0QkFBbUJFLE9BQU07NEJBQVVELE1BQUs7Ozs7OztzQ0FDbEQsOERBQUNGOzRCQUFLQyxLQUFJOzRCQUFPRyxNQUFLOzRCQUFZRCxPQUFNOzRCQUFRRCxNQUFLOzs7Ozs7c0NBQ3JELDhEQUFDRjs0QkFBS0MsS0FBSTs0QkFBT0csTUFBSzs0QkFBWUQsT0FBTTs0QkFBUUQsTUFBSzs7Ozs7O3NDQUNyRCw4REFBQ0Y7NEJBQUtDLEtBQUk7NEJBQVdDLE1BQUs7Ozs7OztzQ0FHMUIsOERBQUNGOzRCQUFLQyxLQUFJOzRCQUFhQyxNQUFLOzRCQUErQkcsYUFBWTs7Ozs7O3NDQUN2RSw4REFBQ0w7NEJBQUtDLEtBQUk7NEJBQWFDLE1BQUs7NEJBQTRCRyxhQUFZOzs7Ozs7c0NBQ3BFLDhEQUFDTDs0QkFDQ0UsTUFBSzs0QkFDTEQsS0FBSTs7Ozs7O3NDQUlOLDhEQUFDSzs0QkFBS0MsTUFBSzs0QkFBY0MsU0FBU1osNkRBQWEsQ0FBQ2MsT0FBTyxDQUFDQyxJQUFJOzs7Ozs7c0NBRzVELDhEQUFDTDs0QkFBS00sV0FBVTs0QkFBa0JKLFNBQVE7Ozs7OztzQ0FDMUMsOERBQUNGOzRCQUFLQyxNQUFLOzRCQUFtQkMsU0FBUTs7Ozs7O3NDQUN0Qyw4REFBQ0Y7NEJBQUtDLE1BQUs7NEJBQStCQyxTQUFROzs7Ozs7c0NBQ2xELDhEQUFDRjs0QkFBS0MsTUFBSzs0QkFBd0NDLFNBQVE7Ozs7OztzQ0FHM0QsOERBQUNGOzRCQUFLQyxNQUFLOzRCQUEyQkMsU0FBUTs7Ozs7O3NDQUc5Qyw4REFBQ0Y7NEJBQUtDLE1BQUs7NEJBQVNDLFNBQVE7Ozs7OztzQ0FDNUIsOERBQUNGOzRCQUFLQyxNQUFLOzRCQUFXQyxTQUFROzs7Ozs7c0NBRzlCLDhEQUFDUjs0QkFBS0MsS0FBSTs0QkFBZUMsTUFBSzs7Ozs7O3NDQUM5Qiw4REFBQ0Y7NEJBQUtDLEtBQUk7NEJBQWVDLE1BQUs7Ozs7Ozs7Ozs7Ozs4QkFFaEMsOERBQUNXOztzQ0FDQyw4REFBQ3BCLCtDQUFJQTs7Ozs7c0NBQ0wsOERBQUNDLHFEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJbkI7QUFDRjtBQUVBLGdFQUFnRTtBQUNoRSxxREFBcUQ7QUFDckRHLFdBQVdpQixlQUFlLEdBQUcsT0FBT0M7SUFDbEMsbUJBQW1CO0lBQ25CLEVBQUU7SUFDRixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsRUFBRTtJQUNGLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsRUFBRTtJQUNGLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFFakIsbUZBQW1GO0lBQ25GLE1BQU1DLFNBQVMsSUFBSXJCLDBEQUFpQkE7SUFDcEMsTUFBTXNCLHFCQUFxQkYsSUFBSUcsVUFBVTtJQUV6Q0gsSUFBSUcsVUFBVSxHQUFHLElBQ2ZELG1CQUFtQjtZQUNqQkUsWUFBWSxDQUFDQyxNQUFRLENBQUNDLFFBQVVMLE9BQU9NLE9BQU8sZUFBQyw4REFBQ0Y7d0JBQUssR0FBR0MsS0FBSzs7Ozs7O1FBQy9EO0lBRUYsTUFBTUUsZUFBZSxNQUFNakMsb0VBQXdCLENBQUN5QjtJQUVwRCxPQUFPO1FBQ0wsR0FBR1EsWUFBWTtRQUNmLHVFQUF1RTtRQUN2RUMsUUFBUTtlQUFJbkMsMkNBQWMsQ0FBQ3FDLE9BQU8sQ0FBQ0gsYUFBYUMsTUFBTTtZQUFHUixPQUFPVyxlQUFlO1NBQUc7SUFDcEY7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2FtaW4vRGVza3RvcC9NeVByb2plY3RzL3Nob3djYXNlLXdlYnNpdGUvZnJvbnRlbmQvcGFnZXMvX2RvY3VtZW50LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldHMgfSBmcm9tICdAbXVpL3N0eWxlcyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgey8qIEZhdmljb24gKi99XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiL2Zhdmljb24tMzJ4MzIucG5nXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiL2Zhdmljb24tMTZ4MTYucG5nXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIEZvbnRzIHdpdGggcHJlY29ubmVjdCBmb3IgcGVyZm9ybWFuY2UgKi99XG4gICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIFBXQSBwcmltYXJ5IGNvbG9yICovfVxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9e3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSAvPlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBTZWN1cml0eSBoZWFkZXJzICovfVxuICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZm9ybWF0LWRldGVjdGlvblwiIGNvbnRlbnQ9XCJ0ZWxlcGhvbmU9bm9cIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXItc3R5bGVcIiBjb250ZW50PVwiZGVmYXVsdFwiIC8+XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIFZlcmlmaWNhdGlvbiB0YWdzICovfVxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PVwieW91ci12ZXJpZmljYXRpb24tY29kZVwiIC8+XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIEFkZGl0aW9uYWwgbWV0YSB0YWdzICovfVxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiWW91ciBOYW1lXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwid2ViIGRldmVsb3BtZW50LCBwb3J0Zm9saW8sIHJlYWN0LCBuZXh0anMsIGRqYW5nbywgZnVsbCBzdGFjayBkZXZlbG9wZXJcIiAvPlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBQZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gKi99XG4gICAgICAgICAgPGxpbmsgcmVsPVwiZG5zLXByZWZldGNoXCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImRucy1wcmVmZXRjaFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApO1xuICB9XG59XG5cbi8vIGBnZXRJbml0aWFsUHJvcHNgIGJlbG9uZ3MgdG8gYF9kb2N1bWVudGAgKGluc3RlYWQgb2YgYF9hcHBgKSxcbi8vIGl0J3MgY29tcGF0aWJsZSB3aXRoIHNlcnZlci1zaWRlIGdlbmVyYXRpb24gKFNTRykuXG5NeURvY3VtZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgLy8gUmVzb2x1dGlvbiBvcmRlclxuICAvL1xuICAvLyBPbiB0aGUgc2VydmVyOlxuICAvLyAxLiBhcHAuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIDIuIHBhZ2UuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIDMuIGRvY3VtZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyA0LiBhcHAucmVuZGVyXG4gIC8vIDUuIHBhZ2UucmVuZGVyXG4gIC8vIDYuIGRvY3VtZW50LnJlbmRlclxuICAvL1xuICAvLyBPbiB0aGUgc2VydmVyIHdpdGggZXJyb3I6XG4gIC8vIDEuIGRvY3VtZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyAyLiBhcHAucmVuZGVyXG4gIC8vIDMuIHBhZ2UucmVuZGVyXG4gIC8vIDQuIGRvY3VtZW50LnJlbmRlclxuICAvL1xuICAvLyBPbiB0aGUgY2xpZW50XG4gIC8vIDEuIGFwcC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gMi4gcGFnZS5nZXRJbml0aWFsUHJvcHNcbiAgLy8gMy4gYXBwLnJlbmRlclxuICAvLyA0LiBwYWdlLnJlbmRlclxuXG4gIC8vIFJlbmRlciBhcHAgYW5kIHBhZ2UgYW5kIGdldCB0aGUgY29udGV4dCBvZiB0aGUgcGFnZSB3aXRoIGNvbGxlY3RlZCBzaWRlIGVmZmVjdHMuXG4gIGNvbnN0IHNoZWV0cyA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0cygpO1xuICBjb25zdCBvcmlnaW5hbFJlbmRlclBhZ2UgPSBjdHgucmVuZGVyUGFnZTtcblxuICBjdHgucmVuZGVyUGFnZSA9ICgpID0+XG4gICAgb3JpZ2luYWxSZW5kZXJQYWdlKHtcbiAgICAgIGVuaGFuY2VBcHA6IChBcHApID0+IChwcm9wcykgPT4gc2hlZXRzLmNvbGxlY3QoPEFwcCB7Li4ucHJvcHN9IC8+KSxcbiAgICB9KTtcblxuICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcblxuICByZXR1cm4ge1xuICAgIC4uLmluaXRpYWxQcm9wcyxcbiAgICAvLyBTdHlsZXMgZnJhZ21lbnQgaXMgcmVuZGVyZWQgYWZ0ZXIgdGhlIGFwcCBhbmQgcGFnZSByZW5kZXJpbmcgZmluaXNoLlxuICAgIHN0eWxlczogWy4uLlJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoaW5pdGlhbFByb3BzLnN0eWxlcyksIHNoZWV0cy5nZXRTdHlsZUVsZW1lbnQoKV0sXG4gIH07XG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkRvY3VtZW50IiwiSHRtbCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsIlNlcnZlclN0eWxlU2hlZXRzIiwidGhlbWUiLCJNeURvY3VtZW50IiwicmVuZGVyIiwibGFuZyIsImxpbmsiLCJyZWwiLCJocmVmIiwic2l6ZXMiLCJ0eXBlIiwiY3Jvc3NPcmlnaW4iLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJodHRwRXF1aXYiLCJib2R5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwic2hlZXRzIiwib3JpZ2luYWxSZW5kZXJQYWdlIiwicmVuZGVyUGFnZSIsImVuaGFuY2VBcHAiLCJBcHAiLCJwcm9wcyIsImNvbGxlY3QiLCJpbml0aWFsUHJvcHMiLCJzdHlsZXMiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJnZXRTdHlsZUVsZW1lbnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_document.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/resume.jsx":
/*!**************************!*\
  !*** ./pages/resume.jsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Resume)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Button */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Button/index.js\");\n/* harmony import */ var _mui_icons_material_Download__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Download */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Download.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_Button__WEBPACK_IMPORTED_MODULE_1__, _mui_icons_material_Download__WEBPACK_IMPORTED_MODULE_2__]);\n([_mui_material_Button__WEBPACK_IMPORTED_MODULE_1__, _mui_icons_material_Download__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nfunction Resume() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"resume-page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"My Resume\"\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/resume.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"resume-box\",\n                style: {\n                    textAlign: 'center',\n                    marginTop: '2rem'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    variant: \"contained\",\n                    startIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Download__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/resume.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 22\n                    }, void 0),\n                    href: \"/resume.pdf\",\n                    target: \"_blank\",\n                    sx: {\n                        backgroundColor: 'var(--color-accent)',\n                        color: 'var(--color-bg)',\n                        padding: '0.8rem 2rem',\n                        fontSize: '1.1rem',\n                        fontWeight: 600,\n                        '&:hover': {\n                            backgroundColor: '#e0b541'\n                        }\n                    },\n                    children: \"Download PDF\"\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/resume.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/resume.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/resume.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL3Jlc3VtZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzBDO0FBQ2M7QUFFekMsU0FBU0U7SUFDdEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDRjtnQkFBSUMsV0FBVTtnQkFBYUUsT0FBTztvQkFBRUMsV0FBVztvQkFBVUMsV0FBVztnQkFBTzswQkFDMUUsNEVBQUNSLDREQUFNQTtvQkFDTFMsU0FBUTtvQkFDUkMseUJBQVcsOERBQUNULG9FQUFZQTs7Ozs7b0JBQ3hCVSxNQUFLO29CQUNMQyxRQUFPO29CQUNQQyxJQUFJO3dCQUNGQyxpQkFBaUI7d0JBQ2pCQyxPQUFPO3dCQUNQQyxTQUFTO3dCQUNUQyxVQUFVO3dCQUNWQyxZQUFZO3dCQUNaLFdBQVc7NEJBQ1RKLGlCQUFpQjt3QkFDbkI7b0JBQ0Y7OEJBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluL0Rlc2t0b3AvTXlQcm9qZWN0cy9zaG93Y2FzZS13ZWJzaXRlL2Zyb250ZW5kL3BhZ2VzL3Jlc3VtZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBEb3dubG9hZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Eb3dubG9hZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VtZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1wYWdlXCI+XG4gICAgICA8aDE+TXkgUmVzdW1lPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLWJveFwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpblRvcDogJzJyZW0nIH19PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgc3RhcnRJY29uPXs8RG93bmxvYWRJY29uIC8+fVxuICAgICAgICAgIGhyZWY9XCIvcmVzdW1lLnBkZlwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tY29sb3ItYWNjZW50KScsXG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWNvbG9yLWJnKScsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMC44cmVtIDJyZW0nLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxLjFyZW0nLFxuICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlMGI1NDEnLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBEb3dubG9hZCBQREZcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJEb3dubG9hZEljb24iLCJSZXN1bWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInN0eWxlIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwidmFyaWFudCIsInN0YXJ0SWNvbiIsImhyZWYiLCJ0YXJnZXQiLCJzeCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/resume.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/esm/styles/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__]);\n_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    breakpoints: {\n        values: {\n            xs: 0,\n            sm: 600,\n            md: 960,\n            lg: 1280,\n            xl: 1920\n        }\n    },\n    palette: {\n        primary: {\n            main: '#1976d2',\n            light: '#42a5f5',\n            dark: '#1565c0',\n            contrastText: '#ffffff'\n        },\n        secondary: {\n            main: '#9c27b0',\n            light: '#ba68c8',\n            dark: '#7b1fa2',\n            contrastText: '#ffffff'\n        },\n        background: {\n            default: '#f5f5f5',\n            paper: '#ffffff'\n        },\n        text: {\n            primary: '#333333',\n            secondary: '#666666'\n        }\n    },\n    typography: {\n        fontFamily: '\"Inter\", \"Roboto\", \"Helvetica\", \"Arial\", sans-serif',\n        h1: {\n            fontSize: 'clamp(2rem, 5vw, 3rem)',\n            fontWeight: 700,\n            lineHeight: 1.2,\n            letterSpacing: '-0.02em',\n            marginBottom: 'clamp(1rem, 3vw, 1.5rem)'\n        },\n        h2: {\n            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',\n            fontWeight: 600,\n            lineHeight: 1.3,\n            letterSpacing: '-0.01em',\n            marginBottom: 'clamp(0.75rem, 2.5vw, 1.25rem)'\n        },\n        h3: {\n            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',\n            fontWeight: 600,\n            lineHeight: 1.4,\n            marginBottom: 'clamp(0.5rem, 2vw, 1rem)'\n        },\n        body1: {\n            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',\n            lineHeight: 1.6,\n            marginBottom: 'clamp(0.75rem, 2vw, 1rem)'\n        },\n        body2: {\n            fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',\n            lineHeight: 1.5,\n            marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)'\n        },\n        button: {\n            fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',\n            fontWeight: 600,\n            letterSpacing: '0.02em'\n        }\n    },\n    spacing: (factor)=>`${0.5 * factor}rem`,\n    shape: {\n        borderRadius: 8\n    },\n    components: {\n        MuiContainer: {\n            styleOverrides: {\n                root: {\n                    paddingLeft: 'clamp(1rem, 5vw, 3rem)',\n                    paddingRight: 'clamp(1rem, 5vw, 3rem)',\n                    '@media (max-width: 600px)': {\n                        paddingLeft: '1rem',\n                        paddingRight: '1rem'\n                    }\n                }\n            }\n        },\n        MuiButton: {\n            styleOverrides: {\n                root: {\n                    textTransform: 'none',\n                    fontWeight: 600,\n                    padding: '0.5rem 1.25rem',\n                    '@media (max-width: 600px)': {\n                        padding: '0.625rem 1rem',\n                        width: '100%'\n                    }\n                },\n                containedPrimary: {\n                    boxShadow: '0 2px 4px rgba(25, 118, 210, 0.25)',\n                    '&:hover': {\n                        boxShadow: '0 4px 8px rgba(25, 118, 210, 0.35)'\n                    }\n                }\n            }\n        },\n        MuiCard: {\n            styleOverrides: {\n                root: {\n                    borderRadius: 12,\n                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',\n                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',\n                    '@media (max-width: 600px)': {\n                        borderRadius: 8\n                    },\n                    '&:hover': {\n                        transform: 'translateY(-4px)',\n                        boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)'\n                    }\n                }\n            }\n        },\n        MuiTextField: {\n            styleOverrides: {\n                root: {\n                    '@media (max-width: 600px)': {\n                        width: '100%'\n                    }\n                }\n            }\n        },\n        MuiDialog: {\n            styleOverrides: {\n                paper: {\n                    '@media (max-width: 600px)': {\n                        margin: '1rem',\n                        width: 'calc(100% - 2rem)',\n                        maxHeight: 'calc(100% - 2rem)'\n                    }\n                }\n            }\n        },\n        MuiIconButton: {\n            styleOverrides: {\n                root: {\n                    '@media (max-width: 600px)': {\n                        padding: 8\n                    }\n                }\n            }\n        },\n        MuiList: {\n            styleOverrides: {\n                root: {\n                    '@media (max-width: 600px)': {\n                        paddingTop: 0,\n                        paddingBottom: 0\n                    }\n                }\n            }\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0Rlc2t0b3AvTXlQcm9qZWN0cy9zaG93Y2FzZS13ZWJzaXRlL2Zyb250ZW5kL3N0eWxlcy90aGVtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgdmFsdWVzOiB7XG4gICAgICB4czogMCwgICAgICAvLyBNb2JpbGVcbiAgICAgIHNtOiA2MDAsICAgIC8vIFRhYmxldFxuICAgICAgbWQ6IDk2MCwgICAgLy8gU21hbGwgbGFwdG9wXG4gICAgICBsZzogMTI4MCwgICAvLyBEZXNrdG9wXG4gICAgICB4bDogMTkyMCwgICAvLyBMYXJnZSBzY3JlZW5zXG4gICAgfSxcbiAgfSxcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjMTk3NmQyJyxcbiAgICAgIGxpZ2h0OiAnIzQyYTVmNScsXG4gICAgICBkYXJrOiAnIzE1NjVjMCcsXG4gICAgICBjb250cmFzdFRleHQ6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyM5YzI3YjAnLFxuICAgICAgbGlnaHQ6ICcjYmE2OGM4JyxcbiAgICAgIGRhcms6ICcjN2IxZmEyJyxcbiAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgZGVmYXVsdDogJyNmNWY1ZjUnLFxuICAgICAgcGFwZXI6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHRleHQ6IHtcbiAgICAgIHByaW1hcnk6ICcjMzMzMzMzJyxcbiAgICAgIHNlY29uZGFyeTogJyM2NjY2NjYnLFxuICAgIH0sXG4gIH0sXG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiAnXCJJbnRlclwiLCBcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWYnLFxuICAgIGgxOiB7XG4gICAgICBmb250U2l6ZTogJ2NsYW1wKDJyZW0sIDV2dywgM3JlbSknLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgbGluZUhlaWdodDogMS4yLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjAyZW0nLFxuICAgICAgbWFyZ2luQm90dG9tOiAnY2xhbXAoMXJlbSwgM3Z3LCAxLjVyZW0pJyxcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICBmb250U2l6ZTogJ2NsYW1wKDEuNXJlbSwgNHZ3LCAyLjI1cmVtKScsXG4gICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjMsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMDFlbScsXG4gICAgICBtYXJnaW5Cb3R0b206ICdjbGFtcCgwLjc1cmVtLCAyLjV2dywgMS4yNXJlbSknLFxuICAgIH0sXG4gICAgaDM6IHtcbiAgICAgIGZvbnRTaXplOiAnY2xhbXAoMS4yNXJlbSwgM3Z3LCAxLjc1cmVtKScsXG4gICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXG4gICAgICBtYXJnaW5Cb3R0b206ICdjbGFtcCgwLjVyZW0sIDJ2dywgMXJlbSknLFxuICAgIH0sXG4gICAgYm9keTE6IHtcbiAgICAgIGZvbnRTaXplOiAnY2xhbXAoMXJlbSwgMS41dncsIDEuMTI1cmVtKScsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjYsXG4gICAgICBtYXJnaW5Cb3R0b206ICdjbGFtcCgwLjc1cmVtLCAydncsIDFyZW0pJyxcbiAgICB9LFxuICAgIGJvZHkyOiB7XG4gICAgICBmb250U2l6ZTogJ2NsYW1wKDAuODc1cmVtLCAxLjJ2dywgMXJlbSknLFxuICAgICAgbGluZUhlaWdodDogMS41LFxuICAgICAgbWFyZ2luQm90dG9tOiAnY2xhbXAoMC41cmVtLCAxLjV2dywgMC43NXJlbSknLFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBmb250U2l6ZTogJ2NsYW1wKDAuODc1cmVtLCAxLjJ2dywgMXJlbSknLFxuICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogJzAuMDJlbScsXG4gICAgfSxcbiAgfSxcbiAgc3BhY2luZzogKGZhY3RvcikgPT4gYCR7MC41ICogZmFjdG9yfXJlbWAsXG4gIHNoYXBlOiB7XG4gICAgYm9yZGVyUmFkaXVzOiA4LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgTXVpQ29udGFpbmVyOiB7XG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgcGFkZGluZ0xlZnQ6ICdjbGFtcCgxcmVtLCA1dncsIDNyZW0pJyxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICdjbGFtcCgxcmVtLCA1dncsIDNyZW0pJyxcbiAgICAgICAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSc6IHtcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMXJlbScsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxcmVtJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUJ1dHRvbjoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgcGFkZGluZzogJzAuNXJlbSAxLjI1cmVtJyxcbiAgICAgICAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSc6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6ICcwLjYyNXJlbSAxcmVtJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbmVkUHJpbWFyeToge1xuICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDRweCByZ2JhKDI1LCAxMTgsIDIxMCwgMC4yNSknLFxuICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgYm94U2hhZG93OiAnMCA0cHggOHB4IHJnYmEoMjUsIDExOCwgMjEwLCAwLjM1KScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlDYXJkOiB7XG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMixcbiAgICAgICAgICBib3hTaGFkb3c6ICcwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4ycyBlYXNlLWluLW91dCcsXG4gICAgICAgICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA2MDBweCknOiB7XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTRweCknLFxuICAgICAgICAgICAgYm94U2hhZG93OiAnMCA4cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aVRleHRGaWVsZDoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgICdAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpJzoge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aURpYWxvZzoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcGFwZXI6IHtcbiAgICAgICAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSc6IHtcbiAgICAgICAgICAgIG1hcmdpbjogJzFyZW0nLFxuICAgICAgICAgICAgd2lkdGg6ICdjYWxjKDEwMCUgLSAycmVtKScsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6ICdjYWxjKDEwMCUgLSAycmVtKScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlJY29uQnV0dG9uOiB7XG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA2MDBweCknOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpTGlzdDoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgICdAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpJzoge1xuICAgICAgICAgICAgcGFkZGluZ1RvcDogMCxcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTsiXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwidmFsdWVzIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImxpZ2h0IiwiZGFyayIsImNvbnRyYXN0VGV4dCIsInNlY29uZGFyeSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwicGFwZXIiLCJ0ZXh0IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJoMSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwibWFyZ2luQm90dG9tIiwiaDIiLCJoMyIsImJvZHkxIiwiYm9keTIiLCJidXR0b24iLCJzcGFjaW5nIiwiZmFjdG9yIiwic2hhcGUiLCJib3JkZXJSYWRpdXMiLCJjb21wb25lbnRzIiwiTXVpQ29udGFpbmVyIiwic3R5bGVPdmVycmlkZXMiLCJyb290IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJNdWlCdXR0b24iLCJ0ZXh0VHJhbnNmb3JtIiwicGFkZGluZyIsIndpZHRoIiwiY29udGFpbmVkUHJpbWFyeSIsImJveFNoYWRvdyIsIk11aUNhcmQiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwiTXVpVGV4dEZpZWxkIiwiTXVpRGlhbG9nIiwibWFyZ2luIiwibWF4SGVpZ2h0IiwiTXVpSWNvbkJ1dHRvbiIsIk11aUxpc3QiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./styles/theme.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/variables.css":
/*!******************************!*\
  !*** ./styles/variables.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "../../../shared/lib/no-fallback-error.external":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/no-fallback-error.external.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ "@mui/styles":
/*!******************************!*\
  !*** external "@mui/styles" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/styles");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system");;

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/DefaultPropsProvider");;

/***/ }),

/***/ "@mui/system/InitColorSchemeScript":
/*!****************************************************!*\
  !*** external "@mui/system/InitColorSchemeScript" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/InitColorSchemeScript");;

/***/ }),

/***/ "@mui/system/RtlProvider":
/*!******************************************!*\
  !*** external "@mui/system/RtlProvider" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/RtlProvider");;

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/colorManipulator");;

/***/ }),

/***/ "@mui/system/createBreakpoints":
/*!************************************************!*\
  !*** external "@mui/system/createBreakpoints" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/createBreakpoints");;

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/createStyled");;

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/createTheme");;

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/cssVars");;

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/spacing");;

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/styleFunctionSx");;

/***/ }),

/***/ "@mui/system/useMediaQuery":
/*!********************************************!*\
  !*** external "@mui/system/useMediaQuery" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/useMediaQuery");;

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/system/useThemeProps");;

/***/ }),

/***/ "@mui/utils/ClassNameGenerator":
/*!************************************************!*\
  !*** external "@mui/utils/ClassNameGenerator" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/ClassNameGenerator");;

/***/ }),

/***/ "@mui/utils/HTMLElementType":
/*!*********************************************!*\
  !*** external "@mui/utils/HTMLElementType" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/HTMLElementType");;

/***/ }),

/***/ "@mui/utils/appendOwnerState":
/*!**********************************************!*\
  !*** external "@mui/utils/appendOwnerState" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/appendOwnerState");;

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/capitalize");;

/***/ }),

/***/ "@mui/utils/chainPropTypes":
/*!********************************************!*\
  !*** external "@mui/utils/chainPropTypes" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/chainPropTypes");;

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/composeClasses");;

/***/ }),

/***/ "@mui/utils/createChainedFunction":
/*!***************************************************!*\
  !*** external "@mui/utils/createChainedFunction" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/createChainedFunction");;

/***/ }),

/***/ "@mui/utils/debounce":
/*!**************************************!*\
  !*** external "@mui/utils/debounce" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/debounce");;

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/deepmerge");;

/***/ }),

/***/ "@mui/utils/deprecatedPropType":
/*!************************************************!*\
  !*** external "@mui/utils/deprecatedPropType" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/deprecatedPropType");;

/***/ }),

/***/ "@mui/utils/elementAcceptingRef":
/*!*************************************************!*\
  !*** external "@mui/utils/elementAcceptingRef" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/elementAcceptingRef");;

/***/ }),

/***/ "@mui/utils/elementTypeAcceptingRef":
/*!*****************************************************!*\
  !*** external "@mui/utils/elementTypeAcceptingRef" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/elementTypeAcceptingRef");;

/***/ }),

/***/ "@mui/utils/exactProp":
/*!***************************************!*\
  !*** external "@mui/utils/exactProp" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/exactProp");;

/***/ }),

/***/ "@mui/utils/extractEventHandlers":
/*!**************************************************!*\
  !*** external "@mui/utils/extractEventHandlers" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/extractEventHandlers");;

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/formatMuiErrorMessage");;

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/generateUtilityClass");;

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/generateUtilityClasses");;

/***/ }),

/***/ "@mui/utils/getActiveElement":
/*!**********************************************!*\
  !*** external "@mui/utils/getActiveElement" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/getActiveElement");;

/***/ }),

/***/ "@mui/utils/getReactElementRef":
/*!************************************************!*\
  !*** external "@mui/utils/getReactElementRef" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/getReactElementRef");;

/***/ }),

/***/ "@mui/utils/getScrollbarSize":
/*!**********************************************!*\
  !*** external "@mui/utils/getScrollbarSize" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/getScrollbarSize");;

/***/ }),

/***/ "@mui/utils/integerPropType":
/*!*********************************************!*\
  !*** external "@mui/utils/integerPropType" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/integerPropType");;

/***/ }),

/***/ "@mui/utils/isFocusVisible":
/*!********************************************!*\
  !*** external "@mui/utils/isFocusVisible" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/isFocusVisible");;

/***/ }),

/***/ "@mui/utils/isHostComponent":
/*!*********************************************!*\
  !*** external "@mui/utils/isHostComponent" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/isHostComponent");;

/***/ }),

/***/ "@mui/utils/isMuiElement":
/*!******************************************!*\
  !*** external "@mui/utils/isMuiElement" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/isMuiElement");;

/***/ }),

/***/ "@mui/utils/mergeSlotProps":
/*!********************************************!*\
  !*** external "@mui/utils/mergeSlotProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/mergeSlotProps");;

/***/ }),

/***/ "@mui/utils/ownerDocument":
/*!*******************************************!*\
  !*** external "@mui/utils/ownerDocument" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/ownerDocument");;

/***/ }),

/***/ "@mui/utils/ownerWindow":
/*!*****************************************!*\
  !*** external "@mui/utils/ownerWindow" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/ownerWindow");;

/***/ }),

/***/ "@mui/utils/refType":
/*!*************************************!*\
  !*** external "@mui/utils/refType" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/refType");;

/***/ }),

/***/ "@mui/utils/requirePropFactory":
/*!************************************************!*\
  !*** external "@mui/utils/requirePropFactory" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/requirePropFactory");;

/***/ }),

/***/ "@mui/utils/resolveComponentProps":
/*!***************************************************!*\
  !*** external "@mui/utils/resolveComponentProps" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/resolveComponentProps");;

/***/ }),

/***/ "@mui/utils/resolveProps":
/*!******************************************!*\
  !*** external "@mui/utils/resolveProps" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/resolveProps");;

/***/ }),

/***/ "@mui/utils/setRef":
/*!************************************!*\
  !*** external "@mui/utils/setRef" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/setRef");;

/***/ }),

/***/ "@mui/utils/unsupportedProp":
/*!*********************************************!*\
  !*** external "@mui/utils/unsupportedProp" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/unsupportedProp");;

/***/ }),

/***/ "@mui/utils/useControlled":
/*!*******************************************!*\
  !*** external "@mui/utils/useControlled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useControlled");;

/***/ }),

/***/ "@mui/utils/useEnhancedEffect":
/*!***********************************************!*\
  !*** external "@mui/utils/useEnhancedEffect" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useEnhancedEffect");;

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useEventCallback");;

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useForkRef");;

/***/ }),

/***/ "@mui/utils/useId":
/*!***********************************!*\
  !*** external "@mui/utils/useId" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useId");;

/***/ }),

/***/ "@mui/utils/useLazyRef":
/*!****************************************!*\
  !*** external "@mui/utils/useLazyRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useLazyRef");;

/***/ }),

/***/ "@mui/utils/useTimeout":
/*!****************************************!*\
  !*** external "@mui/utils/useTimeout" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useTimeout");;

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = import("clsx");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

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

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@mui","vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fresume&preferredRegion=&absolutePagePath=.%2Fpages%2Fresume.jsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();