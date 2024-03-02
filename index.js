// TypeError: replace is not a function in JavaScript

// EXAMPLE 1 - Convert the value to a String before calling `replace()`

const num = 10;

// ✅ call toString() first
const result = num.toString().replace(/[0-9]/g, '-');

console.log(result); // 👉️ "--"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using the String() constructor instead

// const num = 10;

// const result = String(num).replace(/[0-9]/g, '-');

// console.log(result); // 👉️ "--"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if the value is a `string` before calling `replace()`

// const num = 12345;

// const result =
//   typeof num === 'string' ? num.replace(/[0-9]/g, '-') : '';

// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using a simple `if` statement

// const num = 12345;

// let result = '';

// if (typeof num === 'string') {
//   result = num.replace(/[0-9]/g, '-');
// }

// console.log(result); // 👉️ ""
