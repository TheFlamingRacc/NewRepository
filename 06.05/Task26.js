const number = 5;
let numbers = [];

for (let i = 1; i <= number; i++) {
  numbers.push(i);
}

const factorial = numbers.reduce((acc, x) => acc * x, 1);

console.log(factorial);
