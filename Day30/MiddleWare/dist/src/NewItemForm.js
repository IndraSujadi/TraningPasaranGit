"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewItemForm = void 0;
var react_1 = __importDefault(require("react"));
function NewItemForm(props) {
    var addNewItem = props.addNewItem, onInput = props.onInput, inputValue = props.inputValue;
    var onChange = function (event) {
        return onInput(event.target.value.toString());
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("button", { onClick: addNewItem }, "Save"),
        react_1.default.createElement("input", { type: "text", value: inputValue, onChange: onChange })));
}
exports.NewItemForm = NewItemForm;
//# sourceMappingURL=NewItemForm.js.map