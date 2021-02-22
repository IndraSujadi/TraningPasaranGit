import { join, extname } from 'path';
let fileName = 'indo.jpg';
let assetsDirectory = join(__dirname, '../assets');
let filePath = join(assetsDirectory, fileName);
filePath.startsWith(assetsDirectory + '/');

console.log(assetsDirectory);
console.log(filePath);
console.log(assetsDirectory + '/');
console.log(filePath.startsWith(assetsDirectory + '\\'));
