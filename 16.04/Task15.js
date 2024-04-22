let obj1 = { name: "John" };
let obj2 = { age: 30 };
let obj3 = { country: "USA" };

let mergedObject = { ...obj1, ...obj2, ...obj3 };

console.log(mergedObject);

