const users = [
    { name: "John", age: 17 },
    { name: "Carl", age: 18 },
    { name: "Janet", age: 19 },
  ];
  
  const fullAgeUsers = users.filter((x) => x.age >= 18);
  
  console.log(fullAgeUsers);
  