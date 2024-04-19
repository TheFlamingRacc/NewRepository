let users = [{ name: "John", age: 25 }, { name: "Jane", age: 30 }, { name: "Doe", age: 20 }];

let fullAgeUsers = users.filter(x=> x.age >= 25);
console.log(fullAgeUsers);