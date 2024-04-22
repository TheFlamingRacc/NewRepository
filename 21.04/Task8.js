function isPalindrome(str) {
  let originalStr = str.toLowerCase().split("").join("");
  let reversedStr = str.toLowerCase().split("").reverse().join("");
  return originalStr === reversedStr;
}

isPalindrome("mom");
