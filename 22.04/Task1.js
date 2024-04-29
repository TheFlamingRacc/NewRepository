const factorial = (a) => {
  if (a === 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
  return (a === 0 ? 1 : a * factorial(a-))
};

alert(factorial(4));
