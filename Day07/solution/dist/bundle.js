/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.renderApp = void 0;\r\nfunction renderToDo(item) {\r\n    var content = item.isDone ? \"<s>\" + item.name + \"</s>\" : item.name;\r\n    return \"<li onClick=\\\"emitEvent('done', '\" + item.id + \"')\\\">\" + content + \"</li>\";\r\n}\r\nfunction renderApp(state) {\r\n    return \"\\n    <p>Hello,Its your To DO list</p>\\n    <ul>\\n        \" + state.todoItems.map(function (item) { return renderToDo(item); }).join('') + \"\\n    </ul>\\n    <input id=\\\"myInput\\\" type=\\\"text\\\" \\n        value=\\\"\" + state.newItem + \"\\\" \\n        onInput=\\\"emitEvent('inputList', this.value)\\\"\\n     />\\n    <button onClick=\\\"emitEvent('saveNewItem')\\\">Save</button>\\n    \";\r\n}\r\nexports.renderApp = renderApp;\r\n// <button onClick=\"emitEvent('increaseCount')\">Increase</button>\r\n// <button onClick=\"emitEvent('decreaseCount')\">decrease</button>\r\n\n\n//# sourceURL=webpack://cobaWP/./src/app.ts?");

/***/ }),

/***/ "./src/eventHandlers.ts":
/*!******************************!*\
  !*** ./src/eventHandlers.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.eventHandlers = void 0;\r\nexports.eventHandlers = {\r\n    done: function (oldState, id) {\r\n        var newToDoItems = oldState.todoItems.map(function (item) {\r\n            if (item.id === id) {\r\n                return __assign(__assign({}, item), { isDone: !item.isDone });\r\n            }\r\n            else {\r\n                return item;\r\n            }\r\n        });\r\n        return __assign(__assign({}, oldState), { todoItems: newToDoItems });\r\n    },\r\n    inputList: function (oldState, value) {\r\n        console.log(__assign(__assign({}, oldState), { newItem: value }));\r\n        return __assign(__assign({}, oldState), { newItem: value });\r\n    },\r\n    saveNewItem: function (oldState) {\r\n        var newItem = {\r\n            id: Math.random().toString(),\r\n            name: oldState.newItem,\r\n            isDone: false,\r\n        };\r\n        console.log('SaveItem', newItem);\r\n        var newToDoItems = __spreadArrays(oldState.todoItems, [newItem]);\r\n        return __assign(__assign({}, oldState), { todoItems: newToDoItems, newItem: '' });\r\n    }\r\n    // increaseCount: (oldState) => {\r\n    //     return {...oldState, count: oldState .count +1};\r\n    // },\r\n    // decreaseCount: (oldState) => {\r\n    //     return {...oldState, count: oldState .count -1};\r\n    // }  \r\n};\r\n\n\n//# sourceURL=webpack://cobaWP/./src/eventHandlers.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar globalAny = __webpack_require__.g;\r\nvar app_1 = __webpack_require__(/*! ./app */ \"./src/app.ts\");\r\nvar eventHandlers_1 = __webpack_require__(/*! ./eventHandlers */ \"./src/eventHandlers.ts\");\r\nvar initialState_1 = __importDefault(__webpack_require__(/*! ./initialState */ \"./src/initialState.ts\"));\r\nvar state = initialState_1.default;\r\nglobalAny.emitEvent = function (eventName, id) {\r\n    var eventHandler = eventHandlers_1.eventHandlers[eventName];\r\n    if (eventHandler) {\r\n        state = eventHandler(state, id);\r\n    }\r\n    render();\r\n};\r\nfunction render() {\r\n    var html = app_1.renderApp(state);\r\n    if (document.body) {\r\n        document.body.innerHTML = html;\r\n    }\r\n}\r\nrender();\r\n\n\n//# sourceURL=webpack://cobaWP/./src/index.ts?");

/***/ }),

/***/ "./src/initialState.ts":
/*!*****************************!*\
  !*** ./src/initialState.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar initialState = {\r\n    todoItems: [\r\n        { id: '4', name: 'Buy Oreos', isDone: false },\r\n        { id: '9', name: 'Teach Bootcamp', isDone: false },\r\n        { id: '1', name: 'Clean Laptop', isDone: false },\r\n    ],\r\n    newItem: '',\r\n};\r\nexports.default = initialState;\r\n\n\n//# sourceURL=webpack://cobaWP/./src/initialState.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.ts");
/******/ })()
;