function createSquareClosure() {
    function squareNumber(a) {
      return a * a;
    }
  
    return squareNumber;
  }
  const squareClosure = createSquareClosure();
  alert(squareClosure(2));
  