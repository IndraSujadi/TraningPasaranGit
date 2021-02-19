// .replace untuk replace string

let string = 'Apel harganya 5 per buah';

// ubah string menjadi 'Apel harganya $5 per buah
let result = string.replace(/\d+/, (match) => {
    let n =Number(match); // ubah tipe match jadi number agar dapat dilakukan proses perhitungan
    return'$'+ Math.round(n).toFixed(2);
});
//  match diatas adalah karakter yang sesuai degan pattern regex
console.log(result);

//  NOte : .replace punya 2 parameter (regex, function);
//  dalam function kita bisa manipulasi karakter atau string yang ingin diubah dan 
// mengembalikannya dalam bentuk string