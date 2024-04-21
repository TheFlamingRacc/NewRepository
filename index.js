let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

let counter = arr.reduce((acc, x) => {
  const newAcc = { ...acc, [x]: acc[x] ? acc[x] + 1 : 1 };
  return newAcc;
}, {});
console.log(counter);
