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

/***/ "./src/components/Edit/FolderEditOverlay.tsx":
/*!***************************************************!*\
  !*** ./src/components/Edit/FolderEditOverlay.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ \"./node_modules/@blueprintjs/core/lib/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_EntitiesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/EntitiesContext */ \"./src/context/EntitiesContext.tsx\");\n/* harmony import */ var _context_OverlayContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/OverlayContext */ \"./src/context/OverlayContext.tsx\");\n/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Overlay */ \"./src/components/Overlay.tsx\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction FolderEditOverlay() {\n    _s();\n    var ref11 = (0,_context_OverlayContext__WEBPACK_IMPORTED_MODULE_3__.useOverlayContext)(), overlayDispatch = ref11.overlayDispatch, overlayState = ref11.overlayState;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref1[0], setName = ref1[1];\n    var entitiesState = (0,_context_EntitiesContext__WEBPACK_IMPORTED_MODULE_2__.useEntitiesContext)().entitiesState;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), parentFolder = ref2[0], setParentFolder = ref2[1];\n    var getParentFolder = function() {\n        var ref, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10;\n        var node = _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Tree.nodeFromPath(overlayState.folderEditPath, entitiesState);\n        console.log(overlayState.folderEditPath);\n        setParentFolder({\n            id: (ref = node.nodeData) === null || ref === void 0 ? void 0 : (ref3 = ref.parentFolder) === null || ref3 === void 0 ? void 0 : ref3.id,\n            name: ((ref4 = overlayState.folderEditPath) === null || ref4 === void 0 ? void 0 : ref4.length) === 1 ? \"Root\" : (ref5 = node.nodeData) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.parentFolder) === null || ref6 === void 0 ? void 0 : ref6.name,\n            icon: (ref7 = node.nodeData) === null || ref7 === void 0 ? void 0 : (ref8 = ref7.parentFolder) === null || ref8 === void 0 ? void 0 : ref8.icon,\n            color: (ref9 = node.nodeData) === null || ref9 === void 0 ? void 0 : (ref10 = ref9.parentFolder) === null || ref10 === void 0 ? void 0 : ref10.color\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (overlayState.folderEdit) getParentFolder();\n    }, [\n        overlayState.folderEditPath\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Overlay__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        isOpen: overlayState.folderEdit,\n        onClose: function() {\n            return overlayDispatch({\n                type: \"closeFolderEditOverlay\"\n            });\n        },\n        className: \"markerEdit\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.H3, {\n                children: \"Dodaj folder\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\GTA5MAP\\\\gtamap\\\\src\\\\components\\\\Edit\\\\FolderEditOverlay.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.InputGroup, {\n                placeholder: \"Nazwa\",\n                leftIcon: \"map-marker\",\n                style: {\n                    marginBottom: \"10px\"\n                },\n                value: name,\n                onChange: function(e) {\n                    return setName(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\GTA5MAP\\\\gtamap\\\\src\\\\components\\\\Edit\\\\FolderEditOverlay.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Classes.DIALOG_FOOTER_ACTIONS,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        intent: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Intent.DANGER,\n                        onClick: function() {\n                            return overlayDispatch({\n                                type: \"closeFolderEditOverlay\"\n                            });\n                        },\n                        style: {\n                            margin: \"\"\n                        },\n                        children: \"Anuluj\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\GTA5MAP\\\\gtamap\\\\src\\\\components\\\\Edit\\\\FolderEditOverlay.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        style: {\n                            margin: \"\"\n                        },\n                        onClick: function() {\n                            return console.log(parentFolder);\n                        },\n                        children: \"Zapisz\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\GTA5MAP\\\\gtamap\\\\src\\\\components\\\\Edit\\\\FolderEditOverlay.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\GTA5MAP\\\\gtamap\\\\src\\\\components\\\\Edit\\\\FolderEditOverlay.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projects\\\\GTA5MAP\\\\gtamap\\\\src\\\\components\\\\Edit\\\\FolderEditOverlay.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(FolderEditOverlay, \"FXIbNss8y52D4RZIoeTsUtN0n9k=\", false, function() {\n    return [\n        _context_OverlayContext__WEBPACK_IMPORTED_MODULE_3__.useOverlayContext,\n        _context_EntitiesContext__WEBPACK_IMPORTED_MODULE_2__.useEntitiesContext\n    ];\n});\n_c = FolderEditOverlay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FolderEditOverlay);\nvar _c;\n$RefreshReg$(_c, \"FolderEditOverlay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FZGl0L0ZvbGRlckVkaXRPdmVybGF5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQVEyQjtBQUN3QjtBQUVnQjtBQUNGO0FBQ2hDOztBQVNqQyxTQUFTWSxpQkFBaUIsR0FBRzs7SUFDM0IsSUFBMENGLEtBQW1CLEdBQW5CQSwwRUFBaUIsRUFBRSxFQUFyREcsZUFBZSxHQUFtQkgsS0FBbUIsQ0FBckRHLGVBQWUsRUFBRUMsWUFBWSxHQUFLSixLQUFtQixDQUFwQ0ksWUFBWTtJQUNyQyxJQUF3Qk4sSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQXhCdEMsSUF3QmEsR0FBYUEsSUFBWSxHQUF6QixFQXhCYixPQXdCc0IsR0FBSUEsSUFBWSxHQUFoQjtJQUNwQixJQUFNLGFBQWUsR0FBS0MsNEVBQWtCLEVBQUUsQ0FBdENRLGFBQWE7SUFDckIsSUFBd0NULElBQW1DLEdBQW5DQSwrQ0FBUSxDQUFzQixJQUFJLENBQUMsRUExQjdFLFlBMEJxQixHQUFxQkEsSUFBbUMsR0FBeEQsRUExQnJCLGVBMEJzQyxHQUFJQSxJQUFtQyxHQUF2QztJQUVwQyxJQUFNWSxlQUFlLEdBQUcsV0FBTTtZQUl0QkMsR0FBYSxRQUVmUCxJQUEyQixFQUV2Qk8sSUFBYSxRQUNiQSxJQUFhLFFBQ1pBLElBQWE7UUFUdEIsSUFBTUEsSUFBSSxHQUFHaEIsZ0VBQWlCLENBQUNTLFlBQVksQ0FBQ1MsY0FBYyxFQUFHTixhQUFhLENBQUM7UUFDM0VPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxZQUFZLENBQUNTLGNBQWMsQ0FBQyxDQUFDO1FBQ3pDSixlQUFlLENBQUM7WUFDZE8sRUFBRSxFQUFFTCxDQUFBQSxHQUFhLEdBQWJBLElBQUksQ0FBQ00sUUFBUSxjQUFiTixHQUFhLFdBQWMsR0FBM0JBLEtBQUFBLENBQTJCLEdBQTNCQSxRQUFBQSxHQUFhLENBQUVILFlBQVksZ0NBQTNCRyxLQUFBQSxDQUEyQixRQUFFSyxFQUFFO1lBQ25DWCxJQUFJLEVBQ0ZELENBQUFBLENBQUFBLElBQTJCLEdBQTNCQSxZQUFZLENBQUNTLGNBQWMsY0FBM0JULElBQTJCLFdBQVEsR0FBbkNBLEtBQUFBLENBQW1DLEdBQW5DQSxJQUEyQixDQUFFYyxNQUFNLE1BQUssQ0FBQyxHQUNyQyxNQUFNLEdBQ05QLENBQUFBLElBQWEsR0FBYkEsSUFBSSxDQUFDTSxRQUFRLGNBQWJOLElBQWEsV0FBYyxHQUEzQkEsS0FBQUEsQ0FBMkIsR0FBM0JBLFFBQUFBLElBQWEsQ0FBRUgsWUFBWSxnQ0FBM0JHLEtBQUFBLENBQTJCLFFBQUVOLElBQUk7WUFDdkNjLElBQUksRUFBRVIsQ0FBQUEsSUFBYSxHQUFiQSxJQUFJLENBQUNNLFFBQVEsY0FBYk4sSUFBYSxXQUFjLEdBQTNCQSxLQUFBQSxDQUEyQixHQUEzQkEsUUFBQUEsSUFBYSxDQUFFSCxZQUFZLGdDQUEzQkcsS0FBQUEsQ0FBMkIsUUFBRVEsSUFBSTtZQUN2Q0MsS0FBSyxFQUFFVCxDQUFBQSxJQUFhLEdBQWJBLElBQUksQ0FBQ00sUUFBUSxjQUFiTixJQUFhLFdBQWMsR0FBM0JBLEtBQUFBLENBQTJCLEdBQTNCQSxTQUFBQSxJQUFhLENBQUVILFlBQVksaUNBQTNCRyxLQUFBQSxDQUEyQixTQUFFUyxLQUFLO1NBQzFDLENBQUMsQ0FBQztLQUNKO0lBRUR2QixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJTyxZQUFZLENBQUNpQixVQUFVLEVBQUVYLGVBQWUsRUFBRSxDQUFDO0tBQ2hELEVBQUU7UUFBQ04sWUFBWSxDQUFDUyxjQUFjO0tBQUMsQ0FBQyxDQUFDO0lBRWxDLHFCQUNFLDhEQUFDWixnREFBTztRQUNOcUIsTUFBTSxFQUFFbEIsWUFBWSxDQUFDaUIsVUFBVTtRQUMvQkUsT0FBTyxFQUFFO21CQUNQcEIsZUFBZSxDQUFDO2dCQUNkcUIsSUFBSSxFQUFFLHdCQUF3QjthQUMvQixDQUFDO1NBQUE7UUFFSkMsU0FBUyxFQUFDLFlBQVk7OzBCQUV0Qiw4REFBQ2pDLGlEQUFFOzBCQUFDLGNBQVk7Ozs7O29CQUFLOzBCQUNyQiw4REFBQ0MseURBQVU7Z0JBQ1RpQyxXQUFXLEVBQUMsT0FBTztnQkFDbkJDLFFBQVEsRUFBQyxZQUFZO2dCQUNyQkMsS0FBSyxFQUFFO29CQUFFQyxZQUFZLEVBQUUsTUFBTTtpQkFBRTtnQkFDL0JDLEtBQUssRUFBRXpCLElBQUk7Z0JBQ1gwQixRQUFRLEVBQUUsU0FBQ0MsQ0FBQzsyQkFBSzFCLE9BQU8sQ0FBQzBCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7aUJBQUE7Ozs7O29CQUN4QzswQkFDRiw4REFBQ0ksS0FBRztnQkFBQ1QsU0FBUyxFQUFFbEMsNEVBQTZCOztrQ0FDM0MsOERBQUNELHFEQUFNO3dCQUNMOEMsTUFBTSxFQUFFMUMsNERBQWE7d0JBQ3JCNEMsT0FBTyxFQUFFO21DQUNQbkMsZUFBZSxDQUFDO2dDQUNkcUIsSUFBSSxFQUFFLHdCQUF3Qjs2QkFDL0IsQ0FBQzt5QkFBQTt3QkFFSkksS0FBSyxFQUFFOzRCQUFFVyxNQUFNLEVBQUUsRUFBRTt5QkFBRTtrQ0FDdEIsUUFFRDs7Ozs7NEJBQVM7a0NBQ1QsOERBQUNqRCxxREFBTTt3QkFDTHNDLEtBQUssRUFBRTs0QkFBRVcsTUFBTSxFQUFFLEVBQUU7eUJBQUU7d0JBQ3JCRCxPQUFPLEVBQUU7bUNBQU14QixPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsWUFBWSxDQUFDO3lCQUFBO2tDQUN6QyxRQUVEOzs7Ozs0QkFBUzs7Ozs7O29CQUNMOzs7Ozs7WUFDRSxDQUNWO0NBQ0g7R0EvRFFOLGlCQUFpQjs7UUFDa0JGLHNFQUFpQjtRQUVqQ0Qsd0VBQWtCOzs7QUFIckNHLEtBQUFBLGlCQUFpQjtBQWlFMUIsK0RBQWVBLGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0VkaXQvRm9sZGVyRWRpdE92ZXJsYXkudHN4P2I3NWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDbGFzc2VzLFxuICBIMyxcbiAgSWNvbk5hbWUsXG4gIElucHV0R3JvdXAsXG4gIEludGVudCxcbiAgVHJlZSxcbn0gZnJvbSBcIkBibHVlcHJpbnRqcy9jb3JlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwicmVhY3QtY29sb3JcIjtcbmltcG9ydCB7IHVzZUVudGl0aWVzQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L0VudGl0aWVzQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlT3ZlcmxheUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9PdmVybGF5Q29udGV4dFwiO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSBcIi4uL092ZXJsYXlcIjtcblxuaW50ZXJmYWNlIFBhcmVudEZvbGRlciB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaWNvbjogSWNvbk5hbWU7XG4gIGNvbG9yOiBDb2xvcjtcbn1cblxuZnVuY3Rpb24gRm9sZGVyRWRpdE92ZXJsYXkoKSB7XG4gIGNvbnN0IHsgb3ZlcmxheURpc3BhdGNoLCBvdmVybGF5U3RhdGUgfSA9IHVzZU92ZXJsYXlDb250ZXh0KCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCB7IGVudGl0aWVzU3RhdGUgfSA9IHVzZUVudGl0aWVzQ29udGV4dCgpO1xuICBjb25zdCBbcGFyZW50Rm9sZGVyLCBzZXRQYXJlbnRGb2xkZXJdID0gdXNlU3RhdGU8UGFyZW50Rm9sZGVyIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgZ2V0UGFyZW50Rm9sZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBUcmVlLm5vZGVGcm9tUGF0aChvdmVybGF5U3RhdGUuZm9sZGVyRWRpdFBhdGghLCBlbnRpdGllc1N0YXRlKTtcbiAgICBjb25zb2xlLmxvZyhvdmVybGF5U3RhdGUuZm9sZGVyRWRpdFBhdGgpO1xuICAgIHNldFBhcmVudEZvbGRlcih7XG4gICAgICBpZDogbm9kZS5ub2RlRGF0YT8ucGFyZW50Rm9sZGVyPy5pZCEsXG4gICAgICBuYW1lOlxuICAgICAgICBvdmVybGF5U3RhdGUuZm9sZGVyRWRpdFBhdGg/Lmxlbmd0aCA9PT0gMVxuICAgICAgICAgID8gXCJSb290XCJcbiAgICAgICAgICA6IG5vZGUubm9kZURhdGE/LnBhcmVudEZvbGRlcj8ubmFtZSEsXG4gICAgICBpY29uOiBub2RlLm5vZGVEYXRhPy5wYXJlbnRGb2xkZXI/Lmljb24hLFxuICAgICAgY29sb3I6IG5vZGUubm9kZURhdGE/LnBhcmVudEZvbGRlcj8uY29sb3IhLFxuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG92ZXJsYXlTdGF0ZS5mb2xkZXJFZGl0KSBnZXRQYXJlbnRGb2xkZXIoKTtcbiAgfSwgW292ZXJsYXlTdGF0ZS5mb2xkZXJFZGl0UGF0aF0pO1xuXG4gIHJldHVybiAoXG4gICAgPE92ZXJsYXlcbiAgICAgIGlzT3Blbj17b3ZlcmxheVN0YXRlLmZvbGRlckVkaXR9XG4gICAgICBvbkNsb3NlPXsoKSA9PlxuICAgICAgICBvdmVybGF5RGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFwiY2xvc2VGb2xkZXJFZGl0T3ZlcmxheVwiLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgY2xhc3NOYW1lPVwibWFya2VyRWRpdFwiXG4gICAgPlxuICAgICAgPEgzPkRvZGFqIGZvbGRlcjwvSDM+XG4gICAgICA8SW5wdXRHcm91cFxuICAgICAgICBwbGFjZWhvbGRlcj1cIk5hendhXCJcbiAgICAgICAgbGVmdEljb249XCJtYXAtbWFya2VyXCJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fVxuICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Q2xhc3Nlcy5ESUFMT0dfRk9PVEVSX0FDVElPTlN9PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaW50ZW50PXtJbnRlbnQuREFOR0VSfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICBvdmVybGF5RGlzcGF0Y2goe1xuICAgICAgICAgICAgICB0eXBlOiBcImNsb3NlRm9sZGVyRWRpdE92ZXJsYXlcIixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCJcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgQW51bHVqXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIlwiIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2cocGFyZW50Rm9sZGVyKX1cbiAgICAgICAgPlxuICAgICAgICAgIFphcGlzelxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvT3ZlcmxheT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9sZGVyRWRpdE92ZXJsYXk7XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2xhc3NlcyIsIkgzIiwiSW5wdXRHcm91cCIsIkludGVudCIsIlRyZWUiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRW50aXRpZXNDb250ZXh0IiwidXNlT3ZlcmxheUNvbnRleHQiLCJPdmVybGF5IiwiRm9sZGVyRWRpdE92ZXJsYXkiLCJvdmVybGF5RGlzcGF0Y2giLCJvdmVybGF5U3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsImVudGl0aWVzU3RhdGUiLCJwYXJlbnRGb2xkZXIiLCJzZXRQYXJlbnRGb2xkZXIiLCJnZXRQYXJlbnRGb2xkZXIiLCJub2RlIiwibm9kZUZyb21QYXRoIiwiZm9sZGVyRWRpdFBhdGgiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJub2RlRGF0YSIsImxlbmd0aCIsImljb24iLCJjb2xvciIsImZvbGRlckVkaXQiLCJpc09wZW4iLCJvbkNsb3NlIiwidHlwZSIsImNsYXNzTmFtZSIsInBsYWNlaG9sZGVyIiwibGVmdEljb24iLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZGl2IiwiRElBTE9HX0ZPT1RFUl9BQ1RJT05TIiwiaW50ZW50IiwiREFOR0VSIiwib25DbGljayIsIm1hcmdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Edit/FolderEditOverlay.tsx\n");

/***/ })

});