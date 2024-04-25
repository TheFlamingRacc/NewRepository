const inputNumberSum = (a, arr = a.split(), index = 0, sum = 0) => {
    if (arr.length - 1 === index) {
      return 1;
    } else {
      return inputNumberSum(a, arr = a.split(), index++, sum += arr[index])
    }
  }
  alert(inputNumberSum(123))