function factorial(a) {
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
}
alert(factorial(4));
