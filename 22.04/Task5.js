function createCounter() {
    let count = 0;
    function increment() {
      count++
      return count
    }
    return increment
  }
  const counter = createCounter();
  
  alert(counter());
  alert(counter());
  alert(counter());
  alert(counter());
  alert(counter());
  alert(counter());
  alert(counter());