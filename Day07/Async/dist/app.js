"use strict";
exports.__esModule = true;
// import {fs} from 'fs';
var fs = require("fs");
var path_1 = require("path"); // helper function untuk path file
// untuk menangkap error gunakan try catch 
// try {
// } catch(error) {
//     error.type;
//     error.message;
//     error.code;
// };
//  handling error in callbacks
console.log('I will read the directory next');
// variable __dirname = berisi path dari file yang dkerjakan dimanapun file itu disimpan
// flow atau typescript tidak peduli kita bekerja di file mana
//  yang dipedulikan adalah kita run dari directory mana makanya menggunakan
// ./dist bukan ../dist karena di run dengan diterktori Day07 bukan D07/src 
var path = path_1.join(__dirname, '../dist');
fs.readdir(path, function (error, fileList) {
    if (error) {
        throw error;
        ;
    }
    var _loop_1 = function (fileName) {
        // ini dia syncronus jadi harus nunggu atau ke block kalau loopingnya blm selesai
        // let result = fs.statSync(join(path, fileName));
        // console.log(fileName, result.size);
        // ini bentuk asyncrouns atau pake call back dari fs.stat
        fs.stat(path_1.join(path, fileName), function (error, result) {
            console.log(fileName, result.size);
        });
        console.log('test');
    };
    for (var _i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
        var fileName = fileList_1[_i];
        _loop_1(fileName);
    }
});
console.log('Oh, Hai.');
