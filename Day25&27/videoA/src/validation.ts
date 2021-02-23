// import { object, string, number } from 'validated/schema';
// import { validate } from 'validated/object';
// lib nya https://www.npmjs.com/package/validate-typescript
import { Email, ID, RegEx, Type, Options, Optional, Nullable, Alias, Any, All, validate, Primitive } from 'validate-typescript';
const person = {
  name: Primitive(String),
  age: Options([Primitive(Number), 0]),
};

let result;
try {
  result = validate(person, { name: 'simon', age: 50 });
} catch (error) {
  console.log('Did not validate.');
}

if (result) {
  console.log(result.age * 2, ':', result.name);
}
