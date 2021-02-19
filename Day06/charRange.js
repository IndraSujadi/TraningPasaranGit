// let regex = /[0-9a-f]+$/g;
let regex = /\b[0-9a-f]+\b/g;

let string = "My git commit 0f23e1 is ";
//  bagaimana cara mendefinidkan pattern untuk '0f23e1' ?
// dapat menggunakan character range
let result = string.match(regex);

console.log(result);