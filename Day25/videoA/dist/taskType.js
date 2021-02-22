"use strict";
// task Union Type
function toStringArray(input) {
    var result = [];
    if (Array.isArray(input)) {
        input.map(function (item) {
            if (item != null) {
                result.push(item.toString());
            }
        });
        return result;
    }
    return result;
}
// let input = ['hello', true, null, undefined, false, 2000];
// console.log(toStringArray(input));
function toArrayOf(input, mapFunction) {
    if (Array.isArray(input)) {
        var result_1 = input.map(function (item) {
            return mapFunction(item);
        });
        return result_1;
    }
    return [];
}
var input = ['hello', true, null, undefined, false, 2000];
var result = toArrayOf(input, function (x) { return (typeof x === 'string' ? x : ''); });
console.log(result);
//# sourceMappingURL=taskType.js.map