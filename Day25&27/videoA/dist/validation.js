"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { object, string, number } from 'validated/schema';
// import { validate } from 'validated/object';
// lib nya https://www.npmjs.com/package/validate-typescript
var validate_typescript_1 = require("validate-typescript");
var person = {
    name: validate_typescript_1.Primitive(String),
    age: validate_typescript_1.Options([validate_typescript_1.Primitive(Number), 0]),
};
var result;
try {
    result = validate_typescript_1.validate(person, { name: 'simon', age: 50 });
}
catch (error) {
    console.log('Did not validate.');
}
if (result) {
    console.log(result.age * 2, ':', result.name);
}
//# sourceMappingURL=validation.js.map