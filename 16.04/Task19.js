let obj = { a: 10, b: 20, c: 30 };

let keys = Object.keys(obj);

if (keys.includes("b")) {
  console.log(true);
} else {
  console.log(false);
}
