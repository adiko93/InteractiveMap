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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MapContextProvider\": function() { return /* binding */ MapContextProvider; },\n/* harmony export */   \"useMapContext\": function() { return /* binding */ useMapContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _graphql_client_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphql/client/queries */ \"./graphql/client/queries.ts\");\n/* harmony import */ var _components_Toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Toaster */ \"./src/components/Toaster/index.ts\");\n/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blueprintjs/core */ \"./node_modules/@blueprintjs/core/lib/esm/index.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s2, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s2 = _i.next()).done); _n = true){\n            _arr.push(_s2.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n// src/context/state.js\n\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar MapContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nvar MapStateInitial = {\n    maps: [],\n    mapRef: null,\n    currentMap: null,\n    refetchFolders: null\n};\nvar mapReducer = function(state, action) {\n    switch(action.type){\n        case \"setMapRef\":\n            return _objectSpread({}, state, {\n                mapRef: action.payload.ref\n            });\n        case \"fetchMap\":\n            return _objectSpread({}, state, {\n                maps: action.payload.data\n            });\n        case \"currentMap\":\n            return _objectSpread({}, state, {\n                currentMap: action.payload.data\n            });\n        case \"setRefetchFolders\":\n            return _objectSpread({}, state, {\n                refetchFolders: action.payload.data\n            });\n        default:\n            return state;\n    }\n};\nvar MapContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(mapReducer, MapStateInitial), mapState = ref5[0], mapDispatch = ref5[1];\n    var ref1 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(), session = ref1.data;\n    var ref2 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useLazyQuery)(_graphql_client_queries__WEBPACK_IMPORTED_MODULE_3__.QueryUserMapsGQL, {\n        onError: function onError(error) {\n            _components_Toaster__WEBPACK_IMPORTED_MODULE_4__.AppToaster === null || _components_Toaster__WEBPACK_IMPORTED_MODULE_4__.AppToaster === void 0 ? void 0 : _components_Toaster__WEBPACK_IMPORTED_MODULE_4__.AppToaster.show({\n                intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.Intent.DANGER,\n                message: \"Wyst\\u0105pi\\u0142 problem z twoj\\u0105 sesj\\u0105, zosta\\u0142e\\u015B wylogowany. \".concat(error)\n            });\n            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n        },\n        onCompleted: function onCompleted(data) {\n            var ref, ref4;\n            mapDispatch({\n                type: \"fetchMap\",\n                payload: {\n                    data: (ref = data.me) === null || ref === void 0 ? void 0 : (ref4 = ref.mapsCreated) === null || ref4 === void 0 ? void 0 : ref4.map(function(map) {\n                        return {\n                            id: map.id,\n                            color: map.color,\n                            icon: map.icon,\n                            name: map.name\n                        };\n                    })\n                }\n            });\n        }\n    }), 2), fetchMaps = ref2[0], ref3 = ref2[1], data1 = ref3.data, error1 = ref3.error;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (session) {\n            fetchMaps();\n        }\n    }, [\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MapContext.Provider, {\n        value: {\n            mapState: mapState,\n            mapDispatch: mapDispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\GTA5MAP\\\\gtamap\\\\src\\\\context\\\\MapContext.tsx\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, _this);\n};\n_s(MapContextProvider, \"2DJ/5HD8QX/s/C9Eg23l2yRoPRo=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useLazyQuery\n    ];\n});\n_c = MapContextProvider;\nfunction useMapContext() {\n    _s1();\n    var mapContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);\n    if (!mapContext) throw new Error(\"Component beyond MapContext!\");\n    return mapContext;\n}\n_s1(useMapContext, \"T+/jitUWQ0G+8P8wsbuBNXfyHdI=\");\nvar _c;\n$RefreshReg$(_c, \"MapContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUVKLEdBQUcsQ0FBQ0ksSUFBSTt5QkFDZjtxQkFBQyxDQUFDO2lCQUNKO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7S0FDRixDQUFDLE1BckJLQyxTQUFTLEdBQXFCckMsSUFxQm5DLEdBckJjLFNBQXFCQSxJQXFCbkMsS0FyQmtCaUIsS0FBSSxRQUFKQSxJQUFJLEVBQUVPLE1BQUssUUFBTEEsS0FBSztJQXVCL0I1QixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJMEIsT0FBTyxFQUFFO1lBQ1hlLFNBQVMsRUFBRSxDQUFDO1NBQ2I7S0FDRixFQUFFO1FBQUNmLE9BQU87S0FBQyxDQUFDLENBQUM7SUFFZCxxQkFDRSw4REFBQ2xCLFVBQVUsQ0FBQ2tDLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQUVuQixRQUFRLEVBQVJBLFFBQVE7WUFBRUMsV0FBVyxFQUFYQSxXQUFXO1NBQUU7a0JBQ2xERixRQUFROzs7OzthQUNXLENBQ3RCO0NBQ0gsQ0FBQztHQXJDV0Qsa0JBQWtCOztRQUVIcEIsdURBQVU7UUFDQ0Usd0RBQVk7OztBQUh0Q2tCLEtBQUFBLGtCQUFrQjtBQXVDeEIsU0FBU3NCLGFBQWEsR0FBRzs7SUFDOUIsSUFBTUMsVUFBVSxHQUFHOUMsaURBQVUsQ0FBQ1MsVUFBVSxDQUFDO0lBQ3pDLElBQUksQ0FBQ3FDLFVBQVUsRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ2pFLE9BQU9ELFVBQVUsQ0FBQztDQUNuQjtJQUplRCxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L01hcENvbnRleHQudHN4P2MzMmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2NvbnRleHQvc3RhdGUuanNcclxuaW1wb3J0IHtcclxuICBjcmVhdGVDb250ZXh0LFxyXG4gIERpc3BhdGNoLFxyXG4gIE11dGFibGVSZWZPYmplY3QsXHJcbiAgdXNlQ29udGV4dCxcclxuICB1c2VFZmZlY3QsXHJcbiAgdXNlUmVkdWNlcixcclxuICB1c2VTdGF0ZSxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgRm9sZGVyLCBNYXAsIE1hcEFjdGlvbiwgVXNlciB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQge1xyXG4gIEFwb2xsb1F1ZXJ5UmVzdWx0LFxyXG4gIE9wZXJhdGlvblZhcmlhYmxlcyxcclxuICB1c2VMYXp5UXVlcnksXHJcbn0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgUXVlcnlGb2xkZXJzR1FMLFxyXG4gIFF1ZXJ5VXNlck1hcHNHUUwsXHJcbn0gZnJvbSBcIi4uLy4uL2dyYXBocWwvY2xpZW50L3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgQXBwVG9hc3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RvYXN0ZXJcIjtcclxuaW1wb3J0IHsgSW50ZW50IH0gZnJvbSBcIkBibHVlcHJpbnRqcy9jb3JlXCI7XHJcblxyXG5jb25zdCBNYXBDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxNYXBDb250ZXh0IHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuaW50ZXJmYWNlIE1hcENvbnRleHQge1xyXG4gIG1hcFN0YXRlOiBNYXBTdGF0ZTtcclxuICBtYXBEaXNwYXRjaDogRGlzcGF0Y2g8TWFwQWN0aW9uPjtcclxufVxyXG5cclxuaW50ZXJmYWNlIE1hcFN0YXRlIHtcclxuICBtYXBzOiBNYXBbXTtcclxuICBtYXBSZWY6IE11dGFibGVSZWZPYmplY3Q8TC5NYXAgfCBudWxsPiB8IG51bGw7XHJcbiAgY3VycmVudE1hcDogc3RyaW5nIHwgbnVsbDtcclxuICByZWZldGNoRm9sZGVyczpcclxuICAgIHwgKCh2YXJpYWJsZXM/OiBQYXJ0aWFsPE9wZXJhdGlvblZhcmlhYmxlcz4gfCB1bmRlZmluZWQpID0+IFByb21pc2U8XHJcbiAgICAgICAgQXBvbGxvUXVlcnlSZXN1bHQ8e1xyXG4gICAgICAgICAgbWFwOiBNYXA7XHJcbiAgICAgICAgfT5cclxuICAgICAgPilcclxuICAgIHwgbnVsbDtcclxufVxyXG5cclxuY29uc3QgTWFwU3RhdGVJbml0aWFsID0ge1xyXG4gIG1hcHM6IFtdLFxyXG4gIG1hcFJlZjogbnVsbCxcclxuICBjdXJyZW50TWFwOiBudWxsLFxyXG4gIHJlZmV0Y2hGb2xkZXJzOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgbWFwUmVkdWNlciA9IChzdGF0ZTogTWFwU3RhdGUsIGFjdGlvbjogTWFwQWN0aW9uKTogTWFwU3RhdGUgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJzZXRNYXBSZWZcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG1hcFJlZjogYWN0aW9uLnBheWxvYWQucmVmIH07XHJcbiAgICBjYXNlIFwiZmV0Y2hNYXBcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG1hcHM6IGFjdGlvbi5wYXlsb2FkLmRhdGEgfTtcclxuICAgIGNhc2UgXCJjdXJyZW50TWFwXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50TWFwOiBhY3Rpb24ucGF5bG9hZC5kYXRhIH07XHJcbiAgICBjYXNlIFwic2V0UmVmZXRjaEZvbGRlcnNcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlZmV0Y2hGb2xkZXJzOiBhY3Rpb24ucGF5bG9hZC5kYXRhIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1hcENvbnRleHRQcm92aWRlcjogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW21hcFN0YXRlLCBtYXBEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKG1hcFJlZHVjZXIsIE1hcFN0YXRlSW5pdGlhbCk7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc3QgW2ZldGNoTWFwcywgeyBkYXRhLCBlcnJvciB9XSA9IHVzZUxhenlRdWVyeShRdWVyeVVzZXJNYXBzR1FMLCB7XHJcbiAgICBvbkVycm9yKGVycm9yKSB7XHJcbiAgICAgIEFwcFRvYXN0ZXI/LnNob3coe1xyXG4gICAgICAgIGludGVudDogSW50ZW50LkRBTkdFUixcclxuICAgICAgICBtZXNzYWdlOiBgV3lzdMSFcGnFgiBwcm9ibGVtIHogdHdvasSFIHNlc2rEhSwgem9zdGHFgmXFmyB3eWxvZ293YW55LiAke2Vycm9yfWAsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzaWduT3V0KCk7XHJcbiAgICB9LFxyXG4gICAgb25Db21wbGV0ZWQoZGF0YTogeyBtZTogVXNlciB9KSB7XHJcbiAgICAgIG1hcERpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBcImZldGNoTWFwXCIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgZGF0YTogZGF0YS5tZT8ubWFwc0NyZWF0ZWQ/Lm1hcCgobWFwKSA9PiAoe1xyXG4gICAgICAgICAgICBpZDogbWFwLmlkLFxyXG4gICAgICAgICAgICBjb2xvcjogbWFwLmNvbG9yLFxyXG4gICAgICAgICAgICBpY29uOiBtYXAuaWNvbixcclxuICAgICAgICAgICAgbmFtZTogbWFwLm5hbWUsXHJcbiAgICAgICAgICB9KSkhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgIGZldGNoTWFwcygpO1xyXG4gICAgfVxyXG4gIH0sIFtzZXNzaW9uXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBtYXBTdGF0ZSwgbWFwRGlzcGF0Y2ggfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTWFwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1hcENvbnRleHQoKSB7XHJcbiAgY29uc3QgbWFwQ29udGV4dCA9IHVzZUNvbnRleHQoTWFwQ29udGV4dCk7XHJcbiAgaWYgKCFtYXBDb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJDb21wb25lbnQgYmV5b25kIE1hcENvbnRleHQhXCIpO1xyXG4gIHJldHVybiBtYXBDb250ZXh0O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJlZHVjZXIiLCJ1c2VTZXNzaW9uIiwic2lnbk91dCIsInVzZUxhenlRdWVyeSIsIlF1ZXJ5VXNlck1hcHNHUUwiLCJBcHBUb2FzdGVyIiwiSW50ZW50IiwiTWFwQ29udGV4dCIsInVuZGVmaW5lZCIsIk1hcFN0YXRlSW5pdGlhbCIsIm1hcHMiLCJtYXBSZWYiLCJjdXJyZW50TWFwIiwicmVmZXRjaEZvbGRlcnMiLCJtYXBSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsInJlZiIsImRhdGEiLCJNYXBDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsIm1hcFN0YXRlIiwibWFwRGlzcGF0Y2giLCJzZXNzaW9uIiwib25FcnJvciIsImVycm9yIiwic2hvdyIsImludGVudCIsIkRBTkdFUiIsIm1lc3NhZ2UiLCJvbkNvbXBsZXRlZCIsIm1lIiwibWFwc0NyZWF0ZWQiLCJtYXAiLCJpZCIsImNvbG9yIiwiaWNvbiIsIm5hbWUiLCJmZXRjaE1hcHMiLCJQcm92aWRlciIsInZhbHVlIiwidXNlTWFwQ29udGV4dCIsIm1hcENvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/MapContext.tsx\n");

/***/ })

});