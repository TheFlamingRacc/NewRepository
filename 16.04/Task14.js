let arr = [10, 5, 20, 15, 25, 7];

let highestNum = arr.reduce((acc, x) => {
  return x > acc ? x : acc;
}, arr[0]);

console.log(highestNum);
