let obj = { name: "John", age: 30, country: "USA" };

let reversedObject = Object.entries(obj).reduce((acc, [key, value]) => {
    return { ...acc, [value]: key };
}, {});

console.log(reversedObject);
