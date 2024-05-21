const numbers = [2, 4, 6, 8, 10];

const sumOfSquares = numbers.reduce((acc, x) => acc + Math.pow(x, 2), 0);

const mean = numbers.reduce((acc, x) => acc + x, 0) / numbers.length;

const sumOfSquaredDeviations = numbers.reduce((acc, x) => acc + Math.pow(x - mean, 2), 0);

console.log(sumOfSquares);
console.log(mean);
console.log(sumOfSquaredDeviations);



