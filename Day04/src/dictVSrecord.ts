// * dictionary = memiliki jumlah property yang tidak diketahui tapi tiap propertinya sama
// * record = memilki jumlah property yang tetap tetapi tiap property bisa berbeda



// * untuk melakukan mengambil student dengan id tertentu

type Student = {
    id: string;
    name:string;
}
let students: Array<Student> = [
    {id:'123', name:'Indra'},
    {id:'321', name:'Sujadi'},
    /*... dan lain lain */ 
]

// typing sebuah objects dictionaries
// type IndexedStudentList = {[string]: Student} -> {[type of key] : type of value}
type IndexedStudentList = {[id:string]: Student}

let indexedStudentList: IndexedStudentList = {};
for(let student of students) {
    let {id} = student;
    indexedStudentList[id] = student;
}


function getStudentById (id:string) {
    return indexedStudentList[id];
}
 console.log(getStudentById('123'));
 console.log(indexedStudentList);

