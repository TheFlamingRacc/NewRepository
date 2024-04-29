const sum = (n, result = 0) => {
  return n === 0 ? result : sum(n - 1, result + n);
};

console.log(sum(3));
