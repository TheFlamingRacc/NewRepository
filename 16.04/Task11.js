let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((acc, x) => {
  return acc + x;
}, 0);

console.log(sum);
