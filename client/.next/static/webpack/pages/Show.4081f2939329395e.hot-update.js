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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    width: 400px;\\n    align-items: center;\\n    margin: 0 auto;\\n    border: 1px solid #151515;\\n    border-radius: 15px;\\n    padding: 40px;\\n    row-gap: 20px;\\n  \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    padding: 20px;\\n    font-size: large;\\n    border: none;\\n    border-radius: 15px;\\n    width: 200px;\\n    :hover {\\n      background: #151515;\\n      color: #fff;\\n      transition: ease-in-out 0.2s;\\n    }\\n  \"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    font-size: x-large;\\n    align-self: center;\\n  \"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    padding: 20px;\\n    font-size: large;\\n    border-radius: 15px;\\n    border: 1px solid #2a2a2a;\\n    background-color: #979797;\\n    color: #efeded;\\n    ::placeholder {\\n      color: #bbbaba;\\n    }\\n    &:active {\\n      border: 1px solid #151515;\\n    }\\n  \"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    font-size: large;\\n    padding: 20px;\\n    margin: 20px auto;\\n    border: 1px solid #151515;\\n    border-radius: 15px;\\n\\n    background-color: #ea5353;\\n\\n    transition: all 0.2s;\\n  \"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst Show = (props)=>{\n    _s();\n    const Form = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"].form(_templateObject());\n    const SumbitButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button(_templateObject1());\n    const Label = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"].label(_templateObject2());\n    const Input = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"].input(_templateObject3());\n    const Error = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject4());\n    const addressRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        const address = addressRef.current.value;\n        if (!address) {\n            setError(true);\n            setErrorMessage(\"Please, put the address\");\n        }\n        console.log(\"Address: \", address);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Form, {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Label, {\n                        children: \"Write address\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\пк\\\\Desktop\\\\petprojects\\\\CryptoBook\\\\client\\\\pages\\\\Show.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Input, {\n                        ref: addressRef,\n                        placeholder: \"0x...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\пк\\\\Desktop\\\\petprojects\\\\CryptoBook\\\\client\\\\pages\\\\Show.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SumbitButton, {\n                        type: \"submit\",\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\пк\\\\Desktop\\\\petprojects\\\\CryptoBook\\\\client\\\\pages\\\\Show.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\пк\\\\Desktop\\\\petprojects\\\\CryptoBook\\\\client\\\\pages\\\\Show.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Error, {\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\пк\\\\Desktop\\\\petprojects\\\\CryptoBook\\\\client\\\\pages\\\\Show.tsx\",\n                lineNumber: 84,\n                columnNumber: 24\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\пк\\\\Desktop\\\\petprojects\\\\CryptoBook\\\\client\\\\pages\\\\Show.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Show, \"LE2mlzj4FBPi3kNs1LR1TDumRow=\");\n_c = Show;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Show);\nvar _c;\n$RefreshReg$(_c, \"Show\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TaG93LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNOO0FBQ0w7QUFJckMsTUFBTUssT0FBTyxDQUFDQzs7SUFDWixNQUFNQyxPQUFPSCw0REFBVztJQVd4QixNQUFNSyxlQUFlTCw4REFBYTtJQWFsQyxNQUFNTyxRQUFRUCw2REFBWTtJQUkxQixNQUFNUyxRQUFRVCw2REFBWTtJQWMxQixNQUFNVyxRQUFRWCwyREFBVTtJQVl4QixNQUFNYSxhQUFhaEIsNkNBQU1BO0lBQ3pCLE1BQU0sQ0FBQ2lCLGNBQWNDLGdCQUFnQixHQUFHakIsK0NBQVFBO0lBQ2hELE1BQU0sQ0FBQ2tCLE9BQU9DLFNBQVMsR0FBR25CLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1vQixlQUFlLENBQUNDO1FBQ3BCQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU1DLFVBQVVSLFdBQVdTLE9BQU8sQ0FBQ0MsS0FBSztRQUV4QyxJQUFJLENBQUNGLFNBQVM7WUFDWkosU0FBUztZQUNURixnQkFBZ0I7UUFDbEI7UUFDQVMsUUFBUUMsR0FBRyxDQUFDLGFBQWFKO0lBQzNCO0lBRUEscUJBQ0UsOERBQUN0QiwwREFBTUE7OzBCQUNMLDhEQUFDSTtnQkFBS3VCLFVBQVVSOztrQ0FDZCw4REFBQ1g7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0U7d0JBQU1rQixLQUFLZDt3QkFBWWUsYUFBWTs7Ozs7O2tDQUNwQyw4REFBQ3ZCO3dCQUFhd0IsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7O1lBRTdCZiw4QkFBZ0IsOERBQUNIOzBCQUFPRzs7Ozs7Ozs7Ozs7O0FBRy9CO0dBaEZNYjtLQUFBQTtBQWtGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9TaG93LnRzeD9kODhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbnR5cGUgUHJvcHMgPSB7fTtcblxuY29uc3QgU2hvdyA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTUxNTE1O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICByb3ctZ2FwOiAyMHB4O1xuICBgO1xuICBjb25zdCBTdW1iaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMxNTE1MTU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuMnM7XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGA7XG4gIGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYTJhMmE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NztcbiAgICBjb2xvcjogI2VmZWRlZDtcbiAgICA6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjYmJiYWJhO1xuICAgIH1cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTUxNTE1O1xuICAgIH1cbiAgYDtcbiAgY29uc3QgRXJyb3IgPSBzdHlsZWQuZGl2YFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTUxNTE1O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1MzUzO1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGA7XG5cbiAgY29uc3QgYWRkcmVzc1JlZiA9IHVzZVJlZigpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBhZGRyZXNzUmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgIHNldEVycm9yKHRydWUpO1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiUGxlYXNlLCBwdXQgdGhlIGFkZHJlc3NcIik7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiQWRkcmVzczogXCIsIGFkZHJlc3MpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8TGFiZWw+V3JpdGUgYWRkcmVzczwvTGFiZWw+XG4gICAgICAgIDxJbnB1dCByZWY9e2FkZHJlc3NSZWZ9IHBsYWNlaG9sZGVyPVwiMHguLi5cIiAvPlxuICAgICAgICA8U3VtYml0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L1N1bWJpdEJ1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICAgIHtlcnJvck1lc3NhZ2UgJiYgPEVycm9yPntlcnJvck1lc3NhZ2V9PC9FcnJvcj59XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG93O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJMYXlvdXQiLCJzdHlsZWQiLCJTaG93IiwicHJvcHMiLCJGb3JtIiwiZm9ybSIsIlN1bWJpdEJ1dHRvbiIsImJ1dHRvbiIsIkxhYmVsIiwibGFiZWwiLCJJbnB1dCIsImlucHV0IiwiRXJyb3IiLCJkaXYiLCJhZGRyZXNzUmVmIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhZGRyZXNzIiwiY3VycmVudCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwicmVmIiwicGxhY2Vob2xkZXIiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Show.tsx\n"));

/***/ })

});