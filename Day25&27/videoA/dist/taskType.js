"use strict";
// task Union Type
function toStringArray(input) {
    var result = [];
    if (Array.isArray(input)) {
        input.map(function (item) {
            if (typeof item === 'string') {
                result.push(item);
            }
        });
        return result;
    }
    return result;
}
var input = ['hello', true, null, undefined, false, 2000];
console.log(toStringArray(input));
function toArrayOf(input, mapFunction) {
    if (Array.isArray(input)) {
        var result_1 = input.map(function (item) {
            return mapFunction(item);
        });
        return result_1;
    }
    else {
        return [];
    }
}
// let input = ['hello', true, null, undefined, false, 2000];
// let result = toArrayOf(input, x => (typeof x === 'string' ? x : ''));
// console.log(result);
//# sourceMappingURL=taskType.js.map