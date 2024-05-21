const objects = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Tom" },
];

const allHaveAge = objects.every((obj) => obj.hasOwnProperty("age"));

console.log(allHaveAge);
