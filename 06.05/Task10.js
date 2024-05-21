let users = [
  { name: "John", age: 17, color: "black" },
  { name: "Janet", age: 19 },
  { name: "Carl", age: 18, color: "white" },
];

const colorUsers = users.filter((x) => Object.keys(x).includes("color"));
console.log(colorUsers);