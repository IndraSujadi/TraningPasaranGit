"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Todo_1 = require("./Todo");
var NewItemForm_1 = require("./NewItemForm");
// contoh class untuk localstate
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            todoItems: [
                { id: "1", content: "Training", isDone: false },
                { id: "2", content: "Make a Report", isDone: false },
                { id: "3", content: "Exercise", isDone: false },
            ],
            inputValue: "",
            searchKey: "",
        };
        _this._toggleDone = function (id) {
            var newTodoItems = _this.state.todoItems.map(function (item) {
                if (item.id === id) {
                    return (item = __assign(__assign({}, item), { isDone: !item.isDone }));
                }
                else {
                    return (item = item);
                }
            });
            _this.setState({
                todoItems: newTodoItems,
            });
        };
        _this.addNewItem = function () {
            var _a = _this.state, todoItems = _a.todoItems, inputValue = _a.inputValue;
            var newTodoItems = {
                id: Math.random().toString(),
                content: inputValue,
                isDone: false,
            };
            _this.setState({
                todoItems: __spreadArrays(todoItems, [newTodoItems]),
                inputValue: "",
            });
        };
        _this._onChange = function (event) {
            // let { todoItems } = this.state;
            var newKey = event.target.value.toString();
            _this.setState({
                searchKey: newKey,
            });
        };
        _this.clearInput = function () {
            _this.setState({
                inputValue: "",
            });
        };
        _this.onInput = function (text) {
            _this.setState({
                inputValue: text,
            });
        };
        return _this;
    }
    App.prototype.render = function () {
        var _this = this;
        var _a = this.state, todoItems = _a.todoItems, searchKey = _a.searchKey;
        var filteredTodoItems;
        if (searchKey === "") {
            filteredTodoItems = todoItems;
        }
        else {
            var lowerSearchKey_1 = searchKey.toLowerCase();
            filteredTodoItems = todoItems.filter(function (item) {
                return item.content.toLowerCase().includes(lowerSearchKey_1);
            });
        }
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("input", { type: "text", placeholder: "Search...", onChange: this._onChange }),
            react_1.default.createElement("ul", null, filteredTodoItems.map(function (item) { return (react_1.default.createElement(Todo_1.Todo, { key: item.id, item: item, toggleDone: _this._toggleDone })); })),
            react_1.default.createElement(NewItemForm_1.NewItemForm, { addNewItem: this.addNewItem, onInput: this.onInput, inputValue: this.state.inputValue }),
            react_1.default.createElement("button", { onClick: this.clearInput }, "Clear")));
    };
    return App;
}(react_1.Component));
exports.default = App;
//# sourceMappingURL=App.js.map