"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var enzyme_1 = require("enzyme");
var NewItemForm_1 = require("../NewItemForm");
it("should render a form", function () {
    var onInput = function () { };
    var addNewItem = function () { };
    var wrapper = enzyme_1.shallow(react_1.default.createElement(NewItemForm_1.NewItemForm, { inputValue: "", onInput: onInput, addNewItem: addNewItem }));
    expect(wrapper.matchesElement(react_1.default.createElement("div", null,
        react_1.default.createElement("button", { onClick: addNewItem }, "Save"),
        react_1.default.createElement("input", { type: "text", value: "" })))).toEqual(true);
});
//# sourceMappingURL=NewItemForm-test.js.map