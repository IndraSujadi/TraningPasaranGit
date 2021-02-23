function toStringArrayS(input: any): Array<string> {
  if (Array.isArray(input)) {
    return input.filter(item => typeof item === 'string');
  } else {
    return [];
  }
}

// let inputS = ['hello', true, null, undefined, false, 2000];
// console.log(toStringArrayS(inputS));

function toArrayOfS<T>(input: any, mapFunction: (param: any) => T): Array<T> {
  if (Array.isArray(input)) {
    return input.map(mapFunction);
  } else {
    return [];
  }
}

let result = toArrayOfS([1, 2, 3], el => String(el));
console.log(result);
