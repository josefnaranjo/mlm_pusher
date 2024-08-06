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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:events":
/*!******************************!*\
  !*** external "node:events" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:events");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Csludg%5COneDrive%5CDocuments%5CBVT%5CInternship%5CReactFullstackApp_MLM%5Cfront%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csludg%5COneDrive%5CDocuments%5CBVT%5CInternship%5CReactFullstackApp_MLM%5Cfront&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Csludg%5COneDrive%5CDocuments%5CBVT%5CInternship%5CReactFullstackApp_MLM%5Cfront%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csludg%5COneDrive%5CDocuments%5CBVT%5CInternship%5CReactFullstackApp_MLM%5Cfront&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_sludg_OneDrive_Documents_BVT_Internship_ReactFullstackApp_MLM_front_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\sludg\\\\OneDrive\\\\Documents\\\\BVT\\\\Internship\\\\ReactFullstackApp_MLM\\\\front\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_sludg_OneDrive_Documents_BVT_Internship_ReactFullstackApp_MLM_front_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzbHVkZyU1Q09uZURyaXZlJTVDRG9jdW1lbnRzJTVDQlZUJTVDSW50ZXJuc2hpcCU1Q1JlYWN0RnVsbHN0YWNrQXBwX01MTSU1Q2Zyb250JTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNzbHVkZyU1Q09uZURyaXZlJTVDRG9jdW1lbnRzJTVDQlZUJTVDSW50ZXJuc2hpcCU1Q1JlYWN0RnVsbHN0YWNrQXBwX01MTSU1Q2Zyb250JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM2RTtBQUMxSjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Lz83ZmFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHNsdWRnXFxcXE9uZURyaXZlXFxcXERvY3VtZW50c1xcXFxCVlRcXFxcSW50ZXJuc2hpcFxcXFxSZWFjdEZ1bGxzdGFja0FwcF9NTE1cXFxcZnJvbnRcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcc2x1ZGdcXFxcT25lRHJpdmVcXFxcRG9jdW1lbnRzXFxcXEJWVFxcXFxJbnRlcm5zaGlwXFxcXFJlYWN0RnVsbHN0YWNrQXBwX01MTVxcXFxmcm9udFxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Csludg%5COneDrive%5CDocuments%5CBVT%5CInternship%5CReactFullstackApp_MLM%5Cfront%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csludg%5COneDrive%5CDocuments%5CBVT%5CInternship%5CReactFullstackApp_MLM%5Cfront&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_0__.GET),\n/* harmony export */   POST: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_0__.POST)\n/* harmony export */ });\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/auth */ \"(rsc)/./auth.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgR0VULCBQT1NUIH0gZnJvbSBcIkAvYXV0aFwiO1xyXG4iXSwibmFtZXMiOlsiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./auth.config.ts":
