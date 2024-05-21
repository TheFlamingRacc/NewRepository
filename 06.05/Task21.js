const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((acc, x) => {
  return acc + x;
}, 0);

console.log(sum);
