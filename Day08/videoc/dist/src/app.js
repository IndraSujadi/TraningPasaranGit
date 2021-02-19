"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
function ToDo(props) {
    var content = props.content;
    // return createElement(
    //     'li',
    //     {onClick: () => console.log('Clicked')},
    //     item.content);
    return (React.createElement("li", { onClick: function () { return console.log('Clicked'); } },
        " ",
        content,
        " "));
    // let content = item.isDone ? `<s>${item.name}</s>` : item.name;
    // return `<li onClick="emitEvent('done', '${item.id}')">${content}</li>`;
}
function App(props) {
    var todoItems = props.todoItems;
    return react_1.createElement('ul', {}, todoItems.map(function (item) {
        return react_1.createElement(ToDo, item);
    }));
}
exports.App = App;
// <button onClick="emitEvent('increaseCount')">Increase</button>
// <button onClick="emitEvent('decreaseCount')">decrease</button>
//# sourceMappingURL=app.js.map