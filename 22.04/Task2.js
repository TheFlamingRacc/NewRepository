const arraySum = (a, position = 0) => {
    if (a.length > position) {
      return a[position] + arraySum(a, position + 1)
     } else {
      return 0
     }
  }
  alert(arraySum([1, 2, 3, 4, 5, 6, 7]));