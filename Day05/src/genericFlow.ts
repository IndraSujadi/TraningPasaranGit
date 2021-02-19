// Generic flow 
// dapat membuat sebuah tipe dari variabel akan bergantung pada tipe variabel lainnnya
// contoh
// Pada contoh dibawah T merupakan tipe yang bisa berubah ubah sesuai tipe data dari elemen Array arr
// type MapperFunc = (string) => number;
function mapFunction<T, U>(array: Array<T>, fn:(arr: T) => U) :Array<U> {
    let result = [];
    for(let item of array) {
        result.push(fn(item));
    }
    return result;
}

let arr = ['andi','ira','nissa'];
let coba= mapFunction(arr, (nama) => nama.length);

console.log(coba);

// const last = <T>(arr: T[]) => {
//     return arr[arr.length - 1];
// }

// const l = last([1,2,3]);

// const lw = last(['a','b','c']);