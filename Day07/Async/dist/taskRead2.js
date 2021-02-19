"use strict";
// buat versi sequential
exports.__esModule = true;
var fs = require("fs");
var path_1 = require("path");
var path = path_1.join(__dirname, '../dist');
fs.readdir(path, function (error, fileList) {
    if (error) {
        throw error;
        ;
    }
    // console.log(fileList);
    var allResult = new Map();
    var i = 0;
    var baca = function () {
        fs.stat(path_1.join(path, fileList[i]), function (error, result) {
            allResult.set(fileList[i], result.size);
            if (i === fileList.length - 1) {
                // console.log(allResult);
                console.log('done');
            }
            else {
                console.log(fileList[i] + ':' + allResult.get(fileList[i]));
                i += 1;
                baca();
            }
        });
    };
    baca();
});
