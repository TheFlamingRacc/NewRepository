const users = [{ name: "John", age: 19 }, { age: 98 }, { color: "blue" }];

const containsKeyAge = users.some((x) => Object.keys(x).includes("age"));

console.log(containsKeyAge);
