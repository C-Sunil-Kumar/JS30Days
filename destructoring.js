//destructuring

//array destructuring

const numbers = [1,2,3,4,5];
const [first, second, ...rest] = numbers;
console.log(first); // 1 
console.log(second); // 2
console.log(rest); // [3, 4, 5]

const [one,two, three = 33] = numbers;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 33

//object destructuring

const person = {
    name: 'John',           
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
};

const{name, age, address:{street, city, country='India'}} = person;
console.log(name); // John 
console.log(age); // 30
console.log(street); // 123 Main St
console.log(city); // Anytown
console.log(country); // India