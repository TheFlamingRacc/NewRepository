const users = [
  { name: "John", age: 15 },
  { name: "Janet", age: 18 },
  { name: "Carlo", age: 17 },
  { name: "Shell", age: 21 },
];

function filterUsers(a) {
  return a.age >= 18;
}

let filtratedUsers = users.filter(filterUsers);

console.log(filtratedUsers);
