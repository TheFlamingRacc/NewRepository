const str = ["kjwhf", "wkjfhjeihf", "hello bro"];

const strSum = str.reduce((acc, x) => {
  return acc + x;
}, "");

console.log(strSum);
