const sum = (n, result = 0) => {
  if (n === 0) {
    return result;
  } else {
    return sum(n - 1, result + n);
  }
};

console.log(sum(3));
