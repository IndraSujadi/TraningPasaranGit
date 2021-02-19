let StudentsData = new Map();

StudentsData.set('00000020873', {
    NIK : '00000020873' ,
    nama : 'Indra Sujadi',
    jurusan : 'Sistem Informasi',
    biaya : 1500000,
    method : () => console.log('hi')
});

StudentsData.set('00000020793', {
    NIK : '00000020793' ,
    nama : 'Dandi asd',
    jurusan : 'Sistem Informasi',
    biaya : 100000
});
// console.log(StudentsData.has('12346'));

// let keys = StudentsData.keys();
// console.log(keys);
// let array = Array.from(StudentsData.keys());
let array = Array.from(StudentsData.values());
// console.log(array);

// for(let key of StudentsData.keys()) {
//     console.log(key);
// }

// console.log(StudentsData);

let List = new Map();
let isi = new Map();
List.set(1, isi);
let fn =  () => {console.log('hai');};
isi.set(11, {method : fn});


let aList = List.get('1');
        // functionList = Array.from(functionList);
        if(aList) {
            for(let [id] of aList) {
               let run =aList.get(id);
               run.method();
            }
        }