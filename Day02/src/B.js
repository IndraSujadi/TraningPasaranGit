let students = [
    {name: "Indra", university: "UMN"},
    {name: "Sujadi", university: "UMN"},
    {name: "Aldo",university: "Surya"}
];

function pluck(arrayOfObjects, propertyName) {
    let propetyValues = [];
    for(let student of students) {
        propetyValues.push(student[propertyName]); 
    }
    return propetyValues;
}

// untuk export fungsi ataupun variable agar dapat digunakan pada file js lain yang import file ini 
export default pluck; 