let arr = [10, 5, 20, 15, 25, 7];

let highestNum = arr.reduce((acc, x) => {
  if (x > acc) {
    acc = x;
  }
  return acc;
}, 0);
console.log(highestNum);
