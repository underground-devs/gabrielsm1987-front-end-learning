//Solve these problems:

//#1 Create a one line function that adds adds two parameters

const pizza = (massa, recheio) => massa + recheio;

//Closure: What does the last line return? 13
const addTo = (x) => (y) => x + y;
var addToTen = addTo(10);
addToTen(3);

//Currying: What does the last line return? 31
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);

//Currying: What does the last line return? 17
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12);

//Composing: What does the last line return? 16
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10);

//What are the two elements of a pure function? No side effects(it only depends on its input elements) and deterministc (it aways comes to the same result with the same inputs).
