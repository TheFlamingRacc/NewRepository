function createAverage() {
  let sum = 0;
  let count = 0;
  function calc(num) {
    sum += num;
    count++;
    return sum / count;
  }
  return calc;
}

let average = createAverage();
console.log(average(2));
console.log(average(3));
console.log(average(4));
console.log(average(6));
console.log(average(5));
console.log(average(4));
console.log(average(7));
console.log(average(8));
