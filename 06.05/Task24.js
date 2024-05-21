const numbers = [1, 2, 3, 5, 4, 6, 7, 8, 9, 10];

const middle = numbers.reduce((acc, x) => acc + x, 0) / numbers.length;

console.log(middle);
