// prototype
// is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. This enables code reuse and the creation of complex data structures.

function person(name, age ){
    this.name = name;
    this.age = age;
}

let person1 = new person('Alice', 30);

person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

person.prototype.intro = function(){
    console.log(`Hi, I'm ${this.name}.`);
}

person1.greet();
person1.intro();