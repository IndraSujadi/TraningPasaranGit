"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = require("react");
function ToDo(props) {
    // let {item} = props
    // return createElement(
    //     'li',
    //     {onClick: () => console.log('Clicked')},
    //     item.content);
    // return(<li onclick={() => console.log('Clicked')}> {item.content} </li> );
    // let content = item.isDone ? `<s>${item.name}</s>` : item.name;
    // return `<li onClick="emitEvent('done', '${item.id}')">${content}</li>`;
}
function App(props) {
    var todoItems = props.todoItems;
    return react_1.createElement('ul', {}, todoItems.map(function (item) {
        // return createElement(ToDo, {item});
    }));
}
exports.App = App;
// <button onClick="emitEvent('increaseCount')">Increase</button>
// <button onClick="emitEvent('decreaseCount')">decrease</button>
//# sourceMappingURL=app.jsx.map