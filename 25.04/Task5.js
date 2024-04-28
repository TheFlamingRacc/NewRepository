function decimalToBinary(num) {
  if (num <= 1) {
    return num.toString();
  } else {
    const remainder = num % 2;
    const quotient = Math.floor(num / 2);
    return decimalToBinary(quotient) + remainder.toString();
  }
}

console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(25)); // 11001
