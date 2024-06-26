function sumEvenIndexes(arr, index = 0) {
  let currentValue = index % 2 === 0 ? arr[index] : 0;
  if (index >= arr.length) {
    return 0;
  }

  return currentValue + sumEvenIndexes(arr, index + 1);
}

console.log(sumEvenIndexes([1, 2, 3, 4, 5, 6]));
