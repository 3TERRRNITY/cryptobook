"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Show",{

/***/ "./pages/Show.tsx":
/*!************************!*\
  !*** ./pages/Show.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 20px;\\n    width: 100%;\\n  \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    padding: 20px;\\n    font-size: large;\\n    border: none;\\n    border-radius: 15px;\\n    width: 200px;\\n    :hover {\\n      background: #151515;\\n      color: #fff;\\n      transition: ease-in-out 0.2s;\\n    }\\n  \"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    width: 400px;\\n    align-items: center;\\n    margin: 0 auto;\\n    border: 1px solid #151515;\\n    border-radius: 15px;\\n    padding: 40px;\\n    row-gap: 20px;\\n  \"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    font-size: x-large;\\n    align-self: center;\\n  \"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    padding: 20px;\\n    font-size: large;\\n    border-radius: 15px;\\n    border: 1px solid #2a2a2a;\\n    background-color: #979797;\\n    color: #efeded;\\n    ::placeholder {\\n      color: #bbbaba;\\n    }\\n    &:active {\\n      border: 1px solid #151515;\\n    }\\n  \"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst Show = (props)=>{\n    _s();\n    const Form = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"].form(_templateObject());\n    const SumbitButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button(_templateObject1());\n    const SearchFormContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n    const Label = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"].label(_templateObject3());\n    const Input = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"].input(_templateObject4());\n    const addressRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const handleSubmit = (event)=>{\n        var _addressRef_current;\n        event.preventDefault();\n        const address = addressRef === null || addressRef === void 0 ? void 0 : (_addressRef_current = addressRef.current) === null || _addressRef_current === void 0 ? void 0 : _addressRef_current.value;\n        console.log(\"Address: \", address);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SearchFormContainer, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Form, {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Label, {\n                            children: \"Write address\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\пк\\\\Desktop\\\\petprojects\\\\CryptoBook\\\\client\\\\pages\\\\Show.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Input, {\n                            ref: addressRef,\n                            placeholder: \"0x...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\пк\\\\Desktop\\\\petprojects\\\\CryptoBook\\\\client\\\\pages\\\\Show.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\пк\\\\Desktop\\\\petprojects\\\\CryptoBook\\\\client\\\\pages\\\\Show.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SumbitButton, {\n                    type: \"submit\",\n                    children: \"Search\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\пк\\\\Desktop\\\\petprojects\\\\CryptoBook\\\\client\\\\pages\\\\Show.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\пк\\\\Desktop\\\\petprojects\\\\CryptoBook\\\\client\\\\pages\\\\Show.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\пк\\\\Desktop\\\\petprojects\\\\CryptoBook\\\\client\\\\pages\\\\Show.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Show, \"30fuhaCAt1nodfyLTLPXcO4Kyg0=\");\n_c = Show;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Show);\nvar _c;\n$RefreshReg$(_c, \"Show\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TaG93LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNJO0FBQ0w7QUFJckMsTUFBTUksT0FBTyxDQUFDQzs7SUFDWixNQUFNQyxPQUFPSCw0REFBVztJQU14QixNQUFNSyxlQUFlTCw4REFBYTtJQVlsQyxNQUFNTyxzQkFBc0JQLDJEQUFVO0lBV3RDLE1BQU1TLFFBQVFULDZEQUFZO0lBSTFCLE1BQU1XLFFBQVFYLDZEQUFZO0lBZTFCLE1BQU1hLGFBQWFmLDZDQUFNQTtJQUN6QixNQUFNZ0IsZUFBZSxDQUFDQztZQUVKRjtRQURoQkUsTUFBTUMsY0FBYztRQUNwQixNQUFNQyxVQUFVSix1QkFBQUEsa0NBQUFBLHNCQUFBQSxXQUFZSyxPQUFPLGNBQW5CTCwwQ0FBQUEsb0JBQXFCTSxLQUFLO1FBQzFDQyxRQUFRQyxHQUFHLENBQUMsYUFBYUo7SUFDM0I7SUFFQSxxQkFDRSw4REFBQ2xCLDBEQUFNQTtrQkFDTCw0RUFBQ1E7OzhCQUNDLDhEQUFDSjtvQkFBS21CLFVBQVVSOztzQ0FDZCw4REFBQ0w7c0NBQU07Ozs7OztzQ0FDUCw4REFBQ0U7NEJBQU1ZLEtBQUtWOzRCQUFZVyxhQUFZOzs7Ozs7Ozs7Ozs7OEJBRXRDLDhEQUFDbkI7b0JBQWFvQixNQUFLOzhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlwQztHQW5FTXhCO0tBQUFBO0FBcUVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1Nob3cudHN4P2Q4OGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG50eXBlIFByb3BzID0ge307XG5cbmNvbnN0IFNob3cgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcm93LWdhcDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgYDtcbiAgY29uc3QgU3VtYml0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMTUxNTE1O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjJzO1xuICAgIH1cbiAgYDtcbiAgY29uc3QgU2VhcmNoRm9ybUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNTE1MTU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIHJvdy1nYXA6IDIwcHg7XG4gIGA7XG4gIGNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGA7XG4gIGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYTJhMmE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NztcbiAgICBjb2xvcjogI2VmZWRlZDtcbiAgICA6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjYmJiYWJhO1xuICAgIH1cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTUxNTE1O1xuICAgIH1cbiAgYDtcblxuICBjb25zdCBhZGRyZXNzUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWRkcmVzcyA9IGFkZHJlc3NSZWY/LmN1cnJlbnQ/LnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKFwiQWRkcmVzczogXCIsIGFkZHJlc3MpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxTZWFyY2hGb3JtQ29udGFpbmVyPlxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8TGFiZWw+V3JpdGUgYWRkcmVzczwvTGFiZWw+XG4gICAgICAgICAgPElucHV0IHJlZj17YWRkcmVzc1JlZn0gcGxhY2Vob2xkZXI9XCIweC4uLlwiIC8+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICAgPFN1bWJpdEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VhcmNoPC9TdW1iaXRCdXR0b24+XG4gICAgICA8L1NlYXJjaEZvcm1Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG93O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiTGF5b3V0Iiwic3R5bGVkIiwiU2hvdyIsInByb3BzIiwiRm9ybSIsImZvcm0iLCJTdW1iaXRCdXR0b24iLCJidXR0b24iLCJTZWFyY2hGb3JtQ29udGFpbmVyIiwiZGl2IiwiTGFiZWwiLCJsYWJlbCIsIklucHV0IiwiaW5wdXQiLCJhZGRyZXNzUmVmIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFkZHJlc3MiLCJjdXJyZW50IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJyZWYiLCJwbGFjZWhvbGRlciIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Show.tsx\n"));

/***/ })

});