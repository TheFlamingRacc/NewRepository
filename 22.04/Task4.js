const fibonacci = (arr = [0, 1]) => {
    const nextNumber = arr[arr.length - 1] + arr[arr.length - 2];
    if (nextNumber <= 987) {
      arr.push(nextNumber);
      return fibonacci(arr);
    } else {
      return arr;
    }
  };
  
  alert(fibonacci());
  