let obj = { a: 10, b: 20, c: 30 };

let arr = Object.values(obj);

let sum = arr.reduce((acc, x) => {
    return acc + x;
}, 0);

console.log(sum);
