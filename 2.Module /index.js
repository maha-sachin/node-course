// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)


// that every file is a module (by default).

const { people,ages} = require("./people");
const greet = require("./greet")
// const greetings = require("./greetings");
// const calculate = require("./calculate");

greet(people);

console.log(ages);


// console.log(num1);
// console.log(num2);
// console.log(num3);
// calculate(num2, num3);

// calculate(10, 20);

// greetings(person1);
// greetings(person2);
// greetings(person3);

// console.log(person1);
// console.log(person2);
// console.log(person3);