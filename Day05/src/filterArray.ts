function FilterArray<T, R>(arr: Array<T>, fn: (item : T) => R ): Array<R> {
    let result = [];
    for(let e of arr) {
        if(fn(e) !== undefined ) {
            result.push(fn(e));
        }
    }
    return result;
}

let arrNama = ['indra','sujadi','ani'];
let filter = FilterArray(arrNama, (e) => {
    if(e.length  > 3 ) {
        return e;
    } 
}
);

console.log(filter);

let x = arrNama.filter((a) => {
    if(a.length > 3) {
        return a;
    }
});

console.log(x);