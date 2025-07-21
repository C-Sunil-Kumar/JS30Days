// call

const person={
    name: "Alice",
    age: 30
}

// Using call to invoke a function with a specific context
function greet(greeting,punctuation) {
    console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old.`);
}

//greet.call(person, "Hello"); // Hello, my name is Alice and I am 30 years old.
// Using apply to invoke a function with a specific context and arguments as an array
greet.apply(person, ["Hi", "!"]); // Hi, my name is Alice and I am 30 years old!
