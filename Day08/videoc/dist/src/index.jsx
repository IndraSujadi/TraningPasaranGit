"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var app_1 = require("./app");
var todoItems = [
    { id: '3', content: "Buy Oreo", isDone: false },
    { id: '9', content: "Teach Bootcamp", isDone: false },
    { id: '1', content: "Clean Laptop", isDone: false },
];
// render(element, container, callback); Callback optional
react_dom_1.render(react_1.createElement(app_1.App, { todoItems: todoItems }), document.body);
//# sourceMappingURL=index.jsx.map