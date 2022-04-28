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

/***/ "./src/components/Edit/FolderSelect.tsx":
/*!**********************************************!*\
  !*** ./src/components/Edit/FolderSelect.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ \"./node_modules/@blueprintjs/core/lib/esm/index.js\");\n/* harmony import */ var _blueprintjs_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/select */ \"./node_modules/@blueprintjs/select/lib/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_EntitiesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/EntitiesContext */ \"./src/context/EntitiesContext.tsx\");\n/* harmony import */ var _context_MapContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/MapContext */ \"./src/context/MapContext.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar FolderSelect = function(param) {\n    var selectedFolder = param.selectedFolder, setSelectedFolder = param.setSelectedFolder;\n    var _this1 = _this;\n    _s();\n    var entitiesState = (0,_context_EntitiesContext__WEBPACK_IMPORTED_MODULE_2__.useEntitiesContext)().entitiesState;\n    var mapState = (0,_context_MapContext__WEBPACK_IMPORTED_MODULE_3__.useMapContext)().mapState;\n    var getFolderList = function(entities) {\n        var tempFolders = [];\n        var recursivePush = function(folders, path) {\n            folders.forEach(function(folder) {\n                if (folder.nodeData.type === \"FOLDER\") {\n                    tempFolders.push({\n                        id: folder.id,\n                        name: folder.label,\n                        icon: folder.icon,\n                        path: path || null\n                    });\n                }\n                if (folder.childNodes) recursivePush(folder.childNodes, \"\".concat(path ? path : \"\").concat(folder.label, \" / \"));\n            });\n        };\n        recursivePush(entities);\n        console.log({\n            tempFolders: tempFolders\n        });\n        return tempFolders;\n    };\n    var folderItemRenderer = function(item, itemProps) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n            selected: itemProps.modifiers.active,\n            icon: item.icon,\n            text: item.path ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            color: \"GrayText\"\n                        },\n                        children: [\n                            \" \",\n                            item.path\n                        ]\n                    }, void 0, true, void 0, void 0),\n                    item.name\n                ]\n            }, void 0, true) : item.name,\n            onClick: itemProps.handleClick\n        }, void 0, false, {\n            fileName: \"E:\\\\Projects\\\\GTA5MAP\\\\gtamap\\\\src\\\\components\\\\Edit\\\\FolderSelect.tsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blueprintjs_select__WEBPACK_IMPORTED_MODULE_5__.Select, {\n        popoverProps: {\n            minimal: true,\n            popoverClassName: \"markerEdit__icons__popover\"\n        },\n        activeItem: selectedFolder,\n        matchTargetWidth: true,\n        items: entitiesState ? getFolderList(entitiesState) : [],\n        className: \"markerEdit__icons\",\n        itemRenderer: folderItemRenderer,\n        onItemSelect: function(item, event) {\n            setSelectedFolder(item);\n        },\n        filterable: false,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Button, {\n            text: selectedFolder ? selectedFolder.path ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            color: \"GrayText\"\n                        },\n                        children: [\n                            \" \",\n                            selectedFolder.path\n                        ]\n                    }, void 0, true, void 0, void 0),\n                    selectedFolder.name\n                ]\n            }, void 0, true) : selectedFolder.name : \"Wybierz folder\",\n            style: {\n                width: \"316px\"\n            },\n            alignText: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Alignment.LEFT,\n            icon: (selectedFolder === null || selectedFolder === void 0 ? void 0 : selectedFolder.icon) || \"folder-open\",\n            rightIcon: \"double-caret-vertical\"\n        }, void 0, false, {\n            fileName: \"E:\\\\Projects\\\\GTA5MAP\\\\gtamap\\\\src\\\\components\\\\Edit\\\\FolderSelect.tsx\",\n            lineNumber: 104,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\GTA5MAP\\\\gtamap\\\\src\\\\components\\\\Edit\\\\FolderSelect.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, _this);\n};\n_s(FolderSelect, \"lT7+BAaXGsLi2uXRVox3wedrdB0=\", false, function() {\n    return [\n        _context_EntitiesContext__WEBPACK_IMPORTED_MODULE_2__.useEntitiesContext,\n        _context_MapContext__WEBPACK_IMPORTED_MODULE_3__.useMapContext\n    ];\n});\n_c = FolderSelect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FolderSelect);\nvar _c;\n$RefreshReg$(_c, \"FolderSelect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkQscURBQU07WUFDTG1DLElBQUksRUFDRjVCLGNBQWMsR0FDWkEsY0FBYyxDQUFDUyxJQUFJLGlCQUNqQjs7a0NBQ0UsOERBQUNvQixNQUFJO3dCQUNIQyxLQUFLLEVBQUU7NEJBQ0xDLEtBQUssRUFBRSxVQUFVO3lCQUNsQjs7NEJBRUEsR0FBRzs0QkFDSC9CLGNBQWMsQ0FBQ1MsSUFBSTs7b0RBQ2Y7b0JBQ05ULGNBQWMsQ0FBQ2dCLElBQUk7OzRCQUNuQixHQUVIaEIsY0FBYyxDQUFDZ0IsSUFBSSxHQUdyQixnQkFBZ0I7WUFHcEJjLEtBQUssRUFBRTtnQkFDTGUsS0FBSyxFQUFFLE9BQU87YUFDZjtZQUNEQyxTQUFTLEVBQUV0RCw2REFBYztZQUN6QjBCLElBQUksRUFBRWxCLENBQUFBLGNBQWMsYUFBZEEsY0FBYyxXQUFNLEdBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsY0FBYyxDQUFFa0IsSUFBSSxLQUFJLGFBQWE7WUFDM0M4QixTQUFTLEVBQUUsdUJBQXVCOzs7OztpQkFDbEM7Ozs7O2FBQ0ssQ0FDVDtDQUNIO0dBOUdLakQsWUFBWTs7UUFJVUYsd0VBQWtCO1FBQ3ZCQyw4REFBYTs7O0FBTDlCQyxLQUFBQSxZQUFZO0FBZ0hsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0VkaXQvRm9sZGVyU2VsZWN0LnRzeD81NGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFsaWdubWVudCwgQnV0dG9uLCBJY29uTmFtZSwgTWVudUl0ZW0gfSBmcm9tIFwiQGJsdWVwcmludGpzL2NvcmVcIjtcclxuaW1wb3J0IHsgSXRlbVJlbmRlcmVyLCBTZWxlY3QgfSBmcm9tIFwiQGJsdWVwcmludGpzL3NlbGVjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRW50aXRpZXNTdGF0ZSxcclxuICB1c2VFbnRpdGllc0NvbnRleHQsXHJcbn0gZnJvbSBcIi4uLy4uL2NvbnRleHQvRW50aXRpZXNDb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZU1hcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9NYXBDb250ZXh0XCI7XHJcbmltcG9ydCB7IEZvbGRlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb2xkZXJMaXN0SXRlbSB7XHJcbiAgcGF0aDogc3RyaW5nIHwgbnVsbDtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBpY29uOiBJY29uTmFtZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEZvbGRlclNlbGVjdFByb3BzIHtcclxuICBzZWxlY3RlZEZvbGRlcjogRm9sZGVyTGlzdEl0ZW0gfCBudWxsO1xyXG4gIHNldFNlbGVjdGVkRm9sZGVyOiBSZWFjdC5EaXNwYXRjaDxcclxuICAgIFJlYWN0LlNldFN0YXRlQWN0aW9uPEZvbGRlckxpc3RJdGVtIHwgbnVsbD5cclxuICA+O1xyXG59XHJcblxyXG5jb25zdCBGb2xkZXJTZWxlY3Q6IFJlYWN0LkZDPEZvbGRlclNlbGVjdFByb3BzPiA9ICh7XHJcbiAgc2VsZWN0ZWRGb2xkZXIsXHJcbiAgc2V0U2VsZWN0ZWRGb2xkZXIsXHJcbn0pID0+IHtcclxuICBjb25zdCB7IGVudGl0aWVzU3RhdGUgfSA9IHVzZUVudGl0aWVzQ29udGV4dCgpO1xyXG4gIGNvbnN0IHsgbWFwU3RhdGUgfSA9IHVzZU1hcENvbnRleHQoKTtcclxuXHJcbiAgY29uc3QgZ2V0Rm9sZGVyTGlzdDogKGVudGl0aWVzOiBFbnRpdGllc1N0YXRlW10pID0+IEZvbGRlckxpc3RJdGVtW10gPSAoXHJcbiAgICBlbnRpdGllc1xyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgdGVtcEZvbGRlcnM6IEZvbGRlckxpc3RJdGVtW10gPSBbXTtcclxuICAgIGNvbnN0IHJlY3Vyc2l2ZVB1c2ggPSAoZm9sZGVyczogRW50aXRpZXNTdGF0ZVtdLCBwYXRoPzogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGZvbGRlcnMuZm9yRWFjaCgoZm9sZGVyKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvbGRlci5ub2RlRGF0YS50eXBlID09PSBcIkZPTERFUlwiKSB7XHJcbiAgICAgICAgICB0ZW1wRm9sZGVycy5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6IGZvbGRlci5pZCEgYXMgc3RyaW5nLFxyXG4gICAgICAgICAgICBuYW1lOiBmb2xkZXIubGFiZWwhIGFzIHN0cmluZyxcclxuICAgICAgICAgICAgaWNvbjogZm9sZGVyLmljb24hIGFzIEljb25OYW1lLFxyXG4gICAgICAgICAgICBwYXRoOiBwYXRoIHx8IG51bGwsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvbGRlci5jaGlsZE5vZGVzKVxyXG4gICAgICAgICAgcmVjdXJzaXZlUHVzaChcclxuICAgICAgICAgICAgZm9sZGVyLmNoaWxkTm9kZXMsXHJcbiAgICAgICAgICAgIGAke3BhdGggPyBwYXRoIDogXCJcIn0ke2ZvbGRlci5sYWJlbH0gLyBgXHJcbiAgICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVjdXJzaXZlUHVzaChlbnRpdGllcyk7XHJcbiAgICBjb25zb2xlLmxvZyh7IHRlbXBGb2xkZXJzIH0pO1xyXG4gICAgcmV0dXJuIHRlbXBGb2xkZXJzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvbGRlckl0ZW1SZW5kZXJlcjogSXRlbVJlbmRlcmVyPEZvbGRlckxpc3RJdGVtPiA9IChcclxuICAgIGl0ZW0sXHJcbiAgICBpdGVtUHJvcHNcclxuICApID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgIHNlbGVjdGVkPXtpdGVtUHJvcHMubW9kaWZpZXJzLmFjdGl2ZX1cclxuICAgICAgICBpY29uPXtpdGVtLmljb259XHJcbiAgICAgICAgdGV4dD17XHJcbiAgICAgICAgICBpdGVtLnBhdGggPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIkdyYXlUZXh0XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIHtpdGVtLnBhdGh9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgaXRlbS5uYW1lXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uQ2xpY2s9e2l0ZW1Qcm9wcy5oYW5kbGVDbGlja31cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlbGVjdFxyXG4gICAgICBwb3BvdmVyUHJvcHM9e3tcclxuICAgICAgICBtaW5pbWFsOiB0cnVlLFxyXG4gICAgICAgIHBvcG92ZXJDbGFzc05hbWU6IFwibWFya2VyRWRpdF9faWNvbnNfX3BvcG92ZXJcIixcclxuICAgICAgfX1cclxuICAgICAgYWN0aXZlSXRlbT17c2VsZWN0ZWRGb2xkZXJ9XHJcbiAgICAgIG1hdGNoVGFyZ2V0V2lkdGhcclxuICAgICAgaXRlbXM9e2VudGl0aWVzU3RhdGUgPyBnZXRGb2xkZXJMaXN0KGVudGl0aWVzU3RhdGUpIDogW119XHJcbiAgICAgIGNsYXNzTmFtZT1cIm1hcmtlckVkaXRfX2ljb25zXCJcclxuICAgICAgaXRlbVJlbmRlcmVyPXtmb2xkZXJJdGVtUmVuZGVyZXJ9XHJcbiAgICAgIG9uSXRlbVNlbGVjdD17KGl0ZW0sIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRGb2xkZXIoaXRlbSk7XHJcbiAgICAgIH19XHJcbiAgICAgIGZpbHRlcmFibGU9e2ZhbHNlfVxyXG4gICAgPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdGV4dD17XHJcbiAgICAgICAgICBzZWxlY3RlZEZvbGRlciA/IChcclxuICAgICAgICAgICAgc2VsZWN0ZWRGb2xkZXIucGF0aCA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJHcmF5VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEZvbGRlci5wYXRofVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkRm9sZGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRGb2xkZXIubmFtZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICBcIld5YmllcnogZm9sZGVyXCJcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiBcIjMxNnB4XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhbGlnblRleHQ9e0FsaWdubWVudC5MRUZUfVxyXG4gICAgICAgIGljb249e3NlbGVjdGVkRm9sZGVyPy5pY29uIHx8IFwiZm9sZGVyLW9wZW5cIn1cclxuICAgICAgICByaWdodEljb249e1wiZG91YmxlLWNhcmV0LXZlcnRpY2FsXCJ9XHJcbiAgICAgIC8+XHJcbiAgICA8L1NlbGVjdD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sZGVyU2VsZWN0O1xyXG4iXSwibmFtZXMiOlsiQWxpZ25tZW50IiwiQnV0dG9uIiwiTWVudUl0ZW0iLCJTZWxlY3QiLCJSZWFjdCIsInVzZUVudGl0aWVzQ29udGV4dCIsInVzZU1hcENvbnRleHQiLCJGb2xkZXJTZWxlY3QiLCJzZWxlY3RlZEZvbGRlciIsInNldFNlbGVjdGVkRm9sZGVyIiwiZW50aXRpZXNTdGF0ZSIsIm1hcFN0YXRlIiwiZ2V0Rm9sZGVyTGlzdCIsImVudGl0aWVzIiwidGVtcEZvbGRlcnMiLCJyZWN1cnNpdmVQdXNoIiwiZm9sZGVycyIsInBhdGgiLCJmb3JFYWNoIiwiZm9sZGVyIiwibm9kZURhdGEiLCJ0eXBlIiwicHVzaCIsImlkIiwibmFtZSIsImxhYmVsIiwiaWNvbiIsImNoaWxkTm9kZXMiLCJjb25zb2xlIiwibG9nIiwiZm9sZGVySXRlbVJlbmRlcmVyIiwiaXRlbSIsIml0ZW1Qcm9wcyIsInNlbGVjdGVkIiwibW9kaWZpZXJzIiwiYWN0aXZlIiwidGV4dCIsInNwYW4iLCJzdHlsZSIsImNvbG9yIiwib25DbGljayIsImhhbmRsZUNsaWNrIiwicG9wb3ZlclByb3BzIiwibWluaW1hbCIsInBvcG92ZXJDbGFzc05hbWUiLCJhY3RpdmVJdGVtIiwibWF0Y2hUYXJnZXRXaWR0aCIsIml0ZW1zIiwiY2xhc3NOYW1lIiwiaXRlbVJlbmRlcmVyIiwib25JdGVtU2VsZWN0IiwiZXZlbnQiLCJmaWx0ZXJhYmxlIiwid2lkdGgiLCJhbGlnblRleHQiLCJMRUZUIiwicmlnaHRJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Edit/FolderSelect.tsx\n");

/***/ })

});