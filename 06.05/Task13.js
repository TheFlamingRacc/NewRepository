const users = [{ name: "John" }, { name: "Carl" }];

const addStatus = users.map((x) => {
  return { ...users, ["isNew"]: true };
});

console.log(addStatus);
