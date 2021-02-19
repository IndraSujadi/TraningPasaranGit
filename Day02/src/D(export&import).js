// bisa juga export dengan cara 
// export function compareObjects (objOne, objTwo) {}

// untuk default
// export default function compareObjects (objOne, objTwo) {}

export function compareArrays (arrOne, arrTwo) {
    
}

export default function compareObjects (objOne, objTwo) {
    let keysOne = Object.keys(objOne);
    let keysTwo = Object.keys(objTwo);

    let result = true;

    if(keysOne.length !== keysTwo.length) {
        result = false;
    } else {
        for( let key of keysOne) {
            if(satu[key] !== dua[key]) {
                result = false;
            }
        }
    }
    return result;
}

// let satu = {
//     one : 1, 
//     two : 2
// }

// let dua = {
//     two : 2,
//     one : 1
// }

// console.log(compareObjects(satu, dua));

// export functionnya 
//  untuk export 1 fungsi
export default compareArrays;

// untuk export lebih dari 1 fungsi
export {compareObjects, compareArrays};