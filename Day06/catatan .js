// cara inisialisasi regex secara literal = let regex = /.../; (... itu pattern regexnya)
//  i disitu merupakan sebuah flag
//  i dibelakang "/" berarti insensitive
//  g = global atau cocokan sebanyak mungkin
    // let regex = /\w+$/g; // deklarasi pattern regex

// method .test pada regex
//  .exec nyocokin lebih detail dan sama sepeti string.match
// .search return index yang memiliki keocokan degnan pattern 
    // let string = 'The Number is 123';
    // let result = string.match(regex);
    //  let result = regex.exec('Hello World');

    // console.log(result);


// ****************************
// cara kedua untuk membuat regex adalah dengan menggunakan constructor (umunya tidak digunakan)
// let reg = new RegExp('...'), yang di dalam kurung itu pattern regexnya

// let reg = new RegExp('...','i');
// **********************************


/* harus dituliskan dalam /.../ (... berarti pattern regex sperti yang dibawah)
. = metacharacter kecuali boolean
... = berarti metacharacter yang diikuti oleh metacharater lain
.o = cari karakter yang memiliki huruf o setelahnya misal : Halo , world hasilnya ['lo','Wo']
\w = any word character (a-z, A-Z, number, or _)
\d = any decimal character (0-9)
(symbol euro)\d = cari karakter dengan (symbol euro) dan diikuti 1 angka decimal
(symbol euro)\d{3} = mirip seperti atasnya tapi diikuti dengan 3 angka decimal
(symbol euro)\d{1,} atau (symbol euro)\d+ = berarti (symbol euro) yang diikuti oleh 1 angka atau lebih
(symbol euro)\d{1,5} = berarti (symbol euro) yang diikuti oleh minimal 1 angka dan maksimal 5 angka

(symbol euro)\w{1,} atau (symbol euro)\w+ = berarti (symbol euro) yang diikuti oleh 1 word karakter atau lebih

/\w+ / = word karakter sebanyak apaun yang diikuti oleh spasi
^ = anchor at the begining of the string
\b = boundary between 2 characters (anchor)
$ = end of the string

\$\d+ = '\' dibelakang $ untuk menganggap $ sebagai sebuah karakter. contoh 'harganya $12',
 maka kalau di string.match(/\$\d+/) hasilnya ['$12']

 \$\d+\.\d{2} = '/' dibelakang '.' untuk escape titik('.') jadi anggap titik adalah karakter titik('.') 
 contoh : 'The price is $1234.85' kalau di string.match() hasilnya $1234.18
*/
