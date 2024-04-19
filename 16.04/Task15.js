let arr = [{ name: "John" }, { age: 30 }, { country: "USA" }];

let oneObject = arr.reduce((acc, obj) => {
  for (let key in obj) {
    acc[key] = obj[key];
  }
  return acc;
}, {});

console.log(oneObject);
