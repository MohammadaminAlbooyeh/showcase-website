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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavBar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/AppBar */ \"(pages-dir-node)/./node_modules/@mui/material/esm/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Toolbar */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Toolbar/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/IconButton */ \"(pages-dir-node)/./node_modules/@mui/material/esm/IconButton/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Typography/index.js\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Menu */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Menu/index.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Menu.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Container/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Button */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Button/index.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/MenuItem */ \"(pages-dir-node)/./node_modules/@mui/material/esm/MenuItem/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__, _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__, _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__, _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_10__, _mui_material_Menu__WEBPACK_IMPORTED_MODULE_11__, _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__]);\n([_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__, _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__, _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__, _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_10__, _mui_material_Menu__WEBPACK_IMPORTED_MODULE_11__, _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst pages = [\n    {\n        label: 'Home',\n        href: '/'\n    },\n    {\n        label: 'Portfolio',\n        href: '/portfolio'\n    },\n    {\n        label: 'Projects',\n        href: '/projects'\n    },\n    {\n        label: 'Resume',\n        href: '/resume'\n    },\n    {\n        label: 'Contact',\n        href: '/contactus'\n    }\n];\nfunction NavBar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [anchorElNav, setAnchorElNav] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const handleOpenNavMenu = (event)=>{\n        setAnchorElNav(event.currentTarget);\n    };\n    const handleCloseNavMenu = ()=>{\n        setAnchorElNav(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        position: \"static\",\n        color: \"default\",\n        elevation: 2,\n        sx: {\n            mb: 2,\n            background: 'var(--color-nav-bg)'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            maxWidth: \"lg\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                disableGutters: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        variant: \"h6\",\n                        noWrap: true,\n                        component: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                        href: \"/\",\n                        sx: {\n                            mr: 2,\n                            display: {\n                                xs: 'none',\n                                md: 'flex'\n                            },\n                            color: 'var(--color-accent)',\n                            textDecoration: 'none',\n                            fontWeight: 700,\n                            letterSpacing: '.1rem'\n                        },\n                        children: \"Amin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        sx: {\n                            flexGrow: 1,\n                            display: {\n                                xs: 'flex',\n                                md: 'none'\n                            }\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                size: \"large\",\n                                \"aria-label\": \"menu\",\n                                \"aria-controls\": \"menu-appbar\",\n                                \"aria-haspopup\": \"true\",\n                                onClick: handleOpenNavMenu,\n                                color: \"inherit\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                id: \"menu-appbar\",\n                                anchorEl: anchorElNav,\n                                anchorOrigin: {\n                                    vertical: 'bottom',\n                                    horizontal: 'left'\n                                },\n                                keepMounted: true,\n                                transformOrigin: {\n                                    vertical: 'top',\n                                    horizontal: 'left'\n                                },\n                                open: Boolean(anchorElNav),\n                                onClose: handleCloseNavMenu,\n                                sx: {\n                                    display: {\n                                        xs: 'block',\n                                        md: 'none'\n                                    }\n                                },\n                                children: pages.map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                        onClick: handleCloseNavMenu,\n                                        selected: router.pathname === page.href,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            component: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                            href: page.href,\n                                            sx: {\n                                                textDecoration: 'none',\n                                                color: 'inherit',\n                                                width: '100%'\n                                            },\n                                            children: page.label\n                                        }, void 0, false, {\n                                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, page.href, false, {\n                                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        variant: \"h6\",\n                        noWrap: true,\n                        component: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                        href: \"/\",\n                        sx: {\n                            mr: 2,\n                            display: {\n                                xs: 'flex',\n                                md: 'none'\n                            },\n                            color: 'var(--color-accent)',\n                            textDecoration: 'none',\n                            fontWeight: 700,\n                            letterSpacing: '.1rem'\n                        },\n                        children: \"Amin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        sx: {\n                            flexGrow: 1,\n                            display: {\n                                xs: 'none',\n                                md: 'flex'\n                            },\n                            justifyContent: 'flex-end'\n                        },\n                        children: pages.map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                onClick: ()=>{\n                                    handleCloseNavMenu();\n                                    if (router.pathname !== page.href) {\n                                        router.push(page.href);\n                                    }\n                                },\n                                sx: {\n                                    my: 2,\n                                    color: router.pathname === page.href ? 'var(--color-accent)' : 'var(--color-primary)',\n                                    display: 'block',\n                                    fontWeight: router.pathname === page.href ? 700 : 400,\n                                    backgroundColor: router.pathname === page.href ? 'rgba(249,200,70,0.08)' : 'transparent',\n                                    borderRadius: 2,\n                                    mx: 1,\n                                    transition: 'all 0.2s',\n                                    '&:hover': {\n                                        backgroundColor: 'var(--color-secondary)',\n                                        color: 'var(--color-bg)'\n                                    }\n                                },\n                                children: page.label\n                            }, page.href, false, {\n                                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                lineNumber: 109,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTmF2QmFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNXO0FBQ047QUFDUTtBQUNNO0FBQ0E7QUFDWjtBQUNVO0FBQ0E7QUFDTjtBQUNJO0FBQ2pCO0FBQ1c7QUFFeEMsTUFBTWEsUUFBUTtJQUNaO1FBQUVDLE9BQU87UUFBUUMsTUFBTTtJQUFJO0lBQzNCO1FBQUVELE9BQU87UUFBYUMsTUFBTTtJQUFhO0lBQ3pDO1FBQUVELE9BQU87UUFBWUMsTUFBTTtJQUFZO0lBQ3ZDO1FBQUVELE9BQU87UUFBVUMsTUFBTTtJQUFVO0lBQ25DO1FBQUVELE9BQU87UUFBV0MsTUFBTTtJQUFhO0NBQ3hDO0FBRWMsU0FBU0M7SUFDdEIsTUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHbkIsMkNBQWMsQ0FBQztJQUVyRCxNQUFNcUIsb0JBQW9CLENBQUNDO1FBQ3pCSCxlQUFlRyxNQUFNQyxhQUFhO0lBQ3BDO0lBRUEsTUFBTUMscUJBQXFCO1FBQ3pCTCxlQUFlO0lBQ2pCO0lBRUEscUJBQ0UsOERBQUNsQiw0REFBTUE7UUFBQ3dCLFVBQVM7UUFBU0MsT0FBTTtRQUFVQyxXQUFXO1FBQUdDLElBQUk7WUFBRUMsSUFBSTtZQUFHQyxZQUFZO1FBQXNCO2tCQUNyRyw0RUFBQ3RCLCtEQUFTQTtZQUFDdUIsVUFBUztzQkFDbEIsNEVBQUM1Qiw2REFBT0E7Z0JBQUM2QixjQUFjOztrQ0FFckIsOERBQUMzQixnRUFBVUE7d0JBQ1Q0QixTQUFRO3dCQUNSQyxNQUFNO3dCQUNOQyxXQUFXeEIsa0RBQUlBO3dCQUNmSSxNQUFLO3dCQUNMYSxJQUFJOzRCQUNGUSxJQUFJOzRCQUNKQyxTQUFTO2dDQUFFQyxJQUFJO2dDQUFRQyxJQUFJOzRCQUFPOzRCQUNsQ2IsT0FBTzs0QkFDUGMsZ0JBQWdCOzRCQUNoQkMsWUFBWTs0QkFDWkMsZUFBZTt3QkFDakI7a0NBQ0Q7Ozs7OztrQ0FLRCw4REFBQ3hDLHlEQUFHQTt3QkFBQzBCLElBQUk7NEJBQUVlLFVBQVU7NEJBQUdOLFNBQVM7Z0NBQUVDLElBQUk7Z0NBQVFDLElBQUk7NEJBQU87d0JBQUU7OzBDQUMxRCw4REFBQ25DLGdFQUFVQTtnQ0FDVHdDLE1BQUs7Z0NBQ0xDLGNBQVc7Z0NBQ1hDLGlCQUFjO2dDQUNkQyxpQkFBYztnQ0FDZEMsU0FBUzNCO2dDQUNUSyxPQUFNOzBDQUVOLDRFQUFDbkIsaUVBQVFBOzs7Ozs7Ozs7OzBDQUVYLDhEQUFDRCwyREFBSUE7Z0NBQ0gyQyxJQUFHO2dDQUNIQyxVQUFVaEM7Z0NBQ1ZpQyxjQUFjO29DQUFFQyxVQUFVO29DQUFVQyxZQUFZO2dDQUFPO2dDQUN2REMsV0FBVztnQ0FDWEMsaUJBQWlCO29DQUFFSCxVQUFVO29DQUFPQyxZQUFZO2dDQUFPO2dDQUN2REcsTUFBTUMsUUFBUXZDO2dDQUNkd0MsU0FBU2xDO2dDQUNUSSxJQUFJO29DQUFFUyxTQUFTO3dDQUFFQyxJQUFJO3dDQUFTQyxJQUFJO29DQUFPO2dDQUFFOzBDQUUxQzFCLE1BQU04QyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNsRCwrREFBUUE7d0NBQWlCc0MsU0FBU3hCO3dDQUFvQnFDLFVBQVU1QyxPQUFPNkMsUUFBUSxLQUFLRixLQUFLN0MsSUFBSTtrREFDNUYsNEVBQUNWLGdFQUFVQTs0Q0FBQzhCLFdBQVd4QixrREFBSUE7NENBQUVJLE1BQU02QyxLQUFLN0MsSUFBSTs0Q0FBRWEsSUFBSTtnREFBRVksZ0JBQWdCO2dEQUFRZCxPQUFPO2dEQUFXcUMsT0FBTzs0Q0FBTztzREFDekdILEtBQUs5QyxLQUFLOzs7Ozs7dUNBRkE4QyxLQUFLN0MsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FVOUIsOERBQUNWLGdFQUFVQTt3QkFDVDRCLFNBQVE7d0JBQ1JDLE1BQU07d0JBQ05DLFdBQVd4QixrREFBSUE7d0JBQ2ZJLE1BQUs7d0JBQ0xhLElBQUk7NEJBQ0ZRLElBQUk7NEJBQ0pDLFNBQVM7Z0NBQUVDLElBQUk7Z0NBQVFDLElBQUk7NEJBQU87NEJBQ2xDYixPQUFPOzRCQUNQYyxnQkFBZ0I7NEJBQ2hCQyxZQUFZOzRCQUNaQyxlQUFlO3dCQUNqQjtrQ0FDRDs7Ozs7O2tDQUdELDhEQUFDeEMseURBQUdBO3dCQUFDMEIsSUFBSTs0QkFBRWUsVUFBVTs0QkFBR04sU0FBUztnQ0FBRUMsSUFBSTtnQ0FBUUMsSUFBSTs0QkFBTzs0QkFBR3lCLGdCQUFnQjt3QkFBVztrQ0FDckZuRCxNQUFNOEMsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDbkQsNkRBQU1BO2dDQUVMdUMsU0FBUztvQ0FDUHhCO29DQUNBLElBQUlQLE9BQU82QyxRQUFRLEtBQUtGLEtBQUs3QyxJQUFJLEVBQUU7d0NBQ2pDRSxPQUFPZ0QsSUFBSSxDQUFDTCxLQUFLN0MsSUFBSTtvQ0FDdkI7Z0NBQ0Y7Z0NBQ0FhLElBQUk7b0NBQ0ZzQyxJQUFJO29DQUNKeEMsT0FBT1QsT0FBTzZDLFFBQVEsS0FBS0YsS0FBSzdDLElBQUksR0FBRyx3QkFBd0I7b0NBQy9Ec0IsU0FBUztvQ0FDVEksWUFBWXhCLE9BQU82QyxRQUFRLEtBQUtGLEtBQUs3QyxJQUFJLEdBQUcsTUFBTTtvQ0FDbERvRCxpQkFBaUJsRCxPQUFPNkMsUUFBUSxLQUFLRixLQUFLN0MsSUFBSSxHQUFHLDBCQUEwQjtvQ0FDM0VxRCxjQUFjO29DQUNkQyxJQUFJO29DQUNKQyxZQUFZO29DQUNaLFdBQVc7d0NBQ1RILGlCQUFpQjt3Q0FDakJ6QyxPQUFPO29DQUNUO2dDQUNGOzBDQUVDa0MsS0FBSzlDLEtBQUs7K0JBdEJOOEMsS0FBSzdDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEI5QiIsInNvdXJjZXMiOlsiL1VzZXJzL2FtaW4vRGVza3RvcC9NeVByb2plY3RzL3Nob3djYXNlLXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9OYXZCYXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCBNZW51IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudSc7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51SXRlbSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBwYWdlcyA9IFtcbiAgeyBsYWJlbDogJ0hvbWUnLCBocmVmOiAnLycgfSxcbiAgeyBsYWJlbDogJ1BvcnRmb2xpbycsIGhyZWY6ICcvcG9ydGZvbGlvJyB9LFxuICB7IGxhYmVsOiAnUHJvamVjdHMnLCBocmVmOiAnL3Byb2plY3RzJyB9LFxuICB7IGxhYmVsOiAnUmVzdW1lJywgaHJlZjogJy9yZXN1bWUnIH0sXG4gIHsgbGFiZWw6ICdDb250YWN0JywgaHJlZjogJy9jb250YWN0dXMnIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbYW5jaG9yRWxOYXYsIHNldEFuY2hvckVsTmF2XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZU9wZW5OYXZNZW51ID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0QW5jaG9yRWxOYXYoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VOYXZNZW51ID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsTmF2KG51bGwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPVwiZGVmYXVsdFwiIGVsZXZhdGlvbj17Mn0gc3g9e3sgbWI6IDIsIGJhY2tncm91bmQ6ICd2YXIoLS1jb2xvci1uYXYtYmcpJyB9fT5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgICA8VG9vbGJhciBkaXNhYmxlR3V0dGVycz5cbiAgICAgICAgICB7LyogTG9nbyBvciBCcmFuZCAqL31cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgICAgIG5vV3JhcFxuICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgbXI6IDIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IHsgeHM6ICdub25lJywgbWQ6ICdmbGV4JyB9LFxuICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWNvbG9yLWFjY2VudCknLFxuICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6ICcuMXJlbScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFtaW5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICB7LyogTW9iaWxlIG1lbnUgaWNvbiAqL31cbiAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxLCBkaXNwbGF5OiB7IHhzOiAnZmxleCcsIG1kOiAnbm9uZScgfSB9fT5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJtZW51XCJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1lbnUtYXBwYmFyXCJcbiAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPcGVuTmF2TWVudX1cbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICBpZD1cIm1lbnUtYXBwYmFyXCJcbiAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsTmF2fVxuICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6ICdib3R0b20nLCBob3Jpem9udGFsOiAnbGVmdCcgfX1cbiAgICAgICAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ2xlZnQnIH19XG4gICAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWxOYXYpfVxuICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU5hdk1lbnV9XG4gICAgICAgICAgICAgIHN4PXt7IGRpc3BsYXk6IHsgeHM6ICdibG9jaycsIG1kOiAnbm9uZScgfSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGFnZXMubWFwKChwYWdlKSA9PiAoXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17cGFnZS5ocmVmfSBvbkNsaWNrPXtoYW5kbGVDbG9zZU5hdk1lbnV9IHNlbGVjdGVkPXtyb3V0ZXIucGF0aG5hbWUgPT09IHBhZ2UuaHJlZn0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9e0xpbmt9IGhyZWY9e3BhZ2UuaHJlZn0gc3g9e3sgdGV4dERlY29yYXRpb246ICdub25lJywgY29sb3I6ICdpbmhlcml0Jywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAge3BhZ2UubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICB7LyogRGVza3RvcCBtZW51ICovfVxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxuICAgICAgICAgICAgbm9XcmFwXG4gICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBtcjogMixcbiAgICAgICAgICAgICAgZGlzcGxheTogeyB4czogJ2ZsZXgnLCBtZDogJ25vbmUnIH0sXG4gICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tY29sb3ItYWNjZW50KScsXG4gICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogJy4xcmVtJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQW1pblxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxLCBkaXNwbGF5OiB7IHhzOiAnbm9uZScsIG1kOiAnZmxleCcgfSwganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcgfX0+XG4gICAgICAgICAgICB7cGFnZXMubWFwKChwYWdlKSA9PiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e3BhZ2UuaHJlZn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZU5hdk1lbnUoKTtcbiAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgIT09IHBhZ2UuaHJlZikge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChwYWdlLmhyZWYpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIG15OiAyLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IHJvdXRlci5wYXRobmFtZSA9PT0gcGFnZS5ocmVmID8gJ3ZhcigtLWNvbG9yLWFjY2VudCknIDogJ3ZhcigtLWNvbG9yLXByaW1hcnkpJyxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiByb3V0ZXIucGF0aG5hbWUgPT09IHBhZ2UuaHJlZiA/IDcwMCA6IDQwMCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcm91dGVyLnBhdGhuYW1lID09PSBwYWdlLmhyZWYgPyAncmdiYSgyNDksMjAwLDcwLDAuMDgpJyA6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAgICAgICAgICAgICBteDogMSxcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4ycycsXG4gICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tY29sb3Itc2Vjb25kYXJ5KScsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tY29sb3ItYmcpJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwYWdlLmxhYmVsfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0FwcEJhcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcEJhciIsIkJveCIsIlRvb2xiYXIiLCJJY29uQnV0dG9uIiwiVHlwb2dyYXBoeSIsIk1lbnUiLCJNZW51SWNvbiIsIkNvbnRhaW5lciIsIkJ1dHRvbiIsIk1lbnVJdGVtIiwiTGluayIsInVzZVJvdXRlciIsInBhZ2VzIiwibGFiZWwiLCJocmVmIiwiTmF2QmFyIiwicm91dGVyIiwiYW5jaG9yRWxOYXYiLCJzZXRBbmNob3JFbE5hdiIsInVzZVN0YXRlIiwiaGFuZGxlT3Blbk5hdk1lbnUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZU5hdk1lbnUiLCJwb3NpdGlvbiIsImNvbG9yIiwiZWxldmF0aW9uIiwic3giLCJtYiIsImJhY2tncm91bmQiLCJtYXhXaWR0aCIsImRpc2FibGVHdXR0ZXJzIiwidmFyaWFudCIsIm5vV3JhcCIsImNvbXBvbmVudCIsIm1yIiwiZGlzcGxheSIsInhzIiwibWQiLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiZmxleEdyb3ciLCJzaXplIiwiYXJpYS1sYWJlbCIsImFyaWEtY29udHJvbHMiLCJhcmlhLWhhc3BvcHVwIiwib25DbGljayIsImlkIiwiYW5jaG9yRWwiLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJrZWVwTW91bnRlZCIsInRyYW5zZm9ybU9yaWdpbiIsIm9wZW4iLCJCb29sZWFuIiwib25DbG9zZSIsIm1hcCIsInBhZ2UiLCJzZWxlY3RlZCIsInBhdGhuYW1lIiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsInB1c2giLCJteSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsIm14IiwidHJhbnNpdGlvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/NavBar.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_FixedBottomBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FixedBottomBar.css */ \"(pages-dir-node)/./components/FixedBottomBar.css\");\n/* harmony import */ var _components_FixedBottomBar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_FixedBottomBar_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App.css */ \"(pages-dir-node)/./App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBar */ \"(pages-dir-node)/./components/NavBar.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"(pages-dir-node)/./components/Footer.jsx\");\n/* harmony import */ var _components_FixedBottomBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FixedBottomBar */ \"(pages-dir-node)/./components/FixedBottomBar.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_NavBar__WEBPACK_IMPORTED_MODULE_3__]);\n_components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// frontend/pages/_app.jsx\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"content\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQkFBMEI7O0FBQ2dCO0FBQ3RCO0FBQ3NCO0FBQ0E7QUFDZ0I7QUFFM0MsU0FBU0csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNwRCxxQkFDRTs7MEJBQ0UsOERBQUNMLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNNO2dCQUFLQyxXQUFVOzBCQUNkLDRFQUFDSDtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OzswQkFFMUIsOERBQUNKLDBEQUFNQTs7Ozs7OztBQUdiIiwic291cmNlcyI6WyIvVXNlcnMvYW1pbi9EZXNrdG9wL015UHJvamVjdHMvc2hvd2Nhc2Utd2Vic2l0ZS9mcm9udGVuZC9wYWdlcy9fYXBwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmcm9udGVuZC9wYWdlcy9fYXBwLmpzeFxuaW1wb3J0ICcuLi9jb21wb25lbnRzL0ZpeGVkQm90dG9tQmFyLmNzcyc7XG5pbXBvcnQgJy4uL0FwcC5jc3MnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBGaXhlZEJvdHRvbUJhciBmcm9tICcuLi9jb21wb25lbnRzL0ZpeGVkQm90dG9tQmFyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZCYXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJOYXZCYXIiLCJGb290ZXIiLCJGaXhlZEJvdHRvbUJhciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibWFpbiIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.jsx\n");

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

/***/ "@mui/utils/useSlotProps":
/*!******************************************!*\
  !*** external "@mui/utils/useSlotProps" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@mui/utils/useSlotProps");;

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.jsx")));
module.exports = __webpack_exports__;

})();