//  Encoding utf8 = 8-bit bytes
// 1 bytes = 00000000 - 11111111 (binary)
// hexadecimal = 00 - ff
//  base64 = 6 bit 000000


// Buffer() untuk ubah bentuk karakter ke dalam bentuk biner(0/1) 
let b = Buffer.from('Hell$', 'utf8');

// let str = b.toString('base64');

// console.log(str);

// let str = String.fromCharCode(65);

// console.log(str);

// 000000 000000 000000 000000
// 000000 000000 000000 000000

// Cara tahu berapa bytes yang diperlukan untuk menyimpan "hello"
// karakter diluar askey(karakter yang bisa ditemukan di keyboard) 
// akan terdiri dari beberapa bytes.
// contoh a = 1 bytes, tapi kalau simbol euro itu = >1bytes 
console.log(b.length);