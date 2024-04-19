let obj = { name: "John", age: 30, country: "USA" };

let reversedObject = Object.entries(obj).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

console.log(reversedObject);
