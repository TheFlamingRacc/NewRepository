let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

let counter = arr.reduce((acc, x) => {
  if (acc[x]) {
    acc[x]++;
  } else {
    acc[x] = 1;
  }
  return acc;
}, {});
console.log(counter);