/*!************************!*\
  !*** ./auth.config.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/user */ \"(rsc)/./data/user.ts\");\n/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemas */ \"(rsc)/./schemas/index.ts\");\n\n\n\n\n\nconst authConfig = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            async authorize (credentials) {\n                const validatedFields = _schemas__WEBPACK_IMPORTED_MODULE_4__.LoginSchema.safeParse(credentials);\n                if (validatedFields.success) {\n                    const { email, password } = validatedFields.data;\n                    const user = await (0,_data_user__WEBPACK_IMPORTED_MODULE_3__.getUserByEmail)(email);\n                    if (!user || !user.password) return null;\n                    const passwordsMatch = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(password, user.password);\n                    if (passwordsMatch) {\n                        // return the user object if the passwords match\n                        return user;\n                    }\n                }\n                // return null if the credentials are not valid\n                return null;\n            }\n        })\n    ],\n    callbacks: {\n        session: async ({ session, token })=>{\n            if (session?.user) {\n                session.user.id = token.sub || \"\"; // Ensure token.sub is a string or fallback to an empty string\n            }\n            return session;\n        },\n        jwt: async ({ user, token })=>{\n            if (user) {\n                token.sub = user.id; // Ensure token.sub is set correctly\n            }\n            return token;\n        }\n    },\n    session: {\n        strategy: \"jwt\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authConfig);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hdXRoLmNvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzBEO0FBQ1Y7QUFDbEI7QUFDZTtBQUNMO0FBRXhDLE1BQU1LLGFBQTZCO0lBQ2pDQyxXQUFXO1FBQ1RMLHNFQUFNQSxDQUFDO1lBQ0xNLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtRQUNoRDtRQUNBWiwyRUFBV0EsQ0FBQztZQUNWLE1BQU1hLFdBQVVDLFdBQVc7Z0JBQ3pCLE1BQU1DLGtCQUFrQlgsaURBQVdBLENBQUNZLFNBQVMsQ0FBQ0Y7Z0JBRTlDLElBQUlDLGdCQUFnQkUsT0FBTyxFQUFFO29CQUMzQixNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdKLGdCQUFnQkssSUFBSTtvQkFDaEQsTUFBTUMsT0FBTyxNQUFNbEIsMERBQWNBLENBQUNlO29CQUVsQyxJQUFJLENBQUNHLFFBQVEsQ0FBQ0EsS0FBS0YsUUFBUSxFQUFFLE9BQU87b0JBRXBDLE1BQU1HLGlCQUFpQixNQUFNcEIsdURBQWMsQ0FBQ2lCLFVBQVVFLEtBQUtGLFFBQVE7b0JBRW5FLElBQUlHLGdCQUFnQjt3QkFDbEIsZ0RBQWdEO3dCQUNoRCxPQUFPRDtvQkFDVDtnQkFDRjtnQkFFQSwrQ0FBK0M7Z0JBQy9DLE9BQU87WUFDVDtRQUNGO0tBQ0Q7SUFDREcsV0FBVztRQUNUQyxTQUFTLE9BQU8sRUFBRUEsT0FBTyxFQUFFQyxLQUFLLEVBQUU7WUFDaEMsSUFBSUQsU0FBU0osTUFBTTtnQkFDakJJLFFBQVFKLElBQUksQ0FBQ00sRUFBRSxHQUFHRCxNQUFNRSxHQUFHLElBQUksSUFBSSw4REFBOEQ7WUFDbkc7WUFDQSxPQUFPSDtRQUNUO1FBQ0FJLEtBQUssT0FBTyxFQUFFUixJQUFJLEVBQUVLLEtBQUssRUFBRTtZQUN6QixJQUFJTCxNQUFNO2dCQUNSSyxNQUFNRSxHQUFHLEdBQUdQLEtBQUtNLEVBQUUsRUFBRSxvQ0FBb0M7WUFDM0Q7WUFDQSxPQUFPRDtRQUNUO0lBQ0Y7SUFDQUQsU0FBUztRQUNQSyxVQUFVO0lBQ1o7QUFDRjtBQUVBLGlFQUFlekIsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vYXV0aC5jb25maWcudHM/NDMwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBdXRoQ29uZmlnIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IEdvb2dsZSBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IHsgZ2V0VXNlckJ5RW1haWwgfSBmcm9tIFwiQC9kYXRhL3VzZXJcIjtcclxuaW1wb3J0IHsgTG9naW5TY2hlbWEgfSBmcm9tIFwiLi9zY2hlbWFzXCI7XHJcblxyXG5jb25zdCBhdXRoQ29uZmlnOiBOZXh0QXV0aENvbmZpZyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdvb2dsZSh7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEISxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCEsXHJcbiAgICB9KSxcclxuICAgIENyZWRlbnRpYWxzKHtcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gTG9naW5TY2hlbWEuc2FmZVBhcnNlKGNyZWRlbnRpYWxzKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckJ5RW1haWwoZW1haWwpO1xyXG5cclxuICAgICAgICAgIGlmICghdXNlciB8fCAhdXNlci5wYXNzd29yZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgY29uc3QgcGFzc3dvcmRzTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XHJcblxyXG4gICAgICAgICAgaWYgKHBhc3N3b3Jkc01hdGNoKSB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGUgdXNlciBvYmplY3QgaWYgdGhlIHBhc3N3b3JkcyBtYXRjaFxyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJldHVybiBudWxsIGlmIHRoZSBjcmVkZW50aWFscyBhcmUgbm90IHZhbGlkXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgc2Vzc2lvbjogYXN5bmMgKHsgc2Vzc2lvbiwgdG9rZW4gfSkgPT4ge1xyXG4gICAgICBpZiAoc2Vzc2lvbj8udXNlcikge1xyXG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLnN1YiB8fCAnJzsgLy8gRW5zdXJlIHRva2VuLnN1YiBpcyBhIHN0cmluZyBvciBmYWxsYmFjayB0byBhbiBlbXB0eSBzdHJpbmdcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIH0sXHJcbiAgICBqd3Q6IGFzeW5jICh7IHVzZXIsIHRva2VuIH0pID0+IHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICB0b2tlbi5zdWIgPSB1c2VyLmlkOyAvLyBFbnN1cmUgdG9rZW4uc3ViIGlzIHNldCBjb3JyZWN0bHlcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoQ29uZmlnOyJdLCJuYW1lcyI6WyJDcmVkZW50aWFscyIsIkdvb2dsZSIsImJjcnlwdCIsImdldFVzZXJCeUVtYWlsIiwiTG9naW5TY2hlbWEiLCJhdXRoQ29uZmlnIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJ2YWxpZGF0ZWRGaWVsZHMiLCJzYWZlUGFyc2UiLCJzdWNjZXNzIiwiZW1haWwiLCJwYXNzd29yZCIsImRhdGEiLCJ1c2VyIiwicGFzc3dvcmRzTWF0Y2giLCJjb21wYXJlIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwiaWQiLCJzdWIiLCJqd3QiLCJzdHJhdGVneSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./auth.config.ts\n");

