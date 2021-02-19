// @flow

// minimum length = 6
// include at least 1 lowercase and 1 Uppercase

// use RegEx 
// function checkPassword(password: string) {
//     // TODO
//     let reason = [];
//     let sukses = false;
//     if(password.length < 6) {
//         reason.push('Password to short');
//     } else if( !password.match(/[a-z]/g)) {
//         reason.push('Password must include 1 lower case');
//     } else if( !password.match(/[A-Z]/g)) {
//         reason.push('Password must include 1 upper case');
//     } else {
//         sukses = true;
//     }
        
//     // return {success: true, reason: 'null'};
//     return {success: sukses , reason: reason};
// }

// let check = checkPassword('indra10');
// let {success, reason} = check;

// console.log(`status: ${success}, alasan: ${reason}`);

// *without regex

function checkPassword(password: string) {
    // TODO
    
    if(password.length < 6) {
        return {success: false, reason: 'Password to short'};
    } else
    if( !containsCharInRange(password, 'A','Z') || !containsCharInRange(password, 'a','z')) {
        return {success: false, reason: 'Password does not meet the requirements'};
    } else {
        return {success: true, reason:'OK'};
    }
   
}

function containsCharInRange(word:string, minBound:string, maxBound:string) {
    let charCodeMin = minBound.charCodeAt(0);
    let charCodeMax = maxBound.charCodeAt(0);
    for(let i = 0;i<= word.length;i++) {
        let charCode = word.charCodeAt(i);
        if(charCode >= charCodeMin && charCode <= charCodeMax) {
            return true;
        } 
    }

    false;
}


console.log(checkPassword('indra10'));
