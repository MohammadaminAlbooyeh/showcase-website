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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavBar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/AppBar */ \"(pages-dir-node)/./node_modules/@mui/material/esm/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Toolbar */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Toolbar/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/IconButton */ \"(pages-dir-node)/./node_modules/@mui/material/esm/IconButton/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Typography */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Typography/index.js\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Menu */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Menu/index.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Menu.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Container/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Button */ \"(pages-dir-node)/./node_modules/@mui/material/esm/Button/index.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/MenuItem */ \"(pages-dir-node)/./node_modules/@mui/material/esm/MenuItem/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__, _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__, _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__, _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_9__, _mui_material_Menu__WEBPACK_IMPORTED_MODULE_10__, _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__]);\n([_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__, _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__, _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__, _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_9__, _mui_material_Menu__WEBPACK_IMPORTED_MODULE_10__, _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst pages = [\n    {\n        label: 'Home',\n        href: '/'\n    },\n    {\n        label: 'Portfolio',\n        href: '/portfolio'\n    },\n    {\n        label: 'Projects',\n        href: '/projects'\n    },\n    {\n        label: 'Resume',\n        href: '/resume'\n    },\n    {\n        label: 'Contact',\n        href: '/contactus'\n    }\n];\nfunction NavBar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [anchorElNav, setAnchorElNav] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const handleOpenNavMenu = (event)=>{\n        setAnchorElNav(event.currentTarget);\n    };\n    const handleCloseNavMenu = ()=>{\n        setAnchorElNav(null);\n    };\n    // Pre-fetch all routes for instant navigation\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect({\n        \"NavBar.useEffect\": ()=>{\n            pages.forEach({\n                \"NavBar.useEffect\": (page)=>router.prefetch(page.href)\n            }[\"NavBar.useEffect\"]);\n        }\n    }[\"NavBar.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        position: \"static\",\n        color: \"default\",\n        elevation: 2,\n        sx: {\n            mb: 2,\n            background: 'var(--color-nav-bg)'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            maxWidth: \"lg\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                disableGutters: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        sx: {\n                            flexGrow: 1,\n                            display: {\n                                xs: 'flex',\n                                md: 'none'\n                            }\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                size: \"large\",\n                                \"aria-label\": \"menu\",\n                                \"aria-controls\": \"menu-appbar\",\n                                \"aria-haspopup\": \"true\",\n                                onClick: handleOpenNavMenu,\n                                color: \"inherit\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                id: \"menu-appbar\",\n                                anchorEl: anchorElNav,\n                                anchorOrigin: {\n                                    vertical: 'bottom',\n                                    horizontal: 'left'\n                                },\n                                keepMounted: true,\n                                transformOrigin: {\n                                    vertical: 'top',\n                                    horizontal: 'left'\n                                },\n                                open: Boolean(anchorElNav),\n                                onClose: handleCloseNavMenu,\n                                sx: {\n                                    display: {\n                                        xs: 'block',\n                                        md: 'none'\n                                    }\n                                },\n                                children: pages.map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: page.href,\n                                        style: {\n                                            textDecoration: 'none',\n                                            color: 'inherit'\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            onClick: handleCloseNavMenu,\n                                            selected: router.pathname === page.href,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                                textAlign: \"center\",\n                                                children: page.label\n                                            }, void 0, false, {\n                                                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, page.href, false, {\n                                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        sx: {\n                            flexGrow: 1,\n                            display: {\n                                xs: 'none',\n                                md: 'flex'\n                            },\n                            justifyContent: 'flex-end',\n                            gap: 1\n                        },\n                        children: pages.map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: page.href,\n                                style: {\n                                    textDecoration: 'none'\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                    onClick: handleCloseNavMenu,\n                                    sx: {\n                                        my: 2,\n                                        px: 2,\n                                        color: router.pathname === page.href ? 'var(--color-accent)' : 'var(--color-primary)',\n                                        display: 'block',\n                                        fontWeight: router.pathname === page.href ? 700 : 400,\n                                        backgroundColor: router.pathname === page.href ? 'rgba(249,200,70,0.08)' : 'transparent',\n                                        borderRadius: 2,\n                                        transition: 'all 0.2s',\n                                        '&:hover': {\n                                            backgroundColor: 'var(--color-secondary)',\n                                            color: 'var(--color-bg)'\n                                        }\n                                    },\n                                    children: page.label\n                                }, void 0, false, {\n                                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 17\n                                }, this)\n                            }, page.href, false, {\n                                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/components/NavBar.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTmF2QmFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNXO0FBQ047QUFDUTtBQUNNO0FBQ0E7QUFDWjtBQUNVO0FBQ0E7QUFDTjtBQUNJO0FBQ2pCO0FBQ1c7QUFFeEMsTUFBTWEsUUFBUTtJQUNaO1FBQUVDLE9BQU87UUFBUUMsTUFBTTtJQUFJO0lBQzNCO1FBQUVELE9BQU87UUFBYUMsTUFBTTtJQUFhO0lBQ3pDO1FBQUVELE9BQU87UUFBWUMsTUFBTTtJQUFZO0lBQ3ZDO1FBQUVELE9BQU87UUFBVUMsTUFBTTtJQUFVO0lBQ25DO1FBQUVELE9BQU87UUFBV0MsTUFBTTtJQUFhO0NBQ3hDO0FBRWMsU0FBU0M7SUFDdEIsTUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHbkIsMkNBQWMsQ0FBQztJQUVyRCxNQUFNcUIsb0JBQW9CLENBQUNDO1FBQ3pCSCxlQUFlRyxNQUFNQyxhQUFhO0lBQ3BDO0lBRUEsTUFBTUMscUJBQXFCO1FBQ3pCTCxlQUFlO0lBQ2pCO0lBRUEsOENBQThDO0lBQzlDbkIsNENBQWU7NEJBQUM7WUFDZGEsTUFBTWEsT0FBTztvQ0FBQ0MsQ0FBQUEsT0FBUVYsT0FBT1csUUFBUSxDQUFDRCxLQUFLWixJQUFJOztRQUNqRDsyQkFBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNkLDREQUFNQTtRQUFDNEIsVUFBUztRQUFTQyxPQUFNO1FBQVVDLFdBQVc7UUFBR0MsSUFBSTtZQUFFQyxJQUFJO1lBQUdDLFlBQVk7UUFBc0I7a0JBQ3JHLDRFQUFDMUIsK0RBQVNBO1lBQUMyQixVQUFTO3NCQUNsQiw0RUFBQ2hDLDZEQUFPQTtnQkFBQ2lDLGNBQWM7O2tDQUVyQiw4REFBQ2xDLHlEQUFHQTt3QkFBQzhCLElBQUk7NEJBQUVLLFVBQVU7NEJBQUdDLFNBQVM7Z0NBQUVDLElBQUk7Z0NBQVFDLElBQUk7NEJBQU87d0JBQUU7OzBDQUMxRCw4REFBQ3BDLGdFQUFVQTtnQ0FDVHFDLE1BQUs7Z0NBQ0xDLGNBQVc7Z0NBQ1hDLGlCQUFjO2dDQUNkQyxpQkFBYztnQ0FDZEMsU0FBU3hCO2dDQUNUUyxPQUFNOzBDQUVOLDRFQUFDdkIsZ0VBQVFBOzs7Ozs7Ozs7OzBDQUVYLDhEQUFDRCwyREFBSUE7Z0NBQ0h3QyxJQUFHO2dDQUNIQyxVQUFVN0I7Z0NBQ1Y4QixjQUFjO29DQUFFQyxVQUFVO29DQUFVQyxZQUFZO2dDQUFPO2dDQUN2REMsV0FBVztnQ0FDWEMsaUJBQWlCO29DQUFFSCxVQUFVO29DQUFPQyxZQUFZO2dDQUFPO2dDQUN2REcsTUFBTUMsUUFBUXBDO2dDQUNkcUMsU0FBUy9CO2dDQUNUUSxJQUFJO29DQUFFTSxTQUFTO3dDQUFFQyxJQUFJO3dDQUFTQyxJQUFJO29DQUFPO2dDQUFFOzBDQUUxQzNCLE1BQU0yQyxHQUFHLENBQUMsQ0FBQzdCLHFCQUNWLDhEQUFDaEIsa0RBQUlBO3dDQUVISSxNQUFNWSxLQUFLWixJQUFJO3dDQUNmMEMsT0FBTzs0Q0FBRUMsZ0JBQWdCOzRDQUFRNUIsT0FBTzt3Q0FBVTtrREFFbEQsNEVBQUNwQiwrREFBUUE7NENBQUNtQyxTQUFTckI7NENBQW9CbUMsVUFBVTFDLE9BQU8yQyxRQUFRLEtBQUtqQyxLQUFLWixJQUFJO3NEQUM1RSw0RUFBQ1YsaUVBQVVBO2dEQUFDd0QsV0FBVTswREFBVWxDLEtBQUtiLEtBQUs7Ozs7Ozs7Ozs7O3VDQUx2Q2EsS0FBS1osSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FhdEIsOERBQUNiLHlEQUFHQTt3QkFBQzhCLElBQUk7NEJBQUVLLFVBQVU7NEJBQUdDLFNBQVM7Z0NBQUVDLElBQUk7Z0NBQVFDLElBQUk7NEJBQU87NEJBQUdzQixnQkFBZ0I7NEJBQVlDLEtBQUs7d0JBQUU7a0NBQzdGbEQsTUFBTTJDLEdBQUcsQ0FBQyxDQUFDN0IscUJBQ1YsOERBQUNoQixrREFBSUE7Z0NBRUhJLE1BQU1ZLEtBQUtaLElBQUk7Z0NBQ2YwQyxPQUFPO29DQUFFQyxnQkFBZ0I7Z0NBQU87MENBRWhDLDRFQUFDakQsNkRBQU1BO29DQUNMb0MsU0FBU3JCO29DQUNUUSxJQUFJO3dDQUNGZ0MsSUFBSTt3Q0FDSkMsSUFBSTt3Q0FDSm5DLE9BQU9iLE9BQU8yQyxRQUFRLEtBQUtqQyxLQUFLWixJQUFJLEdBQUcsd0JBQXdCO3dDQUMvRHVCLFNBQVM7d0NBQ1Q0QixZQUFZakQsT0FBTzJDLFFBQVEsS0FBS2pDLEtBQUtaLElBQUksR0FBRyxNQUFNO3dDQUNsRG9ELGlCQUFpQmxELE9BQU8yQyxRQUFRLEtBQUtqQyxLQUFLWixJQUFJLEdBQUcsMEJBQTBCO3dDQUMzRXFELGNBQWM7d0NBQ2RDLFlBQVk7d0NBQ1osV0FBVzs0Q0FDVEYsaUJBQWlCOzRDQUNqQnJDLE9BQU87d0NBQ1Q7b0NBQ0Y7OENBRUNILEtBQUtiLEtBQUs7Ozs7OzsrQkFyQlJhLEtBQUtaLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEI5QiIsInNvdXJjZXMiOlsiL1VzZXJzL2FtaW4vRGVza3RvcC9NeVByb2plY3RzL3Nob3djYXNlLXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9OYXZCYXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgTWVudSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnUnO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudUl0ZW0nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgcGFnZXMgPSBbXG4gIHsgbGFiZWw6ICdIb21lJywgaHJlZjogJy8nIH0sXG4gIHsgbGFiZWw6ICdQb3J0Zm9saW8nLCBocmVmOiAnL3BvcnRmb2xpbycgfSxcbiAgeyBsYWJlbDogJ1Byb2plY3RzJywgaHJlZjogJy9wcm9qZWN0cycgfSxcbiAgeyBsYWJlbDogJ1Jlc3VtZScsIGhyZWY6ICcvcmVzdW1lJyB9LFxuICB7IGxhYmVsOiAnQ29udGFjdCcsIGhyZWY6ICcvY29udGFjdHVzJyB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2FuY2hvckVsTmF2LCBzZXRBbmNob3JFbE5hdl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVPcGVuTmF2TWVudSA9IChldmVudCkgPT4ge1xuICAgIHNldEFuY2hvckVsTmF2KGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlTmF2TWVudSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbE5hdihudWxsKTtcbiAgfTtcblxuICAvLyBQcmUtZmV0Y2ggYWxsIHJvdXRlcyBmb3IgaW5zdGFudCBuYXZpZ2F0aW9uXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcGFnZXMuZm9yRWFjaChwYWdlID0+IHJvdXRlci5wcmVmZXRjaChwYWdlLmhyZWYpKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPVwiZGVmYXVsdFwiIGVsZXZhdGlvbj17Mn0gc3g9e3sgbWI6IDIsIGJhY2tncm91bmQ6ICd2YXIoLS1jb2xvci1uYXYtYmcpJyB9fT5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgICA8VG9vbGJhciBkaXNhYmxlR3V0dGVycz5cbiAgICAgICAgICB7LyogTW9iaWxlIG1lbnUgKi99XG4gICAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSwgZGlzcGxheTogeyB4czogJ2ZsZXgnLCBtZDogJ25vbmUnIH0gfX0+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibWVudVwiXG4gICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJtZW51LWFwcGJhclwiXG4gICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT3Blbk5hdk1lbnV9XG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgaWQ9XCJtZW51LWFwcGJhclwiXG4gICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbE5hdn1cbiAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAnYm90dG9tJywgaG9yaXpvbnRhbDogJ2xlZnQnIH19XG4gICAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdsZWZ0JyB9fVxuICAgICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsTmF2KX1cbiAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VOYXZNZW51fVxuICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiB7IHhzOiAnYmxvY2snLCBtZDogJ25vbmUnIH0gfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BhZ2VzLm1hcCgocGFnZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAga2V5PXtwYWdlLmhyZWZ9IFxuICAgICAgICAgICAgICAgICAgaHJlZj17cGFnZS5ocmVmfSBcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGNvbG9yOiAnaW5oZXJpdCcgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2VOYXZNZW51fSBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lID09PSBwYWdlLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB0ZXh0QWxpZ249XCJjZW50ZXJcIj57cGFnZS5sYWJlbH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICB7LyogRGVza3RvcCBtZW51ICovfVxuICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEsIGRpc3BsYXk6IHsgeHM6ICdub25lJywgbWQ6ICdmbGV4JyB9LCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJywgZ2FwOiAxIH19PlxuICAgICAgICAgICAge3BhZ2VzLm1hcCgocGFnZSkgPT4gKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGtleT17cGFnZS5ocmVmfVxuICAgICAgICAgICAgICAgIGhyZWY9e3BhZ2UuaHJlZn1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZU5hdk1lbnV9XG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBteTogMixcbiAgICAgICAgICAgICAgICAgICAgcHg6IDIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByb3V0ZXIucGF0aG5hbWUgPT09IHBhZ2UuaHJlZiA/ICd2YXIoLS1jb2xvci1hY2NlbnQpJyA6ICd2YXIoLS1jb2xvci1wcmltYXJ5KScsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IHJvdXRlci5wYXRobmFtZSA9PT0gcGFnZS5ocmVmID8gNzAwIDogNDAwLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJvdXRlci5wYXRobmFtZSA9PT0gcGFnZS5ocmVmID8gJ3JnYmEoMjQ5LDIwMCw3MCwwLjA4KScgOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4ycycsXG4gICAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ZhcigtLWNvbG9yLXNlY29uZGFyeSknLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tY29sb3ItYmcpJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3BhZ2UubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0FwcEJhcj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBCYXIiLCJCb3giLCJUb29sYmFyIiwiSWNvbkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJNZW51IiwiTWVudUljb24iLCJDb250YWluZXIiLCJCdXR0b24iLCJNZW51SXRlbSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJwYWdlcyIsImxhYmVsIiwiaHJlZiIsIk5hdkJhciIsInJvdXRlciIsImFuY2hvckVsTmF2Iiwic2V0QW5jaG9yRWxOYXYiLCJ1c2VTdGF0ZSIsImhhbmRsZU9wZW5OYXZNZW51IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2VOYXZNZW51IiwidXNlRWZmZWN0IiwiZm9yRWFjaCIsInBhZ2UiLCJwcmVmZXRjaCIsInBvc2l0aW9uIiwiY29sb3IiLCJlbGV2YXRpb24iLCJzeCIsIm1iIiwiYmFja2dyb3VuZCIsIm1heFdpZHRoIiwiZGlzYWJsZUd1dHRlcnMiLCJmbGV4R3JvdyIsImRpc3BsYXkiLCJ4cyIsIm1kIiwic2l6ZSIsImFyaWEtbGFiZWwiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1oYXNwb3B1cCIsIm9uQ2xpY2siLCJpZCIsImFuY2hvckVsIiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwia2VlcE1vdW50ZWQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJvcGVuIiwiQm9vbGVhbiIsIm9uQ2xvc2UiLCJtYXAiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwic2VsZWN0ZWQiLCJwYXRobmFtZSIsInRleHRBbGlnbiIsImp1c3RpZnlDb250ZW50IiwiZ2FwIiwibXkiLCJweCIsImZvbnRXZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJ0cmFuc2l0aW9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/NavBar.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"(pages-dir-node)/./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_FixedBottomBar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FixedBottomBar.css */ \"(pages-dir-node)/./components/FixedBottomBar.css\");\n/* harmony import */ var _components_FixedBottomBar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_FixedBottomBar_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../App.css */ \"(pages-dir-node)/./App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NavBar */ \"(pages-dir-node)/./components/NavBar.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ \"(pages-dir-node)/./components/Footer.jsx\");\n/* harmony import */ var _components_FixedBottomBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FixedBottomBar */ \"(pages-dir-node)/./components/FixedBottomBar.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_NavBar__WEBPACK_IMPORTED_MODULE_6__]);\n_components_NavBar__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            // Pre-fetch all routes for instant navigation\n            [\n                '/',\n                '/portfolio',\n                '/projects',\n                '/resume',\n                '/contactus'\n            ].forEach({\n                \"MyApp.useEffect\": (route)=>{\n                    router.prefetch(route);\n                }\n            }[\"MyApp.useEffect\"]);\n        }\n    }[\"MyApp.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"content\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amin/Desktop/MyProjects/showcase-website/frontend/pages/_app.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n// Add getInitialProps to handle server-side props\nMyApp.getInitialProps = async (appContext)=>{\n    // calls page's `getInitialProps` and fills `appProps.pageProps`\n    const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(appContext);\n    return {\n        ...appProps\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJCO0FBQ087QUFDTTtBQUNFO0FBQ3RCO0FBQ3NCO0FBQ0E7QUFDZ0I7QUFFMUQsU0FBU00sTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxNQUFNQyxTQUFTUCxzREFBU0E7SUFFeEJELGdEQUFTQTsyQkFBQztZQUNSLDhDQUE4QztZQUM5QztnQkFBQztnQkFBSztnQkFBYztnQkFBYTtnQkFBVzthQUFhLENBQUNTLE9BQU87bUNBQUNDLENBQUFBO29CQUNoRUYsT0FBT0csUUFBUSxDQUFDRDtnQkFDbEI7O1FBQ0Y7MEJBQUcsRUFBRTtJQUNMLHFCQUNFOzswQkFDRSw4REFBQ1IsMERBQU1BOzs7OzswQkFDUCw4REFBQ1U7Z0JBQUtDLFdBQVU7MEJBQ2QsNEVBQUNQO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OzBCQUUxQiw4REFBQ0osMERBQU1BOzs7Ozs7O0FBR2I7QUFFQSxrREFBa0Q7QUFDbERFLE1BQU1TLGVBQWUsR0FBRyxPQUFPQztJQUM3QixnRUFBZ0U7SUFDaEUsTUFBTUMsV0FBVyxNQUFNakIsK0RBQW1CLENBQUNnQjtJQUMzQyxPQUFPO1FBQUUsR0FBR0MsUUFBUTtJQUFDO0FBQ3ZCO0FBRUEsaUVBQWVYLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWluL0Rlc2t0b3AvTXlQcm9qZWN0cy9zaG93Y2FzZS13ZWJzaXRlL2Zyb250ZW5kL3BhZ2VzL19hcHAuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL0ZpeGVkQm90dG9tQmFyLmNzcyc7XG5pbXBvcnQgJy4uL0FwcC5jc3MnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBGaXhlZEJvdHRvbUJhciBmcm9tICcuLi9jb21wb25lbnRzL0ZpeGVkQm90dG9tQmFyJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gUHJlLWZldGNoIGFsbCByb3V0ZXMgZm9yIGluc3RhbnQgbmF2aWdhdGlvblxuICAgIFsnLycsICcvcG9ydGZvbGlvJywgJy9wcm9qZWN0cycsICcvcmVzdW1lJywgJy9jb250YWN0dXMnXS5mb3JFYWNoKHJvdXRlID0+IHtcbiAgICAgIHJvdXRlci5wcmVmZXRjaChyb3V0ZSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdkJhciAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbi8vIEFkZCBnZXRJbml0aWFsUHJvcHMgdG8gaGFuZGxlIHNlcnZlci1zaWRlIHByb3BzXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuICAvLyBjYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcbiAgcmV0dXJuIHsgLi4uYXBwUHJvcHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJBcHAiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJOYXZCYXIiLCJGb290ZXIiLCJGaXhlZEJvdHRvbUJhciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiZm9yRWFjaCIsInJvdXRlIiwicHJlZmV0Y2giLCJtYWluIiwiY2xhc3NOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsImFwcFByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.jsx\n");

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