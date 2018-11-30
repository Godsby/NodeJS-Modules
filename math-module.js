const sum = (sum1, sum2) => {
  return sum1 + sum2;
}

module.exports = {
  sum: sum,
}
//
// const sum = (sum1, sum2) => sum1 + sum2;
//
// module.exports = {
//   sum,
// }
//
// module.exports = {
//   sum: (sum1, sum2) => {
//     return sum1 + sum2;
//   }
// }


// function sum(sum1, sum2) {
//   return sum1 + sum2;
// }
//
// module.exports.sum = sum;

// module.exports.sum = (sum1, sum2) => sum1 + sum2;

const multiply = (sum1, sum2) => {
  return sum1 * sum2
}

function divide(sum1, sum2) {
  return sum1 / sum2;
}

const square = (sum) => sum * sum;

module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.square = square;

const stringModule = require('./strings-module');
console.log(stringModule.toUpperCase('hello'));
console.log(stringModule.isPalindrome('eye'));
console.log(stringModule.counter('Good bye!'));
