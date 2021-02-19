// @flow

// ini cara set tipe data untuk sebuah variabel ataupun properti dari object

let n: number = 3;
let s: string = 'hella';
let b: boolean = true;

let x: null = null;
let y: void = undefined;

// untuk tipe array dan object
let a: Array<number> = [1,2,3];

//  untuk object
    //  1. buat type untuk menentukan besar object dan tuipe data dari tiap properti
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
};
    // 2. buat object dengan template tipe data dari type yang telah dibuat sebelumnya
let p: Person = {
    name: 'Indra',
    age: 22,
    isStudent: true,
}

// untuk yang bisa semuanya
let x: number | string | boolean | null | void | Array<> ...
// cukup tulis x:mixed tidak perlu kayak diatas
let x: mixed;
// let x = mixed;