const numbers = [1, 3, 4, 6, 2, 0];

const highestNumber = numbers.reduce((acc, x) => {
  return x > acc ? (acc = x) : acc;
}, 0);

console.log(highestNumber);
