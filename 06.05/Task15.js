let users = [
  { name: "John", age: 17 },
  { name: "Janet", age: 19 },
  { name: "Carl", age: 18 },
];

const newStructure = users.map((x) => {
  return {
    userName: x.name,
    userAge: x.age,
  };
});

console.log(newStructure);
