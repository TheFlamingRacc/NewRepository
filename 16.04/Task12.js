let arr = ["Hello", " ", "world", "!"];

let greeting = arr.reduce((acc, x) => {
  return acc + x;
}, "");

console.log(greeting);
