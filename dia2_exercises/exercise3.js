// change everything below to the newer Javascript!

// let + const
// var a = "test";
// var b = true;
// var c = 789;
// a = "test2";

let a = "test";
const b = true;
const c = 789;
a = "test2";

// Destructuring
// var person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const { firstName, lastName, eyeColor } = person;
let { age } = person;

// Object properties
// var a = "test";
// var b = true;
// var c = 789;

// var okObj = {
//   a: a,
//   b: b,
//   c: c,
// };

const a = "test";
const b = true;
const c = 789;

var okObj = { a, b, c };

// Template strings
// var message =
//   "Hello " +
//   firstName +
//   " have I met you before? I think we met in " +
//   city +
//   " last summer no???";

const firstName = "Pontius";
const city = "Telerion";

const chat = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
// function isValidAge(age) {
//   return age;
// }

const isValidAge = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"

let sym = Symbol("This is my first Symbol");

// Arrow functions
// function whereAmI(username, location) {
//   if (username && location) {
//     return "I am not lost";
//   } else {
//     return "I am totally lost!";
//   }
// }

const whereAmI = (username, location) => {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
};
