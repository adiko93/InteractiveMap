"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SideUi/FoldersPanel.tsx":
/*!************************************************!*\
  !*** ./src/components/SideUi/FoldersPanel.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FoldersPanel\": function() { return /* binding */ FoldersPanel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ \"./node_modules/@blueprintjs/core/lib/esm/index.js\");\n/* harmony import */ var _context_MapContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/MapContext */ \"./src/context/MapContext.tsx\");\n/* harmony import */ var _context_EntitiesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/EntitiesContext */ \"./src/context/EntitiesContext.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar FoldersPanel = function() {\n    var _this1 = _this;\n    _s();\n    var ref4 = (0,_context_MapContext__WEBPACK_IMPORTED_MODULE_2__.useMapContext)(), mapState = ref4.mapState, mapDispatch = ref4.mapDispatch;\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(false), 2), test1 = ref1[0], setTest = ref1[1];\n    var ref2 = (0,_context_EntitiesContext__WEBPACK_IMPORTED_MODULE_3__.useEntitiesContext)(), entitiesDispatch = ref2.entitiesDispatch, entitiesState = ref2.entitiesState;\n    var renderFolder = function(folder1) {\n        var _this3 = _this1;\n        var ref, ref3;\n        var contents = [];\n        (ref = folder1.childs) === null || ref === void 0 ? void 0 : ref.forEach(function(folder, index) {\n            var _this2 = _this3;\n            contents.push({\n                id: folder.id,\n                label: folder.name,\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                    icon: folder.icon,\n                    intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Intent.PRIMARY,\n                    className: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Classes.TREE_NODE_ICON,\n                    color: folder.color\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\GTA5MAP\\\\gtamap\\\\src\\\\components\\\\SideUi\\\\FoldersPanel.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, _this3),\n                secondaryLabel: function(props) {\n                    console.log(test1);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Checkbox, {\n                        checked: props.nodeData.isVisible,\n                        onChange: function() {\n                            return entitiesDispatch({\n                                type: \"SET_SELECT_VISIBLE\",\n                                payload: {\n                                    id: props.id,\n                                    isFolder: true\n                                }\n                            });\n                        },\n                        style: {\n                            marginBottom: \"0\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\GTA5MAP\\\\gtamap\\\\src\\\\components\\\\SideUi\\\\FoldersPanel.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, _this2);\n                },\n                childNodes: renderFolder(folder),\n                isExpanded: false,\n                hasCaret: true,\n                nodeData: {\n                    isVisible: true\n                }\n            });\n        });\n        (ref3 = folder1.entities) === null || ref3 === void 0 ? void 0 : ref3.forEach(function(entity, index) {\n            contents.push({\n                id: entity.id,\n                label: entity.name,\n                nodeData: {\n                    isVisible: true\n                },\n                secondaryLabel: function(test) {\n                    return console.log(test);\n                },\n                //   <Checkbox\n                //     style={{\n                //       marginBottom: \"0\",\n                //     }}\n                //     checked={test}\n                //     onChange={() => {\n                //       console.log(\"runs\");\n                //       setTest((t) => true);\n                //       // entitiesDispatch({\n                //       //   type: \"SET_SELECT_VISIBLE\",\n                //       //   payload: {\n                //       //     id: entity.id!,\n                //       //     isFolder: false,\n                //       //   },\n                //       // });\n                //     }}\n                //   />\n                // ),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                    icon: entity.icon,\n                    intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Intent.PRIMARY,\n                    className: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Classes.TREE_NODE_ICON,\n                    color: entity.color\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\GTA5MAP\\\\gtamap\\\\src\\\\components\\\\SideUi\\\\FoldersPanel.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 11\n                }, _this3)\n            });\n        });\n        return contents;\n    };\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function() {\n        if (mapState.currentFolder) entitiesDispatch({\n            type: \"FETCH\",\n            payload: {\n                data: renderFolder(mapState.currentFolder)\n            }\n        });\n    }, [\n        mapState.currentFolder\n    ]);\n    var handleNodeClick = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function(node, nodePath, e) {\n        var originallySelected = node.isSelected;\n        if (!e.shiftKey) {\n            entitiesDispatch({\n                type: \"DESELECT_ALL\"\n            });\n        }\n        entitiesDispatch({\n            payload: {\n                path: nodePath,\n                isSelected: originallySelected == null ? true : !originallySelected\n            },\n            type: \"SET_IS_SELECTED\"\n        });\n    }, []);\n    var handleNodeCollapse = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function(_node, nodePath) {\n        entitiesDispatch({\n            payload: {\n                path: nodePath,\n                isExpanded: false\n            },\n            type: \"SET_IS_EXPANDED\"\n        });\n    }, []);\n    var handleNodeExpand = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function(_node, nodePath) {\n        entitiesDispatch({\n            payload: {\n                path: nodePath,\n                isExpanded: true\n            },\n            type: \"SET_IS_EXPANDED\"\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Tree, {\n            contents: entitiesState,\n            onNodeClick: handleNodeClick,\n            onNodeCollapse: handleNodeCollapse,\n            onNodeExpand: handleNodeExpand,\n            className: \"bp4-dark\"\n        }, void 0, false, {\n            fileName: \"E:\\\\Projects\\\\GTA5MAP\\\\gtamap\\\\src\\\\components\\\\SideUi\\\\FoldersPanel.tsx\",\n            lineNumber: 150,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\GTA5MAP\\\\gtamap\\\\src\\\\components\\\\SideUi\\\\FoldersPanel.tsx\",\n        lineNumber: 149,\n        columnNumber: 5\n    }, _this);\n};\n_s(FoldersPanel, \"qeHRM3sRHKHAHtjVigm3bUuPHCk=\", false, function() {\n    return [\n        _context_MapContext__WEBPACK_IMPORTED_MODULE_2__.useMapContext,\n        _context_EntitiesContext__WEBPACK_IMPORTED_MODULE_3__.useEntitiesContext\n    ];\n});\n_c = FoldersPanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FoldersPanel);\nvar _c;\n$RefreshReg$(_c, \"FoldersPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWRlVWkvRm9sZGVyc1BhbmVsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFTSjtBQUM4QjtBQUVVOztBQUc1RCxJQUFNUSxZQUFZLEdBQTRDLFdBQU07OztJQUN6RSxJQUFrQ0YsSUFBZSxHQUFmQSxrRUFBYSxFQUFFLEVBQXpDRyxRQUFRLEdBQWtCSCxJQUFlLENBQXpDRyxRQUFRLEVBQUVDLFdBQVcsR0FBS0osSUFBZSxDQUEvQkksV0FBVztJQUM3QixJQUF3QlYsSUFBcUIsa0JBQXJCQSwyQ0FBYyxDQUFDLEtBQUssQ0FBQyxNQUF0Q1ksS0FBSSxHQUFhWixJQUFxQixHQUFsQyxFQUFFYSxPQUFPLEdBQUliLElBQXFCLEdBQXpCO0lBQ3BCLElBQTRDTyxJQUFvQixHQUFwQkEsNEVBQWtCLEVBQUUsRUFBeERPLGdCQUFnQixHQUFvQlAsSUFBb0IsQ0FBeERPLGdCQUFnQixFQUFFQyxhQUFhLEdBQUtSLElBQW9CLENBQXRDUSxhQUFhO0lBRXZDLElBQU1DLFlBQVksR0FBdUMsU0FBQ0MsT0FBTSxFQUFLOztZQUVuRUEsR0FBYSxFQW1DYkEsSUFBZTtRQXBDZixJQUFNQyxRQUFRLEdBQW1CLEVBQUU7UUFDbkNELENBQUFBLEdBQWEsR0FBYkEsT0FBTSxDQUFDRSxNQUFNLGNBQWJGLEdBQWEsV0FBUyxHQUF0QkEsS0FBQUEsQ0FBc0IsR0FBdEJBLEdBQWEsQ0FBRUcsT0FBTyxDQUFDLFNBQUNILE1BQU0sRUFBRUksS0FBSyxFQUFLOztZQUN4Q0gsUUFBUSxDQUFDSSxJQUFJLENBQUM7Z0JBQ1pDLEVBQUUsRUFBRU4sTUFBTSxDQUFDTSxFQUFFO2dCQUNiQyxLQUFLLEVBQUVQLE1BQU0sQ0FBQ1EsSUFBSTtnQkFDbEJDLElBQUksZ0JBQ0YsOERBQUN4QixtREFBSTtvQkFDSHdCLElBQUksRUFBRVQsTUFBTSxDQUFDUyxJQUFJO29CQUNqQkMsTUFBTSxFQUFFeEIsNkRBQWM7b0JBQ3RCMEIsU0FBUyxFQUFFNUIscUVBQXNCO29CQUNqQzhCLEtBQUssRUFBRWQsTUFBTSxDQUFDYyxLQUFLOzs7OzswQkFDbkI7Z0JBRUpDLGNBQWMsRUFBRSxTQUFDQyxLQUFLLEVBQUs7b0JBQ3pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ3ZCLEtBQUksQ0FBQyxDQUFDO29CQUNsQixxQkFDRSw4REFBQ1AsdURBQVE7d0JBQ1ArQixPQUFPLEVBQUVILEtBQUssQ0FBQ0ksUUFBUSxDQUFDQyxTQUFTO3dCQUNqQ0MsUUFBUSxFQUFFO21DQUNSekIsZ0JBQWdCLENBQUM7Z0NBQ2YwQixJQUFJLEVBQUUsb0JBQW9CO2dDQUMxQkMsT0FBTyxFQUFFO29DQUFFbEIsRUFBRSxFQUFFVSxLQUFLLENBQUNWLEVBQUU7b0NBQUVtQixRQUFRLEVBQUUsSUFBSTtpQ0FBRTs2QkFDMUMsQ0FBQzt5QkFBQTt3QkFFSkMsS0FBSyxFQUFFOzRCQUFFQyxZQUFZLEVBQUUsR0FBRzt5QkFBRTs7Ozs7OEJBQzVCLENBQ0Y7aUJBQ0g7Z0JBQ0RDLFVBQVUsRUFBRTdCLFlBQVksQ0FBQ0MsTUFBTSxDQUFDO2dCQUNoQzZCLFVBQVUsRUFBRSxLQUFLO2dCQUNqQkMsUUFBUSxFQUFFLElBQUk7Z0JBQ2RWLFFBQVEsRUFBRTtvQkFDUkMsU0FBUyxFQUFFLElBQUk7aUJBQ2hCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBQ0hyQixDQUFBQSxJQUFlLEdBQWZBLE9BQU0sQ0FBQytCLFFBQVEsY0FBZi9CLElBQWUsV0FBUyxHQUF4QkEsS0FBQUEsQ0FBd0IsR0FBeEJBLElBQWUsQ0FBRUcsT0FBTyxDQUFDLFNBQUM2QixNQUFNLEVBQUU1QixLQUFLLEVBQUs7WUFDMUNILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDO2dCQUNaQyxFQUFFLEVBQUUwQixNQUFNLENBQUMxQixFQUFFO2dCQUNiQyxLQUFLLEVBQUV5QixNQUFNLENBQUN4QixJQUFJO2dCQUNsQlksUUFBUSxFQUFFO29CQUNSQyxTQUFTLEVBQUUsSUFBSTtpQkFDaEI7Z0JBQ0ROLGNBQWMsRUFBRSxTQUFDcEIsSUFBSTsyQkFBS3NCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdkIsSUFBSSxDQUFDO2lCQUFBO2dCQUMzQyxjQUFjO2dCQUNkLGVBQWU7Z0JBQ2YsMkJBQTJCO2dCQUMzQixTQUFTO2dCQUNULHFCQUFxQjtnQkFDckIsd0JBQXdCO2dCQUN4Qiw2QkFBNkI7Z0JBQzdCLDhCQUE4QjtnQkFDOUIsOEJBQThCO2dCQUM5Qix5Q0FBeUM7Z0JBQ3pDLHdCQUF3QjtnQkFDeEIsK0JBQStCO2dCQUMvQixnQ0FBZ0M7Z0JBQ2hDLGdCQUFnQjtnQkFDaEIsZUFBZTtnQkFDZixTQUFTO2dCQUNULE9BQU87Z0JBQ1AsS0FBSztnQkFDTGMsSUFBSSxnQkFDRiw4REFBQ3hCLG1EQUFJO29CQUNId0IsSUFBSSxFQUFFdUIsTUFBTSxDQUFDdkIsSUFBSTtvQkFDakJDLE1BQU0sRUFBRXhCLDZEQUFjO29CQUN0QjBCLFNBQVMsRUFBRTVCLHFFQUFzQjtvQkFDakM4QixLQUFLLEVBQUVrQixNQUFNLENBQUNsQixLQUFLOzs7OzswQkFDbkI7YUFFTCxDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7UUFDSCxPQUFPYixRQUFRLENBQUM7S0FDakI7SUFFRGxCLDRDQUFlLENBQUMsV0FBTTtRQUNwQixJQUFJUyxRQUFRLENBQUMwQyxhQUFhLEVBQ3hCckMsZ0JBQWdCLENBQUM7WUFDZjBCLElBQUksRUFBRSxPQUFPO1lBQ2JDLE9BQU8sRUFBRTtnQkFDUFcsSUFBSSxFQUFFcEMsWUFBWSxDQUFDUCxRQUFRLENBQUMwQyxhQUFhLENBQVc7YUFDckQ7U0FDRixDQUFDLENBQUM7S0FDTixFQUFFO1FBQUMxQyxRQUFRLENBQUMwQyxhQUFhO0tBQUMsQ0FBQyxDQUFDO0lBRTdCLElBQU1FLGVBQWUsR0FBR3JELDhDQUFpQixDQUN2QyxTQUNFdUQsSUFBa0IsRUFDbEJDLFFBQWtCLEVBQ2xCQyxDQUFnQyxFQUM3QjtRQUNILElBQU1DLGtCQUFrQixHQUFHSCxJQUFJLENBQUNJLFVBQVU7UUFDMUMsSUFBSSxDQUFDRixDQUFDLENBQUNHLFFBQVEsRUFBRTtZQUNmOUMsZ0JBQWdCLENBQUM7Z0JBQUUwQixJQUFJLEVBQUUsY0FBYzthQUFFLENBQUMsQ0FBQztTQUM1QztRQUNEMUIsZ0JBQWdCLENBQUM7WUFDZjJCLE9BQU8sRUFBRTtnQkFDUG9CLElBQUksRUFBRUwsUUFBUTtnQkFDZEcsVUFBVSxFQUFFRCxrQkFBa0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUNBLGtCQUFrQjthQUNwRTtZQUNEbEIsSUFBSSxFQUFFLGlCQUFpQjtTQUN4QixDQUFDLENBQUM7S0FDSixFQUNELEVBQUUsQ0FDSDtJQUVELElBQU1zQixrQkFBa0IsR0FBRzlELDhDQUFpQixDQUMxQyxTQUFDK0QsS0FBbUIsRUFBRVAsUUFBa0IsRUFBSztRQUMzQzFDLGdCQUFnQixDQUFDO1lBQ2YyQixPQUFPLEVBQUU7Z0JBQUVvQixJQUFJLEVBQUVMLFFBQVE7Z0JBQUVWLFVBQVUsRUFBRSxLQUFLO2FBQUU7WUFDOUNOLElBQUksRUFBRSxpQkFBaUI7U0FDeEIsQ0FBQyxDQUFDO0tBQ0osRUFDRCxFQUFFLENBQ0g7SUFFRCxJQUFNd0IsZ0JBQWdCLEdBQUdoRSw4Q0FBaUIsQ0FDeEMsU0FBQytELEtBQW1CLEVBQUVQLFFBQWtCLEVBQUs7UUFDM0MxQyxnQkFBZ0IsQ0FBQztZQUNmMkIsT0FBTyxFQUFFO2dCQUFFb0IsSUFBSSxFQUFFTCxRQUFRO2dCQUFFVixVQUFVLEVBQUUsSUFBSTthQUFFO1lBQzdDTixJQUFJLEVBQUUsaUJBQWlCO1NBQ3hCLENBQUMsQ0FBQztLQUNKLEVBQ0QsRUFBRSxDQUNIO0lBRUQscUJBQ0UsOERBQUN5QixLQUFHO2tCQUNGLDRFQUFDN0QsbURBQUk7WUFDSGMsUUFBUSxFQUFFSCxhQUFhO1lBQ3ZCbUQsV0FBVyxFQUFFYixlQUFlO1lBQzVCYyxjQUFjLEVBQUVMLGtCQUFrQjtZQUNsQ00sWUFBWSxFQUFFSixnQkFBZ0I7WUFDOUJuQyxTQUFTLEVBQUMsVUFBVTs7Ozs7aUJBQ3BCOzs7OzthQUNFLENBQ047Q0FDSCxDQUFDO0dBL0lXckIsWUFBWTs7UUFDV0YsOERBQWE7UUFFSEMsd0VBQWtCOzs7QUFIbkRDLEtBQUFBLFlBQVk7QUFpSnpCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lkZVVpL0ZvbGRlcnNQYW5lbC50c3g/Y2ZmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBDbGFzc2VzLFxyXG4gIEljb24sXHJcbiAgSW50ZW50LFxyXG4gIFRyZWVOb2RlSW5mbyxcclxuICBUcmVlLFxyXG4gIENoZWNrYm94LFxyXG4gIFBhbmVsUHJvcHMsXHJcbn0gZnJvbSBcIkBibHVlcHJpbnRqcy9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZU1hcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9NYXBDb250ZXh0XCI7XHJcbmltcG9ydCB7IEZvbGRlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQgeyB1c2VFbnRpdGllc0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9FbnRpdGllc0NvbnRleHRcIjtcclxuaW1wb3J0IHsgTm9kZVBhdGggfSBmcm9tIFwiLi4vLi4vdHlwZXMvRW50aXRpZXNDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgRm9sZGVyc1BhbmVsOiBSZWFjdC5GQzxQYW5lbFByb3BzPHsgbWFwSWQ6IHN0cmluZyB9Pj4gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBtYXBTdGF0ZSwgbWFwRGlzcGF0Y2ggfSA9IHVzZU1hcENvbnRleHQoKTtcclxuICBjb25zdCBbdGVzdCwgc2V0VGVzdF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBlbnRpdGllc0Rpc3BhdGNoLCBlbnRpdGllc1N0YXRlIH0gPSB1c2VFbnRpdGllc0NvbnRleHQoKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRm9sZGVyOiAoZm9sZGVyOiBGb2xkZXIpID0+IFRyZWVOb2RlSW5mb1tdID0gKGZvbGRlcikgPT4ge1xyXG4gICAgY29uc3QgY29udGVudHM6IFRyZWVOb2RlSW5mb1tdID0gW107XHJcbiAgICBmb2xkZXIuY2hpbGRzPy5mb3JFYWNoKChmb2xkZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnRlbnRzLnB1c2goe1xyXG4gICAgICAgIGlkOiBmb2xkZXIuaWQhLFxyXG4gICAgICAgIGxhYmVsOiBmb2xkZXIubmFtZSEsXHJcbiAgICAgICAgaWNvbjogKFxyXG4gICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgaWNvbj17Zm9sZGVyLmljb259XHJcbiAgICAgICAgICAgIGludGVudD17SW50ZW50LlBSSU1BUll9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Q2xhc3Nlcy5UUkVFX05PREVfSUNPTn1cclxuICAgICAgICAgICAgY29sb3I9e2ZvbGRlci5jb2xvcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSxcclxuICAgICAgICBzZWNvbmRhcnlMYWJlbDogKHByb3BzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0ZXN0KTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3Byb3BzLm5vZGVEYXRhLmlzVmlzaWJsZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgIGVudGl0aWVzRGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIlNFVF9TRUxFQ1RfVklTSUJMRVwiLFxyXG4gICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7IGlkOiBwcm9wcy5pZCwgaXNGb2xkZXI6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIwXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGlsZE5vZGVzOiByZW5kZXJGb2xkZXIoZm9sZGVyKSxcclxuICAgICAgICBpc0V4cGFuZGVkOiBmYWxzZSxcclxuICAgICAgICBoYXNDYXJldDogdHJ1ZSxcclxuICAgICAgICBub2RlRGF0YToge1xyXG4gICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBmb2xkZXIuZW50aXRpZXM/LmZvckVhY2goKGVudGl0eSwgaW5kZXgpID0+IHtcclxuICAgICAgY29udGVudHMucHVzaCh7XHJcbiAgICAgICAgaWQ6IGVudGl0eS5pZCEsXHJcbiAgICAgICAgbGFiZWw6IGVudGl0eS5uYW1lISxcclxuICAgICAgICBub2RlRGF0YToge1xyXG4gICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Vjb25kYXJ5TGFiZWw6ICh0ZXN0KSA9PiBjb25zb2xlLmxvZyh0ZXN0KSxcclxuICAgICAgICAvLyAgIDxDaGVja2JveFxyXG4gICAgICAgIC8vICAgICBzdHlsZT17e1xyXG4gICAgICAgIC8vICAgICAgIG1hcmdpbkJvdHRvbTogXCIwXCIsXHJcbiAgICAgICAgLy8gICAgIH19XHJcbiAgICAgICAgLy8gICAgIGNoZWNrZWQ9e3Rlc3R9XHJcbiAgICAgICAgLy8gICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2coXCJydW5zXCIpO1xyXG4gICAgICAgIC8vICAgICAgIHNldFRlc3QoKHQpID0+IHRydWUpO1xyXG4gICAgICAgIC8vICAgICAgIC8vIGVudGl0aWVzRGlzcGF0Y2goe1xyXG4gICAgICAgIC8vICAgICAgIC8vICAgdHlwZTogXCJTRVRfU0VMRUNUX1ZJU0lCTEVcIixcclxuICAgICAgICAvLyAgICAgICAvLyAgIHBheWxvYWQ6IHtcclxuICAgICAgICAvLyAgICAgICAvLyAgICAgaWQ6IGVudGl0eS5pZCEsXHJcbiAgICAgICAgLy8gICAgICAgLy8gICAgIGlzRm9sZGVyOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gICAgIH19XHJcbiAgICAgICAgLy8gICAvPlxyXG4gICAgICAgIC8vICksXHJcbiAgICAgICAgaWNvbjogKFxyXG4gICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgaWNvbj17ZW50aXR5Lmljb259XHJcbiAgICAgICAgICAgIGludGVudD17SW50ZW50LlBSSU1BUll9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Q2xhc3Nlcy5UUkVFX05PREVfSUNPTn1cclxuICAgICAgICAgICAgY29sb3I9e2VudGl0eS5jb2xvcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjb250ZW50cztcclxuICB9O1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG1hcFN0YXRlLmN1cnJlbnRGb2xkZXIpXHJcbiAgICAgIGVudGl0aWVzRGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFwiRkVUQ0hcIixcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBkYXRhOiByZW5kZXJGb2xkZXIobWFwU3RhdGUuY3VycmVudEZvbGRlciBhcyBGb2xkZXIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIH0sIFttYXBTdGF0ZS5jdXJyZW50Rm9sZGVyXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5vZGVDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKFxyXG4gICAgICBub2RlOiBUcmVlTm9kZUluZm8sXHJcbiAgICAgIG5vZGVQYXRoOiBOb2RlUGF0aCxcclxuICAgICAgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD5cclxuICAgICkgPT4ge1xyXG4gICAgICBjb25zdCBvcmlnaW5hbGx5U2VsZWN0ZWQgPSBub2RlLmlzU2VsZWN0ZWQ7XHJcbiAgICAgIGlmICghZS5zaGlmdEtleSkge1xyXG4gICAgICAgIGVudGl0aWVzRGlzcGF0Y2goeyB0eXBlOiBcIkRFU0VMRUNUX0FMTFwiIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVudGl0aWVzRGlzcGF0Y2goe1xyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHBhdGg6IG5vZGVQYXRoLFxyXG4gICAgICAgICAgaXNTZWxlY3RlZDogb3JpZ2luYWxseVNlbGVjdGVkID09IG51bGwgPyB0cnVlIDogIW9yaWdpbmFsbHlTZWxlY3RlZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IFwiU0VUX0lTX1NFTEVDVEVEXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTm9kZUNvbGxhcHNlID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAoX25vZGU6IFRyZWVOb2RlSW5mbywgbm9kZVBhdGg6IE5vZGVQYXRoKSA9PiB7XHJcbiAgICAgIGVudGl0aWVzRGlzcGF0Y2goe1xyXG4gICAgICAgIHBheWxvYWQ6IHsgcGF0aDogbm9kZVBhdGgsIGlzRXhwYW5kZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgdHlwZTogXCJTRVRfSVNfRVhQQU5ERURcIixcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVOb2RlRXhwYW5kID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAoX25vZGU6IFRyZWVOb2RlSW5mbywgbm9kZVBhdGg6IE5vZGVQYXRoKSA9PiB7XHJcbiAgICAgIGVudGl0aWVzRGlzcGF0Y2goe1xyXG4gICAgICAgIHBheWxvYWQ6IHsgcGF0aDogbm9kZVBhdGgsIGlzRXhwYW5kZWQ6IHRydWUgfSxcclxuICAgICAgICB0eXBlOiBcIlNFVF9JU19FWFBBTkRFRFwiLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8VHJlZVxyXG4gICAgICAgIGNvbnRlbnRzPXtlbnRpdGllc1N0YXRlfVxyXG4gICAgICAgIG9uTm9kZUNsaWNrPXtoYW5kbGVOb2RlQ2xpY2t9XHJcbiAgICAgICAgb25Ob2RlQ29sbGFwc2U9e2hhbmRsZU5vZGVDb2xsYXBzZX1cclxuICAgICAgICBvbk5vZGVFeHBhbmQ9e2hhbmRsZU5vZGVFeHBhbmR9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnA0LWRhcmtcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGRlcnNQYW5lbDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2xhc3NlcyIsIkljb24iLCJJbnRlbnQiLCJUcmVlIiwiQ2hlY2tib3giLCJ1c2VNYXBDb250ZXh0IiwidXNlRW50aXRpZXNDb250ZXh0IiwiRm9sZGVyc1BhbmVsIiwibWFwU3RhdGUiLCJtYXBEaXNwYXRjaCIsInVzZVN0YXRlIiwidGVzdCIsInNldFRlc3QiLCJlbnRpdGllc0Rpc3BhdGNoIiwiZW50aXRpZXNTdGF0ZSIsInJlbmRlckZvbGRlciIsImZvbGRlciIsImNvbnRlbnRzIiwiY2hpbGRzIiwiZm9yRWFjaCIsImluZGV4IiwicHVzaCIsImlkIiwibGFiZWwiLCJuYW1lIiwiaWNvbiIsImludGVudCIsIlBSSU1BUlkiLCJjbGFzc05hbWUiLCJUUkVFX05PREVfSUNPTiIsImNvbG9yIiwic2Vjb25kYXJ5TGFiZWwiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJjaGVja2VkIiwibm9kZURhdGEiLCJpc1Zpc2libGUiLCJvbkNoYW5nZSIsInR5cGUiLCJwYXlsb2FkIiwiaXNGb2xkZXIiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImNoaWxkTm9kZXMiLCJpc0V4cGFuZGVkIiwiaGFzQ2FyZXQiLCJlbnRpdGllcyIsImVudGl0eSIsInVzZUVmZmVjdCIsImN1cnJlbnRGb2xkZXIiLCJkYXRhIiwiaGFuZGxlTm9kZUNsaWNrIiwidXNlQ2FsbGJhY2siLCJub2RlIiwibm9kZVBhdGgiLCJlIiwib3JpZ2luYWxseVNlbGVjdGVkIiwiaXNTZWxlY3RlZCIsInNoaWZ0S2V5IiwicGF0aCIsImhhbmRsZU5vZGVDb2xsYXBzZSIsIl9ub2RlIiwiaGFuZGxlTm9kZUV4cGFuZCIsImRpdiIsIm9uTm9kZUNsaWNrIiwib25Ob2RlQ29sbGFwc2UiLCJvbk5vZGVFeHBhbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SideUi/FoldersPanel.tsx\n");

/***/ })

});