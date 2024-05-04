let number = 1;
let sum = 0;

while (number <= 50) {
  if (number % 5 === 0) {
    sum += number;
  }
  number++;
}

console.log(sum);
