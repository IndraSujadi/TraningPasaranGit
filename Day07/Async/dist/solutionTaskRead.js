"use strict";
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
    var done = function () {
        for (var _i = 0, fileList_2 = fileList; _i < fileList_2.length; _i++) {
            var fileName = fileList_2[_i];
            var result = allResult.get(fileName);
            if (result) {
                console.log(fileName + ':' + result.size);
            }
        }
        console.log('done');
    };
    var _loop_1 = function (fileName) {
        fs.stat(path_1.join(path, fileName), function (error, result) {
            allResult.set(fileName, result);
            if (allResult.size === fileList.length) {
                done();
            }
            else {
                console.log("wow");
            }
        });
    };
    for (var _i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
        var fileName = fileList_1[_i];
        _loop_1(fileName);
    }
});
