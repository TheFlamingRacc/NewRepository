function countVowels(str) {
  let arr = str.split("");
  let vowels = ["A", "a", "E", "e", "U", "u", "I", "i", "O", "o", "Y", "y"];
  let counter = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (vowels.includes(arr[i])) {
      counter++;
    }
  }
  return counter;
}
alert(countVowels("Hello, World!"));
