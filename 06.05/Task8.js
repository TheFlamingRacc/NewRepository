const users = [
  { name: "John", age: 19, colors: ["blue", "purple"] },
  { name: "Janet", age: 21, colors: ["white", "blue"] },
  { name: "Carl", age: 20, colors: ["black", "purple"] },
];

const purpleFans = users.filter((x) => x.colors.includes('purple'));

console.log(purpleFans);
