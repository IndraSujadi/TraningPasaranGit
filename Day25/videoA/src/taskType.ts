// task Union Type

function toStringArray(input: any): Array<string> {
  let result: string[] = [];
  if (Array.isArray(input)) {
    input.map(item => {
      if (item != null) {
        result.push(item.toString());
      }
    });
    return result;
  }
  return result;
}

// let input = ['hello', true, null, undefined, false, 2000];
// console.log(toStringArray(input));

function toArrayOf<T>(input: any, mapFunction: (param: any) => T): Array<T> {
  if (Array.isArray(input)) {
    let result = input.map(item => {
      return mapFunction(item);
    });

    return result;
  }
  return [];
}

let input = ['hello', true, null, undefined, false, 2000];
let result = toArrayOf(input, x => (typeof x === 'string' ? x : ''));

console.log(result);
