"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/MapContext.tsx":
/*!************************************!*\
  !*** ./src/context/MapContext.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MapContextProvider\": function() { return /* binding */ MapContextProvider; },\n/* harmony export */   \"useMapContext\": function() { return /* binding */ useMapContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _graphql_client_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphql/client/queries */ \"./graphql/client/queries.ts\");\n/* harmony import */ var _components_Toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Toaster */ \"./src/components/Toaster/index.ts\");\n/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blueprintjs/core */ \"./node_modules/@blueprintjs/core/lib/esm/index.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s2, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s2 = _i.next()).done); _n = true){\n            _arr.push(_s2.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n// src/context/state.js\n\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar MapContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nvar MapStateInitial = {\n    maps: [],\n    mapRef: null,\n    currentMap: null\n};\nvar mapReducer = function(state, action) {\n    switch(action.type){\n        case \"setMapRef\":\n            return _objectSpread({}, state, {\n                mapRef: action.payload.ref\n            });\n        case \"fetchMap\":\n            return _objectSpread({}, state, {\n                maps: action.payload.data\n            });\n        case \"currentMap\":\n            return _objectSpread({}, state, {\n                currentMap: action.payload.data\n            });\n        case \"refetchFolders\":\n            return _objectSpread({}, state, {\n                currentMap: action.payload.data\n            });\n        default:\n            return state;\n    }\n};\nvar MapContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(mapReducer, MapStateInitial), mapState = ref5[0], mapDispatch = ref5[1];\n    var ref1 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(), session = ref1.data;\n    var ref2 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useLazyQuery)(_graphql_client_queries__WEBPACK_IMPORTED_MODULE_3__.QueryUserMapsGQL, {\n        onError: function onError(error) {\n            _components_Toaster__WEBPACK_IMPORTED_MODULE_4__.AppToaster === null || _components_Toaster__WEBPACK_IMPORTED_MODULE_4__.AppToaster === void 0 ? void 0 : _components_Toaster__WEBPACK_IMPORTED_MODULE_4__.AppToaster.show({\n                intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.Intent.DANGER,\n                message: \"Wyst\\u0105pi\\u0142 problem z twoj\\u0105 sesj\\u0105, zosta\\u0142e\\u015B wylogowany. \".concat(error)\n            });\n            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n        },\n        onCompleted: function onCompleted(data) {\n            var ref, ref4;\n            mapDispatch({\n                type: \"fetchMap\",\n                payload: {\n                    data: (ref = data.me) === null || ref === void 0 ? void 0 : (ref4 = ref.mapsCreated) === null || ref4 === void 0 ? void 0 : ref4.map(function(map) {\n                        return {\n                            id: map.id,\n                            color: map.color,\n                            icon: map.icon,\n                            name: map.name\n                        };\n                    })\n                }\n            });\n        }\n    }), 2), fetchMaps = ref2[0], ref3 = ref2[1], data1 = ref3.data, error1 = ref3.error;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (session) {\n            fetchMaps();\n        }\n    }, [\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MapContext.Provider, {\n        value: {\n            mapState: mapState,\n            mapDispatch: mapDispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\GTA5MAP\\\\gtamap\\\\src\\\\context\\\\MapContext.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, _this);\n};\n_s(MapContextProvider, \"2DJ/5HD8QX/s/C9Eg23l2yRoPRo=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useLazyQuery\n    ];\n});\n_c = MapContextProvider;\nfunction useMapContext() {\n    _s1();\n    var mapContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);\n    if (!mapContext) throw new Error(\"Component beyond MapContext!\");\n    return mapContext;\n}\n_s1(useMapContext, \"T+/jitUWQ0G+8P8wsbuBNXfyHdI=\");\nvar _c;\n$RefreshReg$(_c, \"MapContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDZjtxQkFBQyxDQUFDO2lCQUNKO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7S0FDRixDQUFDLE1BckJLQyxTQUFTLEdBQXFCcEMsSUFxQm5DLEdBckJjLFNBQXFCQSxJQXFCbkMsS0FyQmtCZ0IsS0FBSSxRQUFKQSxJQUFJLEVBQUVPLE1BQUssUUFBTEEsS0FBSztJQXVCL0IzQixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJeUIsT0FBTyxFQUFFO1lBQ1hlLFNBQVMsRUFBRSxDQUFDO1NBQ2I7S0FDRixFQUFFO1FBQUNmLE9BQU87S0FBQyxDQUFDLENBQUM7SUFFZCxxQkFDRSw4REFBQ2pCLFVBQVUsQ0FBQ2lDLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQUVuQixRQUFRLEVBQVJBLFFBQVE7WUFBRUMsV0FBVyxFQUFYQSxXQUFXO1NBQUU7a0JBQ2xERixRQUFROzs7OzthQUNXLENBQ3RCO0NBQ0gsQ0FBQztHQXJDV0Qsa0JBQWtCOztRQUVIbkIsdURBQVU7UUFDQ0Usd0RBQVk7OztBQUh0Q2lCLEtBQUFBLGtCQUFrQjtBQXVDeEIsU0FBU3NCLGFBQWEsR0FBRzs7SUFDOUIsSUFBTUMsVUFBVSxHQUFHN0MsaURBQVUsQ0FBQ1MsVUFBVSxDQUFDO0lBQ3pDLElBQUksQ0FBQ29DLFVBQVUsRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ2pFLE9BQU9ELFVBQVUsQ0FBQztDQUNuQjtJQUplRCxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L01hcENvbnRleHQudHN4P2MzMmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2NvbnRleHQvc3RhdGUuanNcclxuaW1wb3J0IHtcclxuICBjcmVhdGVDb250ZXh0LFxyXG4gIERpc3BhdGNoLFxyXG4gIE11dGFibGVSZWZPYmplY3QsXHJcbiAgdXNlQ29udGV4dCxcclxuICB1c2VFZmZlY3QsXHJcbiAgdXNlUmVkdWNlcixcclxuICB1c2VTdGF0ZSxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgRm9sZGVyLCBNYXAsIE1hcEFjdGlvbiwgVXNlciB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHtcclxuICBRdWVyeUZvbGRlcnNHUUwsXHJcbiAgUXVlcnlVc2VyTWFwc0dRTCxcclxufSBmcm9tIFwiLi4vLi4vZ3JhcGhxbC9jbGllbnQvcXVlcmllc1wiO1xyXG5pbXBvcnQgeyBBcHBUb2FzdGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9hc3RlclwiO1xyXG5pbXBvcnQgeyBJbnRlbnQgfSBmcm9tIFwiQGJsdWVwcmludGpzL2NvcmVcIjtcclxuXHJcbmNvbnN0IE1hcENvbnRleHQgPSBjcmVhdGVDb250ZXh0PE1hcENvbnRleHQgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcblxyXG5pbnRlcmZhY2UgTWFwQ29udGV4dCB7XHJcbiAgbWFwU3RhdGU6IE1hcFN0YXRlO1xyXG4gIG1hcERpc3BhdGNoOiBEaXNwYXRjaDxNYXBBY3Rpb24+O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTWFwU3RhdGUge1xyXG4gIG1hcHM6IE1hcFtdO1xyXG4gIG1hcFJlZjogTXV0YWJsZVJlZk9iamVjdDxMLk1hcCB8IG51bGw+IHwgbnVsbDtcclxuICBjdXJyZW50TWFwOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG5jb25zdCBNYXBTdGF0ZUluaXRpYWwgPSB7XHJcbiAgbWFwczogW10sXHJcbiAgbWFwUmVmOiBudWxsLFxyXG4gIGN1cnJlbnRNYXA6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBtYXBSZWR1Y2VyID0gKHN0YXRlOiBNYXBTdGF0ZSwgYWN0aW9uOiBNYXBBY3Rpb24pOiBNYXBTdGF0ZSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcInNldE1hcFJlZlwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbWFwUmVmOiBhY3Rpb24ucGF5bG9hZC5yZWYgfTtcclxuICAgIGNhc2UgXCJmZXRjaE1hcFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbWFwczogYWN0aW9uLnBheWxvYWQuZGF0YSB9O1xyXG4gICAgY2FzZSBcImN1cnJlbnRNYXBcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRNYXA6IGFjdGlvbi5wYXlsb2FkLmRhdGEgfTtcclxuICAgIGNhc2UgXCJyZWZldGNoRm9sZGVyc1wiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudE1hcDogYWN0aW9uLnBheWxvYWQuZGF0YSB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNYXBDb250ZXh0UHJvdmlkZXI6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFttYXBTdGF0ZSwgbWFwRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihtYXBSZWR1Y2VyLCBNYXBTdGF0ZUluaXRpYWwpO1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IFtmZXRjaE1hcHMsIHsgZGF0YSwgZXJyb3IgfV0gPSB1c2VMYXp5UXVlcnkoUXVlcnlVc2VyTWFwc0dRTCwge1xyXG4gICAgb25FcnJvcihlcnJvcikge1xyXG4gICAgICBBcHBUb2FzdGVyPy5zaG93KHtcclxuICAgICAgICBpbnRlbnQ6IEludGVudC5EQU5HRVIsXHJcbiAgICAgICAgbWVzc2FnZTogYFd5c3TEhXBpxYIgcHJvYmxlbSB6IHR3b2rEhSBzZXNqxIUsIHpvc3RhxYJlxZsgd3lsb2dvd2FueS4gJHtlcnJvcn1gLFxyXG4gICAgICB9KTtcclxuICAgICAgc2lnbk91dCgpO1xyXG4gICAgfSxcclxuICAgIG9uQ29tcGxldGVkKGRhdGE6IHsgbWU6IFVzZXIgfSkge1xyXG4gICAgICBtYXBEaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogXCJmZXRjaE1hcFwiLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIGRhdGE6IGRhdGEubWU/Lm1hcHNDcmVhdGVkPy5tYXAoKG1hcCkgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IG1hcC5pZCxcclxuICAgICAgICAgICAgY29sb3I6IG1hcC5jb2xvcixcclxuICAgICAgICAgICAgaWNvbjogbWFwLmljb24sXHJcbiAgICAgICAgICAgIG5hbWU6IG1hcC5uYW1lLFxyXG4gICAgICAgICAgfSkpISxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2Vzc2lvbikge1xyXG4gICAgICBmZXRjaE1hcHMoKTtcclxuICAgIH1cclxuICB9LCBbc2Vzc2lvbl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1hcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbWFwU3RhdGUsIG1hcERpc3BhdGNoIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L01hcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNYXBDb250ZXh0KCkge1xyXG4gIGNvbnN0IG1hcENvbnRleHQgPSB1c2VDb250ZXh0KE1hcENvbnRleHQpO1xyXG4gIGlmICghbWFwQ29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiQ29tcG9uZW50IGJleW9uZCBNYXBDb250ZXh0IVwiKTtcclxuICByZXR1cm4gbWFwQ29udGV4dDtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWR1Y2VyIiwidXNlU2Vzc2lvbiIsInNpZ25PdXQiLCJ1c2VMYXp5UXVlcnkiLCJRdWVyeVVzZXJNYXBzR1FMIiwiQXBwVG9hc3RlciIsIkludGVudCIsIk1hcENvbnRleHQiLCJ1bmRlZmluZWQiLCJNYXBTdGF0ZUluaXRpYWwiLCJtYXBzIiwibWFwUmVmIiwiY3VycmVudE1hcCIsIm1hcFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwicmVmIiwiZGF0YSIsIk1hcENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwibWFwU3RhdGUiLCJtYXBEaXNwYXRjaCIsInNlc3Npb24iLCJvbkVycm9yIiwiZXJyb3IiLCJzaG93IiwiaW50ZW50IiwiREFOR0VSIiwibWVzc2FnZSIsIm9uQ29tcGxldGVkIiwibWUiLCJtYXBzQ3JlYXRlZCIsIm1hcCIsImlkIiwiY29sb3IiLCJpY29uIiwibmFtZSIsImZldGNoTWFwcyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VNYXBDb250ZXh0IiwibWFwQ29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/MapContext.tsx\n");

/***/ })

});