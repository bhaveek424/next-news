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
exports.id = "pages/api/categories";
exports.ids = ["pages/api/categories"];
exports.modules = {

/***/ "(api)/./pages/api/categories/index.ts":
/*!***************************************!*\
  !*** ./pages/api/categories/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ categoriesHandler)\n/* harmony export */ });\n/* harmony import */ var _server_categories_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../server/categories.json */ \"(api)/./server/categories.json\");\n\nfunction categoriesHandler(req, res) {\n  const categories = _server_categories_json__WEBPACK_IMPORTED_MODULE_0__;\n  return res.status(200).json(categories);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVBO0FBRWUsU0FBU0MsaUJBQVQsQ0FDYkMsR0FEYSxFQUViQyxHQUZhLEVBR2I7RUFDQSxNQUFNQyxVQUFVLEdBQUdKLG9EQUFuQjtFQUNBLE9BQU9HLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCRixVQUFyQixDQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzLXNpdGUtbmV4dGpzLy4vcGFnZXMvYXBpL2NhdGVnb3JpZXMvaW5kZXgudHM/ZmMyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHR5cGUgeyBDYXRlZ29yeSwgUG9zdCB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCBjYXRlZ29yaWVzU291cmNlIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvY2F0ZWdvcmllcy5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhdGVnb3JpZXNIYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxDYXRlZ29yeVtdPlxuKSB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzU291cmNlIGFzIENhdGVnb3J5W107XG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihjYXRlZ29yaWVzKTtcbn1cbiJdLCJuYW1lcyI6WyJjYXRlZ29yaWVzU291cmNlIiwiY2F0ZWdvcmllc0hhbmRsZXIiLCJyZXEiLCJyZXMiLCJjYXRlZ29yaWVzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/categories/index.ts\n");

/***/ }),

/***/ "(api)/./server/categories.json":
/*!********************************!*\
  !*** ./server/categories.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('["Science","Technology","Arts"]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/categories/index.ts"));
module.exports = __webpack_exports__;

})();