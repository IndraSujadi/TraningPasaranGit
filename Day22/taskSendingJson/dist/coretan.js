"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var fileName = 'indo.jpg';
var assetsDirectory = path_1.join(__dirname, '../assets');
var filePath = path_1.join(assetsDirectory, fileName);
filePath.startsWith(assetsDirectory + '/');
console.log(assetsDirectory);
console.log(filePath);
console.log(assetsDirectory + '/');
console.log(filePath.startsWith(assetsDirectory + '\\'));
//# sourceMappingURL=coretan.js.map