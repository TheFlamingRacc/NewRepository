const list = [
  { category: "fruit" },
  { category: "fruit" },
  { category: "vegetable" },
];

const fruit = list.filter((x) => x.category === "vegetable");

console.log(fruit);
