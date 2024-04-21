let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

let counter = arr.reduce((acc, x) => {
  const newAcc = { ...acc };

  if (newAcc[x]) {
    newAcc[x]++;
  } else {
    newAcc[x] = 1;
  }

  return newAcc;
}, {});
console.log(counter);
