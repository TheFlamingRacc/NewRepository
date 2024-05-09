const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const bigArray = arrays.reduce((acc, x) => {
  return acc.concat(x);
}, []);

console.log(bigArray);