/***/ }),

/***/ "(rsc)/./auth.ts":
/*!*****************!*\
  !*** ./auth.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var _auth_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/auth.config */ \"(rsc)/./auth.config.ts\");\n/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/user */ \"(rsc)/./data/user.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n\n\n\n\n\n// import { JWT } from \"next-auth/jwt\";\n// declare module \"next-auth/jwt\" {\n//   interface JWT {\n//     role?: \"ADMIN\" | \"USER\";\n//   }\n// }\n// https://next-auth.js.org/v3/configuration/callbackshttps://next-auth.js.org/v3/configuration/callbacks\nconst { handlers: { GET, POST }, auth, signIn, signOut } = (0,next_auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n    pages: {\n        signIn: \"/auth/login\",\n        error: \"/auth/error\"\n    },\n    events: {\n        async linkAccount ({ user }) {\n            await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.user.update({\n                where: {\n                    id: user.id\n                },\n                data: {\n                    emailVerified: new Date()\n                }\n            });\n        }\n    },\n    callbacks: {\n        async session ({ token, session }) {\n            // console.log({\n            //   sessionToken: token,\n            // });\n            if (token.sub && session.user) {\n                session.user.id = token.sub;\n            }\n            if (token.role && session.user) {\n                session.user.role = token.role;\n            }\n            return session;\n        },\n        async jwt ({ token }) {\n            if (!token.sub) return token;\n            const existingUser = await (0,_data_user__WEBPACK_IMPORTED_MODULE_1__.getUserById)(token.sub);\n            if (!existingUser) return token;\n            token.role = existingUser.role;\n            return token;\n        }\n    },\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__.PrismaAdapter)(_lib_db__WEBPACK_IMPORTED_MODULE_2__.db),\n    session: {\n        strategy: \"jwt\"\n    },\n    ..._auth_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDRztBQUNaO0FBQ3VCO0FBRUs7QUFZMUQsdUNBQXVDO0FBQ3ZDLG1DQUFtQztBQUNuQyxvQkFBb0I7QUFDcEIsK0JBQStCO0FBQy9CLE1BQU07QUFDTixJQUFJO0FBRUoseUdBQXlHO0FBRWxHLE1BQU0sRUFDWEssVUFBVSxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRSxFQUN2QkMsSUFBSSxFQUNKQyxNQUFNLEVBQ05DLE9BQU8sRUFDUixHQUFHTixxREFBUUEsQ0FBQztJQUNYTyxPQUFPO1FBQ0xGLFFBQVE7UUFDUkcsT0FBTztJQUNUO0lBQ0FDLFFBQVE7UUFDTixNQUFNQyxhQUFZLEVBQUVDLElBQUksRUFBRTtZQUN4QixNQUFNYix1Q0FBRUEsQ0FBQ2EsSUFBSSxDQUFDQyxNQUFNLENBQUM7Z0JBQ25CQyxPQUFPO29CQUFFQyxJQUFJSCxLQUFLRyxFQUFFO2dCQUFDO2dCQUNyQkMsTUFBTTtvQkFBRUMsZUFBZSxJQUFJQztnQkFBTztZQUNwQztRQUNGO0lBQ0Y7SUFDQUMsV0FBVztRQUNULE1BQU1DLFNBQVEsRUFBRUMsS0FBSyxFQUFFRCxPQUFPLEVBQUU7WUFDOUIsZ0JBQWdCO1lBQ2hCLHlCQUF5QjtZQUN6QixNQUFNO1lBRU4sSUFBSUMsTUFBTUMsR0FBRyxJQUFJRixRQUFRUixJQUFJLEVBQUU7Z0JBQzdCUSxRQUFRUixJQUFJLENBQUNHLEVBQUUsR0FBR00sTUFBTUMsR0FBRztZQUM3QjtZQUVBLElBQUlELE1BQU1FLElBQUksSUFBSUgsUUFBUVIsSUFBSSxFQUFFO2dCQUM5QlEsUUFBUVIsSUFBSSxDQUFDVyxJQUFJLEdBQUdGLE1BQU1FLElBQUk7WUFDaEM7WUFFQSxPQUFPSDtRQUNUO1FBQ0EsTUFBTUksS0FBSSxFQUFFSCxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDQSxNQUFNQyxHQUFHLEVBQUUsT0FBT0Q7WUFFdkIsTUFBTUksZUFBZSxNQUFNM0IsdURBQVdBLENBQUN1QixNQUFNQyxHQUFHO1lBRWhELElBQUksQ0FBQ0csY0FBYyxPQUFPSjtZQUUxQkEsTUFBTUUsSUFBSSxHQUFHRSxhQUFhRixJQUFJO1lBRTlCLE9BQU9GO1FBQ1Q7SUFDRjtJQUNBSyxTQUFTMUIsbUVBQWFBLENBQUNELHVDQUFFQTtJQUN6QnFCLFNBQVM7UUFBRU8sVUFBVTtJQUFNO0lBQzNCLEdBQUc5QixvREFBVTtBQUNmLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2F1dGgudHM/OTIzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aENvbmZpZyBmcm9tIFwiQC9hdXRoLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBnZXRVc2VyQnlJZCB9IGZyb20gXCJAL2RhdGEvdXNlclwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9kYlwiO1xyXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBhdXRoL3ByaXNtYS1hZGFwdGVyXCI7XHJcbmltcG9ydCB7IFVzZXJSb2xlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmltcG9ydCBOZXh0QXV0aCwgeyB0eXBlIERlZmF1bHRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgRXh0ZW5kZWRVc2VyID0gRGVmYXVsdFNlc3Npb25bXCJ1c2VyXCJdICYge1xyXG4gIHJvbGU6IFVzZXJSb2xlO1xyXG59O1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCJuZXh0LWF1dGhcIiB7XHJcbiAgaW50ZXJmYWNlIFNlc3Npb24ge1xyXG4gICAgdXNlcjogRXh0ZW5kZWRVc2VyO1xyXG4gIH1cclxufVxyXG5cclxuLy8gaW1wb3J0IHsgSldUIH0gZnJvbSBcIm5leHQtYXV0aC9qd3RcIjtcclxuLy8gZGVjbGFyZSBtb2R1bGUgXCJuZXh0LWF1dGgvand0XCIge1xyXG4vLyAgIGludGVyZmFjZSBKV1Qge1xyXG4vLyAgICAgcm9sZT86IFwiQURNSU5cIiB8IFwiVVNFUlwiO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL3YzL2NvbmZpZ3VyYXRpb24vY2FsbGJhY2tzaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL3YzL2NvbmZpZ3VyYXRpb24vY2FsbGJhY2tzXHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gIGhhbmRsZXJzOiB7IEdFVCwgUE9TVCB9LFxyXG4gIGF1dGgsXHJcbiAgc2lnbkluLFxyXG4gIHNpZ25PdXQsXHJcbn0gPSBOZXh0QXV0aCh7XHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogXCIvYXV0aC9sb2dpblwiLFxyXG4gICAgZXJyb3I6IFwiL2F1dGgvZXJyb3JcIixcclxuICB9LFxyXG4gIGV2ZW50czoge1xyXG4gICAgYXN5bmMgbGlua0FjY291bnQoeyB1c2VyIH0pIHtcclxuICAgICAgYXdhaXQgZGIudXNlci51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1c2VyLmlkIH0sXHJcbiAgICAgICAgZGF0YTogeyBlbWFpbFZlcmlmaWVkOiBuZXcgRGF0ZSgpIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHRva2VuLCBzZXNzaW9uIH0pIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coe1xyXG4gICAgICAvLyAgIHNlc3Npb25Ub2tlbjogdG9rZW4sXHJcbiAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgaWYgKHRva2VuLnN1YiAmJiBzZXNzaW9uLnVzZXIpIHtcclxuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5zdWI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0b2tlbi5yb2xlICYmIHNlc3Npb24udXNlcikge1xyXG4gICAgICAgIHNlc3Npb24udXNlci5yb2xlID0gdG9rZW4ucm9sZSBhcyBVc2VyUm9sZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgand0KHsgdG9rZW4gfSkge1xyXG4gICAgICBpZiAoIXRva2VuLnN1YikgcmV0dXJuIHRva2VuO1xyXG5cclxuICAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZ2V0VXNlckJ5SWQodG9rZW4uc3ViKTtcclxuXHJcbiAgICAgIGlmICghZXhpc3RpbmdVc2VyKSByZXR1cm4gdG9rZW47XHJcblxyXG4gICAgICB0b2tlbi5yb2xlID0gZXhpc3RpbmdVc2VyLnJvbGU7XHJcblxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihkYiksXHJcbiAgc2Vzc2lvbjogeyBzdHJhdGVneTogXCJqd3RcIiB9LFxyXG4gIC4uLmF1dGhDb25maWcsXHJcbn0pOyJdLCJuYW1lcyI6WyJhdXRoQ29uZmlnIiwiZ2V0VXNlckJ5SWQiLCJkYiIsIlByaXNtYUFkYXB0ZXIiLCJOZXh0QXV0aCIsImhhbmRsZXJzIiwiR0VUIiwiUE9TVCIsImF1dGgiLCJzaWduSW4iLCJzaWduT3V0IiwicGFnZXMiLCJlcnJvciIsImV2ZW50cyIsImxpbmtBY2NvdW50IiwidXNlciIsInVwZGF0ZSIsIndoZXJlIiwiaWQiLCJkYXRhIiwiZW1haWxWZXJpZmllZCIsIkRhdGUiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidG9rZW4iLCJzdWIiLCJyb2xlIiwiand0IiwiZXhpc3RpbmdVc2VyIiwiYWRhcHRlciIsInN0cmF0ZWd5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./auth.ts\n");

