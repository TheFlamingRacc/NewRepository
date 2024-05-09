const assortment = [
  { name: "Apple", price: 10 },
  { name: "Banana", price: 50 },
  { name: "Orange", price: 60 },
];

const cheapFruits = assortment.filter((x) => x.price < 50);

console.log(cheapFruits);
