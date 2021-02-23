"use strict";
function toStringArrayS(input) {
    if (Array.isArray(input)) {
        return input.filter(function (item) { return typeof item === 'string'; });
    }
    else {
        return [];
    }
}
// let inputS = ['hello', true, null, undefined, false, 2000];
// console.log(toStringArrayS(inputS));
function toArrayOfS(input, mapFunction) {
    if (Array.isArray(input)) {
        return input.map(mapFunction);
    }
    else {
        return [];
    }
}
var result = toArrayOfS([1, 2, 3], function (el) { return String(el); });
console.log(result);
//# sourceMappingURL=taskSolution1.js.map