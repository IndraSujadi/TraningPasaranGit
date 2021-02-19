function mapFunction(array, fn) {
    let result = [];
    for (let item of array) {
        result.push(fn(item));
    }
    return result;
}
let arr = ['andi', 'ira', 'nissa'];
let coba = mapFunction(arr, (nama) => nama.length);
console.log(coba);
//# sourceMappingURL=genericFlow.js.map