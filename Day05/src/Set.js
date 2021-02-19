let StudentsSet = new Set();

let studentOne = {
    NIK : '00000020873' ,
    nama : 'Indra Sujadi',
    jurusan : 'Sistem Informasi',
    biaya : 1500000
}

let studentTwo = {
    NIK : '00000020793' ,
    nama : 'Dandi asd',
    jurusan : 'Sistem Informasi',
    biaya : 100000
}

StudentsSet.add(studentOne);
StudentsSet.add(studentTwo);

// console.log(StudentsSet.size);

console.log(StudentsSet.has(studentOne));