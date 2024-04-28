function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
  
  alert(gcd(12, 18)); 
  alert(gcd(14, 28)); 
  