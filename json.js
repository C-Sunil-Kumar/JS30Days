// JSON.stringify
// JSON.stringify converts a JavaScript object into a JSON string.
// It can take two additional parameters: a replacer function and a space value for pretty-printing.

const obj = { name: "Alice", age: 30, city: "Wonderland" };
const jsonString = JSON.stringify(obj, null, 2);
console.log(jsonString);

// JSON.parse
// JSON.parse converts a JSON string into a JavaScript object.
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj);