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
exports.id = "pages/api/comments/[postID]";
exports.ids = ["pages/api/comments/[postID]"];
exports.modules = {

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/comments/[postID].ts":
/*!****************************************!*\
  !*** ./pages/api/comments/[postID].ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ commentsHandler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _server_comments_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../server/comments.json */ \"(api)/./server/comments.json\");\n\n\n\nconst comments = _server_comments_json__WEBPACK_IMPORTED_MODULE_2__;\n\nfunction commentsForPost(postId) {\n  return comments.filter(({\n    post\n  }) => post === postId);\n}\n\nfunction commentsHandler(req, res) {\n  const postId = Number(req.query.id);\n\n  switch (req.method) {\n    case \"GET\":\n      {\n        return res.status(200).json(commentsForPost(postId));\n      }\n\n    case \"POST\":\n      {\n        comments.push({\n          id: comments.length + 1,\n          author: req.body.name,\n          content: req.body.comment,\n          post: postId,\n          time: \"Less than a minute ago\"\n        });\n        (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.writeFile)(path__WEBPACK_IMPORTED_MODULE_0___default().resolve(process.cwd(), \"server/comments.json\"), JSON.stringify(comments));\n        return res.json(commentsForPost(postId));\n      }\n\n    default:\n      return res.status(404);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMvW3Bvc3RJRF0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBRUEsTUFBTUcsUUFBUSxHQUFHRCxrREFBakI7O0FBRUEsU0FBU0UsZUFBVCxDQUF5QkMsTUFBekIsRUFBMkM7RUFDekMsT0FBT0YsUUFBUSxDQUFDRyxNQUFULENBQWdCLENBQUM7SUFBRUM7RUFBRixDQUFELEtBQWNBLElBQUksS0FBS0YsTUFBdkMsQ0FBUDtBQUNEOztBQUVjLFNBQVNHLGVBQVQsQ0FDYkMsR0FEYSxFQUViQyxHQUZhLEVBR2I7RUFDQSxNQUFNTCxNQUFNLEdBQUdNLE1BQU0sQ0FBQ0YsR0FBRyxDQUFDRyxLQUFKLENBQVVDLEVBQVgsQ0FBckI7O0VBRUEsUUFBUUosR0FBRyxDQUFDSyxNQUFaO0lBQ0UsS0FBSyxLQUFMO01BQVk7UUFDVixPQUFPSixHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQlosZUFBZSxDQUFDQyxNQUFELENBQXBDLENBQVA7TUFDRDs7SUFDRCxLQUFLLE1BQUw7TUFBYTtRQUNYRixRQUFRLENBQUNjLElBQVQsQ0FBYztVQUNaSixFQUFFLEVBQUVWLFFBQVEsQ0FBQ2UsTUFBVCxHQUFrQixDQURWO1VBRVpDLE1BQU0sRUFBRVYsR0FBRyxDQUFDVyxJQUFKLENBQVNDLElBRkw7VUFHWkMsT0FBTyxFQUFFYixHQUFHLENBQUNXLElBQUosQ0FBU0csT0FITjtVQUlaaEIsSUFBSSxFQUFFRixNQUpNO1VBS1ptQixJQUFJLEVBQUU7UUFMTSxDQUFkO1FBUUF2QixzREFBUyxDQUNQRCxtREFBQSxDQUFhMEIsT0FBTyxDQUFDQyxHQUFSLEVBQWIsRUFBNEIsc0JBQTVCLENBRE8sRUFFUEMsSUFBSSxDQUFDQyxTQUFMLENBQWUxQixRQUFmLENBRk8sQ0FBVDtRQUtBLE9BQU9PLEdBQUcsQ0FBQ00sSUFBSixDQUFTWixlQUFlLENBQUNDLE1BQUQsQ0FBeEIsQ0FBUDtNQUNEOztJQUNEO01BQ0UsT0FBT0ssR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxDQUFQO0VBckJKO0FBdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3cy1zaXRlLW5leHRqcy8uL3BhZ2VzL2FwaS9jb21tZW50cy9bcG9zdElEXS50cz8wYWI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyB3cml0ZUZpbGUgfSBmcm9tIFwiZnMvcHJvbWlzZXNcIjtcblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB0eXBlIHsgQ29tbWVudCwgRW50aXR5SWQgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5pbXBvcnQgY29tbWVudHNTb3VyY2UgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9jb21tZW50cy5qc29uXCI7XG5cbmNvbnN0IGNvbW1lbnRzID0gY29tbWVudHNTb3VyY2UgYXMgQ29tbWVudFtdO1xuXG5mdW5jdGlvbiBjb21tZW50c0ZvclBvc3QocG9zdElkOiBFbnRpdHlJZCkge1xuICByZXR1cm4gY29tbWVudHMuZmlsdGVyKCh7IHBvc3QgfSkgPT4gcG9zdCA9PT0gcG9zdElkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tbWVudHNIYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIGNvbnN0IHBvc3RJZCA9IE51bWJlcihyZXEucXVlcnkuaWQpO1xuXG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgIGNhc2UgXCJHRVRcIjoge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNvbW1lbnRzRm9yUG9zdChwb3N0SWQpKTtcbiAgICB9XG4gICAgY2FzZSBcIlBPU1RcIjoge1xuICAgICAgY29tbWVudHMucHVzaCh7XG4gICAgICAgIGlkOiBjb21tZW50cy5sZW5ndGggKyAxLFxuICAgICAgICBhdXRob3I6IHJlcS5ib2R5Lm5hbWUsXG4gICAgICAgIGNvbnRlbnQ6IHJlcS5ib2R5LmNvbW1lbnQsXG4gICAgICAgIHBvc3Q6IHBvc3RJZCxcbiAgICAgICAgdGltZTogXCJMZXNzIHRoYW4gYSBtaW51dGUgYWdvXCIsXG4gICAgICB9KTtcblxuICAgICAgd3JpdGVGaWxlKFxuICAgICAgICBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgXCJzZXJ2ZXIvY29tbWVudHMuanNvblwiKSxcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoY29tbWVudHMpXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gcmVzLmpzb24oY29tbWVudHNGb3JQb3N0KHBvc3RJZCkpO1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInBhdGgiLCJ3cml0ZUZpbGUiLCJjb21tZW50c1NvdXJjZSIsImNvbW1lbnRzIiwiY29tbWVudHNGb3JQb3N0IiwicG9zdElkIiwiZmlsdGVyIiwicG9zdCIsImNvbW1lbnRzSGFuZGxlciIsInJlcSIsInJlcyIsIk51bWJlciIsInF1ZXJ5IiwiaWQiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwicHVzaCIsImxlbmd0aCIsImF1dGhvciIsImJvZHkiLCJuYW1lIiwiY29udGVudCIsImNvbW1lbnQiLCJ0aW1lIiwicmVzb2x2ZSIsInByb2Nlc3MiLCJjd2QiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments/[postID].ts\n");

/***/ }),

/***/ "(api)/./server/comments.json":
/*!******************************!*\
  !*** ./server/comments.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":13,"author":"Theodore Roosevelt","content":"Believe you can and you\'re halfway there","time":"1 hour ago","post":7}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comments/[postID].ts"));
module.exports = __webpack_exports__;

})();