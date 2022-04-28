"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next-auth/providers/twitch":
/*!*********************************************!*\
  !*** external "next-auth/providers/twitch" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/twitch");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n//@ts-nocheck\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGFBQWE7QUFDaUM7QUFFOUMsSUFBSUMsTUFBTTtBQUVWLElBQUlDLEtBQXFDLEVBQUUsRUFFMUMsTUFBTTtJQUNMLElBQUksQ0FBQ0MsTUFBTSxDQUFDRixNQUFNLEVBQUU7UUFDbEJFLE1BQU0sQ0FBQ0YsTUFBTSxHQUFHLElBQUlELHdEQUFZLEVBQUUsQ0FBQztLQUNwQztJQUNEQyxNQUFNLEdBQUdFLE1BQU0sQ0FBQ0YsTUFBTSxDQUFDO0NBQ3hCO0FBRUQsaUVBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2d0YW1hcC8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0B0cy1ub2NoZWNrXHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxubGV0IHByaXNtYTogUHJpc21hQ2xpZW50O1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxufSBlbHNlIHtcclxuICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcclxuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbiAgfVxyXG4gIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInByb2Nlc3MiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_providers_twitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/twitch */ \"next-auth/providers/twitch\");\n/* harmony import */ var next_auth_providers_twitch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_twitch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default()({\n            name: \"Zaloguj si\\u0119\",\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                // Add logic here to look up the user from the credentials supplied\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].user.findFirst({\n                    where: {\n                        username: credentials === null || credentials === void 0 ? void 0 : credentials.username,\n                        password: (0,crypto_js__WEBPACK_IMPORTED_MODULE_6__.PBKDF2)(credentials === null || credentials === void 0 ? void 0 : credentials.password, process.env.NEXTAUTH_SECRET, {\n                            keySize: 256 / 32\n                        }).toString()\n                    }\n                });\n                if (user) {\n                    // Any object returned will be saved in `user` property of the JWT\n                    return user;\n                } else {\n                    // If you return null then an error will be displayed advising the user to check their details.\n                    return null;\n                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter\n                }\n            }\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        next_auth_providers_twitch__WEBPACK_IMPORTED_MODULE_5___default()({\n            clientId: process.env.TWITCH_CLIENT_ID,\n            clientSecret: process.env.TWITCH_CLIENT_SECRET\n        }), \n    ],\n    callbacks: {\n        async redirect ({ url , baseUrl  }) {\n            // if (baseUrl == \"http://localhost:3000\") return \"https://gtamap.loca.lt\";\n            return baseUrl;\n        },\n        async jwt ({ token , account  }) {\n            // Persist the OAuth access_token to the token right after signin\n            if (account) {\n                const userFetched = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].user.findFirst({\n                    where: {\n                        id: account === null || account === void 0 ? void 0 : account.providerAccountId\n                    },\n                    select: {\n                        username: true\n                    }\n                });\n                token.name = userFetched === null || userFetched === void 0 ? void 0 : userFetched.username;\n            }\n            return token;\n        },\n        async session ({ session , token , user  }) {\n            // Send properties to the client, like an access_token from a provider.\n            session.accessToken = token.accessToken;\n            return session;\n        }\n    },\n    session: {\n        // Set to jwt in order to CredentialsProvider works properly\n        strategy: \"jwt\"\n    },\n    debug: \"development\" === \"development\",\n    secret: process.env.NEXTAUTH_SECRET\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUN1QjtBQUNFO0FBQ2Q7QUFDc0I7QUFDVjtBQUNoQjtBQUV4QyxpRUFBZUEsZ0RBQVEsQ0FBQztJQUN0Qk8sT0FBTyxFQUFFTCx3RUFBYSxDQUFDQyxtREFBTSxDQUFDO0lBQzlCSyxTQUFTLEVBQUU7UUFDVEosc0VBQW1CLENBQUM7WUFDbEJLLElBQUksRUFBRSxrQkFBYTtZQUNuQkMsV0FBVyxFQUFFO2dCQUNYQyxRQUFRLEVBQUU7b0JBQUVDLEtBQUssRUFBRSxVQUFVO29CQUFFQyxJQUFJLEVBQUUsTUFBTTtpQkFBRTtnQkFDN0NDLFFBQVEsRUFBRTtvQkFBRUYsS0FBSyxFQUFFLFVBQVU7b0JBQUVDLElBQUksRUFBRSxVQUFVO2lCQUFFO2FBQ2xEO1lBRUQsTUFBTUUsU0FBUyxFQUFDTCxXQUFXLEVBQUVNLEdBQUcsRUFBRTtnQkFDaEMsbUVBQW1FO2dCQUNuRSxNQUFNQyxJQUFJLEdBQUcsTUFBTWQsa0VBQXFCLENBQUM7b0JBQ3ZDZ0IsS0FBSyxFQUFFO3dCQUNMUixRQUFRLEVBQUVELFdBQVcsYUFBWEEsV0FBVyxXQUFVLEdBQXJCQSxLQUFBQSxDQUFxQixHQUFyQkEsV0FBVyxDQUFFQyxRQUFRO3dCQUMvQkcsUUFBUSxFQUFFUixpREFBTSxDQUNkSSxXQUFXLGFBQVhBLFdBQVcsV0FBVSxHQUFyQkEsS0FBQUEsQ0FBcUIsR0FBckJBLFdBQVcsQ0FBRUksUUFBUSxFQUNyQk0sT0FBTyxDQUFDQyxHQUFHLENBQUNDLGVBQWUsRUFDM0I7NEJBQ0VDLE9BQU8sRUFBRSxHQUFHLEdBQUcsRUFBRTt5QkFDbEIsQ0FDRixDQUFDQyxRQUFRLEVBQUU7cUJBQ2I7aUJBQ0YsQ0FBQztnQkFDRixJQUFJUCxJQUFJLEVBQUU7b0JBQ1Isa0VBQWtFO29CQUNsRSxPQUFPQSxJQUFJLENBQUM7aUJBQ2IsTUFBTTtvQkFDTCwrRkFBK0Y7b0JBQy9GLE9BQU8sSUFBSSxDQUFDO2dCQUVaLDJJQUEySTtpQkFDNUk7YUFDRjtTQUNGLENBQUM7UUFDRmhCLGlFQUFjLENBQUM7WUFDYndCLFFBQVEsRUFBRUwsT0FBTyxDQUFDQyxHQUFHLENBQUNLLGdCQUFnQjtZQUN0Q0MsWUFBWSxFQUFFUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sb0JBQW9CO1NBQy9DLENBQUM7UUFFRnZCLGlFQUFjLENBQUM7WUFDYm9CLFFBQVEsRUFBRUwsT0FBTyxDQUFDQyxHQUFHLENBQUNRLGdCQUFnQjtZQUN0Q0YsWUFBWSxFQUFFUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1Msb0JBQW9CO1NBQy9DLENBQUM7S0FDSDtJQUNEQyxTQUFTLEVBQUU7UUFDVCxNQUFNQyxRQUFRLEVBQUMsRUFBRUMsR0FBRyxHQUFFQyxPQUFPLEdBQUUsRUFBRTtZQUMvQiwyRUFBMkU7WUFDM0UsT0FBT0EsT0FBTyxDQUFDO1NBQ2hCO1FBRUQsTUFBTUMsR0FBRyxFQUFDLEVBQUVDLEtBQUssR0FBRUMsT0FBTyxHQUFFLEVBQUU7WUFDNUIsaUVBQWlFO1lBRWpFLElBQUlBLE9BQU8sRUFBRTtnQkFDWCxNQUFNQyxXQUFXLEdBQUcsTUFBTW5DLGtFQUFxQixDQUFDO29CQUM5Q2dCLEtBQUssRUFBRTt3QkFDTG9CLEVBQUUsRUFBRUYsT0FBTyxhQUFQQSxPQUFPLFdBQW1CLEdBQTFCQSxLQUFBQSxDQUEwQixHQUExQkEsT0FBTyxDQUFFRyxpQkFBaUI7cUJBQy9CO29CQUNEQyxNQUFNLEVBQUU7d0JBQ045QixRQUFRLEVBQUUsSUFBSTtxQkFDZjtpQkFDRixDQUFDO2dCQUVGeUIsS0FBSyxDQUFDM0IsSUFBSSxHQUFHNkIsV0FBVyxhQUFYQSxXQUFXLFdBQVUsR0FBckJBLEtBQUFBLENBQXFCLEdBQXJCQSxXQUFXLENBQUUzQixRQUFRLENBQUM7YUFDcEM7WUFDRCxPQUFPeUIsS0FBSyxDQUFDO1NBQ2Q7UUFFRCxNQUFNTSxPQUFPLEVBQUMsRUFBRUEsT0FBTyxHQUFFTixLQUFLLEdBQUVuQixJQUFJLEdBQUUsRUFBRTtZQUN0Qyx1RUFBdUU7WUFDdkV5QixPQUFPLENBQUNDLFdBQVcsR0FBR1AsS0FBSyxDQUFDTyxXQUFXLENBQUM7WUFDeEMsT0FBT0QsT0FBTyxDQUFDO1NBQ2hCO0tBQ0Y7SUFFREEsT0FBTyxFQUFFO1FBQ1AsNERBQTREO1FBQzVERSxRQUFRLEVBQUUsS0FBSztLQUNoQjtJQUNEQyxLQUFLLEVBQUV6QixhQXhGSSxLQXdGcUIsYUFBYTtJQUM3QzBCLE1BQU0sRUFBRTFCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxlQUFlO0NBQ3BDLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2d0YW1hcC8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzUwYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgVHdpdGNoUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvdHdpdGNoXCI7XHJcbmltcG9ydCB7IEFFUywgUEJLREYyIH0gZnJvbSBcImNyeXB0by1qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBuYW1lOiBcIlphbG9ndWogc2nEmVwiLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIlVzZXJuYW1lXCIsIHR5cGU6IFwidGV4dFwiIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xyXG4gICAgICAgIC8vIEFkZCBsb2dpYyBoZXJlIHRvIGxvb2sgdXAgdGhlIHVzZXIgZnJvbSB0aGUgY3JlZGVudGlhbHMgc3VwcGxpZWRcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBjcmVkZW50aWFscz8udXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBQQktERjIoXHJcbiAgICAgICAgICAgICAgY3JlZGVudGlhbHM/LnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCEsXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5U2l6ZTogMjU2IC8gMzIsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAvLyBBbnkgb2JqZWN0IHJldHVybmVkIHdpbGwgYmUgc2F2ZWQgaW4gYHVzZXJgIHByb3BlcnR5IG9mIHRoZSBKV1RcclxuICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBJZiB5b3UgcmV0dXJuIG51bGwgdGhlbiBhbiBlcnJvciB3aWxsIGJlIGRpc3BsYXllZCBhZHZpc2luZyB0aGUgdXNlciB0byBjaGVjayB0aGVpciBkZXRhaWxzLlxyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgLy8gWW91IGNhbiBhbHNvIFJlamVjdCB0aGlzIGNhbGxiYWNrIHdpdGggYW4gRXJyb3IgdGh1cyB0aGUgdXNlciB3aWxsIGJlIHNlbnQgdG8gdGhlIGVycm9yIHBhZ2Ugd2l0aCB0aGUgZXJyb3IgbWVzc2FnZSBhcyBhIHF1ZXJ5IHBhcmFtZXRlclxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcclxuICAgIH0pLFxyXG5cclxuICAgIFR3aXRjaFByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LlRXSVRDSF9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuVFdJVENIX0NMSUVOVF9TRUNSRVQsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgcmVkaXJlY3QoeyB1cmwsIGJhc2VVcmwgfSkge1xyXG4gICAgICAvLyBpZiAoYmFzZVVybCA9PSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiKSByZXR1cm4gXCJodHRwczovL2d0YW1hcC5sb2NhLmx0XCI7XHJcbiAgICAgIHJldHVybiBiYXNlVXJsO1xyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgYWNjb3VudCB9KSB7XHJcbiAgICAgIC8vIFBlcnNpc3QgdGhlIE9BdXRoIGFjY2Vzc190b2tlbiB0byB0aGUgdG9rZW4gcmlnaHQgYWZ0ZXIgc2lnbmluXHJcblxyXG4gICAgICBpZiAoYWNjb3VudCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJGZXRjaGVkID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIGlkOiBhY2NvdW50Py5wcm92aWRlckFjY291bnRJZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0b2tlbi5uYW1lID0gdXNlckZldGNoZWQ/LnVzZXJuYW1lO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgLy8gU2VuZCBwcm9wZXJ0aWVzIHRvIHRoZSBjbGllbnQsIGxpa2UgYW4gYWNjZXNzX3Rva2VuIGZyb20gYSBwcm92aWRlci5cclxuICAgICAgc2Vzc2lvbi5hY2Nlc3NUb2tlbiA9IHRva2VuLmFjY2Vzc1Rva2VuO1xyXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgLy8gU2V0IHRvIGp3dCBpbiBvcmRlciB0byBDcmVkZW50aWFsc1Byb3ZpZGVyIHdvcmtzIHByb3Blcmx5XHJcbiAgICBzdHJhdGVneTogXCJqd3RcIixcclxuICB9LFxyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG59KTtcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJQcmlzbWFBZGFwdGVyIiwicHJpc21hIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIlR3aXRjaFByb3ZpZGVyIiwiUEJLREYyIiwiYWRhcHRlciIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJyZXEiLCJ1c2VyIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwia2V5U2l6ZSIsInRvU3RyaW5nIiwiY2xpZW50SWQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJUV0lUQ0hfQ0xJRU5UX0lEIiwiVFdJVENIX0NMSUVOVF9TRUNSRVQiLCJjYWxsYmFja3MiLCJyZWRpcmVjdCIsInVybCIsImJhc2VVcmwiLCJqd3QiLCJ0b2tlbiIsImFjY291bnQiLCJ1c2VyRmV0Y2hlZCIsImlkIiwicHJvdmlkZXJBY2NvdW50SWQiLCJzZWxlY3QiLCJzZXNzaW9uIiwiYWNjZXNzVG9rZW4iLCJzdHJhdGVneSIsImRlYnVnIiwic2VjcmV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();