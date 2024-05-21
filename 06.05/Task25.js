let data = [
  { group: "A", value: "apple" },
  { group: "B", value: "banana" },
  { group: "A", value: "apricot" },
  { group: "C", value: "cherry" },
  { group: "B", value: "blueberry" },
  { group: "A", value: "avocado" },
];

let groupedData = data.reduce((acc, obj) => {
  let key = obj.group;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(obj);
  return acc;
}, {});

console.log(groupedData);
