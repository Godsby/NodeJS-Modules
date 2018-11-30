module.exports.toUpperCase = str => str.toUpperCase();
module.exports.isPalindrome = str => {
  if (str.length < 2) return false;
  return str === str.split('').reverse().join('');
};
module.exports.counter = str => {
  let output = {};
  for (let i = 0; i < str.length; i++) {
    let temp = str[i].toLowerCase();
    if (temp === ' ') {
      continue;
    }
    if (output[temp]) {
      output[temp]++;
    } else {
      output[temp] = 1;
    }
  }
  return output;
}

const mathModule = require('./math-module.js');
console.log(mathModule.sum(3, 8));

let multiplyImported = mathModule.multiply(2, 5);
let divideImported = mathModule.divide(20, 10);
let squareImported = mathModule.square(5);

console.log(multiplyImported);
console.log(divideImported);
console.log(squareImported);
