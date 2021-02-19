// import {fs} from 'fs';
import * as fs from 'fs';
import {join} from 'path'; // helper function untuk path file

// untuk menangkap error gunakan try catch 

// try {
   
// } catch(error) {
//     error.type;
//     error.message;
//     error.code;
// };

//  handling error in callbacks
console.log('I will read the directory next');

// variable __dirname = berisi path dari file yang dkerjakan dimanapun file itu disimpan

// flow atau typescript tidak peduli kita bekerja di file mana
//  yang dipedulikan adalah kita run dari directory mana makanya menggunakan
// ./dist bukan ../dist karena di run dengan diterktori Day07 bukan D07/src 

let path = join(__dirname, '../dist');
fs.readdir(path, (error, fileList) => {
    if(error) {
        throw error;;
    }
    for(let fileName of fileList) {
        // ini dia syncronus jadi harus nunggu atau ke block kalau loopingnya blm selesai
        // let result = fs.statSync(join(path, fileName));
        // console.log(fileName, result.size);
        
        // ini bentuk asyncronus atau pake call back dari fs.stat
        fs.stat(join(path, fileName), (error, result) =>{
            console.log(fileName, result.size);
        });
    }
});

console.log('Oh, Hai.');



