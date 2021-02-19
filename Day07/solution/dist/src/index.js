"use strict";
// type State = {
//     nama: string;
// }
// let state = {
//     nama: 'Indra',
// };
// global.changeCount = () => {
//     state.nama = "anid";
//     render();
// };
function renderApp() {
    return "\n    <p onClick=\"changeName()\">Hello, !</p>\n    ";
}
function render() {
    var html = renderApp();
    if (document.body) {
        document.body.innerHTML = html;
    }
}
render();
//# sourceMappingURL=index.js.map