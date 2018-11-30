const mathModule = require('./math-module.js');
console.log(mathModule.sum(3, 8));

let multiplyImported = mathModule.multiply(2, 5);
let divideImported = mathModule.divide(20, 10);
let squareImported = mathModule.square(5);

console.log(multiplyImported);
console.log(divideImported);
console.log(squareImported);

const stringModule = require('./strings-module');
console.log(stringModule.toUpperCase('hello'));
console.log(stringModule.isPalindrome('eye'));
console.log(stringModule.counter('Good bye!'));
