"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ulStyle = exports.contactDetailStyle = exports.contactListStyle = exports.gridContainer = void 0;
// style
exports.gridContainer = {
    border: "1px solid rgba(0, 0, 0, 0.8)",
    display: "grid",
    padding: 5,
    gridTemplateColumns: "500px 1fr",
};
exports.contactListStyle = {
    gridColumn: 1 / 2,
    margin: 1,
    borderRight: "1px solid rgba(0, 0, 0, 0.8)",
    padding: 20,
    fontSize: 20,
};
exports.contactDetailStyle = {
    gridColumn: 2 / 3,
    margin: 1,
    padding: 20,
    fontSize: 15,
};
exports.ulStyle = {
    listStyle: "none",
};
//# sourceMappingURL=styles.js.map