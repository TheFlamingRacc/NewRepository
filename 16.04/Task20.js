let keys = ["name", "age", "country"];

let object = keys.reduce((acc, x) => {
    acc[x] = ''; 
    return acc;
}, {});

console.log(object);