/***/ }),

/***/ "(rsc)/./data/user.ts":
/*!**********************!*\
  !*** ./data/user.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserByEmail: () => (/* binding */ getUserByEmail),\n/* harmony export */   getUserById: () => (/* binding */ getUserById)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n\nconst getUserByEmail = async (email)=>{\n    try {\n        return await _lib_db__WEBPACK_IMPORTED_MODULE_0__.db.user.findUnique({\n            where: {\n                email\n            }\n        });\n    } catch  {\n        return null;\n    }\n};\nconst getUserById = async (id)=>{\n    try {\n        return await _lib_db__WEBPACK_IMPORTED_MODULE_0__.db.user.findUnique({\n            where: {\n                id\n            }\n        });\n    } catch  {\n        return null;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9kYXRhL3VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBRXZCLE1BQU1DLGlCQUFpQixPQUFPQztJQUNuQyxJQUFJO1FBQ0YsT0FBTyxNQUFNRix1Q0FBRUEsQ0FBQ0csSUFBSSxDQUFDQyxVQUFVLENBQUM7WUFDOUJDLE9BQU87Z0JBQUVIO1lBQU07UUFDakI7SUFDRixFQUFFLE9BQU07UUFDTixPQUFPO0lBQ1Q7QUFDRixFQUFFO0FBRUssTUFBTUksY0FBYyxPQUFPQztJQUNoQyxJQUFJO1FBQ0YsT0FBTyxNQUFNUCx1Q0FBRUEsQ0FBQ0csSUFBSSxDQUFDQyxVQUFVLENBQUM7WUFDOUJDLE9BQU87Z0JBQUVFO1lBQUc7UUFDZDtJQUNGLEVBQUUsT0FBTTtRQUNOLE9BQU87SUFDVDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2RhdGEvdXNlci50cz85YmMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSBcIkAvbGliL2RiXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckJ5RW1haWwgPSBhc3luYyAoZW1haWw6IHN0cmluZykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgZW1haWwgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJCeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImRiIiwiZ2V0VXNlckJ5RW1haWwiLCJlbWFpbCIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJnZXRVc2VyQnlJZCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./data/user.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n//Export a singleton instance of PrismaClient\nconst db = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) {\n    globalThis.prisma = db;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTTlDLDZDQUE2QztBQUN0QyxNQUFNQyxLQUFLQyxXQUFXQyxNQUFNLElBQUksSUFBSUgsd0RBQVlBLEdBQUc7QUFFMUQsSUFBSUksSUFBcUMsRUFBRTtJQUN6Q0YsV0FBV0MsTUFBTSxHQUFHRjtBQUN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vbGliL2RiLnRzPzFkZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG4vL0V4cG9ydCBhIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiBQcmlzbWFDbGllbnRcclxuZXhwb3J0IGNvbnN0IGRiID0gZ2xvYmFsVGhpcy5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIGdsb2JhbFRoaXMucHJpc21hID0gZGI7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImRiIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./schemas/index.ts":
/*!**************************!*\
  !*** ./schemas/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoginSchema: () => (/* binding */ LoginSchema),\n/* harmony export */   RegisterSchema: () => (/* binding */ RegisterSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n//Validation for the front and backend\n\nconst LoginSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    email: zod__WEBPACK_IMPORTED_MODULE_0__.string().email({\n        message: \"Invalid email address\"\n    }),\n    password: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(1, {\n        message: \"Password is required\"\n    })\n});\nconst RegisterSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    email: zod__WEBPACK_IMPORTED_MODULE_0__.string().email({\n        message: \"Invalid email address\"\n    }),\n    password: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(6, {\n        message: \"Must be at least 6 characters\"\n    }),\n    confirmPassword: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(6, {\n        message: \"Must be at least 6 characters\"\n    })\n}).superRefine((data, context)=>{\n    if (data.password !== data.confirmPassword) {\n        context.addIssue({\n            code: zod__WEBPACK_IMPORTED_MODULE_0__.ZodIssueCode.custom,\n            path: [\n                \"confirmPassword\"\n            ],\n            message: \"Passwords do not match\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zY2hlbWFzL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNDQUFzQztBQUNiO0FBRWxCLE1BQU1DLGNBQWNELHVDQUFRLENBQUM7SUFDbENHLE9BQU9ILHVDQUFRLEdBQUdHLEtBQUssQ0FBQztRQUN0QkUsU0FBUztJQUNYO0lBQ0FDLFVBQVVOLHVDQUFRLEdBQUdPLEdBQUcsQ0FBQyxHQUFHO1FBQzFCRixTQUFTO0lBQ1g7QUFDRixHQUFHO0FBRUksTUFBTUcsaUJBQWlCUix1Q0FDckIsQ0FBQztJQUNORyxPQUFPSCx1Q0FBUSxHQUFHRyxLQUFLLENBQUM7UUFDdEJFLFNBQVM7SUFDWDtJQUNBQyxVQUFVTix1Q0FBUSxHQUFHTyxHQUFHLENBQUMsR0FBRztRQUMxQkYsU0FBUztJQUNYO0lBQ0FJLGlCQUFpQlQsdUNBQVEsR0FBR08sR0FBRyxDQUFDLEdBQUc7UUFDakNGLFNBQVM7SUFDWDtBQUNGLEdBQ0NLLFdBQVcsQ0FBQyxDQUFDQyxNQUFNQztJQUNsQixJQUFJRCxLQUFLTCxRQUFRLEtBQUtLLEtBQUtGLGVBQWUsRUFBRTtRQUMxQ0csUUFBUUMsUUFBUSxDQUFDO1lBQ2ZDLE1BQU1kLDZDQUFjLENBQUNnQixNQUFNO1lBQzNCQyxNQUFNO2dCQUFDO2FBQWtCO1lBQ3pCWixTQUFTO1FBQ1g7SUFDRjtBQUNGLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3NjaGVtYXMvaW5kZXgudHM/NTEwZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1ZhbGlkYXRpb24gZm9yIHRoZSBmcm9udCBhbmQgYmFja2VuZFxyXG5pbXBvcnQgKiBhcyB6IGZyb20gXCJ6b2RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dpblNjaGVtYSA9IHoub2JqZWN0KHtcclxuICBlbWFpbDogei5zdHJpbmcoKS5lbWFpbCh7XHJcbiAgICBtZXNzYWdlOiBcIkludmFsaWQgZW1haWwgYWRkcmVzc1wiLFxyXG4gIH0pLFxyXG4gIHBhc3N3b3JkOiB6LnN0cmluZygpLm1pbigxLCB7XHJcbiAgICBtZXNzYWdlOiBcIlBhc3N3b3JkIGlzIHJlcXVpcmVkXCIsXHJcbiAgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyU2NoZW1hID0gelxyXG4gIC5vYmplY3Qoe1xyXG4gICAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoe1xyXG4gICAgICBtZXNzYWdlOiBcIkludmFsaWQgZW1haWwgYWRkcmVzc1wiLFxyXG4gICAgfSksXHJcbiAgICBwYXNzd29yZDogei5zdHJpbmcoKS5taW4oNiwge1xyXG4gICAgICBtZXNzYWdlOiBcIk11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCIsXHJcbiAgICB9KSxcclxuICAgIGNvbmZpcm1QYXNzd29yZDogei5zdHJpbmcoKS5taW4oNiwge1xyXG4gICAgICBtZXNzYWdlOiBcIk11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCIsXHJcbiAgICB9KSxcclxuICB9KVxyXG4gIC5zdXBlclJlZmluZSgoZGF0YSwgY29udGV4dCkgPT4ge1xyXG4gICAgaWYgKGRhdGEucGFzc3dvcmQgIT09IGRhdGEuY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgIGNvbnRleHQuYWRkSXNzdWUoe1xyXG4gICAgICAgIGNvZGU6IHouWm9kSXNzdWVDb2RlLmN1c3RvbSxcclxuICAgICAgICBwYXRoOiBbXCJjb25maXJtUGFzc3dvcmRcIl0sXHJcbiAgICAgICAgbWVzc2FnZTogXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4iXSwibmFtZXMiOlsieiIsIkxvZ2luU2NoZW1hIiwib2JqZWN0IiwiZW1haWwiLCJzdHJpbmciLCJtZXNzYWdlIiwicGFzc3dvcmQiLCJtaW4iLCJSZWdpc3RlclNjaGVtYSIsImNvbmZpcm1QYXNzd29yZCIsInN1cGVyUmVmaW5lIiwiZGF0YSIsImNvbnRleHQiLCJhZGRJc3N1ZSIsImNvZGUiLCJab2RJc3N1ZUNvZGUiLCJjdXN0b20iLCJwYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./schemas/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/zod","vendor-chunks/jose","vendor-chunks/oauth4webapi","vendor-chunks/bcryptjs","vendor-chunks/@auth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Csludg%5COneDrive%5CDocuments%5CBVT%5CInternship%5CReactFullstackApp_MLM%5Cfront%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csludg%5COneDrive%5CDocuments%5CBVT%5CInternship%5CReactFullstackApp_MLM%5Cfront&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();