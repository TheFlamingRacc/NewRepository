function createExponentFunction(exp) {
  function exponentFunction(number) {
    return Math.pow(number, exp);
  }

  return exponentFunction;
}

const square = createExponentFunction(2);
console.log(square(3));
