"use strict";
/*
BACA CATATAN INI

class thing extends Otherthing {}
let t = new thing;
inheritancenya
t <- thing.prototype <- Otherthing.prototype <- Object.prototype <- null

Inheritance itu mutable jadi kita bisa ganti propertynya atau isi dari methodnya
*/
var b = [4, 5, 6];
// inheritance untuk Array =  b <- Array.prototype <- Object.prototype <- null
// untuk memakai method to string di Object.prototype
// let toStrings = Object.prototype.toString;
// let result = toStrings.call(b);
// console.log(result);
//  function.call(a, b,c) = a adalah this, sisanya adalah argument
//  call menjalankan function sekaligus mendefiniskan this
// function foo() {
//   console.log(this);
// }
// let fakeThis = 'hi';
// foo.call(fakeThis);
// class thing {
//   foo() {
//     return this;
//   }
// }
// let t = new thing();
// console.log(t == t.foo());
//  let c = 'abc' ini primitive gk bisa c.hello = 'aaa' kalau di console.log jadinya undefined
//  let s = new String('abc') itu jadinya object jadi bisa s.hello = "hi" kalau di console.log(s.hello) hasilnya hi
//# sourceMappingURL=inheritance.js.map