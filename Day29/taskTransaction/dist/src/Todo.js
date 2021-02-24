"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
var react_1 = __importDefault(require("react"));
function Todo(props) {
    var item = props.item, toggleDone = props.toggleDone;
    var content = item.isDone ? react_1.default.createElement("s", null, item.content) : item.content;
    return react_1.default.createElement("li", { onClick: function () { return toggleDone(item.id); } }, content);
}
exports.Todo = Todo;
//# sourceMappingURL=Todo.js.map