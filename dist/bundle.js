/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar elvenShieldRecipe = {\n  leatherStrips: 2,\n  ironIngot: 1,\n  refinedMoonstone: 4\n}; // ES7 Object spread example\n\nvar elvenGauntletsRecipe = _objectSpread(_objectSpread({}, elvenShieldRecipe), {}, {\n  leather: 1,\n  refinedMoonstone: 1\n});\n\nconsole.log(\"ES7 Object spread example: \", elvenGauntletsRecipe); // ES8 Object.values example\n// Note: Will not transpile without babel/imported polyfills because it is a new method\n\nconsole.log(\"ES8 Object.values example\", Object.values(elvenGauntletsRecipe)); // Event queue block scoping example\n// Check babel output to see that `let` isn't simply switched to `var`\n// because the code would not have the same output.\n\nvar _loop = function _loop(i) {\n  setTimeout(function () {\n    console.log(i);\n  }, 1);\n};\n\nfor (var i = 0; i < 10; i++) {\n  _loop(i);\n} // async/await example from MDN\n\n\nfunction resolveAfter2Seconds() {\n  return new Promise(function (resolve) {\n    setTimeout(function () {\n      resolve(\"resolved\");\n    }, 2000);\n  });\n}\n\nfunction asyncCall() {\n  return _asyncCall.apply(this, arguments);\n}\n\nfunction _asyncCall() {\n  _asyncCall = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var result;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(\"calling\");\n            _context.next = 3;\n            return resolveAfter2Seconds();\n\n          case 3:\n            result = _context.sent;\n            console.log(result); // expected output: \"resolved\"\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _asyncCall.apply(this, arguments);\n}\n\nasyncCall();\n\n//# sourceURL=webpack://blog-js/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;