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
exports.id = "pages/movies";
exports.ids = ["pages/movies"];
exports.modules = {

/***/ "./pages/movies.js":
/*!*************************!*\
  !*** ./pages/movies.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ movies),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction movies({ data  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        m.Title,\n                        \" --- \",\n                        m.Year,\n                        \" --- \",\n                        src = `${m.poster}`\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ADM\\\\Desktop\\\\PWeb\\\\3uni\\\\receita3\\\\Unidade3-Tarefa3\\\\pages\\\\movies.js\",\n                    lineNumber: 5,\n                    columnNumber: 42\n                }, this)\n            )\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ADM\\\\Desktop\\\\PWeb\\\\3uni\\\\receita3\\\\Unidade3-Tarefa3\\\\pages\\\\movies.js\",\n            lineNumber: 4,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADM\\\\Desktop\\\\PWeb\\\\3uni\\\\receita3\\\\Unidade3-Tarefa3\\\\pages\\\\movies.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this);\n};\nasync function getServerSideProps(context) {\n    const res = await fetch(`http://www.omdbapi.com/?apikey=9fa0923&s=bagdad`);\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\nasync function fetcher(url) {\n    const res = await fetch(`http://www.omdbapi.com/?apikey=9fa0923&s=bagdad`);\n    const json = await res.json();\n    return json;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQWUsU0FBU0EsTUFBTSxDQUFDLEVBQUNDLElBQUksR0FBQyxFQUFDO0lBQ2xDLHFCQUNJLDhEQUFDQyxLQUFHO2tCQUNBLDRFQUFDQSxLQUFHO3NCQUNDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQ0MsR0FBRyxDQUFFLENBQUNDLENBQUMsaUJBQUssOERBQUNILEtBQUc7O3dCQUFFRyxDQUFDLENBQUNDLEtBQUs7d0JBQUMsT0FBSzt3QkFBQ0QsQ0FBQyxDQUFDRSxJQUFJO3dCQUFDLE9BQUs7d0JBQUNDLEdBQUcsR0FBQyxDQUFDLEVBQUVILENBQUMsQ0FBQ0ksTUFBTSxDQUFDLENBQUM7Ozs7Ozt3QkFBTztZQUFBLENBQUM7Ozs7O2dCQUNqRjs7Ozs7WUFDSixDQUNUO0NBQ0o7QUFFTSxlQUFlQyxrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFDO0lBQzdDLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0lBQzFFLE1BQU1aLElBQUksR0FBRyxNQUFNVyxHQUFHLENBQUNFLElBQUksRUFBRTtJQUM3QixPQUFPO1FBQ0hDLEtBQUssRUFBRTtZQUNIZCxJQUFJO1NBQ1A7S0FDSjtDQUNKO0FBR0QsZUFBZWUsT0FBTyxDQUFDQyxHQUFHLEVBQUU7SUFFeEIsTUFBTUwsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLCtDQUErQyxDQUFDLENBQUM7SUFFMUUsTUFBTUMsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFO0lBRTdCLE9BQU9BLElBQUk7Q0FDZCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQwLy4vcGFnZXMvbW92aWVzLmpzP2FmNTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW92aWVzKHtkYXRhfSl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5TZWFyY2gubWFwKCAobSkgPT4gPGRpdj57bS5UaXRsZX0gLS0tIHttLlllYXJ9IC0tLSB7c3JjPWAke20ucG9zdGVyfWB9PC9kaXY+KX1cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9OWZhMDkyMyZzPWJhZ2RhZGApXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTlmYTA5MjMmcz1iYWdkYWRgKVxyXG5cclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgcmV0dXJuIGpzb25cclxufVxyXG4iXSwibmFtZXMiOlsibW92aWVzIiwiZGF0YSIsImRpdiIsIlNlYXJjaCIsIm1hcCIsIm0iLCJUaXRsZSIsIlllYXIiLCJzcmMiLCJwb3N0ZXIiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiLCJmZXRjaGVyIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies.js"));
module.exports = __webpack_exports__;

})();