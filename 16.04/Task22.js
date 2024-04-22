let users = {
    user1: { name: "John", age: 30 },
    user2: { name: "Jane", age: 25 },
    user3: { name: "Doe", age: 35 }
};

let totalAge = Object.values(users).reduce((acc, x) => {
    return acc + x.age
}, 0);

let averageAge = totalAge / Object.keys(users).length;

console.log(averageAge);
