function isPalindrome(str) {
    if (str.length <= 1) {
      return true;
    } else if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.slice(1, -1));
    } else {
      return false;
    }
  }
  
  alert(isPalindrome("radar")); 
  alert(isPalindrome("hello")); 
  